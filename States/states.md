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