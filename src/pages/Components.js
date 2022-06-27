import { MainAlert } from '../components/alerts';
import {
  FileInput,
  FileInput2,
  FileInput3,
  LabelOptionInput,
  LabelPasswordInput,
  LabelTextareaInput,
  LabelTextInput,
  SearchInput,
} from '../components/inputs';
import { PrimaryButton, SecondaryButton, BackButton } from '../components/buttons';

import { ProductCard, NotifCard, ProfileCard } from '../components/cards';
import { SuccessCheckoutModal, StatusModal } from '../components/modals';
import { CategorySection } from '../components/sections';

export default function Components() {
  return (
    <div className="bg-slate-200 flex min-h-screen w-screen flex-col space-y-6 py-8 px-[135px]">
      <PrimaryButton>PrimaryButton</PrimaryButton>
      <PrimaryButton isSmall>PrimaryButton small</PrimaryButton>
      <PrimaryButton isDisable>PrimaryButton disabled</PrimaryButton>
      <PrimaryButton isDisable isSmall>
        PrimaryButton small disabled
      </PrimaryButton>
      <SecondaryButton>SecondaryButton</SecondaryButton>
      <SecondaryButton isSmall>SecondaryButton small</SecondaryButton>
      <SecondaryButton isDisable>SecondaryButton disabled</SecondaryButton>
      <SecondaryButton isDisable isSmall>
        SecondaryButton small disabled
      </SecondaryButton>
      <BackButton />
      <MainAlert bgColor="bg-alert-success">MainAlert bg-alert-success</MainAlert>
      <MainAlert bgColor="bg-alert-danger">MainAlert bg-alert-danger</MainAlert>
      <MainAlert bgColor="bg-alert-warning">MainAlert bg-alert-warning</MainAlert>
      <LabelTextInput placeholder="LabelTextInput" />
      <LabelPasswordInput placeholder="LabelPasswordInput" />
      <LabelTextareaInput placeholder="LabelTexareaInput" />
      <LabelOptionInput placeholder="LabelOptionInput" />
      <SearchInput placeholder="SearchInput" />
      <FileInput />
      <FileInput2 />
      <FileInput3 />
      <ProductCard />
      <NotifCard />
      <ProfileCard />
      <SuccessCheckoutModal />
      <StatusModal />
      <CategorySection />
    </div>
  );
}
