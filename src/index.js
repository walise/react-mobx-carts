import React, { Component } from 'react';
import ReactDom from 'react-dom';
import store from './mobx/index.js'
import { autorun} from 'mobx';
import AppleBasket from './AppleBasket';


ReactDom.render(
  <React.StrictMode>
    <AppleBasket store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
)
