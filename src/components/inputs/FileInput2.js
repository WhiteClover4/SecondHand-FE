import { PlusIcon } from '../icons';

export default function FileInput2({ className }) {
  return (
    <button
      className={`bg-white h-24 w-full rounded-xl border border-dashed border-neutral-02 ${className}`}
    >
      <PlusIcon className=" m-auto h-6 w-6 text-neutral-03 " />
    </button>
  );
}
