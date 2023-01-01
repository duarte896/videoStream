import { combineReducers } from "redux"

import { profileReducer } from "./user/userReducer"
import { courseModalReducer } from "./courseModal/courseModalReducer"

const reducers = combineReducers({
  profile: profileReducer,
  courseModaleducer: courseModalReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>