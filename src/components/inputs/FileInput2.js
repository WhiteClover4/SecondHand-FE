import { PlusIcon } from '../icons';

export default function FileInput2({ className, onChange }) {
  return (
    <button
      className={`bg-white relative h-24 w-24 rounded-xl border border-dashed border-neutral-02 lg:w-full ${className}`}
    >
      <input
        accept="image/*"
        className="absolute top-0 left-0 h-full w-full opacity-0"
        onChange={onChange}
        type="file"
      />
      <PlusIcon className=" m-auto h-6 w-6 text-neutral-03 " />
    </button>
  );
}
