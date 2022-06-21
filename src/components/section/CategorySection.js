import { BoxIcon, ChevronRightIcon, HeartIcon, DollarSignIcon } from "../icon";

export default function CategorySection() {
  return (
    <div className="flex w-fit flex-col gap-6 rounded-2xl bg-[#FFFFFF] p-6 shadow-high">
      <p className="text-title-16 font-medium">Kategori</p>
      <div className="flex flex-col gap-4">
        <button type="button" className="group flex gap-2 border-b-[1px] border-neutral-02 pb-4">
          <BoxIcon className="h-6 w-6 text-neutral-03 group-hover:text-primary-04" />
          <p className="w-[156px] text-start text-title-16 text-neutral-05 group-hover:font-medium group-hover:text-primary-04">
            Semua Produk
          </p>
          <ChevronRightIcon className="h-6 w-6 text-neutral-02 group-hover:text-primary-04" />
        </button>
        <button type="button" className="group flex gap-2 border-b-[1px] border-neutral-02 pb-4">
          <HeartIcon className="h-6 w-6 text-neutral-03 group-hover:text-primary-04" />
          <p className="w-[156px] text-start text-title-16 text-neutral-05 group-hover:font-medium group-hover:text-primary-04">
            Diminati
          </p>
          <ChevronRightIcon className="h-6 w-6 text-neutral-02 group-hover:text-primary-04" />
        </button>
        <button type="button" className="group flex gap-2 border-neutral-02 pb-4">
          <DollarSignIcon className="h-6 w-6 text-neutral-03 group-hover:text-primary-04" />
          <p className="w-[156px] text-start text-title-16 text-neutral-05 group-hover:font-medium group-hover:text-primary-04">
            Terjual
          </p>
          <ChevronRightIcon className="h-6 w-6 text-neutral-02 group-hover:text-primary-04" />
        </button>
      </div>
    </div>
  );
}
