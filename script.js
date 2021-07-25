const customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let customerArray = [];

  localStorage.getItem("customers") !== null
    ? (customerArray = JSON.parse(localStorage.getItem("customers")))
    : customerArray;

  let name = document.getElementById("customerName").value;
  let email = document.getElementById("customerEmail").value;
  let address = document.getElementById("customerAddress").value;

  let customer = {
    category: "customer",
    name: name,
    email: email,
    address: address,
  };

  customerArray.push(customer);

  let convertData = JSON.stringify(customerArray);

  localStorage.setItem("customers", convertData);

  let content = document.getElementById("customerFormContainer");

  content.innerHTML = `Cliente cadastrado!`;
});

const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let productArray = [];

  localStorage.getItem("products") !== null
    ? (productArray = JSON.parse(localStorage.getItem("products")))
    : productArray;

  let name = document.getElementById("productName").value;
  let quantity = document.getElementById("productQuantity").value;

  let product = {
    category: "product",
    name: name,
    quantity: quantity,
  };

  productArray.push(product);

  let convertData = JSON.stringify(productArray);

  localStorage.setItem("products", convertData);

  let content = document.getElementById("productContainer");

  content.innerHTML = `Produto cadastrado!`;
});
