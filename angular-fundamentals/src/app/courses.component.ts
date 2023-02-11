import { Component } from '@angular/core';




@Component({
    selector: 'coursers',
    template: `<h4>{{ getTitle() }}</h4>
            <ul>
                    <li *ngFor="let course of courses"> 
                    {{ course }}
                    </li>
            </ul>
             
        `
})
export class CoursesComponent {
    title = " to Angular course";
    courses = ["course1", "course2", "course3"];

    getTitle(): string {
        return this.title;
    }
}