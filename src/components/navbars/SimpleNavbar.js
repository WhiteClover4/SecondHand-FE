import { Link } from 'react-router-dom';
import { BackButton } from '../buttons';

export default function SimpleNavbar({ title }) {
  return (
    <header className="sticky top-0 z-10 flex h-[52px] w-full items-center bg-neutral-01 py-[14px] px-4 after:w-6 lg:h-[84px] lg:py-0 lg:px-[136px] lg:shadow-high lg:after:w-[100px]">
      <div className="w-6 lg:w-[100px]">
        <BackButton className="lg:hidden" />
        <Link className="hidden lg:inline" to="/">
          <div className="h-[34px] w-[100px] bg-primary-05"></div>
        </Link>
      </div>
      <div className="flex flex-grow justify-center">
        <p className="text-body-14 font-medium lg:text-title-16 lg:font-normal">{title}</p>
      </div>
    </header>
  );
}
