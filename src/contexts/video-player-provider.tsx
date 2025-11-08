'use client'
import { createContext, useContext, useState } from 'react'

type Video = {
  title: string
  src: string | null
}

type VideoPlayerContextType = {
  video: Video | null
  openVideo: (video: Video) => void
  closeVideo: () => void
}

const VideoPlayerContext = createContext<VideoPlayerContextType | undefined>(
  undefined
)

export function VideoPlayerProvider({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [video, setVideo] = useState<Video | null>(null)

  const openVideo = (video: Video) => setVideo(video)
  const closeVideo = () => setVideo(null)

  return (
    <VideoPlayerContext.Provider value={{ video, openVideo, closeVideo }}>
      {children}
    </VideoPlayerContext.Provider>
  )
}

export function useVideoPlayer() {
  const context = useContext(VideoPlayerContext)

  if (!context)
    throw new Error('useVideoPlayer must be used inside VideoPlayerProvider')

  return context
}
