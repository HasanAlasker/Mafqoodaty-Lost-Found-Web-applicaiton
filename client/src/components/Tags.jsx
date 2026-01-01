import React from 'react'

export default function Tags({title}) {
  return (
    <div className='tag small'>
      {title || "tag"}
    </div>
  )
}
