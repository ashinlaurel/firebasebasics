import React, { useEffect, useState } from "react";
import firebase from "../firebase";

const Orderform = (props) => {
  const defform = {
    name: "",
    phone: "",
    email: "",
    companyname: "",
    orders: "",
  };

  const [values, setValues] = useState(defform);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.addOrEdit(values);
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection("orderdata").add({
      name: values.name,
      phone: values.phone,
      email: values.email,
      companyname: values.companyname,
      orders: values.orders,
    });
    setValues(defform);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl mb-10 font-serif text-gray-800 ">Order Form</div>
      <div className="flex flex-col items-center">
        <form className=" w-1/3" autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label
              for="name"
              className=" text-xl uppercase text-gray-900 font-bold "
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 outline-none px-4 shadow-lg m-2 w-64 rounded py-1"
              onChange={handleInput}
              value={values.name}
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              for="email"
              className=" text-xl uppercase text-gray-900 font-bold "
            >
              Email:
            </label>
            <input
              type="textemail"
              name="email"
              className="border border-gray-300  outline-none px-4 shadow-lg m-2 w-64 rounded py-1"
              onChange={handleInput}
              value={values.email}
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              for="phone"
              className=" text-xl uppercase text-gray-900 font-bold "
            >
              Phone:
            </label>
            <input
              type="tel"
              name="phone"
              className="border border-gray-300  outline-none px-4 shadow-lg m-2 w-64 rounded py-1"
              onChange={handleInput}
              value={values.phone}
            />
          </div>
          <div className="flex flex-col items-center ">
            <label
              for="companyname"
              className=" text-xl uppercase text-gray-900 font-bold border"
            >
              Company Name:
            </label>
            <input
              type="text"
              name="companyname"
              className="border border-gray-300  outline-none px-4 shadow-lg m-2 w-64 rounded py-1"
              onChange={handleInput}
              value={values.companyname}
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              for="orders"
              className=" text-xl uppercase text-gray-900 font-bold "
            >
              Orders:
            </label>
            <textarea
              type="text"
              name="orders"
              className="border border-gray-300 outline-none px-4 shadow-lg m-2 w-64 rounded py-1 "
              onChange={handleInput}
              value={values.orders}
            />
          </div>
          <div>
            <input
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-gray-100 px-2 py-1 rounded-lg m-5"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orderform;
