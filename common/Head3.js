import React from 'react';
import {useRouter} from 'next/router';

const Head3 = () => {
  const router = useRouter();

  const logoutFn = () => {
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('name');
    localStorage.removeItem('username');
    router.reload('/courses');
  }
  return (
    <div className='col-3'>
        <button>Login</button>
        <button onClick={logoutFn}>Logout</button>
    </div>
  )
}

export default Head3
