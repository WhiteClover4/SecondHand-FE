export default function LoginLayout({ children }) {
  return (
    <div className="flex flex-row items-center">
      <img src="/img/login.png" alt="login" />
      <div className="text-heading-24  font-bold">
        <p> Masuk </p>
        <div class="text-body-14">
          <p>Email</p>
          <input type="email" placeholder="Contoh: johndee@gmail.com" class="form-control" />
        </div>
        <div class="text-body-14">
          <p>Password</p>
          <input type="password" placeholder="Masukkan Password" class="form-control" />
        </div>
      </div>
    </div>
  );
}