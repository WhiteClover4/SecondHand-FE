import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackButton, PrimaryButton } from '../components/buttons';
import {
  FileInput3,
  LabelOptionInput,
  LabelTextareaInput,
  LabelTextInput,
} from '../components/inputs';
import { SimpleNavbar } from '../components/navbars';
import {
  SET_USER_ADDRESS,
  SET_USER_CITY,
  SET_USER_FILE,
  SET_USER_NAME,
  SET_USER_PHONE_NUMBER,
  SET_USER_PROFILE_PICTURE,
} from '../redux/slice/profile';
import useProfile from '../hooks/dependent/useProfile';
import cities from '../_content/cities.json';

export default function SellerProduct() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.profile);
  const { getProfile } = useProfile();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="absolute top-0 h-screen w-full overflow-auto">
      <SimpleNavbar title="Lengkapi Info Akun" />
      <div className="relative mx-auto mt-10 w-[568px]" onSubmit={(e) => e.preventDefault()}>
        <BackButton className="absolute -left-[76px] top-0" />
        <div className="flex w-full justify-center">
          <FileInput3
            onChange={(e) => {
              const blob = URL.createObjectURL(e.target.files[0]);
              dispatch(SET_USER_PROFILE_PICTURE(blob));
              dispatch(SET_USER_FILE(e.target.files[0]));
            }}
            preview={userData.profile_picture}
          />
        </div>
        <form className="mt-6">
          <div className="space-y-4">
            <LabelTextInput
              autoFocus
              id="name"
              label="Nama*"
              name="name"
              onChange={(e) => dispatch(SET_USER_NAME(e.target.value))}
              placeholder="Nama"
              value={userData.name || ''}
            />
            <LabelOptionInput
              id="city"
              label="Kota*"
              name="city"
              onChange={(e) => dispatch(SET_USER_CITY(e.target.value))}
              value={userData.city || ''}
              values={cities}
            />
            <LabelTextareaInput
              id="address"
              label="Alamat*"
              name="address"
              onChange={(e) => dispatch(SET_USER_ADDRESS(e.target.value))}
              placeholder="Contoh: Jalan Ikan Hiu 33"
              value={userData.address || ''}
            />
            <LabelTextInput
              id="phone_number"
              label="No Handphone*"
              name="phone_number"
              onChange={(e) => dispatch(SET_USER_PHONE_NUMBER(e.target.value))}
              placeholder="contoh: +628123456789"
              value={userData.phone_number || ''}
            />
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <PrimaryButton className="w-full" type="submit">
              Simpan
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
