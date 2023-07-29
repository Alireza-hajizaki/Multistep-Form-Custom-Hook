import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import "./App.css";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultistepform";

type FormData ={
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const INITIAL_DATA : FormData = {
  firstName : "",
  lastName : "",
  age : "",
  street : "",
  city : "",
  state : "",
  zip : "",
  email : "",
  password : "",
}

function App() {
  const [data , setData] = useState(INITIAL_DATA);
  function updateFields (fields:Partial<FormData>){
   setData(perv => {
    return {...perv , ...fields}
   })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next , isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields}/>,
      <AddressForm {...data} updateFields={updateFields}/>,
      <AccountForm {...data} updateFields={updateFields}/>
    ]);

    function onSubmit (e:FormEvent){
     e.preventDefault();
     if(!isLastStep) return next()
     alert("Successful Account Creation")
    }

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="number-page">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="items">
            {!isFirstStep &&
            <button type="button" onClick={back}>Back</button>}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
