const courseTypesApi=()=>{
    return cy
      .request("GET", "http://65.1.7.25:3000/course-type-teacher?%24limit=90&user_id=1")
      .then((response) => {
        console.log(response, "response isssssssssssss");
        const page = response.body;
        console.log(page, "teacher page isss");
        return page;
      });
}
export default courseTypesApi