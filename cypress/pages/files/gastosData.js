import gastosApiData from "@pages/api/gastosData";
import { should } from "chai";

class apiGastos {
  constructor() {
    this.gastosValues = null; // Initialize equalValues as an instance variable
    this.gastos = [];
    this.category = [];
    this.frontEndArray=[]
    this.total=null
    this.amount=null;
    this.gastosData=[]
    this.value="$4000"
  }

  data() {
    // Make the API request when the component is created
    gastosApiData().then((response) => {
      // Filter the API response to get an array of objects with an "absolute_value" property
      this.gastos = response.map((element) => element.absolute_value);
      console.log(this.gastos, "gastos values are:");
    });
  }

  getAllCategoryValues() {
        cy.get('.card').get('[class="h-full  w-full focus:outline-none  placeholder:text-[#898989] "]').each(($el, index) => {

        if ($el) {
            cy.log(index);
            cy.log($el);
            cy.wrap($el).invoke('val').should((value)=>{
                const category= value;
                this.category.push(category)
                console.log(this.category,"category values are:")
            })
    
        }
})
}
  
multiplyBothArrays(){
   const Tallers= this.category[1]*this.gastos[1]
   console.log(Tallers,"Tallers value is ")
   const regular=this.category[2]*this.gastos[3]
   const repitence = this.category[3] * this.gastos[2];
   const ReferidosMembresía = this.category[4] * this.gastos[4];
   const RepitentesMembresía = this.category[5] * this.gastos[0];
   const ProfesoradoDeYoga = this.category[6] * this.gastos[5];

   this.total = Tallers + regular + repitence + ReferidosMembresía + RepitentesMembresía + ProfesoradoDeYoga
   console.log(this.total)

//    this.gastosData= ["Ingresos estimados",this.total,"Gastos directos estimados"]

//    console.log(this.gastosData,"gastos array isssss")
}

checkTheEstimationAmount(){
    cy.get('[class="flex flex-row justify-between text-[#898989]"]').children().then((element) => {
        console.log(element,"element iss")
           this.frontEndArray = [...element].map((ele) => ele.innerText);
           console.log(this.frontEndArray, "inner text isssss")
           console.log(this.frontEndArray[3] < this.value,"value is less than 4000");
})
}
checkGastosEstimadosAmount(){
  if(this.frontEndArray[3] < this.value){
    console.log("hiiiiiiiiiii")
   cy.get('[class="flex flex-row justify-between text-[#898989]"]').each(($el, index) => {

        if (index==1) {
            cy.log(index);
            cy.log($el);
            cy.wrap($el).should('contain',this.frontEndArray[3])
        }
})
  }
}
balanceAmount(){
    this.frontEndArray
}

}

export default apiGastos