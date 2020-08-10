import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() tabChanged = new EventEmitter<string>();
  onTabChange(tab: string): void {
    this.tabChanged.emit(tab);
  }
}
