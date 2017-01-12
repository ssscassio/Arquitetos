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
import InterviewResponseScreen from './screens/InterviewResponse'
const Router = createRouter(() => ({
    login: () => LoginScreen,
    interview: () => InterviewScreen,
    interviewResponse: () => InterviewResponseScreen
}));

export default Router;