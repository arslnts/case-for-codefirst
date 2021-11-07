export const sortingFunc = (filteredGames, value) => {
  if (value === "AZ") {
    filteredGames.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
  } else {
    filteredGames.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
  }
  return filteredGames;
};

export const sortingLetters = (letters, value) => {
  if (value === "AZ") {
    letters.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;
    });
  } else if (value === "ZA") {
    letters.sort(function (a, b) {
      if (a > b) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0;
    });
  }
  return letters;
};
