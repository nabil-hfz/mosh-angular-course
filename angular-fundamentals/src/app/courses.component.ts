import { Component } from '@angular/core';




@Component({
    selector: 'coursers',
    template: "<h4>{{ getTitle() }}</h4>"
})
export class CoursesComponent{
    title = " to Angular course";
    getTitle():string{
        return this.title;
    }
}