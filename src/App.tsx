import { About } from '@/components/about'
import { Navbar } from '@/components/navbar'
import { DirectionProvider } from '@radix-ui/react-direction'
import { useTranslation } from 'react-i18next'
import { Cursor } from '@/components/ui/cursor'
import { Footer } from '@/components/ui/footer'

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
        <main className="container mx-auto pt-10 pb-5 px-4 md:px-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
          <About />
          <Footer />
        </main>
      </Cursor>
    </DirectionProvider>
  )
}
