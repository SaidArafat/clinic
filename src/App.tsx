import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Reviews,
  Services,
  WhatsAppFloat
} from '@/components'
import { Toaster } from '@/components/ui/sonner'
import { LanguageProvider, ThemeProvider } from '@/contexts'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Reviews />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
          <Toaster position="top-right" expand={false} richColors closeButton />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
