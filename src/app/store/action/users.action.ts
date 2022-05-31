import {createAction, props} from '@ngrx/store';
import {User} from "../../models/user.model";

export const loadUsers = createAction(
  '[USERS] load users from API'
)

export const loadUsersSuccess = createAction(
  '[USERS] load users from API Success',
  props<{ payload: any }>()
)

export const loadUsersFail = createAction(
  '[USERS] load users from API Fail'
)


