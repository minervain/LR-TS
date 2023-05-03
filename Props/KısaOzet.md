<h1> React Props Nedir ? </h1>

<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*-U1s017ON820Jl4TVxtFzw.png">


<h4>Props Nedir? Nasıl Kullanılır? </h4>

React içinde componentler arasında veri transfer etmek için kullanılan yapılardır. Props, component oluşturma sırasında tanımlanabilir ve component içinde değer alabilir.

Kullanım Örneği :



<h2> App.js dosyası içeriği </h2>

```javascript

import User from './components/User';
function App() {
  return (
   <>
<User name="AliOsman" surname="Ucar" isLoggedIn={true} age={29} /> 
   </>
  );
}

export default App;

```

<h3> User.js componenti içeriği </h3>

```javascript
// function User(props){
//     console.log(props)
//     return (
//        <h1> {props.isLoggedIn ? `${props.name} ${props.surname}` : "Giriş yapmadınız"}</h1>
//     )
// }
//ya da su sekilde de kullanabiliriz : 
function User({ name, surname, isLoggedIn, age }) {
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız"}
            </h1>

        </>
    )

}
export default User;

```

<p>Props’lara props.name, props.surname şeklinde de erişebiliriz ya da {name, surname} şeklinde de erişebiliriz.</p>


<h1>Döngülerde “key” Propu
</h1>

React döngüleri sırasında, her bir döngü elemanının benzersiz bir “key” prop’u tanımlanması önerilir. Bu anahtar, React’ın bu elemanların hangilerinin değiştiğini ve hangilerinin aynı kaldığını anlamasına ve performansı artırmasına yardımcı olur.

Kullanım Örneği


<h3>App.js dosyası içeriği</h3>

```javascript
import User from './components/User';
const friends2=[
  {
    name: "Apo",
  },
  {
    name: "Yusuf",
  },
  {
    name: "Kürsad",
  },
];

function App() {
  return (
   <>
<User name="Ali" surname="Osman" isLoggedIn={true} age={29} friends={["Ahmet", "Mehmet", "Yusuf"]} friends2={friends2} /> 
   </>
  );
}

export default App;

```

<h3>User.js componenti içeriği</h3>


```javascript

function User({ name, surname, isLoggedIn, age, friends, friends2 }) {
    return (
        <>
            <h1>
                {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız"}
            </h1>

            {friends.map((friend, index) => (
                <div key={index}>
                  {index}-{friend}
                </div>
            ))}

            {friends2.map((friend, index) => (
                <div key={index}>
                  {index}-{friend.name}
                </div>
            ))}     
        </>
    );

}
export default User;
```