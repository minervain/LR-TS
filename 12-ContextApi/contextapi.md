<h1>Context Api </h1>

<img src='https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png'/>

Herhangi bir component’de bir state oluşturduğumuzda, o state ilgili component içerisinde kalıyordu. Şöyleki Body component’inden bir state oluşturalım, bu state’i Header component’inde kullanamayız. Alt componentlerde kullanabilmek için tek tek göndermemiz gerekiyor. Bunlar bizim için büyük sorunlar. Bu sorunlar kurtulabilmemiz için React bize bir kütüphane veriyor. Bu kütüphane React ile beraber gelen Context kütüphanesi.

<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*wMa_YsTy-_ZBmK9tp-dPkA.png'/>
<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*TaATrg2guXYKdCI2cXkcEQ.png'>


Context’i kullanarak aslında biz elimizde o an hangi data varsa, o datayı tüm component’lere sağlamış oluyoruz. Ve bu Context içerisindeki datayı istediğimiz zaman istediğimiz yerden erişim sağlayıp değiştirebiliyoruz.


<h3>Context Oluşturmak </h3>

Çalıştığımız React dosyasında src dizini altında context adlı bir dizin oluşturalım. context dizini içerisine de ThemeContext.js isimli bir dosya oluşturalım.

<img src ='https://miro.medium.com/v2/resize:fit:534/format:webp/1*YHdYZiPO9V6yfiydft8i1g.png'/>

Context tanımını oluşturabilmek için ThemeContext.js içerisinde React’ın altındaki createContext tanımını import edelim.

```js
import { createContext } from "react";

```

ThemeContext.js

```js
import { createContext } from "react";
const ThemeContext = createContext();
export default ThemeContext;
```

App.js içerisinde ThemeContext.js’yi import edelim.

```js
import './App.css';
import ThemeContext from './context/ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider></ThemeContext.Provider>
    </div>
  );
}

export default App;

```


Burada Provider data sağlayıcı olarak görev yapmaktadır. Render edilen tüm componentlere Prodiver edilen sağlanan tüm dataları göndermem gerekiyor. Bunun için de hangi datayı sağlayacağımızı belirliyoruz.

```js
<ThemeContext.Provider value="dark"></ThemeContext.Provider>
```

Yukarıda “dark” isimli stringi componentlere göndermek istediğimizi belirledik. Peki hangi componentlere göndermek istiyoruz ?

Bunun içinde src altında component isimli bir dizin oluşturalım. Bu dizin altında da Button.js isimli bir dosya oluşturalım.

```js
import React from 'react'

function Button() {
  return (
    <div>
      Button
    </div>
  )
}

export default Button
```

App.js içerisinde gerekli import işlemi yapılması

```js
import './App.css';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value='dark'>
        <Button/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

```

Peki biz Button.js den dark stringine nasıl erişeceğiz ?

Öncelikle hangi context’i kullanacaksak onu, kullanmak istediğimiz component’in içerisine dahil etmemiz gerekiyor. Yani Button.js içerisine ThemeContext.js’yi import etmemiz gerekiyor. Sonrasında ise bu contexti kullanabilmek için React’ın altında bulunan useContext’i import etmemiz lazım.

```js
import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
```

useContext ile ThemeContext’ e ulaşabiliyoruz.


```js
import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Button() {
    const data=useContext(ThemeContext);
    console.log(data);
  return (
    <div>
      Button
    </div>
  )
}
export default Button
```
Console’a bakalım

<img src ='https://miro.medium.com/v2/resize:fit:720/format:webp/1*bmIzGmgO9_3pY-bdLQHptw.png'/>


<h2>Context Provider</h2>
Burada genel olarak context’den sağlamış olmuş datalarımız değiştiğinde, kullanılan componentlerde de anlık olarak bir değişim olup olmadığını inceleyeceğiz.

React’da children isimli bir olay var. Biz App.js içerisinde Button içerisinde bir p tag’i tanımlayalım.

