// @ts-ignore
import singleSpaHtml from "single-spa-html";
import { pageContent } from "./Root";

const htmlLifecycles = singleSpaHtml({
  template: `<x-my-web-component>${pageContent}</x-my-web-component>`,
});
export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;
