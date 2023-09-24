import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example74',
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA61.png" />
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Observable</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text"><em>HttpClient.get()</em> returns an Observable of type <em>HttpResponse</em>, rather than just the JSON data contained in the body. Look at the following example:
    <pre class="notes-code-txt"><code [innerHTML]="code"></code></pre>
    <a href="https://angular.io/guide/http-request-data-from-server" target="_blank"
          >More information</a>
    </div>
  `,
  styles: [
  ]
})
export class Example74Component implements OnInit {

  code = `
    getConfigResponse(): Observable&#x3C;HttpResponse&#x3C;Config&#x3E;&#x3E; {
      return this.http.get&#x3C;Config&#x3E;(
        this.configUrl, { observe: &#x27;response&#x27; });
    }

    showConfigResponse() {
      this.getConfigResponse()
        // resp is of type HttpResponse&#x3C;Config&#x3E;
        .subscribe(resp =&#x3E; {
          // display its headers
          const keys = resp.headers.keys();
          this.headers = keys.map(key =&#x3E; &#x60;\${key}: \${resp.headers.get(key)}&#x60;);
    
          // access the body directly, which is typed as Config.
          this.config = { ...resp.body! };
        });
    }
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
