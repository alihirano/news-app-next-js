const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withPlugins([withCSS, withSourceMaps, withSass, withFonts, withImages], {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
