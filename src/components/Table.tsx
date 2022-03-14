import Client from "../core/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  handleEdit?: (client: Client) => void;
  handleRemove?: (client: Client) => void;
}

function Table({clients, handleEdit, handleRemove}: TableProps) {
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {(handleEdit || handleRemove) && <th className="p-4">Actions</th>}
      </tr>
    )
  }

  function renderContent() {
    return clients?.map((client, index) => {
      return (
        <tr key={client.id} className={`
          ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        `}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions(client)}
        </tr>
      )
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {handleEdit &&
          <button
            onClick={() => handleEdit?.(client)}
            className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
            `}
          >
            {EditIcon}
          </button>
        }

        {handleRemove &&
          <button 
            onClick={() => handleRemove?.(client)}
            className={`
              flex justify-center items-center
              text-red-500 rounded-full p-2 m-1
              hover:bg-purple-50
            `
          }>
            {TrashIcon}
          </button>
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
        {renderContent()}
      </tbody>
    </table>
  );
}

export default Table;
