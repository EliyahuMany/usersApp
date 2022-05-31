import {User} from "../../models/user.model";
import {createReducer, on} from "@ngrx/store";
import {loadUsersSuccess} from "../action/users.action";

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(initialState, on(loadUsersSuccess, (state, action) => {
  return {...state, ...action.payload};
}))
