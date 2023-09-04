import sahajData from "../fixtures/sahajttp.json";
// const data = new sahajData();
import getRandomDate from "./DateRegex";
import generateValidRandomEmail from "./GmailRegex";
import generateRandomName from "./NameRegex";
import generateTeacherName from "./TeacherName";
import generateRandomText from "./randomParagraph";
import generateRandomURLRegex from "./randomUrls";

// const integers="0123456789"
const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const courseDetails = getRandomDate() + "," + generateTeacherName() + "," + generateTeacherName();
class sahajPage4 {
  sahajMeditation() {
    cy.get('[class="MuiFormControl-root css-1nrlq1o-MuiFormControl-root"]').get('[role="radiogroup"]')
      .get('input[type="radio"]')
      .get('[value="Daily"]')
      .click().should('contain.value','Daily')
  }
  guruPujaPhase1(){ 
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="text"]').eq(0).type(courseDetails)
      
    //   this input accept only integers and string
    //   .invoke("val")
    //   .should((value)=>{
    //     string.each((letters)=>{
    //          if (letters == integers && letters == string) {
    //            console.log(value, "helooooo integer");
    //            expect(
    //              Number.isNaN(+value),
    //              "input should be String and integers"
    //            ).to.eq(true);
    //          } 
    //     })
    //   })
//       .should((value)=>{
//         console.log(value,"helooooo string")
//         for(const i=value;i<value.length;i++){
//         if(i == integers && i == string) {
//          console.log(value,"helooooo integer");
//         expect(
//           Number.isNaN(+value),
//           "input should be String and integers"
//         ).to.eq(true);
//     } 
// }
// })      
}
   guruPujaPhase2(){
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('input[type="text"]').eq(1).type(courseDetails)
  }
  guruPujaDone(){
    //check the default value it is required value we have to clear the input
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]') .get('input[type="number"]')
      .should("be.empty").clear().wait(2000)
    //  type the user data
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(0).type("23")
      .invoke('val').should((value)=>{
       expect(Number.isNaN(+value), "input should accept only integer").to.eq(false) 
      })
  }
  clearGuruPujaDone(){
      //   clear the input feild
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(0).clear()
      cy.contains('Guru puja count field is required').wait(2000)
    //again type the user data
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(0).type("15")
      .invoke('val').should((value)=>{
       expect(Number.isNaN(+value), "input should accept only integer").to.eq(false) 
      })
  }
  guruPujaChanting(){
    // select yes
    cy.get('[class="MuiFormControl-root css-1nrlq1o-MuiFormControl-root"]').get('input[type="radio"]').get('[value="1"]').click();
    // select No
    cy.get('[class="MuiFormControl-root css-1nrlq1o-MuiFormControl-root"]').get('input[type="radio"]').eq(4).click();
  }
  guruPujaAudioLink(){
    // type an url
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[type="text"]').eq(2).type(generateRandomURLRegex())
    // clear the url
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[type="text"]').eq(2).should('be.empty').clear()
    .should('contain.text','')
    // again type the url
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[type="text"]').eq(2).type(generateRandomURLRegex())
  }
   guruPujaVideoLink(){
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[type="text"]').eq(3).type(generateRandomURLRegex())
     // clear the url
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[type="text"]').eq(3).should('be.empty').clear()
    .should('contain.text','')
    // again type the url
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
    .get('[type="text"]').eq(3).type(generateRandomURLRegex())
  }
  alertIcon(){
    cy.get('[class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"]').eq(0).trigger('mouseover')
     cy.get('[class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"]').eq(1).trigger('mouseover')
    // cy.get('[type="button"]').eq(0).trigger('mouseover')
  }
  NoOfSahajSamadhiProgramsOrganized(){
 //check the default value it is required value we have to clear the input
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]') .get('input[type="number"]').eq(1)
      .should("be.empty").clear().wait(2000)
    //  type the user data
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(1).type("23")
      .invoke('val').should((value)=>{
       expect(Number.isNaN(+value), "input should accept only integer").to.eq(false) 
      })
        //   clear the input feild
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(1).clear()
      cy.contains("Sahaj Program Count field is required").wait(2000);
    //again type the user data
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(1).type("15")
      .invoke('val').should((value)=>{
       expect(Number.isNaN(+value), "input should accept only integer").to.eq(false) 
      })
  }
  NoOfParticipantesRegistered(){
//check the default value it is required value we have to clear the input
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]') .get('input[type="number"]')
     .eq(2).should("be.empty").clear().wait(2000)
    //  type the user data
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(2).type("23")
      .invoke('val').should((value)=>{
       expect(Number.isNaN(+value), "input should accept only integer").to.eq(false) 
      })
        //   clear the input feild
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(2).clear()
      cy.contains('Sahaj Participate Count field is required').wait(2000)
    //again type the user data
      cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]')
      .get('input[type="number"]').eq(2).type("15")
      .invoke('val').should((value)=>{
       expect(Number.isNaN(+value), "input should accept only integer").to.eq(false) 
      })
  }
  teacherContent(){
    // type the teacher content
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[600px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').type(generateRandomText())
// clear the input
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiInputBase-inputSizeSmall css-12tl3rr-MuiInputBase-input-MuiOutlinedInput-input"]')
      .should("be.empty")
      .clear({ force: true })
    //   .get('[class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root"]')
      .should('contain.text','')
// again type the text
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[600px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').type(generateRandomText())
  }
  teacherName(){
    // type a teacher name it accept only string and integers
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(7).type(generateTeacherName())
    // clear the input value
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"]').should('be.empty').eq(7).clear()
// error messgae

.should('contain.text','')
  // type a teacher name it accept only string and integers
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(7).type(generateRandomName())
    .should('contain.text','')

//     // again clear
// cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"]').should('be.empty').eq(7).clear()
//     // again type 
//     cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(7).type(generateTeacherName())
  }
  teacherEmail(){
    // type the email
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(8).type(generateValidRandomEmail())
// clear the input value
cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"]').should('be.empty').eq(8).clear()
.should('contain.text','')
// wrong emial format type
    const randomEmail =Math.random().toString(16).substring(2, 15) + "gmail.com";
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(8).type(randomEmail)
    .get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"]').should('contain.text','')
// again type
cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"]').should('be.empty').eq(8).clear()
cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(8).type(generateValidRandomEmail())
  }
  techaerCode(){
    // type the code
    cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(9).type(generateRandomName())
    // clear the code
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"]').should('be.empty').eq(9).clear()
        .should('contain.text','')
        // agian type the code
            cy.get('[class="MuiFormControl-root MuiTextField-root w-[300px] css-1u3bzj6-MuiFormControl-root-MuiTextField-root"]').eq(9).type(generateRandomName())
            .invoke('val').should((value)=>{
                expect(
                    Number.isNaN(+value),"input accept all integers,string,special characters also"
                ).to.eq(false)
            })
  }
  declaration(){
    // chech the checkbox
    cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').get('input[type="checkbox"]').check()
    // uncheck the check box
     cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').get('input[type="checkbox"]').uncheck()
    //  check again
        cy.get('[class="PrivateSwitchBase-input css-1m9pwf3"]').get('input[type="checkbox"]').check()
  }
  PreviousButton(){
    cy.get('[class=" bg-gray-300 rounded-[5px] mb-3"]').contains("Previous").click();
  }
  saveButton(){
    cy.get('[class=" bg-gray-300 text-center rounded-[5px] mb-3"]').contains('Save').click()
  }
  submitButton(){
    cy.get('[type="submit"]').contains('Submit Application').click()
  }

}   
export default sahajPage4;
