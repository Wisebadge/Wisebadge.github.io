angular.module('starter.modservices', []).factory('Matches', function() {

  var myMatches = [
      {
          'name': 'Tiffine Wang',
          'email': 't@wang.com',
          'phone': '214-748-3647',
          'title': 'iOS Engineer at Apple',
          'location': 'San Francisco, CA',
          'id': 0,
          'date': (new Date).toJSON(),
          'image': 'http://wisebadge.github.io/myproject/www/img/Tiffine.jpg'
      },
      {
          'name': 'Alar Kolk',
          'email': 'alarkolk@inacadamy.eu',
          'phone': '123-456-7890',
          'title': 'CEO at EIA',
          'location': 'Tallinn, Estonia',
          'id': 1,
          'date': (new Date).toJSON(),
          'image': 'http://wisebadge.github.io/myproject/www/img/Alar.jpg'
      },
      {
          'name': 'Chris',
          'email': 'chris@smith.com',
          'phone': '123-456-7890',
          'title': 'Consultant',
          'location': 'San Francisco, CA',
          'id': 2,
          'date': (new Date).toJSON(),
          'image': 'http://wisebadge.github.io/myproject/www/img/Chris.jpg'
      },
      {
          'name': 'Fred Krieger',
          'email': 'j@smith.com',
          'phone': '123-456-7890',
          'title': 'UI/UX at Scoro',
          'location': 'Tallinn, Estonia',
          'id': 3,
          'date': (new Date).toJSON(),
          'image': 'http://wisebadge.github.io/myproject/www/img/Fred.jpg'
      },
      {
          'name': 'Helen Poldsman',
          'email': 'j@smith.com',
          'phone': '123-456-7890',
          'title': 'Product Design at IDEO',
          'location': 'Berkeley, CA',
          'id': 4,
          'date': (new Date).toJSON(),
          'image': 'http://wisebadge.github.io/myproject/www/img/Helen.jpg'
      },
      {
          'name': 'Ravi',
          'email': 'j@smith.com',
          'phone': '123-456-7890',
          'title': 'Product Design at IDEO',
          'location': 'Berkeley, CA',
          'id': 5,
          'date': (new Date).toJSON(),
          'image': 'http://wisebadge.github.io/myproject/www/img/Ravi.jpg'
      }
    ];

    return {
      all: function() {
        return myMatches;
        console.log('returned myMatches');
      },
      get: function(matchId) {
        // Simple index lookup
        return myMatches[matchId];
      }
    }
});
