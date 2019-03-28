import { AbstractControl } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { map, debounceTime, first, switchMap } from 'rxjs/operators';

// import { AbstractControl } from '@angular/forms';
// import { ApiService } from '@services/api.service';
// import { first } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

// export class CheckEmailValidator {
//   static createValidator() {
//     return (control: AbstractControl, api: ApiService) => {
//       console.log(control.value);
//       // const data = {
//       //   email: control.value
//       // };


//       // return api.get('(/emailvalidations/registers', {...data})
//       //   .pipe(
//       //     map(
//       //     res => {
//       //       console.log(res);
//       //     },
//       //     err => {
//       //       console.log(err);
//       //     })
//       //   );
//     };
//   }
// }


export function CheckEmailValidator(api) {
  return (control: AbstractControl) => {
    if (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i.test(control.value)) {
      const data = {
        email: control.value
      };

      return control.valueChanges.pipe(
        debounceTime(1000),
        switchMap(() => api.post('/emailvalidations/registers', { ...data })),
        map(
          (value) => {
            console.log(value);
          }
        )
      );
      // console.log(api.post('/emailvalidations/registers', { ...data }));
      // return api.post('/emailvalidations/registers', {...data})
      // .pipe(
      //     debounceTime(10000),
      //     map(email => email)
      //     )
      //     .subscribe(
      //       res => {
      //       console.log(res);
      //       return res.status === 200 ? null : { emailTaken: true };
      //     }, err => {
      //       console.log(err);
      //     });

    } else {
      return;
    }
  };
}
