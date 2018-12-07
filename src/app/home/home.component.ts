import { Component, OnInit } from '@angular/core';
import * as M from "node_modules/materialize-css/dist/js/materialize.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

   options = {
   }
    
  ngOnInit() {
      var elems = document.querySelectorAll('.slider');
      var instances = M.Slider.init(elems, this.options);
  }

}
