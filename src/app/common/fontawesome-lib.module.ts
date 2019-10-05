import { NgModule } from '@angular/core';

// import { library } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAsterisk, faBell as faSolidBell, faCircle, faCloud,
  faCog, faEnvelopeOpen, faHandPointLeft, faMobile, faMoon,
  faPlay, faSkating, faSkiing, faSkiingNordic,
  faSmileBeam as faSmileBeanSolid, faSmileWink as faSmileWinkSolid,
  faSnowboarding, faSpinner, faSquare, faStar, faSun,
  faSwimmer, faSync, faBan, faCamera
} from '@fortawesome/free-solid-svg-icons';
// import {faBell as faRegularBell, faSmileBeam, faSmileWink} from '@fortawesome/free-regular-svg-icons';
// import {fas} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontawesomeLibModule {
  constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas);
    library.addIcons(faSmileWinkSolid, faSmileBeanSolid,
      faEnvelopeOpen, faCloud,
      faMobile, faSquare, faSpinner, faCircle,
      faSync, faPlay, faSun, faMoon, faStar,
      faHandPointLeft, faAsterisk, faCog, faSkating,
      faSkiing, faSkiingNordic, faSnowboarding, faSwimmer,
      faSolidBell, faCamera, faBan);
  }
}
