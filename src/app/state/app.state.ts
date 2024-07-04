import { State, Action, StateContext, Selector } from '@ngxs/store';

export class SetFilter {
  static readonly type = '[App] SetFilter';
  constructor(public filter: string) {}
}

export interface AppStateModel {
  filter: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    filter: '',
  },
})
export class AppState {
  @Selector()
  static getFilter(state: AppStateModel): string {
    return state.filter;
  }

  @Action(SetFilter)
  setFilter(ctx: StateContext<AppStateModel>, action: SetFilter): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      filter: action.filter,
    });
  }
}
