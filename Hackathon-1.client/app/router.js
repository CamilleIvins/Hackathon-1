import { AboutController } from "./controllers/AboutController.js";
import { CommentsController } from "./controllers/CommentsController.js";
import { FavouritesController } from "./controllers/FavouritesController.js";

import { HomeController } from "./controllers/HomeController.js";
import { OutingsController } from "./controllers/OutingsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [OutingsController, FavouritesController, CommentsController]

  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */