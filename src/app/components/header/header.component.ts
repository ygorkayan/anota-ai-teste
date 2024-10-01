import { Component, Input } from "@angular/core";

@Component({
  selector: "header-component",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  @Input() title = "";
  @Input() subtitle = "";
}
