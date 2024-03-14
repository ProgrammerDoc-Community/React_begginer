import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); // Get token from localStorage

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://127.0.0.1:8000/api/products/", {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "Error fetching products");
          console.error("Error:", errorData);
          return;
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("An error occurred while fetching products.");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchProducts();
    } // Only fetch if token exists
  }, [token]); // Re-run useEffect on token change

  return (
    <div>
      {isLoading && <p>Loading products...</p>}
      {error && <p className="error-message">{error}</p>}
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
      {products.length === 0 && !isLoading && <p>No products found.</p>}
    </div>
  );
};

export default ProductList;
