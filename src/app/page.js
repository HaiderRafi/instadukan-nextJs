"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  Select,
} from "antd";
import { useObserver } from "mobx-react-lite";
import CartStore from "./store/cartStore";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { COUNTRY_LIST } from "./utils/constants";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add a flag to track if the modal has been opened
  const [modalOpened, setModalOpened] = useState(false);

  // const [selectedDateRange, setSelectedDateRange] = useState(null);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    setIsModalOpen(false);
    // console.log(values);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
    CartStore.userInitialInfo(values); //sending data to cart
  };

  //initilizing and calling api function to fetch data
  useEffect(() => {
    async function fetchProducts() {
      const temp = await fetch(
        "https://haiderrafi.github.io/instadukan_ferry/instadukan_ferry.json"
      );
      const data = await temp.json();
      setProducts(data);
      // console.log(data);
    }
    fetchProducts();
  }, []);

  // if(products.length===0){
  //   return <h1>Loading...</h1>
  // }

  //using useObserver to keep track
  return useObserver(() => (
    <>
      <Header />
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
                products.map((product,index) => (
                  <Card key={index} className="m-2" style={{ width: 300 }}>
                    <img className="" src={product?.image} />
                    <p>{product?.name}</p>
                    <p>About:{product?.description}</p>
                    <p>Price: {product?.price}</p>
                    <Button
                      onClick={() => {
                        // setIsModalOpen(true);
                        if (!modalOpened) {
                          // setModalOpened(true);
                          setIsModalOpen(true);
                        }
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

            {/* conditional rendering for modal */}
            {CartStore.travelInfo.length === 0 && (
              <Modal
                title="Passengers Information"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  {/* input for userName */}
                  <Form.Item label="Username" name="username">
                    <Input />
                  </Form.Item>

                  {/* input for email */}
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Please enter a valid email address",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  {/* input for age  */}
                  <Form.Item label="Age" name="age">
                    <Input type="number" />
                  </Form.Item>

                  {/* input for number of pasangers */}
                  <Form.Item label="Passenger" name="passenger">
                    <Input type="number" />
                  </Form.Item>

                  {/* input for data range */}
                  <Form.Item label="Password" name="date">
                    <DatePicker.RangePicker />
                  </Form.Item>

                  {/* input for gender */}
                  <Form.Item label="Gender" name="gender">
                    <Select>
                      <Select.Option value="male">Male</Select.Option>

                      <Select.Option value="female">Female</Select.Option>

                      <Select.Option value="other">Others</Select.Option>
                    </Select>
                  </Form.Item>

                  {/* country list */}
                  <Form.Item label="Country" name="countries">
                    <Select>
                      {COUNTRY_LIST.map((data, index) => {
                        return (
                          <Select.Option key={index} value={data}>
                            {data}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>

                  {/* submit button */}
                  <Form.Item>
                    <Button
                      onClick={handleOk}
                      className="bg-blue-700"
                      type="primary"
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  ));
}
