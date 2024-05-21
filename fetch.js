fetch("http://localhost:2323/person")
  .then((response) => response.json())
  .catch((error) => console.error(error));
