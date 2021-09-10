import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2">
        {props.text}
      </label>
      <input
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50
          ${props.readOnly ? '' : 'focus:bg-white'}
          px-3 py-1
        `}
        {...props}
      />
    </div>
  )
}