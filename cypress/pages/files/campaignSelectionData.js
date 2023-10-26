import campaignSelectionAPi from "@pages/api/campaignSelectionApi"
class selectionCampaign{

constructor(){
    this.campaignApi=[]
}
    selectedCampaignApiData(){
        return campaignSelectionAPi().then((response) => {
    
            console.log(response,"selected campaign data isssss")
        //     this.dashboard = response.filter((element) => element.category_name=="dashboard");
        //   console.log(this.dashboard, "dashboard data");
        //   this.dashboardnames=this.dashboard.map((ele)=>ele.category_value)
        //   console.log(this.dashboardnames,"dashboard names are:")

        })
    }

}
export default selectionCampaign