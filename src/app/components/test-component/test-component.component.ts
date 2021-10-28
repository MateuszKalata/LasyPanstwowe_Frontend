import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gmp-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  // TWORZENIE KOMPONENTU
  // ng generate component NAZWA_KOMPONENTU --skipTests

  constructor() {
  }

  public ngOnInit(): void {
  }

}
