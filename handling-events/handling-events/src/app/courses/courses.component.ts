import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
  <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'red' : 'grey'">Cancel</button>
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> 
`,
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  isActive = false;
  email = "me@example.com"

  onSave($event : any){
    // Stop click bubbling
    $event.stopPropagation();
    console.log("Button was clicked ", $event)
  }

  onKeyUp1(email:any){
    // $event.target.value
    console.log("ENTER was pressed, email: ",email)
  }
  
  onKeyUp(){
    // $event.target.value
    console.log("ENTER was pressed, email: ",this.email)
  }
}
