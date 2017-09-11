import App from './app/setup';

new App();

// /**
// *
// * android Index View
// *
// * @author  Minh Huy
// * @version 1.0
// * @since   29-06-2017
// */

// import React,{Component} from 'react';
// import {
//   AppRegistry,
//   BackAndroid
// } from 'react-native';
// var Global = require('./app/common/global');
// var RootView = require('./RootView');
// var Utils=Global.Utils;

// class LiveCitiesApp extends Component {
//   constructor(){
//     super();
//     var self=this;

//     BackAndroid.addEventListener('hardwareBackPress', function(){
//       //define disable/enable hardware back button
//       return true;
//     });
//   }

//   render() {
//     return (
//       <RootView ref="root" onRouteChange={this.onRouteChange.bind(this)}/>
//     );
//   }

//   onRouteChange(id){
//     this.currentRoute=id;
//   }
// }
// console.disableYellowBox = true;
// AppRegistry.registerComponent('LiveCitiesApp', () => LiveCitiesApp);
