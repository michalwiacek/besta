import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import rootReducer from './reducers/index';

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
    const store = createStore(rootReducer);
    store.subscribe(() => console.log('store', this.getState()));
    return (
      <Provider store={store}>
        <View>
          <ThemeProvider uiTheme={uiTheme} style={styles.container}>
            <RecipeSearch />
          </ThemeProvider>  
          <RecipeList />
        </View>
      </Provider>
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
