<h1>Context Api </h1>d

<img src='https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png'/>

Herhangi bir component’de bir state oluşturduğumuzda, o state ilgili component içerisinde kalıyordu. Şöyleki Body component’inden bir state oluşturalım, bu state’i Header component’inde kullanamayız. Alt componentlerde kullanabilmek için tek tek göndermemiz gerekiyor. Bunlar bizim için büyük sorunlar. Bu sorunlar kurtulabilmemiz için React bize bir kütüphane veriyor. Bu kütüphane React ile beraber gelen Context kütüphanesi.

<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*wMa_YsTy-_ZBmK9tp-dPkA.png'/>
<img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*TaATrg2guXYKdCI2cXkcEQ.png'>


Context’i kullanarak aslında biz elimizde o an hangi data varsa, o datayı tüm component’lere sağlamış oluyoruz. Ve bu Context içerisindeki datayı istediğimiz zaman istediğimiz yerden erişim sağlayıp değiştirebiliyoruz.