import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage, useVideoPlayer } from '@/contexts'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import {
  ChevronRight,
  MapPin,
  MessageCircle,
  Play,
  SquarePlay,
  Star
} from 'lucide-react'
import { useState } from 'react'
import { ImageWithFallback } from './fallback-images/image-with-fallback'

export function Services() {
  const [activeService, setActiveService] = useState(0)

  const { t } = useLanguage()
  const { openVideo } = useVideoPlayer()

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <Button
              key={service.id}
              variant={activeService === index ? 'default' : 'outline'}
              onClick={() => setActiveService(index)}
              className="flex flex-col items-center space-x-2 sm:flex-row h-auto py-3 px-6"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <img src={service.icon} alt={service.description} />
              </div>
              <span className="sm:inline">{t(service.title)}</span>
            </Button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Image with Video Indicator */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-96 object-cover"
              />

              {/* Video Play Overlay */}
              {services[activeService].hasVideo && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
                  <button
                    onClick={() =>
                      openVideo({
                        title: t(services[activeService].title),
                        src: services[activeService].video
                      })
                    }
                    className="bg-white/90 dark:bg-black/90 rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 text-primary ms-1" />
                  </button>
                  <div className="sr-only absolute bottom-4 end-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Treatment Video
                  </div>
                </div>
              )}
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <div className="font-bold">4.9/5</div>
                <div className="text-xs text-muted-foreground">
                  Patient Rating
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl mb-2">⏱️</div>
                <div className="font-bold">45-60</div>
                <div className="text-xs text-muted-foreground">
                  Minutes/Session
                </div>
              </div>
            </div>
          </div>

          {/* Service Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-6">
                  <img
                    src={services[activeService].icon}
                    alt={t(
                      `servicesSection.spineDisorders.${services[activeService].description}`
                    )}
                  />
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t(services[activeService].title)}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t(services[activeService].description)}
              </p>
            </div>

            {/* Treatment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🛠️</span>
                  <span>{t('servicesSection.videos')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={cn(
                    'grid grid-cols-1 md:grid-cols-2 gap-3',
                    services[activeService].treatments.length === 1 &&
                      'md:grid-cols-1'
                  )}
                >
                  {services[activeService].treatments.map(
                    ({ title, src }, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() =>
                          openVideo({
                            title: t(title),
                            src
                          })
                        }
                      >
                        <SquarePlay
                          strokeWidth={1}
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                        />
                        <span className="text-muted-foreground">
                          {t(title)}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <Consultation />
          </div>
        </div>
      </div>
    </section>
  )
}

function Consultation() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { language, t } = useLanguage()

  const locations = [
    {
      id: 'zayed',
      name: t('sheikhZayedClinic'),
      phone: '+201069494211',
      address: 'Sheikh Zayed City, Giza',
      priority: 1
    },
    {
      id: 'october',
      name: t('sixthOctoberClinic'),
      phone: '+201008009763',
      address: '6th October - Cairo Medical Center',
      priority: 2
    }
  ]

  const openWhatsApp = (phone: string, locationName: string) => {
    const message = encodeURIComponent(
      `Hello Dr. Ashraf! I would like to book an appointment at ${locationName}. Please let me know your available times.`
    )
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto px-8 py-6 text-lg h-auto">
          {t('bookConsultation')}
          <ChevronRight
            className={cn('ms-2 h-5 w-5', language === 'ar' && 'rotate-180')}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border-2 border-green-200 dark:border-green-800">
        <DialogHeader>
          <DialogTitle>
            <p className="text-lg text-green-600 dark:text-green-400">
              {t('contactViaWhatsApp')}
            </p>
            <p className="text-sm text-muted-foreground">{t('chooseClinic')}</p>
          </DialogTitle>
          <DialogDescription>
            <div className="pt-0 space-y-3">
              {locations
                .sort((a, b) => a.priority - b.priority)
                .map(location => (
                  <div
                    key={location.id}
                    onClick={() => openWhatsApp(location.phone, location.name)}
                    className="p-4 border border-border rounded-lg cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 hover:border-green-300 dark:hover:border-green-700 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <MapPin className="w-4 h-4 text-green-500" />
                          <h3 className="font-medium text-foreground group-hover:text-green-600 dark:group-hover:text-green-400">
                            {location.name}
                          </h3>
                          {location.priority === 1 && (
                            <span className="bg-primary text-center text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                              {t('mainBranch')}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {location.address}
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                          {t('clickToStart')}
                        </p>
                      </div>
                      <MessageCircle className="w-5 h-5 text-green-500 ml-2 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                ))}

              {/* Quick Actions */}
              {/* <div className="pt-3 border-t border-border">
                <div className="text-xs text-muted-foreground text-center mb-3">
                  {t('quickActions')}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      openWhatsApp(locations[0].phone, 'General Inquiry')
                    }
                    className="text-xs h-8"
                  >
                    {t('bookAppointment')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      openWhatsApp(locations[0].phone, 'Price Inquiry')
                    }
                    className="text-xs h-8"
                  >
                    {t('askPrices')}
                  </Button>
                </div>
              </div> */}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
