import Client from "../core/Client";

import { editIcon, trashIcon } from "../components/Icons";

import ActionButton from './ActionButton'

type TableProps = {
  clients: Client[]
  selectedClient?: (client: Client) => void
  deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
  const actionsIsSet = props.selectedClient || props.deleteClient

  function renderHeader() {
    return (
      <tr>
        <th className="p-3">Código</th>
        <th className="p-3">Nome</th>
        <th className="p-3">Idade</th>
        {actionsIsSet ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr className={i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'} key={client.id}>
          <td className="text-center p-3">{client.id}</td>
          <td className="text-center p-3">{client.name}</td>
          <td className="text-center p-3">{client.age}</td>
          {actionsIsSet ? renderActions(client) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center p-2 gap-1">
        {props.selectedClient ? 
          <ActionButton color="green" onClick={() => props.selectedClient?.(client)}>
            {editIcon}
          </ActionButton> : false
        }
        {props.deleteClient ? 
          <ActionButton color="red" onClick={() => props.deleteClient?.(client)}>
            {trashIcon}
          </ActionButton> : false
        }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}