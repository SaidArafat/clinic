import type { TranslationKey } from '@/contexts'
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

type ServiceConfig = {
  id: string
  title: TranslationKey
  icon: string
  image: string
  description: TranslationKey
  treatments: Array<{ title: TranslationKey; src: string | null }>
  hasVideo: boolean
  video: string
}

export const services: ServiceConfig[] = [
  {
    id: 'spine-disorders',
    title: 'services.sections.spineDisorders.title',
    icon: spineDisorders,
    image:
      'https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMHJlaGFiaWxpdGF0aW9uJTIwcGh5c2lvdGhlcmFweXxlbnwxfHx8fDE3NTg4NzMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'services.sections.spineDisorders.description',
    treatments: [
      // added: done
      // todo add here services.sections.spineDisorders.lowerBackPain
      {
        title: 'services.sections.spineDisorders.discProlapse',
        // src: 'https://www.youtube.com/embed/HVIKGZz-npU'
        src: '1-disc-prolapse.mp4'
      },
      {
        title:
          'services.sections.spineDisorders.muscleKnotsDiscHerniationAndSciatica',
        // src: 'https://www.youtube.com/embed/QmnV0ZamM6U'
        src: '2-muscle-knots-disc-herniation-and-sciatica.mp4'
      },
      {
        title: 'services.sections.spineDisorders.kyphosis',
        // src: 'https://www.youtube.com/embed/DCfWhOCqrJ4'
        src: '3-kyphosis.mp4'
      },
      {
        title: 'services.sections.spineDisorders.scoliosis',
        // src: 'https://www.youtube.com/embed/ZsasorS07CI'
        src: '4-scoliosis.mp4'
      },
      {
        title: 'services.sections.spineDisorders.neckPain',
        // src: 'https://www.youtube.com/embed/Mzt3H3B9-S0'
        src: '5-neck-pain.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/DCfWhOCqrJ4'
    video: '3-kyphosis.mp4'
  },
  {
    id: 'neurological-rehabilitation',
    title: 'services.sections.neurologicalRehabilitation.title',
    icon: neurologicalRehabilitation,
    image:
      'https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ2ljYWwlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzU4ODczMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'services.sections.neurologicalRehabilitation.description',
    treatments: [
      {
        title: 'services.sections.neurologicalRehabilitation.dropFoot',
        // src: 'https://www.youtube.com/embed/g6m89gypafs'
        src: '6-drop-foot.mp4'
      },
      {
        title: 'services.sections.neurologicalRehabilitation.hemiparesis',
        // src: 'https://www.youtube.com/embed/ScJAAG_T2sU'
        src: '7-hemiparesis.mp4'
      },
      // added
      {
        title: 'services.sections.neurologicalRehabilitation.paraParaparesis',
        src: '17-para-paraparesis.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/g6m89gypafs'
    video: '6-drop-foot.mp4'
  },
  {
    id: 'post-orthopedic-surgery',
    title: 'services.sections.postOrthopedicSurgery.title',
    icon: postOrthopedicSurgery,
    image:
      'https://plus.unsplash.com/premium_photo-1661436735845-d136f5778f14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    description: 'services.sections.postOrthopedicSurgery.description',
    treatments: [
      // added

      {
        title: 'services.sections.postOrthopedicSurgery.rehabilitation',
        // src: 'https://www.youtube.com/embed/YkY-nceZAoQ'
        src: '8-rehabilitation.mp4'
      },
      {
        title: 'services.sections.postOrthopedicSurgery.elbowStiffness',
        // src: 'https://www.youtube.com/embed/t6xsAt8xyBI'
        src: '9-elbow-stiffness.mp4'
      },
      {
        title: 'services.sections.postOrthopedicSurgery.totalKneeReplacement',
        src: '18-total-knee-replacement.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/YkY-nceZAoQ'
    video: '8-rehabilitation.mp4'
  },
  {
    id: 'recovery-sessions.',
    title: 'services.sections.recoverySessions.title',
    icon: recoverySessions,
    image:
      'https://images.pexels.com/photos/5473223/pexels-photo-5473223.jpeg?_gl=1*wv9kjs*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjI1OTUxMjAkbzIkZzEkdDE3NjI1OTUxNzQkajYkbDAkaDA.',
    description: 'services.sections.recoverySessions.description',
    treatments: [
      // added
      {
        title: 'services.sections.recoverySessions.title',
        src: '16-recovery-sessions.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/YkY-nceZAoQ'
    video: '16-recovery-sessions.mp4'
  },
  {
    id: 'sports-injury',
    title: 'services.sections.sportsInjury.title',
    icon: sportsInjury,
    image:
      'https://images.pexels.com/photos/20860603/pexels-photo-20860603.jpeg?_gl=1*1pgu867*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTE5NzQkajU5JGwwJGgw',
    description: 'services.sections.sportsInjury.description',
    treatments: [
      {
        title: 'services.sections.sportsInjury.ankleSprain',
        // src: 'https://www.youtube.com/embed/B0Cno18Chpc'
        src: '10-ankle-sprain.mp4'
      },
      {
        title: 'services.sections.sportsInjury.shoulderPain',
        // src: 'https://www.youtube.com/embed/8W2_pXkd_Ck'
        src: '11-shoulder-pain.mp4'
      },
      {
        title: 'services.sections.sportsInjury.meniscusTearDegeneration',
        // src: 'https://www.youtube.com/embed/7Gv9V1Ao5vI'
        src: '12-meniscus-tear-degeneration.mp4'
      },
      // added
      {
        title: 'services.sections.sportsInjury.adductorsStrain',
        src: '19-adductors-strain.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/B0Cno18Chpc'
    video: '10-ankle-sprain.mp4'
  },
  {
    id: 'lymphatic-drainage',
    title: 'services.sections.lymphaticDrainage.title',
    icon: lymphaticDrainage,
    image:
      'https://images.pexels.com/photos/5473215/pexels-photo-5473215.jpeg?_gl=1*g92j22*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTIyMjUkajM3JGwwJGgw',
    description: 'services.sections.lymphaticDrainage.description',
    treatments: [
      {
        title: 'services.sections.lymphaticDrainage.lymphaticDrainage',
        // src: 'https://www.youtube.com/embed/uRJZ_vH0rZY'
        src: '13-lymphatic-drainage.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/uRJZ_vH0rZY'
    video: '13-lymphatic-drainage.mp4'
  },
  {
    id: 'tension-headache',
    title: 'services.sections.tensionHeadache.title',
    icon: tensionHeadache,
    image:
      'https://images.pexels.com/photos/8560717/pexels-photo-8560717.jpeg?_gl=1*3f2ba5*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTI0NjIkajIxJGwwJGgw',
    description: 'services.sections.tensionHeadache.description',
    treatments: [
      {
        title: 'services.sections.tensionHeadache.tensionHeadache',
        // src: 'https://www.youtube.com/embed/5i1M6pql3WA'
        src: '14-tension-headache.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/5i1M6pql3WA'
    video: '14-tension-headache.mp4'
  },
  {
    id: 'prenatal-physical-therapy',
    title: 'services.sections.prenatalPhysicalTherapy.title',
    icon: prenatalPhysicalTherapy,
    image:
      'https://images.pexels.com/photos/6462753/pexels-photo-6462753.jpeg?_gl=1*1h63cy0*_ga*MTQ2MTY5OTkwNS4xNzYxOTkxODk3*_ga_8JE65Q40S6*czE3NjE5OTE4OTYkbzEkZzEkdDE3NjE5OTI2MzUkajE3JGwwJGgw',
    description: 'services.sections.prenatalPhysicalTherapy.description',
    treatments: [
      {
        title:
          'services.sections.prenatalPhysicalTherapy.prenatalPhysicalTherapy',
        // src: 'https://www.youtube.com/embed/TWOyVBAMSB0'
        src: '15-prenatal-physical-therapy.mp4'
      }
    ],
    hasVideo: true,
    // video: 'https://www.youtube.com/embed/TWOyVBAMSB0'
    video: '15-prenatal-physical-therapy.mp4'
  }
]
