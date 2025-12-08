'use client'
import { useEffect } from 'react'

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
import { GlobalVideoPlayer } from '@/components/video-player'
import {
  LanguageProvider,
  ThemeProvider,
  VideoPlayerProvider
} from '@/contexts'

export default function App() {
  useEffect(() => {
    document.body.classList.add('app-loaded')
  }, [])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <VideoPlayerProvider>
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
            <GlobalVideoPlayer />
            <WhatsAppFloat />
            <Toaster
              position="top-right"
              expand={false}
              richColors
              closeButton
            />
          </div>
        </VideoPlayerProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
