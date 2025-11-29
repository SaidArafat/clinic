'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

type Language = 'en' | 'ar'

const translations = {
  en: {
    shared: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        reviews: 'Reviews',
        contact: 'Contact'
      },
      actions: {
        contactUs: 'Contact Us',
        learnMore: 'Learn More',
        bookConsultation: 'Book Consultation',
        bookAppointment: 'Book Appointment',
        askPrices: 'Ask Prices'
      },
      clinics: {
        sheikhZayed: 'Sheikh Zayed Clinic',
        sixthOctober: '6th October Clinic',
        mainBranch: 'Main Branch'
      },
      highlights: {
        mainServices: 'Our Main Services',
        years: 'Years'
      },
      serviceCategories: {
        spine: 'Spine Disorders',
        neuro: 'Neurological Rehabilitation',
        sports: 'Sports Injuries',
        joints: 'Joints Pain',
        surgery: 'Post Orthopedic Surgery'
      }
    },
    hero: {
      heading: {
        title: 'Dr. Ashraf Kotob',
        subtitle: 'Consultant Physiotherapist',
        description: '25+ Years of Experience in Spine, Joints & Rehabilitation'
      },
      expertise: {
        spineService: 'Spine & Back Pain',
        neuroService: 'Neurological Rehab',
        sportsService: 'Sports Injuries',
        jointsService: 'Joints Pain',
        surgeryService: 'Post-surgery Rehab'
      }
    },
    about: {
      heading: {
        title: 'About Dr. Ashraf',
        description:
          'Dr. Ashraf Kotob is a highly experienced consultant physiotherapist with over 25 years of dedicated practice in the field of rehabilitation and manual therapy. His expertise spans across spine rehabilitation, neurological conditions, sports injuries, and post-surgical recovery.'
      },
      qualifications: {
        title: 'Key Qualifications:',
        items: {
          advancedManualTherapy: 'Advanced Manual Therapy Consultant',
          germanCertification: 'German Certification in Spine Mechanics',
          clinicalExperience: '25+ Years Clinical Experience',
          neuroExpert: 'Neurological Rehabilitation Expert',
          sportsRehab: 'Sports Injury Rehabilitation'
        }
      },
      philosophy: {
        title: 'Treatment Philosophy',
        description:
          'Our approach focuses on personalized care, combining evidence-based treatment techniques with manual therapy expertise. We believe in treating the root cause, not just the symptoms, ensuring long-term recovery and preventing future injuries.'
      },
      stats: {
        happyPatients: 'Happy Patients',
        yearsExperience: 'Years Experience',
        certifications: 'Certifications',
        successRate: 'Success Rate'
      },
      certifications: {
        'german-certification': {
          title: 'German Certification',
          subtitle: 'Spine Mechanics'
        },
        'manual-therapy': {
          title: 'Manual Therapy',
          subtitle: 'Advanced Level'
        },
        'neurological-rehabilitation': {
          title: 'Neurological Rehabilitation',
          subtitle: 'Specialist'
        },
        'sports-medicine': {
          title: 'Sports Medicine',
          subtitle: 'Certified'
        }
      }
    },
    services: {
      title: 'Our Services',
      description:
        'Comprehensive physiotherapy services with over 25 years of experience',
      labels: {
        videos: 'Videos'
      },
      sections: {
        spineDisorders: {
          title: 'Lower back pain and disc prolapse',
          description:
            'Advanced treatment for spine and back pain using manual therapy and certified spine protocols.',
          muscleKnotsDiscHerniationAndSciatica:
            'Muscle knots, disc herniation, and sciatica',
          discProlapse: 'Lower back pain and disc prolapse',
          kyphosis: 'Kyphosis',
          scoliosis: 'Scoliosis',
          neckPain: 'Neck Pain',
          lowerBackPain: 'Lower Back Pain'
        },
        neurologicalRehabilitation: {
          title: 'Neurological Rehabilitation',
          description:
            'Specialized care for stroke recovery, brain injuries, and nervous system conditions.',
          dropFoot: 'Drop Foot',
          hemiparesis: 'Hemiparesis',
          paraParaparesis: 'Para Paraparesis'
        },
        postOrthopedicSurgery: {
          title: 'Post Orthopedic Surgery',
          description:
            'Rehabilitation programs designed for faster recovery after orthopedic operations.',
          totalKneeReplacement: 'Total knee replacement',
          rehabilitation: 'A C | Rehabilitation',
          elbowStiffness: 'Elbow Stiffness'
        },
        recoverySessions: {
          title: 'Recovery Sessions',
          description:
            'Rehabilitation programs designed for faster recovery after orthopedic operations.',
          totalKneeReplacement: 'Total knee replacement',
          rehabilitation: 'A C | Rehabilitation',
          elbowStiffness: 'Elbow Stiffness'
        },
        sportsInjury: {
          title: 'Sports Injury',
          description:
            'Professional physiotherapy for sports injuries with focus on safe and quick return to activity.',
          adductorsStrain: 'Adductors Strain',
          ankleSprain: 'Ankle Sprain',
          shoulderPain: 'Shoulder Pain',
          meniscusTearDegeneration:
            'Difference between meniscus tear and degeneration'
        },
        lymphaticDrainage: {
          title: 'Lymphatic Drainage',
          description:
            'Therapeutic techniques to improve circulation and reduce swelling through lymphatic massage.',
          lymphaticDrainage: 'Lymphatic Drainage'
        },
        tensionHeadache: {
          title: 'Tension Headache',
          description:
            'Manual therapy to relieve tension headaches caused by muscle strain and poor posture.',
          tensionHeadache: 'Tension Headache'
        },
        prenatalPhysicalTherapy: {
          title: 'Prenatal Physical Therapy',
          description:
            'Safe physiotherapy programs to support women during pregnancy and relieve body strain.',
          prenatalPhysicalTherapy: 'Prenatal Physical Therapy'
        }
      }
    },
    reviews: {
      title: 'Patient Reviews',
      description: 'Hear from our patients about their recovery journeys',
      cta: {
        viewMore: 'View More Reviews',
        addFeedback: 'Add Your Feedback'
      },
      form: {
        description: "Share your experience with Dr. Ashraf's treatment",
        fields: {
          nameLabel: 'Your Name',
          namePlaceholder: 'Enter your name',
          conditionLabel: 'Your Condition/Treatment',
          conditionPlaceholder:
            'e.g. Back pain rehabilitation, Sports injury recovery',
          reviewLabel: 'Your Review',
          reviewPlaceholder: 'Share your experience and recovery journey...',
          ratingLabel: 'Rating'
        },
        submit: 'Submit Feedback',
        success: 'Thank you for your feedback!'
      }
    },
    contact: {
      heading: {
        title: 'Contact Us',
        description: 'Get in touch for appointments or inquiries'
      },
      info: {
        phoneNumbers: 'Phone Numbers',
        locations: 'Locations',
        workingHours: 'Working Hours',
        workingHoursWeekdays: 'Saturday - Thursday: 5:00 PM - 11:00 PM',
        workingHoursFriday: 'Friday: Closed'
      },
      branches: {
        zayed: {
          name: 'Sheikh Zayed Branch',
          address: 'Sheikh Zayed City, Giza Governorate'
        },
        october: {
          name: '6th October - Cairo Medical Center',
          address: 'Cairo Medical Center, after Najda Square, Central Axis'
        }
      },
      map: {
        location: 'Location',
        googleMaps: 'Google Maps Integration',
        branchLabels: {
          sixthOctober: '6th October Branch',
          sheikhZayed: 'Sheikh Zayed Branch'
        },
        viewOnGoogleMaps: 'View on Google Maps',
        clickToOpenDirections: 'Click to open directions'
      },
      labels: {
        directions: 'Directions',
        callNow: 'Call Now',
        clinicFeatures: 'Clinic Features'
      },
      emergency: {
        title: 'Emergency Consultations',
        description: 'For urgent physiotherapy needs outside regular hours',
        availability: 'Available for emergency consultations and home visits',
        contact: 'Emergency Contact'
      },
      booking: {
        title: 'Booking Information',
        description:
          'Appointments can be booked via phone or WhatsApp. Home visits available within Cairo and Giza.',
        insuranceAccepted: 'Insurance Accepted',
        homeVisitsAvailable: 'Home Visits Available',
        followUpPrograms: 'Follow-up Programs',
        multilingualService: 'Multilingual Service'
      }
    },
    footer: {
      labels: {
        role: 'Consultant Physiotherapist',
        experience: '20+ Years of Experience in Spine, Joints & Rehabilitation',
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        ourSpecializations: 'Our Specializations',
        consultationsAvailable: 'Consultations Available',
        homeVisits: 'Home Visits',
        arabicEnglish: 'Arabic & English'
      },
      legal: {
        copyright: 'Dr. Ashraf Kotob Physio Clinic. All rights reserved.'
      }
    },
    whatsapp: {
      heading: 'Contact via WhatsApp',
      chooseClinic: 'Choose your preferred clinic location:',
      quickActions: {
        title: 'Quick Actions',
        bookAppointment: 'Book Appointment',
        askPrices: 'Ask Prices'
      },
      prompts: {
        clickToStart: 'Click to start a WhatsApp conversation'
      }
    }
  },
  ar: {
    shared: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        reviews: 'آراء المرضى',
        contact: 'اتصل بنا'
      },
      actions: {
        contactUs: 'اتصل بنا',
        learnMore: 'اعرف المزيد',
        bookConsultation: 'احجز استشارة',
        bookAppointment: 'احجز موعد',
        askPrices: 'اسأل عن الأسعار'
      },
      clinics: {
        sheikhZayed: 'عيادة الشيخ زايد',
        sixthOctober: 'عيادة 6 أكتوبر',
        mainBranch: 'الفرع الرئيسي'
      },
      highlights: {
        mainServices: 'خدماتنا الرئيسية',
        years: 'عاماً'
      },
      serviceCategories: {
        spine: 'إصابات وآلام العمود الفقري',
        neuro: 'تأهيل حالات الأعصاب',
        sports: 'إصابات الملاعب',
        joints: 'آلام المفاصل',
        surgery: 'تأهيل ما بعد جراحات العظام'
      }
    },
    hero: {
      heading: {
        title: 'د. أشرف قطب',
        subtitle: 'استشاري العلاج الطبيعي',
        description:
          'أكثر من 25 عاماً من الخبرة في علاج العمود الفقري والمفاصل والتأهيل'
      },
      expertise: {
        spineService: 'إصابات وآلام العمود الفقري',
        neuroService: 'تأهيل حالات الأعصاب',
        sportsService: 'إصابات الملاعب',
        jointsService: 'آلام المفاصل',
        surgeryService: 'تأهيل ما بعد الجراحات'
      }
    },
    about: {
      heading: {
        title: 'عن الدكتور أشرف',
        description:
          'الدكتور أشرف قطب هو استشاري علاج طبيعي ذو خبرة واسعة تمتد لأكثر من 25 عاماً في مجال التأهيل والعلاج اليدوي. تشمل خبرته تأهيل العمود الفقري، والحالات العصبية، وإصابات الملاعب، والتعافي بعد العمليات الجراحية.'
      },
      qualifications: {
        title: 'المؤهلات الرئيسية:',
        items: {
          advancedManualTherapy: 'استشاري علاج يدوي متقدم',
          germanCertification: 'شهادات ألمانية في ميكانيكا العمود الفقري',
          clinicalExperience: 'خبرة سريرية أكثر من 25 عاماً',
          neuroExpert: 'خبير تأهيل الأعصاب',
          sportsRehab: 'تأهيل الإصابات الرياضية'
        }
      },
      philosophy: {
        title: 'فلسفة العلاج',
        description:
          'نهجنا يركز على الرعاية الشخصية، مع دمج تقنيات العلاج المبنية على الأدلة العلمية مع خبرة العلاج اليدوي. نؤمن بعلاج السبب الجذري وليس فقط الأعراض، مما يضمن الشفاء طويل الأمد ومنع الإصابات المستقبلية.'
      },
      stats: {
        happyPatients: 'مرضى سعداء',
        yearsExperience: 'سنوات من الخبرة',
        certifications: 'شهادات معتمدة',
        successRate: 'نسبة النجاح'
      },
      certifications: {
        'german-certification': {
          title: 'الشهادة الألمانية',
          subtitle: 'ميكانيكا العمود الفقري'
        },
        'manual-therapy': {
          title: 'العلاج اليدوي',
          subtitle: 'المستوى المتقدم'
        },
        'neurological-rehabilitation': {
          title: 'إعادة التأهيل العصبي',
          subtitle: 'متخصص'
        },
        'sports-medicine': {
          title: 'الطب الرياضي',
          subtitle: 'معتمد'
        }
      }
    },
    services: {
      title: 'خدماتنا',
      description: 'خدمات علاج طبيعي شاملة مع أكثر من 25 عاماً من الخبرة',
      labels: {
        videos: 'فيديوهات'
      },
      sections: {
        spineDisorders: {
          title: 'اضطرابات العمود الفقري',
          description:
            'علاج شامل لآلام العمود الفقري والظهر باستخدام تقنيات العلاج اليدوي المتقدمة وبروتوكولات ميكانيكا العمود الفقري المعتمدة من ألمانيا.',
          muscleKnotsDiscHerniationAndSciatica:
            'العقد العضلية والديسك وعرق النسا',
          discProlapse: 'لآلام العمود الفقري والمفاصل',
          kyphosis: 'الحدبة',
          scoliosis: 'الجنف',
          neckPain: 'ألم الرقبة',
          lowerBackPain: 'آلام أسفل الظهر'
        },
        neurologicalRehabilitation: {
          title: 'تأهيل حالات الأعصاب',
          description:
            'تأهيل عصبي متخصص لحالات ما بعد الجلطات الدماغية، وإصابات الدماغ، واضطرابات الجهاز العصبي.',
          dropFoot: 'هبوط القدم',
          hemiparesis: 'شلل نصفي',
          paraParaparesis: 'شلل جزئي في الطرفين السفليين'
        },
        postOrthopedicSurgery: {
          title: 'تأهيل جراحات العظام',
          description:
            'علاج متخصص لإصابات العظام الناتجة عن العمليات الجراحية مع التركيز على التعافي السريع واستعادة الأداء الكامل.',
          totalKneeReplacement: 'تأهيل تغيير مفصل الركبة',
          rehabilitation: 'تأهيل الرباط الصليبي',
          elbowStiffness: 'تيبس الكوع'
        },
        recoverySessions: {
          title: 'جلسات التعافي',
          description:
            'علاج متخصص لإصابات العظام الناتجة عن العمليات الجراحية مع التركيز على التعافي السريع واستعادة الأداء الكامل.',
          totalKneeReplacement: 'تأهيل تغيير مفصل الركبة',
          rehabilitation: 'تأهيل الرباط الصليبي',
          elbowStiffness: 'تيبس الكوع'
        },
        sportsInjury: {
          title: 'الإصابات الرياضية',
          description:
            'علاج طبيعي متخصص لإصابات الرياضيين مع التركيز على التعافي الآمن والسريع للعودة للنشاط.',
          adductorsStrain: 'شد العضلة الضامة',
          ankleSprain: 'التواء الكاحل',
          shoulderPain: 'ألم الكتف',
          meniscusTearDegeneration:
            'الفرق بين إصابات غضروف الركبة وتآكل غضروف الركبة'
        },
        lymphaticDrainage: {
          title: 'المساج الليمفاوي',
          description:
            'تقنيات علاجية لتحسين الدورة الدموية وتقليل التورم من خلال التدليك اللمفاوي.',
          lymphaticDrainage: 'المساج الليمفاوي'
        },
        tensionHeadache: {
          title: 'الصداع الناتج عن التوتر',
          description:
            'علاج يدوي لتخفيف الصداع الناتج عن شد العضلات أو الوضعيات الخاطئة.',
          tensionHeadache: 'الصداع الناتج عن التوتر'
        },
        prenatalPhysicalTherapy: {
          title: 'تأهيل السيدات الحوامل للولادة الطبيعية',
          description:
            'برامج علاج طبيعي آمنة لدعم المرأة الحامل وتخفيف الإجهاد والآلام المصاحبة للحمل.',
          prenatalPhysicalTherapy: 'تأهيل السيدات الحوامل للولادة الطبيعية'
        }
      }
    },
    reviews: {
      title: 'آراء المرضى',
      description: 'استمع لمرضانا حول رحلات التعافي الخاصة بهم',
      cta: {
        viewMore: 'شاهد المزيد',
        addFeedback: 'أضف تقييمك'
      },
      form: {
        description: 'شارك تجربتك مع علاج الدكتور أشرف',
        fields: {
          nameLabel: 'اسمك',
          namePlaceholder: 'أدخل اسمك',
          conditionLabel: 'حالتك/العلاج',
          conditionPlaceholder: 'مثال: تأهيل آلام الظهر، تعافي من إصابة رياضية',
          reviewLabel: 'تقييمك',
          reviewPlaceholder: 'شارك تجربتك ورحلة التعافي...',
          ratingLabel: 'التقييم'
        },
        submit: 'إرسال التقييم',
        success: 'شكراً لك على تقييمك!'
      }
    },
    contact: {
      heading: {
        title: 'اتصل بنا',
        description: 'تواصل معنا لحجز المواعيد أو الاستفسارات'
      },
      info: {
        phoneNumbers: 'أرقام الهواتف',
        locations: 'المواقع',
        workingHours: 'ساعات العمل',
        workingHoursWeekdays: 'السبت - الخميس: 5:00 م - 11:00 م',
        workingHoursFriday: 'الجمعة: مغلق'
      },
      branches: {
        zayed: {
          name: 'فرع الشيخ زايد',
          address: 'مدينة الشيخ زايد، الجيزة'
        },
        october: {
          name: '6 أكتوبر - كايرو ميديكال سنتر',
          address: 'كايرو ميديكال سنتر، بعد ميدان النجدة، المحور المركزي'
        }
      },
      map: {
        location: 'الموقع',
        googleMaps: 'خرائط جوجل',
        branchLabels: {
          sixthOctober: 'فرع 6 أكتوبر',
          sheikhZayed: 'فرع الشيخ زايد'
        },
        viewOnGoogleMaps: 'عرض على خرائط جوجل',
        clickToOpenDirections: 'انقر لفتح الاتجاهات'
      },
      labels: {
        directions: 'الاتجاهات',
        callNow: 'اتصل الآن',
        clinicFeatures: 'مميزات العيادة'
      },
      emergency: {
        title: 'استشارات طارئة',
        description:
          'للحالات العاجلة في العلاج الطبيعي خارج أوقات العمل الرسمية',
        availability: 'متاح للاستشارات الطارئة والزيارات المنزلية',
        contact: 'جهة الاتصال في الحالات الطارئة'
      },
      booking: {
        title: 'معلومات الحجز',
        description:
          'يمكن حجز المواعيد عبر الهاتف أو الواتساب. الزيارات المنزلية متاحة داخل القاهرة والجيزة.',
        insuranceAccepted: 'نقبل التأمين',
        homeVisitsAvailable: 'زيارات منزلية متاحة',
        followUpPrograms: 'برامج متابعة',
        multilingualService: 'خدمة بعدة لغات'
      }
    },
    footer: {
      labels: {
        role: 'استشاري العلاج الطبيعي',
        experience:
          'أكثر من 20 عاماً من الخبرة في علاج العمود الفقري والمفاصل والتأهيل',
        quickLinks: 'روابط سريعة',
        followUs: 'تابعنا',
        ourSpecializations: 'تخصصاتنا',
        consultationsAvailable: 'استشارات متاحة',
        homeVisits: 'زيارات منزلية',
        arabicEnglish: 'العربية والإنجليزية'
      },
      legal: {
        copyright: 'عيادة الدكتور أشرف قطب للعلاج الطبيعي. جميع الحقوق محفوظة.'
      }
    },
    whatsapp: {
      heading: 'تواصل عبر الواتساب',
      chooseClinic: 'اختر موقع العيادة المفضل لديك:',
      quickActions: {
        title: 'إجراءات سريعة',
        bookAppointment: 'احجز موعد',
        askPrices: 'اسأل عن الأسعار'
      },
      prompts: {
        clickToStart: 'انقر لبدء محادثة واتساب'
      }
    }
  }
} as const

type TranslationContent = (typeof translations)[Language]

type Primitive = string | number | boolean | null | undefined

type NestedKeyOf<T> = {
  [Key in keyof T & string]: T[Key] extends Primitive
    ? `${Key}`
    : T[Key] extends Record<string, unknown>
      ? `${Key}` | `${Key}.${NestedKeyOf<T[Key]>}`
      : `${Key}`
}[keyof T & string]

export type TranslationKey = NestedKeyOf<TranslationContent>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language | null
    if (storedLang) {
      setLanguageState(storedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKey): string => {
    const keys = key.split('.')
    let value: unknown = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        value = undefined
        break
      }
    }

    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
