import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const students = [
            { id: 11, firstname: 'Mr. Nice', lastname: 'wesdfsadf'},
            { id: 12, firstname: 'Narco', lastname: 'wesfd'},
            { id: 13, firstname: 'Bombasto', lastname: 'sfd'},
            { id: 14, firstname: 'Celeritas', lastname: 'wsdfe' },
            { id: 15, firstname: 'Magneta', lastname: 'wesdsd'},
            { id: 16, firstname: 'RubberMan', lastname: 'wesdaf' },
            { id: 17, firstname: 'Dynama', lastname: 'wdsfe'},
            { id: 18, firstname: 'Dr IQ', lastname: 'wesadf' },
            { id: 19, firstname: 'Magma', lastname: 'wessss'},
            { id: 20, firstname: 'Tornado', lastname: 'wesssss'}
        ];
        return {students};
    }
}