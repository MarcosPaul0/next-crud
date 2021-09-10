import { ButtonHTMLAttributes } from 'react'

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string
  children: any
}

export default function DefaultButton(props: DefaultButtonProps) {
  return (
    <button className={`
      px-5 py-3 rounded-md text-white
      bg-${props.color}-500
      hover:bg-${props.color}-800 duration-500
    `} {...props}>
      {props.children}
    </button>
  )
}