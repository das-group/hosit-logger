## Classes

<dl>
<dt><a href="#Log">Log</a></dt>
<dd><p>Single Log entry for MongoDB Collection logs</p>
</dd>
<dt><a href="#Logger">Logger</a></dt>
<dd><p>Class which creates logfiles inside the logging database.
NOTICE: Class is incomplete and has to be enhanced with
Database functionality (see the TODOs inside the code).</p>
</dd>
<dt><a href="#Session">Session</a></dt>
<dd><p>MongoDB-Entry für Collection sessions</p>
</dd>
</dl>

<a name="Log"></a>

## Log
Single Log entry for MongoDB Collection logs

**Kind**: global class  
<a name="new_Log_new"></a>

### new Log(sessionid, timestamp, event, value, imagedata)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sessionid | <code>type</code> |  | SessionID (Database-ID of session) |
| timestamp | <code>type</code> |  | Timestamp of log entry (when was event conducted?) |
| event | <code>type</code> |  | Name of conducted event |
| value | <code>type</code> |  | Further description of conducted event |
| imagedata | <code>type</code> | <code>&quot;&quot;</code> | Imagedata of Screenshot (Base64 encoded) |

<a name="Logger"></a>

## Logger
Class which creates logfiles inside the logging database.
NOTICE: Class is incomplete and has to be enhanced with
Database functionality (see the TODOs inside the code).

**Kind**: global class  

* [Logger](#Logger)
    * [new Logger(ip, identity, service, action, wsendpoint)](#new_Logger_new)
    * [.init()](#Logger+init) ⇒ <code>number</code>
    * [.newLog(event, value, imagedata)](#Logger+newLog) ⇒ <code>void</code>
    * [.setError()](#Logger+setError) ⇒ <code>void</code>

<a name="new_Logger_new"></a>

### new Logger(ip, identity, service, action, wsendpoint)

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | IP-Address of Identity |
| identity | <code>string</code> | Name of Identity |
| service | <code>string</code> | Service accessed by Identity |
| action | <code>string</code> | UserAction algorithm for services conducted by identity |
| wsendpoint | <code>string</code> | Websocket-Endpoint of browser session |

<a name="Logger+init"></a>

### logger.init() ⇒ <code>number</code>
Writes new Session into the DB

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>number</code> - Database id of the session  
**Category**: async  
<a name="Logger+newLog"></a>

### logger.newLog(event, value, imagedata) ⇒ <code>void</code>
Create new log entry

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Category**: async  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>string</code> |  | Name of conducted event |
| value | <code>string</code> |  | Further description of conducted event |
| imagedata | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | Imagedata of Screenshot (Base64 encoded) |

<a name="Logger+setError"></a>

### logger.setError() ⇒ <code>void</code>
Sets current session to Error=true

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Category**: async  
<a name="Session"></a>

## Session
MongoDB-Entry für Collection sessions

**Kind**: global class  
<a name="new_Session_new"></a>

### new Session(ip, identity, service, action, wsendpoint)

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>string</code> | IP-Address of Identity |
| identity | <code>string</code> | Name of Identity |
| service | <code>string</code> | Service accessed by Identity |
| action | <code>string</code> | UserAction algorithm for services conducted by identity |
| wsendpoint | <code>string</code> | Websocket-Endpoint of browser session |

