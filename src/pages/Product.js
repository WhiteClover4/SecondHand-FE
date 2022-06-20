import {
  CardSellerProductDesc,
  CardSellerProductInfo,
  CardSellerProductProfile
} from "../components/card";
import { Navbar2 } from "../components/navbar";

export default function Product() {
  return (
    <div>
      <Navbar2 />
      <div className="mx-[236px] flex flex-row justify-center gap-8 ">
        <div className="w-[600px] space-y-6 ">
          <div className="relative overflow-hidden">
            <img src="/img/img.png" />
            <p className="absolute inset-x-0 bottom-1/2 w-full bg-primary-04 py-4 text-center text-title-18 text-white">
              Carousel
            </p>
          </div>
          <CardSellerProductDesc />
        </div>
        <div className="w-[336px] space-y-6">
          <CardSellerProductInfo />
          <CardSellerProductProfile />
        </div>
      </div>
    </div>
  );
}
