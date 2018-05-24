# netease-levelup

Increase your music number that listened in Netease Music, up to 300 songs per day.

Visit [https://music.163.com/user/level](https://music.163.com/user/level) to check your current level status.

Since one day in 2017, Netease adjusted the strategies of valid songs number you listened. Now you can't increase your level data though crazy api requests.

This script just simulate the API `/weapi/feedback/weblog` to post a fake request with valid listing time. However, each time between two requests must larger than listened time you provided. 

Have fun!
## Installation

```bash
$ npm install
```

## Usage

```bash
$ node index.js
```

