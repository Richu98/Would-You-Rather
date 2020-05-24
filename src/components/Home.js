import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return <div>Hello, {currentUser.id}!</div>;
};

export default Home;
