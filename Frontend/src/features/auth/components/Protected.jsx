import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import React from 'react'
import LoadingScreen from "../../../components/LoadingScreen";

const Protected = ({children}) => {

    const {loading, user} = useAuth()
    const location = useLocation()

    console.log("Protected component rendered");
    console.log("Protected auth state:", { user, loading });

    if(loading){
        return <LoadingScreen message="Restoring your session" />
    }
    if(!user){
        return <Navigate to={'/login'} state={{ from: location }} replace/>
    }

  return children
}

export default Protected
