//导入express模块
const express = require('express');
const app = express();
//导入其他模块
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const dateFormat = require('dateformat');
const morgan = require('morgan');
const config = require('config');
//导入模板引擎
const template = require('art-template');
