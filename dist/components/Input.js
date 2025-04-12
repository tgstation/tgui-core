import*as e from"react/jsx-runtime";import*as t from"react";import*as r from"../common/keys.js";import*as u from"../common/react.js";import*as o from"../common/timer.js";import*as n from"../common/ui.js";let a=(0,o.debounce)(e=>e(),250);function s(o){let{autoFocus:s,autoSelect:c,className:m,disabled:l,expensive:p,fluid:f,maxLength:i,monospace:v,onChange:d,onEnter:g,onEscape:T,placeholder:j,ref:x,selfClear:E,...b}=o,y=(0,t.useRef)(null),I=x??y,[h,k]=(0,t.useState)(o.value),C=(0,t.useMemo)(()=>(0,n.computeBoxProps)(b),[b]),D=(0,t.useMemo)(()=>(0,u.classes)(["Input",l&&"Input--disabled",f&&"Input--fluid",v&&"Input--monospace",m]),[m,f,v]);return(0,t.useEffect)(()=>{let e;return(s||c)&&(e=setTimeout(()=>{I.current?.focus(),c&&I.current?.select()},1)),()=>clearTimeout(e)},[]),(0,t.useEffect)(()=>{document.activeElement!==I.current&&o.value!==h&&k(o.value??"")},[o.value]),(0,e.jsx)("input",{...C,autoComplete:"off",className:D,disabled:l,maxLength:i,onChange:function(e){let t=e.currentTarget.value;k(t),p?a(()=>d?.(t)):d?.(t)},onKeyDown:function(e){if(e.key===r.KEY.Enter){e.preventDefault(),g?.(e.currentTarget.value),E&&k(""),e.currentTarget.blur();return}(0,r.isEscape)(e.key)&&(e.preventDefault(),T?.(e.currentTarget.value),e.currentTarget.blur())},placeholder:j,ref:I,type:"text",value:h,spellCheck:!1})}export{s as Input};