import React from "react";
import { makeObservable, observable, action } from "mobx";
class NewStore {
  search = "";
  constructor() {
    makeObservable(this, {
      search: observable,
      setSearch: action,
    });
  }
  setSearch = (input) => {
    this.search = input;
  };
  get computedSearch() {
    return "hello " + this.search;
  }
}
const newStore = new NewStore();
export const NewStoreContext = React.createContext(newStore);
export const useNewStore = () => React.useContext(NewStoreContext);
