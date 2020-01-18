import {LOAD_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    AUTH_ERROR,
    LOGOUT}from '../actions/type';
const initialState={
    token:localStorage.getItem("token"),
    isAuthencated:null,
    user:null,
    loading:true
   
}

export default function(state=initialState,action){
  const {type,payload} =action;
  switch(type){
      case LOAD_USER:
          return {
              ...state,
              isAuthencated:true,
              loading:false,
              user:payload

          }
     case LOGIN_SUCCESS :
     case REGISTRATION_SUCCESS:
         localStorage.setItem("token",payload.token);
         return {
             ...state,
             ...payload,
             isAuthencated:true,
             loading:false
         }
     case LOGIN_FAIL:
     case AUTH_ERROR:
     case REGISTRATION_FAIL:    
     case LOGOUT:
       localStorage.removeItem('token')
       return {
           ...state,
           loading:false,
           isAuthencated:false,
           token:null
       }   
     default :
         return state;          
  }
}