import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const overHeaders = [
    [
      {
        id: 'grupo_1_name',
        name: 'Grupo 1',
        colspan: 1,
        rowspan: 3
      },
      {
        id: 'grupo_1_description',
        name: 'Descripción',
        colspan: 2,
        rowspan: 1
      },
      {
        id: 'grupo_1_metadata',
        name: 'Metadata',
        colspan: 1,
        rowspan: 1
      }
    ],
    [
      {
        id: 'grupo_1_nameandweigth',
        name: 'Nombre y peso',
        colspan: 2,
        rowspan: 1      
      },
      {
        id: 'grupo_1_abrev',
        name: 'Abrev.',
        colspan: 1,
        rowspan: 1            
      }
    ]
]

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  headersList = overHeaders;
  dataSource = ELEMENT_DATA;

  getHeaders = (list: ReadonlyArray<any>) => list.map((obj: any) => obj.id );

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */