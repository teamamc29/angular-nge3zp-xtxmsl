import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { SidenavserviceService } from '../sidenavservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  sidenavItems: any[] = [];
  error: string = '';
  expandedIndex: number | null = null; // Track the expanded submenu index
  submenuItems: any[] = [
    { name: 'Submenu Item 1', route: '/submenu1' },
    { name: 'Submenu Item 2', route: '/submenu2' },
  ];

  constructor(private sidenavService: SidenavserviceService) {}

  ngOnInit(): void {
    this.sidenavService.getSidenavItems().subscribe(
      (data) => {
        // Adjust data format according to the API response structure
        this.sidenavItems = data.map((user) => ({
          name: user.name,
          icon: 'person',
          route: `/user/${user.id}`,
          hasSubmenu: true, // Example to show submenu for each user
        }));
      },
      (error) => {
        this.error = error;
      }
    );
  }

  toggleSubmenu(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
