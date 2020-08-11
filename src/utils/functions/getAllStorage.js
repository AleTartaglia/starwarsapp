import _ from 'lodash'

export default function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        let [type, id] = keys[i].split("-")
        let object = {...JSON.parse(localStorage.getItem( keys[i] )),id,type}
        values.push( object );
    }
    let result = _.groupBy(values, 'type')
    return result
}