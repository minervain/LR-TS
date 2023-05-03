Props

Props Nedir?

Props, React'te özellikler anlamına gelen ve bir bileşenden diğerine ve çoğunlukla ana bileşenden alt bileşene veri aktarmak için kullanılan özel bir anahtar kelimedir. Propların bir veri taşıyıcısı veya veri taşıma aracı olduğunu söyleyebiliriz.

```javascript

// Fonksiyon syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// Fonksiyonu çağırdık

getUserInfo('AliOsman', 'Ucar', 'Turkiye')

//component syntax

// Companentler Büyük harfle başlamalıdır
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// bir bileşeni çağırırken veya başlatırken, bu bileşenin üç özelliği vardır ve biz bunlara props diyoruz: firstName, lastName, country
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
```

Bir önceki bölümde aşağıdaki gibi data enjekte etmiştik ve bugün bu datayı props olarak değiştireceğiz.
```javascript
const welcome = 'hello'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Ali Osman',
  lastName: 'Ucar',
}
const date = 'Oct 4, 2020'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
)

```
Props object`

React props, bir React bileşeni oluşturduğunuzda anında elde ettiğiniz bir nesnedir. Bileşene özellikleri aktarmadan önce, props nesnesinde ne elde ettiğimize bir bakalım.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}


// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```
Yukarıdaki console.log(props) içinde, boş bir nesne({}) alırsınız. Bunun anlamı, bileşeni başlattığınızda herhangi bir öznitelik veya özellik iletmezseniz, donanımlar boş olacaktır, aksi takdirde nitelikler olarak ilettiğiniz verilerle doldurulacaktır ve bu özniteliklerin uygun adı donanımlardır.

Basit bir örnekle başlayalım. Aşağıdaki örnekte karşılama dizesi, Başlık bileşenlerinde donanım olarak geçirilmiştir.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'hello'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

// Kapsayıcı component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='hello' />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

Şimdi, console.log(props) yaptığınızda aşağıdaki nesneyi almalısınız, bu, Header componenttine ilettiğimiz karşılama özelliğinin props nesnesinin içinde bulunabileceği anlamına gelir.
{
  welcome: 'Welcome to 30 Days Of React'
}

Yukarıdaki kodda da görebileceğiniz gibi, sadece tek bir prop'u Header bileşenine, yani karşılama props'una geçirdik. Bir bileşenin bir veya daha fazla donanımı olabilir. Prop'lar farklı veri türleri olabilir. Bir dize, sayı, boole, dizi, nesne veya işlev olabilir.




String props type

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}


// Functional Component
const App = () => (
  <div className='app'>
    <Header
      welcome='hello'
      title='Getting Started React'
      subtitle='JavaScript Library'
      firstName='Ali Osman'
      lastName='Ucar'
      date='Oct 4, 2023'
    />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```

Tarayıcı konsolunu kontrol ederseniz, aşağıdaki nesneyi alırsınız.

```javascript
{
firstName: "Ali Osman",
lastName: "Ucar",
date: "Oct 4, 2023"
subtitle: "JavaScript Library"
title: "Getting Started React"
welcome: "hello"
}
```

Yukarıdaki örnekte de görebileceğiniz gibi, propların değeri statik olarak yazılmıştır. Bununla birlikte, biraz mantık uygulamak istiyorsak, statik olarak yazılmış verilerle uygulamak zordur, bu nedenle bir değişkeni destek olarak kullanmak daha iyi olacaktır. Aşağıdaki örneği görelim:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const welcome = 'hello'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const firstName = 'Ali osman'
  const lastName = 'Ucar'
  const date = 'Oct 4, 2023'

  return (
    <div className='app'>
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```


Number props type


```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```




Boolean props type

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 2015
  const age = currentYear - birthYear // 15 years

  let status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)  ```
```



Array props type

