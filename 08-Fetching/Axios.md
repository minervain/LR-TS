<h1>Axios</h1>
<p>Axios üçüncü taraf bir kütüphanedir ve HTTP istekleri yapmak için kullanılır. fetch’ten daha gelişmiş bir özellik seti sunar ve hatayı ele almak için daha iyi bir yol sağlar.</p>

<h4> Fetch ile Axios arasında büyük farklar yok. En önemli farklara bakalım :</h4>

Fetch, Response nesnesi kullanarak verileri işler ve JSON verilerini almak için ek bir adım gerektirir. Axios, Response nesnesini kullanmaz ve JSON verilerini doğrudan kullanılabilir bir formatta sunar.

Fetch, hataları Promise yapısı kullanarak ele alır. Axios, Promise yapısını kullanmanın yanı sıra, hatanın türüne göre ayrı ayrı işleyebileceğimiz bir dizi hata yönetim stratejisi sunar.

Axios, istekleri iptal etmek için özel bir işlevsellik sunar. Fetch, işlemin iptal edilmesi için bir mekanizma sunmaz.

Fetch, standartlara uygun bir şekilde CORS desteği sunar. Axios, CORS desteğini otomatik olarak sağlar.

<b>Axios’u kullanabilmek için modul olarak kurmamız lazım. Aşağıdaki komutu cmd’de dosya dizininde çalıştıralım. Bu sayede axios’u kurmuş olacağız. </b>

```` js 
 npm i axios 

  ```

  <b>Kurulumdan sonra axios’u kullanacağımız dosyada import etmemiz lazım.

</b>
```js

import axios from 'axios';

```

<b>Örnek axios kullanımı : </b>

``` js

import React, { useEffect, useState } from 'react'
import axios from 'axios';

function User() {
const [users, setUsers]=useState([]);
const [isLoading, setIsLoading]=useState(true);

useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
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