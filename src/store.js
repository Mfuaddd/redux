import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./redux/counterSlider"
import todoReducer from "./redux/todoSlider"
import calculatorReducer from './redux/calculatorSlider'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    calculator:calculatorReducer
  },
})