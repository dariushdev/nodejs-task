## Express JS app

Install dependencies: `npm install`
Start server: `node app.js`

Usage: `http://YOUR_IP:3000/api/getPriceHistory/{startDate}/{endDate}`

To change rate limit, allowed IP address and rate limit time, open **config/config.js** and change following lines:

**ALLOWED_IP** - add IP or IP's that could use API endpoint. (array)  
**RATE_LIMIT** - number of API calls per given period of time.  
  
## npm packages
**compression** - decreases the downloadable amount of data that's served to users.  
**express-rate-limit** - rate limit middleware  
**express-validator** - startDate and endDate validation  
**node-fetch** - data fetch from coinDesk API  
**nodemon** - node.js auto reloading when file changes  
**eslint** - analyzes and finds problems in code (I'm using Google JS style guide config) 