import { useLanguage } from '@/contexts'
import {
  jointsService,
  neuroService,
  spineService,
  sportsService,
  surgeryService
} from '@/lib/icons'
import { ArrowDown, Play } from 'lucide-react'
import { ImageWithFallback } from './fallback-images/image-with-fallback'
import { Button } from './ui/button'

export function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      {/* Hero Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-start space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full me-2 animate-pulse"></span>
                {t('consultantPhysiotherapist')}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('heroTitle')}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                {t('heroDescription')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="px-8 py-6 text-lg h-auto"
              >
                {t('contactUs')}
                <ArrowDown className="ms-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={scrollToServices}
                size="lg"
                className="px-8 py-6 text-lg h-auto"
              >
                <Play className="me-2 h-5 w-5" />
                {t('ourMainServices')}
              </Button>
            </div>

            {/* Quick Services */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                // { name: t('spineService'), icon: spineService },
                // { name: t('neuroService'), icon: neuroService },
                // { name: t('sportsService'), icon: sportsService },
                // { name: t('jointsService'), icon: jointsService },
                // { name: t('surgeryService'), icon: surgeryService }
                { name: 'Spine disorders', icon: spineService },
                { name: 'Neurological rehabilitation', icon: neuroService },
                { name: 'Post orthopedic surgery', icon: sportsService },
                { name: 'recovery sessions', icon: jointsService },
                { name: 'Sports injury', icon: surgeryService },
                { name: 'Lymphatic drainage', icon: surgeryService },
                { name: 'Tension headache', icon: surgeryService },
                { name: 'Prenatal  physical therapy', icon: surgeryService }
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col justify-center items-center gap-4 text-center rounded-lg border border-border bg-card hover:bg-accent transition-colors cursor-pointer group"
                  onClick={scrollToServices}
                >
                  <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img src={service.icon} alt={service.name} />
                  </div>
                  <p className="text-xs font-medium text-card-foreground group-hover:text-accent-foreground">
                    {service.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-1"></div>
              <div className="absolute -inset-2 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-2xl transform -rotate-1"></div>

              {/* Main image container */}
              <div className="relative bg-background rounded-2xl p-2 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwaHlzaW90aGVyYXBpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg4NzM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Ashraf Kotb - Consultant Physiotherapist"
                  className="w-full h-auto rounded-xl object-cover shadow-lg"
                />

                {/* Video play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="bg-white/90 dark:bg-black/90 rounded-full p-4 shadow-lg transform hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ms-1" />
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -end-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">{t('years')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 start-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
