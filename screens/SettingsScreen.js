import React from 'react';
 import { ScrollView,Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dad & Mom Msgs',
  };

  render() {  
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (<ScrollView>
    {/* Go ahead and delete ExpoLinksView and replace it with your
       * content, we just wanted to provide you with some helpful links */}
    <Text>Important Dates</Text>
   </ScrollView>)
  }
}