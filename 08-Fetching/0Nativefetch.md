<h1>Native Fetch Nedir?</h1>
<img src='https://www.bigdataframework.org/wp-content/uploads/2019/11/2.jpg'>

<h3>Native Fetch</h3>
<strong>React’ta veri almak veya API’lerden veri almak için birkaç yol vardır. Bunlardan en yaygın olanları şunlardır:

fetch(): Tarayıcı tarafından sağlanan bir API'dir. HTTP isteklerini yapmak için kullanılır ve JSON verilerini almak için kullanışlıdır. </strong>


<b>Kullanım örneği :

</b>

```js
mport React, { useEffect, useState } from 'react'

function User() {
const [users, setUsers]=useState([]);
const [isLoading, setIsLoading]=useState(true);

useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data)
            setIsLoading(false)
        })
        .catch((e)=>console.log(e));
        
    },[])
  return <div>
    <h1>Users</h1>

    {
        isLoading && <div>Loading...</div>
    }

    {
        users.map(user => <div key={user.id}>{user.name}</div> )

    }
  </div>
}

export default User
```
<b>Burada “https://jsonplaceholder.typicode.com/users" url’sinde bulunan users değerlerini fetch ile çektik ve ekranda gösterdik. Açılırken bir loading ekranı oluşturduk. Açıldıktan sonra false yaptıkki sürekli olarak ekranda durmasın.
</b>
