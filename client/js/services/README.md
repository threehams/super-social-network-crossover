Services which are actually factories.

This is set up using angular.factory(), which will always return a single instance.
Avoiding $resource gives a bit more control.

Note that $q.defer() is never used. Since $http already returns a promise, it's not necessary -
instead, just return the result of $http. For more information:
https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns

I avoid using .success and .error here, since their behavior [doesn't match the .then() method for promise chains]
(http://stackoverflow.com/questions/16385278/angular-httppromise-difference-between-success-error-methods-and-thens-a).