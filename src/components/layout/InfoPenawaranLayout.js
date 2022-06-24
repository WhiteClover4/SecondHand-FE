import { ArrowLeftIcon } from "../icon";
import Card3 from "../card/Card3";
import ProfileCard2 from "../card/ProfilCard2";

export default function InfoPenawaranLayout({ children }) {
  return (
    <div className="h-[950px] w-[1440px] bg-neutral-01">
      <div className=" flex h-[84px] w-[1440px] items-center shadow-low">
        <img
          src="/img/Rectangle-127.png"
          alt="Rectangle-127"
          className="ml-[136px]"
        />
        <p className=" text-body-16 ml-[409px] font-normal">Info Penawar</p>
      </div>
      <div className="item-center flex">
        <button type="button" className=" ml-[341px] mr-20">
          <ArrowLeftIcon className="h-6 w-6 text-neutral-05 " />
        </button>
        <div className="m-auto mt-10 h-[80px] w-screen items-center">
          <ProfileCard2 />
          <div className="m-auto mt-6 w-screen items-center">
            <p className="text-body-14 font-medium">
              {" "}
              Daftar Produkmu yang Ditawar{" "}
            </p>
            <div className="m-auto mt-6">
              <Card3 />
            </div>
          </div>
          <div className="mt-6 flex w-[568px] items-center justify-end">
            <button className="h-9 w-[158px] rounded-2xl border border-primary-04">
              <p className="px-6 text-body-14 font-medium text-neutral-05">
                {" "}
                Tolak{" "}
              </p>
            </button>
            <button
              type="button"
              className="] ml-4 h-9 w-[158px] rounded-2xl bg-primary-04 text-center"
            >
              <p className=" text-body-14 font-medium text-neutral-01">
                {" "}
                Terima{" "}
              </p>
            </button>
          </div>
          <div className="divide-y divide-none mt-4 h-[1px] w-[568px] bg-neutral-06"></div>
        </div>
      </div>
    </div>
  );
}
