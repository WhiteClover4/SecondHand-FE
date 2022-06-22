import LabelPasswordInput from "../input/LabelPasswordInput";
import LabelTextInput from "../input/LabelTextInput";
import AuthLayout from "./AuthLayout";

export default function login ({ children }) {
  return (
    <div className="flex h-screen w-screen">
      <div className="relative h-full w-1/2 bg-slate-600">
       < AuthLayout />
      </div>
      <main className="flex h-full w-1/2 items-center px-[134px]">
        <div className="flex flex-col items-center">
          <div className="w-full">{children}</div>
          <div className="text-heading-24 font-bold">
            <p> Masuk </p>
            <div class="mt-6 w-[452px] text-body-12 font-normal">
              <p>Email</p>
              <LabelTextInput
                className="mt-1 h-12"
                placeholder="Contoh: Johndee@gmail.com"
              />
            </div>
            <div class="mt-4 text-body-12 font-normal">
              <p>Password</p>
              <LabelPasswordInput
                className="mt-1 h-12 "
                placeholder="Masukkan Password"
              />
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="h-12 w-[452px] rounded-xl bg-primary-04 text-center"
              >
                <p className=" text-body-14 font-medium text-neutral-01">
                  {" "}
                  Masuk{" "}
                </p>
              </button>
            </div>
            <div className="mt-10 flex justify-center">
              <p className="text-body-14 font-normal"> Belum punya akun? </p>
              <p className="ml-2 text-body-14 font-bold text-primary-04">
                {" "}
                Daftar di sini
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
