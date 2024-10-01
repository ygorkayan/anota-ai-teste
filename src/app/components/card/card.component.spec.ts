import { CardComponent } from "./card.component";

describe("testing CardComponent", () => {
  it("getText should return the complete text", () => {
    const text = "short text";
    const card = new CardComponent();
    card.description = text;

    expect(card.getText()).toEqual(text);
  });

  it("getText should return a short text because of limit", () => {
    const text =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const card = new CardComponent();
    card.description = text;

    expect(card.getText()).not.toEqual(text);
  });

  it("getFlagName should return Paisagem when type is 1", () => {
    const card = new CardComponent();
    card.type = 1;

    expect(card.getFlagName()).toEqual("Paisagem");
  });

  it("getFlagName should return Flor when type is 2", () => {
    const card = new CardComponent();
    card.type = 2;

    expect(card.getFlagName()).toEqual("Flor");
  });

  it("getFlagName should return Pizza when type is 3", () => {
    const card = new CardComponent();
    card.type = 3;

    expect(card.getFlagName()).toEqual("Pizza");
  });

  it("getColor should return background-color: var(--blue-strong) when type is 1", () => {
    const card = new CardComponent();
    card.type = 1;

    expect(card.getColor()).toEqual("background-color: var(--blue-strong)");
  });

  it("getColor should return background-color: var(--red-strong) when type is 2", () => {
    const card = new CardComponent();
    card.type = 2;

    expect(card.getColor()).toEqual("background-color: var(--red-strong)");
  });

  it("getColor should return background-color: var(--mustard-strong) when type is 3", () => {
    const card = new CardComponent();
    card.type = 3;

    expect(card.getColor()).toEqual("background-color: var(--mustard-strong)");
  });
});
