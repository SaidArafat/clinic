import { useLanguage } from '@/contexts'
import { Check, Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'

export function Contact() {
  const { t } = useLanguage()

  const locations = [
    {
      id: 'zayed',
      name: t('locationZayed'),
      priority: 1,
      address: t('zayedAddress'),
      phone: '+20 106 949 4211',
      whatsapp: '+20 106 949 4211',
      hours: {
        weekdays: t('workingHoursWeekdays'),
        friday: t('workingHoursFriday')
      },
      coordinates: { lat: 30.0444, lng: 30.97 },
      mapUrl: 'https://maps.app.goo.gl/TGc5hpngHSoH26Wp8',
      features: [
        'German Certified Equipment',
        'Manual Therapy',
        'Sports Rehab',
        'Parking Available'
      ]
    },
    {
      id: 'october',
      name: t('location6Oct'),
      priority: 2,
      address: t('address6Oct'),
      phone: '+20 100 800 9763',
      whatsapp: '+20 100 800 9763',
      hours: {
        weekdays: t('workingHoursWeekdays'),
        friday: t('workingHoursFriday')
      },
      coordinates: { lat: 29.9097, lng: 30.9746 },
      mapUrl: 'https://maps.app.goo.gl/8sijaUFwADjkcgRb6',
      features: [
        'Full Medical Center',
        'Neurological Rehab',
        'Post-Surgery Care',
        'Easy Access'
      ]
    }
  ]

  const openMap = (mapUrl: string) => {
    window.open(mapUrl, '_blank')
  }

  const callPhone = (phone: string) => {
    window.open(`tel:${phone}`)
  }

  const additionalInfo = [
    'insuranceAccepted',
    'homeVisitsAvailable',
    'followUpPrograms',
    'multilingualService'
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {locations
            .sort((a, b) => a.priority - b.priority)
            .map(location => (
              <Card
                key={location.id}
                className="relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                {location.priority === 1 && (
                  <div className="absolute top-4 end-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium z-10">
                    {t('mainBranch')}
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span>{location.name}</span>
                  </CardTitle>
                  <CardDescription>{location.address}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium">{t('phoneNumbers')}</div>
                        <button
                          onClick={() => callPhone(location.phone)}
                          className="text-primary hover:underline"
                          dir="ltr"
                        >
                          {location.phone}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-medium mb-1">
                          {t('workingHours')}
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>{location.hours.weekdays}</div>
                          <div>{location.hours.friday}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="font-medium mb-3">
                      {t('clinicFeatures')}:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => openMap(location.mapUrl)}
                      className="flex items-center space-x-2"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>{t('directions')}</span>
                    </Button>

                    <Button
                      onClick={() => callPhone(location.phone)}
                      className="flex items-center space-x-2"
                      dir="ltr"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{t('callNow')}</span>
                    </Button>
                  </div>

                  {/* Map Placeholder */}
                  <div
                    className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg cursor-pointer group relative overflow-hidden"
                    onClick={() => openMap(location.mapUrl)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center group-hover:scale-105 transition-transform">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                        <div className="font-medium text-foreground">
                          {t('viewOnGoogleMaps')}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t('clickToOpenDirections')}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Emergency Contact */}
        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-primary">
              {t('emergencyConsultations')}
            </CardTitle>
            <CardDescription>{t('emergencyDescription')}</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-2xl font-bold text-foreground" dir="ltr">
              +20 100 800 9763
            </div>
            <div className="text-sm text-muted-foreground">
              {t('emergencyAvailable')}
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => callPhone('+20 100 800 9763')}
            >
              <Phone className="me-2 h-5 w-5" />
              {t('emergencyContact')}
            </Button>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-bold text-foreground mb-2">
            {t('bookingTitle')}
          </h3>
          <p className="text-muted-foreground mb-4">
            {t('bookingDescription')}
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {additionalInfo.map(item => (
              <li key={item} className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
