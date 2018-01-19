dashboardCtrl.$inject = ['localStorageService', '$scope', '$state', '$transitions'];
export default function dashboardCtrl($storage, $scope, $state, $transitions) {

    /** Sidebar options */
    $scope.toggle = !($storage.get('toggle') ? false : true);

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $storage.set('toggle', $scope.toggle);
    };
    
    /** Set captions params */
    $scope.headerText = $state.current.data.header;
    $scope.headerClass = $state.current.data.class;

    /** Change header on state change success */
    $transitions.onSuccess({}, function () {
        if ($state.current.name != 'router.sign-in') {
            $scope.headerText = $state.current.data.header;
            $scope.headerClass = $state.current.data.class;
        }
    });
}
