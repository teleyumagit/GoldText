import { NgModule } from '@angular/core';

import {
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,   
    MatInputModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule
} from '@angular/material'

@NgModule({
    imports:[      
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,    
        MatInputModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule
    ],
    exports:[      
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,       
        MatInputModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule
    ]
})

export class appMaterial{}