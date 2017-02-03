$(document).ready(function(){

	$.getJSON( "quote.json", function( data ) {
	  var quotes = [];
	  $.each( data, function( key, val ) {
	    quotes.push( "<blockquote id='" + key + "'>" + val +  "<br> -<b>" + key + "</b>" + "</blockquote>"  );
	  });
	 
	  $( "<ul/>", {
	    "class": "my-new-list",
	    html: quotes.join( "" )
	  }).appendTo( "body" );
	});



});