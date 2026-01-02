import React from 'react'

export default function PostCard({children, style}) {
  return (
    <div className='postCard' style={style}>
       {children}
    </div>
  )
}
