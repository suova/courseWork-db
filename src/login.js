async function postData(url = '', data = {}) {
    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    });
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //mode: 'cors', // no-cors, *cors, same-origin
        // "crossDomain": true,

        headers: header,

        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}
export default postData