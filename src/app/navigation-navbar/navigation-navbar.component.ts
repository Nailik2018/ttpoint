import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-navbar',
  templateUrl: './navigation-navbar.component.html',
  styleUrls: ['./navigation-navbar.component.scss']
})
export class NavigationNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {

    let navbarID = 'navbarText';
    let oldClassName = 'collapse';
    let newClassName = 'in';

    // Element zwischenspeichern
    let navbarElement = document.getElementById(navbarID);

    if (navbarElement.classList.contains(newClassName)) {
      navbarElement.classList.add(oldClassName);
      navbarElement.classList.remove(newClassName);
    } else {
      navbarElement.classList.add(newClassName);
      navbarElement.classList.remove(oldClassName);
    }
  }
}
