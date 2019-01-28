'use strict';

var express = require('express');
var http = require('http');
var app = module.exports = express();
var join = require('path').join
var config = require('./config');
var core = require('./common/core');

// Prettify HTML
app.locals.pretty = true

// FINALLY, use any error handlers
//���� �߻���, ���� ������ html �������� ����
//�������̶� �ϴ� �ּ�
//app.use(require('./areas/errors/not-found'))

var options = {};

app.use('/image', core(options));

module.exports = app