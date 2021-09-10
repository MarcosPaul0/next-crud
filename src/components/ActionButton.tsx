import { ButtonHTMLAttributes } from 'react'

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string
  children: any
}

export default function ActionButton(props: ActionButtonProps) {
  return (
    <button className={`
      text-${props.color}-600 rounded-full p-2
    hover:bg-purple-300 duration-500
    `} {...props}>
      {props.children}
    </button>
  )
}