```js
import './App.css';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="dark">
        <Button>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Delectus beatae consequatur quidem, ullam aut dolor at earum modi 
            laudantium provident minus molestiae tempore doloribus, 
            impedit cumque aliquid! Harum, recusandae quaerat!</p>
        </Button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
```

Bu p tag’ini Button.js den çağırırken şöyle kullanırız.

```js

import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Button({children}) {
    const data=useContext(ThemeContext);
    // console.log(data);
  return (
    <div>
      Button ({data})
      {children}
    </div>
  )
}
export default Button
```

Ekran görüntüsü

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*6s4iy4YA3bX15Ik-StkDsw.png'/>

Daha önce Provider’ı App.js de tanımlamıştık. Daha temiz bir görünüm için Provider’ı context’imiz içerisinde tanımlayabiliriz.

ThemeContext.js içeriğini şu şekilde değiştirelim.

```js
import { createContext } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children})=>{
    return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
export default ThemeContext;

```

App.js içerisindeki import ve ThemeContext içeriğini de şu şekilde değiştirelim.

```js
import './App.css';
import {ThemeProvider}from './context/ThemeContext';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Button/>
      </ThemeProvider>
    </div>
  );
}

export default App;


```
Bu sayede context ile ilgili tüm işlemlerimizi ThemeContext.js dosyası içerisinde hallediyoruz ve kodumuzu daha düzenli hale getirmiş oluyoruz.

Şimdi de dark datasını bir state olarak tanımlayalım.

```js
import { createContext, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children})=>{
    const [theme, setTheme ]= useState("dark");
    const values={
        theme,
        setTheme,
    };
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
export default ThemeContext;

```
Yukarıda ThemeContext.js içerisinde useState ile varsayılan datayı dark olarak aldık. values objesine theme ve setTheme’i gönderdik. values’i de value’ya atadık.

Button.js içerisinde ThemeContext’ten aldığımız theme’i ekranda gösterelim.



```js

import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Button() {
    const {theme, setTheme}=useContext(ThemeContext);
    //  console.log(data);
  return (
    <div>
     Active Theme : {theme}
    </div>
  )
}
export default Button
```


<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*6s4iy4YA3bX15Ik-StkDsw.png"/>


Button.js de bir buton tanımlayalım ve bu butona tıklandığında setTheme çalışsın ve Active Theme’nın durumunu değiştirsin. Her tıklandığında durum değişecek.



```js

return (
    <div>
     Active Theme : {theme}
     <br />
     <button onClick={() => setTheme("light")}>Change Theme</button>
    </div>
  )
```

<p>Bu işlemleri başka bir component’de de yapmaya çalışalım. components dizini altında Header.js adında bir dosya oluşturalım. Gerekli işlemleri daha önce yaptığımız gibi yapıyoruz.<p/>




```js

import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
function Header() {
    const {theme, setTheme}=useContext(ThemeContext);
  return (
    <div>
     Header Active Theme : {theme}
     <br />
     <button onClick={() => setTheme(theme ==="light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Header

```


Görüldüğü gibi tek butona basılmasına rağmen farklı iki componentte bulunan theme değerleri aynı anda değişti. Bunu bize context yapısı sağladı.

<h3>Theme Switcher Yapımı</h3>

Elimizdeki theme datasını kullanarak bir stillendirme yapalım. dark datası seçildiği anda ekran siyah olsun, light datası seçildiğinde ise ekran beyaz olsun.

App.js’i sarmalayan bir container yapımız yok. Bu yüzden components altında Container.js adlı bir dosya oluşturalım. Bu dosyaya App.js içerisindeki Header.js ve Button.js’i taşıyalım. Container.js yi App.js’de import edelim.


App.js

```js

import {ThemeProvider}from './context/ThemeContext';
import Container from './components/Container';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Container/>
      </ThemeProvider>
    </div>
  );
}

export default App;

```
Container.js
```js
import React from 'react'
import Button from './Button';
import Header from './Header';
function Container() {
  return (
    <div>
      <Header/>
        <hr />
      <Button/>
    </div>
  )
}

export default Container
```
Artık Container.js içerisinde ThemeProvider’dan gelen datayı kullanabilmek için gerekli olan adımları yapmak kaldı.

