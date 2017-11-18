import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
    },
});

const propTypes = {
 
};

class Searchbar extends Component {

    
    render() {
        return (
                <View style={styles.container}>
                    <Toolbar
                        leftElement="menu"
                        centerElement="Seach for recipe"
                        searchable={{
                            autoFocus: true,
                            placeholder: 'Search',
                             // method for passing input value to axios get params 
                        }}
                    />
                </View>
        );
    }
}

Searchbar.propTypes = propTypes;

export default Searchbar;
