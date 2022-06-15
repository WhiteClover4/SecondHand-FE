import { PlusIcon } from "../icon";

export default function AddProductInput() {
    return (
        <button className=" w-full h-[198px] border border-neutral-02 border-dashed rounded-xl ">
            <div className=" w-35 h-12 ">
            <PlusIcon className=" w-6 h-6 text-neutral-03 m-auto " />
            <p className="text-body-12 text-neutral-03 m-auto"> Tambah Produk </p>
            </div>
        </button>
    );
}