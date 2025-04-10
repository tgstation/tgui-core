import*as s from"react/jsx-runtime";import*as o from"../common/math.js";import*as r from"../common/react.js";import*as e from"../common/ui.js";import*as a from"./DraggableControl.js";function c(c){let{animated:l,format:n,maxValue:i,minValue:t,onChange:m,onDrag:x,step:_,stepPixelSize:b,unclamped:d,unit:j,value:g,bipolar:h,className:K,color:f,fillValue:p,ranges:u={},size:v=1,style:N,...y}=c;return(0,s.jsx)(a.DraggableControl,{dragMatrix:[0,-1],animated:l,format:n,maxValue:i,minValue:t,onChange:m,onDrag:x,step:_,stepPixelSize:b,unclamped:d,unit:j,value:g,children:a=>{let{displayElement:c,displayValue:l,dragging:n,handleDragStart:m,inputElement:x}=a,_=(0,o.scale)(p??l,t,i),b=(0,o.scale)(l,t,i),d=f||(0,o.keyOfMatchingRange)(p??g,u)||"default",j=Math.min((b-.5)*270,225);return(0,s.jsxs)("div",{className:(0,r.classes)(["Knob",`Knob--color--${d}`,h&&"Knob--bipolar",K,(0,e.computeBoxClassName)(y)]),...(0,e.computeBoxProps)({style:{fontSize:`${v}em`,...N},...y}),onMouseDown:m,children:[(0,s.jsx)("div",{className:"Knob__circle",children:(0,s.jsx)("div",{className:"Knob__cursorBox",style:{transform:`rotate(${j}deg)`},children:(0,s.jsx)("div",{className:"Knob__cursor"})})}),n&&(0,s.jsx)("div",{className:"Knob__popupValue",children:c}),(0,s.jsxs)("svg",{className:"Knob__ring Knob__ringTrackPivot",viewBox:"0 0 100 100",children:[(0,s.jsx)("circle",{className:"Knob__ringTrack",cx:"50",cy:"50",r:"50"}),(0,s.jsx)("title",{children:"track"})]}),(0,s.jsxs)("svg",{className:"Knob__ring Knob__ringFillPivot",viewBox:"0 0 100 100",children:[(0,s.jsx)("title",{children:"fill"}),(0,s.jsx)("circle",{className:"Knob__ringFill",style:{strokeDashoffset:Math.max(((h?2.75:2)-1.5*_)*Math.PI*50,0)},cx:"50",cy:"50",r:"50"})]}),x]})}})}export{c as Knob};