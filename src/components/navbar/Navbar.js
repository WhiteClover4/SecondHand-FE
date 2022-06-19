import PrimaryButton from "../button/PrimaryButton";
import SearchInput from "../input/SearchInput";
import { HomeLogoIcon } from "../icon";
import { SignInIcon } from "../icon";

export default function Navbar() {
  return (
    <div className="sticky top-0 mb-8 flex h-[84px] items-center justify-between bg-neutral-01 px-[136px] shadow-high">
      <div className="flex flex-row items-center">
        <HomeLogoIcon className="mr-6 h-[34px] w-[100px] text-primary-05" />
        <SearchInput />
      </div>
      <PrimaryButton>
        <div className="flex flex-row">
          <SignInIcon className="mr-2 w-5" />
          <p>Masuk</p>
        </div>
      </PrimaryButton>
    </div>
  );
}
