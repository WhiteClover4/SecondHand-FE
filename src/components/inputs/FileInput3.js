import { CameraIcon } from '../icons';

export default function FileInput3({ preview, onChange }) {
  return (
    <button className="relative h-24 w-24 overflow-hidden rounded-xl">
      {preview ? (
        <img className="h-full w-full object-contain" src={preview} />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#E2D4F0]">
          <CameraIcon className="h-6 w-6 text-primary-04" />
        </div>
      )}
      <input
        accept="image/*"
        className="absolute top-0 left-0 h-full w-full opacity-0"
        onChange={onChange}
        type="file"
      />
    </button>
  );
}
