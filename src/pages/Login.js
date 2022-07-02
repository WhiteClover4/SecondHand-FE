import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, BackButton } from '../components/buttons';
import { LabelPasswordInput, LabelTextInput } from '../components/inputs';
import { AuthLayout } from '../components/layouts';
import useAuth from '../hooks/dependent/useAuth';
import AuthenticationRoute from '../routes/AuthenticationRoute';

export default function Login() {
  const { login, loading } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });

  const setFormInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <AuthenticationRoute>
      <AuthLayout>
        <BackButton className="absolute top-[14px] left-4 lg:hidden" />
        <h1 className="text-heading-24 font-bold">Masuk</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(form.email, form.password);
          }}
        >
          <LabelTextInput
            autoFocus
            id="email"
            label="Email"
            margin="mt-6"
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
          <PrimaryButton className="mt-6 w-full" isDisable={loading.login} type="submit">
            Masuk
          </PrimaryButton>
        </form>
        <div className="absolute bottom-6 left-0 flex w-full items-center justify-center space-x-2 lg:static lg:mt-10">
          <p className="text-body-14 text-[#151515] lg:text-[#000]">Belum punya akun?</p>
          <Link className="inline-block text-body-14 font-bold text-primary-04" to="/register">
            Daftar di sini
          </Link>
        </div>
      </AuthLayout>
    </AuthenticationRoute>
  );
}
