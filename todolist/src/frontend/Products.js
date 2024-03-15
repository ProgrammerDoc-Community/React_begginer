import React, { useState, useEffect } from "react";

const Products = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://your-backend-api/api/products/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
            console.log(error)
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error:");
      } 
    };

    if (token) {
      fetchProducts();
    } else {
      setError("Please log in to view products"); // Handle missing token
    }
  }, [token]);

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

export default Products;
