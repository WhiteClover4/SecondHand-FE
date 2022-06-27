import { ArrowLeftIcon } from "../icon";
import LabelOptionInput from "../input/LabelOptionInput";
import LabelTextInput from "../input/LabelTextInput";
import LabelTextareaInput from "../input/LabelTextareaInput";
import { UserProfilInput } from "../input";

export default function ProfileLayout() {
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
      <div className="flex item-center">
        <button type="button" className="ml-[341px]">
          <ArrowLeftIcon className="h-6 w-6 text-neutral-05 " />
        </button>
        <button type="button" className="ml-[317px] mt-10">
          <UserProfilInput />
        </button>
      </div>
      <div className="m-auto h-[70px] w-[568px] items-center">
        <p className="mt-4 text-body-12 font-normal"> Nama* </p>
        <LabelTextInput placeholder="Nama" />
        <p className="mt-4 text-body-12 font-normal"> Kota* </p>
        <LabelOptionInput />
        <p className="mt-4 text-body-12 font-normal"> Alamat </p>
        <LabelTextareaInput placeholder="Contoh: Jalan Ikan Hiu 33" />
        <p className="mt-4 text-body-12 font-normal"> No Handphone* </p>
        <LabelTextInput placeholder="Contoh: +621843459434" />
        <p className="mt-6 text-neutral-01">
          <button
            type="button"
            className="h-12 w-[568px] rounded-xl bg-primary-04 text-center"
          >
            <p className=" text-body- font-medium"> Simpan </p>
          </button>
        </p>
      </div>
    </div>
  );
}
