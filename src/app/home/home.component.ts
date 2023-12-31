import {Component, OnInit, signal} from '@angular/core';
import {concatMap, delay, from, mergeMap, of} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  typingSpeed = 100;
  welcomeMessage = "Welcome to my homepage. It is still under construction. ☺️";
  message = signal<string>("");

  ngOnInit(): void {
    from(this.welcomeMessage.split(""))
      .pipe(
        mergeMap((alphabet) => from(alphabet)),
        concatMap(alphabet => of(alphabet)
          .pipe(delay(this.typingSpeed)))
      )
      .subscribe(alphabet => {
        this.message.update(oldMessage => oldMessage.concat("", alphabet))
      });
  }

}
