import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const DataContext = createContext();
function Context({ children }) {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: "Groovy CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382642/food7_ssjhpm.jpg",
  //     price: 70,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "PRO CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382643/eat_2_ka3a1u.jpg",
  //     price: 75,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },

  //   {
  //     id: 3,
  //     name: "Blubo CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382643/food6_geoufu.jpg",
  //     price: 80,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "PRO CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382650/food5_qjzgq4.jpg",
  //     price: 75,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  //   {
  //     id: 5,
  //     name: "SCARE CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382650/food4_tdapjf.jpg",
  //     price: 75,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "SCARE CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382649/food2_srqzcd.jpg",
  //     price: 75,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  //   {
  //     id: 7,
  //     name: "SCARE CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382649/food10_xcf7rf.jpg",
  //     price: 75,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  //   {
  //     id: 8,
  //     name: "SCARE CAT ",
  //     image:
  //       "https://res.cloudinary.com/drxjpp8aw/image/upload/v1716382648/food3_bggh3u.jpg",
  //     price: 75,
  //     description:
  //       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias delectus voluptatibus sunt perferendis aperiam totam? Magnam necessitatibus amet obcaecati veniam id possimus itaque assumenda laudantium, voluptatum distinctio! Ipsam, consequuntur",
  //     count: 1,
  //   },
  // ]);
  const [products, setProducts] = useState([]);
  const [productFave, setProductFave] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    // console.log(product.id)
    const productFind = cart.findIndex((p) => p.id === product.id);
    if (productFind !== -1) {
      console.log("موجود");
      // clone
      const addCart = [...cart];
      // edit
      addCart[productFind].count += 1;
      // update
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(addCart));
    } else {
      console.log("مش موجود");
      const addCart = [...cart, { ...product, count: 1 }];
      setCart(addCart);

      localStorage.setItem("cart", JSON.stringify(addCart));
    }
    // console.log({ ...product, count: 1 });
  };
  const changeQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      const DeleteItem = cart.filter((product) => product.id !== id);
      setCart(DeleteItem);
      localStorage.setItem("cart", JSON.stringify(DeleteItem));
    } else {
      // تحديث كمية المنتج إذا كانت الكمية الجديدة أكبر من 0
      const updatedCart = cart.map((product) => {
        if (product.id === id) {
          return { ...product, count: newQuantity };
        }
        return product;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };
  const addProductToFavorite = (product) => {
    // console.log(product)
    const productFind = productFave.findIndex((p) => p.id === product.id);
    if (productFind !== -1) {
      // clone
      const prodFve = [...productFave];

      setProductFave(prodFve);
      localStorage.setItem("favoriteProduct", JSON.stringify(productFave));
    } else {
      const newProFave = [...productFave, product];
      setProductFave(newProFave);
    }
    // localStorage.setItem("favoriteProduct", JSON.stringify(productFave));
  };

  return (
    <DataContext.Provider
      value={{
        products,
        addToCart,
        cart,
        changeQuantity,
        addProductToFavorite,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default Context;
