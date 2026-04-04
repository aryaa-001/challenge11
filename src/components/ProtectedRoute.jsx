import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

const currUser = JSON.parse(localStorage.getItem("authUser"));

  return currUser ? <Outlet /> : <Navigate to="/login" replace/>
}

export default ProtectedRoute