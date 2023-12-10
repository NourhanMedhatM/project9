import { Component, inject } from '@angular/core';
import { Housinglocated } from '../housinglocated';
import { CommonModule } from '@angular/common';
import { HosinglocationComponent } from '../hosinglocation/hosinglocation.component';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  Housinglocatedlist:Housinglocated[]=[];
  housingservice:HousingService= inject(HousingService)
  

}
