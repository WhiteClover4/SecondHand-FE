import { PlusIcon } from "../icon";

export default function InputButton()
{
    return (
        <button className=" w-24 h-24 border border-neutral-02 border-dashed rounded-xl  ">
            <PlusIcon className=" w-6 h-6 text-neutral-03 m-auto " />
        </button>

    );
}