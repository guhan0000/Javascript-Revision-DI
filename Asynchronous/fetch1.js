const BASE_URL = "https://dummyjson.com";
// using then catch
function getData() {
  fetch(`${BASE_URL}/users`)
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// getData();
// using async and await
const getProducts = async () => {
  let response = await fetch(`${BASE_URL}/products`);
  console.log(response);
  let data = await response.json();

  console.log(data.products);
  const products = data.products;
  let ul = document.querySelector("ul");
  products.map((prod, index) => {
    let li = document.createElement("li");
    li.innerText = prod.title;
    ul.append(li);
  });
};

getProducts();
