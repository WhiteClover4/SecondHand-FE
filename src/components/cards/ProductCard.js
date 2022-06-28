export default function ProductCard({ data, isSekeleton }) {
  return (
    <div className="w-full rounded bg-neutral-01 p-2 pb-4 shadow-low">
      {!isSekeleton ? (
        <img
          alt="CardImage"
          className="h-[100px] w-full rounded object-cover"
          src="/img/card-image.png"
        />
      ) : (
        <div className="h-[100px] w-full animate-pulse rounded bg-neutral-02 object-cover" />
      )}
      <p
        className={`${
          isSekeleton && 'h-4 w-5/6 animate-pulse rounded bg-neutral-02'
        } mt-2 text-body-14`}
      >
        {!isSekeleton ? data.name : ''}
      </p>
      <p
        className={`${
          isSekeleton && 'h-2 w-1/3 animate-pulse rounded bg-neutral-02'
        } mt-1 text-body-10 text-neutral-03`}
      >
        {!isSekeleton ? data.Category.name : ''}
      </p>
      <p
        className={`${
          isSekeleton && 'h-4 w-1/2 animate-pulse rounded bg-neutral-02'
        } mt-2 text-body-14`}
      >
        {!isSekeleton ? 'RP ' + data.price.toLocaleString('id-ID') : ''}
      </p>
    </div>
  );
}
