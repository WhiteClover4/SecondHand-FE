import { SecondaryButton } from '../button';


export default function ProfileCard() {
  return (
    <div className="flex h-20 flex-row items-center rounded-xl bg-neutral-01 p-4 shadow-low">
      <img alt="profilcard" className="h-12 w-12 rounded object-cover" src="/img/profilcard.png" />
      <div className="ml-4 space-y-1 grow">
        <p className="text-body-14 font-medium"> Nama Penjual </p>
        <p className="text-body-10 text-neutral-03"> Kota </p>
      </div>
      <SecondaryButton className="font-medium py-1 px-3 rounded-lg" >
        Edit
      </SecondaryButton>
    </div>
  );
}
