import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
 
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Name',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>His Name Is Khalil</Text>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
