import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

type Props = {
  isOpen: boolean
  setIsOpen: () => void
  title: string
  src: string
}

export default function VideoPlayer({
  isOpen,
  setIsOpen,
  title,
  src
}: Readonly<Props>) {
  if (!src) {
    return null
  }

  // const submittedUrl = `${src}?enablejsapi=1&origin=https://example.com/`
  const submittedUrl = `${src}?enablejsapi=1&origin=https://drashrafkotob.github.io/`

  console.log(submittedUrl)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="sr-only">
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-xl"
        onOpenAutoFocus={e => e.preventDefault()}
        onCloseAutoFocus={e => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xs md:text-base -mt-2">
            {title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            vide player about dr Ashraf
          </DialogDescription>
        </DialogHeader>
        <main>
          <iframe
            width="100%"
            className="h-96"
            src={submittedUrl}
            // src="https://www.youtube.com/embed/62kErCeG2rI?enablejsapi=1&origin=https://example.com/"
            // src="https://www.youtube.com/embed/62kErCeG2rI?enablejsapi=1&origin=https://example.com/"
            // src="https://youtube.com/embed/5i9SzaumaRg?enablejsapi=1&origin=https://example.com/"
            allowFullScreen
          ></iframe>
        </main>
      </DialogContent>
    </Dialog>
  )
}
