'use client'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    reviews: 'Reviews',
    contact: 'Contact',

    // Hero
    heroTitle: 'Dr. Ashraf Kotob',
    heroSubtitle: 'Consultant Physiotherapist',
    heroDescription:
      '25+ Years of Experience in Spine, Joints & Rehabilitation',
    contactUs: 'Contact Us',
    ourMainServices: 'Our Main Services',
    spineService: 'Spine & Back Pain',
    neuroService: 'Neurological Rehab',
    sportsService: 'Sports Injuries',
    jointsService: 'Joints Pain',
    surgeryService: 'Post-surgery Rehab',
    learnMore: 'Learn More',
    years: 'Years',

    // Hero services
    spineDisorders: 'Spine Disorders',
    neurologicalRehabilitation: 'Neurological Rehabilitation',
    postOrthopedicSurgery: 'Post Orthopedic Surgery',
    recoverySessions: 'Recovery Sessions',
    sportsInjury: 'Sports Injury',
    lymphaticDrainage: 'Lymphatic Drainage',
    tensionHeadache: 'Tension Headache',
    prenatalPhysicalTherapy: 'Prenatal Physical Therapy',

    // About
    aboutDrAshraf: 'About Dr. Ashraf',
    consultantPhysiotherapist: 'Consultant Physiotherapist',
    aboutDescription:
      'Dr. Ashraf Kotob is a highly experienced consultant physiotherapist with over 25 years of dedicated practice in the field of rehabilitation and manual therapy. His expertise spans across spine rehabilitation, neurological conditions, sports injuries, and post-surgical recovery.',
    keyQualifications: 'Key Qualifications:',
    qualification1: 'Advanced Manual Therapy Consultant',
    qualification2: 'German Certification in Spine Mechanics',
    qualification3: '25+ Years Clinical Experience',
    qualification4: 'Neurological Rehabilitation Expert',
    qualification5: 'Sports Injury Rehabilitation',
    treatmentPhilosophy: 'Treatment Philosophy',
    philosophyDescription:
      'Our approach focuses on personalized care, combining evidence-based treatment techniques with manual therapy expertise. We believe in treating the root cause, not just the symptoms, ensuring long-term recovery and preventing future injuries.',
    stats: {
      happyPatients: 'Happy Patients',
      yearsExperience: 'Years Experience',
      certifications: 'Certifications',
      successRate: 'Success Rate'
    },

    // Certifications
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
    },

    // Services
    ourServices: 'Our Services',
    servicesDescription:
      'Comprehensive physiotherapy services with over 25 years of experience',
    bookConsultation: 'Book Consultation',

    servicesSection: {
      videos: 'Videos',

      spineDisorders: {
        title: 'Spine Disorders',
        description:
          'Advanced treatment for spine and back pain using manual therapy and certified spine protocols.',
        muscleKnotsDiscHerniationAndSciatica:
          'Muscle knots, disc herniation, and sciatica',
        discProlapse: 'Disc Prolapse',
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
      // added
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
        adductorsStrain: ' Adductors Strain',
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
    },
    // Reviews
    patientReviews: 'Patient Reviews',
    reviewsDescription: 'Hear from our patients about their recovery journeys',
    viewMoreReviews: 'View More Reviews',

    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Get in touch for appointments or inquiries',
    phoneNumbers: 'Phone Numbers',
    locations: 'Locations',
    workingHours: 'Working Hours',
    locationZayed: 'Sheikh Zayed Branch',
    location6Oct: '6th October - Cairo Medical Center',
    workingHoursWeekdays: 'Saturday - Thursday: 9:00 AM - 9:00 PM',
    workingHoursFriday: 'Friday: 2:00 PM - 9:00 PM',
    locationTitle: 'Location',
    googleMaps: 'Google Maps Integration',
    branch6Oct: '6th October Branch',
    branchZayed: 'Sheikh Zayed Branch',
    address6Oct: 'Cairo Medical Center, after Najda Square, Central Axis',
    mainBranch: 'Main Branch',
    directions: 'Directions',
    callNow: 'Call Now',
    viewOnGoogleMaps: 'View on Google Maps',
    clickToOpenDirections: 'Click to open directions',
    clinicFeatures: 'Clinic Features',
    zayedAddress: 'Sheikh Zayed City, Giza Governorate',
    emergencyConsultations: 'Emergency Consultations',
    emergencyDescription:
      'For urgent physiotherapy needs outside regular hours',
    emergencyAvailable: 'Available for emergency consultations and home visits',
    emergencyContact: 'Emergency Contact',
    bookingTitle: 'Booking Information',
    bookingDescription:
      'Appointments can be booked via phone or WhatsApp. Home visits available within Cairo and Giza.',
    insuranceAccepted: 'Insurance Accepted',
    homeVisitsAvailable: 'Home Visits Available',
    followUpPrograms: 'Follow-up Programs',
    multilingualService: 'Multilingual Service',

    // Footer
    consultantPhysio: 'Consultant Physiotherapist',
    experienceFooter:
      '20+ Years of Experience in Spine, Joints & Rehabilitation',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    ourSpecializations: 'Our Specializations',
    copyright: 'Dr. Ashraf Kotob Physio Clinic. All rights reserved.',
    consultationsAvailable: 'Consultations Available',
    homeVisits: 'Home Visits',
    arabicEnglish: 'Arabic & English',

    // WhatsApp
    contactViaWhatsApp: 'Contact via WhatsApp',
    chooseClinic: 'Choose your preferred clinic location:',
    sheikhZayedClinic: 'Sheikh Zayed Clinic',
    sixthOctoberClinic: '6th October Clinic',
    clickToStart: 'Click to start a WhatsApp conversation',
    quickActions: 'Quick Actions',
    bookAppointment: 'Book Appointment',
    askPrices: 'Ask Prices',

    // Service categories
    spineConditions: 'Spine Disorders',
    neuroConditions: 'Neurological Rehabilitation',
    surgeryConditions: 'Post Orthopedic Surgery',
    sportsConditions: 'Sports Injuries',
    jointsConditions: 'Joints Pain',

    // Feedback Form
    addFeedback: 'Add Your Feedback',
    feedbackDescription: "Share your experience with Dr. Ashraf's treatment",
    yourName: 'Your Name',
    yourCondition: 'Your Condition/Treatment',
    yourReview: 'Your Review',
    yourRating: 'Rating',
    submitFeedback: 'Submit Feedback',
    feedbackSuccess: 'Thank you for your feedback!',
    feedbackPlaceholder: 'Share your experience and recovery journey...',
    conditionPlaceholder:
      'e.g. Back pain rehabilitation, Sports injury recovery',
    namePlaceholder: 'Enter your name'
  },
  ar: {
    // Header
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    reviews: 'آراء المرضى',
    contact: 'اتصل بنا',

    // Hero
    heroTitle: 'د. أشرف قطب',
    heroSubtitle: 'استشاري العلاج الطبيعي',
    heroDescription:
      'أكثر من 25 عاماً من الخبرة في علاج العمود الفقري والمفاصل والتأهيل',
    contactUs: 'اتصل بنا',
    ourMainServices: 'خدماتنا الرئيسية',
    spineService: 'إصابات وآلام العمود الفقري',
    neuroService: 'تأهيل حالات الأعصاب',
    sportsService: 'إصابات الملاعب',
    jointsService: 'آلام المفاصل',
    surgeryService: 'تأهيل ما بعد الجراحات',
    learnMore: 'اعرف المزيد',
    years: 'عاماً',

    // Hero services
    spineDisorders: 'اضطرابات العمود الفقري',
    neurologicalRehabilitation: 'تأهيل حالات الأعصاب',
    postOrthopedicSurgery: 'تأهيل جراحات العظام',
    recoverySessions: 'جلسات التعافي',
    sportsInjury: 'الإصابات الرياضية',
    lymphaticDrainage: 'المساج الليمفاوي',
    tensionHeadache: 'الصداع الناتج عن التوتر',
    prenatalPhysicalTherapy: 'تأهيل السيدات الحوامل للولادة الطبيعية',

    // About
    aboutDrAshraf: 'عن الدكتور أشرف',
    consultantPhysiotherapist: 'استشاري العلاج الطبيعي',
    aboutDescription:
      'الدكتور أشرف قطب هو استشاري علاج طبيعي ذو خبرة واسعة تمتد لأكثر من 25 عاماً في مجال التأهيل والعلاج اليدوي. تشمل خبرته تأهيل العمود الفقري، والحالات العصبية، وإصابات الملاعب، والتعافي بعد العمليات الجراحية.',
    keyQualifications: 'المؤهلات الرئيسية:',
    qualification1: 'استشاري علاج يدوي متقدم',
    qualification2: 'شهادات ألمانية في ميكانيكا العمود الفقري',
    qualification3: 'خبرة سريرية أكثر من 25 عاماً',
    qualification4: 'خبير تأهيل الأعصاب',
    qualification5: 'تأهيل الإصابات الرياضية',
    treatmentPhilosophy: 'فلسفة العلاج',
    philosophyDescription:
      'نهجنا يركز على الرعاية الشخصية، مع دمج تقنيات العلاج المبنية على الأدلة العلمية مع خبرة العلاج اليدوي. نؤمن بعلاج السبب الجذري وليس فقط الأعراض، مما يضمن الشفاء طويل الأمد ومنع الإصابات المستقبلية.',

    stats: {
      happyPatients: 'مرضى سعداء',
      yearsExperience: 'سنوات من الخبرة',
      certifications: 'شهادات معتمدة',
      successRate: 'نسبة النجاح'
    },

    // Certifications
    certifications: {
      'german-certification': {
        title: 'الشهادة ألمانية',
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
    },

    // Services
    ourServices: 'خدماتنا',
    servicesDescription: 'خدمات علاج طبيعي شاملة مع أكثر من 25 عاماً من الخبرة',
    bookConsultation: 'احجز استشارة',

    servicesSection: {
      videos: 'فيديوهات',

      spineDisorders: {
        title: 'اضطرابات العمود الفقري',
        description:
          'علاج شامل لآلام العمود الفقري والظهر باستخدام تقنيات العلاج اليدوي المتقدمة وبروتوكولات ميكانيكا العمود الفقري المعتمدة من ألمانيا.',
        muscleKnotsDiscHerniationAndSciatica:
          'العقد العضلية والديسك وعرق النسا',
        discProlapse: 'انزلاق غضروفي',
        kyphosis: 'الحدبة',
        scoliosis: 'الجنف',
        neckPain: 'ألم الرقبة',
        lowerBackPain: 'ألم أسفل الظهر'
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
        rehabilitation: 'تأهيل الرابط الصليبي',
        elbowStiffness: 'تيبس الكوع'
      },

      recoverySessions: {
        title: 'جلسات التعافي',
        description:
          'علاج متخصص لإصابات العظام الناتجة عن العمليات الجراحية مع التركيز على التعافي السريع واستعادة الأداء الكامل.',
        totalKneeReplacement: 'تأهيل تغيير مفصل الركبة',
        rehabilitation: 'تأهيل الرابط الصليبي',
        elbowStiffness: 'تيبس الكوع'
      },

      sportsInjury: {
        title: 'الإصابات الرياضية',
        description:
          'علاج طبيعي متخصص لإصابات الرياضيين مع التركيز على التعافي الآمن والسريع للعودة للنشاط.',
        adductorsStrain: 'العضلة الضامة',
        ankleSprain: 'التواء الكاحل',
        shoulderPain: 'ألم الكتف',
        meniscusTearDegeneration:
          'الفرق بين اصابات غضروف الركبة وبين تآكل غضروف الركبة (الخشونة)        '
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
    },

    // Reviews
    patientReviews: 'آراء المرضى',
    reviewsDescription: 'استمع لمرضانا حول رحلات التعافي الخاصة بهم',
    viewMoreReviews: 'شاهد المزيد',

    // Contact
    contactTitle: 'اتصل بنا',
    contactDescription: 'تواصل معنا لحجز المواعيد أو الاستفسارات',
    phoneNumbers: 'أرقام الهواتف',
    locations: 'المواقع',
    workingHours: 'ساعات العمل',
    locationZayed: 'فرع الشيخ زايد',
    location6Oct: '6 أكتوبر - كايرو ميديكال سنتر',
    workingHoursWeekdays: 'السبت - الخميس: 9:00 ص - 9:00 م',
    workingHoursFriday: 'الجمعة: 2:00 م - 9:00 م',
    locationTitle: 'الموقع',
    googleMaps: 'خرائط جوجل',
    branch6Oct: 'فرع 6 أكتوبر',
    branchZayed: 'فرع الشيخ زايد',
    address6Oct: 'كايرو ميديكال سنتر، بعد ميدان النجدة، المحور المركزي',
    mainBranch: 'الفرع الرئيسي',
    directions: 'الاتجاهات',
    callNow: 'اتصل الآن',
    viewOnGoogleMaps: 'عرض على خرائط جوجل',
    clickToOpenDirections: 'انقر لفتح الاتجاهات',
    clinicFeatures: 'مميزات العيادة',
    zayedAddress: 'مدينة الشيخ زايد، الجيزة',
    emergencyConsultations: 'استشارات طارئة',
    emergencyDescription:
      'للحالات العاجلة في العلاج الطبيعي خارج أوقات العمل الرسمية',
    emergencyAvailable: 'متاح للاستشارات الطارئة والزيارات المنزلية',
    emergencyContact: 'جهة الاتصال في الحالات الطارئة',
    bookingTitle: 'معلومات الحجز',
    bookingDescription:
      'يمكن حجز المواعيد عبر الهاتف أو الواتساب. الزيارات المنزلية متاحة داخل القاهرة والجيزة.',
    insuranceAccepted: 'نقبل التأمين',
    homeVisitsAvailable: 'زيارات منزلية متاحة',
    followUpPrograms: 'برامج متابعة',
    multilingualService: 'خدمة بعدة لغات',

    // Footer
    consultantPhysio: 'استشاري العلاج الطبيعي',
    experienceFooter:
      'أكثر من 20 عاماً من الخبرة في علاج العمود الفقري والمفاصل والتأهيل',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    ourSpecializations: 'تخصصاتنا',
    copyright: 'عيادة الدكتور أشرف قطب للعلاج الطبيعي. جميع الحقوق محفوظة.',
    consultationsAvailable: 'استشارات متاحة',
    homeVisits: 'زيارات منزلية',
    arabicEnglish: 'العربية والإنجليزية',

    // WhatsApp
    contactViaWhatsApp: 'تواصل عبر الواتساب',
    chooseClinic: 'اختر موقع العيادة المفضل لديك:',
    sheikhZayedClinic: 'عيادة الشيخ زايد',
    sixthOctoberClinic: 'عيادة 6 أكتوبر',
    clickToStart: 'انقر لبدء محادثة واتساب',
    quickActions: 'إجراءات سريعة',
    bookAppointment: 'احجز موعد',
    askPrices: 'اسأل عن الأسعار',

    // Service categories
    spineConditions: 'إصابات وآلام العمود الفقري',
    neuroConditions: 'تأهيل حالات الأعصاب',
    sportsConditions: 'إصابات الملاعب',
    jointsConditions: 'آلام المفاصل',
    surgeryConditions: 'تأهيل ما بعد جراحات العظام',

    // Feedback Form
    addFeedback: 'أضف تقييمك',
    feedbackDescription: 'شارك تجربتك مع علاج الدكتور أشرف',
    yourName: 'اسمك',
    yourCondition: 'حالتك/العلاج',
    yourReview: 'تقييمك',
    yourRating: 'التقييم',
    submitFeedback: 'إرسال التقييم',
    feedbackSuccess: 'شكراً لك على تقييمك!',
    feedbackPlaceholder: 'شارك تجربتك ورحلة التعافي...',
    conditionPlaceholder: 'مثال: تأهيل آلام الظهر، تعافي من إصابة رياضية',
    namePlaceholder: 'أدخل اسمك'
  }
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

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
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
