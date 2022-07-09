export default function NotifCard({ data }) {
  return (
    <div className="flex w-full flex-row border-b border-b-[#E5E5E5] pt-4 pb-4">
      <img
        alt="img-notification"
        className="mr-4 h-12 w-12 rounded-xl object-cover"
        src="/img/img-notification.png"
      />
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center justify-between text-body-10 ">
          <p className="grow text-neutral-03">{data.message}</p>
          <p className="mx-2 text-neutral-03">{data.createdAt}</p>
          <img alt="img-notification" className="h-2 w-2" src="/img/alert-notification.png" />
        </div>
        <div className="space-y-1 text-body-14">
          <p>Jam Tangan Casio</p>
          <p className="text-neutral-05">Rp 250.000</p>
          <p className="text-neutral-05">Ditawar Rp 200.000</p>
        </div>
      </div>
    </div>
  );
}
