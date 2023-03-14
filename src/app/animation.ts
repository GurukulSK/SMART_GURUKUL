import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    // each time the binding value changes
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(100, [animate('.8s', style({ opacity: 1 }))]),
      ],
      { optional: true }
    ),
  ]),
])
