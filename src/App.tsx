import { FormEvent } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import "./App.css";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultistepform";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, goTo , isLastStep } =
    useMultistepForm([
      <UserForm/>,<AddressForm/>,<AccountForm/>
    ]);

    function onSubmit (e:FormEvent){
     e.preventDefault();
     next()
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
