Javascript Fonksiyonu

bir javascript fonksiyonu nromal bir fonksiyon ya da arrow fonksiyon olabilir

```javascript
**const getUserInfo = (firstName, lastName, country, title, skills) => {
return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
    ' '
  )} `
}
// Fonksiyonu çağırdığımızda parametrelere ihtiyaç duyarız
const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(
getUserInfo('Ali Osman', 'UCAR', 'Turkey', 'FullStack Developer', skills)**
)

```

Javascript Classları

Sınıf, bir nesnenin planıdır. Farklı nesneler yaratmak için bir sınıf oluşturuyoruz. Ek olarak, üst sınıfın tüm yöntemlerini ve özelliklerini miras alarak alt sınıflar yaratabiliriz.

```Javascript
class Parent {
  constructor(firstName, lastName, country, title) {
    // this anahtar sözcüğü nesneleri başlatmak için kullanılır.Başlangıç değerini ayarlamak için
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.title = title
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `
  }
  parentMethod() {
    // Kod buraya gelir
  }
}

const p1 = new Parent('Ali Osman', 'Uçar', 'Turkiye', 'FullStack Developer')

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
    // this içeren kelimeleri bu alt parametreye bağlarız
  }
  getSkills() {
    let len = this.skills.length
    return len > 0 ? this.skills.join(' ') : 'No skills found'
  }
  childMethod() {
    // Kodlar buraya
  }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const child = new Child(
  'Ali Osman',
  'Ucar',
  'Turkiye',
  'FullStack Developer',
  skills
)

```

React Component Oluşturma

Bir JavaScript işlevi kullanarak, işlevsel bir React bileşeni oluşturabiliriz.

```javascript
// React component syntax
// normal fonksiyon ya da arrow fonksiyon kullanabiliriz
const jsx = <tag> Content </tag>
const ComponentName = () => {
  return jsx
}

Aşağıdaki ifade bir JSX öğesidir.


// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Hoşgeldin</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Ali Osman Uçar</p>
      <small>may 5, 2023</small>
    </div>
  </header>
)

// React Component
const Header = () => {
  return header
}

// veya jsx returnlarız

const Header = () => {
  return (
    <header style={headerStyles}>
      <div className='header-wrapper'>
       <h1>Hoşgeldin</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Ali Osman Uçar</p>
      <small>may 5, 2023</small>
      </div>
    </header>
  )
}

//Açıkça jsx bu şekildede returnsuz yazabiliriz

    const Header = () => (
  <header style={headerStyles}>
    <div className='header-wrapper'>
         <h1>Hoşgeldin</h1>
           <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Ali Osman Uçar</p>
      <small>may 5, 2023</small>
      </div>
    </div>
  </header>
)


```

Rendering Components

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Hoşgeldin</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Ali Osman Uçar</p>
      <small>may 5, 2023</small>
    </div>
  </header>
);

const rootElement = document.getElementById("root");
//ReactDom Paketini kullanarak jsx öğesini oluşturuyoruz
ReactDOM.render(<Header />, rootElement);
```

Şimdi, Üstbilgi, Ana ve Altbilgiyi saracak bir Uygulama bileşeni oluşturalım. Ardından, Uygulama bileşeni DOM'da işlenecektir.

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/aliosman.jpg";

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Hoşgeldin</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Ali Osman Uçar</p>
      <small>may 5, 2023</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={aliosman} alt='ali osman' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2023</p>
    </div>
  </footer>
);

//Kapsayıcı Component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
//App bileşenini ReactDOM paketi kullanarak oluşturalım
ReactDOM.render(<App />, rootElement);
```

React Component'te JSX'e veri enjekte etme

Şimdiye kadar, JSX öğeleri üzerinde statik veriler kullandık. Şimdi farklı veri türlerini dinamik veri olarak geçirelim. Dinamik veriler, diziler, sayılar, mantıksal değerler, diziler veya nesneler olabilir. Veri türlerinin her birini adım adım görelim. Bir JSX'e veri enjekte etmek için {} parantezini kullanırız.

//!! Bu bölümde sadece dizeleri enjekte ediyoruz

```javascript
import React from "react";
import ReactDOM from "react-dom";

const welcome = "Hosgeldin";
const title = "React öğren";
const subtitle = "JavaScript Library";
const firstName = "Ali Osman";
const lastName = "Ucar";
const date = "May 5, 2023";

// JSX element, header
const header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Yazan: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  );
};
const rootElement = document.getElementById("root");

ReactDOM.render(<Header />, rootElement);
```

Header bileşenine benzer şekilde, Main ve Footer bileşenine uygulayabiliriz.

```javascript
// To get the root element from the HTML document
const rootElement = document.querySelector(".root");
// JSX element, header
const welcome = "Hosgeldin";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Ali Osman",
  lastName: "Ucar",
};
const date = "Oct 25, 2023";

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Yazan: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = 2020;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={aliosmanImage} alt='aliosman image' />
    <h2>
      {author.firstName} {author.lastName}
    </h2>
  </div>
);

// JSX element, main
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <div>
        <p>
          başlamak için ön koşul{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
    </div>
  </main>
);

const copyRight = "2023";

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
);

ReactDOM.render(<App />, rootElement);
```

Componentlere css özelliği eklemek

```javascript
const Button = () => <button>action</button>

Düğme bileşeni , tek bir HTML düğme öğesinden yapılmıştır. JavaScript stil nesnesini kullanarak bu düğmeye stil verelim. Bir JavaScript CSS nesnesi yapmak için tüm CSS özellikleri camelCase olmalıdır. CSS değeri olarak birimi olmayan bir sayı iletirsek px olarak kabul edilir. Aşağıdaki örneğe bakın.

const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0',
  border: 'none',
  borderRadius: 5,
}
const Button = () => <button style={buttonStyles}> action </button>

```
rastgele bir onaltılık sayı görüntüleyen daha component fonksiyonu yazalım 

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

const rootElement = document.getElementById('root')

ReactDOM.render(<HexaColor />, rootElement)

```