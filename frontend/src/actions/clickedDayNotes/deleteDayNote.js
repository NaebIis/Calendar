export function deleteDayNote(id) {
    let temp = {
        id: id
    };
    return dispatch => {
        fetch(`http://localhost:3000/clicked_day_notes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(temp)
        })
            .then(resp => resp.json())
            .catch(error => error)
            .then(resp => {
                dispatch({
                    type: "POST_CLICKED_DAY_NOTES",
                    payload: resp
                });
            });
    };
}

// return fetch(`http://localhost:3000/users/${id}`, {
//     method: "DELETE"
// })
//     .then(addUserForm)
//     .then(getData);