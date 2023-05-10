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

<h2>useFormik</h2>

Kodumuzu daha güzel, daha temiz bir hale getirmek için neler yapabiliriz bir bakalım.

useFormik ile render kısmını daha temiz bir hale getiririz.

Kullanımına bakalım. İlk olarak useFormik’ import edelim.

```js
import { Formik, useFormik } from 'formik';

```

Daha önce return içerisinde yazmış olduğumuz initialValues’i useFormik kullanarak yapacağımız değişkene atayalım.

```js
const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'AliOsman',
          lastName: 'Ucar',
          email: 'aliosmanucar987@gmail.com',
          gender: 'male',
          hobies: [],
          country:"Turkey"
    },
    onSubmit: values => {
      console.log(values);
    },
  });

```

Görünüme baktığımızda herhangi bir değişiklik olmadı ama render edilecek kodumuz da bir sadelik ortaya çıktı.

<h3>Form Validasyonları</h3>

Validasyon işlemlerini yupjs ile yapıyoruz. yupjs backend ve frontend ile kullanılabilir.

yupjs kurulumuna geçelim :

cmd de çalıştığımız dosya dizini içerisine girelim ve aşağıdaki kodu çalıştıralım.

<!-- npm i yup -->



Daha derli toplu olsun diye yeni bir SignUp adında component oluşturalım ve App.js de yaptığımız işleri taşıyalım.


components dizini altına bir de validation.js adında bir component oluşturalım. Bu da bizim yupjs’i import edeceğimiz componentimiz olsun.

```js
import * as yup from 'yup';

```

Sonrasında bir şema yazacağız. Bu şemada bütün inputlarımızın hangi kurala tabi olduğunu belirtebiliyoruz.

```js
const validations = yup.object().shape({
    email: yup.string().email(),
});
```

SignUp.js de validation.js’i import edelim


SignUp.js içerisindeki validations’u kullanalım, 
validationSchema:validations diyerek kullandık.

```js
const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
              email: '',
              password: "",
              passwordConfirm: ""
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations
      });
```

Boş olduğunda da gönderilmesini engellemek istersek kodumuza required()’ı eklememiz gerekecek.

```js
import * as yup from 'yup';
const validations = yup.object().shape({
    email: yup.string().email().required(),
});
 
export default validations;
```

Email formatına uygun bir şey girilmediği sürece submit işlemi yapılmayacaktır. 

Email kısmının zorunlu olduğunu belirtmiştik, password kısmının da zorunlu olduğunu belirtelim.

```js
password: yup.string().min(8).required()
```
Burada minumum 8 karakterden oluşan bir parola girilmesini bekliyoruz.


passwordConfirm ile girilen şifreyi kontrol edeceğiz. Burada kontrolü oneOf() ile yapacağız.

```js
import * as yup from 'yup';
const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required()
});
 
export default validations;
```

3 alanda doldurulmadığı ve password ile passwordConfirm alanı aynı olmadığı sürece submit işlemi yapamıyoruz.

<h3>Hata mesajları</h3>

Şimdide hata mesajlarının görüntülenmesi işlemini yapmaya çalışalım.

Öncelikle emailden başlayalım. Email formatında giriş yapılana kadar ekranda kırmızı renkli bir uyarı versin.

SignUp.js içerisinde errors tanımı yapalım, hataları errors üzerinden yakalayabiliriz.

```js
const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
              email: '',
              password: "",
              passwordConfirm: ""
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations
      });

```
Email inputunun hemen altında şu kodu yazalım.

```js
{
	errors.email && (<div className='error'>{errors.email}</div>)
}
```

Böylelikle şöyle bir ekran görüntüsü elde edeceğiz.
Email formatında giriş yapılmazsa
<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*9uvpnYWZo8u4JzCLvhLDQA.png'/>

Burada bir problemle karşılaşıyoruz.

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Xe2IH47JJ46euZ4lTzupgA.png'/>


Herhangi bir inputa giriş yapmaya başlayınca diğer inputlarda da uyarı almaya başlıyoruz. Kullanıcı kullanımı için bunu önlemeliyiz. İlgili inputa daha önce touch olmuş mu bunu anlayıp ona göre hareket etmemiz lazım.

Herhangi bir touch işlemi kontrolü yapabilmemiz için formik’in “touched” adında bir kullanımı var.

```js
const {handleSubmit, handleChange, values, errors, touched} = useFormik({
        initialValues: {
              email: '',
              password: "",
              passwordConfirm: ""
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations
      });
```

Inputtan ayrıldığımız anda daha önce handleChange’i çalıştırdığımız gibi “handleBlur” u çalıştırmamız lazım.

```js
const {handleSubmit, handleChange,handleBlur, values, errors, touched} = useFormik({
        initialValues: {
              email: '',
              password: "",
              passwordConfirm: ""
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations
      });
```

Sonrasında inputlara “onBlur={handleBlur}” u eklememiz gerekiyor.
```js
<label>Email</label>
<input name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} />
```


Birde inputların altında oluşturduğumuz {errors. ….. } ile başlayan bloklarımızda touched.inputName’i eklememiz lazım.

```js
{
  errors.email && touched.email && (<div className='error'>{errors.email}</div>)
}
```

Ayrıca istersek hata mesajlarını özelleştirebiliriz. Mesela geçersiz formatta bir email girilmesi durumunda ekranda “Geçersiz bir email girdiniz!” yazsın. Bu işlemi validation.js sayesinde yapacağız.

```js
import * as yup from 'yup';
const validations = yup.object().shape({
    email: yup.string().email("Geçersiz bir email girdiniz!").required(),
    password: yup.string().min(8).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required()
});
 
export default validations;
```
<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*9Ivysse7_ZWpKlAJXaUTVQ.png'/>

Eğer zorunlu kılınan(required()) alan varsa ve boş bırakılmışsa oraya da “Zorunlu alan” uyarısını verdirebiliriz. Yine bu işlemi validation.js sayesinde yapacağız.

```js
import * as yup from 'yup';
const validations = yup.object().shape({
    email: yup.string().email("Geçersiz bir email girdiniz!").required("Zorunlu alan"),
    password: yup.string().min(8).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required()
});
 
export default validations;

```

<img src='https://miro.medium.com/v2/resize:fit:4800/format:webp/1*mC6eTe0CcD6m49pvvzIznw.png'>


Bu işlemleri diğer inputlar içinde yapalım. İşlemlerimizi yine validation.js içerisinde yapıyoruz.

```js
import * as yup from 'yup';
const validations = yup.object().shape({
    email: yup.string().email("Geçersiz bir email girdiniz!").required("Zorunlu alan"),
    password: yup.string().min(8, "Parola 8 karakterden kısa olamaz").required("Zorunlu alan"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"Girilen şifre password ile aynı değil").required("Zorunlu alan")
});
 
export default validations;
```
