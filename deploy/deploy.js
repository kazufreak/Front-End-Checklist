global.Promise = require('bluebird');
require('isomorphic-fetch');

const fs = require( 'fs' );
const Qiita = require( 'qiita-js' );

if ( "false" !== process.env.TRAVIS_PULL_REQUEST ) {
  console.log( 'Thanks for contribution. :)' );
  process.exit();
}

// set your token
Qiita.setToken( process.env.QIITA );
Qiita.setEndpoint( 'https://qiita.com' );

fs.readFile( __dirname + '/qiita.md', 'utf8', ( err, head ) => {
  fs.readFile( 'README.md', 'utf8', ( err, readme ) => {
    var contents = head + "\n---\n" + readme;
    contents = contents.replace( /<\!\-\-[\s\S]*?\-\->/g, '' );
    Qiita.Resources.Item.update_item( '8fff46c201bf9eaeba4a', {
      title: 'フロントエンドチェックリスト（日本語訳）',
      body: contents,
      private: false,
    } ).then( function( res ) {
      console.log( res );
    } )
  } );
} );
