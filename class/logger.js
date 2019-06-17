var Functions = require("../include/functions");
var Session = require("./session");
var Log = require("./log");

/**
 * Class which creates logfiles inside the logging database.
 * NOTICE: Class is incomplete and has to be enhanced with
 * Database functionality (see the TODOs inside the code).
 */
class Logger {
  /**
   * @param  {string} ip         IP-Address of Identity
   * @param  {string} identity   Name of Identity
   * @param  {string} service    Service accessed by Identity
   * @param  {string} action     UserAction algorithm for services conducted
   * by identity
   * @param  {string} wsendpoint Websocket-Endpoint of browser session
   * @return {Logger}
   */
  constructor(ip, identity, service, action, wsendpoint) {
    // Bei Initialisierung neue Session erstellen
    this._session = new Session(ip, identity, service, action, wsendpoint);
    this.sessionid = null;
  }


  /**
   * Writes new Session into the DB
   *
   * @return {number}  Database id of the session
   * @category async
   */
  async init () {
    return new Promise(function(fulfill, reject) {
      // Enter session into DB
      var result = async function() {

        // TODO: Write your own function to insert the session into your
        // Database. The function should return an object which contains
        // the id of the created Database-entry.
        // e.g. let response = await restClient.insert("sessions", this._session);

        let response = {};          // Change this
        response.sessionid = 123;   // Change this

        // Fulfill promise and return Database entry id of session
        fulfill(response.sessionid);
      }();
    });
  }

  /**
   * Create new log entry
   *
   * @param  {string} event        Name of conducted event
   * @param  {string} value        Further description of conducted event
   * @param  {string} imagedata="" Imagedata of Screenshot (Base64 encoded)
   * @return {void}
   * @category async
   */
  async newLog(event, value, imagedata="") {
    // Create new Log entry
    var log = new Log(this.sessionid, new Date(), event, value, imagedata);
    //Functions.debugLog("new Log: "+JSON.stringify(log));

    // Insert entry into DB
    try {

      // TODO: Write your own function to insert the log into your
      // Database.
      // e.g. await restClient.insert("logs", log);

    }
    catch (e) {   // Abort on error
      Functions.debugLog(e.message);
      process.exit(1);
    }
  }

  /**
   * Sets current session to Error=true
   *
   * @return {void}
   * @category async
   */
  async setError() {
    Functions.debugLog("setError: "+this.sessionid);

    try {

      // TODO: Write your own function to update the Database-Entry for
      // the session and set the error value for it to "true"
      // e.g. await restClient.setFalse("sessions", this.sessionid);

    }
    catch (e) {   // Abort on error
      Functions.debugLog(e.message);
      process.exit(1);
    }
  }
}


module.exports = Logger;
