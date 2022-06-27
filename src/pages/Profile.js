import { BackButton, PrimaryButton } from '../components/button';
import {
  FileInput3,
  LabelOptionInput,
  LabelTextareaInput,
  LabelTextInput,
} from '../components/input';

export default function SellerProduct() {
  return (
    <div className="absolute top-0 h-screen w-full overflow-auto">
      <header className="sticky top-0 flex h-[84px] w-full items-center bg-neutral-01 px-[136px] shadow-high">
        <div className="h-[34px] w-[100px] bg-primary-05"></div>
      </header>
      <div className="relative mx-auto mt-10 w-[568px]" onSubmit={(e) => e.preventDefault()}>
        <BackButton className="absolute -left-[76px] top-0" />
        <div className="flex w-full justify-center">
          <FileInput3 />
        </div>
        <form className="mt-6">
          <div className="space-y-4">
            <LabelTextInput autoFocus label="Nama*" placeholder="Nama" />
            <LabelOptionInput label="Kota*" />
            <LabelTextareaInput label="Alamat*" placeholder="Contoh: Jalan Ikan Hiu 33" />
            <LabelTextInput label="No Handphone*" placeholder="contoh: +628123456789" />
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <PrimaryButton className="w-full" type="submit">
              Simpan
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
