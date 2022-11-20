import recipeReducer from "./recipeReducer.js";


const rootReducer = Redux.combineReducers({recipes: recipeReducer})

export default rootReducer