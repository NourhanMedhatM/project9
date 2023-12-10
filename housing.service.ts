import { Injectable } from '@angular/core';
import { Housinglocated } from './housinglocated';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  getAllHousinglocated(): Housinglocated[] {
    return this.HousinglocatedList;
  }
  
  getHousinglocatedById(id: number): Housinglocated | undefined {
    return this.HousinglocatedList.find((Housinglocated: { id: number; }) => Housinglocated.id === id);
  }

  HousinglocatedList: Housinglocated [] = [
    {
      id: 1,
      name: "Medhat",
      city: "eg",
      add: "Helwan",
      age:57,
      useername:"MD",
    },
    {
      id: 2,
      name: "Nourhan",
      city: "eg",
      add: "Helwan",
      age:25,
      useername:"NM",
    },
    {
      id: 3,
      name: "Mariam",
      city: "eg",
      add: "maadi",
      age:18,
      useername:"MA",
    },
    {
      id: 4,
      name: "Ahmed",
      city: "eg",
      add: "maadi",
      age:27,
      useername:"AS",
    },
    {
      id: 5,
      name: "Toka",
      city: "eg",
      add: "maadi",
      age:22,
      useername:"TM",
    },
    {
      id: 6,
      name: "shosho",
      city: "eg",
      add: "maadi",
      age:47,
      useername:"sho",
    },
  ]


}
