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
import { ChevronLeft, ChevronRight, Plus, Star, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface Review {
  id: number
  name: string
  condition: string
  rating: number
  review: string
  date: string
  verified: boolean
}

export function Reviews() {
  const { t } = useLanguage()
  const [currentReview, setCurrentReview] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    condition: '',
    review: '',
    rating: 5
  })

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'أحمد محمد',
      condition: 'Back Pain Rehabilitation',
      rating: 5,
      review:
        'Dr. Ashraf helped me recover from chronic back pain that I had for 3 years. His German techniques and manual therapy approach made a huge difference. Highly recommended!',
      date: '2024-12-15',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      condition: 'Sports Injury Recovery',
      rating: 5,
      review:
        "Amazing physiotherapist! I recovered from my tennis elbow much faster than expected. Dr. Ashraf's expertise in sports injuries is outstanding.",
      date: '2024-12-10',
      verified: true
    },
    {
      id: 3,
      name: 'محمد عبدالله',
      condition: 'Neurological Rehabilitation',
      rating: 5,
      review:
        'بعد إصابة في الدماغ، الدكتور أشرف ساعدني في استعادة الحركة والتوازن. العلاج كان ممتاز والنتائج فاقت التوقعات.',
      date: '2024-12-05',
      verified: true
    },
    {
      id: 4,
      name: 'Lisa Williams',
      condition: 'Post-Surgery Rehab',
      rating: 5,
      review:
        "After knee replacement surgery, Dr. Ashraf's rehabilitation program was exceptional. His knowledge and care made my recovery smooth and successful.",
      date: '2024-11-28',
      verified: true
    },
    {
      id: 5,
      name: 'خالد أحمد',
      condition: 'Spine Rehabilitation',
      rating: 5,
      review:
        'عندي مشكلة في الفقرات القطنية لمدة سنتين. الدكتور أشرف عالجني بتقنيات حديثة ورجع لي نشاطي الطبيعي. شكراً جزيلاً!',
      date: '2024-11-20',
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
      condition: newReview.condition || 'General Treatment',
      rating: newReview.rating,
      review: newReview.review,
      date: new Date().toISOString().split('T')[0],
      verified: false
    }

    setReviews(prev => [review, ...prev])
    setNewReview({ name: '', condition: '', review: '', rating: 5 })
    setIsDialogOpen(false)
    toast.success(t('feedbackSuccess'))
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
            {t('patientReviews')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('reviewsDescription')}
          </p>

          {/* Add Review Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="px-8 py-6 text-lg h-auto">
                <Plus className="me-2 h-5 w-5" />
                {t('addFeedback')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t('addFeedback')}</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('yourName')}*</Label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={e =>
                      setNewReview(prev => ({ ...prev, name: e.target.value }))
                    }
                    placeholder={t('namePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="condition">{t('yourCondition')}</Label>
                  <Input
                    id="condition"
                    value={newReview.condition}
                    onChange={e =>
                      setNewReview(prev => ({
                        ...prev,
                        condition: e.target.value
                      }))
                    }
                    placeholder={t('conditionPlaceholder')}
                  />
                </div>

                <div>
                  <Label>{t('yourRating')}</Label>
                  <StarRating
                    rating={newReview.rating}
                    interactive
                    onRatingClick={handleRatingClick}
                  />
                </div>

                <div>
                  <Label htmlFor="review">{t('yourReview')}*</Label>
                  <Textarea
                    id="review"
                    value={newReview.review}
                    onChange={e =>
                      setNewReview(prev => ({
                        ...prev,
                        review: e.target.value
                      }))
                    }
                    placeholder={t('feedbackPlaceholder')}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('submitFeedback')}
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
                          {reviews[currentReview].verified && (
                            <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {reviews[currentReview].condition}
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
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextReview}
            className="absolute end-4 top-1/2 transform -translate-y-1/2 w-10 h-10 p-0 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-foreground">4.9/5</div>
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
