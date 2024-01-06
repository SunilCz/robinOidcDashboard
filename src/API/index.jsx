export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

export const getUsers = () => {
  return fetch("https://pharma-release.server247.info/core-api/api/app/company/company-members")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched user data:", data);
      return data; // If you want to pass the data to the caller
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      throw error; // If you want to propagate the error to the caller
    });
};


