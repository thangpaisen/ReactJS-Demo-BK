import '../App.css';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
export default function Calculator() {
    const [results, setResults] = useState('')
    const [ketQua, setKetQua] = useState()
    function handleValue(value) {
        setResults(value)
    }
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Máy tính fake
            </h2>
            <input className='inputBox' value={results} onChange={(value) => { handleValue(value.target.value)}} />
            <b>{ketQua}</b>
                <div>
                    <button onClick={() => {handleValue(`${results}1`)}}>1</button>
                    <button onClick={() => {handleValue(`${results}2`)}}>2</button>
                    <button onClick={() => {handleValue(`${results}3`)}}>3</button>
                    <button onClick={() => {handleValue('')}}>AC</button>
                    <button onClick={() => {setKetQua(eval(results))}}>=</button>
                </div>
                <div>
                     <button onClick={() => {handleValue(`${results}4`)}}>4</button>
                    <button onClick={() => {handleValue(`${results}5`)}}>5</button>
                    <button onClick={() => {handleValue(`${results}6`)}}>6</button>
                <button onClick={() => {handleValue(`${results}+`)}}>+</button>
                <button onClick={() => {handleValue(`${results}-`)}}>-</button>
                </div>
                <div>
                <button onClick={() => {handleValue(`${results}7`)}}>7</button>
                <button onClick={() => {handleValue(`${results}8`)}}>8</button>
                <button onClick={() => {handleValue(`${results}9`)}}>9</button>
                <button onClick={() => {handleValue(`${results}*`)}}>8</button>
                <button onClick={() => {handleValue(`${results}/`)}}>/</button>
                </div>
        </header>
      </div>
    );
  }