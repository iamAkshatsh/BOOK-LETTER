import React, { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './LoveBook.css';

const chapters = [
  { 
    title: "The First Meet", 
    image: "t2.jpeg", 
    text: "Sab yehi se toh shuru hua, Tujhe yaha dekhna jaan bujh k tere aas pass abetha taki tusse baat kar saku.... Hamesha baat karne k banahe dhundna aur bs kisi tarha dosti karne ki koshish karna.AUr finally hum dost bane bhout acche dost bane and also ab aaesa ho gaya hai ki hamara bond ab atut jaessa lagta hai.PYar to bhout and hai pr iss pyar mai dosti usse be zayada. Janta hu mai hoon hi itna aacha  hahahah ...jokesapart but since chemistry tution maene toh soch liya tha ki MERE LIYE TUM KAFI HOO." 
  },
  { 
    title: "College Mastiiii", 
    image: "ch2.jpeg", 
    text: "YEH DIN bhin kithe sahii din the haina yrrr kyamast hum dono ghumte rahete the ekdm mast aur VOH 5 min ki actual meet bhi ek do hafto ki enery de jata tha mujhe ....if you know you know ..but yeh sb din hum phir se enjoy karenge hum haar uss place mai jayenge jaha hum jaya karte the aur phir se sari pics and all lenge aur relive karenge moments koh aur mujhe to ek ek feeling yaad hai har din ki chinta nako mai huna sb recreate krwane k liye . BS tu aaese hi hameesha haste rahena yrr tu aaese kitni sahi lagti hai ." 
  },
  { 
    title: "Unsaid Emotions", 
    image: "ch3.jpeg", 
    text: "So yeh chapter EMOTION k barein mai hai ab isme kya kya bolu pr tere sath spend kiya hua har ek time chahe voh 1 min wala hi kyu na ho  but its valuable for me hamessha zindagi bhar aur tera mere sath pagalpanti karna jab tu voh karti hai mujhe itni khshi hoti haina kabhi btaya nai but tusse zayada khsuh mai hota hu aur hamesaha aaese hi masti karte rahe hum dono aur khush rahe . Emotions k barein mai bolu tu jab tu khati hai ya har ek choti se choti batain mujhe btati hai mujhe itnin khushi hoti haina shyed itna khush ytoh mai Rank 1 la k bhi kabhi na hou jitna khushi teri batein sunn k hoti hai . Yaad hai tu bolti haina you are choosy and then i said so tunne muhje choose kiya and you siad YES yrr maene kuch react nai kiya tha but deep down toh maan kaar raha tha pagal hi jo jau nachne lagu ya karu baap re ab kya btau mai iske barein mai ." 
  },
  { 
    title: "Our Silly Fights", 
    image: "fight.jpeg", 
    text: "YEH TOH NEVER ENDING TOPIC HAI and your fav chapter in sb mai se ig kyu ki tera sara intrest toh issi mai hai aur tu iss chapter mai hamesha top karti hai hamesha muhjhe maar k ya aakhen dikha k dara k chup krwa deti hai but i like it tooo. Aur larai mai toh app hai hi mahir marne ki sari techiniques apko aati hai aur plans bhi toh apke pass ready hi hai muhhe marne ig voh sare work nahi hi honge mere pass pyar ki shakti hai hi hahahah...... but deep down mai toh hamesha chahata hu app hameesha mujhe aaese hi marte rahe aur apka khauf bana rahe MERA CHOTA DON jo ho." 
  },
  { 
    title: "The Moment We Clicked", 
    image: "click.jpeg", 
    text: "Every moment we clicked together is very close to my heart and inn sari memories koh mai hamesha apne pass rakhna chahata hu taki kabhi bhi koi bhi hamarai merories miss na ho but i know best memories kabhi bhi capture nai hoti jaesa ki manene voh choose wali baat btai thi pichle chapter mai soo pr clicking memories and recording it with you is also a best part my yaden." 
  },
  { 
    title: "Walking Together", 
    image: "shadow.jpeg", 
    text: "Kash aaese hi sath chalt chalte hamari sari umar aaese hi nikal jaye aur apke sath walk karna bhi ek alsh hi vibe deta hai chahe ho sirf 10 steps is kyu nanho pr apke sath liya haar ek step mere liye bhout valuable gau aur illl pray hamedhs ki hum hameshaa aaese hi sath chalte rahe aur hamara bond hamedsha aaese rahe time k sath zayada strong hpta rahe ." 
  },
  { 
    title: "Forever US", 
    image: "forever.jpeg", 
    text: "US FOREVER ho ya FOREVER US mai ulte sidhe haar jagaha se tmhare sth hi rahunga yeh chapter thoda chota hai kyu ki iski practical notes mai apko zindagi bhar sath rahe k sikhaunga hahhaha " 
  },
  { 
    title: "Unbreakable Vows", 
    image: "sabr.jpeg", 
    text: "SABR this is always a unbreakable wow and every alphabet this this pics is unbreakable for you aur koi apko kabhi nai chorega sb apke sath rahene aur apko hamesha support karte rahenge aur A stand for Akshat so mai toh hu hi AWsome akshat chalo bhout ho gaye khud ki tarif hahhahah." 
  },
  { 
    title: "Future Plans", 
    image: "bacchi.jpeg", 
    text: "Future plans ka kya btau bs aaese hi ek mini verson apki mil jaye mujhe toh bs meri life to set aur phir 2 bacche rahenge mere sath aur dicsount bhi milega iykyk." 
  },
  { 
    title: "Always & Forever", 
    image: "walk.jpeg", 
    text: "Yeh always ka toh pata nai pr jab tak rahunga apko pareshan karta rahunga iss baat ki guratnnee le sakta hu mai yeh to apko bhi pata hai .....AUR Apko kabi aakela feel nai hone dunga hamesha tere ssth khade rahunga sukh dukh aur kand mai bhale hi voh kand maene khud hi kyu na kiye ho pr tu hamesha mere ssth rahegi ..AND foreever means more 7 janam types this is filmy ik BUT hamara picture super duper hit ho issi baat ka hope rakha hu ...hahahahah" 
  },
];

function FloatingHearts() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.style.setProperty('--x-offset', `${Math.random() * 200 - 100}px`);
      heart.textContent = '🖤';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return null;
}

