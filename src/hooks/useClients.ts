import { useCallback, useEffect, useMemo, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useVisible from "./useVisible";

function useClients() {
  const repo: ClientRepository = useMemo(() => new ClientCollection(), [])

  const {
    tableIsVisible,
    showForm,
    showTable
  } = useVisible();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  const getAllClients = useCallback(async () => {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    })
  }, [repo, showTable]);

  useEffect(() => {
    getAllClients();
  }, [getAllClients]);

  function addClient() {
    setClient(Client.empty());
    showForm();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAllClients();
  }

  function handleEdit(client: Client) {
    setClient(client);
    showForm();
  }

  async function handleRemove(client: Client) {
    await repo.remove(client);
    getAllClients();
  }

  return {
    client,
    clients,
    addClient,
    saveClient,
    handleEdit,
    handleRemove,
    tableIsVisible,
    showTable
  }
}

export default useClients;
