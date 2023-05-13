<h1>Context Api </h1>d

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