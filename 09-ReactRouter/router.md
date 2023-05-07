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