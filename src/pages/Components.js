import { PrimaryAlert } from "../components/alert";
import {
  FileInput,
  FileInput2,
  FileInput3,
  LabelOptionInput,
  LabelPasswordInput,
  LabelTextareaInput,
  LabelTextInput,
  SearchInput,
} from "../components/input";
import { PrimaryButton, SecondaryButton, BackButton } from "../components/button";

import { Card, Card2, ProfileCard } from "../components/card";
import { SuccessCheckoutModal } from "../components/modal";
import { CategorySection } from "../components/section";

export default function Components() {
  return (
    <div className="flex min-h-screen w-screen flex-col space-y-6 bg-slate-200 py-8 px-[135px]">
      <PrimaryButton>PrimaryButton</PrimaryButton>
      <PrimaryButton isSmall>PrimaryButton small</PrimaryButton>
      <PrimaryButton isDisable>PrimaryButton disabled</PrimaryButton>
      <PrimaryButton isSmall isDisable>
        PrimaryButton small disabled
      </PrimaryButton>
      <SecondaryButton>SecondaryButton</SecondaryButton>
      <SecondaryButton isSmall>SecondaryButton small</SecondaryButton>
      <SecondaryButton isDisable>SecondaryButton disabled</SecondaryButton>
      <SecondaryButton isSmall isDisable>
        SecondaryButton small disabled
      </SecondaryButton>
      <BackButton />
      <PrimaryAlert bgColor="bg-alert-success">PrimaryAlert bg-alert-success</PrimaryAlert>
      <PrimaryAlert bgColor="bg-alert-danger">PrimaryAlert bg-alert-danger</PrimaryAlert>
      <PrimaryAlert bgColor="bg-alert-warning">PrimaryAlert bg-alert-warning</PrimaryAlert>
      <LabelTextInput placeholder="LabelTextInput" />
      <LabelPasswordInput placeholder="LabelPasswordInput" />
      <LabelTextareaInput placeholder="LabelTexareaInput" />
      <LabelOptionInput placeholder="LabelOptionInput" />
      <SearchInput placeholder="SearchInput" />
      <FileInput />
      <FileInput2 />
      <FileInput3 />
      <Card />
      <Card2 />
      <ProfileCard />
      <SuccessCheckoutModal />
      <CategorySection />
    </div>
  );
}
