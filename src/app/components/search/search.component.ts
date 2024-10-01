import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "search-component",
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  @Input() onChange: any = null;
  protected value = "";
  private timeoutRef: any = null;
  private timeOfDelayInMilliseconds = 300;

  setValue(delay: boolean) {
    if (!delay) {
      this.onChange(this.value);
      return;
    }

    clearTimeout(this.timeoutRef);
    this.timeoutRef = setTimeout(() => {
      this.onChange(this.value);
    }, this.timeOfDelayInMilliseconds);
  }

  inputChange(value?: Event) {
    const input = value?.target as HTMLInputElement;
    this.value = input?.value;
    this.setValue(true);
  }

  onClick() {
    this.setValue(false);
  }
}