Container.js

```js
import {useContext}from 'react'
import Button from './Button';
import Header from './Header';
import ThemeContext from "../context/ThemeContext"
import "../App.css"
function Container() {
    const {theme} =useContext(ThemeContext)
    console.log(theme);
  return (
    <div>
      <Header/>
        <hr />
      <Button/>
    </div>
  )
}

export default Container

```

Yukarıda gerekli import işlemlerini yaptık. Şimdi App.css içerisinde class tanımlarını tamamlayalım.


App.css

```css
.app {
  text-align: center;
  height: 100vh;
}
.dark {
  color: white;
  background-color: black;
}
```

Container.js içerisine render ettiğimiz alana className olarak ekleyelim.

```js
return (
    <div className={`app ${theme === "dark" ? theme:" "}`}>
      <Header/>
        <hr />
      <Button/>
    </div>
)

```


dark tema seçiliyken görünüm

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*oWB1duxlFCMRMUQux4RHzQ.png'/>

light tema seçiliyken görünüm

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*oWB1duxlFCMRMUQux4RHzQ.png'/>


<h2>Context Provider Side Effects</h2>

Biz dark ve light olarak 2 tema oluşturduk fakat sayfa yenilendiği anda bizim temamız default olarak tanımlandığı haline geri dönüyor. Buna bir çözüm bulalım.

Tema bilgisini browserdaki localStorage’da tutabiliriz. Ama önce theme’nın değişip değişmediğini useEffect ile yakalayalım.

ThemeContext.js

```js
useEffect(() => {
        console.log(theme)
    },[theme])

```
Console görünümü

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*tAu1DgeLBl2Qj6Y113bWPA.png"/>

Burada theme’daki değişimi yakaladık. Şimdi de localStorage’e yazdıralım.

ThemeContext.js

```js
useEffect(() => {
        localStorage.setItem("theme",theme);
    },[theme])
```

localStorage’e theme value’sunu kaydedebiliyoruz. Fakat sayfa yenilendiğinde, sayfamız daha önce default olarak verdiğimiz dark haline geri dönüyor.

```js
const [theme, setTheme ]= useState("dark");
```

Burada default olarak dark değilde localStorage’e kaydettiğimiz value’yu alabilirsek sorunumuzu çözeceğiz.

```js
const [theme, setTheme ]= useState(localStorage.getItem("theme"));
```

Böylelikle sayfa yenilense dahi daha önce seçilen tema ile devam edebiliyoruz, herhangi bir değişiklik olmuyor.

<h2>Multi Context</h2>


```js
import {createContext} from 'react';
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const values={
        id:1,
        username: "aliosman",
        bio : "lorem ipsum"
    };
return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
export default UserContext;

```

  Bu contexti App.js’de kullanalım.

App.js’de import ettik ve render ettiğimiz kısımda kullandık.

```js
import {ThemeProvider}from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Container from './components/Container';
function App() {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
        <Container/>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
```
Şimdi de UserContext.js’deki bilgileri kullanabilmek için components dizini altında Profile.js dosyasını oluşturalım.

```js
import {useContext} from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const data=useContext(UserContext);
    console.log(data);
  return (
    <div>
      
    </div>
  )
}
```

Profile.js’i Container.js içerisinde import edelim.

```js
import {useContext}from 'react'
import Button from './Button';
import Header from './Header';
import ThemeContext from "../context/ThemeContext"
import Profile from './Profile';
import "../App.css"
function Container() {
    const {theme} =useContext(ThemeContext)
    console.log(theme);
  return (
    <div className={`app ${theme === "dark" ? theme:" "}`}>
      <Header/>
        <hr />
      <Profile/>
      <Button/>
    </div>
  )
}

export default Container
```

Console’un nasıl göründüğüne bir bakalım. Profile altında sağlanmış olan dataları burada görebildik.


