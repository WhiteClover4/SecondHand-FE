export default function ProductCardSkeleton() {
  return (
    <div className="w-full rounded bg-neutral-01 p-2 pb-4 shadow-low">
      <div className="h-[100px] w-full animate-pulse rounded bg-neutral-02/30 object-cover" />
      <p className="mt-2 h-5 w-5/6 animate-pulse rounded bg-neutral-02/30 text-body-14"></p>
      <p className="mt-1 h-[14px] w-1/5 animate-pulse rounded bg-neutral-02/30 text-body-10 text-neutral-03"></p>
      <p className="mt-2 h-5 w-1/3 animate-pulse rounded bg-neutral-02/30 text-body-14"></p>
    </div>
  );
}
