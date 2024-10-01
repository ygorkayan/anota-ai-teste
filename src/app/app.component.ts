import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { SearchComponent } from "./components/search/search.component";
import { CardComponent } from "./components/card/card.component";
import { HttpClient } from "@angular/common/http";
import { NgIf } from "@angular/common";

const URL = "https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [HeaderComponent, SearchComponent, CardComponent, NgIf],
})
export class AppComponent implements OnInit {
  constructor(private http?: HttpClient) {}

  title = "Teste de Desenvolvedor Front-End - Anota Ai";
  subtitle = "Ygor Kayan Joia de Araujo freitas";
  cards: Card[] = [];

  ngOnInit() {
    this.getCards();
  }

  onSearchChange() {
    return (value: string) => {
      const newCards = this.cards?.map((card) => {
        const title = this.normalizeText(card.title);
        const description = this.normalizeText(card.description);
        const term = this.normalizeText(value);
        const includes = title.includes(term) || description.includes(term);

        return { ...card, show: includes };
      });

      this.cards = newCards;
    };
  }

  normalizeText(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  deleteCard(id: number) {
    return () => {
      this.cards = this.cards.filter((card) => card.id !== id);
    };
  }

  getCardsToShow() {
    return this.cards.filter((card) => card.show);
  }

  getCards() {
    this.http?.get<Card[]>(URL).subscribe((cards) => {
      this.cards = cards.map((card) => ({ ...card, show: true }));
    });
  }
}

export type Card = {
  id: number;
  title: string;
  description: string;
  img: string;
  type: string;
  show: boolean;
};
