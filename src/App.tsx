import { DirectionProvider } from '@radix-ui/react-direction'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'

export default function App() {
  const { t, i18n } = useTranslation()

  const switchLanguage = (lang: 'en' | 'ar') => {
    i18n.changeLanguage(lang)
    document.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <DirectionProvider dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar
        langText={i18n.language === 'ar' ? 'En' : 'ع'}
        onLangChange={() =>
          switchLanguage(i18n.language === 'ar' ? 'en' : 'ar')
        }
      />
      <h1>{t('welcome')}</h1>
    </DirectionProvider>
  )
}
