// const localStorageCustomers = localStorage.getItem("customers");

// const updateLocalStorage = () => {
//   localStorage.setItem("customers", JSON.stringify(customers));
// };

// let customers =
//   localStorage.getItem("customers") !== null ? localStorageCustomers : [];

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
