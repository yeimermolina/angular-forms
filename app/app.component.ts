import { Component} from '@angular/core';
import	{	NgForm	}	from	'@angular/forms';

@Component({
  selector: 'demo-form-sku',
template: `
  <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku</h2>
      <form #f="ngForm"
            (ngSubmit)="onSubmit(f)"
            class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
         <input	type="text"	name="email"	id="email"	ngModel>
        </div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>

    <demo-form-sku-builder></demo-form-sku-builder>
`,
providers:	[NgForm]
})
export class AppComponent  { name = 'Angular';
	onSubmit(form: NgForm): void {
		console.log('you submitted value:', form.value);
	}
 }
