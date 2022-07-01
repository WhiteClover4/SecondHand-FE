export default function FileInput3({ preview, onChange }) {
  return (
    <button className="relative h-24 w-24 overflow-hidden rounded-xl">
      <img className="h-full w-full object-contain" src={preview} />
      <input
        accept="image/*"
        className="absolute top-0 left-0 h-full w-full opacity-0"
        onChange={onChange}
        type="file"
      />
    </button>
  );
}
