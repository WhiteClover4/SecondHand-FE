import { SellerProductInfoCard, ProfileCard } from '../components/card';
import { Navbar2 } from '../components/navbar';

export default function Product() {
  return (
    <div>
      <Navbar2 />
      <div className="flex flex-row justify-center gap-8 px-[236px] ">
        <div className="w-fit space-y-6 ">
          <div className="relative overflow-hidden">
            <img className="w-full" src="/img/img.png" />
            <p className="absolute inset-x-0 bottom-1/2 w-full bg-primary-04 py-4 text-center text-title-18 text-white">
              Carousel
            </p>
          </div>
          <div className="space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low">
            <p className="text-body-14 font-medium text-black">Deskripsi</p>
            <p className="text-body-14 text-neutral-03 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p className="text-body-14 text-neutral-03 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-[336px] space-y-6">
          <SellerProductInfoCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
