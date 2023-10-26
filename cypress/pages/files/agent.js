import agentApi from "@pages/api/agentApi"
class agentData{

    agentclass='.card .break-words'


    constructor() {  
        this.agent=[]
        // this.dashboardnames=[]
        this.agentFeNames=[]
        this.agentDropdownNames=[]
    }
    


    agentApiData(){
        return agentApi().then((response) => {
    console.log(response,"agent data iss")
            this.agent = response.map((element) => element?.user_name);
          console.log(this.agent, "agent names data");
        })
    }
  
    agentFeData(){
        cy.get(this.agentclass).then((element) => {
            console.log(element,"inner text element iss:")
            this.agentFeNames = [...element].map((ele) => ele.innerText);
            console.log(this.agentFeNames, "inner text isssss");
         this.agentDropdownNames=this.agent.filter((value)=>this.agentFeNames?.includes(value))
         console.log(this.agentDropdownNames,"equal values aree:")
         expect(this.agentFeNames).to.deep.equal(this.agentDropdownNames);
        })
    }


}
export default agentData