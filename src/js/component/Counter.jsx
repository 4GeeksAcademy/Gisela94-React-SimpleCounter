import React from 'react';
import '../../styles/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importar el fontAwesome para usar el icono del reloj
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Importar el icono del reloj


const Counter = (props) => { 

  let one = props.seconds;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;

  if (props.seconds > 9) {
    two = Math.floor(props.seconds / 10);
    one = props.seconds % 10;

    if (two > 9) {
      three = Math.floor(two / 10);
      two = two % 10;
    
      if (three > 9) {
        four = Math.floor(three / 10);
        three = four % 10;

        if (four > 9) {
          five = Math.floor(four / 10);
          four = five % 10;

          if (five > 9) {
            six = Math.floor(six / 10);
            five = five % 10;
          }
        }

      }
      
    }
  }

    return (
      <div className="container">
        <div className="first-div"><FontAwesomeIcon icon={faClock} className ="clock" /></div>
        <div className="small-div">{six}</div>
        <div className="small-div">{five}</div>
        <div className="small-div">{four}</div>
        <div className="small-div">{three}</div>
        <div className="small-div">{two}</div>
        <div className="small-div">{one}</div>
        </div>

    );
  };
  
  export default Counter;