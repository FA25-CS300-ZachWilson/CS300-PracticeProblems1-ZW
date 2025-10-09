/**
 * Post Routes
 * 
 * Defines all the API endpoints for post-related activities.
 * 
 * Each route will be map an HTTP method and URL 
 * pattern/slug to a controller function
 * 
 * Router Pattern:
 * Routes will be mounted at '/api/posts' in server.js
 * So '/' here will become '/api/posts' in the full URL
 * 
 * EX: '/:id' here becomes '/api/posts/:id' in the full URL
 * 
 */

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');