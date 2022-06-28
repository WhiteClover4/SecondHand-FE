export default function ProductCard({ navigate }) {
  return (
    <div className="w-full rounded bg-neutral-01 p-2 pb-4 shadow-low" onClick={navigate}>
      <img
        alt="CardImage"
        className="h-[100px] w-full rounded object-cover"
        src="/img/card-image.png"
      />
      <p className="mt-2 text-body-14">Jam Tangan Casio</p>
      <p className="mt-1 text-body-10 text-neutral-03">Aksesoris</p>
      <p className="mt-2 text-body-14">RP 250.000</p>
    </div>
  );
}