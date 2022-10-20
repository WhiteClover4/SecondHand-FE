export default function ProductCard({ data, navigate }) {
  return (
    <div
      className="w-full rounded bg-neutral-01 p-2 pb-4 shadow-low"
      data-testid="product-card"
      onClick={navigate}
    >
      <img
        alt="CardImage"
        className="h-[100px] w-full rounded object-cover"
        src={data.ProductImage || '/img/no-product-image.png'}
      />
      <p className="mt-2 text-body-14">{data.name}</p>
      <p className="mt-1 text-body-10 text-neutral-03">{data.category}</p>
      <p className="mt-2 text-body-14">Rp {data.price.toLocaleString('id-ID')}</p>
    </div>
  );
}
