import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import pointdown from "../assets/pointdown.gif";
import { RiArrowRightLine } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import home1 from "../assets/home1.jpg";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage >= 5 ? 1 : prevImage + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getImageUrl = () => {
    switch (currentImage) {
      case 1:
        return "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg";
      case 2:
        return "https://cdn.pixabay.com/photo/2017/07/16/11/57/fried-2509089_1280.jpg";
      case 3:
        return "https://cdn.pixabay.com/photo/2019/10/10/07/16/pizza-4538925_1280.jpg";
      case 4:
        return "https://cdn.pixabay.com/photo/2020/02/19/05/10/doodle-4861309_1280.jpg";
      case 5:
        return "https://cdn.pixabay.com/photo/2016/02/16/07/39/pizza-1202775_1280.jpg";
      default:
        return "";
    }
  };

  return (
    <div className="">
      <div
        className={`bg-no-repeat z-10 -mt-[70px] lg:-mt-[100px] 2xl:-mt-[200px] w-full bg-cover bg-center h-full pt-[100px] pb-[200px] md:py-[120px] lg:py-[180px] 2xl:py-[300px] px-[3%] lg:px-[5%] xl:px-[10%] relative  md:rounded-b-[500%] `}
        style={{
          backgroundImage: `url(${getImageUrl()})`,
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="">
          <div className="flex justify-center">
            <h4 className="text-white text-[25px]  lg:text-[40px] font-[600]  text-center md:w-[60%] bg-primary p-[20px] rounded-full px-[15px]">
              Discover restaurants and more near you.
            </h4>
          </div>
          <div className="mx-auto mt-[30px] relative w-full sm:w-[400px]">
            <IoLocationOutline className="absolute top-1/2 transform -translate-y-1/2 left-[14px] text-[20px]" />
            <input
              className="bg-white rounded-full w-full sm:w-[400px] py-[14px] px-[40px] focus:outline-none  focus:border-orange-500  focus:border-2 placeholder:text-gray-800 placeholder:text-[12px] text-[12px]"
              placeholder="Enter delivery address"
            />
            <button className="flex justify-center items-center absolute bg-primary hover:bg-orange-600 w-[35px] h-[35px] rounded-full right-[8px] top-1/2 transform -translate-y-1/2">
              <RiArrowRightLine className="text-white text-[20px]" />
            </button>
          </div>
          <div className="flex justify-center">
            <h4 className="text-white font-[500]  mt-[40px] text-[16px] text-semibold lg:text-[24px] text-center tracking-[1px] md:w-[70%] bg-primary p-[20px] rounded-full ">
              At SpringFare, we are passionate about creating innovative
              solutions to food delivery that can shape the future of our world.
            </h4>
          </div>
        </div>

        <div className="absolute xl:bottom-[10px] md:-bottom-[15px] bottom-[20px]  left-1/2 transform -translate-x-1/2 ">
          <h4 className="text-white text-[12px] lg:text-[24px] lg:font-semibold text-center">
            Scroll Down
          </h4>
          <img className="w-[250px]" src={pointdown} />
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:py-[88px] py-[24px] md:py-[40px] ">
        <h4 className="text-[22px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-medium md:w-[70%] text-gray-900 leading-[40px] lg:leading-[60px] transform skew-y-12 mt-[30px] sm:mt-[80px] md:mt-[0px]">
          Food is our common ground, a universal experience.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-[80px] md:gap-[50px] gap-[15px] mt-[50px] md:mt-[80px] px-[8%] lg:px-[5%] xl:px-[10%]">
          <div className="flex flex-col">
            <h4 className="mt-[12px] text-[20px] xl:text-[30px] lg:text-[24px] font-[600] text-center">
              Become a Rider
            </h4>
            <h4 className="mt-auto text-[12px] lg:text-[18px] text-center md:leading-[30px] pt-[10px] font-[500]">
              As a delivery driver, you'll make reliable money—working anytime,
              anywhere.
            </h4>
            <button className="flex items-center gap-[15px] justify-center mt-[20px]">
              <h4 className="text-[18px] font-[600] text-primary hover:text-orange-600">
                Start earning
              </h4>{" "}
              <HiArrowNarrowRight className="text-primary text-[25px]" />
            </button>
          </div>

          <div className="flex flex-col">
            <h4 className="mt-[12px] text-[20px] xl:text-[30px] lg:text-[24px] font-[600] text-center">
              Become a Partner
            </h4>
            <h4 className="mt-auto text-[12px] lg:text-[18px] text-center md:leading-[30px] pt-[10px] font-[500]">
              Grow your business and reach new customers by partnering with us.
            </h4>
            <button className="flex items-center gap-[15px] justify-center mt-[20px]">
              <h4 className="text-[18px] font-[600] text-primary hover:text-orange-600">
                Sign up your store
              </h4>{" "}
              <HiArrowNarrowRight className="text-primary text-[25px]" />
            </button>
          </div>

          <div className="flex flex-col">
            <h4 className="mt-[12px] text-[20px] xl:text-[30px] lg:text-[24px] font-[600] text-center">
              Springfare experience
            </h4>
            <h4 className="mt-auto text-[12px] lg:text-[18px] text-center md:leading-[30px] pt-[10px] font-[500]">
              Sign up to experience the best your neighborhood has to offer.
            </h4>
            <button className="flex items-center gap-[15px] justify-center mt-[20px]">
              <h4 className="text-[18px] font-[600] text-primary hover:text-orange-600">
                Customer sign up
              </h4>{" "}
              <HiArrowNarrowRight className="text-primary text-[25px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[50px] xl:gap-[70px] gap-[33px] py-[12px] md:pb-[20px] xl:pb-[40px] items-center px-[3%] lg:px-[5%] xl:px-[10%]">
        <div className="">
          {" "}
          <img src={home1} />
        </div>
        <div className="">
          <h4 className="text-[24px] lg:text-[38px] font-semibold mb-[15px]">
            Everything you crave, delivered.
          </h4>
          <h4 className="text-[20px] lg:text-[28px] font-semibold mb-[10px]">
            Your favorite local restaurants
          </h4>
          <h4 className="lg:text-[22px] text-[12px]">
            Busy? Get food at the speed of a click, delivered fresh to your
            door.
          </h4>
          <button className="text-[12px] text-white bg-primary hover:bg-orange-600 px-[14px] py-[8px] rounded-full font-[500] md:mt-[30px] mt-[15px]">
            Find restaurants
          </button>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[10%] xl:pb-[40px] pb-[30px] md:pb-[20px] bg-orange-100  md:pt-[150px] md:-mt-[120px] pt-[330px] -mt-[300px] ">
        <div className="md:grid grid-cols-2 lg:gap-[50px] xl:gap-[70px] gap-[33px] items-center">
          <div className="order-2">
            {" "}
            <img src={home1} />
          </div>
          <div className="order-1">
            <h4 className="text-[24px] lg:text-[38px] font-semibold mb-[15px]">
              Grow your business with SpringFare
            </h4>

            <h4 className="lg:text-[22px] text-[12px]">
              Businesses large and small partner with SpringFare to reach new
              customers, increase order volume, and drive more sales.
            </h4>
            <button className="text-[12px] text-white bg-primary hover:bg-orange-600 px-[14px] py-[8px] rounded-full font-[500] md:mt-[30px] mt-[15px]">
              Become a Partner
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-[35px] xl:mt-[60px] gap-[30px] lg:gap-[50px] xl:gap-[60px] items-start">
          <div>
            <h4 className=" text-[40px] font-medium lg:text-[60px] 2xl:text-[100px] md:border-r-[2px] md:border-gray-200 md:flex justify-center">
              99.9%
            </h4>
            <h4 className="text-[12px] lg:text-[18px] 2xl:text-[22px]  font-medium md:flex justify-center  md:text-center">
              No excuses, on time delivery. Fast food is our specialty.
            </h4>
          </div>
          <div>
            <h4 className=" text-[40px] font-medium lg:text-[60px] 2xl:text-[100px] md:border-r-[2px] md:border-gray-200 md:flex justify-center">
              100+
            </h4>
            <h4 className="text-[12px] lg:text-[18px] 2xl:text-[22px]  font-medium md:flex justify-center  md:text-center">
              Food to put you in a good mood.
            </h4>
          </div>
          <div>
            <h4 className=" text-[40px] font-medium lg:text-[60px] 2xl:text-[100px]  md:flex justify-center">
              #1
            </h4>
            <h4 className="text-[12px] lg:text-[18px] 2xl:text-[22px]  font-medium md:flex justify-center md:text-center">
              Exceeding your expectations, consistently.
            </h4>
          </div>
        </div>
      </div>

      <div className="xl:px-[50px] 2xl:px-[100px] lg:px-[50px] px-[15px] md:px-[30px] xl:pt-[40px] pt-[40px] md:pt-[20px]   pb-[100px] grid grid-cols-1 md:grid-cols-2 items-center gap-[15px] md:gap-[20px] xl:gap-[40px]"></div>
    </div>
  );
};

export default Home;
