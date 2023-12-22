import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    initFlowbite()

  }
}
