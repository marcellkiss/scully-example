# ScullyExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Installation diary

1.  Install @angular/cli, if you didn't yet: `npm install -g @angular/cli`
2.  Run the command `ng new scully-example` to create a new angular project
3.  Run `ng add @scullyio/init` to add scully to your project.

You can choose from 3 different route renderers:

- Scully platform server
- Puppeteer
- Playwright (beta)

If you choose Scully platform server, the command installs the following packages:

- @scullyio/init,
- @scullyio/scully
- @scullyio/ng-lib
- @scullyio/platform-server
- @angular/platform-server

Latest stable version is @2.1.26 at the time of writing this line, which depends on @angular/platform-server@^12, which is not compatible with the latest @angular/animations@~13.2.0, so the execution of the schematics fails, and the scully.projectName.config.ts file doesn't get generated in contrast to the official guide.

Choosing Puppeteer works fine. See tha changes in details:  
https://github.com/marcellkiss/scully-example/commit/6e37e31d60baf010365d6bc5eb43faf6aee85adf

4. Run `ng build` to build the project
5. Run `npx scully` to do SSG
   At this point, if everything went find, you should have a dist/static folder, next to your original build folder.
   In this static folder, all the pages should be there, statically rendered. You can test it by running eg. `http-server` in the `dist/static` folder or by simply running `npx scully serve`.

Tips:
you don't need to rebuild the app, if you change just the scully parts (including markdowns, etc.). If you change scully parts, you have to re-execute the `npx scully` command, or you can use it in watch mode to automatically pick up the changes: `npx scully -- --watch`

### Scully Process

Scully is designed to take an app, analyze it, and then write out all the static files needed to represent the known (states/pages/routes) of the application.

### Unhandled routes

Dynamic urls can't be statically rendered (eg. post/:postId) unless they are defined in the config file's `routes` parameter.
With the `extraRoutes` parameter you can define routes, which are not defined in the Angular routes.

### Creating a blog

**Steps:**

- `ng generate @scullyio/init:blog`  
  Here you can overview the changes:  
  https://github.com/marcellkiss/scully-example/commit/b6db95acbd5f3d634d6267a99a3ce36fc66ec037

You can use `ScullyRouterService` to get the available links, like this: `this.scullyRouterService.available$.links$.subscribe(links => {...})`  
Don't forget to use the --scanRoutes parameter if you change the routes (`npx scully --scanRoutes`). You can check the recognized routes also in the `src/assets/scully-routes.json` file.

If you change md files, like metadata, you have to run `npx scully` again, to generate new data into the `scully-routes.json` file.
This step is required to see up-to-date data during `ng serve`.

Generate a post by running `ng generate @scullyio/init:post --name="This is my post"`.

If published flag equals false, running `npx scully` will add an anonymous slug automatically, something like this: `___UNPUBLISHED___kao8mvda_pmldPr7aN7owPpStZiuDXFZ1ILfpcv5Z`. This results an anonymous, which you can share with your friend before publishing your post:  
`http://localhost:1668/blog/___UNPUBLISHED___l0yxualt_zz806SgS9ergjseQAvshTMCD2oRfJnKO`

A big drawback: you won't be able to view the posts just by running `ng serve`

### TODO:

- have a look at the plugins
- check route parameters
-

## Background

[Jamstack](https://jamstack.org/) is on the rise, SSG is here to stay.

Jamstack is the new standard architecture for the web. Using Git workflows and modern build tools, pre-rendered content is served to a CDN and made dynamic through APIs and serverless functions. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs, and CDNs.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
