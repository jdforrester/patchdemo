( function () {
	var myWikis, wikisTable,
		form = document.getElementById( 'new-form' ),
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

	if ( document.getElementsByClassName( 'myWikis' ).length ) {
		myWikis = document.getElementsByClassName( 'myWikis' )[ 0 ];
		wikisTable = document.getElementsByClassName( 'wikis' )[ 0 ];
		myWikis.addEventListener( 'change', function () {
			if ( myWikis.checked ) {
				wikisTable.classList.add( 'hideOthers' );
			} else {
				wikisTable.classList.remove( 'hideOthers' );
			}
		} );
	}

}() );
