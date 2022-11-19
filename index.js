"use strict";

import {
  inputValidation,
  selectValidation,
  errorCheck,
  heightValidation,
} from "./validation.js";
import { heighСheckA, heighСheckB } from "./heightCheck.js";

const formOfCalcutainon = document.forms["Form of calculation"];
const {
  ["name-value"]: nameValue,
  ["square-value"]: squareValue,
  ["height-value"]: heightValue,
  ["module-selection"]: moduleSelection,
  ["fire-class-A"]: fireClassA,
} = formOfCalcutainon.elements;

const errorMessageHeight = document.querySelector(".error-message__height");
const errorMessageSquare = document.querySelector(".error-message__square");
const errorMessageModule = document.querySelector(".error-message__module");

formOfCalcutainon.onsubmit = (event) => {
  event.preventDefault();
  inputValidation(squareValue, errorMessageSquare);
  inputValidation(heightValue, errorMessageHeight);
  heightValidation(heightValue, errorMessageHeight);
  selectValidation(moduleSelection, errorMessageModule);

  const fireClassResult = fireClassA.checked
    ? heighСheckA(heightValue)
    : heighСheckB(heightValue);

  if (
    errorCheck(squareValue) ||
    errorCheck(heightValue) ||
    errorCheck(moduleSelection)
  ) {
    return;
  }

  const result = document.createElement("div");
  result.classList.add("result");
  result.innerHTML = `
      <h3>Розрахунок для "${nameValue.value}"</h3>
      <div>Розрахуємо кількість модулів порошкового пожежогасіння згідно з ДБН В2.5-56-2014 "ДОДАТОК Г" п. Г.3.8.2 за
        формулою:
      </div>
      <div>N<sub>М</sub> = K<sub>З</sub> ∙ S<sub>0</sub> / S<sub>ЗМ</sub>, де:</div>
      <div>K<sub>З</sub> = 1.2 - коефіцієнт, який враховує можливу нерівномірність подачі вогнегасного порошку;</div>
      <div>S<sub>0</sub> - загальна площа, що підлягає захисту та дорівнює ${
        squareValue.value
      };</div>
      <div>S<sub>ЗМ</sub> = ${fireClassResult} м2 - значення показника «площа, що захищається» одного модуля для класу пожежі ${
    fireClassA.checked ? "A" : "B"
  } і висоті
        монтажу H = ${heightValue.value} м</div>
        <div>N<sub>М</sub>=${Math.ceil(
          (1.2 * squareValue.value) / fireClassResult
        )}</div>
  `;
  formOfCalcutainon.append(result);
};
