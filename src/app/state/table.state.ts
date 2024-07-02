import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FilterTable } from '../actions/table.actions';
import { Employee } from '../models/employee.model';
import { Country } from '../models/country';

export interface TableStateModel {
  employees: Employee[];
  countries: Country[];
  searchTerm: string;
}

@State<TableStateModel>({
  name: 'table',
  defaults: {
    employees: [
      // Initial employee data
    ],
    countries: [
      // Initial country data
    ],
    searchTerm: '',
  },
})
export class TableState {
  @Selector()
  static filteredEmployees(state: TableStateModel): Employee[] {
    return state.employees.filter((employee) =>
      Object.values(employee).some((value) =>
        value.toString().toLowerCase().includes(state.searchTerm)
      )
    );
  }

  @Selector()
  static filteredCountries(state: TableStateModel): Country[] {
    return state.countries.filter((country) =>
      Object.values(country).some((value) =>
        value.toString().toLowerCase().includes(state.searchTerm)
      )
    );
  }

  @Action(FilterTable)
  filterTable(ctx: StateContext<TableStateModel>, action: FilterTable): void {
    const state = ctx.getState();
    ctx.patchState({
      searchTerm: action.searchTerm,
    });
  }
}
