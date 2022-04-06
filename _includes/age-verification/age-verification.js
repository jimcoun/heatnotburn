(function () {
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
	function setCookie(cname, cvalue, exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');

		for (var i=0; i < ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
		}
		return "";
	}

	function checkCookie() {

    $(".root").hide();
		var age = getCookie("ageVerify");

		if (age === "over18") {
			// Check cookie: if exists and age passes, allow user into site
			// setCookie("ageVerify", "over18", 10);
      $("#age-verification-modal").hide();
      $(".root").show();
		} else if (age === "under18") {
      actionsUnder18();
      $("#age-verification-modal").show();
    } else {
			// If cookie value is under 21, or if cookie does not exist, create modal window and ask user to respond
			//$('body').prepend("<div class=\"age-check\"><div class=\"text-wrapper\"><p>Are you 21 years or older?</p><button class=\"confirm\">Yes</button><button class=\"cancel\">No</button></div></div>");

      // Get rid of modal once button is clicked
			$('.age-check button').on('click', function() {
				$('.age-check').hide();
			});

      $("#age-verification-modal").show();

			$('#button-over-18').on('click', function() {
				// If user responds yes, change age value
				age = "over18";
				setCookie("ageVerify", "over18", 10);
        $(".root").show();
        $("#age-verification-modal").hide();
			});

			$('#button-under-18').on('click', function() {
				setCookie("ageVerify", "under18", 10);
        actionsUnder18();
			});
		}
	}

  function actionsUnder18() {
    $('#button-over-18').hide();
    $('#button-under-18').hide();
  }

	$(function() {
		checkCookie();
	});
});
})();
