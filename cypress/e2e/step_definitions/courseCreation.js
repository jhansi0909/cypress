import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import commonElements from "@pages/commonElements";
import staticPage from "@pages/courseCreation";
import workshophomepage from "@pages/workshophomepage";
const course = new workshophomepage();
const creationCourse = new staticPage();
const common = new commonElements();
import apiOrganizor from "@pages/files/organizer";
const organizar=new apiOrganizor()
import apiVisibility from "@pages/files/visbility";
const visibility=new apiVisibility()
import apiFormat from "@pages/files/format";
const format=new apiFormat()
import apiTeacher from "@pages/files/teacher";
const teacher=new apiTeacher()
import apiCourseTypes from "@pages/files/coursetypeteacher";
const courses=new apiCourseTypes()
import region from "@pages/files/region";
const regiondata=new region()
import country from "@pages/files/country";
const countrydata=new country()
import state from "@pages/files/state";
const statedata=new state()
import city from "@pages/files/city";
import generateRandomName from "@pages/regularExpression/centernamesgenerate";
const citydata=new city()
import apiGastos from "@pages/files/gastosData";
const gastosdata=new apiGastos()


  
    crossIcon='[class="w-7 cursor-pointer text-success"]'
  


Given("I navigate to course static page", () => {
  course.navigate();
});
When("user click on {string} in the dashboard page", (card) => {
  // course.Dashboard()
  cy.contains(card).should("have.text", card).click({ force: true });
});
Then("user can verify {string} in the dashboard page", (card) => {
  cy.contains(card).should("have.text", card);
});
When("user click on {string} in the {string} dashboard", (act) => {
  // course.activites()
  cy.get("#root").contains(act).click();
});
When("user click on course", () => {
  course.courseClick();
});
When("user click on {string} button in home page", (button) => {
  cy.contains(button).should("have.text", button).click();
});
When("user can verify the text {string}", (heading) => {
  cy.contains(heading).should("have.text", heading);
});


When('user verify the {string} button',()=>{
    cy.get('[class="flex text-center underline opacity-0"]').click()
});

// #static page
When("user can verify the image in first box", () => {
  creationCourse.firstBox();
});
When("user can verify the image in second box", () => {
  creationCourse.secondBox();
});
When("user can verify the image in third box", () => {
  creationCourse.thirdBox();
});
When("user can verify the image in fourth box", () => {
  creationCourse.fourthBox();
});
When("user verify the import note orange color box", () => {
  creationCourse.importantNoteBox();
});
When("user verify the close Icon {string}", () => {
  // cy.get('.card').get('button').click()
  // // cy.get('.card').get('.card >.absolute').click(step)
  course.closeIcon();
});
When('user click on the {string} button', (button) => {
    cy.contains(button).should("have.text", button).click()
});

When('check all the input fields change to red color',()=>{
    cy.get("#parent-drop-down-organizer_user_id-select").should('have.css','border-color','rgb(255, 88, 88)')
    cy.get("#parent-drop-down-course_type-select").should('have.css','border-color','rgb(255, 88, 88)')
    cy.get("#parent-drop-down-format-select").should('have.css','border-color','rgb(255, 88, 88)')
    cy.get("#parent-drop-down-visibility-select").should('have.css','border-color','rgb(255, 88, 88)')

})

    When('user click on nex button before filling the input fields we getting all input fields change the color {string}',()=>{

    })
    When('api getting data {string}',()=>{
        organizar.data();
        // courseTypes.data()
        teacher.data();
        courses.data()
        courses.categoryData()
        format.data();
        visibility.data()
    })

// #step-1

