function ArtistListCtrl($scope) { 

	$scope.artists = [ 
{'name': 'Test1',
		'email': 'Test',
		'phone': '214-748-3647',
		'id':1},
{'name': 'John Smith',
     'email': 'j@smith.com',
     'phone': '123-456-7890',
 		'id': 2},
 {'name': 'Mary Doe',
     'email': 'm@doe.com',
       'phone': '123-456-7890',
   		'id': 3},
];
	$scope.orderList = 'name';
	}
        
function ProjectListCtrl($scope) { 

	$scope.projects = [ 
{'name': 'Project1',
		'email': 'Test',
		'phone': '214-748-3647',
		'id':1},
{'name': 'John Smith',
     'email': 'j@smith.com',
     'phone': '123-456-7890',
 		'id': 2},
 {'name': 'Mary Doe',
     'email': 'm@doe.com',
       'phone': '123-456-7890',
   		'id': 3},
];
	$scope.orderList = 'name';
	}