/**
 * Created by dave on 2/10/2016.
 */
(function(angular){
    angular.module('app').controller('edit.controller',['$state','contactService',controller])
    function controller($state, contact){
        function cancel(){
            $state.go('main');
        }
        function add(){
            contact.add(edit.contact);
        }
        function save(){
            contact.save(edit.contact);
        }
        var edit = this;
        edit.name = '';
        edit.editMode = 'add';
        edit.contact = {
            name:'',
            sex: '',
            dob: ''
        };
        if($state.params.id){
            edit.editMode = 'edit';
            contact.get($state.params.id).$promise.then(function(data){
                edit.contact.name = data.name;
                edit.contact.sex = data.sex;
                edit.contact.dob = (new Date(data.dob)).toLocaleDateString();
                edit.contact.id = $state.params.id;
            });
        }
        edit.cancel = cancel;
        edit.add = add;
        edit.save = save;
    }
})(window.angular);