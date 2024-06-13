import { useState, useEffect } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const images = [
  "https://contents.mediadecathlon.com/s1095559/k$d594e68ed672c6bd4f92a7e1e42bc4e0/defaut.jpg",
  "https://contents.mediadecathlon.com/s1097167/k$dd40c112a78019169072c0f9a3545ce2/defaut.jpg",
  "https://contents.mediadecathlon.com/s1095567/k$d153cc04176b79fec675978166135112/defaut.jpg",
  "https://contents.mediadecathlon.com/s1089666/k$5cf4125c943106719b45492ff32aa239/defaut.jpg",
];
const PathWithImage = [
  {
    image:
      "https://contents.mediadecathlon.com/s1066179/k$a1bad6c9d4b965d79eb8c64c8092fc0b/defaut.png",
    text: "No Cost EMI Available",
  },
  {
    image:
      "https://contents.mediadecathlon.com/s1066180/k$ec44ffaa3178b9073f1e88c6599adb99/defaut.png",
    text: "Easy Returns",
  },
  {
    image:
      "https://contents.mediadecathlon.com/s1066181/k$0867f40e52bfbd493ad7b8bceebd0120/defaut.png",
    text: "1M+ Happy Customers",
  },
];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 2000; // Duration for auto-slide

  // Handlers for manual slide change
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide using useEffect with setTimeout
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      nextSlide();
    }, slideDuration);

    // Cleanup the timeout on component unmount or index change
    return () => clearTimeout(autoSlide);
  }, [currentIndex]);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              alt={`Slide ${index}`}
              className="w-full h-52 md:h-full object-cover flex-shrink-0"
              src={src}
            />
          ))}
        </div>
        <div className="absolute top-1/2 w-full flex justify-between items-center px-6">
          <FaChevronCircleLeft
            className="text-4xl text-white cursor-pointer"
            onClick={prevSlide}
            aria-label="Previous slide"
          />
          <FaChevronCircleRight
            className="text-4xl text-white cursor-pointer"
            onClick={nextSlide}
            aria-label="Next slide"
          />
        </div>
      </div>
      <div className="bg-[#f5f4f5] mt-2">
        <div className="flex justify-between mx-3 md:mx-12 items-center">
          {PathWithImage.map((item, index) => (
            <div key={index} className="w-1/3">
              <div className="flex my-4 items-center">
                <div className="flex md:justify-evenly w-full items-center">
                  <div className="flex gap-2 md:gap-5 items-center">
                    <img
                      className="w-5 h-5 object-contain"
                      src={item.image}
                      alt={item.text}
                    />
                    <span className="text-center">{item.text}</span>
                  </div>
                  <div className="border rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="m-1"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.35348 12.3535L5.64637 11.6464L9.29282 7.99996L5.64637 4.35352L6.35348 3.64641L10.707 7.99996L6.35348 12.3535Z"
                        fill="#3643BA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
