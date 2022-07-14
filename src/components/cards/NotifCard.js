/* eslint-disable indent */
export default function NotifCard({ data, handleClick }) {
  const isBuyer = data.role === 'buyer';

  return (
    <div
      className="flex w-full cursor-pointer flex-row border-b border-b-[#E5E5E5] pt-4 pb-4"
      onClick={handleClick}
    >
      <img
        alt="img-notification"
        className="mr-4 h-12 w-12 rounded-xl object-cover"
        src="/img/img-notification.png"
      />
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center justify-between text-body-10 ">
          <p className="grow text-neutral-03">{data.message}</p>
          <p className="mx-2 text-neutral-03">{data.date}</p>
          {!data.is_read && (
            <img alt="img-notification" className="h-2 w-2" src="/img/alert-notification.png" />
          )}
        </div>
        <div className="space-y-1 text-body-14">
          <p>{data.product_name}</p>
          <p className={`${isBuyer && 'line-through'} text-neutral-05`}>
            Rp {data.product_price.toLocaleString('id-ID')}
          </p>
          {data.product_offer_price && (
            <p className="text-neutral-05">
              {isBuyer && 'Berhasil'} Ditawar Rp {data.product_offer_price.toLocaleString('id-ID')}
            </p>
          )}
          {isBuyer && (
            <p className="text-body-10 text-neutral-03">
              Kamu akan segera dihubungi penjual via whatsapp
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
