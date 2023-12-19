"use client";

import React, { useState, useEffect } from "react";
import style from "./layout.module.scss";

export default function AdminPage() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [productId, setProductId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  interface Product {
    id: string;
    title: string;
    price: string;
    description: string;
    image: string;
  }

  useEffect(function () {
    fetchAllProducts();
  }, []);

  function fetchAllProducts() {
    fetch("/products/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (result.status === 200) {
          setProducts(result.data);
        } else {
          setErrorMessage(result.error);
        }
      })
      .catch(function (error) {
        console.error("Error fetching products:", error);
      });
  }

  function handleAddProduct() {
    try {
      if (!title || !price || !description || !image) {
        setErrorMessage("All fields are required");
        return;
      }

      fetch("/products/add.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          description,
          image,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          if (result.status === 200) {
            console.log(result.message);

            setTitle("");
            setPrice("");
            setDescription("");
            setImage("");
            setErrorMessage(null);
          } else {
            setErrorMessage(result.error);
          }
        })
        .catch(function (error) {
          console.error("Error adding product:", error);
        });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  function handleModifyProduct() {
    try {
      if (!productId || (!title && !price && !description && !image)) {
        setErrorMessage(
          "Product ID and at least one parameter (title, price, description, image) should be provided for modification",
        );
        return;
      }

      fetch("/products/modify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productId,
          title,
          price,
          description,
          image,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          if (result.status === 200) {
            console.log(result.message);

            setProductId("");
            setTitle("");
            setPrice("");
            setDescription("");
            setImage("");
            setErrorMessage(null);
          } else {
            setErrorMessage(result.error);
          }
        })
        .catch(function (error) {
          console.error("Error modifying product:", error);
        });
    } catch (error) {
      console.error("Error modifying product:", error);
    }
  }

  function handleRemoveProduct() {
    try {
      if (!productId) {
        setErrorMessage("Product ID should be provided for removal");
        return;
      }

      fetch("/products/remove.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pid: productId,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          if (result.status === 200) {
            console.log(result.message);

            setProductId("");
            setErrorMessage(null);
          } else {
            setErrorMessage(result.error);
          }
        })
        .catch(function (error) {
          console.error("Error removing product:", error);
        });
    } catch (error) {
      console.error("Error removing product:", error);
    }
  }

  return (
    <div className={style.container}>
      <h2>Add Product</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={function (e) {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={function (e) {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={function (e) {
            setImage(e.target.value);
          }}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>

      <h2>Modify Product</h2>
      <div>
        <label>Product ID:</label>
        <input
          type="text"
          value={productId}
          onChange={function (e) {
            setProductId(e.target.value);
          }}
        />
      </div>
      <button onClick={handleModifyProduct}>Modify Product</button>

      <h2>Remove Product</h2>
      <div>
        <label>Product ID:</label>
        <input
          type="text"
          value={productId}
          onChange={function (e) {
            setProductId(e.target.value);
          }}
        />
      </div>
      <button onClick={handleRemoveProduct}>Remove Product</button>

      <h2>View All Products</h2>
      <ul>
        {products.map(function (product) {
          return (
            <li key={product.id}>
              {product.title} - {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
