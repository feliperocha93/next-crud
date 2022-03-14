import Client from "./Client";

interface ClientRepository {
  save(client: Client): Promise<Client>;
  remove(client: Client): Promise<void>;
  getAll(): Promise<Client[]>;
}

export default ClientRepository;