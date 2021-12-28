import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '../models';

export function listAnimation(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delayEnter, delayLeave, duration, timing } = option;
  return trigger(name ?? 'listAnimation', [
    transition(
      ':enter',
      [
        query(
          '*',
          [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            stagger(
              100,
              group([animate('{{duration}}ms {{delayEnter}}ms {{timing}}')])
            ),
          ],
          { optional: true }
        ),
      ],
      {
        params: { delayEnter, timing, duration },
      }
    ),

    transition(
      ':leave',
      [
        // each time the binding value changes
        query(
          '*',
          [
            animateChild(),
            stagger(
              100,
              group([
                animate(
                  '{{duration}}ms {{delayLeave}}ms {{timing}}',
                  style({ opacity: 0, transform: 'translateY(100%)' })
                ),
              ])
            ),
          ],
          {
            optional: true,
          }
        ),
      ],
      {
        params: { delayLeave, timing, duration },
      }
    ),
  ]);
}
