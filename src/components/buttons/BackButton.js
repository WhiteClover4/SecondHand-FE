import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../icons';

export default function BackButton({ ...rest }) {
  const navigate = useNavigate();
  return (
    <button {...rest} onClick={() => navigate(-1)} type="button">
      <ArrowLeftIcon className="h-6 w-6 text-neutral-05" />
    </button>
  );
}
