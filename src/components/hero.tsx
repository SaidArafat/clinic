import { ArrowDown, Play } from 'lucide-react'

import heroImage from '@/assets/hero-image.jpg'
import { ImageWithFallback } from '@/components/fallback-images/image-with-fallback'
import { Button } from '@/components/ui/button'
import { useLanguage, useVideoPlayer } from '@/contexts'
import {
  lymphaticDrainage,
  neurologicalRehabilitation,
  postOrthopedicSurgery,
  prenatalPhysicalTherapy,
  recoverySessions,
  spineDisorders,
  sportsInjury,
  tensionHeadache
} from '@/lib/icons'
import { scrollToSection } from '@/lib/utils'

export function Hero() {
  const { t } = useLanguage()
  const { openVideo } = useVideoPlayer()

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
                {t('hero.heading.subtitle')}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('hero.heading.title')}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                {t('hero.heading.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="px-8 py-6 text-lg h-auto"
              >
                {t('shared.actions.contactUs')}
                <ArrowDown className="ms-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('#services')}
                size="lg"
                className="px-8 py-6 text-lg h-auto"
              >
                <Play className="me-2 h-5 w-5" />
                {t('shared.highlights.mainServices')}
              </Button>
            </div>

            {/* Quick Services */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  name: t('services.sections.spineDisorders.title'),
                  icon: spineDisorders
                },
                {
                  name: t('services.sections.neurologicalRehabilitation.title'),
                  icon: neurologicalRehabilitation
                },
                {
                  name: t('services.sections.postOrthopedicSurgery.title'),
                  icon: postOrthopedicSurgery
                },
                {
                  name: t('services.sections.recoverySessions.title'),
                  icon: recoverySessions
                },
                {
                  name: t('services.sections.sportsInjury.title'),
                  icon: sportsInjury
                },
                {
                  name: t('services.sections.lymphaticDrainage.title'),
                  icon: lymphaticDrainage
                },
                {
                  name: t('services.sections.tensionHeadache.title'),
                  icon: tensionHeadache
                },
                {
                  name: t('services.sections.prenatalPhysicalTherapy.title'),
                  icon: prenatalPhysicalTherapy
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col justify-center items-center gap-4 text-center rounded-lg border border-border bg-card hover:bg-accent transition-colors cursor-pointer group"
                  onClick={() => scrollToSection('#services')}
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
                  src={heroImage}
                  alt="Dr. Ashraf Kotb - Consultant Physiotherapist"
                  className="w-full h-auto rounded-xl object-cover shadow-lg"
                />

                {/* Video play overlay */}
                <button
                  onClick={() =>
                    openVideo({
                      title: t('hero.heading.description'),
                      src: '1-hero-video.mp4'
                    })
                  }
                  className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <div className="bg-white/90 dark:bg-black/90 rounded-full p-4 shadow-lg transform hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ms-1" />
                  </div>
                </button>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -end-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">{t('shared.highlights.years')}</div>
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
