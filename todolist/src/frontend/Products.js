import React, { useState, useEffect } from "react";

// Import Login component (replace with your actual path)
import Login from './Login'; // Adjust the path if needed

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const token = localStorage.getItem("token"); // Access token from localStorage

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
          const errorData = await response.json();
          throw new Error(errorData.message || "Error fetching products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching products.");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchProducts();
    }
  }, []); // Run only once on component mount

  return (
    <div>
      {loggedIn ? (
        <>
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
        </>
      ) : (
        <Login onLogin={() => setLoggedIn(true)} /> // Set loggedIn on successful login
      )}
    </div>
  );
};

export default Products;
