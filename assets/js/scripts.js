import { Elements } from "./modules/elements.js"
import { Events } from "./modules/events.js"

const { play, stop, increase, decrease, piano, rain, waves, fire } = Elements()

Events({ play, stop, increase, decrease, piano, rain, waves, fire })
