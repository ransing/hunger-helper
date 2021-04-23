/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {


	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

// function counterFn(){
// setTimeout(start, 2000);

// var i = 230000;
// var num = document.querySelector("#number");

// function start() {
//   setInterval(increase, 1000);
// }

// function increase() {
//     if (i < 35000) {
//       i++;
//       num.innerText = i;
//     }
// }
// }

// counterFn()

window.onload = function () {
	countUpFromTime("Apr 2, 2021 12:00:00");
}

function countUpFromTime(countFrom){
	countFrom = new Date(countFrom).getTime();

	var now = new Date(),
      countFrom = new Date(countFrom),
	  timeDifference = (now - countFrom);
	  

	plus = Math.floor(timeDifference/1000/60);
	// var idEl = document.getElementById(id);
	// idEl.getElementsByClassName('number')[0].innerHTML = plus;
	// document.querySelector('.number').innerHTML = plus;
	document.getElementsByClassName('number')[0].innerHTML = plus
	console.log(plus)
	// clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom) }, 1000);
}