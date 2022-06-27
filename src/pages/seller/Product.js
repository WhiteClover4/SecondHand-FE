import { BackButton, PrimaryButton, SecondaryButton } from '../../components/button';
import {
  FileInput2,
  LabelOptionInput,
  LabelTextareaInput,
  LabelTextInput,
} from '../../components/input';

export default function SellerProduct() {
  return (
    <div className="absolute top-0 h-screen w-full overflow-auto">
      <header className="sticky top-0 flex h-[84px] w-full items-center bg-neutral-01 px-[136px] shadow-high">
        <div className="h-[34px] w-[100px] bg-primary-05"></div>
      </header>
      <div className="relative mx-auto mt-10 w-[568px]" onSubmit={(e) => e.preventDefault()}>
        <BackButton className="absolute -left-[76px] top-0" />
        <form>
          <div className="space-y-4">
            <LabelTextInput label="Nama produk" placeholder="Nama Produk" />
            <LabelTextInput label="Harga Produk" placeholder="Rp. 0,00" />
            <LabelOptionInput label="Kategori" />
            <LabelTextareaInput label="Deskripsi" placeholder="Contoh: Jalan Ikan Hiu 33" />
          </div>
          <div className="mt-4">
            <label className="text-body-12 font-normal"> Foto Produk </label>
            <FileInput2 className="mt-1" />
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <SecondaryButton className="w-full" type="button">
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
