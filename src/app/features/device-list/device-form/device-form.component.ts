import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DEVICE_TYPE, IDevice } from '../device.types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {
  deviceForm: FormGroup;
  deviceTypes = DEVICE_TYPE;
  deviceTypesKeys = Object.keys(this.deviceTypes);
  @Output() create: EventEmitter<IDevice> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    const ipRegex = new RegExp (['^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
      '\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
      '\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)',
      '\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'].join(''));
    this.deviceForm = this.fb.group({
      ip: ['', [Validators.required, Validators
        .pattern(ipRegex)]],
      name: [null, Validators.required],
      type: [null, Validators.required]
    });

  }

  onSubmit() {
    this.create.emit(this.deviceForm.value);
  }

  ngOnInit() {
  }


}
