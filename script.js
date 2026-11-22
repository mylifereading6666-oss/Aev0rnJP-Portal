(()=>{"use strict";
const translations={
"概要":"About","活動分野":"Fields","プロジェクト":"Projects","キャラクター":"Character","公式リンク":"Official Links",
"制作プロジェクト":"Projects","オリジナルキャラクター":"Original Character",
"色鉛筆イラスト":"Colored-pencil Illustration","3Dキャラクター":"3D Character",
"手描きの質感を活かしたキャラクター三面図。":"A character turnaround with a hand-drawn texture.",
"立体表現によるキャラクターデザイン資料。":"3D character design reference.",
"手描きの質感を活かしたキャラクター三面図。":"A hand-drawn character turnaround.",
"概要":"About","活動分野":"Fields","プロジェクト":"Projects","キャラクター":"Character","公式リンク":"Official Links",
"アイデアを、かたちに。Webサイト・便利なツール・ゲームなど、デジタルコンテンツの企画と制作に取り組んでいます。":"Turning ideas into digital experiences. We plan and create websites, useful tools, games, and digital content.",
"制作プロジェクトを見る ↗":"Explore projects ↗","詳しく見る ↗":"Learn more ↗","プロジェクト一覧 ↗":"View projects ↗","キャラクターを見る ↗":"Meet the character ↗",
"Aev0rnJPについて。制作の考え方や活動概要を紹介します。":"Learn about Aev0rnJP, our creative approach, and activities.",
"Webサイト、ツール、ゲームなどの活動分野。":"Our fields include websites, tools, and games.",
"公開中・開発中のプロジェクトと各Webサイトへのリンク。":"Released and in-development projects, with links to their websites.",
"Aev0rnJPのイメージキャラクター。イラストと3Dモデル資料。":"The Aev0rnJP character, with illustration and 3D model references.",
"Aev0rnJPのイメージキャラクター。手描きイラストと3Dデザインの三面図を紹介します。":"Meet the Aev0rnJP character through a hand-drawn illustration and a 3D character turnaround.",
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
"色鉛筆イラスト":"Colored-pencil Illustration","3Dキャラクター":"3D Character",
"手描きの質感を活かしたキャラクター三面図。":"A hand-drawn character turnaround.",
"立体表現によるキャラクターデザイン資料。":"3D character design reference.",
"Aev0rnJPの公式チャンネル・制作物はこちらからご覧いただけます。":"Visit Aev0rnJP's official channel and projects.",
"公式チャンネル @Aev0rnJP":"Official channel @Aev0rnJP","YouTubeを開く ↗":"Visit YouTube ↗","GitHubプロフィール ↗":"GitHub Profile ↗",
"Website Repository ↗":"Website Repository ↗","色鉛筆イラスト":"Colored-pencil Illustration","3Dキャラクター":"3D Character",
"制作過程":"Making Process",
"キャラクター制作過程":"Character Making Process",
"2種類のキャラクターデザインについて、それぞれ独立した工程として紹介します。ラフスケッチから形を整え、仕上げに至るまでの流れを段階ごとにまとめています。":"This page presents the making process for two character designs, from initial sketches through refinement and final presentation.",
"色鉛筆イラストの制作工程":"Colored-Pencil Illustration Process",
"手描きの線と色鉛筆らしい柔らかな質感を活かすイラスト制作の工程です。":"This process uses hand-drawn lines and the soft texture of colored pencils.",
"完成イメージ":"Final Artwork",
"線の表情や色の重なりを残し、手描きならではの温かみを持つ三面図としてまとめます。":"The final turnaround preserves expressive lines, layered colors, and the warmth of a hand-drawn illustration.",
"01. ラフスケッチ":"01. Rough Sketch",
"頭身や全体のシルエット、ポーズを大まかに描き、キャラクターの方向性を決めます。":"Sketch the proportions, overall silhouette, and pose to establish the character's direction.",
"02. 形と比率の整理":"02. Shape and Proportion",
"顔、髪、衣装、手足の位置やバランスを調整します。":"Refine the placement and balance of the face, hair, outfit, and limbs.",
"03. 線画の描き込み":"03. Line Art",
"輪郭や髪の束、衣装の境界、小物などの形を明確にします。":"Define the outlines, hair strands, clothing edges, and accessories.",
"04. 色鉛筆で着色":"04. Coloring",
"ベースカラーを重ね、色の濃淡や陰影を少しずつ加えます。":"Layer base colors and gradually add tonal variation and shading.",
"05. 質感と細部の仕上げ":"05. Texture and Details",
"色の重なり、影、ハイライトを整え、手描きの風合いを残します。":"Refine color layers, shadows, and highlights while preserving the hand-drawn feel.",
"06. 完成":"06. Final",
"正面・側面・背面の配置と余白を整え、完成資料にまとめます。":"Arrange the front, side, and back views with balanced spacing for the final reference sheet.",
"3Dキャラクターの制作工程":"3D Character Process",
"立体の形状を組み立て、マテリアルやライティングによって完成イメージを整える工程です。":"Build the three-dimensional form, then refine its appearance with materials and lighting.",
"立体感、表面の質感、青と紫を中心とした光の表現をまとめ、複数方向から確認できるデザイン資料にします。":"Present the character's form, surface materials, and blue-purple lighting in a reference sheet showing multiple views.",
"01. ラフ・形状設計":"01. Concept and Shape Design",
"シルエットと各パーツの大きさを決め、デザイン要素を整理します。":"Establish the silhouette, part proportions, and key design elements.",
"02. ベースモデル作成":"02. Base Modeling",
"頭部、胴体、手足、髪、衣装などの基本形状を作ります。":"Create the basic forms for the head, body, limbs, hair, and clothing.",
"03. ディテール調整":"03. Detail Refinement",
"髪の流れ、顔まわり、衣装や装飾などの細部を整えます。":"Refine the hair flow, facial features, clothing, and accessories.",
"04. マテリアル設定":"04. Material Setup",
"パーツごとに色や表面の反射を設定し、素材感を調整します。":"Set colors and surface reflections for each part to establish its material appearance.",
"05. ライティングとレンダリング":"05. Lighting and Rendering",
"光源や背景、陰影を調整して立体感を引き出します。":"Adjust lights, background, and shading to bring out the three-dimensional form.",
"三方向の形状や配色を確認し、完成資料にまとめます。":"Check the shape and colors from all three views and assemble the final reference.",
"※このページは、掲載されている完成画像をもとに整理した制作工程の紹介です。実際に記録された作業ログや未公開の途中段階画像を示すものではありません。":"Note: This is an overview of the process reconstructed from the published final images. It is not an actual work log or a set of recorded intermediate-stage images.",
"← キャラクター紹介へ戻る":"← Back to Character"
};
const titleMap={"キャラクター制作過程 | Aev0rnJP":"Character Making Process | Aev0rnJP","Aev0rnJPについて | Aev0rnJP":"About Aev0rnJP | Aev0rnJP","活動分野 | Aev0rnJP":"Fields | Aev0rnJP","制作プロジェクト | Aev0rnJP":"Projects | Aev0rnJP","オリジナルキャラクター | Aev0rnJP":"Original Character | Aev0rnJP","公式リンク | Aev0rnJP":"Official Links | Aev0rnJP"};
function readLang(){try{return localStorage.getItem("aev0rn_language")==="en"?"en":"ja"}catch(e){return "ja"}}
function saveLang(v){try{localStorage.setItem("aev0rn_language",v)}catch(e){}}
let lang=readLang();
function render(){
 const walker=document.createTreeWalker(document.body,4);
 let node;
 while((node=walker.nextNode())){
  if(!node.parentElement||/^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName))continue;
  if(!Object.prototype.hasOwnProperty.call(node,"_aevOriginal"))node._aevOriginal=node.nodeValue;
  const original=node._aevOriginal;
  const trimmed=original.trim();
  const translated=translations[trimmed];
  if(lang==="en"&&translated)node.nodeValue=original.replace(trimmed,translated);
  else node.nodeValue=original;
 }
 document.documentElement.lang=lang;
 const btn=document.getElementById("lang");
 if(btn){btn.textContent=lang==="ja"?"EN":"日本語";btn.setAttribute("aria-label",lang==="ja"?"Switch to English":"日本語に切り替え");}
 if(lang==="en"&&titleMap[document.title])document.title=titleMap[document.title];
 else if(lang==="ja"){for(const [ja,en] of Object.entries(titleMap))if(document.title===en){document.title=ja;break;}}
}
function toggle(){lang=lang==="ja"?"en":"ja";saveLang(lang);render();}
document.addEventListener("click",function(event){const target=event.target.closest("#lang");if(target){event.preventDefault();event.stopPropagation();toggle();}},true);
render();
window.addEventListener("pageshow",()=>{lang=readLang();render();});
window.addEventListener("storage",e=>{if(e.key==="aev0rn_language"){lang=readLang();render();}});
const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
})();