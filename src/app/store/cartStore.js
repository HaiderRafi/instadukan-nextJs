import { makeAutoObservable } from "mobx";
import React from "react";
import { useObserver } from "mobx-react-lite";

class CartStore {
  items = []; // An array to store the products added to the cart.
  travelInfo = []; //for initial information

  constructor() {
    makeAutoObservable(this);
  }

  // A method to add a product to the cart.
  addToCart(product) {
    this.items.push(product);
  }

  //for clearing the cart
  clearCart() {
    this.items = [];
  }

  //for initial info through modal
  userInitialInfo(values) {
    this.travelInfo = [values];
  }

  //for clearing initial info
  clearInfo() {
    this.travelInfo = [];
  }
}

export default new CartStore();
