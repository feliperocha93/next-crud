import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

function Home() {
  const {
      client,
      clients,
      addClient,
      saveClient,
      handleEdit,
      handleRemove,
      tableIsVisible,
      showTable
    } = useClients();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="CRUD">
        {tableIsVisible ? (
         <>
          <div className="flex justify-end">
            <Button
              className="mb-4"
              color="green"
              onClick={addClient}
            >
              Add Client
            </Button>
          </div>
          <Table
            clients={clients}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        </>) : ( 
          <Form
            client={client}
            onCancel={() => showTable()}
            onChange={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}

export default Home;
