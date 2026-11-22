(()=>{const dict={
"概要":"About","活動分野":"Fields","プロジェクト":"Projects","キャラクター":"Character","公式リンク":"Official Links",
"アイデアを、かたちに。Webサイト・便利なツール・ゲームなど、デジタルコンテンツの企画と制作に取り組んでいます。":"Turning ideas into digital experiences. We plan and create websites, useful tools, games, and digital content.",
"制作プロジェクトを見る ↗":"Explore projects ↗","詳しく見る ↗":"Learn more ↗","プロジェクト一覧 ↗":"View projects ↗","キャラクターを見る ↗":"Meet the character ↗",
"Aev0rnJPについて。制作の考え方や活動概要を紹介します。":"Learn about Aev0rnJP, our creative approach, and activities.",
"Webサイト、ツール、ゲームなどの活動分野。":"Our fields include websites, tools, and games.",
"公開中・開発中のプロジェクトと各Webサイトへのリンク。":"Released and in-development projects, with links to their websites.",
"Aev0rnJPのイメージキャラクター。イラストと3Dモデル資料。":"The Aev0rnJP character, with illustration and 3D model references.",
"Aev0rnJPについて":"About Aev0rnJP","Webサイト・ツール・ゲームなど、デジタルコンテンツの企画と制作に取り組んでいます。":"We plan and create digital content, including websites, tools, and games.",
"発想から、公開まで。":"From concept to release.",
"Aev0rnJPは、Web制作・ツール開発・ゲーム制作などを中心に、さまざまなデジタルプロジェクトを企画・制作しています。使いやすさと独自性を大切にし、実際に触れて楽しめる形にすることを目指しています。":"Aev0rnJP plans and creates digital projects across web, tools, and games. We value usability and originality, turning ideas into experiences people can use and enjoy.",
"制作の考え方":"Our Approach","目的に合った機能、分かりやすい画面設計、スマートフォンでも使いやすい操作性を重視しています。":"We focus on useful features, clear interface design, and usability on smartphones.",
"企画からデザイン・実装まで、複数の分野を横断して制作しています。":"We work across multiple fields, from planning and design to implementation.",
"Webサイト・サービス":"Websites & Services","情報を分かりやすく届けるWebサイトや、ブラウザーで利用できるサービスを制作。":"We create clear, informative websites and browser-based services.",
"ツール・ユーティリティ":"Tools & Utilities","日常や制作作業をサポートする、実用性を重視したツールを開発。":"We develop practical tools for everyday tasks and creative workflows.",
"ゲーム・デジタルコンテンツ":"Games & Digital Content","世界観や遊び心を大切にしたゲーム、インタラクティブな作品を制作。":"We create games and interactive works with distinctive worlds and a sense of play.",
"公開中または開発中のプロジェクトです。各リンクからWebサイトやソースコードを確認できます。":"Explore released and in-development projects, their websites, and source code.",
"日常で使える機能をまとめたWebツール。":"A collection of useful everyday web tools.",
"ブラウザー上でWeb制作を行うための開発環境。":"A browser-based environment for web development.",
"端末の動作性能を確認するベンチマーク。":"A benchmark for checking device performance.",
"ブラウザーで遊べるオリジナルゲーム。":"An original game playable in the browser.",
"ブラウザー内で動作するパスワード生成ツール。":"A password generator that runs in the browser.",
"Aev0rnJP関連のネットワーク・Webサービス。":"A network and web service project related to Aev0rnJP.",
"オリジナルキャラクター":"Original Character","Aev0rnJPのイメージキャラクター。手描きイラストと3Dデザインの三面図を紹介します。":"Meet the Aev0rnJP character through a hand-drawn illustration and a 3D character turnaround.",
"色鉛筆イラスト":"Colored-pencil Illustration","手描きの質感を活かしたキャラクター三面図。":"A character turnaround with a hand-drawn texture.",
"3Dキャラクター":"3D Character","立体表現によるキャラクターデザイン資料。":"3D character design reference.",
"Aev0rnJPの公式チャンネル・制作物はこちらからご覧いただけます。":"Visit Aev0rnJP's official channel and projects.",
"公式チャンネル @Aev0rnJP":"Official channel @Aev0rnJP","YouTubeを開く ↗":"Visit YouTube ↗","GitHubプロフィール ↗":"GitHub Profile ↗",
"Website Repository ↗":"Website Repository ↗"
};
const titles={"Aev0rnJP | Official Website":"Aev0rnJP | Official Website","Aev0rnJPについて | Aev0rnJP":"About Aev0rnJP | Aev0rnJP","活動分野 | Aev0rnJP":"Fields | Aev0rnJP","制作プロジェクト | Aev0rnJP":"Projects | Aev0rnJP","オリジナルキャラクター | Aev0rnJP":"Original Character | Aev0rnJP","公式リンク | Aev0rnJP":"Official Links | Aev0rnJP"};
let lang="ja";try{lang=localStorage.getItem("aev0rn_language")==="en"?"en":"ja"}catch(e){}
function apply(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){if(n.parentElement&&["SCRIPT","STYLE"].includes(n.parentElement.tagName))continue;if(n.__aevJa===undefined)n.__aevJa=n.nodeValue;const ja=n.__aevJa.trim();const en=dict[ja];if(lang==="en"&&en)n.nodeValue=n.__aevJa.replace(ja,en);else n.nodeValue=n.__aevJa;}
document.documentElement.lang=lang;const b=document.getElementById("lang");if(b)b.textContent=lang==="ja"?"EN":"日本語";const t=document.title;const reverse=Object.fromEntries(Object.entries(titles).map(([a,b])=>[b,a]));if(lang==="en")document.title=titles[t]||t;else document.title=reverse[t]||t;}
const b=document.getElementById("lang");if(b)b.addEventListener("click",()=>{lang=lang==="ja"?"en":"ja";try{localStorage.setItem("aev0rn_language",lang)}catch(e){}apply()});
apply();const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
})();