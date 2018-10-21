import fetch from 'isomorphic-unfetch'
var urlRepos = "https://api.github.com/users/";
var urlRepo = "https://api.github.com/repos/";

export async function getAllRepos(username) {
    const res = await fetch(urlRepos + username + '/repos');
    const data = await res.json()

    return data;
}

export async function getReposDetails(username, title) {
    const res = await fetch(urlRepo + username + '/' + title);
    const data = await res.json()
    console.log(data);
    return data;
}