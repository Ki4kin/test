import properties from "./properties.json";

function fetchProperties() {
  return new Promise((resolve) => setTimeout(resolve, 3000, properties));
}

export { fetchProperties };
