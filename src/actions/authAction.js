import {LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    AUTH_ERROR,
    LOGOUT} from "./type";
import axios from "axios";

export const login =(data)=>async dispatch=>{

   const body=JSON.stringify(data);
   const config={
       headers:{
           "Content-Type":"application/json"
       }
   }
   try{
       const response=await axios.post("http://localhost:3200/api/v1/auth/login",body,config);
       dispatch({
           type:LOGIN_SUCCESS,
           payload:response.data
       })
   }catch(err){
    dispatch({
           type:LOGIN_FAIL
       })
   }
   

}
export const userSignUp=(data)=>async dispatch=>{
      delete data.repeatPassword;
      const body=JSON.stringify(data);
      const config={
           headers:{
                "Content-Type":"application/json"
           }
      }
      try{
          const response=await axios.post("http://localhost:3200/api/v1/auth/signup",body,config);
          dispatch({
              type:REGISTRATION_SUCCESS,
              payload:response.data
          })
      }catch(err){
          console.log(err)
          dispatch({
              type:REGISTRATION_FAIL
          })
      }  
 
}
export const logout =()=>dispatch=>{
     
    dispatch({
         type:LOGOUT
    })
}