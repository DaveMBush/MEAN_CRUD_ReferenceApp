/**
 * Created by dave on 2/10/2016.
 */
(function(angular){
    angular.module('app').factory('contactService',['$resource',service]);
    function service($resource){
        var Contacts = $resource('/api/contact/:id');
        function add(contact){
            var newContact = new Contacts(contact);
            newContact.$save();
        }
        function list(){
            return Contacts.query();
        }
        function get(id){
            return Contacts.get({id:id});
        }
        function save(contact){
            Contacts.get({id: contact.id},function(existingContact){
                existingContact.name = contact.name;
                existingContact.sex = contact.sex;
                existingContact.dob = contact.dob;
                existingContact.$save({id:contact.id});
            })
        }
        function remove(id){
            Contacts.delete({id:id});
        }
        return{
            add: add,
            list: list,
            get: get,
            save: save,
            delete: remove
        }
    }
})(window.angular);