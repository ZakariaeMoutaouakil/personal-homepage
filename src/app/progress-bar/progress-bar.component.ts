import {Component, OnInit, signal} from '@angular/core';
import {concatMap, delay, from, mergeMap, of} from "rxjs";
import {ProgressBarService} from "./progress-bar.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnInit{
  counter = signal<number>(0);
  loadingSpeed = 30;

  constructor(private progressBarService : ProgressBarService) {
  }

  ngOnInit(): void {
        this.progressBarService.clickEvent.subscribe(
          value => {
            this.start();
            // console.log("reload")
          }
        )
    }

  start() {
    from([...Array(101).keys()])
      .pipe(
        concatMap(alphabet => of(alphabet)
          .pipe(delay(this.loadingSpeed)))
      )
      .subscribe(alphabet => {
        if (this.counter() < 100){
          this.counter.update(x => x + 1);
          // console.log(this.counter())
        } else {
          // console.log("Done");
          this.counter.set(0);
          // console.log(this.counter())
        }
      });
  }
}
