const state = {
    current:null
}
function generateId() {
    if(state.current) {
        state.current += 1
        return state.current
    } 

    const newNumber = (`${Math.floor(Math.random() * 10) + 1}`+
                       `${Math.floor(Math.random() * 10) + 1}`+
                       `${Math.floor(Math.random() * 10) + 1}`+
                       `${Math.floor(Math.random() * 10) + 1}`)

    state.current = newNumber-0
    return state.current
}

export default generateId