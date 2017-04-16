import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipe';


  onNavigate(feature: string) {
    console.log(feature, 'aaa');
      this.loadedFeature = feature;
      console.log(this.loadedFeature);
  }
}
