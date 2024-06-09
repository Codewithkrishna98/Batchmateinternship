/* eslint-disable react/prop-types */
import logo from "../photos/logo.png";
import star from "../photos/star.png";
// import logo1 from "../photos/1.png";

const Navbar = () => {
  return (
    <>
      <nav
        className=" w-full pr-10 pl-10 flex text-center gap-10  justify-between h-[100px] "
        
      >
        <div  className="     h-full font-bold text-center  text-gray-700  p-8 flex  justify-center">
          <div  className=" flex gap-6">
            <div  className=" flex justify-center text-center mr-10">
              <img src={logo} alt="logo" className="    w-11 " />

              <span  className=" text-2xl font-bold ">uifry</span>
            </div>
            <div  className=" spannav">
              <span className=" hover:text-red-500 cursor-pointer">Home</span>
              <span className=" hover:text-red-500 cursor-pointer">About</span>
              <span className=" hover:text-red-500 cursor-pointer">Price</span>
              <span className=" hover:text-red-500 cursor-pointer">
                Feature
              </span>
            </div>
          </div>
        </div>
        <div className=" gap-10 flex justify-center h-[100px]  ml-10 p-6 text-center ">
          <button className=" bg-black  pl-10 pr-10 rounded-md hover:bg-gray-800 text-white cursor-pointer">
            Download
          </button>
          
          <div className=" h-full  pt-5">
            <img src={star} className=" w-[70px]   " />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
