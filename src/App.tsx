import { FormEvent } from "react";
import "./App.css";
import { Input } from "./components/Input";

export default function App() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    console.log(form);
  };
  return (
    <div className="App">
      <form id="form-stateless" name="form-stateless" onSubmit={onSubmit}>
        <Input name="name" label="Name" pattern=".{8,}" title="Oito ou mais caracteres" required />
        <Input name="surname" label="Surname" />
        <Input name="lastname" label="Lastname" />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
