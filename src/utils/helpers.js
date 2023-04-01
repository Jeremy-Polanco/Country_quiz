export const getCountriesProperties = (data, property) => {
  let unique;
  if (property === "name") {
    unique = data.map((item) => item[property].common);
  }
  if (property === "capital") {
    unique = data.map((item) => item[property]);
  }
  if (property === "flags") {
    unique = data.map((item) => item[property].svg);
  }
  return unique;
};
