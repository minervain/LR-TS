<h1> Lifecycle (Hayat Döngüsü) Nedir ? </h1>

<strong>Bir React componentinin hayat döngüsü, componentin oluşturulduğu an ve güncellendiği an itibariyle yaşadığı aşamalardır. Her bir hayat döngüsü aşaması, componentin verilerinin güncellenmesi veya yeniden render edilmesi gibi belirli işlemleri içerebilir.

Her component de bizler gibi doğar, yaşar, büyür ve ölür :/. </strong>

<h3>useEffect</h3>

<strong>Yaşam döngümüzdeki eventleri useEffect kullanarak yakalayabiliriz.

Hooklar herhangi bir if bloğu içerisinde olmamalı, componentin tepesinde bulunmalıdır.<strong>

```js
import { useState, useEffect } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ali");

  useEffect( () => {
    console.log(" number veya name state guncellendi")
  },[number, name]);

  useEffect( () => {
    console.log("Components mount edildi !")
  }, [])
  // bagimlilik arrayi [] : ici bos olursa component mount edildigi anda yakalayabiliriz demek oluyor. 

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}>Click Number</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Osman", "Yusuf")}>Click Name</button>
    </div>
  );
}

export default App;

```

useEffect ‘te useState gibi import edilir.

```js

  useEffect( () => {
    console.log(" number veya name state guncellendi")
  },[number, name]);

```

Burada [] bagimlilik arrayi oluyor. İçi boş olursa componentin mount edildiği anda yakalayabiliriz demek oluyor. Sadece number state i güncellendiğinde bilgi almak istiyorsak bu arrayin içine [number] yazmamız yeterli oluyor.


<h3>Component Unmount </h3>

<strong>“Component Unmount” terimi, bir component’in bir uygulamanın DOM üzerinden kaldırılması anlamına gelir.

Component unmount, component’in tamamen kaldırılması anlamına gelir ve component’in yaşam döngüsünde en son adımdır.</strong>


App.js dosyası içeriği

```js

import Counter from "./components/Counter"
import {useState} from "react";

function App() {
  const  [isVisible, setIsVisible]= useState(true);
    return (
    <div className="App">
    {isVisible && <Counter/>} 
    <br /> 
    <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
```

counter.js
```js
import {useState, useEffect} from "react";  

function Counter(){
    
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Fatma");

    useEffect( () => {
        console.log("Components mount edildi !")

        const interval= setInterval(() => {
            setNumber((n) => n+1);
        },1000);

    return () => clearInterval(interval)
    }, []);

    useEffect( () => {
        console.log(" number state guncellendi")
    },[number]);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number+1)}>Click Number</button>
            <hr />
            <h1>{name}</h1>
            <button onClick={() => setName("Zehra", "Yusuf")}>Click Name</button>
        </div>
    )

}
export default Counter;
```

Burada Toggle Counter butonuyla counterı unmount hale getirebiliyoruz.