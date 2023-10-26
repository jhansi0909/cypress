import userApi from "@pages/api/users";
class users{
constructor(){
    this.usersApi=[]
}


    userApiData(){
        return userApi().then((res)=>{
         console.log(res,"user data issssss")

        })
    }

}
export default users