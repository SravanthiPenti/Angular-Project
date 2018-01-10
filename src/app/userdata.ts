import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class UserData implements InMemoryDbService{
    createDb(){
        const users=[
    { id: 1, fullname: 'Narco',email:'Narco@gmail.com' },
    { id: 2, fullname: 'Bombasto', email:'Bomasto@gmail.com'},
    { id: 3, fullname: 'Celeritas',email:'celeritas@gmail.com' },
    { id:4, fullname: 'Magneta',email:'mangana@gmail.com' },
    { id: 5, fullname: 'RubberMan',email:'rubberman@gmail.com' },
    { id: 6, fullname: 'Dynama' ,email:'dynama@gmail.com'},
    { id: 7, fullname: 'Dr IQ',email:'iq@gmail.com' },
    { id: 8, fullname: 'Magma' ,email:'magma@gmail.com'},
    { id: 9, fullname: 'Tornado',email:'tornado@gmail.com' }
]
return {users};
    }
    
}