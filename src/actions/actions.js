const loadJogs = (jogs) => ({
    type: 'LOAD_JOGS',
    payload: jogs,
});
const changeJog = (changedJog) => {
   return {
    type: 'CHANGE_JOG',
    payload: changedJog,
    }
}
export {
    loadJogs,
    changeJog,
}