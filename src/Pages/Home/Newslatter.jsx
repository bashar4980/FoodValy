import React from "react";

const Newslatter = () => {
  return (
    <div className="py-5">
      <div className="relative bg-[url(https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg)] bg-cover bg-center bg-no-repeat ">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">
          Join our newsletter and get...

          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            $20 discount for your first order
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="btn bg-[#6EB356] border-0 ml-5"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
