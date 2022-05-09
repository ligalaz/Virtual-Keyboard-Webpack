(()=>{"use strict";const e=[{key:"Backquote",ru:{lowercase:"ё",uppercase:"Ё",capsLowercase:"Ё",capsUppercase:"ё",toCapsUppercase:"Ё"},en:{lowercase:"`",uppercase:"~",capsLowercase:"`",capsUppercase:"~",toCapsUppercase:"`"}},{key:"Digit1",ru:{lowercase:"1",uppercase:"!",capsLowercase:"1",capsUppercase:"!",toCapsUppercase:"1"},en:{lowercase:"1",uppercase:"!",capsLowercase:"1",capsUppercase:"!",toCapsUppercase:"1"}},{key:"Digit2",ru:{lowercase:"2",uppercase:'"',capsLowercase:"2",capsUppercase:'"',toCapsUppercase:"2"},en:{lowercase:"2",uppercase:"@",capsLowercase:"2",capsUppercase:"@",toCapsUppercase:"2"}},{key:"Digit3",ru:{lowercase:"3",uppercase:"№",capsLowercase:"3",capsUppercase:"№",toCapsUppercase:"3"},en:{lowercase:"3",uppercase:"#",capsLowercase:"3",capsUppercase:"#",toCapsUppercase:"3"}},{key:"Digit4",ru:{lowercase:"4",uppercase:";",capsLowercase:"4",capsUppercase:";",toCapsUppercase:"4"},en:{lowercase:"4",uppercase:"$",capsLowercase:"4",capsUppercase:"$",toCapsUppercase:"4"}},{key:"Digit5",ru:{lowercase:"5",uppercase:"%",capsLowercase:"5",capsUppercase:"%",toCapsUppercase:"5"},en:{lowercase:"5",uppercase:"%",capsLowercase:"5",capsUppercase:"%",toCapsUppercase:"5"}},{key:"Digit6",ru:{lowercase:"6",uppercase:":",capsLowercase:"6",capsUppercase:":",toCapsUppercase:"6"},en:{lowercase:"6",uppercase:"^",capsLowercase:"6",capsUppercase:"^",toCapsUppercase:"6"}},{key:"Digit7",ru:{lowercase:"7",uppercase:"?",capsLowercase:"7",capsUppercase:"?",toCapsUppercase:"7"},en:{lowercase:"7",uppercase:"&",capsLowercase:"7",capsUppercase:"&",toCapsUppercase:"7"}},{key:"Digit8",ru:{lowercase:"8",uppercase:"*",capsLowercase:"8",capsUppercase:"*",toCapsUppercase:"8"},en:{lowercase:"8",uppercase:"*",capsLowercase:"8",capsUppercase:"*",toCapsUppercase:"8"}},{key:"Digit9",ru:{lowercase:"9",uppercase:"(",capsLowercase:"9",capsUppercase:"(",toCapsUppercase:"9"},en:{lowercase:"9",uppercase:"(",capsLowercase:"9",capsUppercase:"(",toCapsUppercase:"9"}},{key:"Digit0",ru:{lowercase:"0",uppercase:")",capsLowercase:"0",capsUppercase:")",toCapsUppercase:"0"},en:{lowercase:"0",uppercase:")",capsLowercase:"0",capsUppercase:")",toCapsUppercase:"0"}},{key:"Minus",ru:{lowercase:"-",uppercase:"_",capsLowercase:"-",capsUppercase:"_",toCapsUppercase:"-"},en:{lowercase:"-",uppercase:"_",capsLowercase:"-",capsUppercase:"_",toCapsUppercase:"-"}},{key:"Equal",ru:{lowercase:"=",uppercase:"+",capsLowercase:"=",capsUppercase:"+",toCapsUppercase:"="},en:{lowercase:"=",uppercase:"+",capsLowercase:"=",capsUppercase:"+",toCapsUppercase:"="}},{key:"Backspace",ru:{lowercase:"backspace",uppercase:"backspace",capsLowercase:"backspace",capsUppercase:"backspace",toCapsUppercase:"backspace"},en:{lowercase:"backspace",uppercase:"backspace",capsLowercase:"backspace",capsUppercase:"backspace",toCapsUppercase:"backspace"},special:!0},{key:"Tab",ru:{lowercase:"tab",uppercase:"tab",capsLowercase:"tab",capsUppercase:"tab",toCapsUppercase:"tab"},en:{lowercase:"tab",uppercase:"tab",capsLowercase:"tab",capsUppercase:"tab",toCapsUppercase:"tab"},special:!0},{key:"KeyQ",ru:{lowercase:"й",uppercase:"Й",capsLowercase:"Й",capsUppercase:"й",toCapsUppercase:"Й"},en:{lowercase:"q",uppercase:"Q",capsLowercase:"Q",capsUppercase:"q",toCapsUppercase:"Q"}},{key:"KeyW",ru:{lowercase:"ц",uppercase:"Ц",capsLowercase:"Ц",capsUppercase:"ц",toCapsUppercase:"Ц"},en:{lowercase:"w",uppercase:"W",capsLowercase:"W",capsUppercase:"w",toCapsUppercase:"W"}},{key:"KeyE",ru:{lowercase:"у",uppercase:"У",capsLowercase:"У",capsUppercase:"у",toCapsUppercase:"У"},en:{lowercase:"e",uppercase:"E",capsLowercase:"E",capsUppercase:"e",toCapsUppercase:"E"}},{key:"KeyR",ru:{lowercase:"к",uppercase:"К",capsLowercase:"К",capsUppercase:"к",toCapsUppercase:"К"},en:{lowercase:"r",uppercase:"R",capsLowercase:"R",capsUppercase:"r",toCapsUppercase:"R"}},{key:"KeyT",ru:{lowercase:"е",uppercase:"Е",capsLowercase:"Е",capsUppercase:"е",toCapsUppercase:"Е"},en:{lowercase:"t",uppercase:"T",capsLowercase:"T",capsUppercase:"t",toCapsUppercase:"T"}},{key:"KeyY",ru:{lowercase:"н",uppercase:"Н",capsLowercase:"Н",capsUppercase:"н",toCapsUppercase:"Н"},en:{lowercase:"y",uppercase:"Y",capsLowercase:"Y",capsUppercase:"y",toCapsUppercase:"Y"}},{key:"KeyU",ru:{lowercase:"г",uppercase:"Г",capsLowercase:"Г",capsUppercase:"г",toCapsUppercase:"Г"},en:{lowercase:"u",uppercase:"U",capsLowercase:"U",capsUppercase:"u",toCapsUppercase:"U"}},{key:"KeyI",ru:{lowercase:"ш",uppercase:"Ш",capsLowercase:"Ш",capsUppercase:"ш",toCapsUppercase:"Ш"},en:{lowercase:"i",uppercase:"I",capsLowercase:"I",capsUppercase:"i",toCapsUppercase:"I"}},{key:"KeyO",ru:{lowercase:"щ",uppercase:"Щ",capsLowercase:"Щ",capsUppercase:"щ",toCapsUppercase:"Щ"},en:{lowercase:"o",uppercase:"O",capsLowercase:"O",capsUppercase:"o",toCapsUppercase:"O"}},{key:"KeyP",ru:{lowercase:"з",uppercase:"З",capsLowercase:"З",capsUppercase:"з",toCapsUppercase:"З"},en:{lowercase:"p",uppercase:"P",capsLowercase:"P",capsUppercase:"p",toCapsUppercase:"P"}},{key:"BracketLeft",ru:{lowercase:"х",uppercase:"Х",capsLowercase:"Х",capsUppercase:"х",toCapsUppercase:"Х"},en:{lowercase:"[",uppercase:"{",capsLowercase:"[",capsUppercase:"{",toCapsUppercase:"["}},{key:"BracketRight",ru:{lowercase:"ъ",uppercase:"Ъ",capsLowercase:"Ъ",capsUppercase:"ъ",toCapsUppercase:"Ъ"},en:{lowercase:"]",uppercase:"}",capsLowercase:"]",capsUppercase:"}",toCapsUppercase:"]"}},{key:"Backslash",ru:{lowercase:"\\",uppercase:"|",capsLowercase:"\\",capsUppercase:"|",toCapsUppercase:"\\"},en:{lowercase:"\\",uppercase:"|",capsLowercase:"\\",capsUppercase:"|",toCapsUppercase:"\\"}},{key:"Delete",ru:{lowercase:"Del",uppercase:"Del",capsLowercase:"Del",capsUppercase:"Del",toCapsUppercase:"Del"},en:{lowercase:"Del",uppercase:"Del",capsLowercase:"Del",capsUppercase:"Del",toCapsUppercase:"Del"},special:!0},{key:"CapsLock",ru:{lowercase:"capslock",uppercase:"capslock",capsLowercase:"capslock",capsUppercase:"capslock",toCapsUppercase:"capslock"},en:{lowercase:"capslock",uppercase:"capslock",capsLowercase:"capslock",capsUppercase:"capslock",toCapsUppercase:"capslock"},special:!0},{key:"KeyA",ru:{lowercase:"ф",uppercase:"Ф",capsLowercase:"Ф",capsUppercase:"ф",toCapsUppercase:"Ф"},en:{lowercase:"a",uppercase:"A",capsLowercase:"A",capsUppercase:"a",toCapsUppercase:"A"}},{key:"KeyS",ru:{lowercase:"ы",uppercase:"Ы",capsLowercase:"Ы",capsUppercase:"ы",toCapsUppercase:"Ы"},en:{lowercase:"s",uppercase:"S",capsLowercase:"S",capsUppercase:"s",toCapsUppercase:"S"}},{key:"KeyD",ru:{lowercase:"в",uppercase:"В",capsLowercase:"В",capsUppercase:"в",toCapsUppercase:"В"},en:{lowercase:"d",uppercase:"D",capsLowercase:"D",capsUppercase:"d",toCapsUppercase:"D"}},{key:"KeyF",ru:{lowercase:"а",uppercase:"А",capsLowercase:"А",capsUppercase:"а",toCapsUppercase:"А"},en:{lowercase:"f",uppercase:"F",capsLowercase:"F",capsUppercase:"f",toCapsUppercase:"F"}},{key:"KeyG",ru:{lowercase:"п",uppercase:"П",capsLowercase:"П",capsUppercase:"п",toCapsUppercase:"П"},en:{lowercase:"g",uppercase:"G",capsLowercase:"G",capsUppercase:"g",toCapsUppercase:"G"}},{key:"KeyH",ru:{lowercase:"р",uppercase:"Р",capsLowercase:"Р",capsUppercase:"р",toCapsUppercase:"Р"},en:{lowercase:"h",uppercase:"H",capsLowercase:"H",capsUppercase:"h",toCapsUppercase:"H"}},{key:"KeyJ",ru:{lowercase:"о",uppercase:"О",capsLowercase:"О",capsUppercase:"о",toCapsUppercase:"О"},en:{lowercase:"j",uppercase:"J",capsLowercase:"J",capsUppercase:"j",toCapsUppercase:"J"}},{key:"KeyK",ru:{lowercase:"л",uppercase:"Л",capsLowercase:"Л",capsUppercase:"л",toCapsUppercase:"Л"},en:{lowercase:"k",uppercase:"K",capsLowercase:"K",capsUppercase:"k",toCapsUppercase:"K"}},{key:"KeyL",ru:{lowercase:"д",uppercase:"Д",capsLowercase:"Д",capsUppercase:"д",toCapsUppercase:"Д"},en:{lowercase:"l",uppercase:"L",capsLowercase:"L",capsUppercase:"l",toCapsUppercase:"L"}},{key:"Semicolon",ru:{lowercase:"ж",uppercase:"Ж",capsLowercase:"Ж",capsUppercase:"ж",toCapsUppercase:"Ж"},en:{lowercase:";",uppercase:":",capsLowercase:";",capsUppercase:":",toCapsUppercase:";"}},{key:"Quote",ru:{lowercase:"э",uppercase:"Э",capsLowercase:"Э",capsUppercase:"э",toCapsUppercase:"Э"},en:{lowercase:"'",uppercase:'"',capsLowercase:"'",capsUppercase:'"',toCapsUppercase:"'"}},{key:"Enter",ru:{lowercase:"enter",uppercase:"enter",capsLowercase:"enter",capsUppercase:"enter",toCapsUppercase:"enter"},en:{lowercase:"enter",uppercase:"enter",capsLowercase:"enter",capsUppercase:"enter",toCapsUppercase:"enter"},special:!0},{key:"ShiftLeft",ru:{lowercase:"shift",uppercase:"shift",capsLowercase:"shift",capsUppercase:"shift",toCapsUppercase:"shift"},en:{lowercase:"shift",uppercase:"shift",capsLowercase:"shift",capsUppercase:"shift",toCapsUppercase:"shift"},special:!0},{key:"KeyZ",ru:{lowercase:"я",uppercase:"Я",capsLowercase:"Я",capsUppercase:"я",toCapsUppercase:"Я"},en:{lowercase:"z",uppercase:"Z",capsLowercase:"Z",capsUppercase:"z",toCapsUppercase:"Z"}},{key:"KeyX",ru:{lowercase:"ч",uppercase:"Ч",capsLowercase:"Ч",capsUppercase:"ч",toCapsUppercase:"Ч"},en:{lowercase:"x",uppercase:"X",capsLowercase:"X",capsUppercase:"x",toCapsUppercase:"X"}},{key:"KeyC",ru:{lowercase:"с",uppercase:"С",capsLowercase:"С",capsUppercase:"с",toCapsUppercase:"С"},en:{lowercase:"c",uppercase:"C",capsLowercase:"C",capsUppercase:"c",toCapsUppercase:"C"}},{key:"KeyV",ru:{lowercase:"м",uppercase:"М",capsLowercase:"М",capsUppercase:"м",toCapsUppercase:"М"},en:{lowercase:"v",uppercase:"V",capsLowercase:"V",capsUppercase:"v",toCapsUppercase:"V"}},{key:"KeyB",ru:{lowercase:"и",uppercase:"И",capsLowercase:"И",capsUppercase:"и",toCapsUppercase:"И"},en:{lowercase:"b",uppercase:"B",capsLowercase:"B",capsUppercase:"b",toCapsUppercase:"B"}},{key:"KeyN",ru:{lowercase:"т",uppercase:"Т",capsLowercase:"Т",capsUppercase:"т",toCapsUppercase:"Т"},en:{lowercase:"n",uppercase:"N",capsLowercase:"N",capsUppercase:"n",toCapsUppercase:"N"}},{key:"KeyM",ru:{lowercase:"ь",uppercase:"Ь",capsLowercase:"Ь",capsUppercase:"ь",toCapsUppercase:"Ь"},en:{lowercase:"m",uppercase:"M",capsLowercase:"M",capsUppercase:"m",toCapsUppercase:"M"}},{key:"Comma",ru:{lowercase:"б",uppercase:"Б",capsLowercase:"Б",capsUppercase:"б",toCapsUppercase:"Б"},en:{lowercase:",",uppercase:"<",capsLowercase:",",capsUppercase:"<",toCapsUppercase:","}},{key:"Period",ru:{lowercase:"ю",uppercase:"Ю",capsLowercase:"Ю",capsUppercase:"ю",toCapsUppercase:"Ю"},en:{lowercase:".",uppercase:">",capsLowercase:".",capsUppercase:">",toCapsUppercase:"."}},{key:"Slash",ru:{lowercase:".",uppercase:",",capsLowercase:".",capsUppercase:",",toCapsUppercase:"."},en:{lowercase:"/",uppercase:"?",capsLowercase:"/",capsUppercase:"?",toCapsUppercase:"/"}},{key:"ArrowLeft",ru:{uppercase:"←",lowercase:"←",capsLowercase:"←",capsUppercase:"←",toCapsUppercase:"←"},en:{lowercase:"←",uppercase:"←",capsLowercase:"←",capsUppercase:"←",toCapsUppercase:"←"}},{key:"ArrowUp",ru:{lowercase:"↑",uppercase:"↑",capsLowercase:"↑",capsUppercase:"↑",toCapsUppercase:"↑"},en:{lowercase:"↑",uppercase:"↑",capsLowercase:"↑",capsUppercase:"↑",toCapsUppercase:"↑"}},{key:"ShiftRight",ru:{lowercase:"shift",uppercase:"shift",capsLowercase:"shift",capsUppercase:"shift",toCapsUppercase:"shift"},en:{lowercase:"shift",uppercase:"shift",capsLowercase:"shift",capsUppercase:"shift",toCapsUppercase:"shift"},special:!0},{key:"ControlLeft",ru:{lowercase:"ctrl",uppercase:"ctrl",capsLowercase:"ctrl",capsUppercase:"ctrl",toCapsUppercase:"ctrl"},en:{lowercase:"ctrl",uppercase:"ctrl",capsLowercase:"ctrl",capsUppercase:"ctrl",toCapsUppercase:"ctrl"},special:!0},{key:"MetaLeft",ru:{lowercase:"win",uppercase:"win",capsLowercase:"win",capsUppercase:"win",toCapsUppercase:"win"},en:{lowercase:"win",uppercase:"win",capsLowercase:"win",capsUppercase:"win",toCapsUppercase:"win"},special:!0},{key:"AltLeft",ru:{lowercase:"alt",uppercase:"alt",capsLowercase:"alt",capsUppercase:"alt",toCapsUppercase:"alt"},en:{lowercase:"alt",uppercase:"alt",capsLowercase:"alt",capsUppercase:"alt",toCapsUppercase:"alt"},special:!0},{key:"Space",ru:{lowercase:"space",uppercase:"space",capsLowercase:"space",capsUppercase:"space",toCapsUppercase:"space"},en:{lowercase:"space",uppercase:"space",capsLowercase:"space",capsUppercase:"space",toCapsUppercase:"space"},special:!0},{key:"AltRight",ru:{lowercase:"alt",uppercase:"alt",capsLowercase:"alt",capsUppercase:"alt",toCapsUppercase:"alt"},en:{lowercase:"alt",uppercase:"alt",capsLowercase:"alt",capsUppercase:"alt",toCapsUppercase:"alt"},special:!0},{key:"MetaRight",ru:{lowercase:"win",uppercase:"win",capsLowercase:"win",capsUppercase:"win",toCapsUppercase:"win"},en:{lowercase:"win",uppercase:"win",capsLowercase:"win",capsUppercase:"win",toCapsUppercase:"win"},special:!0},{key:"ControlRight",ru:{lowercase:"ctrl",uppercase:"ctrl",capsLowercase:"ctrl",capsUppercase:"ctrl",toCapsUppercase:"ctrl"},en:{lowercase:"ctrl",uppercase:"ctrl",capsLowercase:"ctrl",capsUppercase:"ctrl",toCapsUppercase:"ctrl"},special:!0},{key:"ArrowDown",ru:{lowercase:"↓",uppercase:"↓",capsLowercase:"↓",capsUppercase:"↓",toCapsUppercase:"↓"},en:{lowercase:"↓",uppercase:"↓;",capsLowercase:"↓",capsUppercase:"↓",toCapsUppercase:"↓"}},{key:"ArrowRight",ru:{lowercase:"→",uppercase:"→",capsLowercase:"→",capsUppercase:"→",toCapsUppercase:"→"},en:{lowercase:"→",uppercase:"→",capsLowercase:"→",capsUppercase:"→",toCapsUppercase:"→"}}];let a=localStorage.getItem("lang")||"en",s=0;const c=new class{constructor(){}create(e,a,s){return this.elem=document.createElement(a),this.elem.className=e,this.elem.textContent=s,this.elem}toAppend(e,...a){return e.append(...a)}toPrepend(e,...a){return e.prepend(...a)}};class p{constructor(a,c){this.className=a,this.tag=c,this.id=e[s].key,this.lang=localStorage.getItem("lang")||"en"}create(){return this.elem=document.createElement(this.tag),this.elem}addClassName(){return this.elem.className=this.className,this.elem}addAttributes(){return this.elem.setAttribute("data-key",this.id),this.elem.setAttribute("caps",!1),this.elem.setAttribute("shift",!1),e[s].special&&this.elem.setAttribute("special",!0),this.elem}init(){return this.create(),this.addClassName(),this.addAttributes(),this.elem.textContent=`${e[s][this.lang].lowercase}`,s+=1,this.elem}}const r=document.body,t=c.create("","main",""),o=c.create("","footer",""),l=c.create("text_row","div",""),i=c.create("","textarea","");i.style.resize="none",i.placeholder='Press  key "Alt+Shift" on the keyboard or virtual keyboard to change the language';const n=c.create("switcher","div","");let u=c.create("lang_en","div","OS Windows");const w=c.create("keyboard","div","");let U=!1;function L(e){let a=c.create("container","div",""),s=c.create(`${e.tagName.toLowerCase()}_row`,"div","");return c.toPrepend(r,e),c.toAppend(e,a),c.toAppend(a,s),s}function g(a){let s;return e.forEach(((e,c)=>{e.key===a&&(s=c)})),s}c.toPrepend(l,n,i),c.toPrepend(n,u),L(o).innerHTML=' <div class="footer-links">\n<div class="footer-links__github">\n  <a class="link" href="https://github.com/ligalaz" target="_blank">\n    <svg class="logo github">\n      \n    </svg>\n  </a>\n</div>\n</div>\n<div class="footer-create-info">\n<div class="footer-create__creater">\n  <p>Created by Artisom Mikula</p>\n</div>\n<div class="footer-create__create-year">\n  <p>Minsk <time>2022</time></p>\n</div>\n</div>\n<div class="footer-school-info">\n<div class="footer-school-info__rsschool">\n  <a class="link" href="https://rs.school/" target="_blank">\n  <svg class="logo school"></svg>\n  </a>\n</div>\n</div>',c.toAppend(L(t),l,w);const C=[];e.forEach((()=>{C.push(new p("keyButton","div").init())}));const k=[g("Backspace"),g("CapsLock"),g("ShiftLeft")],d=[g("Tab"),g("Delete"),g("Enter"),g("ControlLeft"),g("ControlRight")];C.forEach(((e,a)=>{k.includes(a)&&(e.style.width="120px"),d.includes(a)&&(e.style.width="90px"),59===a&&(e.style.width="360px")})),c.toAppend(w,...C);const y=C.filter((e=>/Alt/g.test(e.getAttribute("data-key")))),h=C.filter((e=>/Shift/g.test(e.getAttribute("data-key")))),f=C.filter((e=>/Control/g.test(e.getAttribute("data-key")))),b=C.filter((e=>/Meta/g.test(e.getAttribute("data-key"))));function v(e,a){e.forEach((e=>{e.classList.remove(a),e.classList.remove("active-virtual-key")})),event.target.classList.add(a),event.target.classList.add("active-virtual-key"),m("lowercase")}function A(e,a){e.forEach((e=>{e.classList.remove(a),e.classList.remove("active-virtual-key")}))}function S(e){i.selectionStart===i.selectionEnd?(i.setRangeText(`${e}`,i.selectionStart,i.selectionStart),i.focus(),i.selectionStart=i.selectionStart+1):(i.setRangeText(`${e}`),i.focus(),i.selectionStart=i.selectionStart+1)}function m(s){C.forEach(((c,p)=>{"true"===c.getAttribute("shift")&&(c.textContent=e[p][a][s],c.setAttribute("shift",!1))})),h.forEach((e=>{e.classList.remove("active-virtual-key")}))}function E(){m("lowercase"),C.forEach(((s,c)=>{"true"===s.getAttribute("caps")&&(s.textContent=e[c][a].toCapsUppercase)}))}function x(){y.forEach((e=>{e.classList.contains("language-trigger")?e.classList.add("active-virtual-key"):e.classList.remove("active-virtual-key")})),"en"===a&&(y[0].classList.contains("language-trigger")||y[1].classList.contains("language-trigger"))?D("ru"):"ru"===a&&(y[0].classList.contains("language-trigger")||y[1].classList.contains("language-trigger"))?D("en"):("ru"===a||"en"===a)&&function(a){C.forEach(((s,c)=>{"true"===s.getAttribute("caps")?"false"===s.getAttribute("shift")?(s.textContent=e[c][a].capsUppercase,s.setAttribute("shift",!0)):"true"===s.getAttribute("shift")&&(s.textContent=e[c][a].capsLowercase,s.setAttribute("shift",!1)):"false"===s.getAttribute("caps")&&("false"===s.getAttribute("shift")?(s.textContent=e[c][a].uppercase,s.setAttribute("shift",!0)):"true"===s.getAttribute("shift")&&(s.textContent=e[c][a].lowercase,s.setAttribute("shift",!1)))}))}(a)}function R(a){m("toCapsUppercase"),C.forEach(((s,c)=>{"false"===s.getAttribute("caps")?(s.textContent=e[c][a].toCapsUppercase,s.setAttribute("caps",!0)):(s.textContent=e[c][a].lowercase,s.setAttribute("caps",!1))}))}function K(e,a){C.forEach((s=>{s.getAttribute("data-key")===event.code&&(s.getAttribute(e)===a?s.classList.add("active-virtual-key"):s.classList.remove("active-virtual-key"),!0===U&&s.classList.add("active-virtual-key"))}))}function D(s){C.forEach(((c,p)=>{c.textContent=e[p][s].lowercase,"true"===c.getAttribute("caps")&&(c.textContent=e[p][s].toCapsUppercase),a=s,localStorage.setItem("lang",a)})),y.forEach((e=>{e.classList.remove("language-trigger")}))}w.addEventListener("click",(e=>{if(e.target.classList.contains("keyButton")){switch(e.target.classList.add("animation-click"),!e.target.hasAttribute("special")&&S(e.target.textContent),!new RegExp("(Shift|Alt|Caps)","g").test(e.target.getAttribute("data-key"))&&E(),C.forEach((e=>{"CapsLock"!==e.getAttribute("data-key")&&e.classList.remove("active-virtual-key")})),e.target.getAttribute("data-key")){case"Backspace":i.selectionStart===i.selectionEnd?i.setRangeText("",i.selectionStart-1,i.selectionStart):i.setRangeText(""),i.focus(),i.selectionStart;break;case"Delete":i.selectionStart===i.selectionEnd?i.setRangeText("",i.selectionStart,i.selectionStart+1):i.setRangeText(""),i.focus(),i.selectionStart;break;case"Tab":i.selectionStart===i.selectionEnd?i.setRangeText("      ",i.selectionStart,i.selectionEnd):i.setRangeText(""),i.focus(),i.selectionStart=i.selectionStart+6;break;case"Space":i.selectionStart===i.selectionEnd?i.setRangeText(" ",i.selectionStart,i.selectionEnd):i.setRangeText(""),i.focus(),i.selectionStart=i.selectionStart+1;break;case"Enter":i.selectionStart===i.selectionEnd?i.setRangeText("\n",i.selectionStart,i.selectionEnd):i.setRangeText(""),i.focus(),i.selectionStart=i.value.length;break;case"CapsLock":e.target.classList.toggle("active-virtual-key"),("ru"===a||"en"===a)&&R(a);break;case"ControlLeft":i.focus(),i.selectionEnd=i.selectionEnd-1;break;case"ControlRight":i.focus(),i.selectionStart=i.selectionStart+1}!/(Shift|Alt)/g.test(e.target.getAttribute("data-key"))&&A(y,"language-trigger"),/Alt/g.test(e.target.getAttribute("data-key"))&&(v(y,"language-trigger"),i.focus(),i.selectionStart=i.value.length),!/Control/g.test(e.target.getAttribute("data-key"))&&A(f,"arrow-trigger"),new RegExp("Control","g").test(e.target.getAttribute("data-key"))&&v(f,"arrow-trigger"),/Shift/g.test(e.target.getAttribute("data-key"))&&(e.target.classList.toggle("active-virtual-key"),x()),!/Meta/g.test(e.target.getAttribute("data-key"))&&A(b,"meta-trigger"),/Meta/.test(e.target.getAttribute("data-key"))&&(v(b,"meta-trigger"),alert("Read the instructions for control the Keyboard in README.md at the root of the project"))}else i.focus(),i.selectionStart=i.value.length})),window.addEventListener("keydown",(s=>{switch(i.focus(),C.forEach((e=>{s.code===e.getAttribute("data-key")?(U=!1,e.classList.add("active-virtual-key"),e.classList.add("animation-dropdown")):"CapsLock"!==e.getAttribute("data-key")&&e.classList.remove("active-virtual-key")})),(s.altKey&&"ShiftLeft"===s.code||s.altKey&&"ShiftRight"===s.code)&&(U=!0,C.forEach((e=>{"AltLeft"===e.getAttribute("data-key")&&e.classList.add("active-virtual-key")})),D("ru"===a?"en":"ru")),/(Shift|Alt|Caps)/g.test(s.code)||E(),!/(Shift|Alt)/g.test(s.code)&&A(y,"language-trigger"),/Shift/g.test(s.code)&&((!s.altKey&&"ShiftLeft"===s.code||!s.altKey&&"ShiftRight"===s.code)&&x(),K("shift","true")),s.code){case"CapsLock":K("caps","false"),R(a);break;case"ControlRight":i.focus(),i.selectionStart=i.selectionStart+1;break;case"ControlLeft":i.focus(),i.selectionEnd=i.selectionEnd-1;break;case"Tab":s.preventDefault(),i.selectionStart===i.selectionEnd?i.setRangeText("      ",i.selectionStart,i.selectionEnd):i.setRangeText(""),i.focus(),i.selectionStart=i.selectionStart+6;break;case"AltRight":C.forEach((e=>{e.classList.add("animation-dropdown")}))}!/Control/g.test(s.code)&&A(f,"arrow-trigger"),/Arrow/.test(s.code)&&(s.preventDefault(),S(e[g(s.code)][a].lowercase)),new RegExp("Meta").test(s.code)&&alert("Read the instructions for control the Keyboard in README.md at the root of the project"),/Alt/g.test(s.code)&&(s.preventDefault(),i.focus(),i.selectionStart=i.value.length)})),w.addEventListener("animationend",(()=>{for(let e of w.children)e.classList.remove("animation-click"),e.classList.remove("animation-dropdown")})),document.addEventListener("DOMContentLoaded",(()=>{i.focus()}))})();