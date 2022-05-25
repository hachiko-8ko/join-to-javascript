// Importing all the ichigo types is just more than I want to do. Is there a way to bundle .d.ts files into one?
// I will need to find a way to do this.
declare var mi5: any;

export const PageRouter = mi5.router.PageRouter;
export const BoundComponent = mi5.component.BoundComponent as new(vm: any, options?: any) => any;
export const Component = mi5.component.Component as new(options?: any) => any;

export const ObservableProxy = mi5.observable.ObservableProxy;

export const createElement = mi5.html.createElement;
export const escapeHtml = mi5.html.escapeHtml;
export const paragraph = mi5.html.paragraph;
export const span = mi5.html.span;
