(()=>{"use strict";
const translations={
"Fortniteギフト企画":"Fortnite Gift Events","Fortniteに関するギフト企画も実施しています。企画の内容や参加条件は、実施ごとの案内をご確認ください。":"We also host Fortnite gift events. Please check each event announcement for details and eligibility.","Web制作・ツール開発・ゲーム制作に加え、Fortniteのギフト企画など、さまざまな活動に取り組んでいます。":"Alongside web, tool, and game development, we also run activities such as Fortnite gift events.","Fortniteのギフト企画も行っていますか？":"Do you also host Fortnite gift events?","はい。Fortniteに関するギフト企画も実施しています。募集の有無や参加条件は、企画ごとの案内をご確認ください。":"Yes. We host Fortnite gift events. Please check each event announcement for availability and eligibility.",
"ホーム":"Home","Aev0rnJPについて":"About Aev0rnJP","活動・制作分野":"Fields of Activity & Creation","プロジェクト一覧":"Projects","キャラクター紹介":"Character","制作過程":"Making Process","使用技術":"Technology Stack","よくある質問":"FAQ",
"CREATIVE PROJECTS / DIGITAL WORKS":"CREATIVE PROJECTS / DIGITAL WORKS",
"デジタル制作の企画・設計・開発を行っています。":"We plan, design, and build digital projects.",
"Web制作":"Web Development","ゲーム制作":"Game Development","ツール開発":"Tool Development","デザイン・ビジュアル制作":"Design & Visual Creation",
"使用技術と制作環境":"Technologies and Tools","制作内容に応じて、次の技術やツールを使い分けています。":"We choose technologies and tools according to each project.",
"フロントエンド":"Frontend","HTML：ページの構造とコンテンツを作成します。":"HTML: structures page content.","CSS：レイアウト、配色、レスポンシブデザインを実装します。":"CSS: implements layouts, colors, and responsive design.","JavaScript：画面操作やブラウザー内の機能を実装します。":"JavaScript: adds interactions and browser-based features.",
"開発・公開環境":"Development & Hosting","GitHub：ソースコードの管理と変更履歴の記録に使用します。":"GitHub: source control and change history.","GitHub Pages：静的Webサイトの公開に使用します。":"GitHub Pages: hosting static websites.","ブラウザー開発者ツール：表示や動作の確認、問題の調査に使用します。":"Browser developer tools: testing and troubleshooting.",
"制作方針":"Development Principles","基本的に静的サイトを中心に構成し、必要な場合にのみ外部サービスやデータベースを利用します。":"Projects are generally built as static sites, using external services or databases only when needed.",
"よくある質問":"Frequently Asked Questions","使用技術 | Aev0rnJP":"Technology | Aev0rnJP","FAQ | Aev0rnJP":"FAQ | Aev0rnJP","Aev0rnJPは何をしていますか？":"What does Aev0rnJP do?","Webサイト、ツール、ゲームなどのデジタルコンテンツを企画・制作しています。":"Aev0rnJP plans and creates digital content such as websites, tools, and games.","サイトはスマートフォンでも利用できますか？":"Can I use the site on a smartphone?","はい。スマートフォン・タブレット・PCで見やすい表示になるように調整しています。":"Yes. The site is designed for smartphones, tablets, and PCs.","アカウント登録やログインは必要ですか？":"Do I need an account or login?","このポータルサイトはログインやアカウント登録なしで閲覧できます。":"This portal can be viewed without an account or login.","掲載されているプロジェクトはどこで利用できますか？":"Where can I use the listed projects?","プロジェクト一覧にある各公式サイトのリンクからアクセスできます。":"You can access them through the official website links on the Projects page.","制作過程の画像は実際の作業記録ですか？":"Are the process images actual work-in-progress records?","制作過程ページの工程画像は、制作の流れを説明するためのイメージです。実際の作業を撮影した記録ではありません。":"The process images are illustrative and explain the workflow. They are not actual recordings of the work.","英語表示に切り替えられますか？":"Can I switch the language to English?","各ページ上部の言語切り替えボタンから日本語・英語を切り替えられます。":"Use the language button at the top of each page to switch between Japanese and English.",
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
"重要：制作過程の画像について":"Important: About the Process Images",
"各工程に掲載している画像は、完成作品とは異なる場合があります。実際の制作途中を記録した画像ではなく、制作の流れを説明するためのイメージです。完成作品は各セクションの「完成イメージ」をご確認ください。":"The images shown for each stage may differ from the finished artwork. They are illustrative images to explain the workflow, not records of the actual creation process. Please refer to the “Final Artwork” in each section for the finished work.",
"※工程画像は制作の流れを説明するためのイメージです。実際の制作途中を記録したものではなく、掲載している完成作品と細部や見た目が異なる場合があります。":"Note: The process images are illustrative images to explain the workflow. They are not records of the actual creation process and may differ in details and appearance from the published final artwork.",
"← キャラクター紹介へ戻る":"← Back to Character"
,
"デザインの特徴":"Design Features",
"作品の見どころ":"Highlights",
"色鉛筆ならではの柔らかな線と色の重なりを活かした、手描きのキャラクターデザインです。":"A hand-drawn character design featuring the soft lines and layered colors unique to colored pencils.",
"正面・側面・背面を並べることで、衣装や髪型、シルエットを複数の方向から確認できます。":"The front, side, and back views make it easy to examine the outfit, hairstyle, and silhouette from multiple angles.",
"立体的な造形と素材表現を組み合わせ、青や紫を基調としたビジュアルに仕上げたデザインです。":"A design combining three-dimensional forms and material effects, finished with a blue-and-purple visual palette.",
"複数方向のビューによって、立体的なシルエットや各パーツの形状、配色を確認できます。":"Multiple views show the three-dimensional silhouette, individual part shapes, and color scheme.",
"2種類のデザインを比較":"Compare the Two Designs",
"同じキャラクターイメージを、異なる表現方法で紹介しています。":"The same character concept is presented through two different visual techniques.",
"手描きの線や色の重なり、柔らかな質感を楽しめる表現です。イラストならではの温かみが特徴です。":"This style highlights hand-drawn lines, layered colors, and a soft texture, giving the illustration a warm feel.",
"立体的な形状や光の反射、素材感を確認できる表現です。複数方向から形状を把握しやすい点が特徴です。":"This style highlights three-dimensional forms, light reflections, and material qualities, making the shape easier to understand from multiple angles.",
"閉じる":"Close",
"前の画像":"Previous image"
};
const titleMap={"使用技術 | Aev0rnJP":"Technology | Aev0rnJP","FAQ | Aev0rnJP":"FAQ | Aev0rnJP","キャラクター制作過程 | Aev0rnJP":"Character Making Process | Aev0rnJP","Aev0rnJPについて | Aev0rnJP":"About Aev0rnJP | Aev0rnJP","活動分野 | Aev0rnJP":"Fields | Aev0rnJP","制作プロジェクト | Aev0rnJP":"Projects | Aev0rnJP","オリジナルキャラクター | Aev0rnJP":"Original Character | Aev0rnJP","公式リンク | Aev0rnJP":"Official Links | Aev0rnJP"};
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

const gallery=[...document.querySelectorAll(".zoomable")];
const box=document.getElementById("art-lightbox"),view=document.getElementById("lightbox-image"),caption=document.getElementById("lightbox-caption");let galleryIndex=0;
function showImage(i){if(!gallery.length)return;galleryIndex=(i+gallery.length)%gallery.length;const el=gallery[galleryIndex];view.src=el.currentSrc||el.src;view.alt=el.alt;caption.textContent=el.dataset.caption||el.alt;}
function openLightbox(i){showImage(i);box.classList.add("open");box.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function closeLightbox(){box.classList.remove("open");box.setAttribute("aria-hidden","true");document.body.style.overflow="";view.removeAttribute("src");}
gallery.forEach((el,i)=>{el.addEventListener("click",()=>openLightbox(i));el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openLightbox(i);}});});
if(box){box.querySelector(".lightbox-close").addEventListener("click",closeLightbox);box.querySelector(".lightbox-prev").addEventListener("click",()=>showImage(galleryIndex-1));box.querySelector(".lightbox-next").addEventListener("click",()=>showImage(galleryIndex+1));box.addEventListener("click",e=>{if(e.target===box)closeLightbox();});document.addEventListener("keydown",e=>{if(!box.classList.contains("open"))return;if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft")showImage(galleryIndex-1);if(e.key==="ArrowRight")showImage(galleryIndex+1);});}

const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
})();