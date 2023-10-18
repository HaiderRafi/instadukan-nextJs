"use client";

import { useObserver } from "mobx-react-lite";
import React from "react";
import CartStore from "../store/cartStore";
import { Button } from "antd";
import Footer from "../footer/Footer";
import EmptyCart from "../emptyCart/EmptyCart";

export default function Cart() {
  console.log(CartStore.travelInfo);

  const total = CartStore.items.reduce((acc, item) => acc + item.price, 0);

  //empty cart
  // if(CartStore.items.length===0){
  //   return <EmptyCart/>
  // }

  return useObserver(() => (
    <>
      <div className="flex justify-center items-center h-36  bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500">
        <div>
          <h1 className="text-4xl font-bold">Your Travel Cart ⛵</h1>
        </div>
      </div>

      <div className=" flex flex-col w-full h-full">
        <div className="flex justify-evenly pt-5">
          <button
            onClick={() => window.history.back()}
            className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
          >
            BACK
          </button>
          <button
            className="p-2 m-4 bg-gray-800 text-white"
            onClick={() => {
              CartStore.clearCart();
              CartStore.clearInfo();
            }}
          >
            Clear Cart
          </button>
        </div>
        <div className="flex flex-col justify-center items-center pb-6">
          <div className=" flex flex-col border border-dotted shadow-lg  w-[50%] h-[100%]">
            <h1 className="font-semibold text-3xl p-2 m-2 ">Total Items</h1>
            {CartStore.items.map((data) => {
              return (
                <>
                  <h1 className="font-medium text-base pl-2  ">
                    &#9658;{data.name}:- RS {data.price}
                  </h1>
                </>
              );
            })}
            <hr></hr>

            <h1 className="font-semibold text-3xl p-2 m-2">Bill Details</h1>
            <div className="flex justify-around">
              <div>
                <h1 className="text-sm">Name</h1>
                <h1 className="text-sm">Email Address</h1>
                <h1 className="text-sm">Age</h1>
                <h1 className="text-sm">Gender</h1>
                <h1 className="text-sm">No of Passengers</h1>
                <hr></hr>
                <h1 className="font-semibold">TO PAY</h1>
              </div>
              <div>
                {CartStore.travelInfo.map((data) => {
                  return (
                    <>
                      <h1 className="text-sm">{data.username}</h1>
                      <h1 className="text-sm">{data.email}</h1>
                      <h1 className="text-sm">{data.age}</h1>
                      <h1 className="text-sm">{data.gender}</h1>
                      <h1 className="text-sm">{data.passenger}</h1>
                      <h1 className="text-sm">{total * data.passenger}</h1>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ));
}
