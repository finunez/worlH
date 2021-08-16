import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WorlHSharedModule } from 'app/shared/shared.module';
import { WorlHCoreModule } from 'app/core/core.module';
import { WorlHAppRoutingModule } from './app-routing.module';
import { WorlHHomeModule } from './home/home.module';
import { WorlHEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WorlHSharedModule,
    WorlHCoreModule,
    WorlHHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WorlHEntityModule,
    WorlHAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class WorlHAppModule {}
