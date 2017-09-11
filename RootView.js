/**
*
* RootView
*
* @author  Minh Huy
* @version 1.0
* @since   29-06-2017
*/

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components';

var Global = require('./app/common/global');

var FlashScreen = require('./app/views/flashscreen/index');
var OptionRegisterLogin = require('./app/views/register_login/option');
var RegisterEmailInput = require('./app/views/register_login/register_email');
var RegisterNameInput = require('./app/views/register_login/register_name');
var RegisterPasswordInput = require('./app/views/register_login/register_password');
var RegisterAvatarInput = require('./app/views/register_login/register_avatar');
var LoginEmailInput = require('./app/views/register_login/login_email');
var LoginPasswordInput = require('./app/views/register_login/login_password');
var Welcome = require('./app/views/welcome_favorite/welcome');
var SearchInterest = require('./app/views/welcome_favorite/search_interest');
var ConfirmSelect = require('./app/views/welcome_favorite/confirm_select');
var ShowList = require('./app/views/welcome_favorite/show_list');
var HomeIndex = require('./app/views/home/index');

class RootView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        configureScene={(route, routeStack) => this.configureScene(route)}
        initialRoute={{id: Global.Constants.HOME_INDEX_ROUTE_ID}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  configureScene(route){
      return Navigator.SceneConfigs.FloatFromRight
  }

  renderScene(route, navigator){
      if(this.props.onRouteChange){
        this.props.onRouteChange(route.id);
      }

      switch (route.id) {
          case Global.Constants.FLASHSCREEN_ROUTE_ID:
              return (<FlashScreen navigator={navigator}/>);
          case Global.Constants.OPTION_REGISTER_LOGIN_ROUTE_ID:
              return (<OptionRegisterLogin navigator={navigator}/>);
          case Global.Constants.REGISTER_EMAIL_INPUT_ROUTE_ID:
              return (<RegisterEmailInput navigator={navigator}/>);
          case Global.Constants.REGISTER_NAME_INPUT_ROUTE_ID:
              return (<RegisterNameInput navigator={navigator}/>);
          case Global.Constants.REGISTER_PASSWORD_INPUT_ROUTE_ID:
              return (<RegisterPasswordInput navigator={navigator}/>);
          case Global.Constants.REGISTER_AVATAR_INPUT_ROUTE_ID:
              return (<RegisterAvatarInput navigator={navigator}/>);
          case Global.Constants.LOGIN_EMAIL_INPUT_ROUTE_ID:
              return (<LoginEmailInput navigator={navigator}/>);
          case Global.Constants.LOGIN_PASSWORD_INPUT_ROUTE_ID:
              return (<LoginPasswordInput navigator={navigator}/>);
          case Global.Constants.WELCOME_ROUTE_ID:
              return (<Welcome navigator={navigator}/>);
          case Global.Constants.SEARCH_INTEREST_ROUTE_ID:
              return (<SearchInterest navigator={navigator}/>);
          case Global.Constants.CONFIRM_SELECT_ROUTE_ID:
              return (<ConfirmSelect navigator={navigator}/>);
          case Global.Constants.SHOW_LIST_ROUTE_ID:
              return (<ShowList navigator={navigator}/>);
          case Global.Constants.HOME_INDEX_ROUTE_ID:
              return (<HomeIndex navigator={navigator}/>);
          default:
      }
  }
}

module.exports=RootView;
