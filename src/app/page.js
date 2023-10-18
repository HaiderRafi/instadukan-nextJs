"use client";

import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { useObserver } from "mobx-react-lite";
import CartStore from "./store/cartStore";
import Link from "next/link";
import Header from "./header/Header";



export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const temp = await fetch("https://haiderrafi.github.io/instadukan_ferry/instadukan_ferry.json");
      const data = await temp.json();
      setProducts(data);
      // console.log(data);
    }
    fetchProducts();
  }, []);


  return useObserver(() => (
    <>
    <Header/>
    <main>
        <div>
          <div className="flex items-center justify-evenly pt-10 pb-10 font-bold text-lg">
            <p>Island Paradise</p>
            <p>Nature's Beauty</p>
            <p>Ocean Escapes</p>
            <p>Andaman Wonders</p>
          </div>

          <div className="flex justify-center">
            <div className="w-[50%] flex flex-wrap justify-around p-2 m-2 ">
              {products &&
                products.map((product) => (
                  <Card className="m-2" style={{ width: 300 }}>
                    <img className="" src={product?.image} />
                    <p>{product?.name}</p>
                    <p>About:{product?.description}</p>
                    <p>Price: {product?.price}</p>
                    <Button
                      onClick={() => {
                        CartStore.addToCart(product);
                      }}
                      className="bg-green-600"
                      type="success"
                    >
                      Add to Cart
                    </Button>
                  </Card>
                ))}
            </div>
            
          </div>
        </div>
      </main>
    </>
  ))
}
