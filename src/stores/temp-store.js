import React from "react";
import { makeObservable, observable, action } from "mobx";
class TempStore {
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
const tempStore = new TempStore();
export const TempStoreContext = React.createContext(tempStore);
export const useTempStore = () => React.useContext(TempStoreContext);
