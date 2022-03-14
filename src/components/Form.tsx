import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client;
  onChange: (client: Client) => void;
  onCancel?: () => void;
}

function Form({client, onCancel, onChange}: FormProps) {
  const id = client?.id;

  const [name, setName] = useState(client?.name ?? '');
  const [age, setAge] = useState(client?.age ?? 0);

  return (
    <div>
      {id ? (
        <Input
          text="Id"
          value={id}
          readOnly
          className="mb-5"
        />
      ) : false
      }

      <Input
        text="Name"
        value={name}
        onChange={setName}
        className="mb-5"
      />
      <Input
        text="Age"
        type="number"
        value={age}
        onChange={setAge}
      />

      <div className="mt-7 flex justify-end">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => onChange?.(new Client(name, age, id))}
        >
          {id ? 'Change' : 'Save'}
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default Form;
