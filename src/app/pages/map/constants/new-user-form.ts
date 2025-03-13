import { inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  Validators,
  type FormGroup,
} from '@angular/forms';

type NewUserFormControl = {
  email: FormControl<string>;
  password: FormControl<string>;
  nickname: FormControl<string>;
  agree: FormControl<boolean>;
};

type User = {
  email: string;
  password: string;
  nickname: string;
  agree: boolean;
};

export function newUserForm(): FormGroup<NewUserFormControl> {
  const fb = inject(NonNullableFormBuilder);

  return fb.group({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.minLength(3), Validators.required],
      nonNullable: true,
    }),
    nickname: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    agree: new FormControl(false, {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
  });
}

export type NewUserFormGroup = ReturnType<typeof newUserForm>;

export type NewUserFormValue = ReturnType<NewUserFormGroup['getRawValue']>;
