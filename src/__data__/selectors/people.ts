interface IState {
    people: {
        error: false
        isFetching: false
        people: any[]
    }
}

export const getPeopleSelector = (state: IState) => state.people.people
export const isLoadingSelector= (state: IState) => state.people.isFetching
