// Some test animation stuff 
app.animation('.slide-animation', function() {
	return {
		beforeAddClass: function(element, className, done) {
			if (className == 'ng-hide') {
				TweenMax.to(element, 0.5, {left: element.parent().width(), onComplete: done })
			} else {
				done();
			}
		},
		removeClass: function(element, className, done) {
			if (className == 'ng-hide') {
				done();
			} else {
				done();
			}
		}
	};
});

app.animation('.test-animation', function() {
	return {
		beforeAddClass: function(element, className, done) {			
			if (className == 'ng-hide') {
				TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done })
			} else {
				done();
			}
		},
		removeClass: function(element, className, done) {			
			if (className == 'ng-hide') {
				done();
			} else {
				done();
			}
		}
	};
});


