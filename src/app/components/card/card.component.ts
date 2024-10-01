import { Component, Input } from "@angular/core";
import { Close } from "./close/close.component";

@Component({
  selector: "card-component",
  standalone: true,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  imports: [Close]
})
export class CardComponent {
  private limitOfTextInCharacter = 200;

  @Input() srcImage: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() type: string | number = 0;
  @Input() handlerDelete: () => void = () => null;

  getText() {
    if (this.description.length < this.limitOfTextInCharacter) return this.description;
    return `${this.description.slice(0, this.limitOfTextInCharacter)}...`;
  }

  getFlagName() {
    const typeNumber: number = Number(this.type);
    const flags = ["Paisagem", "Flor", "Pizza"];

    return flags[typeNumber - 1] ?? flags[0];
  }

  getColor() {
    const typeNumber: number = Number(this.type);
    const colors = [
      "background-color: var(--blue-strong)",
      "background-color: var(--red-strong)",
      "background-color: var(--mustard-strong)",
    ];

    return colors[typeNumber - 1] ?? colors[0];
  }
}
