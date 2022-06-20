export default function CardSellerProductProfile() {
  return (
    <div className="py flex flex-row items-center gap-[16px] rounded-2xl py-4 pl-4 shadow-high">
      <img src="/img/img-profile2.png" />
      <div className="grow">
        <p className="text-body-14 font-medium text-black">Nama Penjual</p>
        <p className="text-body-10 text-neutral-03">Kota</p>
      </div>
    </div>
  );
}
