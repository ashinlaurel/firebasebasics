import React from "react";
import Orderform from "./orderform";
import firebase from "../firebase";
import Output from "./output";

const Orders = () => {
  // const addOrEdit = (obj) => {
  //   const db = firebase.firestore();
  //   db.settings({
  //     timestampsInSnapshots: true,
  //   });
  //   db.collection("users").add({ obj });
  // };

  return (
    <div className="flex flex-row ">
      <div className="w-1/3 ">
        <Orderform />
      </div>
      <div className="w-2/3  ">
        <Output />
      </div>
    </div>
  );
};

export default Orders;
