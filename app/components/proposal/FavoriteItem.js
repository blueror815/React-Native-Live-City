'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { COLOR, APP } from '../../constants';
import { Slider } from 'react-native-elements';
import ItemHeader from './ItemHeader';
import styles from './styles';

class FavoriteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
    this.onFavoriteSelected = this.onFavoriteSelected.bind(this);
  }

  onFavoriteSelected() {
    const { favorite } = this.props;
    this.setState({ isSelected: true });
    setTimeout(() => {
      this.props.addFavoriteItem(favorite);
      this.setState({ isSelected: false });
    }, 500);
  }

  render() {
    const { isSelected } = this.state;
    const { name, joins, city, image } = this.props.favorite;
    return (
      <View style={styles.itemContainer}>
        <Image resizeMode="contain" style={styles.photo} source={image} />
        <View style={styles.contentContainer}>
          {joins == null && <ItemHeader />}
          <Text style={styles.title}>
            {name}
          </Text>
          {joins != null &&
            <View style={styles.rowContainer}>
              <Image
                resizeMode="contain"
                style={styles.people}
                source={APP.ICON_PEOPLE}
              />
              <Text>
                {joins.count}
              </Text>
              <View style={styles.percentages}>
                <Text style={styles.label}>
                  {joins.percentage}%
                </Text>
                <Slider
                  minimumTrackTintColor={COLOR.GREEN}
                  thumbTintColor={COLOR.TRANSPARENT}
                  disabled
                  value={0.6}
                  style={styles.percentages}
                />
              </View>
            </View>}

          <View style={styles.footerContainer}>
            <Text style={{ color: COLOR.LIGHT_GREY }}>de</Text>
            <Text style={styles.city}>
              {city}
            </Text>
          </View>
        </View>
        <View style={styles.favoriteContainer}>
          <TouchableOpacity onPress={() => this.onFavoriteSelected()}>
            {joins != null
              ? <Image
                  style={styles.favorite}
                  source={
                    isSelected ? APP.ICON_FAVORITE_SELECTED : APP.ICON_FAVORITE
                  }
                />
              : <Image style={styles.favorite} source={APP.ICON_FAVORITE_2} />}
          </TouchableOpacity>
        </View>
        {isSelected && <View style={styles.overlay}>
            <Text style={styles.overlayText}>SEGUIDO!</Text>
        </View>}
      </View>
    );
  }
}

export default FavoriteItem;
