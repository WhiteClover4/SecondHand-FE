import { XIcon } from '../icons';
import { PrimaryButton } from '../buttons';
import { useState } from 'react';

export default function StatusModal({
  setModal,
  loading,
  updateTransactionStatus,
  transactionStatus,
}) {
  const [status, setStatus] = useState(transactionStatus);

  const onOptionChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div
      className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-[#000]/60"
      onClick={() => setModal('')}
    >
      <div
        className="relative flex w-[360px] flex-col rounded-2xl bg-neutral-01 px-8 pt-4 pb-6 shadow-high"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="place-self-star mb-4 place-self-end"
          onClick={() => setModal('')}
          type="button"
        >
          <XIcon className="h-6 w-6 text-neutral-05 " />
        </button>
        <p className="mb-6 text-body-14 font-medium">Perbarui status penjualan produkmu</p>
        <div className="mb-2 flex flex-row items-center">
          <input
            checked={status === 'true'}
            className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border-[3px] border-[#C4C4C4] bg-[#C4C4C4] checked:bg-primary-04 hover:bg-primary-03"
            id="true"
            onChange={onOptionChange}
            type="radio"
            value="true"
          />
          <label className="ml-4  text-body-14" htmlFor="true">
            Berhasil terjual
          </label>
        </div>
        <p className="ml-8 mb-6 text-body-14 text-neutral-03">
          Kamu telah sepakat menjual produk ini kepada pembeli
        </p>
        <div className="mb-2 flex flex-row items-center">
          <input
            checked={status === 'false'}
            className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-full border-[3px] border-[#C4C4C4] bg-[#C4C4C4] checked:bg-primary-04 hover:bg-primary-03"
            id="false"
            onChange={onOptionChange}
            type="radio"
            value="false"
          />
          <label className="ml-4 text-body-14" htmlFor="false">
            Batalkan transaksi
          </label>
        </div>
        <p className="ml-8 mb-8 text-body-14 text-neutral-03">
          Kamu membatalkan transaksi produk ini dengan pembeli
        </p>
        <PrimaryButton
          className="text-center"
          disableText="Kirim"
          isDisable={loading || !status}
          onClick={() => updateTransactionStatus(status)}
        >
          Kirim
        </PrimaryButton>
      </div>
    </div>
  );
}
