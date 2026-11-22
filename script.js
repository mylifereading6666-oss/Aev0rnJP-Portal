(()=>{const translations={
"概要":"About","活動分野":"Fields","プロジェクト":"Projects","キャラクター":"Character","公式リンク":"Official Links",
"アイデアを、かたちに。Webサイト・便利なツール・ゲームなど、デジタルコンテンツの企画と制作に取り組んでいます。":"Turning ideas into digital experiences. We plan and create websites, useful tools, games, and other digital content.",
"制作プロジェクトを見る ↗":"Explore projects ↗","詳しく見る ↗":"Learn more ↗","制作プロジェクト":"Projects",
"Aev0rnJPについて。制作の考え方や活動概要を紹介します。":"Learn about Aev0rnJP, our approach to creation, and our activities.",
"Webサイト、ツール、ゲームなどの活動分野。":"Our fields include websites, tools, and games.",
"公開中・開発中のプロジェクトと各Webサイトへのリンク。":"Projects in development and release, with links to their websites.",
"Aev0rnJPのイメージキャラクター。イラストと3Dモデル資料。":"The Aev0rnJP character, with illustration and 3D model references.",
"Aev0rnJPについて":"About Aev0rnJP","Webサイト・ツール・ゲームなど、デジタルコンテンツの企画と制作に取り組んでいます。":"We plan and create digital content, including websites, tools, and games.",
"発想から、公開まで。":"From concept to release.","Aev0rnJPは、Web制作・ツール開発・ゲーム制作などを中心に、さまざまなデジタルプロジェクトを企画・制作しています。使いやすさと独自性を大切にし、実際に触れて楽しめる形にすることを目指しています。":"Aev0rnJP plans and creates a variety of digital projects, focusing on web development, tool development, and game creation. We value usability and originality, aiming to turn ideas into experiences people can use and enjoy.",
"制作の考え方":"Our Approach","目的に合った機能、分かりやすい画面設計、スマートフォンでも使いやすい操作性を重視しています。":"We focus on purposeful features, clear interface design, and usability on smartphones.",
"活動分野":"Fields","企画からデザイン・実装まで、複数の分野を横断して制作しています。":"We work across multiple fields, from planning and design to implementation.",
"Webサイト・サービス":"Websites & Services","情報を分かりやすく届けるWebサイトや、ブラウザーで利用できるサービスを制作。":"We create websites that communicate clearly and services that run in the browser.",
"ツール・ユーティリティ":"Tools & Utilities","日常や制作作業をサポートする、実用性を重視したツールを開発。":"We develop practical tools for everyday tasks and creative workflows.",
"ゲーム・デジタルコンテンツ":"Games & Digital Content","世界観や遊び心を大切にしたゲーム、インタラクティブな作品を制作。":"We create games and interactive works with distinctive worlds and a sense of play.",
"制作プロジェクト":"Projects","公開中または開発中のプロジェクトです。各リンクからWebサイトやソースコードを確認できます。":"Explore released and in-development projects, including their websites and source code.",
"日常で使える機能をまとめたWebツール。":"A collection of useful everyday web tools.","ブラウザー上でWeb制作を行うための開発環境。":"A browser-based environment for web development.","端末の動作性能を確認するベンチマーク。":"A benchmark for checking device performance.","ブラウザーで遊べるオリジナルゲーム。":"An original game playable in the browser.","ブラウザー内で動作するパスワード生成ツール。":"A password generator that runs in the browser.","Aev0rnJP関連のネットワーク・Webサービス。":"A network and web service project related to Aev0rnJP.",
"オリジナルキャラクター":"Original Character","Aev0rnJPのイメージキャラクター。手描きイラストと3Dデザインの三面図を紹介します。":"Meet the Aev0rnJP character through a hand-drawn illustration and a 3D character turnaround.",
"色鉛筆イラスト":"Colored-pencil Illustration","手描きの質感を活かしたキャラクター三面図。":"A character turnaround with a hand-drawn texture.",
"3Dキャラクター":"3D Character","立体表現によるキャラクターデザイン資料。":"Character design reference in 3D form.",
"公式リンク":"Official Links","Aev0rnJPの公式チャンネル・制作物はこちらからご覧いただけます。":"Visit Aev0rnJP's official channel and projects here.",
"公式チャンネル @Aev0rnJP":"Official channel @Aev0rnJP","YouTubeを開く ↗":"Visit YouTube ↗","制作プロジェクトを見る":"Explore projects"
};
const reverse=Object.fromEntries(Object.entries(translations).map(([ja,en])=>[en,ja]));
let language="ja";try{language=localStorage.getItem("aev0rn_language")==="en"?"en":"ja";}catch(e){}
function translate(lang){const map=lang==="en"?translations:reverse;const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){const original=node.nodeValue;const trimmed=original.trim();if(map[trimmed])node.nodeValue=original.replace(trimmed,map[trimmed]);}
document.documentElement.lang=lang;const button=document.getElementById("lang");if(button)button.textContent=lang==="ja"?"EN":"日本語";
const titles={"Aev0rnJPについて | Aev0rnJP":"About Aev0rnJP | Aev0rnJP","活動分野 | Aev0rnJP":"Fields | Aev0rnJP","制作プロジェクト | Aev0rnJP":"Projects | Aev0rnJP","オリジナルキャラクター | Aev0rnJP":"Original Character | Aev0rnJP","公式リンク | Aev0rnJP":"Official Links | Aev0rnJP"};const back=Object.fromEntries(Object.entries(titles).map(([a,b])=>[b,a]));if(lang==="en")document.title=titles[document.title]||document.title;else document.title=back[document.title]||document.title;
}
const button=document.getElementById("lang");if(button)button.addEventListener("click",()=>{language=language==="ja"?"en":"ja";try{localStorage.setItem("aev0rn_language",language);}catch(e){}translate(language)});
if(language==="en")translate("en");
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
})();