import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss'],
})
export class UserOptionsComponent  implements OnInit {
  @Input() text:string= '';
  @Input() icon:string= '';
  
  constructor() { }

  ngOnInit() {}

}
