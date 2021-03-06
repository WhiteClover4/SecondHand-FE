import { textToCustomer } from '../../constants/textToCustomer';
import { PrimaryButton, SecondaryButton } from '../buttons';
import { WhatsappIcon } from '../icons';

export default function BidCard({ data, accept, reject, loading, openStatusModal }) {
  return (
    <div className="border-b border-[#E5E5E5] pb-4">
      <div className="flex w-full flex-row">
        <img
          alt="img-notification"
          className="mr-4 h-12 w-12 rounded-xl object-cover"
          src={data.product_pictures || '/img/a5cff95160773ed4b391783e4d440b26.jpeg'}
        />
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center justify-between text-body-10 ">
            <p className="grow text-neutral-03">Penawaran produk</p>
            <p className="mx-2 text-neutral-03">{data.date}</p>
          </div>
          <div className="space-y-1 text-body-14">
            <p>{data.product_name}</p>
            <p className="text-neutral-05">Rp {data.product_price.toLocaleString('id-ID')}</p>
            <p className="text-neutral-05">
              Ditawar Rp {data.product_offer.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      </div>
      {data.status !== 'REJECTED' ? (
        <div className="mt-6 flex w-full items-center space-x-4 lg:justify-end">
          <SecondaryButton
            className="w-full lg:w-[158px]"
            isDisable={loading}
            isSmall
            onClick={data.status === 'OFFERED' ? reject : openStatusModal}
            type="button"
          >
            {data.status === 'OFFERED' ? 'Tolak' : 'Status'}
          </SecondaryButton>
          <PrimaryButton
            className="w-full lg:w-[158px]"
            isDisable={loading}
            isSmall
            onClick={data.status === 'OFFERED' ? accept : null}
            type="button"
          >
            {data.status === 'OFFERED' ? (
              'Terima'
            ) : (
              <a
                className="flex items-center justify-center space-x-1"
                href={textToCustomer(
                  data.buyer_phone_number,
                  data.product_name,
                  data.product_offer,
                )}
                rel="noreferrer"
                target="_blank"
              >
                <span className="w-[92px] text-center">Hubungi di</span>
                <WhatsappIcon />
              </a>
            )}
          </PrimaryButton>
        </div>
      ) : (
        <p className="mt-6 text-center text-body-12 text-neutral-03">produk ini telah ditolak</p>
      )}
    </div>
  );
}
