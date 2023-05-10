<h2>React Formik İle Form Yönetimi</h2>

<img src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*z9lOCDcy6KcBY_7qam436g.png'/>
Kurulum
Formik aracını kullanarak form yönetimimizi daha basit bir şekilde yapabiliriz.

formik.org sayfasına girdikten sonra Get Started butonuna tıklıyoruz ve buradan sol tarafından Example kısmından örnek form kodlarına ulaşabiliriz.

cmd’de çalışacağımız react dosyası içerisine formik’ i kuralım :

```js
yarn add formik
```

Kurulumdan sonra App.js dosyamızda formik ile alakalı import işlemlerini yapalım. Ben Example kısmında Basic olan formik’i seçtim, o yüzden işlemleri ona göre devam ettireceğim.

```js
import { Formik, Field, Form } from 'formik';

```

<strong>Formik componentiyle formumuzu tanımlayalım. Şimdi örnek kodumuza bakalım. </strong>

```js
import './App.css';
import { Formik, Field, Form } from 'formik';
function App() {
  return (
    <div className="App">
       <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <br /><br />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <br /><br />
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
}

export default App;
```


Burada initialValues’da kullanılan değişken isimleri Field componenti içerisinde kullanılan name=”” ile aynı olmak zorundadır.

<h2>handleSubmit & handleChange</h2>

Biz eğer formik’in bize vermiş olduğu Form ve Field componentlerini kullanmayıp, doğrudan HTML’deki formu ve input nesnelerini-etiketlerini kullanalım istiyorsak; birkaç değişime ihtiyacımız olacak

```js
import { Formik} from 'formik';


```


Form ve Field componentlerini HTML etiketleriyle değiştirelim.

handleSubmit ve handleChange, iki yaygın kullanılan event handler fonksiyonudur. Kodumuzda değişiklik yaparken bu iki fonksiyonu kullanarak ilerleyeceğiz.

<strong>handleChange genellikle form alanlarına kullanıcı tarafından veri girildiğinde tetiklenen bir event handler'dır. Bu fonksiyon, kullanıcının veri girdiği form alanındaki değeri okur ve bir state değişkenine veya bir form veri nesnesine atar. Böylece kullanıcının girdiği veriler, başka bir yerde kullanılabilir veya işlenebilir hale gelir.</strong>

<strong>handleSubmit ise genellikle bir formun gönderimine (submit) ilişkin bir event handler'dır. Bu fonksiyon, kullanıcının bir formu göndermesi durumunda form verilerini işler ve sunucuya gönderir. İşlem tamamlandığında bir sonuç mesajı veya başka bir tepki görüntülemek için bir fonksiyon çağrılabilir.</strong>

Bu event handler fonksiyonları, React ve diğer JavaScript tabanlı web framework’leriyle birlikte kullanılırlar.

```js
import './App.css';
import { Formik} from 'formik';
function App() {
  return (
    <div className="App">
       <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
     {
      ({handleSubmit, handleChange}) =>(
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" onChange={handleChange} />
        <br /><br />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" onChange={handleChange} />
        <br /><br />
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      )
     }
    </Formik>
    </div>
  );
}

export default App;
```

<h3>Formik’te Radio / Checkbox / Dropdown İle Çalışmak</h3>


Radio Button:

Input’umuzun type’ini “radio” olarak verirsek Radio Button tanımı yapmış oluruz.

```js
 <span>Male</span>
  <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender==="male"}/>
  <span>Female</span>
  <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender==="female"} />
```

Burada checked={values.gender===”…”} ile gelen cinsiyet neyse o radio button aktif olarak görünecek.

gender’ı tanımlamamız lazım

```js
initialValues={{
          firstName: 'AliOsman',
          lastName: 'Ucar',
          email: 'aliosmanucar987@gmail.com',
          gender: 'male'
        }}
```

Görünümleri
<img src='https://miro.medium.com/v2/resize:fit:554/format:webp/1*x2Gz0BcQZEJ14J3ZWVtVJw.png'>

Form’da girilen bilgileri ekranda da göstermek için

```js
{JSON.stringify(values)}
```

CheckBox

Input’umuzun type’ini “checkbox” olarak verirsek Radio Button tanımı yapmış oluruz.

```js
<div>
 Football
 <input type="checkbox" name='hobies' value="football" onChange={handleChange} />
</div>

<div>
 Cinema
 <input type="checkbox" name='hobies' value="cinema" onChange={handleChange} />
</div>

<div>
 Photography
 <input type="checkbox" name='hobies' value="photography" onChange={handleChange} />
</div>
```


hobies’ı tanımlamamız lazım.

```js
initialValues={{
          firstName: 'AliOsman',
          lastName: 'Ucar',
          email: 'aliosmancuar987@gmail.com',
          gender: 'male',
          hobies: []
        }}

```


hobies’de birden fazla seçim yapabileceği için array olarak tanımlarız.



<h3>Dropdown</h3>

select etiketiyle seçme, option etiketiyle de seçilebilecek opsiyonları belirleyelim.

```js
<select name="country" onChange={handleChange} >
 <option value="tr">Turkiye</option>
  <option value="en">England</option>
 <option value="usa">USA</option>
</select>

```

country’i tanımlamamız lazım.

```js
initialValues={{
          firstName: 'AliOsman',
          lastName: 'Ucar',
          email: 'aliosmanucar987@gmail.com',
          gender: 'male',
          hobies: [],
          country:"Turkey"
        }}

```

