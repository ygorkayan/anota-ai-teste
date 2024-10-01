import { SearchComponent } from "./search.component";

describe("testing SearchComponent", () => {
  it("onChange should been called immediately when setValue receive false", () => {
    const search = new SearchComponent();
    let onChangeCalled = false;
    search.onChange = () => (onChangeCalled = true);

    search.setValue(false);

    expect(onChangeCalled).toBeTruthy();
  });

  it("onChange should not been called immediately when setValue receive true", () => {
    const search = new SearchComponent();
    let onChangeCalled = false;
    search.onChange = () => (onChangeCalled = true);

    search.setValue(true);

    expect(onChangeCalled).not.toBeTruthy();
  });

  it("onChange should be called immediately when onClick is called", () => {
    const search = new SearchComponent();
    let onChangeCalled = false;
    search.onChange = () => (onChangeCalled = true);

    search.onClick();

    expect(onChangeCalled).toBeTruthy();
  });

  it("onChange should not been called immediately when inputChange is called", () => {
    const search = new SearchComponent();
    let onChangeCalled = false;
    search.onChange = () => (onChangeCalled = true);

    search.inputChange();

    expect(onChangeCalled).not.toBeTruthy();
  });
});
