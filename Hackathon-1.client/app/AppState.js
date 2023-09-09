// @ts-nocheck
import { Favourite } from './models/Favourite.js'
import { Outing } from './models/Outing.js'
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {

  /** @type {Outing[]} */
  outings = []

  /** @type {Favourite[]} */
  favourites = []

  /** @type {import('./models/Outing.js').Outing|null} */
  activeOuting = []

  /** @type {Comment[]} */
  comments = []

  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})