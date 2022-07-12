import { useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../buttons';

export default function ProfileCard2({ data }) {
  const navigate = useNavigate();
  return (
    <div className="flex h-20 flex-row items-center rounded-xl bg-neutral-01 p-4 shadow-low">
      <img
        alt="profilcard"
        className="h-12 w-12 rounded-xl object-cover"
        src={data.profile_picture || '/img/a5cff95160773ed4b391783e4d440b26.jpeg'}
      />
      <div className="ml-4 grow space-y-1">
        <p className="text-body-14 font-medium">{data.name}</p>
        <p className="text-body-10 text-neutral-03">{data.city}</p>
      </div>
      <SecondaryButton
        className="rounded-lg py-1 px-3 font-medium"
        onClick={() => navigate('/profile')}
        type="button"
      >
        Edit
      </SecondaryButton>
    </div>
  );
}
