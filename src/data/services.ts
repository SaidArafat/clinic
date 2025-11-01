import {
  lymphaticDrainage,
  neurologicalRehabilitation,
  postOrthopedicSurgery,
  prenatalPhysicalTherapy,
  spineDisorders,
  sportsInjury,
  tensionHeadache
} from '@/lib/icons'

export const services = [
  {
    id: 'spine-disorders',
    title: 'servicesSection.spineDisorders.title',
    icon: spineDisorders,
    image:
      'https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMHJlaGFiaWxpdGF0aW9uJTIwcGh5c2lvdGhlcmFweXxlbnwxfHx8fDE3NTg4NzMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'servicesSection.spineDisorders.description',
    treatments: [
      {
        title: 'servicesSection.spineDisorders.kyphosis',
        src: 'https://www.youtube.com/watch?v=DCfWhOCqrJ4&list=PL6kCEMPsrM7GzPMQ5G8f2_D7B_gYZFGC5'
      },
      {
        title: 'servicesSection.spineDisorders.scoliosis',
        src: 'https://www.youtube.com/watch?v=ZsasorS07CI&list=PL6kCEMPsrM7GzPMQ5G8f2_D7B_gYZFGC5'
      },
      {
        title: 'servicesSection.spineDisorders.neckPain',
        src: 'https://www.youtube.com/watch?v=Mzt3H3B9-S0&list=PL6kCEMPsrM7GzPMQ5G8f2_D7B_gYZFGC5'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=DCfWhOCqrJ4&list=PL6kCEMPsrM7GzPMQ5G8f2_D7B_gYZFGC5'
  },
  {
    id: 'neurological-rehabilitation',
    title: 'servicesSection.neurologicalRehabilitation.title',
    icon: neurologicalRehabilitation,
    image:
      'https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ2ljYWwlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzU4ODczMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'servicesSection.neurologicalRehabilitation.description',
    treatments: [
      {
        title: 'servicesSection.neurologicalRehabilitation.dropFoot',
        src: 'https://www.youtube.com/watch?v=g6m89gypafs&list=PL6kCEMPsrM7F8Pl2mJdPNhANnowXXUWNu'
      },
      {
        title: 'servicesSection.neurologicalRehabilitation.hemiparesis',
        src: 'https://www.youtube.com/watch?v=ScJAAG_T2sU&list=PL6kCEMPsrM7F8Pl2mJdPNhANnowXXUWNu'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=g6m89gypafs&list=PL6kCEMPsrM7F8Pl2mJdPNhANnowXXUWNu'
  },
  {
    id: 'post-orthopedic-surgery',
    title: 'servicesSection.postOrthopedicSurgery.title',
    icon: postOrthopedicSurgery,
    image:
      'https://plus.unsplash.com/premium_photo-1661436735845-d136f5778f14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    description: 'servicesSection.postOrthopedicSurgery.description',
    treatments: [
      {
        title: 'servicesSection.postOrthopedicSurgery.rehabilitation',
        src: 'https://www.youtube.com/watch?v=YkY-nceZAoQ&list=PL6kCEMPsrM7E-O4f6NcACyRr99Cs45zix'
      },
      {
        title: 'servicesSection.postOrthopedicSurgery.elbowStiffness',
        src: 'https://www.youtube.com/watch?v=t6xsAt8xyBI&list=PL6kCEMPsrM7E-O4f6NcACyRr99Cs45zix'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=YkY-nceZAoQ&list=PL6kCEMPsrM7E-O4f6NcACyRr99Cs45zix'
  },
  {
    id: 'sports-injury',
    title: 'servicesSection.sportsInjury.title',
    icon: sportsInjury,
    image:
      'https://images.pexels.com/photos/20860603/pexels-photo-20860603.jpeg?_gl=1*1pgu867*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTE5NzQkajU5JGwwJGgw',
    description: 'servicesSection.sportsInjury.description',
    treatments: [
      {
        title: 'servicesSection.sportsInjury.ankleSprain',
        src: 'https://www.youtube.com/watch?v=B0Cno18Chpc&list=PL6kCEMPsrM7E2zK7TtWAV--UskYKATbVh'
      },
      {
        title: 'servicesSection.sportsInjury.shoulderPain',
        src: 'https://www.youtube.com/watch?v=8W2_pXkd_Ck&list=PL6kCEMPsrM7E2zK7TtWAV--UskYKATbVh'
      },
      {
        title: 'servicesSection.sportsInjury.meniscusTearDegeneration',
        src: 'https://www.youtube.com/watch?v=7Gv9V1Ao5vI&list=PL6kCEMPsrM7E2zK7TtWAV--UskYKATbVh'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=B0Cno18Chpc&list=PL6kCEMPsrM7E2zK7TtWAV--UskYKATbVh'
  },
  {
    id: 'lymphatic-drainage',
    title: 'servicesSection.lymphaticDrainage.title',
    icon: lymphaticDrainage,
    image:
      'https://images.pexels.com/photos/5473215/pexels-photo-5473215.jpeg?_gl=1*g92j22*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTIyMjUkajM3JGwwJGgw',
    description: 'servicesSection.lymphaticDrainage.description',
    treatments: [
      {
        title: 'servicesSection.lymphaticDrainage.lymphaticDrainage',
        src: 'https://www.youtube.com/watch?v=uRJZ_vH0rZY&list=PL6kCEMPsrM7GjaeVBfZzEoc4tNVVEi2R5'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=uRJZ_vH0rZY&list=PL6kCEMPsrM7GjaeVBfZzEoc4tNVVEi2R5'
  },
  {
    id: 'tension-headache',
    title: 'servicesSection.tensionHeadache.title',
    icon: tensionHeadache,
    image:
      'https://images.pexels.com/photos/8560717/pexels-photo-8560717.jpeg?_gl=1*3f2ba5*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTI0NjIkajIxJGwwJGgw',
    description: 'servicesSection.tensionHeadache.description',
    treatments: [
      {
        title: 'servicesSection.tensionHeadache.tensionHeadache',
        src: 'https://www.youtube.com/watch?v=5i1M6pql3WA&list=PL6kCEMPsrM7FSFUvvTe9vrbNCqeKgm6-K'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=5i1M6pql3WA&list=PL6kCEMPsrM7FSFUvvTe9vrbNCqeKgm6-K'
  },
  {
    id: 'prenatal-physical-therapy',
    title: 'servicesSection.prenatalPhysicalTherapy.title',
    icon: prenatalPhysicalTherapy,
    image:
      'https://images.pexels.com/photos/6462753/pexels-photo-6462753.jpeg?_gl=1*1h63cy0*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTI2MzUkajE3JGwwJGgw',
    description: 'servicesSection.prenatalPhysicalTherapy.description',
    treatments: [
      {
        title:
          'servicesSection.prenatalPhysicalTherapy.prenatalPhysicalTherapy',
        src: 'https://www.youtube.com/watch?v=TWOyVBAMSB0&list=PL6kCEMPsrM7EtiHOEjJVGWDhH5hU_H24d'
      }
    ],
    hasVideo: true,
    video:
      'https://www.youtube.com/watch?v=TWOyVBAMSB0&list=PL6kCEMPsrM7EtiHOEjJVGWDhH5hU_H24d'
  }
]
