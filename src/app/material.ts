import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkTableModule} from '@angular/cdk/table';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,  MatFormFieldModule,  MatCardModule, MatGridListModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule,  MatFormFieldModule,  MatCardModule, MatGridListModule, MatTableModule ],
})
export class MaterialModule { }
