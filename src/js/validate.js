export default function validateUrl(url) {
  return /\.(png|svg|jpg|jpeg|gif)$/i.test(url);
}
