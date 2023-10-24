
import courseTypesApi from "@pages/api/coursetypeteacher";
import organizerApi from "@pages/api/organizer";

class apiCourseTypes{

  constructor() {
  this.coursesData = null; // Initialize equalValues as an instance variable
  this.coursename=null
  this.innerTextArray=null
  this.courseValues=null
  this.course=null
  }

  categoryData(){
    organizerApi().then((res) => {
    const course=res
    this.coursename = course.filter((value)=>value.id=="21" || value.id=="24" || value.id=="25")
    console.log(this.coursename,"course names are:")
   this.course = this.coursename.map((course) => course.category_value);
   console.log(this.course,"final course name are")
    });
  }

  data(){
    // Store the result of apiRequest in this.equalValues
    return courseTypesApi().then((response) => {
        const data=response.data
        console.log(data,"data from course types issss")
       this.courseData = data.map((element) => element.course_type_id);
      console.log(this.courseData, "value of api issssss");

       cy.get("#parent-drop-down-course_type-select")
       .get('[class="break-words"]')
         .then((element) => {
           this.innerTextArray = [...element].map((ele) => ele.innerText);
           console.log(this.innerTextArray, "inner text isssss");

        this.courseValues=this.innerTextArray.filter((value)=>this.course?.includes(value))
        console.log(this.courseValues,"equal values aree:")
         });
    });
  }

  
//   equalCourse(){    
//     this.courseValues=this.innerTextArray.filter((value)=>this.course.includes(value))
//     console.log(this.courseValues,"equal values aree:")
//   }
 frontEndCourse(){
    // Now you can access this.equalValues in the organizerInput method
    cy.get("#parent-drop-down-course_type-select").click()
    // .get('[class="p-2 text-sm cursor-pointer  hover:bg-[#7677F4] hover:bg-opacity-5 pl-4 text-[#59595B]"]')
 }

  selectOneCourse(){
  
    cy.contains("Art of Breathing").click()


    //   this.courseValues?.filter((course) => {
    //   cy.contains(course).click()
    // //  cy.get('[class="mr-3"]').eq(3).click();

    //   if (course == "Art of Breathing" || course=="YES! Plus") {
    //    cy.get('[class="mr-3"]').eq(2).click();
    //   // cy.get('button[class="px-4 h-[45px] undefined white-btn w-[143.18px] border-[1px] !h-[45px]  "]').contains("CANCELAR").should('be.visible').click();
    //   }
    // });
  }


}
export default apiCourseTypes