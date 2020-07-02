import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PartyhubSharedModule } from 'app/shared/shared.module';
import { PartyhubCoreModule } from 'app/core/core.module';
import { PartyhubAppRoutingModule } from './app-routing.module';
import { PartyhubHomeModule } from './home/home.module';
import { PartyhubEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PartyhubSharedModule,
    PartyhubCoreModule,
    PartyhubHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PartyhubEntityModule,
    PartyhubAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class PartyhubAppModule {}
