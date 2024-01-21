import {Component, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {concatMap, delay, from, mergeMap, of} from "rxjs";
import {Bodies} from '../../assets/matter.js';

const width = window.innerWidth;
const height = window.innerHeight;

// const engine = Engine.create();
// const {world} = engine;
// const render = Render.create({
//   element: document.body,
//   engine: engine,
//   options: {
//     wireframes: false,
//     width,
//     height,
//     background: 'rgb(0,0,0)'
//   }
// });


function createRandomObject(x, y, size) {
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      return Bodies.trapezoid(x, y, size, size, 1, {label: 'ball'});
    case 1:
      return Bodies.rectangle(x, y, size, size, {label: 'ball'});
    case 2:
      return Bodies.circle(x, y, size, {label: 'ball'});
    default:
      const numberOfEdges = Math.floor(Math.random() * 6) + 4;
      return Bodies.polygon(x, y, numberOfEdges, size, {label: 'ball'});
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  message = signal<string>("");
  private typingSpeed = 100;
  private welcomeMessage = "Welcome to my homepage. It is still under construction. ☺️";

  ngOnInit() {
    this.welcome();
  }

  welcome = (): void => {
    from(this.welcomeMessage.split(""))
      .pipe(
        mergeMap((alphabet) => from(alphabet)),
        concatMap(alphabet => of(alphabet)
          .pipe(delay(this.typingSpeed)))
      )
      .subscribe(alphabet => {
        this.message.update(oldMessage => oldMessage.concat("", alphabet))
      });
  };
}
