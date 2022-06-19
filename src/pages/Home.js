import PrimaryButton from "../components/button/PrimaryButton";
import { Navbar } from "../components/navbar";
import { SearchIcon } from "../components/icon";
import { Card } from "../components/card";
import { PlusIcon } from "../components/icon";

export default function Home() {
  return (
    <div className="relative h-[1400px]">
      <Navbar />
      <PrimaryButton className="fixed inset-x-0 bottom-5 mx-auto w-fit shadow-high">
        <div className="flex flex-row">
          <PlusIcon className="mr-2 w-5" />
          <p>Jual</p>
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
        <div className="grid grid-cols-6">
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
