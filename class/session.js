/**
 * MongoDB-Entry für Collection sessions
 */
class Session {
  /**
   * @param  {string} ip         IP-Address of Identity
   * @param  {string} identity   Name of Identity
   * @param  {string} service    Service accessed by Identity
   * @param  {string} action     UserAction algorithm for services conducted
   * by identity
   * @param  {string} wsendpoint Websocket-Endpoint of browser session
   * @return {Session}
   */
  constructor(ip, identity, service, action, wsendpoint) {
    this.start = new Date();
    this.ip = ip;
    this.identity = identity;
    this.service = service;
    this.action = action;
    this.wsendpoint = wsendpoint;
    this.error = false;
  }
}

module.exports = Session;
