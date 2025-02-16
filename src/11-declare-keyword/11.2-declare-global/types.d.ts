interface Window {
  foo(): void;
  bar: number;
}

declare const API_BASE_URL: string;

declare const COLOR_SCHEME: {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
};

declare function myFunc(): void;

declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    };
  }

  export interface Event {
    x: number;
    y: number;
  }

  export interface Base extends Selectors {
    event: Event;
  }
}

declare var d3: D3.Base;
