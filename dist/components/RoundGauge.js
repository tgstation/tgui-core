import*as e from"react/jsx-runtime";import*as a from"../common/math.js";import*as s from"../common/react.js";import*as r from"../common/ui.js";import*as o from"./AnimatedNumber.js";function c(c){let{alertAfter:l,alertBefore:t,className:n,format:m,maxValue:i=1,minValue:u=1,ranges:d,size:x=1,style:g,value:j,...C}=c,p=(0,a.scale)(j,u,i),_=(0,a.clamp01)(p),f=d?{}:{primary:[0,1]};if(d)for(let e in d){let s=d[e];f[e]=[(0,a.scale)(s[0],u,i),(0,a.scale)(s[1],u,i)]}let h=(!!l&&!!t&&!!(j>l)&&!!(j<t)||!!l&&!!(j>l)||!!t&&!!(j<t))&&(0,a.keyOfMatchingRange)(_,f);return(0,e.jsxs)("div",{className:"RoundGauge__wrapper",children:[(0,e.jsx)("div",{className:(0,s.classes)(["RoundGauge",n,(0,r.computeBoxClassName)(C)]),...(0,r.computeBoxProps)({style:{fontSize:`${x}em`,...g},...C}),children:(0,e.jsxs)("svg",{viewBox:"0 0 100 50",children:[(l||t)&&(0,e.jsx)("g",{className:(0,s.classes)(["RoundGauge__alert",h?`active RoundGauge__alert--${h}`:""]),children:(0,e.jsx)("path",{d:"M48.211,14.578C48.55,13.9 49.242,13.472 50,13.472C50.758,13.472 51.45,13.9 51.789,14.578C54.793,20.587 60.795,32.589 63.553,38.106C63.863,38.726 63.83,39.462 63.465,40.051C63.101,40.641 62.457,41 61.764,41C55.996,41 44.004,41 38.236,41C37.543,41 36.899,40.641 36.535,40.051C36.17,39.462 36.137,38.726 36.447,38.106C39.205,32.589 45.207,20.587 48.211,14.578ZM50,34.417C51.426,34.417 52.583,35.574 52.583,37C52.583,38.426 51.426,39.583 50,39.583C48.574,39.583 47.417,38.426 47.417,37C47.417,35.574 48.574,34.417 50,34.417ZM50,32.75C50,32.75 53,31.805 53,22.25C53,20.594 51.656,19.25 50,19.25C48.344,19.25 47,20.594 47,22.25C47,31.805 50,32.75 50,32.75Z"})}),(0,e.jsx)("g",{children:(0,e.jsx)("circle",{className:"RoundGauge__ringTrack",cx:"50",cy:"50",r:"45"})}),(0,e.jsx)("g",{children:Object.keys(f).map((a,s)=>{let r=f[a];return(0,e.jsx)("circle",{className:`RoundGauge__ringFill RoundGauge--color--${a}`,style:{strokeDashoffset:Math.max((2-(r[1]-r[0]))*Math.PI*50,0)},transform:`rotate(${180+180*r[0]} 50 50)`,cx:"50",cy:"50",r:"45"},s)})}),(0,e.jsxs)("g",{className:"RoundGauge__needle",transform:`rotate(${180*_-90} 50 50)`,children:[(0,e.jsx)("polygon",{className:"RoundGauge__needleLine",points:"46,50 50,0 54,50"}),(0,e.jsx)("circle",{className:"RoundGauge__needleMiddle",cx:"50",cy:"50",r:"8"})]}),(0,e.jsx)("title",{children:"alert"})]})}),(0,e.jsx)(o.AnimatedNumber,{value:j,format:m})]})}export{c as RoundGauge};