const LoveBook = () => {
  return (
    <div className="book-wrapper">
      <FloatingHearts />
      <audio autoPlay loop>
        <source src="humsafar.mpeg" type="audio/mp3" />
      </audio>

      <HTMLFlipBook
        width={350}
        height={550}
        showCover={true}
        mobileScrollSupport={true}
        className="centered-book"
      >
        {/* Cover Page */}
        <div className="cover-page">
          <h2 className="cover-title">THE UNBREAKABLE BOND</h2>
          <img src="US.jpeg" className="cover-image" alt="Cover" />
        </div>

        {/* Chapters */}
        {chapters.map((chap, index) => (
          <div className="page" key={index}>
            <h3 className="chapter-title">Chapter {index + 1}: {chap.title}</h3>
            <img src={chap.image} className="chapter-image" alt={`Chapter ${index + 1}`} />
            <p className="chapter-text">{chap.text}</p>
          </div>
        ))}

        {/* Gallery Page */}
        <div className="page gallery-page">
          <h3 className="chapter-title">Our Memories Together</h3>
          <div className="collage">
            <img src="m1.jpeg" alt="1" />
            <img src="m2.jpeg" alt="2" />
            <img src="m3.jpeg" alt="3" />
            <img src="m4.jpeg" alt="4" />
          </div>
        </div>

        {/* Summary Page */}
        <div className="page summary-page">
          <h3 className="chapter-title">Summary</h3>
          <p className="chapter-text">
            Yeh to bs ek choti si clip thi bs ek kosis apko thodi khusi dene ki ....Bs app hamesha aaese hi haste muskurate rahe taki mai bhi apke sath thoda hass khel saku aur haan hamari larai to hamesha chalti rahegi dont worry voh toh mai band karne se raha aur hamseha ki tarha apko is jeetne de dunga kya kar sakte hai BACHOOO koh jeetne dena chaiye,, Mazak tha isko seiously le k ban wagera mat laga dena app..... Hamara ssth hamesha aaese hi aage barte rahega chahe jo ho aur hamesha hum aaese hi larte jhagarte aur PYAR karte sari zindahi nikal denge ofc hamare departments alag hai mera pyar or apka laraiii pr yeh dono department hum dono nai chorenge chahe jo ho...
            MOREOVER, Hum dono hamesha sath rahenge aur hamesha ek dusrin koh push karenge hamesha aage barne k liye aur growth k liye haan hlka phulka pyar bhi kar lenge hahhaha  haa haa aur larai bhi apki chixen kaese bhul sakta hu mai.
            Bs app hamesha khush rahena aur jab bhi ZARURAT pade hamesha yaad rakha mai hu aoke sath hamesdha chahe jo ho .
            janta hu mast dialoge mara hu pr yeh sirf dialoge nai hai mere 6 saal k experience se mai bolraha hu bhale hi yeh intership ho pr mai toh chahata hu app mujhe life time k liye HIRE kar le🖤.
          </p>
        </div>

        {/* To Be Continued */}
        <div className="page final-page">
          <h2 className="final-message">
            MORE EDITIONS TO CODE,<br />
            TO BE CONTINUED...
          </h2>
          <h3 className="final-message" style={{ fontSize: '18px' }}>
            Always with you,<br />
            With love,<br />
            🖤
          </h3>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default LoveBook;
