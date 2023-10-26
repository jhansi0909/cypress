const userApi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/users?%24limit=100&role_id=1").then((response) => {
      console.log(response, "response isssssssssssss");
   const users = response.body.data
    console.log(users, "country data isss");
    return users
})
}
export default userApi