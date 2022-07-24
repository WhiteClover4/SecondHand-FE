import { textToCustomer } from '../../constants/textToCustomer';
import { PrimaryButton } from '../buttons';
import { XIcon, WhatsappIcon } from '../icons';

export default function SuccessCheckoutModal({ data, setModal }) {
  return (
    <div
      className="fixed top-0 left-0 z-30 flex h-screen w-screen items-end justify-center bg-[#000]/60 lg:items-center"
      onClick={() => setModal('')}
    >
      <div
        className="relative flex  w-full flex-col rounded-t-2xl bg-neutral-01 px-8 pt-4  pb-6 lg:w-[360px] lg:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex w-full justify-center lg:hidden">
          <span className="h-[6px] w-[60px] rounded-full bg-[#C4C4C4] "></span>
        </div>
        <button
          className="place-self-star mb-4 hidden place-self-end lg:inline-block"
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
              className="mr-4 h-12 w-12 overflow-hidden rounded-xl object-cover"
              src={data.buyer_profile_picture || '/img/a5cff95160773ed4b391783e4d440b26.jpeg'}
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
          <a
            className="flex flex-row items-center"
            href={textToCustomer(data.buyer_phone_number, data.product_name, data.product_offer)}
            rel="noreferrer"
            target="_blank"
          >
            <p className="mr-1 grow  text-center">Hubungi via Whatsapp</p>
            <WhatsappIcon />
          </a>
        </PrimaryButton>
      </div>
    </div>
  );
}
