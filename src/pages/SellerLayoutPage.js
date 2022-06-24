import { SellerLayout } from "../components/layout";
import { FileInput } from "../components/input";
import { Card } from "../components/card";

export default function SellerLayoutPage() {
  return (
    <div className="px-[236px]">
      <SellerLayout>
        <FileInput />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SellerLayout>
    </div>
  );
}
