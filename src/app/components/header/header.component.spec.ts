import { HeaderComponent } from "./header.component";

describe("testing HeadeComponent", () => {
  it("title should exists in HeaderComponent", () => {
    const title = "title";
    const heade = new HeaderComponent();
    heade.title = title;

    expect(heade.title).toEqual(title);
  });

  it("subtitle should exists in HeaderComponent", () => {
    const subtitle = "subtitle";
    const heade = new HeaderComponent();
    heade.subtitle = subtitle;

    expect(heade.subtitle).toEqual(subtitle);
  });
});
