import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Show message in a dialog box
   *
   * @param {string} message
   */
  showMessage(message: string) {

    window.alert(message);
  }

}
