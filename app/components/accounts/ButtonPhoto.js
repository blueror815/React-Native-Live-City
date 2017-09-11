'use strict';

import React, { Component } from 'react';

import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { APP, COLOR } from '../../constants';
import I18n from '../../utils/I18n';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class ButtonPhoto extends Component {

  selectAvatar = () => {
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { 
          uri: response.uri,
          name: response.fileName,
          type: response.type 
        };

        this.props.actions.onChangeAuthField('avatar', source);
      }
    });
  }

  render() {
    const { form } = this.props;
    return (
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback onPress={this.selectAvatar}>      
          <View style={styles.iconContainer}>
            {
              form.get('avatar') == null ?
                <Icon
                  size={40}
                  color={COLOR.WHITE}
                  name='add' />
              :
                <Image
                  style={styles.avatar} 
                  source={form.get('avatar')} 
                />
            }
          </View>
        </TouchableWithoutFeedback>
        <Text
          style={{
            color: COLOR.WHITE,
            fontSize: APP.DEFAULT_FONT_SIZE,
            textAlign: 'center',
            marginTop: 10
          }}
        >
          {I18n.t('buttonFooter.uploadPhoto')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
   alignItems: 'center',
   justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: COLOR.WHITE,
    opacity: 0.7
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59
  }
});

export default ButtonPhoto;
