import React from 'react'

export default function Buttons({text, onClick,id}) {
  return (
    <>
      <button type="button" onClick={ ()=> {onClick(id)}} className="btn btn-info rounded-circle mx-3">{text}</button>
    </>
  )
}
