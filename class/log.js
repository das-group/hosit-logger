/**
 * Single Log entry for MongoDB Collection logs
 */
class Log {
  /**
   * @param  {type} sessionid    SessionID (Database-ID of session)
   * @param  {type} timestamp    Timestamp of log entry (when was event conducted?)
   * @param  {type} event        Name of conducted event
   * @param  {type} value        Further description of conducted event
   * @param  {type} imagedata="" Imagedata of Screenshot (Base64 encoded)
   * @return {Log}              
   */
  constructor(sessionid, timestamp, event, value, imagedata=""){
    this.sessionid = sessionid;
    this.timestamp = new Date();
    this.event = event;
    this.value = value;
    this.imagedata = imagedata;
  }

}

module.exports = Log;
