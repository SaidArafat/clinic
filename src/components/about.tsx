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
    { icon: Users, value: '5000+', label: 'Happy Patients' },
    { icon: Clock, value: '25+', label: 'Years Experience' },
    { icon: Award, value: '15+', label: 'Certifications' },
    { icon: CheckCircle, value: '95%', label: 'Success Rate' }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
                    {stat.label}
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
                src="https://images.unsplash.com/photo-1681505512385-8b9d567a56c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2VydGlmaWNhdGUlMjBwaHlzaW90aGVyYXB5JTIwY2xpbmljfGVufDF8fHx8MTc1ODg3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional medical setup"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
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
                <div className="font-medium text-sm">Neuro Rehab</div>
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