Programlamada diziler ve nesneler, farklı problemleri çözmek ve verileri daha yapılandırılmış bir şekilde depolamak için en sık kullanılan veri yapılarıdır. Bu nedenle, dizi biçimindeki verilerle oldukça sık karşılaşıyoruz. Bir diziyi bir bileşene destek olarak iletelim

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Skills = (props) => <ul>{props.skills}</ul>

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Sonucu tarayıcıda görürseniz, beceri öğelerinin biçimlendirilmesi gerekir. Bu nedenle, oluşturmadan önce, her beceri arasında bazı öğelere sahip olmalıdır. Diziyi değiştirmek ve bir li öğesi eklemek için map yöntemini kullanabiliriz. React'te iyi hissetmek için işlevsel programlama haritasına, filtrelemeye ve azaltmaya çok aşina olmalısınız, değilse lütfen 1. gün JavaScript tazelemesine geri dönün. Diziyi değiştirmek için haritayı uygulayalım.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Skills Component
const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>)
  return <ul>{skillList}</ul>
}

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Object props type

Bir nesneyi bir React bileşenine destek olarak iletebiliriz. Bir örnek görelim. Önceki Header props'u nesne olarak değiştirebiliriz. Şimdilik daha iyi anlamak için birkaç özelliği değiştirelim.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  )
}


// Functional Component
const App = () => {
  const data = {
    welcome: 'hello',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```



Şimdi, önceki tüm Başlık özelliklerini bir nesneye değiştirelim.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'hello',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Ali Osman',
      lastName: 'Ucar',
    },
    date: new Date(), //tarihin insan tarafından okunabilir bir formatta biçimlendirilmesi gerekiyor
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```


<h2>Function prop types </h2>

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


// Functional Component Kapsayıcı
const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```



Süslü parantez içine bir fonksiyon bile yazabiliriz.

````javascript
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// Functional  Kapsayıcı component
const App = () => {
  return (
    <div className='app'>
      <Button text='Say Hi' onClick={() => alert('Hi')} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)

```
````


Şimdi, Props olarak farklı fonksiyonları uygulayalım

```javascript
import React from 'react'
import ReactDOM from 'react-dom'



// Functional Component
const App = () => {
  const greetPeople = () => {
    alert('hello')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```

Yukarıdaki örnekte, onClick, greetPeople işlevini tutmak için bir donanımdır. HTML'de onclick, onmouseover, onhover, onkeypress ve benzeri olay işleyicileri bulunur. React'te bu işleyiciler camelCase'dedir. Örneğin onClick, onMouseOver, onKeyPress vb. React'teki olayları diğer bölümde detaylı olarak ele alacağız.

Bir React bileşeninde props olarak işlevin nasıl ele alınacağını net bir şekilde anlamak için props olarak daha fazla işlev görelim.

Bu bileşen ayı, tarihi ve yılı bir uyarı kutusu olarak gösterir.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

 //Saati Pzt tarihinde, yıl biçiminde görüntüleme işlevi, örneğin 4 Ekim 2020
 
 const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
 }

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// Functional Component
const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('hello')
  }
  return (
    <div className='app'>
      <Button text='show time' onClick={handleTime} />
      <Button text='Greet People' onClick={greetPeople} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

<h2> Destructing Props </h2>
Header bileşenindeki propları yok edelim. Props olarak geçtiğimiz her şey props nesnesinde saklanır. Bu nedenle props bir nesnedir ve özelliklerin yapısını bozabiliriz. Object props örneğinde yazdığımız proplardan bazılarını parçalayalım. Birçok şekilde yok edebiliriz:

1. step step destruct

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Ali osman',
      lastName: 'ucar',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)

```

2. tek satırda destruct

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'ali osman',
      lastName: 'ucar',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```
3. Parantez içindekileri yok etme

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'ali osman',
      lastName: 'ucar',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Şimdi elimizdeki tüm bileşenleri parçalayalım ve birleştirelim. Donanımları bir bileşenden diğerine, tipik olarak ebeveynden alt bileşene aktarıyoruz. Örneğin, Main bileşenindeki techs, user, greetPeople ve handleTime props ana bileşen Main'den alt bileşenler TechList ve UserCard'a aktarılmıştır. Aşağıda, tüm kodların yapısını bozup temizlemiş olacaksınız.

```javascript 
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'hello',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'ali osman',
      lastName: 'ucar',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: aliosmanImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('hello')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```