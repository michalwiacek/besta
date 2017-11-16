import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import Searchbar from './components/Searchbar';
import RecipeList from './components/RecipeList';

const uiTheme = {
  palette: {
      primaryColor: COLOR.blueGrey500,
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
      <ThemeProvider uiTheme={uiTheme} style={styles.container}>
        <View>
          <Searchbar />
        </View>
        <View>
          <RecipeList />
        </View>
      </ThemeProvider>
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
