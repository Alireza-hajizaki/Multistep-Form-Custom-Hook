import "./App.css";
import { useMultistepForm } from "./useMultistepform";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, goTo , isLastStep } =
    useMultistepForm([<div>One</div>, <div>Two</div>]);

  return (
    <>
      <div className="container">
        <form>
          <div className="number-page">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="items">
            {!isFirstStep &&
            <button type="button" onClick={back}>Back</button>}
            <button type="button" onClick={next}>{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
