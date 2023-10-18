"use client";

import { useObserver } from "mobx-react-lite";
import React from "react";
import CartStore from "../store/cartStore";
import { Modal, Form, Input, Button } from "antd";

export default function Cart() {
  const showModal = () => {
    // Implement your modal logic here
  };

  const onFinish = (values) => {
    // Handle passenger information and checkout here
  };

//   console.log(CartStore.items);

  return useObserver(() => (
    <>
      <h1>Shopping Cart</h1>
      {CartStore.items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}

      <Button onClick={showModal}>Checkout</Button>
      <Button onClick={() => CartStore.clearCart()}>Clear Cart</Button>
      {/* <Button onClick={() => CartStore.clearCart()}>Clear Cart</Button> */}
      <Modal
        title="Passenger Information"
        visible={false}
        onOk={onFinish}
        onCancel={showModal}
      >
        <Form name="passenger_info" onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  ));
}