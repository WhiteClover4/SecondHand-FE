import { PlusIcon } from '../icon';

export default function FileInput() {
  return (
    <button className="h-[198px] w-full rounded-xl border border-dashed border-neutral-02 bg-white ">
      <PlusIcon className=" m-auto h-6 w-6 text-neutral-03 " />
      <p className="mt-2 text-body-12 text-neutral-03"> Tambah Produk </p>
    </button>
  );
}
