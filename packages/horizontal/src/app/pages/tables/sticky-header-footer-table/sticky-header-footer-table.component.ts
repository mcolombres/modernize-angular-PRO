import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

import { AppCodeViewComponent } from 'src/app/components/code-view/code-view.component';

// snippets
import { STICKY_FOOTER_TABLE_HTML_SNIPPET, STICKY_HEADER_TABLE_HTML_SNIPPET } from './code/sticky-header-footer-table-html-snippet';
import { STICKY_FOOTER_TABLE_TS_SNIPPET, STICKY_HEADER_TABLE_TS_SNIPPET } from './code/sticky-header-footer-table-ts-snippet';

import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

export interface Transaction {
  item: string;
  img: string;
  cost: number;
}

export interface PeriodicElement {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical',
  },
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium',
  },
];
@Component({
  selector: 'app-sticky-header-footer-table',
  imports: [MatCardModule, MatTableModule, CommonModule, MatDividerModule,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,
    AppCodeViewComponent,
  ],
  templateUrl: './sticky-header-footer-table.component.html',
  styleUrls: ['./sticky-header-footer-table.component.scss'],
})
export class AppStickyHeaderFooterTableComponent implements OnInit {
  // 1 [Sticky Footer with Table]
  codeForStickyFooterTable = STICKY_FOOTER_TABLE_HTML_SNIPPET;
  codeForStickyFooterTableTs = STICKY_FOOTER_TABLE_TS_SNIPPET;

  // 2 [Sticky Header with Table]
  codeForStickyHeaderTable = STICKY_HEADER_TABLE_HTML_SNIPPET;
  codeForStickyHeaderTableTs = STICKY_HEADER_TABLE_TS_SNIPPET;

  // Fixed header
  displayedColumns1 = ['assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    { img: '/assets/images/products/s1.jpg', item: 'Beach ball', cost: 4 },
    { img: '/assets/images/products/s2.jpg', item: 'Towel', cost: 5 },
    { img: '/assets/images/products/s3.jpg', item: 'Frisbee', cost: 2 },
    { img: '/assets/images/products/s4.jpg', item: 'Sunscreen', cost: 4 },
    { img: '/assets/images/products/s5.jpg', item: 'Cooler', cost: 25 },
    { img: '/assets/images/products/s6.jpg', item: 'Swim suit', cost: 15 },
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost(): any {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
  constructor() {}

  ngOnInit(): void {}
}
