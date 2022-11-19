"use strict";

export const heighСheckA = (value) => {
  switch (true) {
    case value.value >= 0 && value.value <= 3:
      return 25;

    case value.value >= 3 && value.value <= 4.5:
      return 25;

    case value.value >= 4.5 && value.value <= 6:
      return "";

    case value.value >= 6 && value.value <= 8:
      return "";
  }
};

export const heighСheckB = (value) => {
  switch (true) {
    case value.value >= 0 && value.value <= 3:
      return 12;

    case value.value >= 3 && value.value <= 4.5:
      return 12;

    case value.value >= 4.5 && value.value <= 6:
      return "";

    case value.value >= 6 && value.value <= 8:
      return "";
  }
};
