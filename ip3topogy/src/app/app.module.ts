import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './components/menubar/menubar.component';
import { D3treeComponent } from './components/import/d3tree/d3tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { ShemaComponent } from './components/shema/shema.component';
import { LmenuComponent } from './components/lmenu/lmenu/lmenu.component';
import {MatIconModule} from '@angular/material/icon';
import { BankelementsComponent } from './bankelements/components/bankelements/bankelements.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    D3treeComponent,
    ShemaComponent,
    LmenuComponent,
    BankelementsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    FormsModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
