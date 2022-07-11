export default function ProfileCard({ data }) {
  return (
    <div className="flex w-full flex-row items-center space-x-4 rounded-xl bg-neutral-01 p-4 shadow-low">
      <div>
        <div className="h-12 w-12">
          <img
            alt="profilcard"
            className="h-full w-full rounded-xl object-cover"
            src={data.profile_picture}
          />
        </div>
      </div>
      <div className="w-full space-y-1">
        <p className="text-body-14 font-medium">{data.name}</p>
        <p className="text-body-10 text-neutral-03">{data.city}</p>
      </div>
    </div>
  );
}
