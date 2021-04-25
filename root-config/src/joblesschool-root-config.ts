import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";

const routesConfig = document.querySelector(
  "#single-spa-layout"
) as HTMLTemplateElement;
const routes = constructRoutes(routesConfig);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
