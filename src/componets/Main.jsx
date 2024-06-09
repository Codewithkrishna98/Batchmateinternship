import mob1 from "../photos/mob1.png";
import star from "../photos/star.png";
import stripe from "../photos/stripe.png";
import { motion } from "framer-motion";
import { IoMdPlay } from "react-icons/io";
import Typewriter from "typewriter-effect";
import { MdArrowRightAlt } from "react-icons/md";
const Main = () => {
  return (
    <div className=" flex gap-2  mt-6 ">
      <div className=" p-4 justify-center firstdiv w-[50%] h-full   flex flex-col">
        <img src={star} className="  w-16" />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="  flex  w-[80%] flex-col  ml-10 justify-start"
        >
          <div className=" flex flex-row">
            <span className=" mt-10  text-5xl span2 font-extrabold ">Make</span>
            <span className=" span1 mt-10 ml-5 text-5xl font-extrabold ">
              the Best
            </span>
          </div>
          <span className="   text-5xl font-extrabold ">
            Financial Decisions
          </span>
        </motion.div>

        <Typewriter
          options={{
            strings: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "Start Your Journey now asap",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName:"typewriter"
          }}
        />
        {/* <span className=" text-sm  ml-10 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          temporibus exercitationem officiis architecto autem porro voluptas at
          dolore rem rerum temporibus exercitationem.
          
        </span> */}

        <div className=" mt-5 gap-5 ml-10 w-full flex flex-row  ">
          <button className=" hover:bg-gray-900 flex flex-row justify-center gap-2  pr-8 pl-8 pt-3 pb-3 bg-black text-white  rounded-md">
            Get Started
            <MdArrowRightAlt className=" text-white  text-2xl font-semibold" />
          </button>
          <div className=" ml-10   p-2 pl-3 flex  justify-center w-10 h-10 rounded-full   circle">
            <IoMdPlay className=" text-2xl " />
          </div>
          <h2 className=" text-2xl heading2">Watch Video</h2>
        </div>

        <div className=" w-[90%] h-[300px] ">
          <img src={stripe} className=" w-full h-full  bg-cover" />
        </div>
      </div>
      <div className=" w-[50%] divsecond  flex p-7 h-full ">
        <div className="    rounded-xl div1 w-[200px] h-[400px] ">
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={mob1} className=" w-full h-full bg-cover" />
          </motion.div>
        </div>
        <div className=" rounded-xl div2 mt-5 w-[200px] h-[400px]  ">
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="img2"
          >
            <img src={mob1} className=" w-full h-full bg-cover" />
          </motion.div>
        </div>
        <div className=" rounded-xl div3 w-[200px] h-[400px]  ">
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <img src={mob1} className=" w-full h-full bg-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
