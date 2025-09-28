import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { useTranslation } from 'react-i18next'

export function Services() {
  const { t } = useTranslation()

  return (
    <section className="py-8 bg-slate-50 dark:bg-transparent">
      <header className="text-center flex flex-col gap-5 mb-10">
        <h1 className="text-3xl font-extrabold">{t('services.title')}</h1>
        <h2 className="text-xl font-semibold">{t('services.description')}</h2>
      </header>
      <ServicesAccordion />
    </section>
  )
}

function ServicesAccordion() {
  const { t } = useTranslation()

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:w-[55rem] my-4 mx-auto space-y-2"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border last:border-b rounded-md px-4 bg-white dark:bg-transparent"
        >
          <AccordionTrigger className="text-lg">{t(title)}</AccordionTrigger>
          <AccordionContent>
            {content.map(c => (
              <div key={c.key}>{t(c.key)}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const items = [
  {
    title: 'services.list.spine-back-pain.title',
    content: [
      {
        key: 'services.list.spine-back-pain.scoliosis',
        src: 'youtube'
      },
      {
        key: 'services.list.spine-back-pain.disc-herniation',
        src: 'youtube'
      },
      {
        key: 'services.list.spine-back-pain.sciatica',
        src: 'youtube'
      },
      {
        key: 'services.list.spine-back-pain.spinal-muscle-imbalance',
        src: 'youtube'
      },
      {
        key: 'services.list.spine-back-pain.kyphosis',
        src: 'youtube'
      },
      {
        key: 'services.list.spine-back-pain.vertebral-roughness',
        src: 'youtube'
      },
      {
        key: 'services.list.spine-back-pain.vertebral-displacement',
        src: 'youtube'
      }
    ]
  },
  {
    title: 'services.list.neurological-rehab.title',
    content: [
      {
        key: 'services.list.neurological-rehab.stroke',
        src: 'youtube'
      },
      {
        key: 'services.list.neurological-rehab.peripheral-nerve-injuries',
        src: 'youtube'
      },
      {
        key: 'services.list.neurological-rehab.spinal-cord-injuries',
        src: 'youtube'
      },
      {
        key: 'services.list.neurological-rehab.multiple-sclerosis',
        src: 'youtube'
      }
    ]
  },
  {
    title: 'services.list.sports-injuries.title',
    content: [
      {
        key: 'services.list.sports-injuries.ACL-injuries',
        src: 'youtube'
      },
      {
        key: 'services.list.sports-injuries.ankle-sprain',
        src: 'youtube'
      },
      {
        key: 'services.list.sports-injuries.achilles-tendon',
        src: 'youtube'
      },
      {
        key: 'services.list.sports-injuries.muscle-injuries',
        src: 'youtube'
      }
    ]
  }
]
