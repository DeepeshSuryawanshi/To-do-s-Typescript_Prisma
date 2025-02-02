import React from 'react'

export const SideNav = ({show}:{show:boolean}) => {

  return (
    <div className={`${show? 'flex' : 'hidden'}`} >
      SideNav
    </div>
  )
}
