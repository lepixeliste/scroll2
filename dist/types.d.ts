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
export function scrollTo(element?: HTMLElement, params?: ScrollOptions): void;

//# sourceMappingURL=types.d.ts.map
