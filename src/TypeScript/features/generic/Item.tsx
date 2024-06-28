import React from 'react'

type ItemProp <T> = {
    id:number,
    title:string,
    extra: T[]
}

const Item = (props: ItemProp<object>) => {
  return (
    <div>
        {props.title}
    </div>
  )
}

export default Item