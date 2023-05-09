<h1>React Routing Nedir?</h1>

<img src='https://crowdbotics.ghost.io/content/images/2019/07/react-router.jpg'>
<b>Kurulum
İlk önce çalışacağımız dizinde aşağıdaki kodu çalıştırarak “react-router-dom” kütüphanesini kuralım.

Bazı versiyonlarda hata alınabiliyor, Switch ile çalışacağımız için bu versiyonunu indireceğiz.</b>

npm i  react-router-dom@5

<b>React-router-dom ile tüm sayfanın değişmesi yerine sadece değişmesini istediğimiz alanları değiştirebiliriz.

Link componenti ile sadece ilgili alanın değişimini sağlarız ve sayfa komple yenilenmez fakat a etiketiyle çalışırsak sayfa komple yenilenir ki biz sadece ilgili alan yenilensin istiyoruz.

Componentlerimizin en dışına <span style="red">'Router'<span> componentini yazarak react router ı kullanabiliriz. </b>

```js
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

```

<h3>Exact Prop </h3>
<b>“exact” prop, React Router’da Route component’i ile birlikte kullanılır ve genellikle path prop’uyla birlikte kullanılır. “exact” prop’u, yalnızca belirtilen path ile tam olarak eşleşen bir yolun eşleşeceğini belirtir.

</b>

Örneğin, aşağıdaki kod örneği düşünülebilir:

```js
<Route exact path="/about" component={About} />
```
<b>Bu kod örneği, yalnızca “/about” yolu ile tam olarak eşleşen bir yol olduğunda About bileşenini görüntüler. Eğer “exact” prop kullanılmadan yalnızca “path” prop’u kullanılmış olsaydı, “/about” yoluna ek olarak “/about/contact” veya “/about/profile” gibi yollar da About bileşenini eşleştirebilirdi.

“exact” prop’u, yalnızca belirtilen yol ile tam olarak eşleşen yolları eşleştirmek istediğimizde kullanışlıdır.</b>

<h3>URL PARAMETERS</h3>
<strong>React’ta, URL parametreleri dinamik bir şekilde oluşturulan içeriklerin oluşturulmasında ve yönlendirme işlemlerinde kullanılabilir. URL parametreleri, belirli bir URL parçasının (örneğin, bir blog gönderisi veya ürünün kimliği gibi) değişebilmesi gereken durumlarda kullanışlıdır.

</strong>
<p>React Router’da, URL parametreleri “:” işaretiyle tanımlanır ve daha sonra bir bileşen içinde route edilebilirler.</p>

```js
<Route path="/user/:id" component={User} />
```
<strong>Yukarıdaki kod örneği, “/user/” yolundan sonra gelen herhangi bir şeyin userId olarak geçmesine izin verir ve User bileşenine yönlendirir. Bu URL parametresi, User bileşeni içinde props olarak mevcut olacaktır.

Örneğin, “/user/123” yolunu ziyaret ederseniz, “123” değeri props olarak User bileşenine geçirilir ve bu sayede kullanıcının profil sayfası görüntülenebilir.

Bu şekilde URL parametrelerinin dinamik olarak kullanılması, özellikle e-ticaret siteleri veya bloglar gibi web sitelerinde kullanışlıdır.</strong>

<h3>Nesting</Nesting>

<strong>React’ta “nesting” terimi, bir bileşenin içinde başka bir bileşenin yerleştirilmesi anlamına gelir. Bu, bileşenlerin hiyerarşik olarak düzenlenmesi anlamına gelir ve birbirleriyle ilişkilendirilen bileşenlerin oluşturulmasını sağlar.

React’ta, nesting işlemi, JSX kullanılarak gerçekleştirilebilir.

Yani varolan componentler sayfadan kaybolmadan işlem yapabilme imkanı sağlar.


 İlk önce nesting kullanmadan yapalım.


</strong>

<img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*2VibMbaHNUFIod2BcWzEdw.png'/>

<b>Burada Users başlığı altındaki kullanıcılardan herhangi birine tıklarsak şöyle bir görünüm elde edeceğiz.</b>
<img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*Js5c230yIWIfZ9elDyXG2g.png'/>

<b>Users kısmını artık göremiyoruz. Nesting kullanarak yapalım birde.</b>

<img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*DDU9Yc9_MbfOq_8Roncr-Q.png'/>

