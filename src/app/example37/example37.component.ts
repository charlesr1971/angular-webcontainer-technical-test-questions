import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpRequest,
} from "@angular/common/http";
import { EMPTY, Observable, Subscription, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

interface Weather {
  id: number;
  name: string;
  temp: number;
  humidity: number;
  precipitation: number;
}

@Component({
  selector: "app-example37",
  template: `
    <div class="item-header-1">Question</div>
    <img class="question-image" src="./assets/images/questions/qA22.png" />
    <div class="item-header-2">Implementation</div>
    <div class="item-header-2-content">
      <pre class="code-txt">
<code [innerHTML]="code"></code>
</pre>
    </div>
    <div class="item-header-3">Answer</div>
    <div class="item-content item-text">Answer 1 || Answer 3</div>
    <div class="item-header-4">Notes</div>
    <div class="item-content item-text">
      Please look in the console for <em>this.subscription2</em> and
      <em>this.subscription4</em>. These XHR requests are successful and
      represent <em>answer 2</em> and <em>answer 4</em>, respectively.
    </div>
  `,
  styles: [],
})
export class Example37Component implements OnInit {
  restApiUrl =
    "https://community.establishmindfulness.com/assets/cfm/rest/api/v1";
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  code = `const headers = new HttpHeaders( { 'Authorization' : this.token } ); 
// answer 1 
this.httpClient.get(this.configUrl, headers); 
// answer 3 
this.httpClient.get(this.configUrl, new HttpHeaders( { 'Authorization ': this.token } ) );`;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.subscription2 = this.readData2("", 1).subscribe(
        (data: any) => {
          console.log(
            "Example37Component: ngOnInit(): this.subscription2: data: ",
            data,
          );
        },
        (err) =>
          console.log(
            "Example37Component: ngOnInit(): this.subscription2: HTTP Error",
          ),
        () =>
          console.log(
            "Example37Component: ngOnInit(): this.subscription2: HTTP request completed.",
          ),
      );
      this.subscription4 = this.readData4("", 1).subscribe(
        (data: any) => {
          console.log(
            "Example37Component: ngOnInit(): this.subscription4: data: ",
            data,
          );
        },
        (err) =>
          console.log(
            "Example37Component: ngOnInit(): this.subscription4: HTTP Error",
          ),
        () =>
          console.log(
            "Example37Component: ngOnInit(): this.subscription4: HTTP request completed.",
          ),
      );
    });
  }

  /* readData1(term: string = "", page: number = 1): Observable<any> {
    const headers = new HttpHeaders({ term: term || "" });
    return this.httpClient.get(this.restApiUrl + "/search/" + page, headers );
  } */

  readData2(term: string = "", page: number = 1): Observable<any> {
    const headers = new HttpHeaders({ term: term || "" });
    return this.httpClient.get(this.restApiUrl + "/search/" + page, {
      headers,
    });
  }

  /* readData3(term: string = "", page: number = 1): Observable<any> {
    return this.httpClient.get(this.restApiUrl + "/search/" + page, new HttpHeaders({ term: term || "" }));
  } */

  readData4(term: string = "", page: number = 1): Observable<any> {
    return this.httpClient.get(this.restApiUrl + "/search/" + page, {
      headers: new HttpHeaders({ term: term || "" }),
    });
  }
}
