var r,e=((r={}).A="a",r.Alt="Alt",r.Backspace="Backspace",r.Control="Control",r.D="d",r.Delete="Delete",r.Down="ArrowDown",r.E="e",r.End="End",r.Enter="Enter",r.Esc="Esc",r.Escape="Escape",r.Home="Home",r.Insert="Insert",r.Left="ArrowLeft",r.Minus="-",r.N="n",r.PageDown="PageDown",r.PageUp="PageUp",r.Plus="+",r.Right="ArrowRight",r.S="s",r.Shift="Shift",r.Space=" ",r.Tab="Tab",r.Up="ArrowUp",r.W="w",r.Z="z",r);function n(r){return"Esc"===r||"Escape"===r}function t(r){return r>="a"&&r<="z"}function o(r){return r>="0"&&r<="9"}function s(r){return"n"===r||"s"===r||"w"===r||"e"===r}function a(r){return"ArrowUp"===r||"ArrowDown"===r||"ArrowLeft"===r||"ArrowRight"===r}function i(r){return"w"===r||"a"===r||"s"===r||"d"===r}function c(r){return i(r)||a(r)}export{e as KEY,t as isAlphabetic,a as isArrow,s as isCardinal,n as isEscape,c as isMovement,o as isNumeric,i as isWasd};