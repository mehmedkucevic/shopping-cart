import React, { createContext, useState } from "react";
import productsJSON from "../common/products.json";
import { toast } from "react-hot-toast";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    if (products.find((product) => product.id === id).quantity === 0) {
      toast.error("There are no product in stock!");
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart((prev) => [
        ...prev,
        {
          ...products.find((product) => product.id === id),
          quantityInCart: 1,
        },
      ]);
      toast.success("Successfully added to cart!");
    }
  };

  const deleteFromCart = (id) => {
    const quantityInCart = cart.find(
      (product) => product.id === id
    ).quantityInCart;
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantityInCart,
          };
        } else {
          return product;
        }
      })
    );
    setCart(() => {
      const newCart = cart.filter((product) => product.id !== id);
      return newCart;
    });
    toast.success("Successfully deleted from cart!");
  };

  const increase = (id) => {
    const product = products.find((product) => product.id === id);
    if (product.quantity > 0) {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantityInCart: product.quantityInCart + 1,
            };
          } else {
            return product;
          }
        })
      );
    } else {
      toast.error("There are no product in stock!");
    }
  };

  const decrease = (id) => {
    const product = cart.find((product) => product.id === id);
    if (product.quantityInCart === 1) {
      deleteFromCart(id);
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantityInCart: product.quantityInCart - 1,
            };
          } else {
            return product;
          }
        })
      );
    }
  };

  const values = {
    products,
    setProducts,
    cart,
    addToCart,
    deleteFromCart,
    increase,
    decrease,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };