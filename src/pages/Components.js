import { PrimaryAlert } from "../components/alert";
import BackButton from "../components/button/BackButton";
import PrimaryButton from "../components/button/PrimaryButton";
import SecondaryButton from "../components/button/SecondaryButton";
import LabelOptionInput from "../components/input/LabelOptionInput";
import LabelPasswordInput from "../components/input/LabelPasswordInput";
import LabelTextareaInput from "../components/input/LabelTextareaInput";
import LabelTextInput from "../components/input/LabelTextInput";
import SearchInput from "../components/input/SearchInput";
import { AddProductInput } from "../components/button";

export default function Components() {
  return (
    <div className="w-screen min-h-screen py-8 px-[135px] flex flex-col space-y-6">
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
      <PrimaryAlert bgColor="bg-alert-success">
        PrimaryAlert bg-alert-success
      </PrimaryAlert>
      <PrimaryAlert bgColor="bg-alert-danger">
        PrimaryAlert bg-alert-danger
      </PrimaryAlert>
      <PrimaryAlert bgColor="bg-alert-warning">
        PrimaryAlert bg-alert-warning
      </PrimaryAlert>
      <LabelTextInput placeholder="LabelTextInput" />
      <LabelPasswordInput placeholder="LabelPasswordInput" />
      <LabelTextareaInput placeholder="LabelTexareaInput" />
      <LabelOptionInput placeholder="LabelOptionInput" />
      <SearchInput placeholder="SearchInput" />
      <div className="grid grid-cols-4"> <AddProductInput /> </div>
    </div>
  );
}
