export default function AuthLayout({ children }) {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen overflow-auto">
      <div className="relative h-full w-1/2">
        <h1 className="absolute top-1/2 left-20 z-10 w-[154px] -translate-y-1/2 transform text-[40px] font-bold leading-9 text-neutral-01">
          Second Hand.
        </h1>
        <div
          className="absolute left-0 top-0 h-full w-full opacity-50"
          style={{
            background: 'linear-gradient(360deg, #A06ECE 50%, rgba(160, 110, 206, 0) 100%)',
          }}
        ></div>
        <img alt="backround" className="h-full w-full object-cover" src="/img/img-bg-auth.png" />
      </div>
      <main className="flex h-full w-1/2 items-center px-[134px]">
        <div className="flex w-full flex-col items-center">
          <div className="w-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
