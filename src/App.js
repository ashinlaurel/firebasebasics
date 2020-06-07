import React from "react";
import Orders from "./components/orders";
// import firebase from "./firebase";

function App() {
  return (
    <div className="bg-blue-100 h-screen">
      <div className="text-center text-6xl">Orders Realtime Refresh</div>
      <Orders />
    </div>
  );
}

export default App;
