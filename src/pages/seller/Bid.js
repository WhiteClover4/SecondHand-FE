import { Card3, ProfileCard } from '../../components/card';
import { ArrowLeftIcon } from '../../components/icon';

export default function Bid() {
  return (
    <div className="h-[950px] w-[1440px] bg-neutral-01">
      <div className=" flex h-[84px] w-[1440px] items-center shadow-low">
        <img alt="Rectangle-127" className="ml-[136px]" src="/img/Rectangle-127.png " />
        <p className=" text-body-16 ml-[409px] font-normal">Info Penawar</p>
      </div>
      <div className="item-center flex">
        <button className=" ml-[341px] mr-20 " type="button">
          <ArrowLeftIcon className="h-6 w-6 text-neutral-05 " />
        </button>
        <div className="m-auto mt-10 h-[80px] w-screen items-center">
          <ProfileCard />
          <div className="m-auto mt-6 w-screen items-center">
            <p className="text-body-14 font-medium"> Daftar Produkmu yang Ditawar </p>
            <div className="m-auto mt-6">
              <Card3 />
            </div>
          </div>
          <div className="mt-6 flex w-[568px] items-center justify-end">
            <button className="h-9 w-[158px] rounded-2xl border border-primary-04">
              <p className="px-6 text-body-14 font-medium text-neutral-05"> Tolak </p>
            </button>
            <button
              className="ml-4 h-9 w-[158px] rounded-2xl bg-primary-04 text-center"
              type="button"
            >
              <p className=" text-body-14 font-medium text-neutral-01"> Terima </p>
            </button>
          </div>
          <div className="mt-4 h-[1px] w-[568px] divide-y divide-none bg-[#E5E5E5] "></div>
        </div>
      </div>
    </div>
  );
}
