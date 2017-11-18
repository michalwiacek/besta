import { combineReducers } from 'redux';
import { SET_RECIPES } from '../actions';
import RecipeReducer from './RecipeReducer';

/* function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            consol.log('action!');
            return action.items;
        default:
            return state;
    }
} */

const rootReducer = combineReducers({ 
    recipes: RecipeReducer
 });

export default rootReducer;