When('1.user click on organizer input',()=>{
organizar.organizerInput();
})
When('we have to open one dropdown. In that dropdown contains two options.',()=>{
organizar.verifyOrganizerDropdown()
})
When('user want to select {string}', (name) => {
 cy.contains(name).click()
});
When('we have to open one model.',()=>{
organizar.checkPopupModel()
})
When('In that popup model there are two buttons: close and clear buttons.',()=>{
organizar.checkTwoButtons()
})
When('user click on {string} button Then the modal should be closed',(buttonName)=>{
cy.contains(buttonName).click()
})
When('user click on {string} button Then only the popup model should be closed',(button)=>{
    // cy.contains("NUEVO CURSO").click()
    cy.contains(button).click()
})





    // When("1.user click on organizer input we have to open one dropdown. In that dropdown contains two options.",() => {
    //     organizar.organizerInput();
    //     //   format.formatInput();
    //     // // format.formatInput();
    //     // visibility.visibilityInput();
    // });
    // When('user select {string} that value is filled the input and then change the color {string}. and we get one crossIcon. and also we have to clear the previously selected option click on the {string} icon the total input color changed red. then user want to select {string}.we have to open one model. In that popup model there are two buttons: close and clear buttons. user click on {string} button the total step model was closed. and then user click on {string} button it just closed that popup model only.',() => {
    //     organizar.selectOneOption();

    // });
       When('1.user click on course input we have to open one dropdown. In that dropdown contains list of course types.',()=>{
       courses.frontEndCourse()
    });
    When('user select any of course',()=>{
        courses.selectOneCourse()
    });

    When("1.user click on format input we have to open one dropdown. In that dropdown contains two options.",() => {
        format.formatInput();
    });
    When('user select {string} and then user want to select {string}. we have to open below one input that is zoom link input.',() => {
        format.selectFormatOption();
      }
    );
    When('1.user click on visibility input we have to open one dropdown. In that dropdown contains two options.',()=>{
        visibility.visibilityInput();
    });
    When('user select {string} and then user want to select {string} click on public option',()=>{
    visibility.selectVisibilityOption()
    })
  
    When('user put on the mouse notification icon',()=>{
      cy.get('[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]').scrollTo('bottom',{duration:2000})
        cy.get('#popover-cpa').trigger('mouseover').should('be.visible')
        cy.get('#popover-cpa').trigger('mouseout')
    })
    When('all the input fields changes to green color and get crossIcon',()=>{
    cy.get("#parent-drop-down-organizer_user_id-select").should('have.css','border-color','rgb(68, 183, 65)').get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
    cy.get('#parent-drop-down-teachers-select').should('have.css','border-color','rgb(68, 183, 65)').get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
    cy.get("#parent-drop-down-course_type-select").should('have.css','border-color','rgb(68, 183, 65)').get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
    cy.get("#parent-drop-down-format-select").should('have.css','border-color','rgb(68, 183, 65)').get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
    cy.get('input[type="text"]').invoke('val').get('[class="flex flex-row items-center border px-3 rounded-[10px] focus:text-default focus:bg-white h-[55px] undefined border-success text-success"]').should('have.css','border-color','rgb(68, 183, 65)').get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
    cy.get("#parent-drop-down-visibility-select").should('have.css','border-color','rgb(68, 183, 65)').get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')
    })
    When('user click on save and continue button the data will save until we have filled. and save and continue button name also changed and also change the color {string}',()=>{
        cy.contains("Guardado").should('have.css',"border-color", "rgb(229, 231, 235)")
    })

// #step-2 
When('all the input fields changes to red color',()=>{
    cy.get('#parent-drop-down-region-select').should('have.css','border-color','rgb(255, 88, 88)')
    cy.get('#parent-drop-down-country-select').should('have.css','border-color','rgb(255, 88, 88)')
    cy.get('#parent-drop-down-state-select').should('have.css','border-color','rgb(255, 88, 88)')
    cy.get('#parent-drop-down-city-select').should('have.css','border-color','rgb(255, 88, 88)')
    cy.get('#parent-drop-down-center-select').should('have.css','border-color','rgb(255, 88, 88)')
    // cy.get('[class="h-full  w-full focus:outline-none  placeholder:text-[#898989] "]').should('have.css','border-color','rgb(255, 0, 0)')
})

