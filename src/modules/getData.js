const getData = (str) => {
  return fetch(
    `https://new-glo-ozon-baze-default-rtdb.firebaseio.com/goods.json`
    )
  .then((response) => {
    return response.json();
  });
  
};

export default getData;