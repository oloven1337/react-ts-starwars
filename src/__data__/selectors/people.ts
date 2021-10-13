interface IState {
    peoples: {
        error: false
        isFetching: false
        peoples: any[]
    }
}

export const getPeoplesSelector = (state: IState) => state.peoples.peoples
export const isLoadingSelector= (state: IState) => state.peoples.isFetching
