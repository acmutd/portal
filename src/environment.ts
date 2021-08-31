import * as functions from "firebase-functions"

let config = process.env
const deployedToFirebase = process.env.NODE_ENV === "production"
if (deployedToFirebase) {
  config = functions.config().env
}

export { config as env }