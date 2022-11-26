import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cookies from "js-cookie";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(firstName: string, lastName: string, gender: string) {
    Cookies.set('data', JSON.stringify({ firstName: firstName, lastName: lastName, gender: gender }))
    this.router.navigate(['/panier']);
  }
}
