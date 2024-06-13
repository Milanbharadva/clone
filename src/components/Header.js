import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0  bg-white">
      <div className="px-4 py-3 2xl:px-16 xl:py-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                strokeWidth="2"
              >
                <path
                  d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H21.25"
                  stroke="currentColor"
                  strokeLinecap="square"
                ></path>
              </svg>
              <p className="hidden ml-4 leading-5 text-left uppercase lg:block text-16">
                ALL <br /> SPORTS
              </p>
            </div>
            <div className="md:ml-6 lg:ml-12">
              <svg
                viewBox="0 0 188 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full lg:w-36 cursor-pointer"
              >
                <path
                  d="M57.9108 23.8H71.1548V19.544H62.9508V15.974H70.2169V12.012H62.9508V8.442H71.1548V4.2H57.9108V23.8ZM87.5909 15.358C85.6728 18.41 83.8108 19.684 81.4168 19.684C78.3088 19.684 76.5028 17.5 76.5028 13.706C76.5028 10.108 78.1688 8.316 80.7309 8.316C82.4248 8.316 83.8248 9.072 84.2589 11.592H89.2989C88.7528 6.79 85.6869 3.808 80.7868 3.808C75.1028 3.808 71.3648 7.82599 71.3648 13.986C71.3648 20.188 75.1028 24.192 81.2488 24.192C85.2669 24.192 87.9968 22.512 89.8028 20.244H96.6768V23.8H101.689V4.2H94.5769L87.5909 15.358ZM96.6768 16.31H92.2388L96.6768 9.1V16.31ZM47.1588 4.2H39.7948V23.8H47.1588C52.9969 23.8 56.7628 19.95 56.7628 14C56.7628 8.05 52.9969 4.2 47.1588 4.2ZM47.0888 19.544H44.8348V8.442H47.0888C50.0008 8.442 51.6388 10.5 51.6388 14C51.6388 17.486 50.0008 19.544 47.0888 19.544ZM159.537 3.808C153.615 3.808 149.639 7.826 149.639 14C149.639 20.174 153.615 24.192 159.537 24.192C165.473 24.192 169.435 20.174 169.435 14C169.435 7.82601 165.473 3.808 159.537 3.808ZM159.537 19.684C156.625 19.684 154.791 17.738 154.791 14C154.791 10.262 156.625 8.316 159.537 8.316C162.463 8.316 164.283 10.262 164.283 14C164.283 17.738 162.463 19.684 159.537 19.684ZM102.949 8.442H107.891V23.8H112.931V8.442H117.873V4.2H102.949L102.949 8.442ZM182.301 4.2V14.994L175.805 4.2H170.583V23.8H175.455V12.558L182.217 23.8H187.173V4.2L182.301 4.2ZM142.499 4.2H137.459V23.8H150.101V19.558H142.499V4.2ZM130.963 11.676H124.173V4.2H119.133V23.8H124.173V15.904H130.963V23.8H136.003V4.2H130.963V11.676Z"
                  fill="#3643BA"
                ></path>
                <path
                  d="M25.5711 0C14.6267 0 1.01309 11.3236 1.01309 20.7085C1.01309 25.5554 4.73612 28 9.65333 28C13.264 28 17.6333 26.6794 21.848 24.1365V5.40893C20.7241 7.33366 15.4416 15.0888 11.1987 19.2193C9.03518 21.3266 7.32118 22.2398 5.84602 22.2398C4.18821 22.2398 3.40146 21.1159 3.40146 19.4441C3.40146 11.8575 16.1722 1.99498 24.6298 1.99498C28.114 1.99498 30.3618 3.54039 30.3618 6.54692C30.3618 9.30055 28.4933 12.7566 25.3041 15.9458V21.7481C30.8676 17.3507 34.1972 11.7451 34.1972 7.22127C34.1972 2.4586 30.4883 0 25.5711 0Z"
                  fill="#3643BA"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center flex-grow lg:pr-0 md:ml-2 xl:pr-6 xl:pl-14 2xl:pr-4 justify-end md:justify-normal">
            <div className="bg-gray-100 rounded-full hidden md:flex h-10 items-center py-0 px-0 xs:px-1 md:px-3 outline-none text-12 sm:text-14 lg:text-[1rem] sm:tracking-[1px] w-full ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className="mr-2 text-grey-500 w-5"
              >
                <path
                  d="M21.4 21.4L17.5 17.5M17.8 10.2C17.8 14.3 14.4 17.7 10.3 17.7C6.20005 17.7 2.80005 14.3 2.80005 10.2C2.80005 6.10001 6.20005 2.70001 10.3 2.70001C14.4 2.70001 17.8 6.10001 17.8 10.2Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <span className="text-[#8C97A2] text-nowrap pr-2">
                Search For
              </span>
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-[#8C97A2] font-bold">
                  "Hello World"
                </h1>
              </div>
            </div>
            <div className="ml-3 lg:ml-4 xl:ml-14">
              <p className=" text-12 lg:text-14 whitespace-nowrap text-grey-900">
                Delivery Location
              </p>
              <div className="flex items-center">
                <span className="text-14 lg:text-16 font-bold text-[#364CC9]">
                  560002
                </span>
                <button
                  type="button"
                  className="ml-1 text-12 lg:text-14 text-[#364CC9] uppercase underline border-none outline-none"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <button className=" py-2 px-3 border rounded-full text-nowrap border-black">
              Sign In
            </button>
          </div>
          <div className="hidden lg:flex items-center ml-5">
            <div className="flex flex-col items-center mx-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className=""
              >
                <path
                  d="M5 22C5 16.1 8.1 12.3 12 12.2C15.9 12.1 19 16 19 21.9M12 2.79999C10.1 2.79999 8.5 4.39999 8.5 6.29999C8.5 8.19999 10.1 9.79999 12 9.79999C13.9 9.79999 15.5 8.19999 15.5 6.29999C15.5 4.39999 13.9 2.79999 12 2.79999Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <p className="text-nowrap text-sm	">Sign In</p>
            </div>
            <div className="flex flex-col items-center mx-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className=""
              >
                <path
                  d="M7.50005 12.8V5.59998H21.2001H21.3V12.8H7.50005ZM7.50005 12.8V17.6M7.50005 8.19998H2.80005V17.6H16V12.6M21.2001 12.8V18.4"
                  stroke="currentColor"
                ></path>
              </svg>
              <p className="text-nowrap text-sm	">My Store</p>
            </div>
            <div className="flex flex-col items-center mx-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className=""
              >
                <path
                  d="M7.00005 11.2V12.7M12 11.2V12.7M17 11.2V12.7M20.2001 6.29999C20.8001 6.29999 21.2001 6.69999 21.2001 7.29999V16.8C21.2001 17.4 20.8001 17.8 20.2001 17.8H6.00005L2.80005 19.7V7.29999C2.80005 6.69999 3.20005 6.29999 3.80005 6.29999H13H20.2001Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <p className="text-nowrap text-sm	">Support</p>
            </div>
            <div className="flex flex-col items-center mx-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className=""
              >
                <path
                  d="M20.2 8C19.9 6.1 18.5 4.9 17.3 4.5C15.1 3.8 13.4 5.3 12.7 6.1L12 6.8L11.4 6.1C10.6 5.3 9.00002 3.9 6.70002 4.5C5.50002 4.9 4.10002 6.1 3.80002 8C3.50002 9.7 3.90002 13.9 12 19.6C20.1 13.9 20.5 9.7 20.2 8Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <p className="text-nowrap text-sm	">Wishlist</p>
            </div>
            <div className="flex flex-col items-center mx-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className=""
              >
                <path
                  d="M1.75 3.75H3.89728C4.38858 3.75 4.8071 4.10688 4.88472 4.59201L5.23 6.75M5.23 6.75L6.61528 15.408C6.6929 15.8931 7.11142 16.25 7.60272 16.25H17.8035C18.2956 16.25 18.7145 15.892 18.7913 15.406L20.1537 6.75H5.23Z"
                  stroke="currentColor"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M9.25 19.75C9.25 20.3023 8.80228 20.75 8.25 20.75C7.69772 20.75 7.25 20.3023 7.25 19.75C7.25 19.1977 7.69772 18.75 8.25 18.75C8.80228 18.75 9.25 19.1977 9.25 19.75Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M18.25 19.75C18.25 20.3023 17.8023 20.75 17.25 20.75C16.6977 20.75 16.25 20.3023 16.25 19.75C16.25 19.1977 16.6977 18.75 17.25 18.75C17.8023 18.75 18.25 19.1977 18.25 19.75Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 19.75C9.5 20.4404 8.94036 21 8.25 21C7.55964 21 7 20.4404 7 19.75C7 19.0596 7.55964 18.5 8.25 18.5C8.94036 18.5 9.5 19.0596 9.5 19.75ZM18.5 19.75C18.5 20.4404 17.9404 21 17.25 21C16.5596 21 16 20.4404 16 19.75C16 19.0596 16.5596 18.5 17.25 18.5C17.9404 18.5 18.5 19.0596 18.5 19.75ZM8.25 20.75C8.80228 20.75 9.25 20.3023 9.25 19.75C9.25 19.1977 8.80228 18.75 8.25 18.75C7.69772 18.75 7.25 19.1977 7.25 19.75C7.25 20.3023 7.69772 20.75 8.25 20.75ZM17.25 20.75C17.8023 20.75 18.25 20.3023 18.25 19.75C18.25 19.1977 17.8023 18.75 17.25 18.75C16.6977 18.75 16.25 19.1977 16.25 19.75C16.25 20.3023 16.6977 20.75 17.25 20.75Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="text-nowrap text-sm	">Cart</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex items-center overflow-hidden">
          <div className="md:hidden flex justify-between items-center flex-grow bg-gray-100 px-3  rounded-full">
            <div className=" flex  h-10 items-center py-0 px-0 xs:px-1 md:px-3 outline-none text-12      sm:text-14 lg:text-[1rem] sm:tracking-[1px] w-full ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                strokeWidth="1.5"
                className="mr-2 text-grey-500 w-5"
              >
                <path
                  d="M21.4 21.4L17.5 17.5M17.8 10.2C17.8 14.3 14.4 17.7 10.3 17.7C6.20005 17.7 2.80005 14.3 2.80005 10.2C2.80005 6.10001 6.20005 2.70001 10.3 2.70001C14.4 2.70001 17.8 6.10001 17.8 10.2Z"
                  stroke="currentColor"
                ></path>
              </svg>
              <span className="text-[#8C97A2] text-nowrap mr-2">Search For</span>
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-[#8C97A2] font-bold">
                  "Hello World"
                </h1>
              </div>
            </div>
            <div className="pr-2">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99995 1.99984C5.46952 1.99984 4.96081 2.21055 4.58574 2.58562C4.21067 2.9607 3.99995 3.4694 3.99995 3.99984V6.6665C3.99995 7.19694 4.21067 7.70564 4.58574 8.08072C4.96081 8.45579 5.46952 8.6665 5.99995 8.6665C6.53039 8.6665 7.03909 8.45579 7.41417 8.08072C7.78924 7.70564 7.99995 7.19694 7.99995 6.6665V3.99984C7.99995 3.4694 7.78924 2.9607 7.41417 2.58562C7.03909 2.21055 6.53039 1.99984 5.99995 1.99984ZM5.99995 0.666504C6.43769 0.666504 6.87115 0.752723 7.27557 0.920239C7.67998 1.08775 8.04745 1.33329 8.35698 1.64281C8.6665 1.95234 8.91204 2.31981 9.07955 2.72423C9.24707 3.12864 9.33329 3.5621 9.33329 3.99984V6.6665C9.33329 7.55056 8.9821 8.3984 8.35698 9.02353C7.73185 9.64865 6.88401 9.99984 5.99995 9.99984C5.1159 9.99984 4.26805 9.64865 3.64293 9.02353C3.01781 8.3984 2.66662 7.55056 2.66662 6.6665V3.99984C2.66662 3.11578 3.01781 2.26794 3.64293 1.64281C4.26805 1.01769 5.1159 0.666504 5.99995 0.666504ZM0.0366211 7.33317H1.37995C1.54148 8.44302 2.0972 9.45762 2.94544 10.1913C3.79368 10.9251 4.87774 11.3289 5.99929 11.3289C7.12083 11.3289 8.20489 10.9251 9.05313 10.1913C9.90137 9.45762 10.4571 8.44302 10.6186 7.33317H11.9626C11.811 8.68565 11.2044 9.94647 10.2421 10.9089C9.27982 11.8713 8.01908 12.4781 6.66662 12.6298V15.3332H5.33329V12.6298C3.98071 12.4782 2.71981 11.8715 1.7574 10.9091C0.794999 9.94665 0.18823 8.68575 0.0366211 7.33317Z"
                  fill="#001018"
                />
              </svg>
            </div>
          </div>
          <div className="flex md:hidden items-center ml-5 gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              strokeWidth="1.5"
              className=""
            >
              <path
                d="M20.2 8C19.9 6.1 18.5 4.9 17.3 4.5C15.1 3.8 13.4 5.3 12.7 6.1L12 6.8L11.4 6.1C10.6 5.3 9.00002 3.9 6.70002 4.5C5.50002 4.9 4.10002 6.1 3.80002 8C3.50002 9.7 3.90002 13.9 12 19.6C20.1 13.9 20.5 9.7 20.2 8Z"
                stroke="currentColor"
              ></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              strokeWidth="1.5"
              className=""
            >
              <path
                d="M1.75 3.75H3.89728C4.38858 3.75 4.8071 4.10688 4.88472 4.59201L5.23 6.75M5.23 6.75L6.61528 15.408C6.6929 15.8931 7.11142 16.25 7.60272 16.25H17.8035C18.2956 16.25 18.7145 15.892 18.7913 15.406L20.1537 6.75H5.23Z"
                stroke="currentColor"
                strokeLinecap="square"
              ></path>
              <path
                d="M9.25 19.75C9.25 20.3023 8.80228 20.75 8.25 20.75C7.69772 20.75 7.25 20.3023 7.25 19.75C7.25 19.1977 7.69772 18.75 8.25 18.75C8.80228 18.75 9.25 19.1977 9.25 19.75Z"
                fill="currentColor"
              ></path>
              <path
                d="M18.25 19.75C18.25 20.3023 17.8023 20.75 17.25 20.75C16.6977 20.75 16.25 20.3023 16.25 19.75C16.25 19.1977 16.6977 18.75 17.25 18.75C17.8023 18.75 18.25 19.1977 18.25 19.75Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 19.75C9.5 20.4404 8.94036 21 8.25 21C7.55964 21 7 20.4404 7 19.75C7 19.0596 7.55964 18.5 8.25 18.5C8.94036 18.5 9.5 19.0596 9.5 19.75ZM18.5 19.75C18.5 20.4404 17.9404 21 17.25 21C16.5596 21 16 20.4404 16 19.75C16 19.0596 16.5596 18.5 17.25 18.5C17.9404 18.5 18.5 19.0596 18.5 19.75ZM8.25 20.75C8.80228 20.75 9.25 20.3023 9.25 19.75C9.25 19.1977 8.80228 18.75 8.25 18.75C7.69772 18.75 7.25 19.1977 7.25 19.75C7.25 20.3023 7.69772 20.75 8.25 20.75ZM17.25 20.75C17.8023 20.75 18.25 20.3023 18.25 19.75C18.25 19.1977 17.8023 18.75 17.25 18.75C16.6977 18.75 16.25 19.1977 16.25 19.75C16.25 20.3023 16.6977 20.75 17.25 20.75Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className="relative w-full py-2 flex items-center justify-center px-10 text-center"
        id="ribbon-container"
        style={{ backgroundColor: "#3643ba" }}
      >
        <span
          id="text-message"
          className="text-14 md:text-16 font-normal"
          style={{ color: "#FFF" }}
        >
          <b>FREE</b> delivery on orders worth <b>2999/-</b> and above
        </span>
        <div
          id="close-icon"
          className="absolute right-4"
          onClick={() => {
            document.getElementById("ribbon-container").classList.add("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="md:w-4 md:h-4 HBxMmz LZfTyB cursor-pointer"
          >
            <path
              d="M4.99999 4.05781L8.29999 0.757812L9.24266 1.70048L5.94266 5.00048L9.24266 8.30048L8.29999 9.24314L4.99999 5.94315L1.69999 9.24314L0.757324 8.30048L4.05732 5.00048L0.757324 1.70048L1.69999 0.757812L4.99999 4.05781Z"
              fill="#FFF"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
