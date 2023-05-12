
import "./App.css";

import Screen from "./components/Screen";
import Button from "./components/Button";

import { useRef, useState } from "react";


/* Main container of the app */ 
export default function App() {
  
  const [outputField, setOutputField] = useState('');
  const screenRef = useRef(); // to get reference of the dom

  /* this handler to set focus at end when enter the numbers and in the screen */
  const focusHandler = function() {
    let end = screenRef.current.value.length;
    screenRef.current.setSelectionRange(end, end);
    
    screenRef.current.focus();
  }

  /* button click handler */

  const clickHandler = function(ch) {
    setOutputField(outputField.concat(ch));
    focusHandler();
  }

  /* equals handler */

  const equalHandler = function(e) {
    try {
      let ans = eval(outputField);
      setOutputField(ans.toString());
    } catch(err) {
      setOutputField("Invalid operation");
    }
  }

  /* for handling the backspace handler */
  const backHandler = function(e) {
    const sliceString = outputField.slice(0, outputField.length - 1);
    setOutputField(sliceString);
  }


  /* for handling the percent button */
  const percentHandler = function(e) {
    let newField = outputField.concat('/100');
    try {
      const res = eval(newField);
      setOutputField(res.toString());
    } catch(err) {
      setOutputField("Invalid operation");
    }
  }

  /* for handling negation key (+/-) */
  const negativeHandler = function(e) {
    try {
      let res = eval(outputField);
      res *= -1;
      setOutputField(res.toString());
    } catch(err) {
      setOutputField("Invalid operation");
    }
  }

  return (
    <div className="main-container">
      <div className="calc-container">
        <Screen sref={screenRef} value={ outputField }/>
        <div className="row">
          <Button onClick={(e) => setOutputField('')} className="button" character={'C'} />
          <Button onClick={negativeHandler} className="button" character={'+/-'} />
          <Button onClick={percentHandler} className="button" character={'%'} />
          <Button onClick={(e) => clickHandler('/')} className="button opbutton" character={'/'} />
        </div>

        <div className="row">
          <Button onClick={(e) => clickHandler('7')} className="button" character={7} />
          <Button onClick={(e) => clickHandler('8')} className="button" character={8} />
          <Button onClick={(e) => clickHandler('9')} className="button" character={9} />
          <Button onClick={(e) => clickHandler('*')} className="button opbutton" character={'*'} />
        </div>

        <div className="row">
          <Button onClick={(e) => clickHandler('4')} className="button" character={4} />
          <Button onClick={(e) => clickHandler('5')} className="button" character={5} />
          <Button onClick={(e) => clickHandler('6')} className="button" character={6} />
          <Button onClick={(e) => clickHandler('-')} className="button opbutton" character={'-'} />
        </div>

        <div className="row">
          <Button onClick={(e) => clickHandler('1')} className="button" character={1} />
          <Button onClick={(e) => clickHandler('2')} className="button" character={2} />
          <Button onClick={(e) => clickHandler('3')} className="button" character={3} />
          <Button onClick={(e) => clickHandler('+')} className="button opbutton" character={'+'} />
        </div>
        
        <div className="row">
          <Button onClick={(e) => clickHandler('0')} className="button" character={0} />
          <Button onClick={backHandler} className="button" character={'<-'} />
          <Button onClick={(e) => clickHandler('.')} className="button" character={'.'} />
          <Button onClick={equalHandler} className="button opbutton" character={'='} />
        </div>

      </div>
    </div>
  );
}