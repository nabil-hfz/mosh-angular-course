import { CoursesService } from './courses.service';
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
    courses;
    constructor(private service: CoursesService){
        this.courses = service.getCourse();
    }
    getTitle(): string {
        return this.title;
    }
}