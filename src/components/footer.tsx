import { useLanguage } from '@/contexts'
import {
  Check,
  Clock,
  Copyright,
  Facebook,
  Globe,
  House,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t('home'), href: '#hero' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('reviews'), href: '#reviews' },
    { name: t('contact'), href: '#contact' }
  ]

  const specializations = [
    t('spineConditions'),
    t('neuroConditions'),
    t('sportsConditions'),
    t('jointsConditions'),
    t('surgeryConditions')
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:info@drashrafkotb.com' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('heroTitle')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('consultantPhysio')}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t('experienceFooter')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground" dir="ltr">
                  +20 100 800 9763
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@drashrafkotb.com
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>{t('workingHoursWeekdays')}</div>
                  <div>{t('workingHoursFriday')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t('ourSpecializations')}
            </h4>
            <ul className="space-y-2">
              {specializations.map((spec, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-foreground mb-4">
                {t('locations')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium">{t('locationZayed')}</div>
                    <div>Sheikh Zayed City, Giza</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium">{t('location6Oct')}</div>
                    <div>{t('address6Oct')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">
                {t('followUs')}
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-start flex items-center gap-1">
              <Copyright className="w-4 h-4" />
              {new Date().getFullYear()} {t('copyright')}
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" strokeWidth={2.5} />
                {t('consultationsAvailable')}
              </span>
              <span className="flex items-center gap-1">
                <House className="w-4 h-4" strokeWidth={2} />
                {t('homeVisits')}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" strokeWidth={1.5} />
                {t('arabicEnglish')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
