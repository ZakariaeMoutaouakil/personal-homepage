import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  ngOnInit(): void {

  }
  counter = signal<number>(0);


  change() {
    this.counter.update(value => value+1);
  }
}
