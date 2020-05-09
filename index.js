( function () {
	var form = document.getElementById( 'new-form' ),
		siteConfig = form.querySelector( '[name=siteConfig]' );
	form.addEventListener( 'submit', function ( e ) {
		if ( siteConfig.value.trim() ) {
			try {
				JSON.parse( siteConfig.value );
			} catch ( err ) {
				e.preventDefault();
				alert( 'Invalid JSON: ' + err.message )
				return;
			}
		}
		form.querySelector( 'button[type=submit]' ).disabled = true;
	} );
}() );
