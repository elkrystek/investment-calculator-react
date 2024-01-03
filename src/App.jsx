import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputisValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevuserInput => {
      return {
          ...prevuserInput,
          [inputIdentifier]: +newValue,
      };
  });
}

  return (
    <>
    <Header>React Investment Calculator</Header>
    <UserInput userInput = {userInput} onChange = {handleChange}/>
    {!inputisValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputisValid && <Results userInput = {userInput}/>}
    </>
    
  )
}

export default App
