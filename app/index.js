/**
 * App2Sales React Native Starter App
 * https://gitlab.com/app2sales
 * @ Pedro Neri
 */
import React, { Component } from 'react';
import {
    NavigationProvider,
    StackNavigation
} from '@exponent/ex-navigation';

import Router from './router';

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
                <StackNavigation initialRoute={Router.getRoute('login')} />
      </NavigationProvider>
    );
  }
}