export default function getDefaultLanguage() {
  const browserLanguage = window.navigator.language;
  if (browserLanguage.includes('-')) {
    return browserLanguage.split('-')[0];
  }
  return browserLanguage;
}
