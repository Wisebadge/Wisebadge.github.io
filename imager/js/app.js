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
		count = 0;
		var links = [];
		var ref = new Firebase("https://hotnot.firebaseio.com/neighborhoods");

	 	if (ref.root == null ) {
	 			ref.push({data: data}); 
	 		};

	 	var counts = []; //loaded on first page init
	 	var allRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/");	
	 	
	 	var auth = new FirebaseSimpleLogin(allRef, function(error, user) {
		  if (error) {
		    // an error occurred while attempting login
		    console.log(error);
		  } else if (user) {
		    // user authenticated with Firebase
		    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
		  } else {
		    // user is logged out
		  }
		});

		auth.login('facebook', {
		  rememberMe: false,
		  scope: 'email,user_likes'
		});


	 	allRef.once('value', function(snap) {  ///Note this will loop
  		       var myc = snap.val();
  		       console.log('my content is: ' + myc);
  		       counts.push(myc);
  		   });

	
	function updateSun(id) { 
	count = id;
	var newSun = ++counts[0][id].sunny;
		var nRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + id);
			var onComplete = function(error) {
				  if (error) {
				  	alert('Synchronization failed.');
				  } 
				  else { 
				  	//alert('Synchronization succeeded.');
				  }
				};
		 nRef.update({sunny: newSun }, onComplete);	
		 count = 0;
	};

	function updateFog(id) {	
		count = id;
		var newFog = ++counts[0][id].foggy;
		var nRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + id);
			var onComplete = function(error) {
				  if (error) {
				  	alert('Synchronization failed.');
				  } 
				  else { 
				  	//alert('Synchronization succeeded.');
				  }
				};
		 nRef.update({foggy: newFog }, onComplete);	
		 count = 0;
	};


 	$(window).on('load', function(){
 		console.log('loaded');

 		for (keys in data) {
 		
 			var myString = "#" + data[count].id;
		    var parRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/");
 			var fogRef = new Firebase("https://hotnot.firebaseio.com/neighborhoods/-JS0sS2Ie-ebCoI8FuLG/data/" + count + "/foggy");
 			console.log('key at:' + keys);
 			console.log('count at:' + count);
 			links.push(parRef);
 		
 		

			parRef.on('value', function upHTML(snap) {  ///Note this will looop
			   var myNeighID =  parRef.child(count);  //url of child	aka the .../index of the neighborhood
  		      	console.log("id is:  " + myNeighID);
  		      	console.log("count is: " + count);
  		      	var myString = "#" + data[count].id;
  		        console.log("count is:  " + count);
  		         //console.log("my snap element is: " + snap.child(count).val());
  	  		     var myNeigh = snap.child(count);
  	  		     var myName = myNeigh.child('value');
  	  		    // var myString = myNeigh.child('id').value;
  	  		    var mySun = myNeigh.child('sunny').val();
  	  		     var myFog = myNeigh.child('foggy').val();
  	  		    
  	  		      console.log("with name " + myName.val());
  	  		       //console.log("with val " + myName.val());
  		       count++;
  		       console.log("my sun val = " + mySun);
  		       console.log("my fog val = " + myFog);
  		    
  		       $(myString +'-s').text('sunny: ' + mySun);
  		       $(myString +'-f').text('foggy: ' + myFog);
 			     //console.log('sunny appended');
			
			 		 		//Check values and update weather image
			console.log("fog val = " + myNeigh.child('foggy').val());
			if (mySun >= myNeigh.child('foggy').val() ) {
				$(myString).addClass('sunny');
			} else {
				$(myString).removeClass('sunny');
				$(myString).addClass('foggy');
			}
 		    //end img check 

			});
/*
 		fogRef.on('value', function(snap) {  ///Note this will looop
  		       console.log("count is: " + count);
  		    	var myFogVal = snap.val();
  		      console.log("my fog val = " + myFogVal);
  		       var myString = "#" + data[count].id;
  		     //   console.log("my span string = " + myString);
  		       $(myString +'-f').text('foggy: ' + myFogVal);
 			//	console.log('foggy appended');
			});

 		//end fogRef call
 */
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