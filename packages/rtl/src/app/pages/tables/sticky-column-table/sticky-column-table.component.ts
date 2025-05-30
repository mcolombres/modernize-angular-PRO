import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AppCodeViewComponent } from 'src/app/components/code-view/code-view.component';

// snippets
import { STICKY_COLUMN_TABLE_HTML_SNIPPET } from './code/sticky-column-table-html-snippet';
import { STICKY_COLUMN_TABLE_TS_SNIPPET } from './code/sticky-column-table-ts-snippet';

import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

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
    id: 5,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low',
  },
  {
    id: 6,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium',
  },
  {
    id: 7,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high',
  },
  {
    id: 8,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical',
  },
];

@Component({
  selector: 'app-sticky-column-table',
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatDividerModule,
    Highlight,
    HighlightAuto,
    HighlightLineNumbers,
    AppCodeViewComponent,
  ],
  templateUrl: './sticky-column-table.component.html',
  styleUrls: ['./sticky-column-table.component.scss'],
})
export class AppStickyColumnTableComponent implements OnInit {
  // 1 [Sticky Column with Table]
  codeForStickyColumnTable = STICKY_COLUMN_TABLE_HTML_SNIPPET;
  codeForStickyColumnTableTs = STICKY_COLUMN_TABLE_TS_SNIPPET;

  displayedColumns = [
    'assigned',
    'name',
    'priority',
    'budget',
    'priority',
    'name',
    'budget',
    'name',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
