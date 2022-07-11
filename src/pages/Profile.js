import { useEffect } from 'react';
import { BackButton, PrimaryButton } from '../components/buttons';
import {
  FileInput3,
  LabelOptionInput,
  LabelTextareaInput,
  LabelTextInput,
} from '../components/inputs';
import { SimpleNavbar } from '../components/navbars';
import useProfile from '../hooks/dependent/useProfile';
import cities from '../_content/cities.json';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';

export default function SellerProduct() {
  const { getProfile, updateProfile, userData, setUserDataInput, loading, setFileInput } =
    useProfile();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <AuthenticatedRoute>
      <div className="absolute top-0 h-screen w-full overflow-auto">
        <div className="h-13 flex w-full items-center lg:hidden">
          <BackButton className=" mt-4 ml-4" />
          <p className="mx-auto mt-4 flex justify-center text-body-14 font-medium">
            {' '}
            Lengkapi Info Akun{' '}
          </p>
        </div>
        <div className="hidden lg:block">
          <SimpleNavbar title="Lengkapi Info Akun" />
        </div>
        <div className="relative mx-auto mt-10 hidden w-[568px] lg:block">
          <BackButton className="absolute -left-[76px] top-0" />
        </div>
        <div className="mt-10 flex justify-center lg:w-full lg:justify-center">
          <FileInput3 onChange={setFileInput} preview={userData.profile_picture} />
        </div>
        <form
          className=" relative mx-auto w-full px-[16px] lg:w-[568px] "
          onSubmit={(e) => {
            e.preventDefault();
            updateProfile();
          }}
        >
          <div className="space-y-4">
            <LabelTextInput
              autoFocus
              id="name"
              label="Nama*"
              name="name"
              onChange={setUserDataInput}
              placeholder="Nama"
              value={userData.name || ''}
            />
            <LabelOptionInput
              id="city"
              label="Kota*"
              name="city"
              onChange={setUserDataInput}
              value={userData.city || ''}
              values={cities}
            />
            <LabelTextareaInput
              id="address"
              label="Alamat*"
              name="address"
              onChange={setUserDataInput}
              placeholder="Contoh: Jalan Ikan Hiu 33"
              value={userData.address || ''}
            />
            <LabelTextInput
              id="phone_number"
              label="No Handphone*"
              name="phone_number"
              onChange={setUserDataInput}
              placeholder="contoh: +628123456789"
              value={userData.phone_number || ''}
            />
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <PrimaryButton
              className="w-full"
              isDisable={loading.updateProfile || loading.getProfile}
              type="submit"
            >
              Simpan
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticatedRoute>
  );
}
