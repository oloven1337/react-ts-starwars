interface IState {
    person: {
        isFetching: false,
        error: false,
        userData: {
            name: '',
            height: '',
            gender: '',
            mass: '',
            eye_color: '',
            birth_year: ''
        }
    }
}

export const getUserData = (state: IState) => state.person.userData
