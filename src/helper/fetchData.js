const fetchData = async (jsonFileName) => {
  const response = await fetch(
    `https://games-72b6f-default-rtdb.firebaseio.com/${jsonFileName}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};

export default fetchData;
