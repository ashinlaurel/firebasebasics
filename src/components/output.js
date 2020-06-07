import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const SORT_OPTIONS = {
  NAME_ASC: { column: "name", direction: "asc" },
  NAME_DESC: { column: "name", direction: "desc" },
};

const Getdata = (sortBy = "NAME_ASC") => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("orderdata")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newOrder = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));

        setOrder(newOrder);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return order;
};

const Output = () => {
  const [sortBy, setSortBy] = useState("NAME_ASC");
  const order = Getdata(sortBy);

  return (
    <div>
      <div className="ml-32 text-4xl">RealTime Orders Update</div>
      {/* <div className="my-5">
        <label className="m-5">Sort By:</label>
        <select className="bg-gray-600 bg-opacity-25 px-3 py-1 outline-none border border-gray-700 text-gray-800 rounded-lg">
          <option className="bg-gray-600 bg-opacity-25 px-3 py-1 outline-none border border-gray-700 text-gray-800 rounded-lg">
            Name (a-z)
          </option>
        </select>
      </div> */}
      <div className="flex items-center m-5">
        <div className="text-lg"> Sort By :</div>
        <div class="relative w-40 outline-none">
          <select
            class="block appearance-none w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-200 "
            id="grid-state"
            value={sortBy}
            onChange={(e) => setSortBy(e.currentTarget.value)}
          >
            <option value="NAME_ASC">Name (A-Z)</option>
            <option value="NAME_DESC">Name (Z-A)</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-2xl m-5">Orders:</div>
      <table class="table-auto border border-gray-500">
        <thead>
          <tr>
            <th class="px-4 py-2 border border-gray-500">Name</th>
            <th class="px-4 py-2 border border-gray-500">Phone</th>
            <th class="px-4 py-2 border border-gray-500">Email</th>
            <th class="px-4 py-2 border border-gray-500">Company</th>
            <th class="px-4 py-2 border border-gray-500">Order</th>
          </tr>
        </thead>
        <tbody>
          {order.map((doc) => (
            <tr>
              <td class="border px-4 py-2 border border-gray-500">
                {doc.name}
              </td>
              <td class="border px-4 py-2 border border-gray-500">
                {doc.phone}
              </td>
              <td class="border px-4 py-2 border border-gray-500">
                {doc.email}
              </td>
              <td class="border px-4 py-2 border border-gray-500">
                {doc.companyname}
              </td>
              <td class="border px-4 py-2 border border-gray-500">
                {doc.orders}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ol>
        {order.map((i) => (
          <li>
            <div>{i.name}</div>
            <div>{i.phone}</div>
          </li>
        ))}
      </ol> */}
    </div>
  );
};

export default Output;
