<h1>React Components</h1>

<strong>React component, React.js kütüphanesinde kullanılan bir yapıdır. Componentler, bir uygulamanın görüntüsünü oluşturan ve kontrol eden parçalardır. Her component, bir HTML elementi veya bir diğer componenti temsil edebilir. Componentler, veri değiştiğinde otomatik olarak yenilenir ve uygulamanın güncel durumunu yansıtır. Bu, React’in özellikle dinamik ve verilerle çalışan uygulamalar için uygun bir yapı sunmasını sağlar.</strong>
<p>Özetle components, büyükleri meydana getiren küçüklerdir.</p>

<img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*1qYuKsimOMj3Vm9C2RcFwA.png'>

<h3>Component Oluşturmak</h3>

Componentlerimizi App.js dosyasında oluşturuyoruz. Varsayılan bir component oluşturmak için App.js dosyamıza aşağıdaki kodu yazıyoruz.
```js
import './App.css';

function App() {
  return (
    <div className="App">Hello React!</div>
  );
}

export default App;

```

Dışarıda bir component yazmak ve onu kullanmak :
components adında bir klasör oluşturup, içerisinde Header.js adında bir component oluşturalım. Componentimizin içeriği :


```js

function Header(){
    return(
        <div>
            Merhaba Ben Header Bileşeniyim
        </div>
    )
}
export default Header;
```
daha sonra bunu App.js'e import edin

```js
import Header from './components/Header'
```

3. Oluşturduğumuz componenti return kısmında, kullanmak istediğimiz alana <Header/> ya da <Header><Header/> şeklinde yerleştiriyoruz. İstediğimiz kadar kullanabiliriz. Ben burada içine yazı yazmadığım için <Header> ı kullandım. App.js dosyası :


````js
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
```

<h3>Componentlerde Değişken Render Etmek
</h3>


<span>Componentlerimizde değişkenleri render etmek istersek {} içerisinde yazmamız gerekir.<span>



```<js
const name ="Ali_Osman";
const surname="Uçar"
function App() {
  return (
    <>
       <h1>{name}</h1>
    </>
  );
}
export default App;

```

<p>Birden fazla değişkeni render etme işlemini şöyle yapabiliriz.<p>

```
const name ="Ali_0SMAN"
const surname="UCAR"
function App() {
  return (
    <>
       <h1>{`adım ${name},soyadım ${surname}`}</h1>
    </>
  );
}
export default App
````

<h3>Koşullu Render İşlemi</h3>

```js
const isLogedIn=true;

function App() {
  return (
    <>
    /*Giris yapilmissa*/
       <h1>{isLogedIn && `adım ${name},soyadım ${surname}`}</h1>
    /*Giris yapilmamissa*/
       <h1> {!isLogedIn && "Giriş yapmadınız"}</h1>
    </>
  ); 
}

export default App;

```
<h4>Ternary ile de kontrol işlemi yapabiliriz :
</h4>

```js
function App() {
  return (
    <>
       <h1>{isLogedIn ? `adım ${name},soyadım ${surname}`:"Giriş yapmadınız"}</h1>
    </>
  );
}
export default App;

```