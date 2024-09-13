import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import List1 from '../List1/List1';
import List2 from '../List2/List2';
import List3 from '../List3/List3';
import Auth from '../Auth/Auth';
import { useRoutes } from 'react-router-dom';

function AppRouter() {
    const { loggedIn } = useSelector(state => state.auth)

    let publicRoute = useRoutes([,
        { path: "/", element: <List1/> },
        { path: "/list1", element: <List1/> },
        { path: "/list2", element: <List2/> },
        { path: "/list3", element: <List3/> },
    ]);
    const privateRoute = useRoutes([
        { path: "/", element: <Auth/>},
        { path: "/auth", element: <Auth/>},
        { path: "*", element: <Auth/>},
    ]);
  
  return (
    !loggedIn
        ? privateRoute
        : publicRoute
  )
}

export default AppRouter