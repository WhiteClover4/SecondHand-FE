export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-screen">
      <div className="h-full w-1/2 bg-red-300"></div>
      <div className="flex h-full w-1/2 items-center bg-blue-300 px-[134px]">
        <div className="bg-green-300 w-full">{children}</div>
      </div>
    </div>
  );
}
