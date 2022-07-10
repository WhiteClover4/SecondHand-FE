import { Link } from 'react-router-dom';
import { PlusIcon } from '../icons';

export default function FileInput() {
  return (
    <Link
      className="bg-white flex h-[198px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-neutral-02 "
      to="/seller/product/add"
    >
      <PlusIcon className="h-6 w-6 text-neutral-03 " />
      <p className="mt-2 text-body-12 text-neutral-03"> Tambah Produk </p>
    </Link>
  );
}
