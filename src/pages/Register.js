import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackButton, PrimaryButton } from '../components/buttons';
import { LabelPasswordInput, LabelTextInput } from '../components/inputs';
import { AuthLayout } from '../components/layouts';
import useAuth from '../hooks/dependent/useAuth';

export default function Register() {
  const { register, loading } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const setFormInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <AuthLayout>
      <BackButton className="mb-6 lg:hidden" />
      <h1 className="text-heading-24 font-bold">Daftar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register(form.name, form.email, form.password);
        }}
      >
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
        <PrimaryButton className="mt-6 w-full" isDisable={loading.register} type="submit">
          Daftar
        </PrimaryButton>
      </form>
      <div className="mt-[116px] flex items-center justify-center space-x-2 lg:mt-10">
        <p className="text-body-14">Sudah punya akun?</p>
        <Link className="inline-block text-body-14 font-bold text-primary-04" to="/login">
          Masuk di sini
        </Link>
      </div>
    </AuthLayout>
  );
}
