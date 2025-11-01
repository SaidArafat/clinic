import ReactPlayer from 'react-player'

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
          <DialogTitle className="text-base -mt-2">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            vide player about dr Ashraf
          </DialogDescription>
        </DialogHeader>
        <main>
          <ReactPlayer src={src} width="100%" height="20rem" controls />
        </main>
      </DialogContent>
    </Dialog>
  )
}
