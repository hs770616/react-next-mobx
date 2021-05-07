import { observable, action, computed } from "mobx";

class SearchStore {
  @observable
  search = "initVal";

  @observable
  num = 0;

  @action
  updateSearch = (val) => {
    this.search = val;
    console.log("updated! : ", this.search);
  };

  @action
  increaseNum() {
    this.num++;
    console.log("updated! : ", this.num);
  }

  @computed
  get computedSearch() {
    return "hello " + this.search;
  }

  @computed
  get doubleNum() {
    return 2 * this.num;
  }
}

export default new SearchStore();
