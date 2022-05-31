import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AppService} from "../../app.service";
import {loadUsers, loadUsersFail, loadUsersSuccess} from "../action/users.action";
import {map, mergeMap} from "rxjs/operators";
import {User} from "../../models/user.model";

@Injectable()
export class usersEffect {

  constructor(private actions$: Actions, private appService: AppService) {
  }

  loadUsers$ = createEffect(() => this.actions$.pipe(
      ofType(loadUsers), mergeMap(() => this.appService.getUsers().pipe(map((payload) => {
          if (payload) {
            return loadUsersSuccess({payload})
          } else {
            return loadUsersFail()
          }
        }
      )))
    )
  )
}
