import { PrimaryButton } from '../buttons';
import { ProfileCardSkeleton } from './';

export default function ProductDetailSkeleton() {
  return (
    <div className="flex flex-row justify-center gap-8 px-[236px] ">
      <div className="w-2/3 space-y-6 ">
        <div className="relative h-[436px] animate-pulse overflow-hidden rounded-2xl bg-neutral-03/30"></div>
        <div className="space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low">
          <p className="text-black h-5 w-1/6 animate-pulse bg-neutral-03/30 text-body-14 font-medium"></p>
          {[1, 2, 3, 4, 5].map((el) => (
            <p
              key={el}
              className="h-5 w-full animate-pulse bg-neutral-03/30 text-body-14 text-neutral-03"
            ></p>
          ))}
        </div>
      </div>
      <div className="w-1/3 space-y-6">
        <div className="flex flex-col rounded-2xl px-4 pb-6 pt-4 shadow-high">
          <p className="text-black mb-2 h-6 w-3/4 animate-pulse bg-neutral-03/30 text-title-16 font-medium"></p>
          <p className="mb-4 h-5 w-1/3 animate-pulse bg-neutral-03/30 text-body-14 text-neutral-03"></p>
          <div className="text-black mb-6 h-6 w-1/2 animate-pulse bg-neutral-03/30 text-title-16"></div>
          <PrimaryButton isDisable type="button"></PrimaryButton>
        </div>
        <ProfileCardSkeleton />
      </div>
    </div>
  );
}
