'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import dummy_knowledges from '../../dummy/knowledges';

import _ from 'lodash';
import defaultNavigator from '../../config/navigations/default';
import { iconsMap, iconsLoaded } from '../../utils/AppIcons';
import { COLOR, APP } from '../../constants';
import I18n from '../../utils/I18n';
import Form from '../accounts/Form';
import Layout from './Layout';
import AtomLogo from './AtomLogo';
import Pill from './Pill';
import PillSelected from './PillSelected';
import styles from './style';

class Knowledge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      knowledges: dummy_knowledges,
      selected: []
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.addKnowledge = this.addKnowledge.bind(this);
    this.removeKnowledge = this.removeKnowledge.bind(this);
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'nextStep') {
        this.nextStep();
      }
    }
  }

  addKnowledge(item) {
    let { selected, knowledges } = this.state;
    knowledges = _.remove(knowledges, knowledge => {
      return knowledge.id != item.id;
    });
    this.setState({
      selected: selected.concat(item),
      knowledges: knowledges
    });
  }

  removeKnowledge(item) {
    let { selected, knowledges } = this.state;
    selected = _.remove(selected, selecte => {
      return selecte.id != item.id;
    });
    this.setState({
      selected: selected,
      knowledges: knowledges.concat(item)
    });
  }

  nextStep() {
    this.props.navigator.resetTo({
      screen: 'livecities.interest'
    });
  }

  componentDidMount() {
    this.props.navigator.setButtons({
      rightButtons: [
        {
          id: 'nextStep',
          icon: iconsMap['ios-arrow-forward']
        }
      ],
      leftButtons: [
        {
          id: 'logo',
          icon: APP.LOGO
        }
      ]
    });
  }

  render() {
    const { knowledges, selected } = this.state;
    const { form } = this.props;
    return (
      <Layout>
        <AtomLogo />
        <Form
          placeholder="¿Qué domina?"
          maxLength={30}
          onChange={value => {}}
        />
        <View style={styles.selectContainer}>
          <Text style={styles.selectLabel}>Algunos ejemplos</Text>
          <View style={styles.pillsContainer}>
            {_.map(knowledges, (knowledge, index) => {
              return (
                <Pill
                  key={index}
                  title={knowledge.name}
                  item={knowledge}
                  addKnowledge={this.addKnowledge}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.pillSelectedContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: 'center' }}
          >
            <Image
              style={styles.image}
              source={
                form.get('avatar') != null
                  ? form.get('avatar')
                  : APP.ICON_AVATAR
              }
            />
            {_.map(selected, (item, index) => {
              return (
                <PillSelected
                  key={index}
                  title={item.name}
                  item={item}
                  removeKnowledge={this.removeKnowledge}
                />
              );
            })}
          </ScrollView>
          <TouchableWithoutFeedback onPress={() => this.nextStep()}>
            <View style={styles.buttonContainer}>
              <Text style={styles.ok}>OK</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Layout>
    );
  }
}

Knowledge.navigatorStyle = defaultNavigator;

export default Knowledge;
