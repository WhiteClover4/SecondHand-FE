import { BackButton, PrimaryButton, SecondaryButton } from '../../../components/buttons';
import { XIcon } from '../../../components/icons';
import {
  FileInput2,
  LabelNumberInput,
  LabelOptionInput,
  LabelTextareaInput,
  LabelTextInput,
} from '../../../components/inputs';
import { SimpleNavbar } from '../../../components/navbars';
import useProduct from '../../../hooks/dependent/useProduct';
import categories from '../../../_content/categories.json';

export default function ProductSeller() {
  const {
    productInput,
    setProductInputForm,
    addProductInputImage,
    removeProductInputImage,
    loading,
    publishProduct,
    draftProduct,
  } = useProduct();

  return (
    <div className="absolute top-0 h-screen w-full overflow-auto">
      <SimpleNavbar />
      <div className="relative mx-auto mt-10 w-[568px]">
        <BackButton className="absolute -left-[76px] top-0" />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <LabelTextInput
              id="name"
              label="Nama produk"
              name="name"
              onChange={setProductInputForm}
              placeholder="Nama Produk"
              value={productInput.name}
            />
            <LabelNumberInput
              id="price"
              label="Harga Produk"
              name="price"
              onChange={setProductInputForm}
              placeholder="Rp. 0,00"
              value={productInput.price}
            />
            <LabelOptionInput
              defaultValue="Pilih Kategori"
              id="category"
              label="Kategori"
              name="category"
              onChange={setProductInputForm}
              value={productInput.category}
              values={categories}
            />
            <LabelTextareaInput
              id="description"
              label="Deskripsi"
              name="description"
              onChange={setProductInputForm}
              placeholder="Contoh: Jalan Ikan Hiu 33"
              value={productInput.description}
            />
          </div>
          <div className="mt-4 flex flex-col space-y-1">
            <p className="text-body-12 font-normal"> Foto Produk </p>
            <div className="grid grid-cols-4 gap-x-6">
              {productInput.images.length < 4 && <FileInput2 onChange={addProductInputImage} />}
              {productInput.images.map((image, i) => (
                <div key={i} className="relative h-24">
                  <RemoveButton remove={() => removeProductInputImage(i)} />
                  <img
                    alt={image.url}
                    className="h-full w-full overflow-hidden rounded-xl object-contain"
                    src={image.url}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <SecondaryButton
              className="w-full"
              isDisable={loading.getProduct || loading.draftProduct}
              onClick={draftProduct}
              type="button"
            >
              Preview
            </SecondaryButton>
            <PrimaryButton
              className="w-full"
              isDisable={loading.getProduct || loading.draftProduct}
              onClick={publishProduct}
              type="submit"
            >
              Terbitkan
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

const RemoveButton = ({ remove }) => {
  return (
    <button className="absolute -top-4 -right-4" onClick={remove} type="button">
      <XIcon className="h-4 w-4 text-alert-danger" />
    </button>
  );
};
