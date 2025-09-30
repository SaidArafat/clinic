import { useState } from 'react'
import { MessageCircle, X, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/language-provider'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const { t } = useLanguage()

  const locations = [
    {
      id: 'zayed',
      name: t('sheikhZayedClinic'),
      phone: '+201201234567',
      address: 'Sheikh Zayed City, Giza',
      priority: 1
    },
    {
      id: 'october',
      name: t('sixthOctoberClinic'),
      phone: '+201209876543',
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
    setIsOpen(false)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Location Selection Popup */}
        {isOpen && (
          <div className="mb-4 w-80 max-w-[calc(100vw-3rem)]">
            <Card className="shadow-2xl border-2 border-green-200 dark:border-green-800">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-green-600 dark:text-green-400">
                    {t('contactViaWhatsApp')}
                  </CardTitle>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('chooseClinic')}
                </p>
              </CardHeader>

              <CardContent className="pt-0 space-y-3">
                {locations
                  .sort((a, b) => a.priority - b.priority)
                  .map(location => (
                    <div
                      key={location.id}
                      onClick={() =>
                        openWhatsApp(location.phone, location.name)
                      }
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
                              <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                                Main
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
                <div className="pt-3 border-t border-border">
                  <div className="text-xs text-muted-foreground text-center mb-3">
                    Quick Actions
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
                      Book Appointment
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        openWhatsApp(locations[0].phone, 'Price Inquiry')
                      }
                      className="text-xs h-8"
                    >
                      Ask Prices
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 ${
            isOpen ? 'rotate-180 bg-green-600' : 'hover:scale-110'
          }`}
          size="sm"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        )}
      </div>

      {/* Mobile bottom notification */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 md:hidden">
          <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">
            WhatsApp
          </div>
        </div>
      )}
    </>
  )
}
