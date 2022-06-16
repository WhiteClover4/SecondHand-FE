import { PrimaryAlert } from "../components/alert";
import AddProductInput from "../components/button/AddProductInput";
import BackButton from "../components/button/BackButton";
// import InputButton from "../components/button/InputButton";
import PrimaryButton from "../components/button/PrimaryButton";
import SecondaryButton from "../components/button/SecondaryButton";
import LabelOptionInput from "../components/input/LabelOptionInput";
import LabelPasswordInput from "../components/input/LabelPasswordInput";
import LabelTextareaInput from "../components/input/LabelTextareaInput";
import LabelTextInput from "../components/input/LabelTextInput";
import SearchInput from "../components/input/SearchInput";
import Card from "../components/card/Card";
import Card2 from "../components/card/Card2";

export default function Components() {
  return (
    <div className="flex min-h-screen w-screen flex-col space-y-6 py-8 px-[135px]">
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
      <LabelTextInput label="LabelTextInput" placeholder="LabelTextInput" />
      <LabelPasswordInput label="LabelPasswordInput" placeholder="LabelPasswordInput" />
      <LabelTextareaInput label="LabelTexareaInput" placeholder="LabelTexareaInput" />
      <LabelOptionInput label="LabelOptionInput" placeholder="LabelOptionInput" />
      <SearchInput placeholder="SearchInput" />

      <div className="grid grid-cols-4"> <AddProductInput /> </div>

      <div className="grid grid-cols-6 gap-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="h-fit w-fit gap-4 rounded-2xl p-6 shadow-high">
        <Card2 />
        <img src="/img/divider.png" alt="divider" className="my-4" />
        <Card2 />
      </div>
    </div>
  );
}
