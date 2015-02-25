module.exports = ['$scope', function ($scope) {
  $scope.mode = '';
  $scope.post = {
    startDate: moment().startOf('day').toDate(),
    endDate: moment().startOf('day').add(1, 'day').toDate()
  };
  $scope.minStartDate = function() {
    return moment().startOf('day').format('YYYY-MM-DD');
  };
  $scope.maxStartDate = function() {
    return moment().startOf('day').add(5, 'days').format('YYYY-MM-DD');
  };

  $scope.minEndDate = function() {
    return moment($scope.post.startDate).add(1, 'days').format('YYYY-MM-DD');
  };
  $scope.maxEndDate = function() {
    return moment($scope.post.startDate).add(5, 'days').format('YYYY-MM-DD');
  };

  $scope.messages = {};
  $scope.update = function () {
    if ($scope.form.$invalid) {
      _.each($scope.form, function(value) {
        if (!value) return;
        if (value.$setDirty) value.$setDirty();
        if (value.$setTouched) value.$setTouched();
      });
      return;
    }
    $scope.messages.submit = 'Saved';
  };
}];