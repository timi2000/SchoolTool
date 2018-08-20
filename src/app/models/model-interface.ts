export interface Gender {
    gender?: string;
}

export interface Teacherone {
    idTeacher?: number;
    idGender?: Gender[];
    firstname?: string;
    lastname?: string;
    address?: string;
    place?: string;
    ort?: string;
    city?: string;
    email?: string;
    phone?: number;
    mobile?: number;
    active?: number;
    image?: number;
    birthday?: number;
}
/*export const genders = ['Männlich ', 'Weiblich', 'undefined'];
export function createInitialteacher(): Teacherone[] {
    return {
        idGender: genders[0]
    };
}*/
/*export const states = ['BACKLOG', 'IN_PROGRESS', 'TEST', 'COMPLETED'];

export function createInitialTask(): Teacher {
    return {
        tags: [],
        state: states[0]
    };
}*/
