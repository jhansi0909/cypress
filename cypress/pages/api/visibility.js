const visibilityApi = () => {
  return cy.request("GET", "http://65.1.7.25:3000/category-master/?$paginate=false")
    .then((response) => {
      console.log(response, "response isssssssssssss");
      const page = response.body;
      console.log(page, "page isss");
      return page;
    });
};
export default visibilityApi;
