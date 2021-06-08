import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

//import { AppWrapper } from './App';
import  {MainWrapper}  from './components/MainWrapper/MainWrapper';
import {Reset} from 'styled-reset';
import store  from './tools/store';

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <MainWrapper />
  </Provider>
,
document.getElementById('root')
)