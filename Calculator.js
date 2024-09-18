import React, { useState } from 'react';
import './Calculator.css'; // Tệp CSS để định dạng giao diện

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleNumberClick = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number.toString());
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleDelete = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstOperand(parseFloat(displayValue));
    setDisplayValue('0');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  const handleEqual = () => {
    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        result = 'Error';
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstOperand(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}>Clear</button>
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleEqual()}>=</button>
      </div>
    </div>
  );
}

export default Calculator;