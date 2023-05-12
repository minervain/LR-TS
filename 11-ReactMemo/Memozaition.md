<h1>React Memozation<h1>
<img src='https://miro.medium.com/v2/resize:fit:3242/format:webp/1*dsDGP0ZaFt6L-oM8izMhLQ.png'/>


<h2>React.memo</h2>
Butona basıldığında 1’er 1’er artan sayacımız olsun. App.js de yapalım.

```js

import './App.css';
import { useState } from 'react';
function App() {
  const [number, setNumber]=useState(0);
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      
    </div>
  );
}
export default App;

```

Yeni bir component oluşturalım Header.js. Bu componentin render edilip edilmeme durumlarını consol’da log yaparak inceleyelim.

```js
import React from 'react'
function Header() {
console.log("Header component re-rendered")
  return (
    <div>
      Header
    </div>
  )
}
export default Header

```

Sayfa her yenilendiğinde Header tekrar render ediliyor. Header her butona basıldığında da yeniden render ediliyor. Ama butona her basıldığında Header’ın render edilmemesi gerekmez miydi, peki neden render ediliyor ? App.js üzerinde bir state’imiz var ve bu state ile butona basıldığında arttırma işlemi yapıyoruz. Arttırma işlemi olduğu anda state de değiştiği için return içerisinde bulunan her şey yeniden render ediliyor. Header da return içerisinde olduğundan her seferinde o da render ediliyor.

Burada amacımız gereksiz render işlemlerini önlemek çünkü gereksiz render işlemi bizim için büyük bir sıkıntı. Peki böyle durumlarda ne yapmamız gerekiyor ?


Componenti dışa aktarırken React.memo(disaAktarilacakComponentAdi) diyip React.memo ile sarmalamamız gerekiyor. Bu sayede gereksiz render problemi yaşamayacağız.

```js
import React from 'react'

function Header() {
console.log("Header component re-rendered")
  return (
    <div>
      Header
    </div>
  )
}

export default React.memo(Header)
```

Peki bu Header ne zaman render edilecek ? Header componentine geçtiğimiz proplar ne zaman değişirse Header o zaman yeniden render edilecek. Eğer number’ı Header property olarak alsaydı, number’ın her artışında Header yeniden render edilecekti. Dolayısıyla buradaki render işlemi gereksiz bir render işlemi olmaktan çıkıyor.

Özetle : React.memo’yu kullandığımızda proplar karşılaştırılır ve eğer aynıysa baştan render edilmez, ama değişen varsa baştan render edilir.

```js

import React from 'react'

function Header() {
console.log("Header component re-rendered")
  return (
    <div>
      Header
    </div>
  )
}

export default React.memo(Header)
```

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*te6Z3tkwCppl5WhoUH7P3A.png'/>

Peki bu Header ne zaman render edilecek ? Header componentine geçtiğimiz proplar ne zaman değişirse Header o zaman yeniden render edilecek. Eğer number’ı Header property olarak alsaydı, number’ın her artışında Header yeniden render edilecekti. Dolayısıyla buradaki render işlemi gereksiz bir render işlemi olmaktan çıkıyor.

Özetle : React.memo’yu kullandığımızda proplar karşılaştırılır ve eğer aynıysa baştan render edilmez, ama değişen varsa baştan render edilir.

<h3> useMemo</h3>

App.js’de data isimli bir object tanımlayalım ve bu object’i Header prop olarak alsın.

```js
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
function App() {
  const [number, setNumber]=useState(0);
  const data={name :" Ali"};
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      
    </div>
  );
}

export default App;
```

Header.js

```js
import React from 'react'

function Header({number,data}) {
console.log("Header component re-rendered")
  return (
    <div>
      Header-{number}
      <br /><br />
      <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default React.memo(Header)

```