// Region Input
    When('api getting Region data',()=>{
       regiondata.regionData();
    })
    When('user verify the region input',()=>{
   regiondata.verifyRegionInput()
    })
    When('user click on region input we have to open dropdown.',()=>{
     regiondata.verifyRegionDropdoown()
    })
    When('In that dropdown contain the list of regions. which is come from the database.',()=>{
     regiondata.verifyTheRegionDropdoownValues()
    })
    When('user want to select any one of the region.',()=>{
        regiondata.selectRegion()
    })

// Country Input
    When('api getting country data',()=>{
        countrydata.countryData();
    })
    When('user verify the country input',()=>{
     countrydata.verifyCountryInput()
    })
    When('user click on country input we have to open dropdown.',()=>{
     countrydata.verifyCountryDropdoown()
    })
    When('In that dropdown contain the list of realted countries above selected region. which is come from the database.',()=>{
     countrydata.verifyTheCountryDropdoownValues()
    })
    When('user want to select any one of the country.',()=>{
        countrydata.selectCountry()
    })

// State input
    When('api getting state data',()=>{
        statedata.stateData();
    })
    When('user verify the state input',()=>{
     statedata.verifyStateInput()
    })
    When('user click on state input we have to open dropdown.',()=>{
     statedata.verifyStateDropdoown()
    })
    When('In that dropdown contain the list of realted states above selected country. which is come from the database.',()=>{
     statedata.verifyTheStateDropdoownValues()
    })
    When('user want to select any one of the state.',()=>{
        statedata.selectState()
    })
 
// City Input
    When('api getting city data',()=>{
        citydata.cityData();
    })
    When('user verify the city input',()=>{
     citydata.verifyCityInput()
    })
    When('user click on city input we have to open dropdown.',()=>{
     citydata.verifyCityDropdoown()
    })
    When('In that dropdown contain the list of realted cities above selected state. which is come from the database.',()=>{
     citydata.verifyTheCityDropdoownValues()
    })
    When('user want to select any one of the city.',()=>{
        citydata.selectCity()
        cy.wait(2000);
    })
    
//  verify Center input

   When('user verify the center input.user click on the center input field.',()=>{
    cy.contains('Sede / Dirección').click()
    // cy.get('parent-drop-down-center-select').click()
   })
   When('the user clicks on the one option',()=>{
    // cy.get('[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]').scrollTo('bottom',{duration:2000})
    // .get('#scroll-center').scrollTo('bottom',{duration:5000})
    // .scrollTo('bottom',{duration:2000}).scrollTo('bottom',{duration:2000})
    cy.contains("9Z=Y&BdK<4").click()
   })
   When('it contain one add new button.',()=>{
        cy.get('[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]').should('be.visible').scrollTo('bottom',{ duration: 2000 })
    cy.get('#still-open-drop-down-').should('be.visible')
   }) 
//    When('user click on the {string} button',(text)=>{
//     cy.contains(text).click()
//    })
   When('user can add the center names.',()=>{
    cy.get('[placeholder="Agregar nueva ubicación"]').should("be.visible").type(generateRandomName());
    // cy.get('[class=" flex-[0.7] rounded-[10px] px-3"]').should('be.visible').type(generateRandomName())
   })
   When('the center input field prefilled the center name.',()=>{
    cy.get('[class=" flex-[0.7] rounded-[10px] px-3"]').should('have.text','')
      cy.contains('Sede / Dirección').click()
   })

   When('user verify the direction input field.',()=>{
    cy.get('[placeholder="Dirección"]').should('be.visible')
   })
   When('user can add the direction.',()=>{
    cy.get('[placeholder="Dirección"]').type(generateRandomName())
   })
   When('user clear the region input field click on the crossIcon that can remove whole data in that step',()=>{
    cy.get('#parent-drop-down-region-select').get('[class="w-7 cursor-pointer text-success"]').eq(0).click()
   })
   When('user click on the center input.',()=>{
     cy.contains('Sede / Dirección').click()
   })
   When('user want to select one center in the below dropdown',()=>{
    // cy.get('[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]').scrollTo('bottom',{duration:2000})
    // .get('#scroll-center').scrollTo('bottom',{duration:5000})
    // .scrollTo('bottom',{duration:2000}).scrollTo('bottom',{duration:2000})
    cy.contains("9Z=Y&BdK<4").click()
   })
  //  When('user want to select one center in the below dropdown',()=>{
  //       cy.get('[class="inset-0 fixed w-full z-[500] h-full overflow-y-auto bg-black bg-opacity-30 "]').scrollTo('bottom',{duration:2000})
  //   .get('#scroll-center').scrollTo('bottom',{duration:5000})
  //   .scrollTo('bottom',{duration:2000}).scrollTo('bottom',{duration:2000})
  //   // cy.contains("8!Qc@jSFMW").click()
  //  })
   //check all input feilds are filled or not
