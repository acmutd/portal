import { env } from '../environment'
const auth0_config = {
    domain: env.AUTH0_DOMAIN as string,
    clientId: env.AUTH0_PORTAL_CLIENTID as string,
    audience: env.AUTH0_AUDIENCE as string,
}

export default auth0_config;