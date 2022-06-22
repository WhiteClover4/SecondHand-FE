import PrimaryButton from "../components/button/PrimaryButton";
import { Navbar } from "../components/navbar";
import { SearchIcon, PlusIcon } from "../components/icon";
import { Card } from "../components/card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <PrimaryButton className="fixed inset-x-0 bottom-5 mx-auto w-fit">
        <div className="flex flex-row">
          <PlusIcon className="mr-2 w-5" />
          <p className="text-body-14 font-medium">Jual</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 px-[6px]">
          <div style={{ filter: "blur(30px)" }} className="z-10 h-[22px] w-full bg-primary-03 ring">
            sad
          </div>
        </div>
      </PrimaryButton>
      <div className="mb-10 h-[288px] bg-primary2-04">Sliders</div>
      <div className="px-[136px]">
        <p className="mb-4 text-title-16 font-bold">Telusuri Kategori</p>
        <div className="mb-10 flex flex-row gap-4">
          <PrimaryButton className="bg-primary-04">
            <div className="flex flex-row">
              <SearchIcon className="mr-2 w-5" />
              <p className="font-normal">Semua</p>
            </div>
          </PrimaryButton>
          <PrimaryButton className="bg-primary-01 active:bg-primary-04">
            <div className="flex flex-row text-neutral-04 active:text-neutral-01">
              <SearchIcon className="mr-2 w-5" />
              <p className="font-normal">Hobi</p>
            </div>
          </PrimaryButton>
          <PrimaryButton className="bg-primary-01 active:bg-primary-04">
            <div className="flex flex-row text-neutral-04 active:text-neutral-01">
              <SearchIcon className="mr-2 w-5" />
              <p className="font-normal">Kendaraan</p>
            </div>
          </PrimaryButton>
          <PrimaryButton className="bg-primary-01 active:bg-primary-04">
            <div className="flex flex-row text-neutral-04 active:text-neutral-01">
              <SearchIcon className="mr-2 w-5" />
              <p className="font-normal">Elektronik</p>
            </div>
          </PrimaryButton>
          <PrimaryButton className="bg-primary-01 active:bg-primary-04">
            <div className="flex flex-row text-neutral-04 active:text-neutral-01">
              <SearchIcon className="mr-2 w-5" />
              <p className="font-normal">Kesehatan</p>
            </div>
          </PrimaryButton>
          <PrimaryButton className="bg-primary-01 active:bg-primary-04">
            <div className="flex flex-row text-neutral-04 active:text-neutral-01">
              <SearchIcon className="mr-2 w-5" />
              <p className="font-normal">Semua</p>
            </div>
          </PrimaryButton>
        </div>
      </div>
      <div className="px-[136px]">
        <div className="grid grid-cols-6 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
