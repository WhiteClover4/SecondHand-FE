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
import useProductInput from '../../../hooks/dependent/useProductInput';
import AuthenticatedRoute from '../../../routes/AuthenticatedRoute';
import categories from '../../../_content/categories.json';

export default function ProductInput() {
  const {
    productInput,
    setProductInputForm,
    addProductInputImage,
    removeProductInputImage,
    loading,
    publishProduct,
    draftProduct,
    updateProduct,
  } = useProductInput();

  return (
    <AuthenticatedRoute>
      <div className="absolute top-0 h-screen w-full overflow-auto">
        <SimpleNavbar title="Lengkapi Detail Produk" />
        <div
          className="relative mx-auto mt-10 w-full px-4 lg:w-[568px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <BackButton className="absolute -left-[76px] top-0 hidden lg:block" />{' '}
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
              <div className="hide-scrollbar w-full overflow-x-auto">
                <div className="flex w-max items-center space-x-6 pt-3 lg:pt-0">
                  {productInput.product_images.length < 4 && (
                    <FileInput2 onChange={addProductInputImage} />
                  )}
                  {productInput.product_images.map((image, i) => (
                    <div key={i} className="relative h-24">
                      <RemoveButton remove={() => removeProductInputImage(i)} />
                      <img
                        alt={image.product_pictures}
                        className="h-full w-full overflow-hidden rounded-xl object-contain"
                        src={image.product_pictures}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <SecondaryButton
                className="w-full"
                isDisable={loading.publishProduct || loading.draftProduct || loading.updateProduct}
                onClick={draftProduct}
                type="button"
              >
                Preview
              </SecondaryButton>
              <PrimaryButton
                className="w-full"
                isDisable={loading.publishProduct || loading.draftProduct || loading.updateProduct}
                onClick={() => (productInput.id ? updateProduct() : publishProduct())}
                type="submit"
              >
                {!productInput.id ? 'Terbitkan' : 'Perbarui'}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedRoute>
  );
}

const RemoveButton = ({ remove }) => {
  return (
    <button className="absolute -top-4 -right-4" onClick={remove} type="button">
      <XIcon className="h-4 w-4 text-alert-danger" />
    </button>
  );
};