Kullanıcı bilgilerini ekrana da yazdıralım.
Profile.js
```js
import {useContext} from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const data=useContext(UserContext);
    // console.log(data);
  return (  
    <div>
      <code>{JSON.stringify(data)}</code>
    </div>
  )
}
```
<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Se8jV2d3HG4lh2v_99LmFg.png'/>

Bu kullanıcı bilgilerini bir state altında geçmeyi deneyelim.

UserContext.js

```js
import {createContext, useState} from 'react';
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser]=useState({
        id:1,
        username: "aliosman",
        bio : "lorem ipsum"
    });
    const values={
        user,
        setUser
    }
    // const values={
    //     id:1,
    //     username: "ali osman",
    //     bio : "lorem ipsum"
    // };
return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
export default UserContext;

```
Profile.js içeriği. UserContext.js den bize user ve setUser geliyor. data yı user olarak değiştirdik.


```js
import {useContext} from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const {user, setUser}=useContext(UserContext);
    // console.log(data);
  return (
    <div>
      <code>{JSON.stringify(user)}</code>
    </div>
  )
}
```

Kullanıcı giriş ve çıkış yapabilecek şekilde bir tasarımımız olacak bu yüzden, ilk etapda UserContext.js içerisindeki

```js
const [user, setUser]=useState({
        id:1,
        username: "aliosman",
        bio : "lorem ipsum"
    });
```

kodumuzun içeriği “null” olsun.

```js
const [user, setUser]=useState(null);
```

Profile.js içerisinde bir buton tanımlayacağız ve bu Log in butonuna basıldığında girilen user bilgilerini ekranda göstersin.


Profile.js

```js
import {useContext} from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const {user, setUser}=useContext(UserContext);
    // console.log(data);
    const handleLogin= () => {
        setTimeout(() => {setUser({id : 1, username : "zcakir", bio : "bilgisayar muhendisligi"})},1500)
    }
  return (
    <div>
        <button onClick={handleLogin}>Log in</button>
      <code>{JSON.stringify(user)}</code>
    </div>
  )
}
```

Log in butonuna basılmadan önce

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*DAGuWt5BGhUkUEGYhQT9aQ.png"/>

Log in butonuna basıldıktan 1.5 saniye sonra
<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*u4of7InS5TdETRBxq7YP_w.png"/>

Bazı eklemeler yapabiliriz. Örneğin butona basıldığı anda loading… şeklinde bir yazı gösterip 1.5 saniye sonrasında bilgileri ekranda gösterebiliriz.

Profile.js

```js
import {useContext, useState} from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const [loading, setLoading]=useState(false)
    const {user, setUser}=useContext(UserContext);
    // console.log(data);
    const handleLogin= () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id : 1, username : "zcakir", bio : "bilgisayar muhendisligi"});
            setLoading(false)
        },1500);
        
    }
  return (
    <div>
        <button onClick={handleLogin}>{loading ? "loading..." :" Log in"}</button>
      <code>{JSON.stringify(user)}</code>
    </div>
  )
}
```

Ekran görüntüleri :

Log in butonuna basılmadan önce

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*7fPWEQjeTp60w1BOML7I9Q.png"/>

Log in butonuna basıldıktan hemen sonra

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Iyfp41bGyxAaGMBOIrOKFg.png"/>

Eğer giriş yapılmışsa Log in butonu ekranda görünmesin istiyoruz.

Profile.js de şöyle render içerisinde şöyle bir düzenleme yaparak bu işi çözebiliriz.

```js
return (
    <div>
        {
            !user &&  <button onClick={handleLogin}>{loading ? "loading..." :" Log in"}</button>
        }
       
      <code>{JSON.stringify(user)}</code>
    </div>
  )

```
Log in butonuna basıldıktan sonraki ekranın görüntüsüne bakalım şimdide, görüldüğü üzere Log in butonu giriş yaptığımız için artık ekranda görünmüyor.

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UexgjmH3sF68gxfZcWRorw.png'/>

