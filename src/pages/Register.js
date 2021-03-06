import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackButton, PrimaryButton } from '../components/buttons';
import { LabelPasswordInput, LabelTextInput } from '../components/inputs';
import { AuthLayout } from '../components/layouts';
import { GoogleIcon } from '../components/icons';
import useAuth from '../hooks/dependent/useAuth';
import AuthenticationRoute from '../routes/AuthenticationRoute';

export default function Register() {
  const { register, loading, registerWithGoogle } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const setFormInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <AuthenticationRoute>
      <AuthLayout>
        <BackButton className="absolute top-[14px] left-4 lg:hidden" />
        <h1 className="text-heading-24 font-bold">Daftar</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <LabelTextInput
            autoFocus
            id="name"
            label="Nama"
            margin="mt-6"
            name="name"
            onChange={setFormInput}
            placeholder="Nama Lengkap"
            value={form.name}
          />
          <LabelTextInput
            id="email"
            label="Email"
            margin="mt-4"
            name="email"
            onChange={setFormInput}
            placeholder="Contoh: johndee@gmail.com"
            value={form.email}
          />
          <LabelPasswordInput
            id="password"
            label="Password"
            margin="mt-4"
            name="password"
            onChange={setFormInput}
            placeholder="Masukkan password"
            value={form.password}
          />
          <PrimaryButton
            className="mt-6 w-full"
            data-testid="register-button"
            isDisable={loading.register}
            onClick={() => register(form.name, form.email, form.password)}
            type="submit"
          >
            Daftar
          </PrimaryButton>

          <button
            className="mt-6 flex w-full items-center justify-center space-x-2 rounded-2xl py-2 shadow-low"
            disabled={loading.register}
            onClick={registerWithGoogle}
            type="button"
          >
            <span className="text-body-14">Daftar dengan</span>
            <GoogleIcon className="h-8 w-8" />
          </button>
        </form>
        <div className="absolute bottom-6 left-0 flex w-full items-center justify-center space-x-2 lg:static lg:mt-10">
          <p className="text-body-14 text-[#151515] lg:text-[#000]">Sudah punya akun?</p>
          <Link className="inline-block text-body-14 font-bold text-primary-04" to="/login">
            Masuk di sini
          </Link>
        </div>
      </AuthLayout>
    </AuthenticationRoute>
  );
}
