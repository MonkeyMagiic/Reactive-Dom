import {fromEvent, Observable} from 'rxjs';
import {filter, repeat, takeWhile} from 'rxjs/operators';

export const createKonami = (target: HTMLElement | Document, ...combo: number[]): Observable<void> => {
  return fromEvent(target, 'keyup')
    .pipe(
      takeWhile((event: any, i: number) => combo[i % combo.length] === event.keyCode),
      filter((value: any, i: number) => (i % combo.length + 1) === combo.length),
      repeat(),
    );
}