<h1>React’da Stillendirme Temelleri</h1>

<img src='https://www.arkhesanat.com/dosyalar/2015/03/renklerin-anlami.jpg'/>

<h3>Stil Tanımı Yapmak</h3>
React da stil tanımları CSS deki stil tanımlarına benzerdir. Ama birkaç farklılık vardır.
Stilleri object {} içerisinde tanımlarız.

```js
<div style={{color:"red"}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Reprehenderit veniam laboriosam asperiores accusantium nihil ut omnis minus ad ducimus, ipsa minima, 
ipsum sed ullam ex sequi voluptatum dolorum perspiciatis animi?
</div>

```

<h2>Module CSS </h2>
<strong>Burada önce soruna odaklanmamız lazım. Sorunumuz : birbirinden farklı style.css dosyalarında aynı isimli değişken kullanırsak; en son tanımladığımızı kabul ediyor. Yani A dizininin altında bulunan bir style dosyasında title class’ ı içerisinde A ya ait yazı rengi kırmızı, aynı şekilde B dizininin altında bulunan bir style dosyasında bulunan bir style dosyasında title class’ı içerisinde B ye ait yazı rengini yeşil tanımlarsak; en son yeşil tanımlandığı için onu kabul eder, kırmızıyı görmez.

Bizim bu sorunu çözmemiz lazım.

Burada karşımıza Module CSS kavramı çıkıyor. Peki ne yapmalıyız ?</strong>

<p>style dosyası oluştururken doğrudan .css olarak değil de dosya ismini yazdıktan sonra .module.css olarak yazmamız gerekiyor. Örneğin “style.module.css”</p>

<img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*cQIz6bfwbtD9bA-AIPyZ-A.png'>

<b>style’ı console’a bastırdığımızda görüyoruzki farklı id’leri var.

Peki biz bu id’leri nasıl kullanacağız?

A dizinin index.js dosyası içeriği<b>

```js
import React from 'react'
import style from "./style.module.css"

console.log(style)
function A() {
  return (
    <div className={style.title}> //MODULE CSS KULLANIMI
      A
    </div>
  )
}

export default A

```
<strong>
Burada görüldüğü üzere className=”title” olarak değil de className={style.title} olarak belirtirsek o id’leri kullanabiliriz. Aynı şeyi B’deki index.js ye uygularsak artık ikisinin beraber gibi değil de ayrı ayrı davrandığını görürüz.

Module CSS sayesinde hiçbir style tanımımız çakışmaz ve kolaylıkla kullanabiliriz. </strong>