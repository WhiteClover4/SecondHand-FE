import { PrimaryButton } from '../buttons';
import { XIcon, WhatsappIcon } from '../icons';

export default function SuccessCheckoutModal({ data, setModal }) {
  return (
    <div
      className="fixed top-0 left-0 z-20 flex  h-screen w-screen items-center justify-center bg-[#000]/60"
      onClick={() => setModal('')}
    >
      <div
        className="relative flex  w-[360px] flex-col rounded-2xl bg-neutral-01  px-8 pt-4 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="place-self-star mb-4 place-self-end"
          onClick={() => setModal('')}
          type="button"
        >
          <XIcon className="h-6 w-6 text-neutral-05 " />
        </button>
        <p className="mb-2  text-body-14 font-medium">
          Yeay kamu berhasil mendapat harga yang sesuai
        </p>
        <p className="mb-4  text-body-14 text-neutral-03">
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>
        <div className="mb-6 flex grow flex-col gap-4 rounded-2xl bg-[#EEEEEE] p-4">
          <p className="text-center text-body-14 font-medium">Product Match</p>
          <div className="flex flex-row items-center">
            <img
              alt="img-profile"
              className="mr-4 h-12 w-12 rounded-xl object-cover"
              src={data.buyer_profile_picture}
            />
            <div className="flex grow flex-col gap-y-1">
              <p className="text-body-14 font-medium">{data.buyer_name}</p>
              <p className="text-body-10 text-neutral-03">{data.buyer_city}</p>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <img
              alt="img-modal-product"
              className="mr-4 h-12 w-12 rounded-xl object-cover"
              src="/img/img-notification.png"
            />
            <div className="flex grow flex-col gap-y-1">
              <p className="text-body-14">{data.product_name}</p>
              <p className="text-body-14 text-neutral-05 line-through ">
                Rp {data.product_price.toLocaleString('id-ID')}
              </p>
              <p className="text-body-14 text-neutral-05">
                Ditawar Rp {data.product_offer.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </div>
        <PrimaryButton>
          <div className="flex flex-row items-center">
            <p className="mr-1 grow  text-center">Hubungi via Whatsapp</p>
            <WhatsappIcon />
          </div>
        </PrimaryButton>
      </div>
    </div>
  );
}
