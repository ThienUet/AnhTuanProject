import React from 'react'
import Image from 'next/image'
export default function AvatarCustom({src, alt, width, height, loading}) {
  return (
    <div className='custom-image'>
        <Image src={src !== undefined ? src : '/static/err/err-image.png'} width={35} height={35} alt={alt || 'shoes88-image'} loading={loading} />
    </div>
  )
}
