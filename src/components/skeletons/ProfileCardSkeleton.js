export default function ProfileCardSkeleton() {
  return (
    <div className="flex w-full flex-row items-center rounded-xl bg-neutral-01 p-4 shadow-low">
      <div>
        <div className="h-12 w-12 animate-pulse rounded-xl bg-neutral-02/30" />
      </div>
      <div className="ml-4 w-full space-y-1">
        <p className="h-5 w-2/3 animate-pulse bg-neutral-02/30 text-body-14 font-medium"></p>
        <p className="h-[14px] w-1/5 animate-pulse bg-neutral-02/30 text-body-10 text-neutral-03"></p>
      </div>
    </div>
  );
}
