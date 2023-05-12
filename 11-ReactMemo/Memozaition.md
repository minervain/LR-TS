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