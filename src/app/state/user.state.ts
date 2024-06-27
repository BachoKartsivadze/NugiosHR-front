import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

export class SetUser {
  static readonly type = '[User] Set';
  constructor(public payload: User | null) {}
}

export interface UserStateModel {
  user: User | null;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
  },
})
@Injectable()
export class UserState {
  @Selector()
  static getUser(state: UserStateModel): User | null {
    return state.user;
  }

  @Action(SetUser)
  setUser(ctx: StateContext<UserStateModel>, action: SetUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: action.payload,
    });
  }
}
