import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { DeviceDetailsModule } from './features/device-details/device-details.module';
import { DevicePageModule } from './features/device-page/device-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { activeDeviceReducer, reducer } from './reducers/device.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreDevtoolsModule,
    BrowserModule,
    AppRoutingModule,
    DeviceDetailsModule,
    DevicePageModule,
    StoreModule.forRoot({
      devices: reducer,
      activeDevice: activeDeviceReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
