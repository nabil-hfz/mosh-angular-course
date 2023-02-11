import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <button class="btn btn-primary" [class.active]="isActive">Save</button>
  <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'red' : 'grey'">Cancel</button>

  `,
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  isActive = false;
}
