import React,{createContext,useState,useEffect} from 'react';
import { storageController } from '../api/Token'

export const AuthContext = createContext();

export const AuthProvider = (props) =>{
    const {children} = props;

    const login = async (token)=>{
        try{
            console.log("obteniendo token",token)
            await storageController.setToken(token);

          
        }catch(error){
            console.log(error)
        }
     
    }
    const data = {
        user: null,
        login,
        logout: () =>console.log("logout"),
        upDateUser: () =>console.log("upDateUser"),
    }
   
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}