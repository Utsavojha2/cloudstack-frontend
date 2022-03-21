import { useState, useEffect, useCallback } from 'react'

const useProgressiveImage = (imgSrc: string) => {
  const [sourceLoaded, setSourceLoaded] = useState<string | null>(null)

  const onImageLoad = useCallback(() => setSourceLoaded(imgSrc), [imgSrc])

  useEffect(() => {
    const img = new Image()
    img.setAttribute('src', imgSrc)
    img.addEventListener('load', onImageLoad)

    return () => {
      img.removeEventListener('load', onImageLoad)
    }
  }, [imgSrc, onImageLoad])

  return sourceLoaded
}

export default useProgressiveImage
