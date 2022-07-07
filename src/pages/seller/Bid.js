import { BackButton } from '../../components/buttons';
import { ProfileCard, BidCard } from '../../components/cards';
import { SimpleNavbar } from '../../components/navbars';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

export default function Bid() {
  return (
    <AuthenticatedRoute>
      <div className="absolute top-0 h-screen w-full overflow-auto">
        <SimpleNavbar title="Info Penawar" />
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
    </AuthenticatedRoute>
  );
}
