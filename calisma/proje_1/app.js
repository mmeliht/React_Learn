import axios from "axios";

export default async function getData(number) {

    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/"+number);

    const userInfo = {...users,...posts}
    console.log(userInfo);
}

