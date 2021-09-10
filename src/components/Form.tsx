import { useState } from "react"
import Client from "../core/Client"
import DefaultButton from "./DefaultButton"
import Input from "./Input"

type FormProps = {
  client?: Client
  changeClient?: (client: Client) => void
  cancelClient?: () => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id

  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div className="flex flex-col gap-3">
      {id ? <Input text="Código" type="text" value={id} readOnly /> : false}
      <Input 
        text="Nome"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} 
      />
      <Input 
        text="Idade"
        type="number"
        value={age} 
        onChange={e => setAge(e.target.value as any)} 
      />
      <div className="flex mt-3 gap-5 justify-center">
        <DefaultButton 
          color="blue"
          onClick={() => props.changeClient?.(new Client(name, +age, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </DefaultButton>
        <DefaultButton 
          color="gray"
          onClick={() => props.cancelClient()}
        >
          Cancelar
        </DefaultButton>
      </div>
    </div>
  )
}