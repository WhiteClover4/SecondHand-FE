import { ArrowLeftIcon } from "../icon";

export default function BackButton({ ...rest }) {
  return (
    <button {...rest}>
      <ArrowLeftIcon className="w-6 h-6 text-neutral-05" />
    </button>
  );
}
