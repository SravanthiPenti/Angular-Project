//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class UserData implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 1, fullname: 'Narco', email: 'Narco@gmail.com', hobbies: 'playing cricket,reading novels' },
            { id: 2, fullname: 'Bombasto', email: 'Bomasto@gmail.com', hobbies: 'Socializing – Community work, Church Activities, Volunteer Work' },
            { id: 3, fullname: 'Celeritas', email: 'celeritas@gmail.com', hobbies: 'Sports – Walking, Exercise, Running, Tennis, Bicycling, Swimming, Skiing, Golf, Team Sports etc.' },
            { id: 4, fullname: 'Magneta', email: 'mangana@gmail.com', hobbies: 'Music – Playing, Listening' },
            { id: 5, fullname: 'RubberMan', email: 'rubberman@gmail.com', hobbies: 'Traveling, Fishing, hunting' },
            { id: 6, fullname: 'Dynama', email: 'dynama@gmail.com', hobbies: 'Painting' },
            { id: 7, fullname: 'Dr IQ', email: 'iq@gmail.com', hobbies: 'Dancing' },
            { id: 8, fullname: 'Magma', email: 'magma@gmail.com', hobbies: 'Reading, Writing' },
            { id: 9, fullname: 'Tornado', email: 'tornado@gmail.com', hobbies: 'Animal Care' }
        ]
        return { users };
    }

}