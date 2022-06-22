import { PlusIcon } from "../icon";

export default function InputButton() {
  return (
    <button className=" h-24 w-24 rounded-xl border border-dashed border-neutral-02  ">
      <PlusIcon className=" m-auto h-6 w-6 text-neutral-03 " />
    </button>
  );
}