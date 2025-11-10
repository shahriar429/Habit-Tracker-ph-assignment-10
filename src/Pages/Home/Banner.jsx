import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        navigation
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-[70vh] bg-[url('https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFiaXQlMjB0cmFja2VyfGVufDB8fDB8fHww')] bg-cover bg-center text-white text-center px-4 relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                Track Your Habits, Build Your Life
              </h1>
              <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
                Stay consistent, form positive routines, and achieve your personal goals every day.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-[70vh] bg-[url('https://cdn.shopify.com/s/files/1/0503/2794/5379/files/S_S-Habit-Tracking-Will_Change-Your-Life2.jpg?v=1629707509')] bg-cover bg-center text-white text-center px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                Build Streaks, See Progress
              </h1>
              <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
                Track your daily habits, maintain streaks, and celebrate your growth over time.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-[70vh] bg-[url('https://static1.squarespace.com/static/5fde97675b7bc966055fa16e/612461d35fa70600c5d45392/622ba70a29b8cb0f08e2c443/1647030474893/12.27.2021+1.jpg?format=1500w')] bg-cover bg-center text-white text-center px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                Achieve Goals, One Habit at a Time
              </h1>
              <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
                Set reminders, track consistency, and turn small daily actions into life-changing results.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
