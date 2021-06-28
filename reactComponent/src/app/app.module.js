import { WFMModule } from "framework";
import { appComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { appHeader } from "./shared/app.header";
import { appHoverDirective } from "./shared/directives/hover.directive";
import {appMultiPipe} from './shared/pipes/multi-pipe'

class AppModule extends WFMModule{
   constructor(config){
      super(config)
   }
}
export const appModule = new AppModule({
   components:[
      appComponent,
      appHeader
   ],
   bootstrap: appComponent,
   routes: appRoutes,
   directives:[
      appHoverDirective
   ],
   pipes: [
      appMultiPipe
   ]
})