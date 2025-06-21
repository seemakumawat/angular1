import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  course:string="MCA";
  name:string="Seema kumawat";
  rollno:number=24;
  semester:number=1;
  sn = signal("signal is on");

  showalert(){
    alert("Data submitted successfully!");
  }

}
