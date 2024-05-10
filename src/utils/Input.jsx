import React from 'react'

export default function Input({data}) {

  return  <input type={data.type} class="form-control" placeholder={data.name} required={data.required} />
}
