import { Link } from 'react-router-dom';

export default function SimpleNavbar({ title }) {
  return (
    <header className="sticky top-0 flex h-[84px] w-full items-center bg-neutral-01 px-[136px] shadow-high after:flex-1">
      <div className="flex-1">
        <Link to="/">
          <div className="h-[34px] w-[100px] bg-primary-05"></div>
        </Link>
      </div>
      <div className="flex flex-1 justify-center">
        <p className="text-title-16">{title}</p>
      </div>
    </header>
  );
}
