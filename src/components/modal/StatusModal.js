import { XIcon } from "../icon";
import { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";

export default function StatusModal() {
  const [value, setValue] = useState("berhasil");

  const onOptionChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative flex  w-[360px] flex-col rounded-2xl bg-neutral-01 px-8 pt-4 pb-6 shadow-high">
      <button type="button" className="place-self-star mb-4 place-self-end ">
        <XIcon className="h-6 w-6 text-neutral-05 " />
      </button>
      <p className="mb-6 text-body-14 font-medium">Perbarui status penjualan produkmu</p>
      <div className="mb-2 flex flex-row items-center">
        <input
          className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border-[3px] border-[#C4C4C4] bg-[#C4C4C4] checked:bg-primary-04 hover:bg-primary-03"
          type="radio"
          id="berhasil"
          value="berhasil"
          checked={value === "berhasil"}
          onChange={onOptionChange}
        />
        <label htmlFor="berhasil" className="ml-4  text-body-14">
          Berhasil terjual
        </label>
      </div>
      <p className="ml-8 mb-6 text-body-14 text-neutral-03">Kamu telah sepakat menjual produk ini kepada pembeli</p>
      <div className="mb-2 flex flex-row items-center">
        <input
          className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border-[3px] border-[#C4C4C4] bg-[#C4C4C4] checked:bg-primary-04 hover:bg-primary-03"
          type="radio"
          id="batal"
          value="batal"
          checked={value === "batal"}
          onChange={onOptionChange}
        />
        <label htmlFor="batal" className="ml-4 text-body-14">
          Batalkan transaksi
        </label>
      </div>
      <p className="ml-8 mb-8 text-body-14 text-neutral-03">Kamu membatalkan transaksi produk ini dengan pembeli</p>
      <PrimaryButton className="text-center">Kirim</PrimaryButton>
    </div>
  );
}
