'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  ScrollView
} from 'react-native';

import _ from 'lodash';

import dummy_favorites from '../../dummy/favorites';

import defaultNavigator from '../../config/navigations/default';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';

import ButtonFooter from '../commons/ButtonFooter';
import FavoriteItem from './FavoriteItem';
import Logo from './Logo';

class Proposal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: dummy_favorites
    };
    this.addFavoriteItem = this.addFavoriteItem.bind(this);
  }

  componentDidMount() {
    this.props.navigator.setButtons({
      leftButtons: [
        {
          id: 'logo',
          icon: APP.LOGO
        }
      ]
    });
  }

  addFavoriteItem(data) {
    const self = this;
    let { favorites } = this.state;

    favorites = _.remove(favorites, favorite => {
      return favorite.id != data.id;
    });

    setTimeout(function() {
      self.setState({ favorites: favorites });
    }, 500);
  }

  renderItems() {
    const { favorites } = this.state;
    return _.map(favorites, (favorite, index) => {
      return (
        <FavoriteItem
          key={index}
          favorite={favorite}
          addFavoriteItem={this.addFavoriteItem}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <ScrollView style={styles.scrollContainer}>
          {this.renderItems()}
        </ScrollView>
        <ButtonFooter
          title="IR YA A LA HOME"
          backgroundColor={COLOR.GREEN}
          textColor={COLOR.WHITE}
          onPress={this.onNextState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    marginTop: 12,
    marginBottom: 40
  }
});

Proposal.navigatorStyle = defaultNavigator;

export default Proposal;
