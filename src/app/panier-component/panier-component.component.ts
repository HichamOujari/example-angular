import { Component, OnInit } from '@angular/core';
import Cookies from "js-cookie";

@Component({
  selector: 'app-panier-component',
  templateUrl: './panier-component.component.html',
  styleUrls: ['./panier-component.component.css']
})
export class PanierComponentComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit(): void {
    if (Cookies.get('data')) this.data = JSON.parse(Cookies.get('data') as any);
  }

}
