angular.module('starter.modservices', [])

/**
 * A simple example service that returns some data.
 */
.factory('Matches', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  /*var myMatches = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ]; */

myMatches = [{
        'name': 'Tiffany Wang',
        'email': 't@wang.com',
        'phone': '214-748-3647',
        'title': 'iOS Engineer at Apple',
        'location': 'San Francisco, CA',
        'id': 0
    }, {
        'name': 'John Smith',
        'email': 'j@smith.com',
        'phone': '123-456-7890',
        'title': 'UI/UX at Airbnb',
        'location': 'Berkeley, CA',
        'id': 1
    }, {
        'name': 'Bob Smith',
        'email': 'j@smith.com',
        'phone': '123-456-7890',
        'title': 'Product Design at IDEO',
        'location': 'Berkeley, CA',
        'id': 2
    }, {
        'name': 'Elon Musk',
        'email': 'e@musk.com',
        'phone': '123-456-7890',
        'title': 'Founder at SpaceX',
        'location': 'Cupertino, CA',
        'id': 3
    }, ];

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
