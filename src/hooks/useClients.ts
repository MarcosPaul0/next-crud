import { useEffect, useState } from "react";
import useVisible from "./useVisible";

import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../firebase/db/ClientCollection";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection()

  const {
    tableIsVisible,
    showTable,
    showForm
  } = useVisible()

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  function getAllClients() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    showForm()
  }

  function newClient() {
    setClient(Client.empty)
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  useEffect(getAllClients, [])

  return {
    selectedClient,
    newClient,
    saveClient,
    deleteClient,
    client,
    clients,
    tableIsVisible,
    showTable
  }
}