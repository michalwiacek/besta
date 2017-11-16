import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
    state = { recipes: [] };

    componentWillMount() {
            axios.get('https://recipepuppy.com/api/?q=milk')
            .then(response => this.setState({ recipes: response.data }));
    }

    renderRecipes() {
        return this.state.recipes.map(recipe => 
        <RecipeDetail key={recipe.title} recipe={recipe} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderRecipes()}
            </ScrollView>
        );
    }
}

export default RecipeList;
