import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <sampleComponent></sampleComponent>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
