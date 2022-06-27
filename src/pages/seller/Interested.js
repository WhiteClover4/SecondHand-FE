import { MainNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';

export default function Interested() {
  return (
    <>
      <MainNavbar />
      <SellerLayout active={2}>
        <div className="flex flex-col items-center">
          <img className="mb-6" src="/img/img-not-interested.png" />
          <p className="w-[296px] text-center text-body-14 text-neutral-05">
            Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
          </p>
        </div>
      </SellerLayout>
    </>
  );
}
