"use strict";

export const inputValidation = (value, error) => {
  switch (true) {
    case value.value.trim() === "":
      value.classList.add("is-invalid");
      error.innerHTML = "Обов'язкове поле";
      return;

    default:
      value.classList.remove("is-invalid");
      error.innerHTML = "";
  }
};

export const heightValidation = (value, error) => {
  if (value.value >= 4.5) {
    value.classList.add("is-invalid");
    error.innerHTML = "Перевищена максимальна висота модуля";
    return;
  }
};

export const selectValidation = (value, error) => {
  if (value.value === "") {
    value.classList.add("is-invalid");
    error.innerHTML = "Ви повинні обрати модуль";
  }
  value.onchange = () => {
    value.classList.remove("is-invalid");
    error.innerHTML = "";
  };
};

export const errorCheck = (value) => value.classList.contains("is-invalid");
