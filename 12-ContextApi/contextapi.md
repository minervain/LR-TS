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