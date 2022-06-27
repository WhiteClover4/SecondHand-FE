import { ArrowLeftIcon } from '../icons';

export default function BackButton({ ...rest }) {
  return (
    <button {...rest}>
      <ArrowLeftIcon className="h-6 w-6 text-neutral-05" />
    </button>
  );
}
