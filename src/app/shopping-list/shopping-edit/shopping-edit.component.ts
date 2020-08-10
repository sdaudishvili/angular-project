import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

class MyClass {
  constructor(public name: string, public id: number) {}
}

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() emitter = new EventEmitter<MyClass>();

  data = 'notsubmitted';

  onSubmit(): void {
    this.emitter.emit(new MyClass('sandro', 1));
  }

  constructor() {}

  ngOnInit(): void {}
}
