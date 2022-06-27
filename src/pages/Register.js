import { LabelPasswordInput, LabelTextInput } from '../components/input';
import PageAuthLayout from './PageAuthLayout';

export default function Register() {
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-slate-600 relative h-full w-1/2">
        <PageAuthLayout />
      </div>
      <main className="flex h-full w-1/2 items-center px-[134px]">
        <div className="flex flex-col items-center">
          <div className="w-full"></div>
          <div className="text-heading-24 font-bold">
            <p> Daftar </p>
            <div className="mt-6 w-[452px] text-body-12 font-normal">
              <p>Nama</p>
              <LabelTextInput className="mt-1 h-12" placeholder="Nama Lengkap" />
            </div>
            <div className="mt-6 w-[452px] text-body-12 font-normal">
              <p>Email</p>
              <LabelTextInput className="mt-1 h-12" placeholder="Contoh: Johndee@gmail.com" />
            </div>
            <div className="mt-4 text-body-12 font-normal">
              <p>Password</p>
              <LabelPasswordInput className="mt-1 h-12 " placeholder="Masukkan Password" />
            </div>
            <div className="mt-6">
              <button className="h-12 w-[452px] rounded-xl bg-primary-04 text-center" type="button">
                <p className=" text-body-14 font-medium text-neutral-01"> Daftar </p>
              </button>
            </div>
            <div className="mt-10 flex justify-center">
              <p className="text-body-14 font-normal"> Sudah punya akun? </p>
              <p className="ml-2 text-body-14 font-bold text-primary-04"> Masuk di sini?</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
