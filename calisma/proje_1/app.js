import axios from "axios";


export default async function getData(number) {

    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/"+number); //verilen url'den id'si dışardan alınan kullanıcı verileri alındı.

    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/"+number); //verilen url'den id'si dışardan alınan kullanıcı postu alındı.

    const userInfo = {...users,...posts} // alınan veriler birleştirildi.
    
    console.log(userInfo);
}

