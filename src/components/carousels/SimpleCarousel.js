import { Swiper, SwiperSlide } from 'swiper/react';

export default function SimpleCarousel() {
  return (
    <Swiper {...settings} className="relative lg:mb-10">
      {slides.map((el, i) => (
        <SwiperSlide
          key={i}
          className="overflow-hidden duration-200 odd:h-[398px] odd:w-full even:h-[398px] even:w-full lg:rounded-[20px] lg:odd:h-[288px] lg:odd:w-[968px] lg:even:h-[288px] lg:even:w-[968px]"
        >
          {({ isActive }) => (
            <div
              className={`h-full w-full ${el} ${
                isActive ? 'scale-y-100' : 'lg:scale-y-[0.84722222]'
              } duration-300 lg:rounded-[20px]`}
            >
              {i === 0 && (
                <div className="flex h-full w-full justify-center space-x-[13px] lg:space-x-0">
                  <div className="ml-4 flex h-full flex-col pt-[118px] lg:ml-[80px] lg:justify-center lg:pt-0">
                    <h1 className="w-[180px] text-heading-20 font-bold lg:w-full lg:text-[36px] lg:leading-[54px]">
                      Bulan Ramadhan Banyak diskon!
                    </h1>
                    <p className="mt-4 text-body-10 text-[#151515] lg:text-body-14">
                      Diskon Hingga
                    </p>
                    <p className="mt-1 text-title-18 font-medium text-[#FA2C5A] lg:mt-2 lg:text-[32px]">
                      60%
                    </p>
                  </div>
                  <div className="pr-6 lg:pr-0">
                    <img
                      className="mt-[124px] h-[123px] w-[127px] lg:hidden"
                      src="/img/png_gift_88837.png"
                    />
                    <div className="relative hidden h-full w-[424px] lg:block">
                      <div
                        className="absolute top-0 left-0 hidden h-full w-full lg:block"
                        style={{
                          background:
                            'linear-gradient(90deg, #FFE9CA 0%, rgba(255, 233, 202, 0) 100%)',
                        }}
                      ></div>
                      <img
                        className="absolute top-1/2 h-[127px] w-[127px] -translate-y-1/2 lg:left-0 lg:h-auto lg:w-auto lg:-translate-x-1/2"
                        src="/img/png_gift_88837.png"
                      />
                      <img
                        className="hidden h-full w-full lg:inline-block"
                        src="/img/Rectangle 137.png"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const settings = {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 16,
  pagination: {
    clickable: true,
  },
};

const slides = ['bg-gradient-mobile lg:bg-[#FFE9CA]', 'bg-[#E2D4F0]', 'bg-[#B6D4A8]'];
