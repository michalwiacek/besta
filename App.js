import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Searchbar from './Searchbar';
import List from './List';

const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
      <View>
        <Searchbar /></View>
      <View>
        <List />
      </View></ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
