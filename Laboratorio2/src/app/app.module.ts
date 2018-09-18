import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { MatTableModule } from '@angular/material/table';
import { FormularioComponent } from './formulario/formulario.component';

import { RouterModule, Routes } from '@angular/router';
import { EdicionjugadorComponent } from './edicionjugador/edicionjugador.component';

const appRoutes: Routes = [
{ path: 'formulario', component: FormularioComponent},
{ path: 'rosteractual', component: RosterComponent},
{ path: 'edicionjugador', component: EdicionjugadorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    FormularioComponent,
    EdicionjugadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
