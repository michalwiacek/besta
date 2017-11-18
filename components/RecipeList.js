import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import RecipeDetail from './RecipeDetail';

class RecipeList extends Component {
    componentWillMount() {
        const ds = new ScrollView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.recipes);
    }

    renderRecipes(recipe) {
        return <RecipeDetail recipe={recipe} />;
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView renderRecipes={this.renderRecipes} />
        );
    }
}
const mapStateToProps = state => {
    return { recipes: state.recipes };
};

export default connect(mapStateToProps, null)(RecipeList);
