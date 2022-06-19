import { PlusIcon } from "../icon";

export default function FileInput() {
    return (
        <button className=" w-full h-[198px] bg-white border border-neutral-02 border-dashed rounded-xl ">
            <PlusIcon className=" w-6 h-6 text-neutral-03 m-auto " />
            <p className="text-body-12 text-neutral-03 mt-2"> Tambah Produk </p>
        </button >
    );
}