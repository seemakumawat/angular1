import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeComponent,DatabindingComponent],
  templateUrl: './app.component.html',
  styles: [".class1{color:white;border:0px dashed blue;padding:2%;background-color:black}"]
})
export class AppComponent {
  title = 'myproject';
}
