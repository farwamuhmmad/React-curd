import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../features/userSlice";
import Card from "./Card";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    // Action creator function ko call karein
    dispatch(userData());
  }, []);

  console.log(data);

  return (
    <div>
      {/* Card component ko sahi tarah se pass karein */}
      <Card data={data} loading={loading} error={error} />
    </div>
  );
};

export default Products;
