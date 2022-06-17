export default function AuthLayout({ children }) {
  return (
    <div className="mx-auto grid h-[950px] w-[1440px] grid-cols-2 bg-white">
      <div className="relative w-full">
        <img className="" src="img/img-bg-auth.png" alt="bg-auth" />
        <p className="absolute top-[439px] left-20 w-[154px] text-[40px] font-bold leading-[36px] text-white ">Second Hand.</p>
        <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-[#a06ece] to-transparent opacity-50">a</div>
      </div>
      <div className="m-auto ">{children}</div>
    </div>
  );
}
