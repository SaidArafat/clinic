import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Award, BookOpen, Clock, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      className="container mx-auto py-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6"
      id="about"
    >
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <main className="flex flex-col text-center md:text-start">
          <header>
            <h1 className="text-3xl font-extrabold">{t('about.title')}</h1>
            <h2 className="text-xl font-semibold">{t('about.position')}</h2>
          </header>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {t('about.description')}
          </p>
          <span className="mt-6 text-xl font-semibold tracking-tight">
            {t('about.qualifications.title')}
          </span>
          <ul className="mb-6 ms-6 md:list-disc [&>li]:mt-2">
            <li>{t('about.qualifications.1')} .</li>
            <li>{t('about.qualifications.2')} .</li>
            <li>{t('about.qualifications.3')} .</li>
            <li>{t('about.qualifications.4')} .</li>
            <li>{t('about.qualifications.5')} .</li>
          </ul>
        </main>
        <aside className="h-96 flex items-center justify-center bg-slate-200 rounded-2xl">
          image
        </aside>
      </section>
      <section className="mt-12 grid gap-5 md:grid-cols-4">
        <Card className="group hover:shadow-md transition-shadow duration-300">
          <CardContent className="grid gap-4 text-center">
            <CardTitle className="flex items-center justify-center">
              <Clock
                className="w-12 h-12 group-hover:scale-x-[-1] transition-transform duration-500 ease-in-out"
                strokeWidth={0.75}
              />
            </CardTitle>
            <CardTitle>{t('about.qualifications.2')}</CardTitle>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-md transition-shadow duration-300">
          <CardContent className="grid gap-4 text-center">
            <CardTitle className="flex items-center justify-center">
              <BookOpen
                className="w-12 h-12 group-hover:scale-x-[-1] transition-transform duration-500 ease-in-out"
                strokeWidth={0.75}
              />
            </CardTitle>
            <CardTitle>{t('about.qualifications.3')}</CardTitle>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-md transition-shadow duration-300">
          <CardContent className="grid gap-4 text-center">
            <CardTitle className="flex items-center justify-center">
              <Users
                className="w-12 h-12 group-hover:scale-x-[-1] transition-transform duration-500 ease-in-out"
                strokeWidth={0.75}
              />
            </CardTitle>
            <CardTitle>{t('about.qualifications.4')}</CardTitle>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-md transition-shadow duration-300">
          <CardContent className="grid gap-4 text-center">
            <CardTitle className="flex items-center justify-center">
              <Award
                className="w-12 h-12 group-hover:scale-x-[-1] transition-transform duration-500 ease-in-out"
                strokeWidth={0.75}
              />
            </CardTitle>
            <CardTitle>{t('about.qualifications.1')}</CardTitle>
          </CardContent>
        </Card>
      </section>
      <footer className="mt-12 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold">
          {t('about.treatment-philosophy.title')}
        </h2>
        <p className="leading-7 mt-4 whitespace-pre-line">
          {t('about.treatment-philosophy.description')}
        </p>
      </footer>
    </section>
  )
}
