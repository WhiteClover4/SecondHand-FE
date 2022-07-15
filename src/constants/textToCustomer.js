export function textToCustomer(phoneNumber, productName, productOffer) {
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo%20bestie%2C%20kami%20telah%20menyetujui%20produk%20${productName}%20yang%20telah%20kamu%20tawar%20seharga%20Rp%20${productOffer.toLocaleString(
    'id-ID',
  )}%2C%20gimana%20jadi%20ambil%20%3F%20%3A)`;
}
