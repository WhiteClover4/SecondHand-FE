import { Navbar2 } from '../../components/navbar';
import { ProfileCard2 } from '../../components/card';
import { SellerLayout } from '../../components/layout';

export default function InterestedSeller() {
  return (
    <>
      <Navbar2 />
      <div className="space-y-6 px-[236px]">
        <p className="text-black text-heading-20 font-bold">Daftar Jual Saya</p>
        <ProfileCard2 />
        <SellerLayout>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform px-[10px]">
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
