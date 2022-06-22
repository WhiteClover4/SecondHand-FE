import { BoxIcon, ChevronRightIcon, HeartIcon, DollarSignIcon } from '../icon';

export default function Category() {
  return (
    <div className="flex w-fit flex-col gap-6 rounded-2xl bg-[#FFFFFF] p-6 shadow-high">
      <p className="text-title-16 font-medium">Kategori</p>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="flex gap-2 border-b-[1px] border-neutral-02 pb-4 hover:text-primary-04"
        >
          <BoxIcon className="h-6 w-6" />
          <p className="w-[156px] text-start text-title-16 font-medium">Semua Produk</p>
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          className="flex gap-2 border-b-[1px] border-neutral-02 pb-4 hover:text-primary-04"
        >
          <HeartIcon className="h-6 w-6" />
          <p className="w-[156px] text-start text-title-16 font-medium">Diminati</p>
          <ChevronRightIcon className=" h-6 w-6" />
        </button>
        <button type="button" className="flex gap-2  hover:text-primary-04">
          <DollarSignIcon className="h-6 w-6" />
          <p className="w-[156px] text-start text-title-16 font-medium">Terjual</p>
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
