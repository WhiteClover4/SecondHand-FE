import { Link } from 'react-router-dom';
import { PrimaryButton } from '../components/button';
import { LabelPasswordInput, LabelTextInput } from '../components/input';
import { AuthLayout } from '../components/layout';

export default function Login() {
  return (
    <AuthLayout>
      <h1 className="text-heading-24 font-bold">Masuk</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <LabelTextInput
          autoFocus
          label="Email"
          margin="mt-6"
          placeholder="Contoh: johndee@gmail.com"
        />
        <LabelPasswordInput label="Password" margin="mt-4" placeholder="Masukkan password" />
        <PrimaryButton className="mt-6 w-full" type="submit">
          Masuk
        </PrimaryButton>
      </form>
      <div className="mt-10 flex items-center justify-center space-x-2">
        <p className="text-body-14">Belum punya akun?</p>
        <Link className="inline-block text-body-14 font-bold text-primary-04" to="/register">
          Daftar di sini
        </Link>
      </div>
    </AuthLayout>
  );
}
