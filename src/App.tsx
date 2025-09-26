import { About } from '@/components/about'
import { Navbar } from '@/components/nav-bar'
import { DirectionProvider } from '@radix-ui/react-direction'
import { useTranslation } from 'react-i18next'
import { Cursor } from './components/ui/cursor'

export default function App() {
  const { i18n } = useTranslation()

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
      <Cursor>
        <About />
      </Cursor>
    </DirectionProvider>
  )
}
