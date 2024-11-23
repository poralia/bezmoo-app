import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CashierEffects } from './cashier.effects';

describe('CashierEffects', () => {
  let actions$: Observable<any>;
  let effects: CashierEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CashierEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CashierEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
