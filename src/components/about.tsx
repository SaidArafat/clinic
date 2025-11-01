import { useLanguage } from '@/contexts'
import { Award, CheckCircle, Clock, Users } from 'lucide-react'
import { ImageWithFallback } from '@/components/fallback-images/image-with-fallback'

export function About() {
  const { t } = useLanguage()

  const qualifications = [
    t('qualification1'),
    t('qualification2'),
    t('qualification3'),
    t('qualification4'),
    t('qualification5')
  ]

  const stats = [
    { icon: Users, value: '5000+', key: 'happyPatients' },
    { icon: Clock, value: '25+', key: 'yearsExperience' },
    { icon: Award, value: '15+', key: 'certifications' },
    { icon: CheckCircle, value: '95%', key: 'successRate' }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('aboutDrAshraf')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Qualifications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('keyQualifications')}
              </h3>
              <ul className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {qualification}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('treatmentPhilosophy')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('philosophyDescription')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-lg border border-border"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`stats.${stat.key}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Certificates */}
          <div className="space-y-6">
            {/* Professional setup image */}
            <div className="relative">
              <ImageWithFallback
                src="https://images.pexels.com/photos/20860603/pexels-photo-20860603.jpeg?_gl=1*1lyys3q*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTM4MTkkajMzJGwwJGgw"
                alt="Professional medical setup"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="sr-only absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Est. 2004
              </div>
            </div>

            {/* Certifications showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-medium text-sm">German Certification</div>
                <div className="text-xs text-muted-foreground">
                  Spine Mechanics
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-medium text-sm">Manual Therapy</div>
                <div className="text-xs text-muted-foreground">
                  Advanced Level
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="font-medium text-sm">
                  Neurological Rehabilitation
                </div>
                <div className="text-xs text-muted-foreground">Specialist</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="font-medium text-sm">Sports Medicine</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
