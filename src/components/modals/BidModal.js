import { useState } from 'react';
import { PrimaryButton } from '../buttons';
import { XIcon } from '../icons';
import { LabelNumberInput } from '../inputs';

export default function BidModal({ setShow, data, loading, bidProduct }) {
  const [bid, setBid] = useState('');

  return (
    <div
      className="fixed top-0 left-0 z-20 flex h-screen w-screen items-end justify-center bg-[#000]/60 lg:items-center"
      onClick={() => setShow(false)}
    >
      <div
        className="relative w-[360px] rounded-t-2xl bg-neutral-01 px-8 pt-4 pb-6 shadow-high lg:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-center lg:hidden">
          <span className="h-[6px] w-[60px] rounded-full bg-[#C4C4C4] "></span>
        </div>
        <div className="hidden justify-end lg:flex">
          <button data-testid="close-modal" onClick={() => setShow(false)} type="button">
            <XIcon className="h-6 w-6 text-neutral-05" />
          </button>
        </div>
        <h6 className="mt-6 text-body-14 font-medium lg:mt-4">Masukkan Harga Tawarmu</h6>
        <p className="mt-4 text-body-14  text-neutral-03">
          Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi
          penjual.
        </p>
        <div className="mt-4 flex items-center space-x-4 rounded-2xl p-4 shadow-low lg:bg-[#EEEEEE] lg:shadow-high">
          <div>
            <img
              alt="product-image"
              className="h-12 w-12 rounded-xl"
              src={
                !data.product_images.length
                  ? '/img/no-product-image.png'
                  : data.product_images[0].product_pictures
              }
            />
          </div>
          <div className="space-y-1">
            <h6 className="text-body-14 font-medium">{data.name}</h6>
            <p className="text-body-14 text-neutral-05">Rp {data.price.toLocaleString('id-ID')}</p>
          </div>
        </div>
        <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <LabelNumberInput
            id="bid"
            label="Harga Tawar"
            onChange={(e) => setBid(e.target.value)}
            placeholder="Rp 0,00"
            value={bid}
          />
          <PrimaryButton
            className="w-full"
            isDisable={loading}
            onClick={() => bidProduct(bid)}
            type="submit"
          >
            Kirim
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
