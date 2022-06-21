export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen w-screen">
      <div className="relative h-full w-1/2 bg-slate-600">
        <p className="absolute top-1/2 left-20 w-[154px] -translate-y-1/2 transform text-[40px] font-bold leading-9 text-white">
          Second Hand.
        </p>
        <div className="absolute h-full w-full bg-gradient-to-t from-[#A06ECE] opacity-50"></div>
        <img src="/img/img-bg-auth.png" className="h-full w-full object-cover" />
      </div>
      <div className="flex h-full w-1/2 items-center px-[134px]">
        <div className="flex w-full flex-col items-center">{children}</div>
      </div>
    </div>
  );
}
