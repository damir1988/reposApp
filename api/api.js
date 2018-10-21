import fetch from 'isomorphic-unfetch'
var url = "https://api.github.com/users/";

export async function getAllRepos(username) {
    console.log(username);
    const res = await fetch(url + username + '/repos');
    const data = await res.json()

    console.log(data)

    return {
        shows: data
    }
}