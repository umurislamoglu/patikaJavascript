
async function getData(id) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    let res = await data.json()
    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    let postData = await posts.json();
    let result = {...res,postData}

    return result
} 

export default getData