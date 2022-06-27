import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../components/buttons';
import { LabelPasswordInput, LabelTextInput } from '../components/inputs';
import { AuthLayout } from '../components/layouts';
import useAuth from '../hooks/dependent/useAuth';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, loading } = useAuth();

  const submit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <AuthLayout>
      <h1 className="text-heading-24 font-bold">Daftar</h1>
      <form onSubmit={(e) => submit(e)}>
        <LabelTextInput
          autoFocus
          label="Nama"
          margin="mt-6"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Lengkap"
          value={name}
        />
        <LabelTextInput
          label="Email"
          margin="mt-4"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contoh: johndee@gmail.com"
          value={email}
        />
        <LabelPasswordInput
          label="Password"
          margin="mt-4"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          value={password}
        />
        <PrimaryButton className="mt-6 w-full" isDisable={loading} type="submit">
          {!loading ? 'Daftar' : 'Loading....'}
        </PrimaryButton>
      </form>
      <div className="mt-10 flex items-center justify-center space-x-2">
        <p className="text-body-14">Sudah punya akun?</p>
        <Link className="inline-block text-body-14 font-bold text-primary-04" to="/login">
          Masuk di sini
        </Link>
      </div>
    </AuthLayout>
  );
}
