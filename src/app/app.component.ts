import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`input[type=text]{
    width: 250px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: blue;
}
`]
})

/*
//inline

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center;font-size:10mm;color:indigo">
  Marvellous Infosystems<br>
  <input type="text">
</div>`,
  styles: ['./app.component.css']
})

*/
export class AppComponent {
  title = 'Marvellous Infosystems';
}