“React.memo’yu kullandığımızda proplar karşılaştırılır ve eğer aynıysa baştan render edilmez, ama değişen varsa baştan render edilir” demiştik. Fakat burada proplar değişmediği halde her butona basıldığında yeniden bir render etme işlemi söz konusu. Peki neden ? Javascript’te şöyle bir durum söz konusu primitiveler birbirine denk olabilirler. Örneğin 5===5. Ama bir object’in başka bir object’ e olan denkliği sorgularsak burada karşımıza farklı bir durum çıkacak. Çünkü iki object’in bellek üzerindeki referansları farklı (bu durum array’lerde de aynıdır), dolayısıyla bunların denkliğini sorguladığımız zaman karşımıza false çıktısı geliyor. Her butona basıldığında bu ikisinin farklı proplarmış gibi algılanması sonucunda da Header yeniden render ediliyor.


Böyle bir sorunda 2 çözüm yolumuz var.

Object’i component’in dışında bir yerde tanımlayabiliriz.

```js
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
const data={name :" Ali"};
function App() {
  const [number, setNumber]=useState(0);
 
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      
    </div>
  );
}

export default App;

```

Object’i kesinlikle component içerisinde tanımlamamız gerekiyorsa :

useMemo hook’unu kullanmak

İlk olarak useMemo’yu import ediyoruz.


Syntax olarak useEffect()’e benziyor. useMemo’da bir dependency array alıyor.

```js

const data=useMemo(() => {
    return {name:"Ali"}
  },[]);

```

Böylelikle Header componenti yeniden render olmuyor. Peki Header componenti ne zaman render edilecek ? Array’de belirtilen değerler değiştiği anda bir hesaplama yapılır ve ona göre render edilir.

<h3>useCallback</h3>

Butona basıp arttırma işlemini Header componenti içerisinde yapalım.

App.js

```js
import './App.css';
import { useState, useMemo } from 'react';
import Header from './components/Header';
function App() {
  const [number, setNumber]=useState(0);
  // const data=useMemo(() => {
  //   return {name:"Ali", number}
  // },[]);
  return (
    <div className="App">
      <Header inc={()=>setNumber(number+1)}/>
      <h1>{number}</h1>
   
      
    </div>
  );
}

export default App;
```

Header.js

```js
import React from 'react'

function Header({inc}) {
console.log("Header component re-rendered")
  return (
    <div>
      Header
      <br /><br />
      <button onClick={inc}>Click</button>
    </div>
  )
}

export default React.memo(Header)
```

Burada gördüğümüz üzere number her arttığında Header yeniden render edilmekte. Peki neden ? App.js de return’ün içi number her arttığında render oluyor. return içerisinde bulunan “ <Header inc={()=>setNumber(number+1)}/>” da baştan hesap ediliyor. Baştan hesaplanınca Header componentinde React.memo olmasına rağmen sanki yeni bir prop varmış gibi algılanıp tekrar tekrar render ediliyor.

Bizim burada yapmamız gereken propun değişmediğini aynı kaldığını söylemek olacak. Bunu “useCallBack” hooku ile söyleyeceğiz. Bu hook ile fonksiyon döneceğiz. Dependency array de verdiğimiz datalar değişene kadar yeniden render işlemi gerçekleşmiyor.

useCallback’i import edelim.


Kullanımı useEfect ve useMemo’ya benziyor.

```js
const inc= useCallback(() => {
  setNumber(number+1)
},[number])
```


Burada karşımıza bir problem çıkıyor. number’ı array içerisinde vermezsek number’ı hep 0 olarak alıyor. 0+1 şeklinde devam ediyor. Eğer number’ı array içerisinde verirsek de Header’ı her number değiştiğinde render edecek. Peki bunu nasıl çözeceğiz ? Array’deki number’dan kurtulmamız lazım.


```js

const inc= useCallback(() => {
  setNumber(n=>n+1)
},[])
```

diyerek number kullanmadık. n⇒n+1 ile bu işi çözdük.

Eğer bir fonksiyonumuz varsa ve bu fonksiyonu herhangi alt bir componente geçiriyorsak; o alt component’de de tekrar tekrar render edilmesini istemiyorsak fonksiyonlar üzerinde useCallback’i kullanabiliriz.