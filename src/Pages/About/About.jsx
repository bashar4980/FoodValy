import React from "react";
import { Link } from "react-router-dom";
import Newslatter from "../Home/Newslatter";

const About = () => {
  return (
    <div>
      <section className="relative bg-[url(https://i.ibb.co/m4Vw8tw/bacola-banner-18.jpg)] bg-contain bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl   font-extrabold sm:text-5xl">
              About For Food Valy
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              WE CAN DO MORE FOR YOU
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        
      
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                 Food Vally
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                FoodValy is an online grocery website that provides customers with a convenient way to order groceries from the comfort of their own homes. The website is designed to make grocery shopping easy and hassle-free, with a wide range of food products available at competitive prices.
                </p>
               
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://i.ibb.co/mJbLNnx/Main-slider-pic-removebg-preview.png"
                  alt=""
                  className="mx-auto rounded-lg  dark:bg-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
              100% Fresh and good food
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                etiam regione ut, persius eripuit quo id. Sit te euismod
                tacimates.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    100% Fresh and good food
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Ex usu illum iudico molestie. Pro ne agam facete
                      mediocritatem, ridens labore facete mea ei. Pro id
                      apeirian dignissim.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    Return Policy
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Amet utinam aliquando ut mea, malis admodum ocurreret nec
                      et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                      quis.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                    100% Organic Fresh
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      At sed possim oporteat probatus, justo graece ne nec,
                      minim commodo legimus ut vix. Ut eos iudico quando soleat,
                      nam modus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://i.ibb.co/mJbLNnx/Main-slider-pic-removebg-preview.png"
                alt=""
                className="mx-auto rounded-lg  dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
		
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">CEO  & Founder</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">CEO  & Founder</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">CEO  & Founder</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">CEO  & Founder</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">CEO  & Founder</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-400">CEO  & Founder</p>
			</div>
		</div>
	</div>
</section>
      <Newslatter></Newslatter>
    </div>
  );
};

export default About;
