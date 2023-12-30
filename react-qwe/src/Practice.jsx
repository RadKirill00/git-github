import React from 'react'

  const Practice = () => {
    const isAuth = true;
	
    return <div>
      {isAuth && <p>Bы авторизованы</p>}
      {!isAuth && <p>Please signUp</p>}
    </div>;
  
}
export default Practice
