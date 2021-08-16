import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { WorlHAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
  module['hot'].accept();
}

platformBrowserDynamic()
  .bootstrapModule(WorlHAppModule, { preserveWhitespaces: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Application started'))
  .catch(err => console.error(err));
