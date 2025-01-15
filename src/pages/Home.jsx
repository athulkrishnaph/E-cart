import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );
  console.log(allProducts, loading, errorMsg);

  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productPerPage)
  const currentPageProductLastIndex = currentPage * productPerPage
  const currentPageProductFirsttIndex = currentPageProductLastIndex - productPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirsttIndex,currentPageProductLastIndex)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  const navigationToNextPage = () => {
    if (currentPage != totalPages) {
    setCurrentPage(currentPage+1)
  }
  }
  
  const navigationToPrevioustPage = () => {
    if (currentPage != 1) {
    setCurrentPage(currentPage-1)
  }
}


  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: "100px" }} className="container px-4 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center my-5 text-lg">
            <img
              width={"70px"}
              height={"70px"}
              src="https://media1.giphy.com/media/KG4PMQ0jyimywxNt8i/200w.gif?cid=82a1493b5cw764c1nndwfzr5k0yqsmp2s5bs2almidrcsla2&ep=v1_gifs_related&rid=200w.gif&ct=g"
              alt=""
            />
            Loading...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4">
              {allProducts?.length > 0 ? (
                visibleAllProducts?.map((product) => (
                  <div key={product?.id} className="rounded border p-2 shadow">
                    <img
                      width="100%"
                      height="200px"
                      src={product?.thumbnail}
                      alt=""
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{product?.title}</h3>
                      <Link
                        to={`/${product?.id}/view`}
                        className="bg-violet-600 rounded p-1 mt-3 text-white inline-block"
                      >
                        View More..
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center item-center font-bold text-red-600 my-5 text-lg">
                  Product not found !!!
                </div>
              )}
              </div>
              <div className='grid grid-cols-4 gap-4'>
</div>
<div className='text-2xl text-center font-bold mt-20'>
  <span onClick={navigationToPrevioustPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
  <span>{currentPage} of {totalPages}</span>
  <span onClick={navigationToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
</div>

          </>
        )}
      </div>
    </>
  );
};

export default Home;
