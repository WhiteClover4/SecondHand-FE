export default function ProfileCard() {
  return (
    <div className="flex h-20 w-[336px] flex-row items-center rounded-xl bg-neutral-01 p-4 shadow-low">
      <img src="/img/profilcard.png" alt="profilcard" className="h-12 w-12 rounded object-cover" />
      <div className="ml-4 space-y-1">
        <p className="text-body-14 font-medium"> Nama Penjual </p>
        <p className="text-body-10 text-neutral-03"> Kota </p>
      </div>
    </div>
  );
}
