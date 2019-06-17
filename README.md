# Database logger for the HOSIT framework

This repository includes the required classes to enable logging of the
[HOSIT] framework inside databases.


## Prerequisites

Clone the repository:

~~~
git clone https://github.com/das-th-koeln/hosit-logger
~~~

## What you need to do

The logging function itself is empty on purpose. **You have to include your
own database writing methods inside [class/logger.js](class/logger.js) to
make this work** (see the TODOs inside the code).

We used [MongoDB](https://www.mongodb.com/) on our own solution but the
logging functions can be applied to any other database system as well.

## Usage

1. Import module:
    ~~~js
    // Import module
    const HOSIT = require("hosit-browser")
    ~~~

2. Import logger class:
    ~~~js
    const Logger = require("./class/logger");
    ~~~

3. Now you can initiate a new Browser session log:
    ~~~js
    global.logger = new Logger(...);
    ~~~
    All functions will then be logged into the database, if the `global.logger`
    object exists.

## License

This project is licensed under the MIT License ([LICENSE](LICENSE)).


[HOSIT]: https://github.com/das-th-koeln/hosit-browser
