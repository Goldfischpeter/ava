/* 
js: app 
--------------------------------------------------
AVA
--------------------------------------------------
by goldfischclub.de
2017-03-10
*/


$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return 0;
    }
    else{
        return results[1] || 0;
    }
}


function isTouchDevice()
{
    return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}



function bindNav()
{	
	$("a.menu").click(function() 
	{
		$(".nav-container").toggle();
		//$(".nav-layer").slideToggle();
		$(".nav-layer").toggle();
		$(".nav-container").mouseleave(function() {
 			 $(".nav-container").hide();
 			 $(".nav-layer").hide();
			// $(".nav-layer").slideUp();
		});
  
		return false;
	});
}

function initLogin()
{
	$(".a-15 #yform-formular-field-1").focus();
  	$(".a-15 #yform-formular-field-2").focus();
  	$(".a-15 #yform-formular-field-2").blur();
}

function initSearch()
{
	$("a.search-trigger").click(function() 
	{
		$(".search").toggleClass("search-open");
		return false;
	});
	
}	

function goToSlideSwiper(swiperId, index){
	swiperId.slideTo(index);
}

function bindSubnavSelect()
{
	$("select.subnav-select").change(function() {
   		var id = $(this).val();
   		window.location = id;
	});
}

function initW100()
{
	$( window ).resize(function() 
    {
	    resizeW100();
	});
	resizeW100();
}

function resizeW100()
{
	$('.w100').width( $( window ).width()-20 );
}




function initializeGMaps() {

	google.maps.visualRefresh = true;
	
	var mapOptions =  {
		zoom: 16,
		draggable: true,
		scrollwheel: false,
		center: new google.maps.LatLng(50.11600701900343,8.713693271827632), 
		styles: [
				  {
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#212121"
					  }
					]
				  },
				  {
					"elementType": "labels.icon",
					"stylers": [
					  {
						"visibility": "off"
					  }
					]
				  },
				  {
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#757575"
					  }
					]
				  },
				  {
					"elementType": "labels.text.stroke",
					"stylers": [
					  {
						"color": "#212121"
					  }
					]
				  },
				  {
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#757575"
					  }
					]
				  },
				  {
					"featureType": "administrative.country",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#9e9e9e"
					  }
					]
				  },
				  {
					"featureType": "administrative.land_parcel",
					"stylers": [
					  {
						"visibility": "off"
					  }
					]
				  },
				  {
					"featureType": "administrative.locality",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#bdbdbd"
					  }
					]
				  },
				  {
					"featureType": "landscape.man_made",
					"elementType": "geometry.fill",
					"stylers": [
					  {
						"color": "#000000"
					  }
					]
				  },
				  {
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#757575"
					  }
					]
				  },
				  {
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#181818"
					  }
					]
				  },
				  {
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#616161"
					  }
					]
				  },
				  {
					"featureType": "poi.park",
					"elementType": "labels.text.stroke",
					"stylers": [
					  {
						"color": "#1b1b1b"
					  }
					]
				  },
				  {
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
					  {
						"color": "#2c2c2c"
					  }
					]
				  },
				  {
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#8a8a8a"
					  }
					]
				  },
				  {
					"featureType": "road.arterial",
					"stylers": [
					  {
						"color": "#e1e4dc"
					  }
					]
				  },
				  {
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#373737"
					  }
					]
				  },
				  {
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
					  {
						"visibility": "off"
					  }
					]
				  },
				  {
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#3c3c3c"
					  }
					]
				  },
				  {
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
					  {
						"color": "#ffffff"
					  }
					]
				  },
				  {
					"featureType": "road.highway.controlled_access",
					"stylers": [
					  {
						"color": "#f4f9f4"
					  }
					]
				  },
				  {
					"featureType": "road.highway.controlled_access",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#4e4e4e"
					  }
					]
				  },
				  {
					"featureType": "road.local",
					"stylers": [
					  {
						"color": "#bec0c0"
					  }
					]
				  },
				  {
					"featureType": "road.local",
					"elementType": "geometry.fill",
					"stylers": [
					  {
						"weight": 3.5
					  }
					]
				  },
				  {
					"featureType": "road.local",
					"elementType": "geometry.stroke",
					"stylers": [
					  {
						"visibility": "simplified"
					  }
					]
				  },
				  {
					"featureType": "road.local",
					"elementType": "labels.text",
					"stylers": [
					  {
						"color": "#fcffff"
					  }
					]
				  },
				  {
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#040404"
					  }
					]
				  },
				  {
					"featureType": "transit",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#757575"
					  }
					]
				  },
				  {
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
					  {
						"color": "#000000"
					  }
					]
				  },
				  {
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
					  {
						"color": "#3d3d3d"
					  }
					]
				  }
				]
	};
	
	var mapElement = document.getElementById('map-canvas');
	map = new google.maps.Map(mapElement, mapOptions);
	
	
	
	var marker = new RichMarker({
		position: new google.maps.LatLng(50.11600701900343,8.713693271827632),
		map: map,
		shadow: 'none',
		content: '<div class="gmarker">&nbsp;</div>'
	});
	       
}

function bindGMaps()
{
	google.maps.event.addDomListener(window, 'load', initializeGMaps);
}



$(document).ready(function()
{
	bindNav();
	bindSubnavSelect();
	
	$("a[href$='.pdf']").attr("target", "_blank");
 
  	initLogin();
  	initSearch();
  	initW100();
  	
  	bindGMaps();
  	
});

