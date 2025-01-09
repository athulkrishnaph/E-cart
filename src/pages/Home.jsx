import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[])

  return (
    <>
          <Header insideHome={ true} />
          <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
              <div className="grid grid-cols-4 gap-4">
                  <div className="rounded border p-2 shadow">
                      <img src="https://static.vecteezy.com/system/resources/previews/002/300/734/non_2x/cartoon-illustration-of-supermarket-grocery-cart-with-healthy-organic-food-isolated-on-white-background-vector.jpg" alt="" />
                      <div className="text-center">
                          <h3 className="text-xl font-bold">Product name</h3>
                          <Link to={"/id/view"} className="bg-violet-600 rounded p-1 mt-3 text-white inline-block">View More...</Link>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
};

export default Home;
