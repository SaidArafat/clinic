import { useLanguage } from '@/contexts'
import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
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
      phone: '+20 120 123 4567',
      whatsapp: '+20 120 123 4567',
      hours: {
        weekdays: t('workingHoursWeekdays'),
        friday: t('workingHoursFriday')
      },
      coordinates: { lat: 30.0444, lng: 30.97 },
      mapUrl: 'https://maps.google.com/?q=Sheikh+Zayed+City+Physiotherapy',
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
      phone: '+20 120 987 6543',
      whatsapp: '+20 120 987 6543',
      hours: {
        weekdays: t('workingHoursWeekdays'),
        friday: t('workingHoursFriday')
      },
      coordinates: { lat: 29.9097, lng: 30.9746 },
      mapUrl: 'https://maps.google.com/?q=6th+October+Cairo+Medical+Center',
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
              Emergency Consultations
            </CardTitle>
            <CardDescription>
              For urgent physiotherapy needs outside regular hours
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-2xl font-bold text-foreground">
              +20 100 123 4567
            </div>
            <div className="text-sm text-muted-foreground">
              Available for emergency consultations and home visits
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => callPhone('+20 100 123 4567')}
            >
              <Phone className="me-2 h-5 w-5" />
              Emergency Contact
            </Button>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-bold text-foreground mb-2">
            Booking Information
          </h3>
          <p className="text-muted-foreground mb-4">
            Appointments can be booked via phone or WhatsApp. Home visits
            available within Cairo and Giza.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ Insurance Accepted</span>
            <span>✓ Home Visits Available</span>
            <span>✓ Follow-up Programs</span>
            <span>✓ Multilingual Service</span>
          </div>
        </div>
      </div>
    </section>
  )
}
