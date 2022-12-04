import { User } from "../model/types";

export class LoginService {

    public getUserData(): User {
        return {
            firstname: 'Jane',
            lastname: 'Test',
            email: 'janetest@planit.com',
            password: 'PlanItRocks!'
        }
    }
}