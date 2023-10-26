import gastosApiData from "@pages/api/gastosData";


class apiGastos {
  constructor() {
    this.gastosValues = null; // Initialize equalValues as an instance variable
    this.gastos = [];
    this.category = [];
    this.resumeBoxArray=[]
    this.total=null
    this.amount=null;
    this.gastosData=[]
    this.value="$4000"
    this.estimatedAmount=null
    this.balance=null
    this.finalbalance=null
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
        cy.get('.card').get('[class="h-full  w-full focus:outline-none  placeholder:text-default "]').each(($el, index) => {

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

   this.total =  Tallers + regular + repitence + ReferidosMembresía + RepitentesMembresía + ProfesoradoDeYoga
   this.estimatedAmount = "$"+this.total
   console.log(this.estimatedAmount,"estimated amount isss")
   

//    this.gastosData= ["Ingresos estimados",this.total,"Gastos directos estimados"]

//    console.log(this.gastosData,"gastos array isssss")
}

checkTheEstimationAmount(){
    cy.get('[class="flex flex-row justify-between text-default"]').children().then((element) => {
        console.log(element,"element iss")
           this.resumeBoxArray = [...element].map((ele) => ele.innerText);
           console.log(this.resumeBoxArray, "inner text isssss")
           console.log(this.resumeBoxArray[3] < this.value,"value is less than 4000");
})
}
checkGastosEstimadosAmount(){
  if(this.resumeBoxArray[3] < this.value){
    console.log("hiiiiiiiiiii")
   cy.get('[class="flex flex-row justify-between text-default"]').each(($el, index) => {

        if (index==1) {
            cy.log(index);
            cy.log($el);
            cy.wrap($el).should('contain',this.resumeBoxArray[3])
            console.log("gastos amount is less than 4000")
        }
        else{
          console.log("gastos amount >4000")
        }
})
  }
}
balanceAmount(){
  
const removeDollarSymbol = this.resumeBoxArray[1].substring(1);
const removedollarsymbol=this.resumeBoxArray[3].substring(1)
  console.log(removeDollarSymbol,"total category amount")
  console.log(removedollarsymbol,"gastos amount is")
  this.balance=removeDollarSymbol-removedollarsymbol
  console.log(this.balance,"balance amount isssss")

  const balance= "$"+this.balance

this.finalbalance=balance.toString()
  console.log(this.finalbalance,"final balance isss")

  cy.get('[class="flex flex-row justify-between text-[#59595B] font-medium"]').children().eq(1).should('contains',this.finalbalance)
}

}

export default apiGastos