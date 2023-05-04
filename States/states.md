<h1>React State Nedir ? Nasıl Oluşturulur ?</h1>

<strong>State, bir uygulamanın bellekte tuttuğu verilerin durumunu ifade eder. Bu veriler, kullanıcının etkileşimi sonucu değişebilir ve uygulamanın diğer bölümlerinde kullanılabilir.

State oluşturmak için, öncelikle bir veri yapısı tanımlanmalıdır (örneğin, JavaScript objesi). Daha sonra, bu veri yapısını değiştirmek için bir güncelleme fonksiyonu yazılmalı ve bu fonksiyon React tarafından tetiklenebilecek şekilde tanımlanmalıdır. Son olarak, state verileri, component render fonksiyonunda kullanılabilir hale getirilmelidir.</strong>


Örnek kullanım

```js
import { useState } from "react"; //stateleri kullanmak icin import etmeliyiz.

function App() {
  const [name, setName]=useState('Ali'); //state tanımı
  const [age, setAge]=useState(22);
  return (
    <div className="App">
      <h1>Merhabaa {name} {age}</h1>
      <button onClick={()=>setName("Osman")}>Click Change Name</button>
      <button onClick={()=>setAge(24)}>Click Change Age</button>
    </div>
  );
}

export default App;

```

Click Change Name butonuna basıldığında Ali'yi Osman, Click Change Age butonuna basıldığında 22'yi 23 yapacaktır.

Herhangi bir state güncellendiği anda return deki görüntü render edilir-baştan oluşturulur.

<h1>Array States </h1>

<strong>Array State, bir uygulamada bir dizi verilerin durumunu ifade eden bir state türüdür. Bu veriler, kullanıcının etkileşimi veya diğer etkenler sonucu değişebilir ve uygulamanın diğer bölümlerinde kullanılabilir. Örneğin, bir to-do listesi uygulamasında yapılacaklar listesi, bir Array State olarak tanımlanabilir. Bu liste, kullanıcının yeni bir görev eklemesi veya mevcut bir görevin silinmesi gibi etkileşimler sonucu güncellenebilir.

Statelerde atama işlemi yaparken ilk bakılması gereken şey tanımladığımız state’in veri tipi. Ona göre bir atama işlemi yapılmalı. Yapılmazsa hata alınır.
…friends yazmazsak; friends içerisinde bulunanları korumaz setFriends ile atanan değeri kabul eder. Burada elimizdeki değerleri hem koruyup hem de yeni eleman eklemek istiyorsak …friends i mutlaka yazmalıyız.</strong>

örnk
```js
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(["Ali ", "Osman"]);
      <h2>Friends</h2>
      <br />
      {
        friends.map((friend, index) =>
          <div key={index}>
            {friend}
          </div>)
      }
      <button onClick={() => setFriends([...friends, "Tezcan"])}>Add new frend</button> 
    </div>
  );
}

export default App;

```


<h1>Object State</h1>

Örnek kullanım

```js
import { useState } from "react";

function App() {
  const [address, setAddress]=useState({title: "Isparta", zip: 12042002});


  return (
      <h2>Address</h2>
      <br />
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({title:"Antalya", zip:7022002})}>set address</button> 

    </div>
  );
}
```
Burada setAddress kısmında object’in tek bir elemanını değiştirmek istiyorsak; var olan diğer değerleri korumamız lazım. Bu yüzden yine …address dememiz gerekiyor. Yoksa sadece setAddress ile set edilen değer tutulur.