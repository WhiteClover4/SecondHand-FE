import { PrimaryButton } from '../buttons';
import { ProfileCardSkeleton } from './';

export default function ProductDetailSkeleton() {
  return (
    <div className="mb-20 flex-row justify-center gap-8 lg:mb-0 lg:flex lg:px-[236px]">
      <div className="lg:w-2/3 lg:space-y-6">
        <div className="relative h-[300px] overflow-hidden bg-neutral-02/30 lg:h-[436px] lg:rounded-2xl"></div>
        <div className="hidden space-y-4 rounded-2xl px-4 pb-[27px] pt-4 shadow-low lg:block">
          <p className="text-black h-5 w-1/6 animate-pulse bg-neutral-02/30 text-body-14 font-medium"></p>
          {[1, 2, 3, 4, 5].map((el) => (
            <p
              key={el}
              className="h-5 w-full animate-pulse bg-neutral-02/30 text-body-14 text-neutral-03"
            ></p>
          ))}
        </div>
      </div>
      <div className="relative -top-8 z-10 mx-4 space-y-4 lg:static lg:mx-0 lg:w-1/3 lg:space-y-6">
        <div className="flex flex-col rounded-2xl bg-neutral-01 px-4 pb-6 pt-4 shadow-high">
          <p className="text-black mb-2 h-6 w-3/4 animate-pulse bg-neutral-02/30 text-title-16 font-medium"></p>
          <p className="mb-4 h-5 w-1/3 animate-pulse bg-neutral-02/30 text-body-14 text-neutral-03"></p>
          <div className="text-black mb-6 h-6 w-1/2 animate-pulse bg-neutral-02/30 text-title-16"></div>
          <PrimaryButton isDisable type="button"></PrimaryButton>
        </div>
        <ProfileCardSkeleton />
      </div>
    </div>
  );
}
