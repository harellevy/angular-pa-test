import { Component, ElementRef, forwardRef, QueryList, ViewChildren } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

export const IP_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IpInputComponent),
  multi: true
};

@Component({
  selector: 'app-ip-input',
  providers: [IP_INPUT_VALUE_ACCESSOR],
  template: `
    <form [formGroup]="ipForm">
      <div class="input">
        <input type="text" placeholder="0"
               class="input-{{idx + 1}}" *ngFor="let ipSection of ipBase; let idx = index"
               #ipSec [formControlName]="ipSection" (keyup)="updateIp(idx)">
      </div>
    </form>
  `,
  styles: [`
    :host {
      vertical-align: middle;
    }

    .input {
      vertical-align: middle;
    }

    .input input {
      width: 24%;
      margin-right: 1%;
      display: inline-block;
      float: left;
      text-align: center;
      /*border: 1px solid #d8d8d8;*/
      border: none;
      box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.3);
      max-width: 70px;
    }
  `]
})
export class IpInputComponent implements ControlValueAccessor {
  ipForm: FormGroup;
  ip: string;
  ipBase: string[] = ['ipSection1', 'ipSection2', 'ipSection3', 'ipSection4']; // represent 4 sections of ip address.
  @ViewChildren('ipSec') ipSec: QueryList<ElementRef>;
  private onChange = (val: any) => { };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.ipForm = this.fb.group({
      ipSection1: ['', [Validators.max(255), Validators.min(0)]],
      ipSection2: ['', [Validators.max(255), Validators.min(0)]],
      ipSection3: ['', [Validators.max(255), Validators.min(0)]],
      ipSection4: ['', [Validators.max(255), Validators.min(0)]]
    });
  }

  /**
   * update ip value and validates position in ip
   * @param idx of element to update.
   *
   * updated the ip section and the ip next section if exceeded 255 max - and then focus on next input.
   */
  updateIp(idx) {
    const ip = [];
    // ips as ip section, check each ip section
    for (const ips of Object.keys(this.ipForm.value)) {
      // if input is valid
      if (parseInt(this.ipForm.value[ips], 10) >= 0 && parseInt(this.ipForm.value[ips], 10) < 256) {
        ip.push(this.ipForm.value[ips]);
        // else if input is bigger than max
      } else if (parseInt(this.ipForm.value[ips], 10) > 255) {
        const ipSectionValue = this.ipForm.value[ips];
        // push substring of length - 1 (i.e 256 will return 25, 2551 will return 255 etc.),
        // update next input, focus next input
        ip.push(ipSectionValue.substring(0, ipSectionValue.length - 1));
        this.ipForm.get(Object.keys(this.ipForm.value)[idx]).setValue(ipSectionValue.substring(0, ipSectionValue.length - 1));
        // if not last update next.
        if (Object.keys(this.ipForm.value)[idx + 1]) {
          this.ipForm.get(Object.keys(this.ipForm.value)[idx + 1]).setValue(ipSectionValue.substring(ipSectionValue.length - 1));
        }
        // focus next
        this._focusNextInput(idx);
      } else {
        ip.push(0);
      }
    }
    this.writeValue(ip.join('.'));
  }

  private _focusNextInput(idx): void {
    const nextElement = (this.ipSec as any)._results[idx].nativeElement.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }
  }
  writeValue(ip: any): void {
    if (ip != null) {
      this.onChange(ip);
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { }
}
