import getAllStorage from '../../utils/functions/getAllStorage'
import {SET_LEAGUE} from '../constants'

const setLeague = (league) => {
    return {
        type: SET_LEAGUE,
        league
    }
}

export const fetchLeague = () => dispatch => {
    const league = getAllStorage()
    dispatch(setLeague(league))
}