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
          <video
            autoPlay
            playsInline
            loop
            controls
            width="100%"
            preload="metadata"
            className="h-96 bg-primary rounded-sm"
          >
            <source
              src={`https://raw.githubusercontent.com/SaidArafat/cloud-video/main/${src}`}
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </main>
      </DialogContent>
    </Dialog>
  )
}
