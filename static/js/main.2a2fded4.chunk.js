(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=(n(45),n(34)),i=n.n(r),o=n(35),s=(Object(o.a)({apiKey:"AIzaSyD8gcRokHymolzVGAZjAPRvh5y30n5G1yo",authDomain:"add-question-abb7b.firebaseapp.com",projectId:"add-question-abb7b",storageBucket:"add-question-abb7b.appspot.com",messagingSenderId:"343478170559",appId:"1:343478170559:web:d9a511921100f02beea70a"}),n(7)),l=n(9),d=n(10),u=n(4);var b,p,j,h,x,O,f,g=function(e){var t=c.a.createRef();Object(a.useEffect)((function(){n()}));var n=function(){window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,t.current])};return Object(u.jsx)("div",{ref:t,children:e.children})},m=n(24),v=n(42),y=n(57),C=n(58),w=n(59),k=n(60),S=n(61),P=n(62),E=n(63),V=n(36),_=n(37),B=(n(51),d.a.div(b||(b=Object(l.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  background: #fff;\n"])))),I=d.a.div(p||(p=Object(l.a)(["\n  height: auto;\n  min-height: 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 0;\n"]))),F=d.a.div(j||(j=Object(l.a)([""]))),T=d.a.div(h||(h=Object(l.a)(["\n  height: auto;\n  width: 100%;\n  padding: 20px 20px;\n  display: flex;\n  justify-content: center;\n"]))),z=d.a.div(x||(x=Object(l.a)(["\n  height: auto;\n  width: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  background: #23bbdc;\n  margin-right: 10px;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 8px;\n"]))),M=d.a.div(O||(O=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  overflow-y: hidden;\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n"]))),L=d.a.div(f||(f=Object(l.a)(["\n  height: 100%;\n  width: 8000px;\n  touch-action: none;\n"]))),D=function(e){return e.includes("\\\\")?("\\begin{align*}"+e+"\\end{align*}").replace("\\begin{aligned}","").replace("\\end{aligned}","").replace(new RegExp("(align.{1})","g"),"aligned"):e.replace(new RegExp("(align.{1})","g"),"aligned")};function N(e){var t=e.getLatex,n=e.onClose,c=(e.show,Object(a.useRef)(null)),r=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useState)(!1),l=Object(s.a)(o,2),d=l[0],b=l[1],p=Object(a.useState)(null),j=Object(s.a)(p,2),h=j[0],x=j[1],O=Object(a.useState)(""),f=Object(s.a)(O,2),g=f[0],m=f[1];return Object(a.useEffect)((function(){g?(_.render(D(g),c.current,{displayMode:!0}),t(g)):c.current.innerText=""}),[g,t]),Object(a.useEffect)((function(){r.current.addEventListener("exported",(function(e){var t=e.detail.exports;t&&t["application/x-latex"]&&m(D(t["application/x-latex"]))})),r.current.addEventListener("changed",(function(e){b(e.detail.canClear)}));var e=V.a(r.current,{recognitionParams:{type:"MATH",protocol:"WEBSOCKET",apiVersion:"V4",server:{scheme:"https",host:"webdemoapi.myscript.com",applicationKey:"1463c06b-251c-47b8-ad0b-ba05b9a3bd01",hmacKey:"60ca101a-5e6d-4159-abc5-2efcbecce059"},iink:{math:{mimeTypes:["application/x-latex","application/vnd.myscript.jiix"],solver:{enable:!1}},export:{jiix:{strokes:!0}}}}});x(e)}),[]),Object(u.jsxs)(B,{children:[Object(u.jsx)(I,{children:Object(u.jsx)(F,{ref:c})}),Object(u.jsxs)(T,{children:[Object(u.jsx)(z,{onClick:function(){return h.undo()},children:Object(u.jsx)(y.a,{size:20,color:"#fff"})}),Object(u.jsx)(z,{onClick:function(){return h.redo()},children:Object(u.jsx)(C.a,{size:20,color:"#fff"})}),Object(u.jsx)(z,{onClick:function(){d&&(h.clear(),m(null)),i.current.scrollLeft=0},children:Object(u.jsx)(w.a,{size:20,color:"#fff"})}),Object(u.jsx)(z,{onClick:function(){if(navigator.clipboard)navigator.clipboard.writeText(g);else{var e=document.createElement("textarea");e.innerText=g,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}},children:Object(u.jsx)(k.a,{size:20,color:"#fff"})}),Object(u.jsx)(z,{onClick:function(){i.current.scrollLeft-=20},children:Object(u.jsx)(S.a,{size:20,color:"#fff"})}),Object(u.jsx)(z,{onClick:function(){i.current.scrollLeft+=20},children:Object(u.jsx)(P.a,{size:20,color:"#fff"})}),Object(u.jsx)(z,{onClick:function(){n(g)},children:Object(u.jsx)(E.a,{size:20,color:"#fff"})})]}),Object(u.jsx)(M,{ref:i,children:Object(u.jsx)(L,{ref:r})})]})}var R,q,A,J,K,Q=n(64),H=["getValue","showValue","canDraw","placeholder","inputVal","setInputValue","doFocus"],G=d.a.div(R||(R=Object(l.a)(["\n  margin: 10px 0;\n"]))),U=d.a.input(q||(q=Object(l.a)(["\n  height: auto;\n  width: 100%;\n  padding: 15px;\n  border: none;\n  background: #eee;\n  font-size: 15px;\n  &:focus {\n    outline-color: #23bbdc;\n  }\n"]))),W=d.a.button(A||(A=Object(l.a)(["\n  height: auto;\n  width: auto;\n  margin-left: 10px;\n  border: none;\n  background: #23bbdc;\n  cursor: pointer;\n  padding: 10px 15px;\n"]))),$=d.a.div(J||(J=Object(l.a)(["\n  display: flex;\n"]))),Z=d.a.h5(K||(K=Object(l.a)(["\n  margin: 10px;\n"])));function X(e){e.getValue;var t=e.showValue,n=void 0===t||t,c=e.canDraw,r=void 0===c||c,i=e.placeholder,o=void 0===i?"Enter a question":i,l=e.inputVal,d=e.setInputValue,b=e.doFocus,p=void 0!==b&&b,j=Object(v.a)(e,H),h=Object(a.useState)(!1),x=Object(s.a)(h,2),O=x[0],f=x[1],y=Object(a.useRef)();return Object(a.useEffect)((function(){y&&p&&y.current.focus()}),[p]),Object(u.jsx)(g,{children:Object(u.jsxs)(G,{children:[!O&&Object(u.jsxs)($,{children:[Object(u.jsx)(U,Object(m.a)({ref:y,placeholder:o},j)),r&&Object(u.jsx)(W,{onClick:function(){return f(!O)},children:Object(u.jsx)(Q.a,{size:20,color:"white"})})]}),O&&Object(u.jsx)(N,{getLatex:function(e){return null},show:O,onClose:function(e){(f(!1),e)&&d(l+" $"+e+"$ ")}}),n&&Object(u.jsx)(Z,{children:l})]})})}var Y,ee,te,ne,ae,ce,re,ie,oe,se={math_1st_paper:{chapters:["Matrix","Straight Line","Differentiation","Integration"],name:"Math 1st Paper"},math_2nd_paper:{chapters:["Polynomial Equation","Conics","Inverse Trigonometry","Statics"],name:"Math 2nd Paper"},physics_1st_paper:{chapters:["Vector","Newtonian Mechanics","Work, force and energy","Periodic Motion","Standard Gas"],name:"Physics 1st Paper"},physics_2nd_paper:{chapters:["Thermodynamics","Current Electricity","Physical Optics","Modern Physics","Semiconductor"],name:"Physics 2nd Paper"},chemistry_1st_paper:{chapters:["Qualitative Chemistry","Periodic Properties","Chemical Changes","Applied Chemistry"],name:"Chemistry 1st Paper"},chemistry_2nd_paper:{chapters:["Environmental Chemistry","Organic Chemistry","Quantitative Chemistry","Electrochemistry"],name:"Chemistry 2nd Paper"},biology_1st_paper:{chapters:["Chapter Two","Chapter Seven","Chapter Eight","Chapter Nine","Chapter Ten"],name:"Biology 1st Paper"},biology_2nd_paper:{chapters:["Chapter One","Chapter Two","Chapter Three","Chapter Four","Chapter Eleven"],name:"Biology 2nd Paper"}},le=n(27),de=n(65),ue=d.a.div(Y||(Y=Object(l.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: #eee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media only screen and (max-width: 600px) {\n    display: block;\n  }\n"]))),be=d.a.div(ee||(ee=Object(l.a)(["\n  background: #fff;\n  width: 60%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 80px 20px;\n  overflow: scroll;\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n  }\n"]))),pe=d.a.div(te||(te=Object(l.a)(["\n  margin: 10px 0;\n"]))),je=d.a.div(ne||(ne=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: #23bbdc;\n  align-items: center;\n"]))),he=d.a.button(ae||(ae=Object(l.a)(["\n  height: auto;\n  width: auto;\n  padding: 10px 15px;\n  background: #23bbdc;\n  color: white;\n  border: none;\n  border-radius: 5px;\n"]))),xe=d.a.select(ce||(ce=Object(l.a)(["\n  font: 400 12px/1.3 sans-serif;\n  -webkit-appearance: none;\n  appearance: none;\n  color: var(--baseFg);\n  border: 1px solid var(--baseFg);\n  line-height: 1;\n  outline: 0;\n  padding: 0.65em 2.5em 0.55em 0.75em;\n  border-radius: var(--radius);\n  background-color: var(--baseBg);\n  background-image: linear-gradient(var(--baseFg), var(--baseFg)),\n    linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),\n    linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),\n    linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);\n  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;\n  background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;\n  background-position: right 20px center, right bottom, right bottom,\n    right bottom;\n  width: 100%;\n  background: #23bbdc;\n  color: #fff;\n  font-size: 15px;\n"]))),Oe=d.a.option(re||(re=Object(l.a)(["\n  height: 45px;\n"]))),fe=d.a.div(ie||(ie=Object(l.a)(["\n  color: #23bbdc;\n  margin: 20px 0;\n"]))),ge=d.a.div(oe||(oe=Object(l.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 20px;\n"])));function me(e){e.getQuestion;var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],d=o[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),j=p[0],h=p[1],x=Object(a.useState)(""),O=Object(s.a)(x,2),f=O[0],m=O[1],v=Object(a.useState)(""),y=Object(s.a)(v,2),C=y[0],w=y[1],k=Object(a.useState)(!1),S=Object(s.a)(k,2),P=S[0],E=S[1],V=Object(a.useState)(!0),_=Object(s.a)(V,2),B=_[0],I=_[1],F=Object(a.useState)(!1),T=Object(s.a)(F,2),z=T[0],M=T[1],L=Object(a.useState)("math_1st_paper"),D=Object(s.a)(L,2),N=D[0],R=D[1],q=Object(a.useState)(""),A=Object(s.a)(q,2),J=A[0],K=A[1],Q=Object(a.useState)(""),H=Object(s.a)(Q,2),G=H[0],U=H[1],W=Object(a.useState)(null),$=Object(s.a)(W,2),Z=$[0],Y=$[1],ee=function(){r(""),d(""),h(""),m(""),w(""),U(null),Y(null)},te=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(je,{children:[Object(u.jsx)("h4",{children:"Add Question"}),Object(u.jsx)(he,{onClick:ee,children:"Clear"})]}),Object(u.jsxs)(fe,{children:[Object(u.jsxs)("h4",{children:["Subject: ",N&&se[N].name.toUpperCase()]}),Object(u.jsxs)("h4",{children:["Chapter: ",J&&J.split("_").join(" ").toUpperCase()]})]}),Object(u.jsx)(X,{value:c,inputVal:c,setInputValue:r,onChange:function(e){return r(e.target.value)},doFocus:!0}),c&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:"1."}),Object(u.jsx)(X,{value:l,placeholder:"Enter option one",inputVal:l,setInputValue:d,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("h4",{children:"2."}),Object(u.jsx)(X,{value:j,placeholder:"Enter option two",inputVal:j,setInputValue:h,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("h4",{children:"3."}),Object(u.jsx)(X,{value:f,placeholder:"Enter option three",inputVal:f,setInputValue:m,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("h4",{children:"4."}),Object(u.jsx)(X,{value:C,placeholder:"Enter option four",inputVal:C,setInputValue:w,onChange:function(e){return w(e.target.value)}}),Object(u.jsx)("h4",{children:"Correct index"}),Object(u.jsx)(X,{showValue:!1,value:G,inputVal:G,setInputValue:U,onChange:function(e){return U(e.target.value)},canDraw:!1,placeholder:"Enter index i.e. 1,2,3..",type:"number"}),Object(u.jsx)("h5",{children:Z&&JSON.stringify(Z)})]}),Object(u.jsxs)(ge,{children:[Object(u.jsx)(he,{onClick:function(){E(!1),M(!0)},children:"Back"}),Object(u.jsx)(he,{onClick:function(){if(c&&l&&j&&C&&f&&N&&J&&G){var e=Number(G);if(e>0&&e<5){var t={text:c,options:[l,j,f,C],correctIndex:e-1,subject:N,chapter:J},n=Object(le.a)(),a=Object(de.a)();Object(le.c)(Object(le.b)(n,"/question"+a),t),Y(t),alert(JSON.stringify(t)),ee()}else alert("Incorrect index. Must be between 1 to 4.")}else alert("Enter all fields with valid values.")},children:"Submit"})]})]}),ne=Object(u.jsx)(ve,{callback:function(){I(!1),M(!0)},options:["Math 1st Paper","Math 2nd Paper","Physics 1st Paper","Physics 2nd Paper","Chemistry 1st Paper","Chemistry 2nd Paper","Biology 1st Paper","Biology 2nd Paper"],title:"Choose a subject",onNext:function(e){return R(e)}}),ae=Object(u.jsx)(ve,{callback:function(){M(!1),E(!0)},options:se[N].chapters,title:"Choose a chapter",onNext:function(e){return K(e)},backBtnExists:!0,onBack:function(){M(!1),I(!0)}});return Object(u.jsx)(g,{children:Object(u.jsx)(ue,{children:Object(u.jsxs)(be,{children:[P&&te,B&&ne,z&&ae]})})})}var ve=function(e){var t=e.onNext,n=e.callback,c=e.options,r=e.title,i=e.buttonText,o=void 0===i?"Next":i,l=e.backBtnExists,d=e.onBack,b=Object(a.useState)(c&&c[0].toLowerCase().split(" ").join("_")),p=Object(s.a)(b,2),j=p[0],h=p[1];return Object(u.jsxs)("form",{onKeyDown:function(e){13===e.keyCode&&(t(j),n())},onSubmit:function(e){e.preventDefault(),console.log(j),t(j),n()},children:[Object(u.jsxs)(je,{children:[Object(u.jsx)("h4",{children:r}),l&&Object(u.jsx)(he,{type:"button",onClick:d,children:"Back"}),Object(u.jsx)(he,{type:"submit",children:o})]}),Object(u.jsx)(pe,{children:Object(u.jsx)(xe,{onChange:function(e){return h(e.target.value.split(" ").join("_"))},children:c&&c.map((function(e,t){return Object(u.jsx)(Oe,{value:e.toLowerCase(),children:e},t)}))})})]})};var ye=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(me,{})})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{children:Object(u.jsx)(ye,{})})}),document.getElementById("root")),Ce()}},[[55,1,2]]]);
//# sourceMappingURL=main.2a2fded4.chunk.js.map