export default function Card2() {
  return (
    <div className="flex w-[328px] flex-row  ">
      <img src="/img/img-notification.png" alt="img-notification" className="mr-4 h-12 w-12 rounded-xl object-cover" />
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center justify-between text-body-10 ">
          <p className="grow text-neutral-03">Penawaran produk</p>
          <p className="mx-2 text-neutral-03">20 Apr, 14:04</p>
          <img src="/img/alert-notification.png" alt="img-notification" className="h-2 w-2" />
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
