import { AppComponent, Card } from "./app.component";

describe("testing AppComponent", () => {
  it("title should be 'Teste de Desenvolvedor Front-End - Anota Ai'", () => {
    const app = new AppComponent();

    expect(app.title).toEqual("Teste de Desenvolvedor Front-End - Anota Ai");
  });

  it("subtitle should be 'Ygor Kayan Joia de Araujo freitas'", () => {
    const app = new AppComponent();

    expect(app.subtitle).toEqual("Ygor Kayan Joia de Araujo freitas");
  });

  it("ngOnInit should call getCards", () => {
    const app = new AppComponent();
    let getCardsWasCalled = false;

    jest.spyOn(app, "getCards").mockImplementation(() => {
      getCardsWasCalled = true;
    });

    app.ngOnInit();

    expect(getCardsWasCalled).toBeTruthy();
  });

  it("onSearchChange should turn show into false all that doens't have the value passed in title", () => {
    const cards: Card[] = [
      { id: 1, title: "title", description: "description", img: "Link", type: "1", show: true },
      { id: 2, title: "mock", description: "this should be shown", img: "Link", type: "2", show: true },
    ];

    const app = new AppComponent();
    app.cards = [...cards];

    app.onSearchChange()("mock");

    cards[0].show = false;

    expect(app.cards).toEqual(cards);
  });

  it("onSearchChange should turn show into false all that doens't have the value passed in description", () => {
    const cards: Card[] = [
      { id: 1, title: "title", description: "mock", img: "Link", type: "1", show: true },
      { id: 2, title: "title", description: "description", img: "Link", type: "2", show: true },
    ];

    const app = new AppComponent();
    app.cards = [...cards];

    app.onSearchChange()("mock");

    cards[1].show = false;

    expect(app.cards).toEqual(cards);
  });

  it("deleteCard should delete by id passed", () => {
    let cards: Card[] = [
      { id: 1, title: "title", description: "mock", img: "Link", type: "1", show: true },
      { id: 2, title: "title", description: "description", img: "Link", type: "2", show: true },
    ];

    const app = new AppComponent();
    app.cards = [...cards];
    const id = 1;

    app.deleteCard(id)();
    cards = cards.filter((card) => card.id !== id);

    expect(app.cards).toEqual(cards);
  });

  it("getCardsToShow should return all cards that show is true", () => {
    let cards: Card[] = [
      { id: 1, title: "title", description: "mock", img: "Link", type: "1", show: true },
      { id: 2, title: "title", description: "description", img: "Link", type: "2", show: true },
    ];

    const app = new AppComponent();
    app.cards = [...cards];
    const id = 1;

    app.deleteCard(id)();
    cards = cards.filter((card) => card.id !== id);

    expect(app.getCardsToShow()).toEqual(cards);
  });

  it("normalizeText must turn all to lowerCase and remove the accents", () => {
    const app = new AppComponent();

    expect(app.normalizeText("áàâãÁÀÂÃ")).toEqual("aaaaaaaa")
  })
});
