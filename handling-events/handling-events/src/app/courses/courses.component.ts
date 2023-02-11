import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
  <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'red' : 'grey'">Cancel</button>
  <input (keyup.enter)="onKeyUp()"/> 
  `,
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  isActive = false;

  onSave($event : any){
    // Stop click bubbling
    $event.stopPropagation();
    console.log("Button was clicked ", $event)
  }

  onKeyUp(){
    console.log("ENTER was pressed ")
  }
}
