import {Component, signal} from '@angular/core';
import {concatMap, delay, from, mergeMap, of} from "rxjs";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  counter = signal<number>(0);
  loadingSpeed = 30;

  start() {
    from([...Array(101).keys()])
      .pipe(
        concatMap(alphabet => of(alphabet)
          .pipe(delay(this.loadingSpeed)))
      )
      .subscribe(alphabet => {
        if (this.counter() < 100){
          this.counter.update(x => x + 1);
          console.log(this.counter())
        } else {
          console.log("Done");
          this.counter.set(0);
          console.log(this.counter())
        }
      });
  }
}
