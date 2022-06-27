import { BackButton } from '../../components/button';
import { ProfileCard, BidCard } from '../../components/card';

export default function Bid() {
  return (
    <div className="absolute top-0 h-screen w-full overflow-auto">
      <header className="sticky top-0 flex h-[84px] w-full items-center bg-neutral-01 px-[136px] shadow-high">
        <div className="h-[34px] w-[100px] bg-primary-05"></div>
      </header>
      <div className="relative mx-auto w-[568px]">
        <BackButton className="absolute -left-[76px] top-0" />
        <div className="mt-10">
          <ProfileCard />
          <p className="my-6 text-body-14 font-medium"> Daftar Produkmu yang Ditawar </p>
          <div className="flex flex-col space-y-6">
            <BidCard />
            <BidCard />
          </div>
        </div>
      </div>
    </div>
  );
}
