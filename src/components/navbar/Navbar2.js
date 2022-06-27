import { BellIcon, HomeLogoIcon, ListIcon, UserIcon } from '../icon';
import { SearchInput } from '../input';

export default function Navbar2() {
  return (
    <div className="sticky top-0 z-10 mb-10 flex h-[84px] items-center justify-between bg-neutral-01 px-[136px] shadow-high">
      <div className="flex flex-row items-center">
        <HomeLogoIcon className="mr-6 h-[34px] w-[100px] text-primary-05" />
        <SearchInput />
      </div>
      <div className="flex flex-row gap-6">
        <button>
          <ListIcon className="mr-2 w-6" />
        </button>
        <button>
          <BellIcon className="mr-2 w-6" />
        </button>
        <button>
          <UserIcon className="mr-2 w-6" />
        </button>
      </div>
    </div>
  );
}
