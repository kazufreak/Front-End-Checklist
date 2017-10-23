global.Promise = require('bluebird');
require('isomorphic-fetch');
fs = require( 'fs' );

// require in commonjs env
var Qiita = require( 'qiita-js' );

// set your token
Qiita.setToken( process.env.QIITA );
Qiita.setEndpoint( 'https://qiita.com' );

fs.readFile( __dirname + '/qiita.md', 'utf8', function ( err, head ) {
  fs.readFile( 'README.md', 'utf8', function ( err, readme ) {
    var contents = head + "\n---\n" + readme;
    Qiita.Resources.Item.update_item( '8fff46c201bf9eaeba4a', {
      title: 'フロントエンドチェックリスト（日本語訳）',
      body: contents,
      private: false,
    } ).then( function( res ) {
      console.log( res );
    } )
  } );
} );
