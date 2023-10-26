const agentApi=()=>{
    return cy.request("GET","http://65.1.7.25:3000/users?role_id=4").then((response) => {
      console.log(response, "response isssssssssssss");
   const agent = response.body.data
  
    return agent
})
}
export default agentApi