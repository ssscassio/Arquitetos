/**
 * App2Sales React Native Starter App
 * https://gitlab.com/app2sales
 * @ Pedro Neri
 */
import {
    createRouter
} from '@exponent/ex-navigation'

import LoginScreen from './screens/Login';
import InterviewScreen from './screens/Interview'
const Router = createRouter(() => ({
    login: () => LoginScreen,
    interview: () => InterviewScreen
}));

export default Router;