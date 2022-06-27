import { MainNavbar } from '../../components/navbars';
import { ProfileCard2 } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';

export default function Interested() {
  return (
    <>
      <MainNavbar />
      <div className="space-y-6 px-[236px]">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <div className="flex flex-col items-center">
            <img className="mb-6" src="/img/img-not-interested.png" />
            <p className="w-[296px] text-center text-body-14 text-neutral-05">
              Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
            </p>
          </div>
        </SellerLayout>
      </div>
    </>
  );
}
