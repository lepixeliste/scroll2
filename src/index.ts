/**
 * A lightweight smooth scroll module
 *
 * @version 1.0.0
 * @author Charlie LEDUC <contact@pixeliste.fr>
 */

const _SCROLLTO_DURATION_ = 500;

export enum EasingFunc {
  Linear = "linear",
  EaseInQuad = "easeInQuad",
  EaseOutQuad = "easeOutQuad",
  EaseInOutQuad = "easeInOutQuad",
  EaseInCubic = "easeInCubic",
  EaseOutCubic = "easeOutCubic",
  EaseInOutCubic = "easeInOutCubic",
  EaseInQuart = "easeInQuart",
  EaseOutQuart = "easeOutQuart",
  EaseInOutQuart = "easeInOutQuart",
  EaseInQuint = "easeInQuint",
  EaseOutQuint = "easeOutQuint",
  EaseInOutQuint = "easeInOutQuint"
}

export interface ScrollOptions {
  duration?: number;
  offset?: number;
  easing?: EasingFunc | ((t: number) => number);
}

function getEasing(
  fn: EasingFunc | ((t: number) => number)
): (t: number) => number {
  if (typeof fn === "function") {
    return fn;
  }

  switch (fn) {
    case EasingFunc.Linear: {
      // no easing, no acceleration
      return (t: number): number => {
        return t;
      };
    }
    case EasingFunc.EaseInQuad: {
      // accelerating from zero velocity
      return (t: number): number => {
        return t * t;
      };
    }
    case EasingFunc.EaseOutQuad: {
      // decelerating to zero velocity
      return (t: number): number => {
        return t * (2 - t);
      };
    }
    case EasingFunc.EaseInOutQuad: {
      // acceleration until halfway, then deceleration
      return (t: number): number => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
    }
    case EasingFunc.EaseInCubic: {
      // accelerating from zero velocity
      return (t: number): number => {
        return t * t * t;
      };
    }
    case EasingFunc.EaseOutCubic: {
      // decelerating to zero velocity
      return (t: number): number => {
        return --t * t * t + 1;
      };
    }
    case EasingFunc.EaseInOutCubic: {
      // acceleration until halfway, then deceleration
      return (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
    }
    case EasingFunc.EaseInQuart: {
      // accelerating from zero velocity
      return (t: number): number => {
        return t * t * t * t;
      };
    }
    case EasingFunc.EaseOutQuart: {
      // decelerating to zero velocity
      return (t: number): number => {
        return 1 - --t * t * t * t;
      };
    }
    case EasingFunc.EaseInOutQuart: {
      // acceleration until halfway, then deceleration
      return (t: number): number => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      };
    }
    case EasingFunc.EaseInQuint: {
      // accelerating from zero velocity
      return (t: number): number => {
        return t * t * t * t * t;
      };
    }
    case EasingFunc.EaseOutQuint: {
      // decelerating to zero velocity
      return (t: number): number => {
        return 1 + --t * t * t * t * t;
      };
    }
    case EasingFunc.EaseInOutQuint: {
      // acceleration until halfway, then deceleration
      return (t: number): number => {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      };
    }
    default: {
      // no easing, no acceleration
      return (t: number): number => {
        return t;
      };
    }
  }
}

export function scrollTo(element?: HTMLElement, params?: ScrollOptions) {
  if (!element || typeof element.getBoundingClientRect !== "function") return;

  const offset = params?.offset ?? 0;
  const duration = params?.duration ?? _SCROLLTO_DURATION_;
  const easingFn = getEasing(params?.easing ?? EasingFunc.EaseInOutQuad);

  const sy = window.scrollY;
  const elementY = sy + (element.getBoundingClientRect().top - offset);

  const targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;
  const diff = targetY - sy;
  let start: number;

  if (!diff) return;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = easingFn(Math.min(time / duration, 1));

    window.scrollTo(0, sy + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
