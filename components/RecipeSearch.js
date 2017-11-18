import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

let customData = require('../reducers/customData.json');

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
    },
});

/*
const propTypes = {
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};
*/

class RecipeSearch extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            ing: '', };

        this.handleChange = this.handleChange.bind(this);  
    }

    
    componentWillMount() {
          const url = 'http://www.recipepuppy.com/api/?q=milk';
       // const url = 'https://facebook.github.io/react-native/movies.json';
        /*
        fetch('./customData.json').then((res) => res.json()).then(json => {
            this.props.setRecipes(json.results); }).then((data) => { console.log('data', data);
            });
*/
        console.log(customData);
        
        fetch(url, {
            method: 'GET',
            headers: {
                        'Content-Type'  : 'application/json',
                        'Accept'        : 'application/json',
            }
          }).then(response => response.json())
            .then(json => {
              this.props.setRecipes(json.results);
          }).catch((error) => { 
              console.error(error.message);
          }); 
        }

    handleChange(event) {
        this.props.onChangeText({ ing: event.target.searchValue });
        console.log(this.state);
    }
    search() {
        let { ing } = this.state;
        const url = `http://www.recipepuppy.com/api/?q=${ing}`;
        console.log('state', this.state, 'url', url);

        fetch(url, {
          method: 'GET'
        }).then(response => response.json())
          .then(json => {
            this.props.setRecipes(json.results);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Toolbar
                    centerElement="Search for recipe"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Enter ingredients', }}
                        //onChangeText={event => this.setState({ ing: event.target.searchValue })}
                        onSearchChangeText={() => this.handleChange}
                        onSubmitEditing={() => this.search}
                    
                    //handleChange
                />
            </View>
        );
    }
}

//RecipeSearch.propTypes = propTypes;

export default connect(null, { setRecipes })(RecipeSearch);
