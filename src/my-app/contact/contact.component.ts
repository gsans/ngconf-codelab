import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  styles: [`
    .ng-valid[required] {
      border: 2px solid #42A948; /* green */
    }

    .ng-invalid {
      border: 2px solid #a94442; /* red */
    }

    .alert {
      color: #a94442; /* red */
    }
  `],
  template: `
    <md-card>
      <md-card-content>
        <h1>Contact</h1>
        <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
          <p>
            <label>Email:</label>
            <input
               type="email" 
               [(ngModel)]="model.email" 
               ngControl="email" 
               #email="ngForm" 
               required>
          </p>
          <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
            Email is required
          </div>
          <p>
            <button 
              type="submit" 
              md-raised-button 
              color="primary" 
              [disabled]="!f.form.valid">Submit</button>
          </p>
        </form>
        <pre>this.model = {{ model | json }}</pre>
      </md-card-content>
    </md-card>
  `
})
export class Contact {
  model = {};

  ngOnInit() {
    console.log('hello `Contact` component');
  }

  onSubmit(value) {
    console.log(`Submitted: ${JSON.stringify(value)}`);
  }
}
