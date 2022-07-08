import { SimpleNavbar } from '../../components/navbars';
import { SellerLayout } from '../../components/layouts';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

export default function Interested() {
  return (
    <AuthenticatedRoute>
      <SimpleNavbar />
      <SellerLayout active={2}>
        <div className="mt-14 flex flex-col items-center">
          <img className="mb-4 w-[172px] lg:mb-6 lg:w-fit" src="/img/img-not-interested.png" />
          <p className="w-[296px] text-center text-body-14 text-neutral-03 lg:text-neutral-05">
            Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
          </p>
        </div>
      </SellerLayout>
    </AuthenticatedRoute>
  );
}
