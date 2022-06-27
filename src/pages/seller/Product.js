import InputButton from '../../components/button/InputButton';
import { ArrowLeftIcon } from '../../components/icon';
import {
  LabelOptionInputProduct,
  LabelTextareaInput,
  LabelTextInput,
} from '../../components/input';

export default function SellerProduct() {
  return (
    <div className="h-[950px] w-[1440px] bg-neutral-01">
      <div className=" flex h-[84px] w-[1440px] items-center shadow-low">
        <img alt="Rectangle-127" className="ml-[136px]" src="/img/Rectangle-127.png" />
        <p className=" text-body-16 ml-[409px] font-normal">Lengkapi Info Akun</p>
      </div>
      <button className="mt-[45px] ml-[341px]" type="button">
        <ArrowLeftIcon className="h-6 w-6 text-neutral-05 " />
      </button>
      <div className="m-auto h-[70px] w-[568px] items-center">
        <p className="text-body-12 font-normal"> Nama produk </p>
        <LabelTextInput placeholder="Nama Produk" />
        <p className="mt-4 text-body-12 font-normal"> Harga Produk </p>
        <LabelTextInput placeholder="Rp. 0,00" />
        <p className="mt-4 text-body-12 font-normal"> Kategori </p>
        <LabelOptionInputProduct />
        <p className="mt-4 text-body-12 font-normal"> Deskripsi </p>
        <LabelTextareaInput placeholder="Contoh: Jalan Ikan Hiu 33" />
        <p className="mt-4 text-body-12 font-normal"> Foto Produk </p>
        <button className="mt-1">
          <InputButton />
        </button>
        <div className="mt-6 w-[568px]">
          <button className="h-12 w-[276px] rounded-2xl border border-primary-04">
            <p className=" bg-neutral-01 px-6 text-body-14 font-medium text-neutral-05">
              {' '}
              Preview{' '}
            </p>
          </button>
          <button
            className="ml-4 h-12 w-[276px] rounded-2xl bg-primary-04 text-center"
            type="button"
          >
            <p className=" text-body-14 font-medium text-neutral-01"> Terbitkan </p>
          </button>
        </div>
      </div>
    </div>
  );
}