<b>Burada da Users başlığı altındaki kullanıcılardan herhangi birine tıklarsak şöyle bir görünüm elde edeceğiz.</b>


<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*tqq5SJXWWv7BzMXlNqlMIg.png"></img>

<b>Next User linkine tıklayarak diğer kullanıcılara geçiş yapabiliyoruz ve görünüm yine yukarıdaki gibi oluyor.

Şimdi de kodlara bakalım. App.js de User.js yi kullanmayacağız. User.js yi Users.js de kullanacağız.</b>

```js
import {useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function User() {
    const [loading, setLoading]= useState(true);
    const [user, setUser]=useState([]);
    const {id}=useParams();
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=> setUser(res.data))
        .finally(() => setLoading(false));
    },[id]);

  return (
    <div>
     <h1>User Detail</h1>
     {
                loading && <div>Loading...</div>
     }
     <code>
        {JSON.stringify(user)}
     </code>
     <br /><br />
    <Link to={`/users/${parseInt(id)+1}`}>Next User</Link>
    </div>
  )
}

export default User
```

<Link to={/users/${parseInt(id)+1}}>Next User</Link> ile başka bir kullanıcıya geçilmesini sağlıyoruz.



Users. js

```js
import {Link, Switch,Route, useRouteMatch} from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from "axios"
import User from './User';

function Users() {
    const [loading, setLoading]= useState(true);
    const [users, setUsers]=useState([]);
    const { path, url } = useRouteMatch();
    console.log(path, url)
    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .finally(() => setLoading(false));
    },[])
    return(
        <div>
            <h1>Users</h1>
            {
                loading && <div>Loading...</div>
            }
            <ul>
              {
                users.map((user)=>(
                    <li key={user.id}>
                        <Link to={`${url}/${user.id}`}>{user.name}</Link>
                    </li>
                ))
              }
            </ul>
            <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}>
          
        </Route>
      </Switch>
        </div>
    )
  }

export default Users
```

Burada User.js yi kullanarak işlemler yapıyoruz.


App .js
```js
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <Route path="/" exact component={Home}/>
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;

```

<h2>NavLink
</h2>


<strong>Aslında Link’in aynısı gibi düşünebiliriz. Tek farkı aktif olan linki stil olarak biraz daha özelleştirmek istersek kullanabiliriz. Bu açıdan kullanışlı bir component.

Link componenti yerine NavLink yazmak yeterli değil. Bu NavLink’ e bir activeStyle propunu vermemiz gerekiyor.
Örneğin : Burada activeStyle propu sayesinde linkimizin arka planı mavi olarak belirledik.</strong>

```js
<NavLink activeStyle={{backgroundColor: "blue"}} to="/">Home</NavLink>


```

<b>Sadece üzerine tıkladığımız linki arkaplanında değişiklik olsun ve daha önce tıkladığımız linkin arkaplanı rengi normale dönsün istiyorsak; “exact” kullanmalıyız.</b>


```js
<nav>
 <ul>
   <li>
     <NavLink activeStyle={{backgroundColor: "pink"}} to="/" exact >Home</NavLink>
    </li>
    <li>
      <NavLink activeStyle={{backgroundColor: "pink"}} to="/about" exact>About</NavLink>
     </li>
     <li>
      <NavLink activeStyle={{backgroundColor: "pink"}} to="/users" exact>Users</NavLink>
      </li>
 </ul>
</nav>
```

<h3>No Match (404)</h3>

<strong>Olmayan sayfalar için hata mesajı göstermek istersek eğer,

Error404 componentimizi tanımlayalım :</strong>

```js
import React from 'react'

function Error404() {
  return (
    <div>
      <h2>Aradığınız sayfayla eşleşen sayfa yok.</h2>
    </div>
  )
}

export default Error404
```

App.js dosyamızda Switch(hangisine uyarsa onu çalıştıran yapı) içerisinde yeni bir Router tanımı yapıyoruz ve import ediyoruz.

```js
<Route path="*" component={Error404}/>
```

path=”*” ile diğer rotaların dışında yazılan her şeyi kabul etmesini sağlıyoruz.

<p> Daha detaylı çalışmak için bu sayfaryı ziyaret edin <a href='https://reactrouter.com/en/main/components/link'>DETAYLI ÇALIŞ</a></p>