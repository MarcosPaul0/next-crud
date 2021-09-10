import DefaultButton from "../components/DefaultButton";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";

import useClients from "../hooks/useClients";

export default function Home() {
  const {
    selectedClient,
    newClient,
    saveClient,
    deleteClient,
    client,
    clients,
    tableIsVisible,
    showTable
  } = useClients()


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to-purple-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
      {tableIsVisible ? (
          <>
            <Table clients={clients} selectedClient={selectedClient} deleteClient={deleteClient} />
            <div className="flex justify-center mt-4">
              <DefaultButton 
                color="green"
                onClick={() => newClient()}>
                Novo Cliente
              </DefaultButton>
            </div>
          </> 
        ) : (
          <Form 
            client={client}
            changeClient={saveClient}
            cancelClient={showTable}
          />
        )}

      </Layout>
    </div>
  )
}
