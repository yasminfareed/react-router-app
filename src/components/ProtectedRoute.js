import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props){
  const {components} = props;
  const Navigate= useNavigate();
  useEffect(()=>{
    let login = localStorage.getItem('login');
    if(!login){
      Navigate('/login')
    }
  })

  return(
    <div>
      <components />
    </div>
  )
}

export default ProtectedRoute;
