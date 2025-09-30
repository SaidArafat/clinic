import { useLanguage } from '@/contexts/language-provider'
import { ChevronRight, Play, Star } from 'lucide-react'
import { useState } from 'react'
import { ImageWithFallback } from './fallback-images/image-with-fallback'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function Services() {
  const { t } = useLanguage()
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'spine',
      title: t('spineConditions'),
      icon: '🦴',
      image:
        'https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMHJlaGFiaWxpdGF0aW9uJTIwcGh5c2lvdGhlcmFweXxlbnwxfHx8fDE3NTg4NzMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Comprehensive spine and back pain treatment using advanced manual therapy techniques and German-certified spine mechanics protocols.',
      conditions: [
        'Lower Back Pain (Lumbar)',
        'Neck Pain (Cervical)',
        'Disc Herniation',
        'Sciatica',
        'Spinal Stenosis',
        'Postural Problems'
      ],
      treatments: [
        'Manual Therapy',
        'Spinal Mobilization',
        'Core Strengthening',
        'Postural Correction',
        'Pain Management',
        'Movement Education'
      ],
      hasVideo: true
    },
    {
      id: 'neuro',
      title: t('neuroConditions'),
      icon: '⚡',
      image:
        'https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ2ljYWwlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzU4ODczMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Specialized neurological rehabilitation for stroke recovery, brain injury, and nervous system disorders.',
      conditions: [
        'Stroke Recovery',
        'Brain Injury',
        "Parkinson's Disease",
        'Multiple Sclerosis',
        'Spinal Cord Injuries',
        'Peripheral Neuropathy'
      ],
      treatments: [
        'Neuromuscular Re-education',
        'Balance Training',
        'Gait Training',
        'Functional Mobility',
        'Coordination Exercises',
        'Cognitive Motor Training'
      ],
      hasVideo: true
    },
    {
      id: 'sports',
      title: t('sportsConditions'),
      icon: '⚽',
      image:
        'https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjBwaHlzaW90aGVyYXB5fGVufDF8fHx8MTc1ODg3MzE4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Expert treatment for sports-related injuries with focus on rapid recovery and performance enhancement.',
      conditions: [
        'Muscle Strains',
        'Ligament Sprains',
        "Tennis/Golfer's Elbow",
        'Rotator Cuff Injuries',
        'Knee Injuries (ACL/MCL)',
        'Ankle Sprains'
      ],
      treatments: [
        'Sports Massage',
        'Injury Prevention',
        'Performance Enhancement',
        'Return to Sport Programs',
        'Biomechanical Analysis',
        'Strength Training'
      ],
      hasVideo: true
    },
    {
      id: 'joints',
      title: t('jointsConditions'),
      icon: '🦴',
      image:
        'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2ludCUyMHBhaW4lMjB0cmVhdG1lbnQlMjBwaHlzaW90aGVyYXB5fGVufDF8fHx8MTc1ODg3MzE4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Comprehensive joint pain management and mobility restoration for various joint conditions.',
      conditions: [
        'Arthritis (OA/RA)',
        'Frozen Shoulder',
        'Hip Pain',
        'Knee Osteoarthritis',
        'TMJ Disorders',
        'Joint Stiffness'
      ],
      treatments: [
        'Joint Mobilization',
        'Range of Motion Therapy',
        'Pain Relief Techniques',
        'Strengthening Exercises',
        'Heat/Cold Therapy',
        'Activity Modification'
      ],
      hasVideo: true
    },
    {
      id: 'surgery',
      title: t('surgeryConditions'),
      icon: '🏥',
      image:
        'https://images.unsplash.com/photo-1758206523735-079e56f2faf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0JTIwc3VyZ2VyeSUyMHJlaGFiaWxpdGF0aW9uJTIwb3J0aG9wZWRpY3xlbnwxfHx8fDE3NTg4NzMxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description:
        'Specialized post-operative rehabilitation programs to ensure optimal recovery and prevent complications.',
      conditions: [
        'Hip Replacement',
        'Knee Replacement',
        'Spinal Surgery',
        'Shoulder Surgery',
        'Fracture Recovery',
        'Soft Tissue Surgery'
      ],
      treatments: [
        'Early Mobilization',
        'Scar Tissue Management',
        'Progressive Strengthening',
        'Functional Training',
        'Pain Management',
        'Home Exercise Programs'
      ],
      hasVideo: true
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              className="flex items-center space-x-2 h-auto py-3 px-6"
            >
              <span className="text-lg">{service.icon}</span>
              <span className="hidden sm:inline">{service.title}</span>
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
                  <div className="bg-white/90 dark:bg-black/90 rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Treatment Video
                  </div>
                </div>
              )}
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
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
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl mb-2">📅</div>
                <div className="font-bold">6-12</div>
                <div className="text-xs text-muted-foreground">
                  Sessions Avg
                </div>
              </div>
            </div>
          </div>

          {/* Service Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{services[activeService].icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {services[activeService].description}
              </p>
            </div>

            {/* Conditions Treated */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Conditions Treated</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services[activeService].conditions.map(
                    (condition, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {condition}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Treatment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🛠️</span>
                  <span>Treatment Methods</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services[activeService].treatments.map(
                    (treatment, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {treatment}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full md:w-auto px-8 py-6 text-lg h-auto"
            >
              Book Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
