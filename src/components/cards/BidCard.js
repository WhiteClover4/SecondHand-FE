import { PrimaryButton, SecondaryButton } from '../buttons';
import { WhatsappIcon } from '../icons';

export default function BidCard({ data, accept, reject, loading, openStatusModal }) {
  return (
    <div className="border-b border-[#E5E5E5] pb-4">
      <div className="flex w-full flex-row">
        <img
          alt="img-notification"
          className="mr-4 h-12 w-12 rounded-xl object-cover"
          src="/img/img-notification.png"
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
      <div className="mt-6 flex w-full items-center justify-end space-x-4">
        <SecondaryButton
          className="w-[158px]"
          isDisable={loading}
          isSmall
          onClick={!data.isCompleted ? reject : openStatusModal}
          type="button"
        >
          {!data.isCompleted ? 'Tolak' : 'Status'}
        </SecondaryButton>
        <PrimaryButton
          className="w-[158px]"
          isDisable={loading}
          isSmall
          onClick={!data.isCompleted ? accept : null}
          type="button"
        >
          {!data.isCompleted ? (
            'Terima'
          ) : (
            <div className="flex items-center space-x-1">
              <span className="w-[92px] text-center">Hubungi di</span>
              <WhatsappIcon />
            </div>
          )}
        </PrimaryButton>
      </div>
    </div>
  );
}
