// unit tests for env file
import { env } from './environment'
describe("env", () => {
  it("should have an auth0 domain", () => {
    expect(env.AUTH0_DOMAIN).toBeDefined();
  });
  it("should have an auth0 clientID", () => {
    expect(env.AUTH0_CLIENTID).toBeDefined();
  });
  it("should have an auth0 audience", () => {
    expect(env.AUTH0_AUDIENCE).toBeDefined();
  });
});

export const check = "hello";