Giriş yapmış bir kullanıcı için çıkış butonu ekleyebiliriz.

Profile.js

```js
import {useContext, useState} from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const [loading, setLoading]=useState(false)
    const {user, setUser}=useContext(UserContext);
    // console.log(data);
    const handleLogin= () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id : 1, username : "zcakir", bio : "bilgisayar muhendisligi"});
            setLoading(false)
        },1500);
        
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        {
            !user &&  <button onClick={handleLogin}>{loading ? "loading..." :" Log in"}</button>
        }
       
      <code>{JSON.stringify(user)}</code>
      <br />
      {
        user && <button onClick={handleLogout}>Log out</button>
      }
    </div>
  )
}
```

<h3>Custom Context Hook</h3>

Biz context işleminde ilk önce ilgili componenti import edip useContext üzerinden kullanıyoruz. Birden fazla adım oluyor. Bunların hepsini tek bir yerde yapabiliriz.

ThemeContext.js’de useTheme ile import işlemi yapmış olduk.

```js
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children})=>{
    const [theme, setTheme ]= useState(localStorage.getItem("theme"));
    const values={
        theme,
        setTheme,
    };
    useEffect(() => {
        localStorage.setItem("theme",theme);
    },[theme])
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
const useTheme = () => useContext(ThemeContext)
export {ThemeContext, useTheme, ThemeProvider};
```

Bütün componentlerdeki ThemeContext olarak parametre gönderilen ve import edilen useContext’leri siliyoruz, useTheme ile değiştiriyoruz.

Button.js

```js
import {useTheme }from '../context/ThemeContext';

function Button() {
    const {theme, setTheme}=useTheme()
    //  console.log(data);
  return (
    <div>
     Button Active Theme : {theme}
     <br />
     <button onClick={() => setTheme(theme ==="light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}
export default Button
```

Container.js

  ```js
  
  import Button from './Button';
import Header from './Header';
import{ useTheme} from "../context/ThemeContext"
import Profile from './Profile';
import "../App.css"
function Container() {
    const {theme} =useTheme()
    console.log(theme);
  return (
    <div className={`app ${theme === "dark" ? theme:" "}`}>
      <Header/>
        <hr />
      <Profile/>
      <Button/>
    </div>
  )
}

export default Container
  ```

  Header.js

  ```js
  import {useTheme} from '../context/ThemeContext'
function Header() {
    const {theme, setTheme}=useTheme()
  return (
    <div>
     Header Active Theme : {theme}
     <br />
     <button onClick={() => setTheme(theme ==="light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Header
  ```

  Çalışma olarak önceki durumdan hiçbir farkı yok. Fakat her defasında useContext’i import etmekten kurtulmuş oluyoruz. Sadece useTheme’i import etmemiz yeterli oluyor.

Aynı işlemi bir de UserContext.js için yapalım. export const useUser= () => useContext(UserContext); diyip Profile.js’de import ederken useUser’ı import edip kullanmamız gerekecek.

UserContext.js


```js
import {createContext, useContext, useState} from 'react';
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const values={
        user,
        setUser
    }
    // const values={
    //     id:1,
    //     username: "aliosman",
    //     bio : "loremipsum"
    // };
return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
export const useUser= () => useContext(UserContext);

```

Profile.js

```js
import { useState} from 'react'
import {useUser} from '../context/UserContext'
export default function Profile() {
    const [loading, setLoading]=useState(false)
    const {user, setUser}=useUser()
    // console.log(data);
    const handleLogin= () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id : 1, username : "zcakir", bio : "bilgisayar muhendisligi"});
            setLoading(false)
        },1500);
        
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        {
            !user &&  <button onClick={handleLogin}>{loading ? "loading..." :" Log in"}</button>
        }
       
      <code>{JSON.stringify(user)}</code> 
      <br />
      {
        user && <button onClick={handleLogout}>Log out</button>
      }
    </div>
  )
}
```

Projemizin çalışmasında yine bir değişiklik yok, kodumuz daha yalın bir hale gelmiş oldu sadece.