# AngularFundamentals

1- Create a new component using Angular CLI

`ng g c course` 

g:       Stands for generating. 
c:       Stands for component.
courser: Stands for component's name.


2- Interpolation: 

It's a special syntax to add a value from the component:

`<h4>{{ getTitle() }}</h4>`


3- Directives: 

It's a method that is used to manipulate the DOM. Should be always prefixed with *
For example:

`<li *ngFor="let course of courses">`


4- Dependency Injection: 

It comes for free with Angular. We have to do one more step which is in @NgModule inside `providers` param adding a reference to the desired Dependency.
For example:

`providers: [CoursesService]`


5- Create a new service using Angular CLI which will add annotation `@Injectable()` to this service. This is being added if the service depends on another dependency 

`ng g s email` 

g:       Stands for generating. 
s:       Stands for service.
email:   Stands for service's name.
