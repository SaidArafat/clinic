import {
  lymphaticDrainage,
  neurologicalRehabilitation,
  postOrthopedicSurgery,
  prenatalPhysicalTherapy,
  recoverySessions,
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
      // added: done
      // todo add here  servicesSection.spineDisorders.lowerBackPain
      {
        title: 'servicesSection.spineDisorders.discProlapse',
        src: 'https://www.youtube.com/embed/HVIKGZz-npU'
      },
      {
        title:
          'servicesSection.spineDisorders.muscleKnotsDiscHerniationAndSciatica',
        src: 'https://www.youtube.com/embed/QmnV0ZamM6U'
      },
      {
        title: 'servicesSection.spineDisorders.kyphosis',
        src: 'https://www.youtube.com/embed/DCfWhOCqrJ4'
      },
      {
        title: 'servicesSection.spineDisorders.scoliosis',
        src: 'https://www.youtube.com/embed/ZsasorS07CI'
      },
      {
        title: 'servicesSection.spineDisorders.neckPain',
        src: 'https://www.youtube.com/embed/Mzt3H3B9-S0'
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/DCfWhOCqrJ4'
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
        src: 'https://www.youtube.com/embed/g6m89gypafs'
      },
      {
        title: 'servicesSection.neurologicalRehabilitation.hemiparesis',
        src: 'https://www.youtube.com/embed/ScJAAG_T2sU'
      },
      // added
      {
        title: 'servicesSection.neurologicalRehabilitation.paraParaparesis',
        src: null
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/g6m89gypafs'
  },
  {
    id: 'post-orthopedic-surgery',
    title: 'servicesSection.postOrthopedicSurgery.title',
    icon: postOrthopedicSurgery,
    image:
      'https://plus.unsplash.com/premium_photo-1661436735845-d136f5778f14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    description: 'servicesSection.postOrthopedicSurgery.description',
    treatments: [
      // added

      {
        title: 'servicesSection.postOrthopedicSurgery.rehabilitation',
        src: 'https://www.youtube.com/embed/YkY-nceZAoQ'
      },
      {
        title: 'servicesSection.postOrthopedicSurgery.elbowStiffness',
        src: 'https://www.youtube.com/embed/t6xsAt8xyBI'
      },
      {
        title: 'servicesSection.postOrthopedicSurgery.totalKneeReplacement',
        src: null
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/YkY-nceZAoQ'
  },
  {
    id: 'recovery-sessions.',
    title: 'servicesSection.recoverySessions.title',
    icon: recoverySessions,
    image:
      'https://images.pexels.com/photos/5473223/pexels-photo-5473223.jpeg?_gl=1*wv9kjs*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjI1OTUxMjAkbzIkZzEkdDE3NjI1OTUxNzQkajYkbDAkaDA.',
    description: 'servicesSection.recoverySessions.description',
    treatments: [
      // added
      {
        title: 'servicesSection.recoverySessions.title',
        src: null
      }
    ],
    hasVideo: false,
    video: 'https://www.youtube.com/embed/YkY-nceZAoQ'
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
        src: 'https://www.youtube.com/embed/B0Cno18Chpc'
      },
      {
        title: 'servicesSection.sportsInjury.shoulderPain',
        src: 'https://www.youtube.com/embed/8W2_pXkd_Ck'
      },
      {
        title: 'servicesSection.sportsInjury.meniscusTearDegeneration',
        src: 'https://www.youtube.com/embed/7Gv9V1Ao5vI'
      },
      // added
      {
        title: 'servicesSection.sportsInjury.adductorsStrain',
        src: null
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/B0Cno18Chpc'
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
        src: 'https://www.youtube.com/embed/uRJZ_vH0rZY'
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/uRJZ_vH0rZY'
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
        src: 'https://www.youtube.com/embed/5i1M6pql3WA'
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/5i1M6pql3WA'
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
        src: 'https://www.youtube.com/embed/TWOyVBAMSB0'
      }
    ],
    hasVideo: true,
    video: 'https://www.youtube.com/embed/TWOyVBAMSB0'
  }
]
