import { useNavigate } from 'react-router-dom';
import { BackButton, PrimaryButton, SecondaryButton } from '../../../components/buttons';
import {
  FileInput2,
  LabelOptionInput,
  LabelTextareaInput,
  LabelTextInput,
} from '../../../components/inputs';
import { SimpleNavbar } from '../../../components/navbars';

export default function ProductSeller() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 h-screen w-full overflow-auto">
      <SimpleNavbar />
      <div className="relative mx-auto mt-10 w-[568px]" onSubmit={(e) => e.preventDefault()}>
        <BackButton className="absolute -left-[76px] top-0" />
        <form>
          <div className="space-y-4">
            <LabelTextInput label="Nama produk" placeholder="Nama Produk" />
            <LabelTextInput label="Harga Produk" placeholder="Rp. 0,00" />
            <LabelOptionInput label="Kategori" />
            <LabelTextareaInput label="Deskripsi" placeholder="Contoh: Jalan Ikan Hiu 33" />
          </div>
          <div className="mt-4 flex flex-col space-y-1">
            <p className="text-body-12 font-normal"> Foto Produk </p>
            <div className="grid grid-cols-4 gap-x-6">
              <FileInput2 />
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <SecondaryButton
              className="w-full"
              onClick={() => navigate('/seller/product/add/preview')}
              type="button"
            >
              Preview
            </SecondaryButton>
            <PrimaryButton className="w-full" type="submit">
              Terbitkan
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}