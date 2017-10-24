global.Promise = require('bluebird');
require('isomorphic-fetch');

const fs = require( 'fs' );
const Qiita = require( 'qiita-js' );
const moment = require( 'moment-timezone' );

if ( "false" !== process.env.TRAVIS_PULL_REQUEST ) {
  console.log( 'Thanks for contribution. :)' );
  process.exit();
}

// set your token
Qiita.setToken( process.env.QIITA_TOKEN );
Qiita.setEndpoint( 'https://qiita.com' );

fs.readFile( __dirname + '/qiita.md', 'utf8', ( err, head ) => {
  const now = moment().tz( 'Asia/Tokyo' ).format( 'YYYY-MM-DD HH:mm:ssZ' );
  head = head.replace( "__LAST_UPDATE__", now );
  fs.readFile( 'README.md', 'utf8', ( err, readme ) => {
    var contents = head + "\n" + readme;
    contents = contents.replace( /<\!\-\-[\s\S]*?\-\->/g, '' );
    Qiita.Resources.Item.update_item( process.env.QIITA_POST_ID, {
      title: process.env.QIITA_POST_TITLE,
      body: contents,
      private: false,
    } ).then( function( res ) {
      console.log( res );
    } )
  } );
} );
