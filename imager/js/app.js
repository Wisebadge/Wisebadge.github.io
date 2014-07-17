var data = [{
		value: 'The Richmond',
		id: 'the-richmond',
		sunny: 0,
		foggy: 0
	}, {
		value: 'The Presidio',
		id: 'the-presidio',
		sunny: 0,
		foggy: 0
	}, {
		value: 'North Beach',
		id: 'north-beach',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Golden Gate Park',
		id: 'ggp',
		sunny: 0,
		foggy: 0
	}, {
		value: 'NOPA',
		id: 'nopa',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Tenderloin',
		id: 'tenderloin',
		sunny: 0,
		foggy: 0
	}, {
		value: 'The Sunset',
		id: 'the-sunset',
		sunny: 0,
		foggy: 0
	}, {
		value: 'The Haight',
		id: 'the-haight',
		sunny: 0,
		foggy: 0
	}, {
		value: 'SOMA',
		id: 'soma',
		sunny: 0,
		foggy: 0
	}, {
		value: 'The Mission',
		id: 'the-mission',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Financial District',
		id: 'fidi',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Nob Hill',
		id: 'nob-hill',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Russian Hill',
		id: 'russian-hill',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Chinatown',
		id: 'chinatown',
		sunny: 0,
		foggy: 0
	}, {
		value: 'The Marina',
		id: 'marina',
		sunny: 0,
		foggy: 0
	}, {
		value: 'Hayes Valley',
		id: 'hayes-valley',
		sunny: 0,
		foggy: 0
	}];

		var links = [];
		var ref = new Firebase("https://hotnot.firebaseio.com/neighborhoods");

	 	if (ref.root == null ) {
	 			ref.push({data: data}); 
	 		};

	 	var counts = []; //loaded on first page init
	 	var allRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/");	
	 	
	 	allRef.once('value', function(snap) {  ///Note this will loop
  		       var myc = snap.val();
  		       console.log('my content is: ' + myc);
  		       counts.push(myc);
  		   });

	
	function updateSun(id) { 
	var newSun = ++counts[0][id].sunny;
		var nRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + id);
			var onComplete = function(error) {
				  if (error) {
				  	alert('Synchronization failed.');
				  } 
				  else { 
				  	alert('Synchronization succeeded.');
				  }
				};
		 nRef.update({sunny: newSun }, onComplete);	
	};

	function updateFog(id) {	
		var newFog = ++counts[0][id].foggy;
		var nRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + id);
			var onComplete = function(error) {
				  if (error) {
				  	alert('Synchronization failed.');
				  } 
				  else { 
				  	alert('Synchronization succeeded.');
				  }
				};
		 nRef.update({foggy: newFog }, onComplete);	
	};


 	$(window).on('load', function(){
 		console.log('loaded');


 		for (keys in data) {
 			var myString = "#" + data[keys].id;
 			var sunRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + keys + "/sunny");
 			var fogRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + keys + "/foggy");
 			//console.log('key at:' + keys);
 			//console.log('sunRef at:' + sunRef);
 			links.push(sunRef);

 		var count = 0;
		var fcount = 0;

			sunRef.on('value', function(snap) {  ///Note this will looop
  		       var mySunVal = snap.val();
  		    //   console.log("my sun val = " + mySunVal);
  		       var myString = "#" + data[count].id;
  		       count++;
  		    //    console.log("my span string = " + myString);
  		       $(myString +'-s').text('sunny: ' + mySunVal);
 			//	console.log('sunny appended');
			});

 		fogRef.on('value', function(snap) {  ///Note this will looop
  		       var myFogVal = snap.val();
  		      // console.log("my fog val = " + myFogVal);
  		       var myString = "#" + data[fcount].id;
  		       fcount++;
  		     //   console.log("my span string = " + myString);
  		       $(myString +'-f').text('foggy: ' + myFogVal);
 			//	console.log('foggy appended');
			});
 		}
 	});


	/*	function(forecast) {

			//Increment counters
			if (forecast == "sun") {
				$scope.sunny += 1;
				ref.$child("sunny").$set($scope.sunny);
			} else {
				$scope.foggy += 1;
				ref.$child("foggy").$set($scope.foggy);
			}

			//Check values and update weather image
			if ($scope.sunny >= $scope.foggy) {
				$scope.weather = "sunny";
			} else {
				$scope.weather = "foggy";
			}
		}
*/