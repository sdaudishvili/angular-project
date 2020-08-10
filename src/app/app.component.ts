import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  odd = [];
  even = [];
  curTab = 'recipes';
  handleEmits(e: number, type: string): void {
    this[type].push(e);
  }

  onTabChange(tab: string): void {
    this.curTab = tab;
  }
}
