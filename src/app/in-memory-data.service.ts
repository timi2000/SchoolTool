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
        const teacher = [
            { id: 11, firstname: 'Hoitim', lastname: 'qw', address: 'Strasse1', place: '6006',  city: 'luzern',  email: 'team@wee.ch',  phone: '1828888', birthday: '10.07,1997'},
            { id: 12, firstname: 'Peter', lastname: 'w', address: 'Strasse1', place: '6006',  city: 'luzern',  email: 'team@wee.ch',  phone: '1828888', birthday: '10.07,1997'},
            { id: 13, firstname: 'müller', lastname: 'wq', address: 'Strasse1', place: '6006',  city: 'luzern',  email: 'team@wee.ch',  phone: '1828888', birthday: '10.07,1997'},
            { id: 14, firstname: 'AJ', lastname: 'w', address: 'Strasse1', tlace: '6006',  city: 'luzern',  email: 'team@wee.ch',  phone: '1828888', birthday: '10.07,1997'},
            { id: 15, firstname: 'ichwotheiga', lastname: 'sd', address: 'Strasse1', place: '6006',  city: 'luzern',  email: 'team@wee.ch',  phone: '1828888', birthday: '10.07,1997'},
            { id: 16, firstname: 'ichbemüde', lastname: 'asdf', address: 'Strasse1', place: '6006',  city: 'luzern',  email: 'team@wee.ch',  phone: '1828888', birthday: '10.07,1997'},
        ];
        return {students, teacher};
    }
}