//    When('the above all input fields are prefilled',()=>{
//      cy.get('#parent-drop-down-region-select').should('have.text','')
//      cy.get('#parent-drop-down-country-select').should('have.text','')
//      cy.get('#parent-drop-down-state-select').should('have.text','')
//      cy.get('#parent-drop-down-city-select').should('have.text','')
//      cy.get("#parent-drop-down-center-select").should("have.text", "");
//      cy.get('[class="h-full  w-full focus:outline-none  placeholder:text-[#898989] "]').should("have.text", "");
//    })
   //check the all input are change the color to green and get crossicon.
   When('all the input fields changes to green and get crossIcon',()=>{
    const crossIcon='[class="w-7 cursor-pointer text-success"]'
    cy.get('#parent-drop-down-region-select').should('have.css','border-color','rgb(68, 183, 65)')
    .get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')

    cy.get('#parent-drop-down-country-select').should('have.css','border-color','rgb(229, 231, 235)')
    .get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')

    cy.get('#parent-drop-down-state-select').should('have.css','border-color','rgb(229, 231, 235)')
    .get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')

    cy.get('#parent-drop-down-city-select').should('have.css','border-color','rgb(229, 231, 235)')
    .get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')

    cy.get('#parent-drop-down-center-select').should('have.css','border-color','rgb(68, 183, 65)')
    .get('[class="w-7 cursor-pointer text-success"]').should('have.css','border-color','rgb(229, 231, 235)').should('be.visible')

    cy.get('[class="h-full  w-full focus:outline-none  placeholder:text-default "]').should('have.css','border-color','rgb(68, 183, 65)')
    .get('[class="w-7 cursor-pointer"]').should('have.css','border-color','rgb(68, 183, 65)').should('be.visible')
   })


When("a.Static page is displayed,verify the heading,text and boxes", () => {
  creationCourse.staticPage();
});
When("user verify the neuvo curso heading", () => {
  creationCourse.headingOfStaticPage();
});
When("user verify the text first part", () => {
  creationCourse.textOfStaticPage();
});
When("verify the first box dimenshions and verify the image. It is displayed like chains and verity the text is present in first box",() => {
    creationCourse.firstBox();
  }
);
When("verify the second box dimenshions and vefity the image. It is displayed like file and verify the text in second box",() => {
    creationCourse.secondBox();
  }
);
When("vefity the text second part", () => {
  creationCourse.secondPartText();
});
When("verify the third box dimenshions and verify the images. which is displayed like database and avatar images and verify the text in the third box",() => {
    creationCourse.thirdBox();
  }
);
When("verify the fourth box dimenshions and verify the image. which is disiplayed like puzzle card and people and also text in the fourth box",() => {
    creationCourse.fourthBox();
  }
);
When("One import note is there orange color box", () => {
  creationCourse.importantNoteBox();
});

When("verify the close Icon {string}", () => {
  course.closeIcon(0);
});
// When("user click on {string} button", () => {
//   creationCourse.startNow(0);
// });

When("verify the heading of the course in step1", () => {
  creationCourse.newCourse();
});
// When('verify the close Icon {string}',()=>{
//     common.closeIcon(0);
// })
