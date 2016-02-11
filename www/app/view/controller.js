/**
 * Created by dave on 2/9/2016.
 */
(function(angular){
    angular.module('app').controller('view.controller',['$state','contactService',controller])
    function controller($state,contactService){
        var view = this;
        function add(){
            $state.go('edit');
        }
        function edit(id){
            $state.go('edit',{id: id});
        }
        function remove(id){
            contactService.delete(id);
            view.someList = contactService.list();
        }
        view.toLocaleDateString = function(dstring){
            // because angular doesn't convert dates
            return (new Date(dstring)).toLocaleDateString();
        }
        view.someList = contactService.list();
        view.add = add;
        view.edit = edit;
        view.delete = remove;
    };
})(window.angular);