import { useVideoPlayer } from '@/contexts'
import VideoPlayer from './video-player'

export function GlobalVideoPlayer() {
  const { video, closeVideo } = useVideoPlayer()

  return (
    <VideoPlayer
      isOpen={!!video}
      setIsOpen={closeVideo}
      title={video?.title ?? ''}
      src={video?.src ?? ''}
    />
  )
}
