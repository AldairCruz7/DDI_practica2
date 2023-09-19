import React from 'react'
import AppNavigation from './AppNavigation'
import AuthScreen from '../../screen/Auth/AuthScreen'

const RootNavigation = () => {
  const user = 1;
  return user ? <AppNavigation /> : <AuthScreen />
}

export default RootNavigation