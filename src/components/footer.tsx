import {
  Check,
  Clock,
  Copyright,
  Facebook,
  Globe,
  House,
  Instagram,
  MapPin,
  Phone,
  Youtube
} from 'lucide-react'

import { useLanguage } from '@/contexts'
import { scrollToSection } from '@/lib/utils'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t('shared.nav.home'), href: '#hero' },
    { name: t('shared.nav.about'), href: '#about' },
    { name: t('shared.nav.services'), href: '#services' },
    { name: t('shared.nav.reviews'), href: '#reviews' },
    { name: t('shared.nav.contact'), href: '#contact' }
  ]

  const specializations = [
    t('shared.serviceCategories.spine'),
    t('shared.serviceCategories.neuro'),
    t('shared.serviceCategories.sports'),
    t('shared.serviceCategories.joints'),
    t('shared.serviceCategories.surgery')
  ]

  const socialLinks = [
    {
      name: 'Youtube',
      icon: Youtube,
      href: 'https://www.youtube.com/@drashrafkotob'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/DoctorAshrafkotob'
    },
    {
      name: 'Instagram-1',
      icon: Instagram,
      href: 'https://www.instagram.com/drashrafkotob'
    },
    {
      name: 'Instagram-2',
      icon: Instagram,
      href: 'https://www.instagram.com/peakmotion.therapy'
    }
  ]

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('hero.heading.title')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('footer.labels.role')}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t('footer.labels.experience')}
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

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>{t('contact.info.workingHoursWeekdays')}</div>
                  <div>{t('contact.info.workingHoursFriday')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t('footer.labels.quickLinks')}
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
              {t('footer.labels.ourSpecializations')}
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
                {t('contact.info.locations')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium">
                      {t('contact.branches.zayed.name')}
                    </div>
                    <div>{t('contact.branches.zayed.address')}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium">
                      {t('contact.branches.october.name')}
                    </div>
                    <div>{t('contact.branches.october.address')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">
                {t('footer.labels.followUs')}
              </h4>
              <div className="grid grid-cols-4 gap-3">
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
                <a
                  href="https://www.snapchat.com/add/ashraf_kotob123?share_id=BZIEdMWHSAOOWhZZ5p1T1A&locale=en_EG"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SnapchatIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@ashraf.kotob"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@peakmotiontherapy"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-start flex items-center gap-1">
              <Copyright className="w-4 h-4" />
              {new Date().getFullYear()} {t('footer.legal.copyright')}
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" strokeWidth={2.5} />
                {t('footer.labels.consultationsAvailable')}
              </span>
              <span className="flex items-center gap-1">
                <House className="w-4 h-4" strokeWidth={2} />
                {t('footer.labels.homeVisits')}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" strokeWidth={1.5} />
                {t('footer.labels.arabicEnglish')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M204.3 77.5a55.6 55.6 0 0 1-31.2-9.6v60.4a68.2 68.2 0 1 1-68.2-68.2 69.5 69.5 0 0 1 8.4.5v35.7a34 34 0 1 0 26.1 33V16h34.1a55.6 55.6 0 0 0 55.6 55.6v34.1a55.5 55.5 0 0 1-24.8-6.2Z" />
  </svg>
)

export const SnapchatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M128 16c-39.7 0-64 27.7-64 67.6v21.5c0 14.4-5.1 27.4-13.3 35.3-4.2 4.1-9.4 6.4-14.9 7.4-2.9.5-4.8 3.4-4 6.2 1.5 5.1 7.4 8.4 13.8 11.1 6.4 2.8 10.6 4.8 10.6 10.4 0 6.2-6.6 10.8-13.6 14.9-4.6 2.6-9.3 5.3-9.3 9.9 0 4.2 3.4 7.4 8 8.5 10.7 2.6 18.3 8.5 26.2 14.8 10.8 8.4 24.8 18.5 49.8 18.5h28.1c25 0 39-10.1 49.8-18.5 7.9-6.3 15.5-12.2 26.2-14.8 4.6-1.1 8-4.3 8-8.5 0-4.6-4.7-7.3-9.3-9.9-7-4.1-13.6-8.7-13.6-14.9 0-5.6 4.2-7.6 10.6-10.4 6.4-2.7 12.3-6 13.8-11.1.8-2.8-1.1-5.7-4-6.2-5.5-1-10.7-3.3-14.9-7.4-8.2-7.9-13.3-20.9-13.3-35.3V83.6C192 43.7 167.7 16 128 16Z" />
  </svg>
)
