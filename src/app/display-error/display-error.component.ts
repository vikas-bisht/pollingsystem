import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.css']
})
export class DisplayErrorComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
