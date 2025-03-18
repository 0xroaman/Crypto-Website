var index = 0;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Table = require('../pokergame/Table');
const Player = require('../pokergame/Player');

import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';

const rootElement = document.getElementById('root');
const cookieBannerRoot = document.getElementById('cookie-banner');
const loadingScreen = document.getElementById('loading-screen');