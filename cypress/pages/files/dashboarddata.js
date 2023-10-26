import courseTypes from "@pages/api/courseTypes";
class dashboardData{

    dashbordclass='.card .scrollbar .text-sm'
    // dashboardId='#still-open-drop-down-client_user-footer'
    // element='[class="p-2 text-sm cursor-pointer  hover:bg-primary hover:bg-opacity-5 pl-4 text-[#59595B]"]'

    constructor() {  
        this.dashboard=[]
        this.dashboardnames=[]
        this.dashboardFeNames=[]
        this.dashboardDropdownNames=[]
    }
    


    dashboardApiData(){
        return courseTypes().then((response) => {
    
            this.dashboard = response.filter((element) => element.category_name=="dashboard");
          console.log(this.dashboard, "dashboard data");
          this.dashboardnames=this.dashboard.map((ele)=>ele.category_value)
          console.log(this.dashboardnames,"dashboard names are:")

        })
    }
  
    dashboardFeData(){
        cy.get(this.dashbordclass).then((element) => {
            console.log(element,"inner text element iss:")
            this.dashboardFeNames = [...element].map((ele) => ele.innerText);
            console.log(this.dashboardFeNames, "inner text isssss");
         this.dashboardDropdownNames=this.dashboardnames.filter((value)=>this.dashboardFeNames?.includes(value))
         console.log(this.dashboardDropdownNames,"equal values aree:")
         expect(this.dashboardnames).to.deep.equal(this.dashboardFeNames);
        })
    }


}
export default dashboardData