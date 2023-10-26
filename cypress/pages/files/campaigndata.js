import campaignAPi from "@pages/api/campaignApidata";
class campaigns{

    campaignsApiData(){
        return campaignAPi().then((response) => {
    
            console.log(response,"campaign data isssss")
        //     this.dashboard = response.filter((element) => element.category_name=="dashboard");
        //   console.log(this.dashboard, "dashboard data");
        //   this.dashboardnames=this.dashboard.map((ele)=>ele.category_value)
        //   console.log(this.dashboardnames,"dashboard names are:")

        })
    }

}
export default campaigns