import { ArrowLeftIcon } from "../icon";
import LabelOptionInputProduct from "../input/LabelOptionInputProduct";
import LabelTextInput from "../input/LabelTextInput";
import LabelTextareaInput from "../input/LabelTextareaInput";
import InputButton from "../button/InputButton";

export default function SellerProductLayout() {
  return (
    <div className="h-[950px] w-[1440px] bg-neutral-01">
      <div className=" flex h-[84px] w-[1440px] items-center shadow-low">
        <img
          src="/img/Rectangle-127.png"
          alt="Rectangle-127"
          className="ml-[136px]"
        />
        <p className=" text-body-16 ml-[409px] font-normal">
          Lengkapi Info Akun
        </p>
      </div>
      <button type="button" className="mt-[45px] ml-[341px]">
        <ArrowLeftIcon className="h-6 w-6 text-neutral-05 " />
      </button>
      <div className="m-auto h-[70px] w-[568px] items-center">
        <p className="text-body-12 font-normal"> Nama produk </p>
        <LabelTextInput placeholder="Nama Produk" />
        <p className="mt-4 text-body-12 font-normal"> Harga Produk </p>
        <LabelTextInput placeholder="Rp. 0,00" />
        <p className="mt-4 text-body-12 font-normal"> Kategori </p>
        <LabelOptionInputProduct />
        <p className="mt-4 text-body-12 font-normal"> Deskripsi </p>
        <LabelTextareaInput placeholder="Contoh: Jalan Ikan Hiu 33" />
        <p className="mt-4 text-body-12 font-normal"> Foto Produk </p>
        <button className="mt-1">
          <InputButton />
        </button>
        <div className="w-[568px] mt-6">
          <button className="rounded-2xl border border-primary-04 w-[276px] h-12" >
            <p className=" bg-neutral-01 px-6 text-body-14 font-medium text-neutral-05"> Preview </p>
          </button>
          <button
            type="button"
            className="w-[276px] h-12 rounded-2xl bg-primary-04 text-center ml-4"
          >
            <p className=" text-body-14 font-medium text-neutral-01"> Terbitkan </p>
          </button>
        </div>
      </div>
    </div>
  );
}
