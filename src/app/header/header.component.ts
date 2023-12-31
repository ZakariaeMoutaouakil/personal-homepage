import {Component, EventEmitter, Output} from '@angular/core';
import {ProgressBarService} from "../progress-bar/progress-bar.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private progressBarService : ProgressBarService) {
  }
  startProgressBar($event: MouseEvent) {
    console.log($event)
    this.progressBarService.clickEvent.next($event);
  }
}
