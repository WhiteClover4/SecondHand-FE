import { Swiper, SwiperSlide } from 'swiper/react';

export default function SimpleCarousel() {
  return (
    <Swiper {...settings} className="mb-10">
      {slides.map((el, i) => (
        <SwiperSlide
          key={i}
          className="overflow-hidden rounded-[20px] duration-200 odd:h-[288px] odd:w-[968px] even:h-[288px] even:w-[968px]"
        >
          {({ isActive }) => (
            <div
              className={`h-full w-full ${el} ${
                isActive ? 'scale-y-100' : 'scale-y-[0.84722222]'
              } rounded-[20px] duration-300`}
            >
              {i === 0 && (
                <div className="flex h-full w-full">
                  <div className="ml-[80px] flex h-full w-full flex-col justify-center">
                    <h1 className="text-[36px] font-bold leading-[54px]">
                      Bulan Ramadhan Banyak diskon!
                    </h1>
                    <p className="mt-4 text-body-14 text-[#151515]">Diskon Hingga</p>
                    <p className="text-[32px] font-medium text-[#FA2C5A]">60%</p>
                  </div>
                  <div>
                    <div className="relative h-full w-[424px]">
                      <div
                        className="absolute top-0 left-0 h-full w-full"
                        style={{
                          background:
                            'linear-gradient(90deg, #FFE9CA 0%, rgba(255, 233, 202, 0) 100%)',
                        }}
                      ></div>
                      <img
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"
                        src="/img/png_gift_88837.png"
                      />
                      <img className="h-full w-full" src="/img/Rectangle 137.png" />
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

const slides = ['bg-[#FFE9CA]', 'bg-[#E2D4F0]', 'bg-[#B6D4A8]'];
