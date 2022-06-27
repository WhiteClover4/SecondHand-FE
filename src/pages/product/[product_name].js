import { MainNavbar } from '../../components/navbars';
import { PrimaryButton, SecondaryButton } from '../../components/buttons';
import { ProfileCard2 } from '../../components/cards';

export default function ProductDetail() {
  return (
    <div>
      <MainNavbar />
      <div className="flex flex-row justify-center gap-8 px-[236px] ">
        <div className="w-2/3 space-y-6 ">
          <div className="relative overflow-hidden">
            <img className="w-full" src="/img/img.png" />
          </div>
          <div className="space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low">
            <p className="text-black text-body-14 font-medium">Deskripsi</p>
            <p className="text-body-14 text-neutral-03 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p className="text-body-14 text-neutral-03 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-1/3 space-y-6">
          <div className="flex flex-col rounded-2xl px-4 pb-6 pt-4 shadow-high">
            <p className="text-black mb-2 text-title-16 font-medium">Jam Tangan Casio</p>
            <p className="mb-4 text-body-14 text-neutral-03">Aksesoris</p>
            <div className="text-black mb-6 text-title-16">Rp 250.000</div>
            <PrimaryButton className="mb-[14px]">Terbitkan</PrimaryButton>
            <SecondaryButton>Edit</SecondaryButton>
          </div>
          <ProfileCard2 />
        </div>
      </div>
    </div>
  );
}
