import Image from 'next/image'
import CoverImageSource from '@/assets/cover-image.png'

export function CoverImage() {
  return (
    <Image
      className="-z-10"
      style={{
        background:
          'linear-gradient(180deg, rgba(9, 9, 9, 0.20) 0%, rgba(9, 9, 9, 0.85) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat',
      }}
      src={CoverImageSource}
      alt=""
    />
  )
}
