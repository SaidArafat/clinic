import { Facebook, Instagram, X, Youtube, Copyright } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SpineBackPain from '@/assets/spine-back-pain.png'
import NeurologicalRehab from '@/assets/neurological-rehab.png'
import SportsInjuries from '@/assets/sports-injuries.png'
import JointsPain from '@/assets/joints-pain.png'
import PostSurgery from '@/assets/post-surgery-rehab.png'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-5">
      <section>
        <h2 className="text-xl font-medium mb-2">{t('footer.info.title')}</h2>
        <h3 className="text-lg">{t('footer.info.position')}</h3>
        <p className="leading-7 mt-4">{t('footer.info.description')}</p>
      </section>
      <section>
        <h2 className="text-xl font-medium mb-2">
          {t('footer.quick-links.title')}
        </h2>
        <ul>
          {quickLinks.map(link => (
            <li key={link.key}>
              <a href="">{t(`footer.quick-links.${link.key}`)}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-medium mb-2">
          {t('footer.contact.title')}
        </h2>
        <ul>
          <li>
            <a href="">{t(`footer.contact.phone.1`)}</a>
          </li>
          <li>
            <a href="">{t(`footer.contact.phone.2`)}</a>
          </li>
          <li>
            <a href="">{t(`footer.contact.address.1`)}</a>
          </li>
          <li>
            <a href="">{t(`footer.contact.address.2`)}</a>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-medium mb-2">{t('footer.follow.title')}</h2>
        <ul className="flex items-center gap-5">
          {socialLinks.map(link => (
            <li key={link.key}>
              <a href="">{link.icon}</a>
            </li>
          ))}
        </ul>
        <h3>{t('footer.follow.working-hours.title')}</h3>
        <ul>
          <li>{t('footer.follow.working-hours.hours.1')}</li>
          <li>{t('footer.follow.working-hours.hours.2')}</li>
        </ul>
      </section>
      <section className="md:col-span-4 py-5 mt-10  border-y">
        <h2 className="text-xl text-center mb-5">
          {t('footer.specializations.title')}
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {specializations.map(spec => (
            <li
              key={spec.key}
              className="flex flex-col items-center gap-4 group transition-shadow duration-300"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center group-hover:scale-x-[-1] transition-transform duration-500 ease-in-out">
                <img src={spec.icon} alt={t(`footer.${spec.key}`)} />
              </div>
              <h3>{t(`footer.${spec.key}`)}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="md:col-span-4 bg-amber-100">
        <p className="flex items-start justify-center text-center">
          <span className="flex items-center gap-1 ms-3 md:mx-1">
            <Copyright size={20} strokeWidth={2} />
            <span>{new Date().getFullYear()}</span>
          </span>
          {t('footer.copyright')}.
        </p>
      </section>
    </footer>
  )
}

const quickLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'reviews', href: '/reviews' },
  { key: 'contact', href: '/contact' }
]

const socialLinks = [
  {
    key: 'facebook',
    icon: <Facebook size={33} strokeWidth={0.75} />,
    href: ''
  },
  {
    key: 'instagram',
    icon: <Instagram size={30} strokeWidth={0.75} />,
    href: ''
  },
  { key: 'youtube', icon: <Youtube size={38} strokeWidth={0.75} />, href: '' },
  { key: 'x', icon: <X size={34} strokeWidth={0.75} />, href: '' }
]

const specializations = [
  { key: 'specializations.1', icon: SpineBackPain },
  { key: 'specializations.2', icon: NeurologicalRehab },
  { key: 'specializations.3', icon: SportsInjuries },
  { key: 'specializations.4', icon: JointsPain },
  { key: 'specializations.5', icon: PostSurgery }
]
