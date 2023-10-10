

const gastosApiData=()=>{
    return cy
      .request(
        "GET",
        "http://65.1.7.25:3000/event-subtype-price-category?event_type_id=73&event_subtype_id=21"
      )
      .then((response) => {
        console.log(response, "response isssssssssssss");
        const gastos = response.body.data;
        console.log(gastos, "gastos isss");
        return gastos;
      });
}
export default gastosApiData