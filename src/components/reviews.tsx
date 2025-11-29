import { ChevronLeft, ChevronRight, Plus, Star, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/contexts'
import { cn } from '@/lib/utils'

interface Review {
  id: number
  name: string
  rating: number
  review: string
  date: string
  verified: boolean
}

export function Reviews() {
  const { t, language } = useLanguage()
  const [currentReview, setCurrentReview] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    date: '',
    rating: 5,
    verified: true
  })

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 6,
      name: 'Sayed S.',
      rating: 5,
      review: 'الدكتور ممتاز',
      date: '2024-09-29',
      verified: true
    },
    {
      id: 7,
      name: 'Visitor 44',
      rating: 3,
      review: 'الدكتور جيد لكنه غير محترف بالشكل المطلوب، الدكتور المساعد جيد',
      date: '2024-03-17',
      verified: true
    },
    {
      id: 8,
      name: 'Mohammed A.',
      rating: 5,
      review:
        'دكتور مختلف عن البقيه ، يعمل بذمة وضمير وعلاجي طبيعي يدوي وتشخيصه دقيق 👍🏼',
      date: '2024-01-03',
      verified: true
    },
    {
      id: 9,
      name: 'omar m.',
      rating: 4,
      review: 'الدكتور كويس ومحترم ومستمع جيد وتشخيصه ممتاز',
      date: '2023-12-28',
      verified: true
    },
    {
      id: 10,
      name: 'عبادة م',
      rating: 5,
      review: 'الدكتور رائع وبيفهمك كل حاجة وبيسمع منك',
      date: '2023-10-19',
      verified: true
    },
    {
      id: 11,
      name: 'ثائر',
      rating: 5,
      review: 'الدكتور شاطر وعنده خبره عاليه وتشخيصه كويس جدا',
      date: '2023-09-27',
      verified: true
    },
    {
      id: 12,
      name: 'دكتور ع',
      rating: 5,
      review: 'شكرا',
      date: '2023-08-08',
      verified: true
    },
    {
      id: 13,
      name: 'حسام ع',
      rating: 5,
      review: 'دكتور ممتاز',
      date: '2023-07-17',
      verified: true
    },
    {
      id: 14,
      name: 'احمد ع',
      rating: 5,
      review:
        'دكتور مستمع جيد ومحاور جيد والحمدلله بعد الجلسة الألم خف بنسبة معقولة',
      date: '2023-07-09',
      verified: true
    },
    {
      id: 15,
      name: 'نجوان ف',
      rating: 5,
      review: 'الدكتور ممتاز',
      date: '2023-05-09',
      verified: true
    },
    {
      id: 16,
      name: 'أحمد ٣',
      rating: 5,
      review: 'عيادة ممتازة',
      date: '2023-04-25',
      verified: true
    },
    {
      id: 17,
      name: 'Sara S.',
      rating: 5,
      review:
        'كويسين جدا جدا .. والدكتور محترم وشرحه دقيق والدكتورة المساعدة رائعة',
      date: '2023-03-12',
      verified: true
    },
    {
      id: 18,
      name: 'بركة م',
      rating: 5,
      review: 'دكتور ممتاز وشاطر وفاهم',
      date: '2022-12-06',
      verified: true
    },
    {
      id: 19,
      name: 'سارة ح',
      rating: 5,
      review: 'دكتور كويس وبيشرح الحالة',
      date: '2022-11-13',
      verified: true
    },
    {
      id: 20,
      name: 'Ahmad R.',
      rating: 5,
      review: 'دكتور لطيف',
      date: '2022-10-30',
      verified: true
    },
    {
      id: 21,
      name: 'Amr S.',
      rating: 5,
      review: 'دكتور كويس ومعاملة كويسة وبيشرح كويس',
      date: '2022-10-03',
      verified: true
    },
    {
      id: 22,
      name: 'Visitor 43',
      rating: 2,
      review: 'الطبيب عمل جلستين سببوا التهاب في الأعصاب',
      date: '2022-08-25',
      verified: true
    },
    {
      id: 23,
      name: 'Waleed B.',
      rating: 5,
      review: 'لا شك انه متميز وعلى علم وخلق ومستمع جيد',
      date: '2022-08-14',
      verified: true
    },
    {
      id: 24,
      name: 'أمنية إ',
      rating: 5,
      review: 'المكان نظيف والدكتور بيوضح الحالة ومستمع جيد',
      date: '2022-06-03',
      verified: true
    },
    {
      id: 25,
      name: 'Visitor 42',
      rating: 3,
      review: 'تشخيص الدكتور كان غلط',
      date: '2022-05-15',
      verified: true
    },
    {
      id: 26,
      name: 'Mohamed O.',
      rating: 5,
      review: 'دكتور كويس',
      date: '2022-05-07',
      verified: true
    },
    {
      id: 27,
      name: 'Visitor 41',
      rating: 5,
      review: 'دكتور ممتاز جدا وشاطر وبيسمع',
      date: '2022-04-30',
      verified: true
    },
    {
      id: 28,
      name: 'Malak J.',
      rating: 5,
      review: 'دكتور فاهم وبيشرح كويس جدا سبب العرَض',
      date: '2022-03-14',
      verified: true
    },
    {
      id: 29,
      name: 'Visitor 40',
      rating: 5,
      review: 'دكتور كويس وعنده ضمير',
      date: '2022-02-08',
      verified: true
    },
    {
      id: 30,
      name: 'خالد م',
      rating: 5,
      review: 'دكتور كويس',
      date: '2022-02-05',
      verified: true
    },
    {
      id: 31,
      name: 'Mustapha A.',
      rating: 5,
      review: 'دكتور محترم وفاهم',
      date: '2022-01-26',
      verified: true
    },
    {
      id: 32,
      name: 'Visitor 39',
      rating: 4,
      review: 'الدكتور كويس',
      date: '2021-12-14',
      verified: true
    },
    {
      id: 33,
      name: 'Hasna H.',
      rating: 4,
      review: 'منظمين',
      date: '2021-12-13',
      verified: true
    },
    {
      id: 34,
      name: 'Ayman F.',
      rating: 5,
      review: 'دكتور محترم جدا وبيجاوب علي كل سؤال',
      date: '2021-12-12',
      verified: true
    },
    {
      id: 35,
      name: 'Visitor 38',
      rating: 4,
      review: 'دكتور كويس بس المساعد غير كفء نهائيًا',
      date: '2021-12-08',
      verified: true
    },
    {
      id: 36,
      name: 'Visitor 37',
      rating: 5,
      review: 'دكتور عارف شغله كويس جدا وممتاز',
      date: '2021-11-06',
      verified: true
    },
    {
      id: 37,
      name: 'ثريا ز',
      rating: 5,
      review: 'ممتاز',
      date: '2021-08-22',
      verified: true
    },
    {
      id: 38,
      name: 'احمد ا',
      rating: 5,
      review: 'دكتور كويس ومحترم وشاطر',
      date: '2021-07-10',
      verified: true
    },
    {
      id: 39,
      name: 'Khaled A.',
      rating: 5,
      review: 'دكتور محترم جدا و فاهم',
      date: '2021-06-28',
      verified: true
    },
    {
      id: 40,
      name: 'محمد ب',
      rating: 5,
      review: 'دكتور ممتاز ومستمع جيد',
      date: '2021-05-08',
      verified: true
    },
    {
      id: 41,
      name: 'Visitor 36',
      rating: 5,
      review: 'دكتور فاهم وذو خبرة ومستمر معه في الجلسات',
      date: '2021-05-08',
      verified: true
    },
    {
      id: 42,
      name: 'Ahmed H.',
      rating: 5,
      review: 'ممتاز',
      date: '2021-04-05',
      verified: true
    },
    {
      id: 43,
      name: 'Visitor 35',
      rating: 5,
      review: 'Excellent doctor and gives the needed time for the patient.',
      date: '2021-03-19',
      verified: true
    },
    {
      id: 44,
      name: 'Visitor 34',
      rating: 5,
      review: 'دكتور ممتاز ومستمع وهادئ آمين فى عمله',
      date: '2020-12-20',
      verified: true
    },
    {
      id: 45,
      name: 'منى م',
      rating: 5,
      review: 'بارك الله فيهم سواء د. اشرف او المساعدين جميعا',
      date: '2020-12-19',
      verified: true
    },
    {
      id: 46,
      name: 'سامح ا',
      rating: 5,
      review: 'دكتور كويس',
      date: '2020-11-16',
      verified: true
    },
    {
      id: 47,
      name: 'Visitor 33',
      rating: 5,
      review: 'احسن دكتور انا شوفته عنده ضمير',
      date: '2020-11-15',
      verified: true
    },
    {
      id: 48,
      name: 'رنيا ع',
      rating: 5,
      review: 'دكتور شاطر جدا وخلوق وبيطمن المريض',
      date: '2020-11-11',
      verified: true
    },
    {
      id: 49,
      name: 'عبد ا',
      rating: 5,
      review: 'علم و سعة صدر و أمانة',
      date: '2020-10-27',
      verified: true
    },
    {
      id: 50,
      name: 'Omar G.',
      rating: 5,
      review: 'Very knowledgeable and reassuring',
      date: '2020-09-26',
      verified: true
    },
    {
      id: 51,
      name: 'Ibrahim R.',
      rating: 5,
      review: 'زيارة تمام',
      date: '2020-07-27',
      verified: true
    },
    {
      id: 52,
      name: 'Visitor 32',
      rating: 5,
      review: 'دكتور محترم وبيراعي ربنا',
      date: '2020-06-12',
      verified: true
    },
    {
      id: 53,
      name: 'Ahmed A.',
      rating: 5,
      review: 'دكتور ممتاز والمساعدين ممتازين',
      date: '2020-04-08',
      verified: true
    },
    {
      id: 54,
      name: 'ادم م',
      rating: 5,
      review: 'الدكتور كويس ومحترم جدا',
      date: '2020-03-01',
      verified: true
    },
    {
      id: 55,
      name: 'Yasser N.',
      rating: 5,
      review: 'ممتاز ومستمع جيد',
      date: '2020-02-27',
      verified: true
    },
    {
      id: 56,
      name: 'مي ط',
      rating: 5,
      review: 'دكتور محترم جدا وبيسمع وطبيب ممتاز',
      date: '2020-02-02',
      verified: true
    },
    {
      id: 57,
      name: 'Ayman E.',
      rating: 5,
      review: 'دكتور محترم وخلوق وبروفيشنال جدا',
      date: '2019-10-21',
      verified: true
    },
    {
      id: 58,
      name: 'Visitor 31',
      rating: 5,
      review: 'دكتور ممتاز و مستمع للمريض',
      date: '2019-09-21',
      verified: true
    },
    {
      id: 59,
      name: 'عادل ع',
      rating: 5,
      review: 'دكتور رائع وخلوق ومثقف وفاهم عمله صح',
      date: '2019-08-19',
      verified: true
    },
    {
      id: 60,
      name: 'خالد ا',
      rating: 4,
      review: 'دكتور ممتاز ومستمع جيد',
      date: '2019-07-01',
      verified: true
    },
    {
      id: 61,
      name: 'احمد ع',
      rating: 5,
      review: 'الدكتور محترم و بيراعي ربنا في شغله',
      date: '2019-05-26',
      verified: true
    },
    {
      id: 62,
      name: 'Visitor 30',
      rating: 5,
      review: 'Very helpful and experienced 👍🏻',
      date: '2019-05-13',
      verified: true
    },
    {
      id: 63,
      name: 'عمرو ش',
      rating: 5,
      review: 'دكتور مستمع جيد جدا',
      date: '2018-12-19',
      verified: true
    },
    {
      id: 64,
      name: 'بشير ع',
      rating: 5,
      review: 'الدكتور محترف في عمله بارك الله فيه',
      date: '2018-08-12',
      verified: true
    },
    {
      id: 65,
      name: 'Mahmoud H.',
      rating: 5,
      review: 'دكتور علاج طبيعي فوق الممتاز ربنا يباركلك يا دكتور أشرف',
      date: '2018-06-07',
      verified: true
    }
  ])

  const nextReview = () => {
    setCurrentReview(prev => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview(prev => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newReview.name || !newReview.review) {
      toast.error('Please fill in all required fields')
      return
    }

    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      review: newReview.review,
      date: new Date().toISOString().split('T')[0],
      verified: false
    }

    setReviews(prev => [review, ...prev])
    setNewReview({
      name: '',
      review: '',
      date: '',
      rating: 5,
      verified: true
    })
    setIsDialogOpen(false)
    toast.success(t('reviews.form.success'))
  }

  const handleRatingClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }))
  }

  const StarRating = ({
    rating,
    interactive = false,
    onRatingClick
  }: {
    rating: number
    interactive?: boolean
    onRatingClick?: (rating: number) => void
  }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRatingClick?.(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="reviews" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('reviews.description')}
          </p>

          {/* Add Review Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="px-8 py-6 text-lg h-auto">
                <Plus className="me-2 h-5 w-5" />
                {t('reviews.cta.addFeedback')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t('reviews.cta.addFeedback')}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <Label htmlFor="name">
                    {t('reviews.form.fields.nameLabel')}*
                  </Label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={e =>
                      setNewReview(prev => ({ ...prev, name: e.target.value }))
                    }
                    placeholder={t('reviews.form.fields.namePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <Label>{t('reviews.form.fields.ratingLabel')}</Label>
                  <StarRating
                    rating={newReview.rating}
                    interactive
                    onRatingClick={handleRatingClick}
                  />
                </div>

                <div>
                  <Label htmlFor="review">
                    {t('reviews.form.fields.reviewLabel')}*
                  </Label>
                  <Textarea
                    id="review"
                    value={newReview.review}
                    onChange={e =>
                      setNewReview(prev => ({
                        ...prev,
                        review: e.target.value
                      }))
                    }
                    placeholder={t('reviews.form.fields.reviewPlaceholder')}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('reviews.form.submit')}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="min-h-[300px]">
            <CardContent className="p-8">
              {reviews.length > 0 && (
                <div className="text-center space-y-6">
                  {/* Stars */}
                  <div className="flex justify-center">
                    <StarRating rating={reviews[currentReview].rating} />
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    "{reviews[currentReview].review}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-start">
                        <div className="font-semibold text-foreground flex items-center space-x-2">
                          <span>{reviews[currentReview].name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(
                        reviews[currentReview].date
                      ).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevReview}
            className="absolute start-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full"
          >
            <ChevronLeft
              className={cn('w-4 h-4', language === 'ar' && 'rotate-180')}
            />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextReview}
            className="absolute end-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full"
          >
            <ChevronRight
              className={cn('w-4 h-4', language === 'ar' && 'rotate-180')}
            />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-1 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-foreground">4.6/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <StarRating rating={5} />
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-foreground">
              {reviews.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Reviews</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Recommend Rate</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-foreground">5000+</div>
            <div className="text-sm text-muted-foreground">Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
