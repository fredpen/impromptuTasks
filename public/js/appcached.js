!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){"use strict";var n=[],i=t.document,s=Object.getPrototypeOf,o=n.slice,r=n.concat,a=n.push,l=n.indexOf,c={},h=c.toString,u=c.hasOwnProperty,d=u.toString,f=d.call(Object),p={},m=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},g=function(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function y(t,e,n){var s,o=(e=e||i).createElement("script");if(o.text=t,n)for(s in v)n[s]&&(o[s]=n[s]);e.head.appendChild(o).parentNode.removeChild(o)}function b(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?c[h.call(t)]||"object":typeof t}var _="3.3.1",w=function(t,e){return new w.fn.init(t,e)},D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function k(t){var e=!!t&&"length"in t&&t.length,n=b(t);return!m(t)&&!g(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}w.fn=w.prototype={jquery:_,constructor:w,length:0,toArray:function(){return o.call(this)},get:function(t){return null==t?o.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=w.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return w.each(this,t)},map:function(t){return this.pushStack(w.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var t,e,n,i,s,o,r=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,r=arguments[a]||{},a++),"object"==typeof r||m(r)||(r={}),a===l&&(r=this,a--);a<l;a++)if(null!=(t=arguments[a]))for(e in t)n=r[e],r!==(i=t[e])&&(c&&i&&(w.isPlainObject(i)||(s=Array.isArray(i)))?(s?(s=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},r[e]=w.extend(c,o,i)):void 0!==i&&(r[e]=i));return r},w.extend({expando:"jQuery"+(_+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==h.call(t))&&(!(e=s(t))||"function"==typeof(n=u.call(e,"constructor")&&e.constructor)&&d.call(n)===f)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t){y(t)},each:function(t,e){var n,i=0;if(k(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},trim:function(t){return null==t?"":(t+"").replace(D,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(k(Object(t))?w.merge(n,"string"==typeof t?[t]:t):a.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:l.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,s=t.length;i<n;i++)t[s++]=e[i];return t.length=s,t},grep:function(t,e,n){for(var i=[],s=0,o=t.length,r=!n;s<o;s++)!e(t[s],s)!==r&&i.push(t[s]);return i},map:function(t,e,n){var i,s,o=0,a=[];if(k(t))for(i=t.length;o<i;o++)null!=(s=e(t[o],o,n))&&a.push(s);else for(o in t)null!=(s=e(t[o],o,n))&&a.push(s);return r.apply([],a)},guid:1,support:p}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){c["[object "+e+"]"]=e.toLowerCase()});var C=function(t){var e,n,i,s,o,r,a,l,c,h,u,d,f,p,m,g,v,y,b,_="sizzle"+1*new Date,w=t.document,D=0,k=0,C=rt(),x=rt(),T=rt(),S=function(t,e){return t===e&&(u=!0),0},E={}.hasOwnProperty,M=[],A=M.pop,O=M.push,I=M.push,N=M.slice,P=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",j="[\\x20\\t\\r\\n\\f]",Y="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",H="\\["+j+"*("+Y+")(?:"+j+"*([*^$|!~]?=)"+j+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Y+"))|)"+j+"*\\]",$=":("+Y+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|.*)\\)|)",R=new RegExp(j+"+","g"),W=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g"),U=new RegExp("^"+j+"*,"+j+"*"),F=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),q=new RegExp("="+j+"*([^\\]'\"]*?)"+j+"*\\]","g"),V=new RegExp($),B=new RegExp("^"+Y+"$"),z={ID:new RegExp("^#("+Y+")"),CLASS:new RegExp("^\\.("+Y+")"),TAG:new RegExp("^("+Y+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,X=/[+~]/,J=new RegExp("\\\\([\\da-f]{1,6}"+j+"?|("+j+")|.)","ig"),tt=function(t,e,n){var i="0x"+e-65536;return i!=i||n?e:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},it=function(){d()},st=yt(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{I.apply(M=N.call(w.childNodes),w.childNodes),M[w.childNodes.length].nodeType}catch(t){I={apply:M.length?function(t,e){O.apply(t,N.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}function ot(t,e,i,s){var o,a,c,h,u,p,v,y=e&&e.ownerDocument,D=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==D&&9!==D&&11!==D)return i;if(!s&&((e?e.ownerDocument||e:w)!==f&&d(e),e=e||f,m)){if(11!==D&&(u=Z.exec(t)))if(o=u[1]){if(9===D){if(!(c=e.getElementById(o)))return i;if(c.id===o)return i.push(c),i}else if(y&&(c=y.getElementById(o))&&b(e,c)&&c.id===o)return i.push(c),i}else{if(u[2])return I.apply(i,e.getElementsByTagName(t)),i;if((o=u[3])&&n.getElementsByClassName&&e.getElementsByClassName)return I.apply(i,e.getElementsByClassName(o)),i}if(n.qsa&&!T[t+" "]&&(!g||!g.test(t))){if(1!==D)y=e,v=t;else if("object"!==e.nodeName.toLowerCase()){for((h=e.getAttribute("id"))?h=h.replace(et,nt):e.setAttribute("id",h=_),a=(p=r(t)).length;a--;)p[a]="#"+h+" "+vt(p[a]);v=p.join(","),y=X.test(t)&&mt(e.parentNode)||e}if(v)try{return I.apply(i,y.querySelectorAll(v)),i}catch(t){}finally{h===_&&e.removeAttribute("id")}}}return l(t.replace(W,"$1"),e,i,s)}function rt(){var t=[];return function e(n,s){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=s}}function at(t){return t[_]=!0,t}function lt(t){var e=f.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ct(t,e){for(var n=t.split("|"),s=n.length;s--;)i.attrHandle[n[s]]=e}function ht(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function ut(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function dt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function ft(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function pt(t){return at(function(e){return e=+e,at(function(n,i){for(var s,o=t([],n.length,e),r=o.length;r--;)n[s=o[r]]&&(n[s]=!(i[s]=n[s]))})})}function mt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in n=ot.support={},o=ot.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},d=ot.setDocument=function(t){var e,s,r=t?t.ownerDocument||t:w;return r!==f&&9===r.nodeType&&r.documentElement?(p=(f=r).documentElement,m=!o(f),w!==f&&(s=f.defaultView)&&s.top!==s&&(s.addEventListener?s.addEventListener("unload",it,!1):s.attachEvent&&s.attachEvent("onunload",it)),n.attributes=lt(function(t){return t.className="i",!t.getAttribute("className")}),n.getElementsByTagName=lt(function(t){return t.appendChild(f.createComment("")),!t.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(f.getElementsByClassName),n.getById=lt(function(t){return p.appendChild(t).id=_,!f.getElementsByName||!f.getElementsByName(_).length}),n.getById?(i.filter.ID=function(t){var e=t.replace(J,tt);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&m){var n=e.getElementById(t);return n?[n]:[]}}):(i.filter.ID=function(t){var e=t.replace(J,tt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&m){var n,i,s,o=e.getElementById(t);if(o){if((n=o.getAttributeNode("id"))&&n.value===t)return[o];for(s=e.getElementsByName(t),i=0;o=s[i++];)if((n=o.getAttributeNode("id"))&&n.value===t)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],s=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[s++];)1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&m)return e.getElementsByClassName(t)},v=[],g=[],(n.qsa=Q.test(f.querySelectorAll))&&(lt(function(t){p.appendChild(t).innerHTML="<a id='"+_+"'></a><select id='"+_+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+j+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+j+"*(?:value|"+L+")"),t.querySelectorAll("[id~="+_+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+_+"+*").length||g.push(".#.+[+~]")}),lt(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=f.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+j+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),p.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Q.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt(function(t){n.disconnectedMatch=y.call(t,"*"),y.call(t,"[s!='']:x"),v.push("!=",$)}),g=g.length&&new RegExp(g.join("|")),v=v.length&&new RegExp(v.join("|")),e=Q.test(p.compareDocumentPosition),b=e||Q.test(p.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},S=e?function(t,e){if(t===e)return u=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===i?t===f||t.ownerDocument===w&&b(w,t)?-1:e===f||e.ownerDocument===w&&b(w,e)?1:h?P(h,t)-P(h,e):0:4&i?-1:1)}:function(t,e){if(t===e)return u=!0,0;var n,i=0,s=t.parentNode,o=e.parentNode,r=[t],a=[e];if(!s||!o)return t===f?-1:e===f?1:s?-1:o?1:h?P(h,t)-P(h,e):0;if(s===o)return ht(t,e);for(n=t;n=n.parentNode;)r.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);for(;r[i]===a[i];)i++;return i?ht(r[i],a[i]):r[i]===w?-1:a[i]===w?1:0},f):f},ot.matches=function(t,e){return ot(t,null,null,e)},ot.matchesSelector=function(t,e){if((t.ownerDocument||t)!==f&&d(t),e=e.replace(q,"='$1']"),n.matchesSelector&&m&&!T[e+" "]&&(!v||!v.test(e))&&(!g||!g.test(e)))try{var i=y.call(t,e);if(i||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}return ot(e,f,null,[t]).length>0},ot.contains=function(t,e){return(t.ownerDocument||t)!==f&&d(t),b(t,e)},ot.attr=function(t,e){(t.ownerDocument||t)!==f&&d(t);var s=i.attrHandle[e.toLowerCase()],o=s&&E.call(i.attrHandle,e.toLowerCase())?s(t,e,!m):void 0;return void 0!==o?o:n.attributes||!m?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},ot.escape=function(t){return(t+"").replace(et,nt)},ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ot.uniqueSort=function(t){var e,i=[],s=0,o=0;if(u=!n.detectDuplicates,h=!n.sortStable&&t.slice(0),t.sort(S),u){for(;e=t[o++];)e===t[o]&&(s=i.push(o));for(;s--;)t.splice(i[s],1)}return h=null,t},s=ot.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=s(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=s(e);return n},(i=ot.selectors={cacheLength:50,createPseudo:at,match:z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(J,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(J,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ot.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ot.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return z.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&V.test(n)&&(e=r(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(J,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=C[t+" "];return e||(e=new RegExp("(^|"+j+")"+t+"("+j+"|$)"))&&C(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,n){return function(i){var s=ot.attr(i,t);return null==s?"!="===e:!e||(s+="","="===e?s===n:"!="===e?s!==n:"^="===e?n&&0===s.indexOf(n):"*="===e?n&&s.indexOf(n)>-1:"$="===e?n&&s.slice(-n.length)===n:"~="===e?(" "+s.replace(R," ")+" ").indexOf(n)>-1:"|="===e&&(s===n||s.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,i,s){var o="nth"!==t.slice(0,3),r="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===s?function(t){return!!t.parentNode}:function(e,n,l){var c,h,u,d,f,p,m=o!==r?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(g){if(o){for(;m;){for(d=e;d=d[m];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=m="only"===t&&!p&&"nextSibling"}return!0}if(p=[r?g.firstChild:g.lastChild],r&&y){for(b=(f=(c=(h=(u=(d=g)[_]||(d[_]={}))[d.uniqueID]||(u[d.uniqueID]={}))[t]||[])[0]===D&&c[1])&&c[2],d=f&&g.childNodes[f];d=++f&&d&&d[m]||(b=f=0)||p.pop();)if(1===d.nodeType&&++b&&d===e){h[t]=[D,f,b];break}}else if(y&&(b=f=(c=(h=(u=(d=e)[_]||(d[_]={}))[d.uniqueID]||(u[d.uniqueID]={}))[t]||[])[0]===D&&c[1]),!1===b)for(;(d=++f&&d&&d[m]||(b=f=0)||p.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&((h=(u=d[_]||(d[_]={}))[d.uniqueID]||(u[d.uniqueID]={}))[t]=[D,b]),d!==e)););return(b-=s)===i||b%i==0&&b/i>=0}}},PSEUDO:function(t,e){var n,s=i.pseudos[t]||i.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t);return s[_]?s(e):s.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?at(function(t,n){for(var i,o=s(t,e),r=o.length;r--;)t[i=P(t,o[r])]=!(n[i]=o[r])}):function(t){return s(t,0,n)}):s}},pseudos:{not:at(function(t){var e=[],n=[],i=a(t.replace(W,"$1"));return i[_]?at(function(t,e,n,s){for(var o,r=i(t,null,s,[]),a=t.length;a--;)(o=r[a])&&(t[a]=!(e[a]=o))}):function(t,s,o){return e[0]=t,i(e,null,o,n),e[0]=null,!n.pop()}}),has:at(function(t){return function(e){return ot(t,e).length>0}}),contains:at(function(t){return t=t.replace(J,tt),function(e){return(e.textContent||e.innerText||s(e)).indexOf(t)>-1}}),lang:at(function(t){return B.test(t||"")||ot.error("unsupported lang: "+t),t=t.replace(J,tt).toLowerCase(),function(e){var n;do{if(n=m?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===p},focus:function(t){return t===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:ft(!1),disabled:ft(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},header:function(t){return K.test(t.nodeName)},input:function(t){return G.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:pt(function(){return[0]}),last:pt(function(t,e){return[e-1]}),eq:pt(function(t,e,n){return[n<0?n+e:n]}),even:pt(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:pt(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:pt(function(t,e,n){for(var i=n<0?n+e:n;--i>=0;)t.push(i);return t}),gt:pt(function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=ut(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=dt(e);function gt(){}function vt(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function yt(t,e,n){var i=e.dir,s=e.next,o=s||i,r=n&&"parentNode"===o,a=k++;return e.first?function(e,n,s){for(;e=e[i];)if(1===e.nodeType||r)return t(e,n,s);return!1}:function(e,n,l){var c,h,u,d=[D,a];if(l){for(;e=e[i];)if((1===e.nodeType||r)&&t(e,n,l))return!0}else for(;e=e[i];)if(1===e.nodeType||r)if(h=(u=e[_]||(e[_]={}))[e.uniqueID]||(u[e.uniqueID]={}),s&&s===e.nodeName.toLowerCase())e=e[i]||e;else{if((c=h[o])&&c[0]===D&&c[1]===a)return d[2]=c[2];if(h[o]=d,d[2]=t(e,n,l))return!0}return!1}}function bt(t){return t.length>1?function(e,n,i){for(var s=t.length;s--;)if(!t[s](e,n,i))return!1;return!0}:t[0]}function _t(t,e,n,i,s){for(var o,r=[],a=0,l=t.length,c=null!=e;a<l;a++)(o=t[a])&&(n&&!n(o,i,s)||(r.push(o),c&&e.push(a)));return r}function wt(t,e,n,i,s,o){return i&&!i[_]&&(i=wt(i)),s&&!s[_]&&(s=wt(s,o)),at(function(o,r,a,l){var c,h,u,d=[],f=[],p=r.length,m=o||function(t,e,n){for(var i=0,s=e.length;i<s;i++)ot(t,e[i],n);return n}(e||"*",a.nodeType?[a]:a,[]),g=!t||!o&&e?m:_t(m,d,t,a,l),v=n?s||(o?t:p||i)?[]:r:g;if(n&&n(g,v,a,l),i)for(c=_t(v,f),i(c,[],a,l),h=c.length;h--;)(u=c[h])&&(v[f[h]]=!(g[f[h]]=u));if(o){if(s||t){if(s){for(c=[],h=v.length;h--;)(u=v[h])&&c.push(g[h]=u);s(null,v=[],c,l)}for(h=v.length;h--;)(u=v[h])&&(c=s?P(o,u):d[h])>-1&&(o[c]=!(r[c]=u))}}else v=_t(v===r?v.splice(p,v.length):v),s?s(null,r,v,l):I.apply(r,v)})}function Dt(t){for(var e,n,s,o=t.length,r=i.relative[t[0].type],a=r||i.relative[" "],l=r?1:0,h=yt(function(t){return t===e},a,!0),u=yt(function(t){return P(e,t)>-1},a,!0),d=[function(t,n,i){var s=!r&&(i||n!==c)||((e=n).nodeType?h(t,n,i):u(t,n,i));return e=null,s}];l<o;l++)if(n=i.relative[t[l].type])d=[yt(bt(d),n)];else{if((n=i.filter[t[l].type].apply(null,t[l].matches))[_]){for(s=++l;s<o&&!i.relative[t[s].type];s++);return wt(l>1&&bt(d),l>1&&vt(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(W,"$1"),n,l<s&&Dt(t.slice(l,s)),s<o&&Dt(t=t.slice(s)),s<o&&vt(t))}d.push(n)}return bt(d)}return gt.prototype=i.filters=i.pseudos,i.setFilters=new gt,r=ot.tokenize=function(t,e){var n,s,o,r,a,l,c,h=x[t+" "];if(h)return e?0:h.slice(0);for(a=t,l=[],c=i.preFilter;a;){for(r in n&&!(s=U.exec(a))||(s&&(a=a.slice(s[0].length)||a),l.push(o=[])),n=!1,(s=F.exec(a))&&(n=s.shift(),o.push({value:n,type:s[0].replace(W," ")}),a=a.slice(n.length)),i.filter)!(s=z[r].exec(a))||c[r]&&!(s=c[r](s))||(n=s.shift(),o.push({value:n,type:r,matches:s}),a=a.slice(n.length));if(!n)break}return e?a.length:a?ot.error(t):x(t,l).slice(0)},a=ot.compile=function(t,e){var n,s,o,a,l,h,u=[],p=[],g=T[t+" "];if(!g){for(e||(e=r(t)),n=e.length;n--;)(g=Dt(e[n]))[_]?u.push(g):p.push(g);(g=T(t,(s=p,a=(o=u).length>0,l=s.length>0,h=function(t,e,n,r,h){var u,p,g,v=0,y="0",b=t&&[],_=[],w=c,k=t||l&&i.find.TAG("*",h),C=D+=null==w?1:Math.random()||.1,x=k.length;for(h&&(c=e===f||e||h);y!==x&&null!=(u=k[y]);y++){if(l&&u){for(p=0,e||u.ownerDocument===f||(d(u),n=!m);g=s[p++];)if(g(u,e||f,n)){r.push(u);break}h&&(D=C)}a&&((u=!g&&u)&&v--,t&&b.push(u))}if(v+=y,a&&y!==v){for(p=0;g=o[p++];)g(b,_,e,n);if(t){if(v>0)for(;y--;)b[y]||_[y]||(_[y]=A.call(r));_=_t(_)}I.apply(r,_),h&&!t&&_.length>0&&v+o.length>1&&ot.uniqueSort(r)}return h&&(D=C,c=w),b},a?at(h):h))).selector=t}return g},l=ot.select=function(t,e,n,s){var o,l,c,h,u,d="function"==typeof t&&t,f=!s&&r(t=d.selector||t);if(n=n||[],1===f.length){if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===e.nodeType&&m&&i.relative[l[1].type]){if(!(e=(i.find.ID(c.matches[0].replace(J,tt),e)||[])[0]))return n;d&&(e=e.parentNode),t=t.slice(l.shift().value.length)}for(o=z.needsContext.test(t)?0:l.length;o--&&(c=l[o],!i.relative[h=c.type]);)if((u=i.find[h])&&(s=u(c.matches[0].replace(J,tt),X.test(l[0].type)&&mt(e.parentNode)||e))){if(l.splice(o,1),!(t=s.length&&vt(l)))return I.apply(n,s),n;break}}return(d||a(t,f))(s,e,!m,n,!e||X.test(t)&&mt(e.parentNode)||e),n},n.sortStable=_.split("").sort(S).join("")===_,n.detectDuplicates=!!u,d(),n.sortDetached=lt(function(t){return 1&t.compareDocumentPosition(f.createElement("fieldset"))}),lt(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ct("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),n.attributes&&lt(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ct("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),lt(function(t){return null==t.getAttribute("disabled")})||ct(L,function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),ot}(t);w.find=C,w.expr=C.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=C.uniqueSort,w.text=C.getText,w.isXMLDoc=C.isXML,w.contains=C.contains,w.escapeSelector=C.escape;var x=function(t,e,n){for(var i=[],s=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&w(t).is(n))break;i.push(t)}return i},T=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},S=w.expr.match.needsContext;function E(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var M=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(t,e,n){return m(e)?w.grep(t,function(t,i){return!!e.call(t,i,t)!==n}):e.nodeType?w.grep(t,function(t){return t===e!==n}):"string"!=typeof e?w.grep(t,function(t){return l.call(e,t)>-1!==n}):w.filter(e,t,n)}w.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?w.find.matchesSelector(i,t)?[i]:[]:w.find.matches(t,w.grep(e,function(t){return 1===t.nodeType}))},w.fn.extend({find:function(t){var e,n,i=this.length,s=this;if("string"!=typeof t)return this.pushStack(w(t).filter(function(){for(e=0;e<i;e++)if(w.contains(s[e],this))return!0}));for(n=this.pushStack([]),e=0;e<i;e++)w.find(t,s[e],n);return i>1?w.uniqueSort(n):n},filter:function(t){return this.pushStack(A(this,t||[],!1))},not:function(t){return this.pushStack(A(this,t||[],!0))},is:function(t){return!!A(this,"string"==typeof t&&S.test(t)?w(t):t||[],!1).length}});var O,I=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(t,e,n){var s,o;if(!t)return this;if(n=n||O,"string"==typeof t){if(!(s="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:I.exec(t))||!s[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(s[1]){if(e=e instanceof w?e[0]:e,w.merge(this,w.parseHTML(s[1],e&&e.nodeType?e.ownerDocument||e:i,!0)),M.test(s[1])&&w.isPlainObject(e))for(s in e)m(this[s])?this[s](e[s]):this.attr(s,e[s]);return this}return(o=i.getElementById(s[2]))&&(this[0]=o,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):m(t)?void 0!==n.ready?n.ready(t):t(w):w.makeArray(t,this)}).prototype=w.fn,O=w(i);var N=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function L(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}w.fn.extend({has:function(t){var e=w(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(w.contains(this,e[t]))return!0})},closest:function(t,e){var n,i=0,s=this.length,o=[],r="string"!=typeof t&&w(t);if(!S.test(t))for(;i<s;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(r?r.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?l.call(w(t),this[0]):l.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),w.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return x(t,"parentNode")},parentsUntil:function(t,e,n){return x(t,"parentNode",n)},next:function(t){return L(t,"nextSibling")},prev:function(t){return L(t,"previousSibling")},nextAll:function(t){return x(t,"nextSibling")},prevAll:function(t){return x(t,"previousSibling")},nextUntil:function(t,e,n){return x(t,"nextSibling",n)},prevUntil:function(t,e,n){return x(t,"previousSibling",n)},siblings:function(t){return T((t.parentNode||{}).firstChild,t)},children:function(t){return T(t.firstChild)},contents:function(t){return E(t,"iframe")?t.contentDocument:(E(t,"template")&&(t=t.content||t),w.merge([],t.childNodes))}},function(t,e){w.fn[t]=function(n,i){var s=w.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(s=w.filter(i,s)),this.length>1&&(P[t]||w.uniqueSort(s),N.test(t)&&s.reverse()),this.pushStack(s)}});var j=/[^\x20\t\r\n\f]+/g;function Y(t){return t}function H(t){throw t}function $(t,e,n,i){var s;try{t&&m(s=t.promise)?s.call(t).done(e).fail(n):t&&m(s=t.then)?s.call(t,e,n):e.apply(void 0,[t].slice(i))}catch(t){n.apply(void 0,[t])}}w.Callbacks=function(t){var e,n;t="string"==typeof t?(e=t,n={},w.each(e.match(j)||[],function(t,e){n[e]=!0}),n):w.extend({},t);var i,s,o,r,a=[],l=[],c=-1,h=function(){for(r=r||t.once,o=i=!0;l.length;c=-1)for(s=l.shift();++c<a.length;)!1===a[c].apply(s[0],s[1])&&t.stopOnFalse&&(c=a.length,s=!1);t.memory||(s=!1),i=!1,r&&(a=s?[]:"")},u={add:function(){return a&&(s&&!i&&(c=a.length-1,l.push(s)),function e(n){w.each(n,function(n,i){m(i)?t.unique&&u.has(i)||a.push(i):i&&i.length&&"string"!==b(i)&&e(i)})}(arguments),s&&!i&&h()),this},remove:function(){return w.each(arguments,function(t,e){for(var n;(n=w.inArray(e,a,n))>-1;)a.splice(n,1),n<=c&&c--}),this},has:function(t){return t?w.inArray(t,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return r=l=[],a=s="",this},disabled:function(){return!a},lock:function(){return r=l=[],s||i||(a=s=""),this},locked:function(){return!!r},fireWith:function(t,e){return r||(e=[t,(e=e||[]).slice?e.slice():e],l.push(e),i||h()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!o}};return u},w.extend({Deferred:function(e){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],i="pending",s={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},pipe:function(){var t=arguments;return w.Deferred(function(e){w.each(n,function(n,i){var s=m(t[i[4]])&&t[i[4]];o[i[1]](function(){var t=s&&s.apply(this,arguments);t&&m(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[i[0]+"With"](this,s?[t]:arguments)})}),t=null}).promise()},then:function(e,i,s){var o=0;function r(e,n,i,s){return function(){var a=this,l=arguments,c=function(){var t,c;if(!(e<o)){if((t=i.apply(a,l))===n.promise())throw new TypeError("Thenable self-resolution");c=t&&("object"==typeof t||"function"==typeof t)&&t.then,m(c)?s?c.call(t,r(o,n,Y,s),r(o,n,H,s)):(o++,c.call(t,r(o,n,Y,s),r(o,n,H,s),r(o,n,Y,n.notifyWith))):(i!==Y&&(a=void 0,l=[t]),(s||n.resolveWith)(a,l))}},h=s?c:function(){try{c()}catch(t){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(t,h.stackTrace),e+1>=o&&(i!==H&&(a=void 0,l=[t]),n.rejectWith(a,l))}};e?h():(w.Deferred.getStackHook&&(h.stackTrace=w.Deferred.getStackHook()),t.setTimeout(h))}}return w.Deferred(function(t){n[0][3].add(r(0,t,m(s)?s:Y,t.notifyWith)),n[1][3].add(r(0,t,m(e)?e:Y)),n[2][3].add(r(0,t,m(i)?i:H))}).promise()},promise:function(t){return null!=t?w.extend(t,s):s}},o={};return w.each(n,function(t,e){var r=e[2],a=e[5];s[e[1]]=r.add,a&&r.add(function(){i=a},n[3-t][2].disable,n[3-t][3].disable,n[0][2].lock,n[0][3].lock),r.add(e[3].fire),o[e[0]]=function(){return o[e[0]+"With"](this===o?void 0:this,arguments),this},o[e[0]+"With"]=r.fireWith}),s.promise(o),e&&e.call(o,o),o},when:function(t){var e=arguments.length,n=e,i=Array(n),s=o.call(arguments),r=w.Deferred(),a=function(t){return function(n){i[t]=this,s[t]=arguments.length>1?o.call(arguments):n,--e||r.resolveWith(i,s)}};if(e<=1&&($(t,r.done(a(n)).resolve,r.reject,!e),"pending"===r.state()||m(s[n]&&s[n].then)))return r.then();for(;n--;)$(s[n],a(n),r.reject);return r.promise()}});var R=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(e,n){t.console&&t.console.warn&&e&&R.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,n)},w.readyException=function(e){t.setTimeout(function(){throw e})};var W=w.Deferred();function U(){i.removeEventListener("DOMContentLoaded",U),t.removeEventListener("load",U),w.ready()}w.fn.ready=function(t){return W.then(t).catch(function(t){w.readyException(t)}),this},w.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==t&&--w.readyWait>0||W.resolveWith(i,[w]))}}),w.ready.then=W.then,"complete"===i.readyState||"loading"!==i.readyState&&!i.documentElement.doScroll?t.setTimeout(w.ready):(i.addEventListener("DOMContentLoaded",U),t.addEventListener("load",U));var F=function(t,e,n,i,s,o,r){var a=0,l=t.length,c=null==n;if("object"===b(n))for(a in s=!0,n)F(t,e,a,n[a],!0,o,r);else if(void 0!==i&&(s=!0,m(i)||(r=!0),c&&(r?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(w(t),n)})),e))for(;a<l;a++)e(t[a],n,r?i:i.call(t[a],a,e(t[a],n)));return s?t:c?e.call(t):l?e(t[0],n):o},q=/^-ms-/,V=/-([a-z])/g;function B(t,e){return e.toUpperCase()}function z(t){return t.replace(q,"ms-").replace(V,B)}var G=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function K(){this.expando=w.expando+K.uid++}K.uid=1,K.prototype={cache:function(t){var e=t[this.expando];return e||(e={},G(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,s=this.cache(t);if("string"==typeof e)s[z(e)]=n;else for(i in e)s[z(i)]=e[i];return s},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][z(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(e=Array.isArray(e)?e.map(z):(e=z(e))in i?[e]:e.match(j)||[]).length;for(;n--;)delete i[e[n]]}(void 0===e||w.isEmptyObject(i))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!w.isEmptyObject(e)}};var Q=new K,Z=new K,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function tt(t,e,n){var i,s;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(J,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n="true"===(s=n)||"false"!==s&&("null"===s?null:s===+s+""?+s:X.test(s)?JSON.parse(s):s)}catch(t){}Z.set(t,e,n)}else n=void 0;return n}w.extend({hasData:function(t){return Z.hasData(t)||Q.hasData(t)},data:function(t,e,n){return Z.access(t,e,n)},removeData:function(t,e){Z.remove(t,e)},_data:function(t,e,n){return Q.access(t,e,n)},_removeData:function(t,e){Q.remove(t,e)}}),w.fn.extend({data:function(t,e){var n,i,s,o=this[0],r=o&&o.attributes;if(void 0===t){if(this.length&&(s=Z.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(n=r.length;n--;)r[n]&&0===(i=r[n].name).indexOf("data-")&&(i=z(i.slice(5)),tt(o,i,s[i]));Q.set(o,"hasDataAttrs",!0)}return s}return"object"==typeof t?this.each(function(){Z.set(this,t)}):F(this,function(e){var n;if(o&&void 0===e)return void 0!==(n=Z.get(o,t))?n:void 0!==(n=tt(o,t))?n:void 0;this.each(function(){Z.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Z.remove(this,t)})}}),w.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=Q.get(t,e),n&&(!i||Array.isArray(n)?i=Q.access(t,e,w.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=w.queue(t,e),i=n.length,s=n.shift(),o=w._queueHooks(t,e);"inprogress"===s&&(s=n.shift(),i--),s&&("fx"===e&&n.unshift("inprogress"),delete o.stop,s.call(t,function(){w.dequeue(t,e)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return Q.get(t,n)||Q.access(t,n,{empty:w.Callbacks("once memory").add(function(){Q.remove(t,[e+"queue",n])})})}}),w.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?w.queue(this[0],t):void 0===e?this:this.each(function(){var n=w.queue(this,t,e);w._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&w.dequeue(this,t)})},dequeue:function(t){return this.each(function(){w.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,s=w.Deferred(),o=this,r=this.length,a=function(){--i||s.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)(n=Q.get(o[r],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),s.promise(e)}});var et=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,nt=new RegExp("^(?:([+-])=|)("+et+")([a-z%]*)$","i"),it=["Top","Right","Bottom","Left"],st=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&w.contains(t.ownerDocument,t)&&"none"===w.css(t,"display")},ot=function(t,e,n,i){var s,o,r={};for(o in e)r[o]=t.style[o],t.style[o]=e[o];for(o in s=n.apply(t,i||[]),e)t.style[o]=r[o];return s};function rt(t,e,n,i){var s,o,r=20,a=i?function(){return i.cur()}:function(){return w.css(t,e,"")},l=a(),c=n&&n[3]||(w.cssNumber[e]?"":"px"),h=(w.cssNumber[e]||"px"!==c&&+l)&&nt.exec(w.css(t,e));if(h&&h[3]!==c){for(l/=2,c=c||h[3],h=+l||1;r--;)w.style(t,e,h+c),(1-o)*(1-(o=a()/l||.5))<=0&&(r=0),h/=o;h*=2,w.style(t,e,h+c),n=n||[]}return n&&(h=+h||+l||0,s=n[1]?h+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=h,i.end=s)),s}var at={};function lt(t,e){for(var n,i,s,o,r,a,l,c=[],h=0,u=t.length;h<u;h++)(i=t[h]).style&&(n=i.style.display,e?("none"===n&&(c[h]=Q.get(i,"display")||null,c[h]||(i.style.display="")),""===i.style.display&&st(i)&&(c[h]=(o=void 0,r=void 0,void 0,l=void 0,r=(s=i).ownerDocument,a=s.nodeName,(l=at[a])||(o=r.body.appendChild(r.createElement(a)),l=w.css(o,"display"),o.parentNode.removeChild(o),"none"===l&&(l="block"),at[a]=l,l)))):"none"!==n&&(c[h]="none",Q.set(i,"display",n)));for(h=0;h<u;h++)null!=c[h]&&(t[h].style.display=c[h]);return t}w.fn.extend({show:function(){return lt(this,!0)},hide:function(){return lt(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){st(this)?w(this).show():w(this).hide()})}});var ct=/^(?:checkbox|radio)$/i,ht=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ut=/^$|^module$|\/(?:java|ecma)script/i,dt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ft(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&E(t,e)?w.merge([t],n):n}function pt(t,e){for(var n=0,i=t.length;n<i;n++)Q.set(t[n],"globalEval",!e||Q.get(e[n],"globalEval"))}dt.optgroup=dt.option,dt.tbody=dt.tfoot=dt.colgroup=dt.caption=dt.thead,dt.th=dt.td;var mt,gt,vt=/<|&#?\w+;/;function yt(t,e,n,i,s){for(var o,r,a,l,c,h,u=e.createDocumentFragment(),d=[],f=0,p=t.length;f<p;f++)if((o=t[f])||0===o)if("object"===b(o))w.merge(d,o.nodeType?[o]:o);else if(vt.test(o)){for(r=r||u.appendChild(e.createElement("div")),a=(ht.exec(o)||["",""])[1].toLowerCase(),l=dt[a]||dt._default,r.innerHTML=l[1]+w.htmlPrefilter(o)+l[2],h=l[0];h--;)r=r.lastChild;w.merge(d,r.childNodes),(r=u.firstChild).textContent=""}else d.push(e.createTextNode(o));for(u.textContent="",f=0;o=d[f++];)if(i&&w.inArray(o,i)>-1)s&&s.push(o);else if(c=w.contains(o.ownerDocument,o),r=ft(u.appendChild(o),"script"),c&&pt(r),n)for(h=0;o=r[h++];)ut.test(o.type||"")&&n.push(o);return u}mt=i.createDocumentFragment().appendChild(i.createElement("div")),(gt=i.createElement("input")).setAttribute("type","radio"),gt.setAttribute("checked","checked"),gt.setAttribute("name","t"),mt.appendChild(gt),p.checkClone=mt.cloneNode(!0).cloneNode(!0).lastChild.checked,mt.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!mt.cloneNode(!0).lastChild.defaultValue;var bt=i.documentElement,_t=/^key/,wt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Dt=/^([^.]*)(?:\.(.+)|)/;function kt(){return!0}function Ct(){return!1}function xt(){try{return i.activeElement}catch(t){}}function Tt(t,e,n,i,s,o){var r,a;if("object"==typeof e){for(a in"string"!=typeof n&&(i=i||n,n=void 0),e)Tt(t,a,n,i,e[a],o);return t}if(null==i&&null==s?(s=n,i=n=void 0):null==s&&("string"==typeof n?(s=i,i=void 0):(s=i,i=n,n=void 0)),!1===s)s=Ct;else if(!s)return t;return 1===o&&(r=s,(s=function(t){return w().off(t),r.apply(this,arguments)}).guid=r.guid||(r.guid=w.guid++)),t.each(function(){w.event.add(this,e,s,i,n)})}w.event={global:{},add:function(t,e,n,i,s){var o,r,a,l,c,h,u,d,f,p,m,g=Q.get(t);if(g)for(n.handler&&(n=(o=n).handler,s=o.selector),s&&w.find.matchesSelector(bt,s),n.guid||(n.guid=w.guid++),(l=g.events)||(l=g.events={}),(r=g.handle)||(r=g.handle=function(e){return void 0!==w&&w.event.triggered!==e.type?w.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(j)||[""]).length;c--;)f=m=(a=Dt.exec(e[c])||[])[1],p=(a[2]||"").split(".").sort(),f&&(u=w.event.special[f]||{},f=(s?u.delegateType:u.bindType)||f,u=w.event.special[f]||{},h=w.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:s,needsContext:s&&w.expr.match.needsContext.test(s),namespace:p.join(".")},o),(d=l[f])||((d=l[f]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(t,i,p,r)||t.addEventListener&&t.addEventListener(f,r)),u.add&&(u.add.call(t,h),h.handler.guid||(h.handler.guid=n.guid)),s?d.splice(d.delegateCount++,0,h):d.push(h),w.event.global[f]=!0)},remove:function(t,e,n,i,s){var o,r,a,l,c,h,u,d,f,p,m,g=Q.hasData(t)&&Q.get(t);if(g&&(l=g.events)){for(c=(e=(e||"").match(j)||[""]).length;c--;)if(f=m=(a=Dt.exec(e[c])||[])[1],p=(a[2]||"").split(".").sort(),f){for(u=w.event.special[f]||{},d=l[f=(i?u.delegateType:u.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),r=o=d.length;o--;)h=d[o],!s&&m!==h.origType||n&&n.guid!==h.guid||a&&!a.test(h.namespace)||i&&i!==h.selector&&("**"!==i||!h.selector)||(d.splice(o,1),h.selector&&d.delegateCount--,u.remove&&u.remove.call(t,h));r&&!d.length&&(u.teardown&&!1!==u.teardown.call(t,p,g.handle)||w.removeEvent(t,f,g.handle),delete l[f])}else for(f in l)w.event.remove(t,f+e[c],n,i,!0);w.isEmptyObject(l)&&Q.remove(t,"handle events")}},dispatch:function(t){var e,n,i,s,o,r,a=w.event.fix(t),l=new Array(arguments.length),c=(Q.get(this,"events")||{})[a.type]||[],h=w.event.special[a.type]||{};for(l[0]=a,e=1;e<arguments.length;e++)l[e]=arguments[e];if(a.delegateTarget=this,!h.preDispatch||!1!==h.preDispatch.call(this,a)){for(r=w.event.handlers.call(this,a,c),e=0;(s=r[e++])&&!a.isPropagationStopped();)for(a.currentTarget=s.elem,n=0;(o=s.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(i=((w.event.special[o.origType]||{}).handle||o.handler).apply(s.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return h.postDispatch&&h.postDispatch.call(this,a),a.result}},handlers:function(t,e){var n,i,s,o,r,a=[],l=e.delegateCount,c=t.target;if(l&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(o=[],r={},n=0;n<l;n++)void 0===r[s=(i=e[n]).selector+" "]&&(r[s]=i.needsContext?w(s,this).index(c)>-1:w.find(s,this,null,[c]).length),r[s]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}return c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a},addProp:function(t,e){Object.defineProperty(w.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[w.expando]?t:new w.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xt()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xt()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&E(this,"input"))return this.click(),!1},_default:function(t){return E(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},w.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},w.Event=function(t,e){if(!(this instanceof w.Event))return new w.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?kt:Ct,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&w.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:Ct,isPropagationStopped:Ct,isImmediatePropagationStopped:Ct,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=kt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=kt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=kt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&_t.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&wt.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){w.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=t.relatedTarget,s=t.handleObj;return i&&(i===this||w.contains(this,i))||(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}}),w.fn.extend({on:function(t,e,n,i){return Tt(this,t,e,n,i)},one:function(t,e,n,i){return Tt(this,t,e,n,i,1)},off:function(t,e,n){var i,s;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,w(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(s in t)this.off(s,e,t[s]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=Ct),this.each(function(){w.event.remove(this,t,n,e)})}});var St=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Et=/<script|<style|<link/i,Mt=/checked\s*(?:[^=]|=\s*.checked.)/i,At=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ot(t,e){return E(t,"table")&&E(11!==e.nodeType?e:e.firstChild,"tr")&&w(t).children("tbody")[0]||t}function It(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Nt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Pt(t,e){var n,i,s,o,r,a,l,c;if(1===e.nodeType){if(Q.hasData(t)&&(o=Q.access(t),r=Q.set(e,o),c=o.events))for(s in delete r.handle,r.events={},c)for(n=0,i=c[s].length;n<i;n++)w.event.add(e,s,c[s][n]);Z.hasData(t)&&(a=Z.access(t),l=w.extend({},a),Z.set(e,l))}}function Lt(t,e,n,i){e=r.apply([],e);var s,o,a,l,c,h,u=0,d=t.length,f=d-1,g=e[0],v=m(g);if(v||d>1&&"string"==typeof g&&!p.checkClone&&Mt.test(g))return t.each(function(s){var o=t.eq(s);v&&(e[0]=g.call(this,s,o.html())),Lt(o,e,n,i)});if(d&&(o=(s=yt(e,t[0].ownerDocument,!1,t,i)).firstChild,1===s.childNodes.length&&(s=o),o||i)){for(l=(a=w.map(ft(s,"script"),It)).length;u<d;u++)c=s,u!==f&&(c=w.clone(c,!0,!0),l&&w.merge(a,ft(c,"script"))),n.call(t[u],c,u);if(l)for(h=a[a.length-1].ownerDocument,w.map(a,Nt),u=0;u<l;u++)c=a[u],ut.test(c.type||"")&&!Q.access(c,"globalEval")&&w.contains(h,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(c.src):y(c.textContent.replace(At,""),h,c))}return t}function jt(t,e,n){for(var i,s=e?w.filter(e,t):t,o=0;null!=(i=s[o]);o++)n||1!==i.nodeType||w.cleanData(ft(i)),i.parentNode&&(n&&w.contains(i.ownerDocument,i)&&pt(ft(i,"script")),i.parentNode.removeChild(i));return t}w.extend({htmlPrefilter:function(t){return t.replace(St,"<$1></$2>")},clone:function(t,e,n){var i,s,o,r,a,l,c,h=t.cloneNode(!0),u=w.contains(t.ownerDocument,t);if(!(p.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||w.isXMLDoc(t)))for(r=ft(h),i=0,s=(o=ft(t)).length;i<s;i++)a=o[i],l=r[i],void 0,"input"===(c=l.nodeName.toLowerCase())&&ct.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(e)if(n)for(o=o||ft(t),r=r||ft(h),i=0,s=o.length;i<s;i++)Pt(o[i],r[i]);else Pt(t,h);return(r=ft(h,"script")).length>0&&pt(r,!u&&ft(t,"script")),h},cleanData:function(t){for(var e,n,i,s=w.event.special,o=0;void 0!==(n=t[o]);o++)if(G(n)){if(e=n[Q.expando]){if(e.events)for(i in e.events)s[i]?w.event.remove(n,i):w.removeEvent(n,i,e.handle);n[Q.expando]=void 0}n[Z.expando]&&(n[Z.expando]=void 0)}}}),w.fn.extend({detach:function(t){return jt(this,t,!0)},remove:function(t){return jt(this,t)},text:function(t){return F(this,function(t){return void 0===t?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Lt(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ot(this,t).appendChild(t)})},prepend:function(){return Lt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Ot(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Lt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Lt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(w.cleanData(ft(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return w.clone(this,t,e)})},html:function(t){return F(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Et.test(t)&&!dt[(ht.exec(t)||["",""])[1].toLowerCase()]){t=w.htmlPrefilter(t);try{for(;n<i;n++)1===(e=this[n]||{}).nodeType&&(w.cleanData(ft(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Lt(this,arguments,function(e){var n=this.parentNode;w.inArray(this,t)<0&&(w.cleanData(ft(this)),n&&n.replaceChild(e,this))},t)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){w.fn[t]=function(t){for(var n,i=[],s=w(t),o=s.length-1,r=0;r<=o;r++)n=r===o?this:this.clone(!0),w(s[r])[e](n),a.apply(i,n.get());return this.pushStack(i)}});var Yt=new RegExp("^("+et+")(?!px)[a-z%]+$","i"),Ht=function(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=t),n.getComputedStyle(e)},$t=new RegExp(it.join("|"),"i");function Rt(t,e,n){var i,s,o,r,a=t.style;return(n=n||Ht(t))&&(""!==(r=n.getPropertyValue(e)||n[e])||w.contains(t.ownerDocument,t)||(r=w.style(t,e)),!p.pixelBoxStyles()&&Yt.test(r)&&$t.test(e)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=n.width,a.width=i,a.minWidth=s,a.maxWidth=o)),void 0!==r?r+"":r}function Wt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function e(){if(h){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",h.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",bt.appendChild(c).appendChild(h);var e=t.getComputedStyle(h);s="1%"!==e.top,l=12===n(e.marginLeft),h.style.right="60%",a=36===n(e.right),o=36===n(e.width),h.style.position="absolute",r=36===h.offsetWidth||"absolute",bt.removeChild(c),h=null}}function n(t){return Math.round(parseFloat(t))}var s,o,r,a,l,c=i.createElement("div"),h=i.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle="content-box"===h.style.backgroundClip,w.extend(p,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),s},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),r}}))}();var Ut=/^(none|table(?!-c[ea]).+)/,Ft=/^--/,qt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:"0",fontWeight:"400"},Bt=["Webkit","Moz","ms"],zt=i.createElement("div").style;function Gt(t){var e=w.cssProps[t];return e||(e=w.cssProps[t]=function(t){if(t in zt)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=Bt.length;n--;)if((t=Bt[n]+e)in zt)return t}(t)||t),e}function Kt(t,e,n){var i=nt.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function Qt(t,e,n,i,s,o){var r="width"===e?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;r<4;r+=2)"margin"===n&&(l+=w.css(t,n+it[r],!0,s)),i?("content"===n&&(l-=w.css(t,"padding"+it[r],!0,s)),"margin"!==n&&(l-=w.css(t,"border"+it[r]+"Width",!0,s))):(l+=w.css(t,"padding"+it[r],!0,s),"padding"!==n?l+=w.css(t,"border"+it[r]+"Width",!0,s):a+=w.css(t,"border"+it[r]+"Width",!0,s));return!i&&o>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-l-a-.5))),l}function Zt(t,e,n){var i=Ht(t),s=Rt(t,e,i),o="border-box"===w.css(t,"boxSizing",!1,i),r=o;if(Yt.test(s)){if(!n)return s;s="auto"}return r=r&&(p.boxSizingReliable()||s===t.style[e]),("auto"===s||!parseFloat(s)&&"inline"===w.css(t,"display",!1,i))&&(s=t["offset"+e[0].toUpperCase()+e.slice(1)],r=!0),(s=parseFloat(s)||0)+Qt(t,e,n||(o?"border":"content"),r,i,s)+"px"}function Xt(t,e,n,i,s){return new Xt.prototype.init(t,e,n,i,s)}w.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Rt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var s,o,r,a=z(e),l=Ft.test(e),c=t.style;if(l||(e=Gt(a)),r=w.cssHooks[e]||w.cssHooks[a],void 0===n)return r&&"get"in r&&void 0!==(s=r.get(t,!1,i))?s:c[e];"string"===(o=typeof n)&&(s=nt.exec(n))&&s[1]&&(n=rt(t,e,s),o="number"),null!=n&&n==n&&("number"===o&&(n+=s&&s[3]||(w.cssNumber[a]?"":"px")),p.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),r&&"set"in r&&void 0===(n=r.set(t,n,i))||(l?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,i){var s,o,r,a=z(e);return Ft.test(e)||(e=Gt(a)),(r=w.cssHooks[e]||w.cssHooks[a])&&"get"in r&&(s=r.get(t,!0,n)),void 0===s&&(s=Rt(t,e,i)),"normal"===s&&e in Vt&&(s=Vt[e]),""===n||n?(o=parseFloat(s),!0===n||isFinite(o)?o||0:s):s}}),w.each(["height","width"],function(t,e){w.cssHooks[e]={get:function(t,n,i){if(n)return!Ut.test(w.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?Zt(t,e,i):ot(t,qt,function(){return Zt(t,e,i)})},set:function(t,n,i){var s,o=Ht(t),r="border-box"===w.css(t,"boxSizing",!1,o),a=i&&Qt(t,e,i,r,o);return r&&p.scrollboxSize()===o.position&&(a-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(o[e])-Qt(t,e,"border",!1,o)-.5)),a&&(s=nt.exec(n))&&"px"!==(s[3]||"px")&&(t.style[e]=n,n=w.css(t,e)),Kt(0,n,a)}}}),w.cssHooks.marginLeft=Wt(p.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Rt(t,"marginLeft"))||t.getBoundingClientRect().left-ot(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(t,e){w.cssHooks[t+e]={expand:function(n){for(var i=0,s={},o="string"==typeof n?n.split(" "):[n];i<4;i++)s[t+it[i]+e]=o[i]||o[i-2]||o[0];return s}},"margin"!==t&&(w.cssHooks[t+e].set=Kt)}),w.fn.extend({css:function(t,e){return F(this,function(t,e,n){var i,s,o={},r=0;if(Array.isArray(e)){for(i=Ht(t),s=e.length;r<s;r++)o[e[r]]=w.css(t,e[r],!1,i);return o}return void 0!==n?w.style(t,e,n):w.css(t,e)},t,e,arguments.length>1)}}),w.Tween=Xt,Xt.prototype={constructor:Xt,init:function(t,e,n,i,s,o){this.elem=t,this.prop=n,this.easing=s||w.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var t=Xt.propHooks[this.prop];return t&&t.get?t.get(this):Xt.propHooks._default.get(this)},run:function(t){var e,n=Xt.propHooks[this.prop];return this.options.duration?this.pos=e=w.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Xt.propHooks._default.set(this),this}},Xt.prototype.init.prototype=Xt.prototype,Xt.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=w.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){w.fx.step[t.prop]?w.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[w.cssProps[t.prop]]&&!w.cssHooks[t.prop]?t.elem[t.prop]=t.now:w.style(t.elem,t.prop,t.now+t.unit)}}},Xt.propHooks.scrollTop=Xt.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},w.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},w.fx=Xt.prototype.init,w.fx.step={};var Jt,te,ee,ne,ie=/^(?:toggle|show|hide)$/,se=/queueHooks$/;function oe(){te&&(!1===i.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(oe):t.setTimeout(oe,w.fx.interval),w.fx.tick())}function re(){return t.setTimeout(function(){Jt=void 0}),Jt=Date.now()}function ae(t,e){var n,i=0,s={height:t};for(e=e?1:0;i<4;i+=2-e)s["margin"+(n=it[i])]=s["padding"+n]=t;return e&&(s.opacity=s.width=t),s}function le(t,e,n){for(var i,s=(ce.tweeners[e]||[]).concat(ce.tweeners["*"]),o=0,r=s.length;o<r;o++)if(i=s[o].call(n,e,t))return i}function ce(t,e,n){var i,s,o=0,r=ce.prefilters.length,a=w.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=Jt||re(),n=Math.max(0,c.startTime+c.duration-e),i=1-(n/c.duration||0),o=0,r=c.tweens.length;o<r;o++)c.tweens[o].run(i);return a.notifyWith(t,[c,i,n]),i<1&&r?n:(r||a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:w.extend({},e),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:e,originalOptions:n,startTime:Jt||re(),duration:n.duration,tweens:[],createTween:function(e,n){var i=w.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(s)return this;for(s=!0;n<i;n++)c.tweens[n].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),h=c.props;for(!function(t,e){var n,i,s,o,r;for(n in t)if(s=e[i=z(n)],o=t[n],Array.isArray(o)&&(s=o[1],o=t[n]=o[0]),n!==i&&(t[i]=o,delete t[n]),(r=w.cssHooks[i])&&"expand"in r)for(n in o=r.expand(o),delete t[i],o)n in t||(t[n]=o[n],e[n]=s);else e[i]=s}(h,c.opts.specialEasing);o<r;o++)if(i=ce.prefilters[o].call(c,t,h,c.opts))return m(i.stop)&&(w._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return w.map(h,le,c),m(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),w.fx.timer(w.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}w.Animation=w.extend(ce,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return rt(n.elem,t,nt.exec(e),n),n}]},tweener:function(t,e){m(t)?(e=t,t=["*"]):t=t.match(j);for(var n,i=0,s=t.length;i<s;i++)n=t[i],ce.tweeners[n]=ce.tweeners[n]||[],ce.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,s,o,r,a,l,c,h,u="width"in e||"height"in e,d=this,f={},p=t.style,m=t.nodeType&&st(t),g=Q.get(t,"fxshow");for(i in n.queue||(null==(r=w._queueHooks(t,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,d.always(function(){d.always(function(){r.unqueued--,w.queue(t,"fx").length||r.empty.fire()})})),e)if(s=e[i],ie.test(s)){if(delete e[i],o=o||"toggle"===s,s===(m?"hide":"show")){if("show"!==s||!g||void 0===g[i])continue;m=!0}f[i]=g&&g[i]||w.style(t,i)}if((l=!w.isEmptyObject(e))||!w.isEmptyObject(f))for(i in u&&1===t.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=g&&g.display)&&(c=Q.get(t,"display")),"none"===(h=w.css(t,"display"))&&(c?h=c:(lt([t],!0),c=t.style.display||c,h=w.css(t,"display"),lt([t]))),("inline"===h||"inline-block"===h&&null!=c)&&"none"===w.css(t,"float")&&(l||(d.done(function(){p.display=c}),null==c&&(h=p.display,c="none"===h?"":h)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),l=!1,f)l||(g?"hidden"in g&&(m=g.hidden):g=Q.access(t,"fxshow",{display:c}),o&&(g.hidden=!m),m&&lt([t],!0),d.done(function(){for(i in m||lt([t]),Q.remove(t,"fxshow"),f)w.style(t,i,f[i])})),l=le(m?g[i]:0,i,d),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?ce.prefilters.unshift(t):ce.prefilters.push(t)}}),w.speed=function(t,e,n){var i=t&&"object"==typeof t?w.extend({},t):{complete:n||!n&&e||m(t)&&t,duration:t,easing:n&&e||e&&!m(e)&&e};return w.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in w.fx.speeds?i.duration=w.fx.speeds[i.duration]:i.duration=w.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){m(i.old)&&i.old.call(this),i.queue&&w.dequeue(this,i.queue)},i},w.fn.extend({fadeTo:function(t,e,n,i){return this.filter(st).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var s=w.isEmptyObject(t),o=w.speed(e,n,i),r=function(){var e=ce(this,w.extend({},t),o);(s||Q.get(this,"finish"))&&e.stop(!0)};return r.finish=r,s||!1===o.queue?this.each(r):this.queue(o.queue,r)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,s=null!=t&&t+"queueHooks",o=w.timers,r=Q.get(this);if(s)r[s]&&r[s].stop&&i(r[s]);else for(s in r)r[s]&&r[s].stop&&se.test(s)&&i(r[s]);for(s=o.length;s--;)o[s].elem!==this||null!=t&&o[s].queue!==t||(o[s].anim.stop(n),e=!1,o.splice(s,1));!e&&n||w.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=Q.get(this),i=n[t+"queue"],s=n[t+"queueHooks"],o=w.timers,r=i?i.length:0;for(n.finish=!0,w.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<r;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(t,e){var n=w.fn[e];w.fn[e]=function(t,i,s){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(ae(e,!0),t,i,s)}}),w.each({slideDown:ae("show"),slideUp:ae("hide"),slideToggle:ae("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){w.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),w.timers=[],w.fx.tick=function(){var t,e=0,n=w.timers;for(Jt=Date.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||w.fx.stop(),Jt=void 0},w.fx.timer=function(t){w.timers.push(t),w.fx.start()},w.fx.interval=13,w.fx.start=function(){te||(te=!0,oe())},w.fx.stop=function(){te=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(e,n){return e=w.fx&&w.fx.speeds[e]||e,n=n||"fx",this.queue(n,function(n,i){var s=t.setTimeout(n,e);i.stop=function(){t.clearTimeout(s)}})},ee=i.createElement("input"),ne=i.createElement("select").appendChild(i.createElement("option")),ee.type="checkbox",p.checkOn=""!==ee.value,p.optSelected=ne.selected,(ee=i.createElement("input")).value="t",ee.type="radio",p.radioValue="t"===ee.value;var he,ue=w.expr.attrHandle;w.fn.extend({attr:function(t,e){return F(this,w.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){w.removeAttr(this,t)})}}),w.extend({attr:function(t,e,n){var i,s,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?w.prop(t,e,n):(1===o&&w.isXMLDoc(t)||(s=w.attrHooks[e.toLowerCase()]||(w.expr.match.bool.test(e)?he:void 0)),void 0!==n?null===n?void w.removeAttr(t,e):s&&"set"in s&&void 0!==(i=s.set(t,n,e))?i:(t.setAttribute(e,n+""),n):s&&"get"in s&&null!==(i=s.get(t,e))?i:null==(i=w.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!p.radioValue&&"radio"===e&&E(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,s=e&&e.match(j);if(s&&1===t.nodeType)for(;n=s[i++];)t.removeAttribute(n)}}),he={set:function(t,e,n){return!1===e?w.removeAttr(t,n):t.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(t,e){var n=ue[e]||w.find.attr;ue[e]=function(t,e,i){var s,o,r=e.toLowerCase();return i||(o=ue[r],ue[r]=s,s=null!=n(t,e,i)?r:null,ue[r]=o),s}});var de=/^(?:input|select|textarea|button)$/i,fe=/^(?:a|area)$/i;function pe(t){return(t.match(j)||[]).join(" ")}function me(t){return t.getAttribute&&t.getAttribute("class")||""}function ge(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(j)||[]}w.fn.extend({prop:function(t,e){return F(this,w.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[w.propFix[t]||t]})}}),w.extend({prop:function(t,e,n){var i,s,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(t)||(e=w.propFix[e]||e,s=w.propHooks[e]),void 0!==n?s&&"set"in s&&void 0!==(i=s.set(t,n,e))?i:t[e]=n:s&&"get"in s&&null!==(i=s.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=w.find.attr(t,"tabindex");return e?parseInt(e,10):de.test(t.nodeName)||fe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),p.optSelected||(w.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this}),w.fn.extend({addClass:function(t){var e,n,i,s,o,r,a,l=0;if(m(t))return this.each(function(e){w(this).addClass(t.call(this,e,me(this)))});if((e=ge(t)).length)for(;n=this[l++];)if(s=me(n),i=1===n.nodeType&&" "+pe(s)+" "){for(r=0;o=e[r++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");s!==(a=pe(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,s,o,r,a,l=0;if(m(t))return this.each(function(e){w(this).removeClass(t.call(this,e,me(this)))});if(!arguments.length)return this.attr("class","");if((e=ge(t)).length)for(;n=this[l++];)if(s=me(n),i=1===n.nodeType&&" "+pe(s)+" "){for(r=0;o=e[r++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");s!==(a=pe(i))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t,i="string"===n||Array.isArray(t);return"boolean"==typeof e&&i?e?this.addClass(t):this.removeClass(t):m(t)?this.each(function(n){w(this).toggleClass(t.call(this,n,me(this),e),e)}):this.each(function(){var e,s,o,r;if(i)for(s=0,o=w(this),r=ge(t);e=r[s++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else void 0!==t&&"boolean"!==n||((e=me(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Q.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+pe(me(n))+" ").indexOf(e)>-1)return!0;return!1}});var ve=/\r/g;w.fn.extend({val:function(t){var e,n,i,s=this[0];return arguments.length?(i=m(t),this.each(function(n){var s;1===this.nodeType&&(null==(s=i?t.call(this,n,w(this).val()):t)?s="":"number"==typeof s?s+="":Array.isArray(s)&&(s=w.map(s,function(t){return null==t?"":t+""})),(e=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))})):s?(e=w.valHooks[s.type]||w.valHooks[s.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(s,"value"))?n:"string"==typeof(n=s.value)?n.replace(ve,""):null==n?"":n:void 0}}),w.extend({valHooks:{option:{get:function(t){var e=w.find.attr(t,"value");return null!=e?e:pe(w.text(t))}},select:{get:function(t){var e,n,i,s=t.options,o=t.selectedIndex,r="select-one"===t.type,a=r?null:[],l=r?o+1:s.length;for(i=o<0?l:r?o:0;i<l;i++)if(((n=s[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!E(n.parentNode,"optgroup"))){if(e=w(n).val(),r)return e;a.push(e)}return a},set:function(t,e){for(var n,i,s=t.options,o=w.makeArray(e),r=s.length;r--;)((i=s[r]).selected=w.inArray(w.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=w.inArray(w(t).val(),e)>-1}},p.checkOn||(w.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),p.focusin="onfocusin"in t;var ye=/^(?:focusinfocus|focusoutblur)$/,be=function(t){t.stopPropagation()};w.extend(w.event,{trigger:function(e,n,s,o){var r,a,l,c,h,d,f,p,v=[s||i],y=u.call(e,"type")?e.type:e,b=u.call(e,"namespace")?e.namespace.split("."):[];if(a=p=l=s=s||i,3!==s.nodeType&&8!==s.nodeType&&!ye.test(y+w.event.triggered)&&(y.indexOf(".")>-1&&(y=(b=y.split(".")).shift(),b.sort()),h=y.indexOf(":")<0&&"on"+y,(e=e[w.expando]?e:new w.Event(y,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=b.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=s),n=null==n?[e]:w.makeArray(n,[e]),f=w.event.special[y]||{},o||!f.trigger||!1!==f.trigger.apply(s,n))){if(!o&&!f.noBubble&&!g(s)){for(c=f.delegateType||y,ye.test(c+y)||(a=a.parentNode);a;a=a.parentNode)v.push(a),l=a;l===(s.ownerDocument||i)&&v.push(l.defaultView||l.parentWindow||t)}for(r=0;(a=v[r++])&&!e.isPropagationStopped();)p=a,e.type=r>1?c:f.bindType||y,(d=(Q.get(a,"events")||{})[e.type]&&Q.get(a,"handle"))&&d.apply(a,n),(d=h&&a[h])&&d.apply&&G(a)&&(e.result=d.apply(a,n),!1===e.result&&e.preventDefault());return e.type=y,o||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(v.pop(),n)||!G(s)||h&&m(s[y])&&!g(s)&&((l=s[h])&&(s[h]=null),w.event.triggered=y,e.isPropagationStopped()&&p.addEventListener(y,be),s[y](),e.isPropagationStopped()&&p.removeEventListener(y,be),w.event.triggered=void 0,l&&(s[h]=l)),e.result}},simulate:function(t,e,n){var i=w.extend(new w.Event,n,{type:t,isSimulated:!0});w.event.trigger(i,null,e)}}),w.fn.extend({trigger:function(t,e){return this.each(function(){w.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return w.event.trigger(t,e,n,!0)}}),p.focusin||w.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){w.event.simulate(e,t.target,w.event.fix(t))};w.event.special[e]={setup:function(){var i=this.ownerDocument||this,s=Q.access(i,e);s||i.addEventListener(t,n,!0),Q.access(i,e,(s||0)+1)},teardown:function(){var i=this.ownerDocument||this,s=Q.access(i,e)-1;s?Q.access(i,e,s):(i.removeEventListener(t,n,!0),Q.remove(i,e))}}});var _e=t.location,we=Date.now(),De=/\?/;w.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+e),n};var ke=/\[\]$/,Ce=/\r?\n/g,xe=/^(?:submit|button|image|reset|file)$/i,Te=/^(?:input|select|textarea|keygen)/i;function Se(t,e,n,i){var s;if(Array.isArray(e))w.each(e,function(e,s){n||ke.test(t)?i(t,s):Se(t+"["+("object"==typeof s&&null!=s?e:"")+"]",s,n,i)});else if(n||"object"!==b(e))i(t,e);else for(s in e)Se(t+"["+s+"]",e[s],n,i)}w.param=function(t,e){var n,i=[],s=function(t,e){var n=m(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(t)||t.jquery&&!w.isPlainObject(t))w.each(t,function(){s(this.name,this.value)});else for(n in t)Se(n,t[n],e,s);return i.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=w.prop(this,"elements");return t?w.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!w(this).is(":disabled")&&Te.test(this.nodeName)&&!xe.test(t)&&(this.checked||!ct.test(t))}).map(function(t,e){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(t){return{name:e.name,value:t.replace(Ce,"\r\n")}}):{name:e.name,value:n.replace(Ce,"\r\n")}}).get()}});var Ee=/%20/g,Me=/#.*$/,Ae=/([?&])_=[^&]*/,Oe=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ie=/^(?:GET|HEAD)$/,Ne=/^\/\//,Pe={},Le={},je="*/".concat("*"),Ye=i.createElement("a");function He(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,s=0,o=e.toLowerCase().match(j)||[];if(m(n))for(;i=o[s++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function $e(t,e,n,i){var s={},o=t===Le;function r(a){var l;return s[a]=!0,w.each(t[a]||[],function(t,a){var c=a(e,n,i);return"string"!=typeof c||o||s[c]?o?!(l=c):void 0:(e.dataTypes.unshift(c),r(c),!1)}),l}return r(e.dataTypes[0])||!s["*"]&&r("*")}function Re(t,e){var n,i,s=w.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((s[n]?t:i||(i={}))[n]=e[n]);return i&&w.extend(!0,t,i),t}Ye.href=_e.href,w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_e.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":je,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Re(Re(t,w.ajaxSettings),e):Re(w.ajaxSettings,t)},ajaxPrefilter:He(Pe),ajaxTransport:He(Le),ajax:function(e,n){"object"==typeof e&&(n=e,e=void 0),n=n||{};var s,o,r,a,l,c,h,u,d,f,p=w.ajaxSetup({},n),m=p.context||p,g=p.context&&(m.nodeType||m.jquery)?w(m):w.event,v=w.Deferred(),y=w.Callbacks("once memory"),b=p.statusCode||{},_={},D={},k="canceled",C={readyState:0,getResponseHeader:function(t){var e;if(h){if(!a)for(a={};e=Oe.exec(r);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return h?r:null},setRequestHeader:function(t,e){return null==h&&(t=D[t.toLowerCase()]=D[t.toLowerCase()]||t,_[t]=e),this},overrideMimeType:function(t){return null==h&&(p.mimeType=t),this},statusCode:function(t){var e;if(t)if(h)C.always(t[C.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||k;return s&&s.abort(e),x(0,e),this}};if(v.promise(C),p.url=((e||p.url||_e.href)+"").replace(Ne,_e.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(j)||[""],null==p.crossDomain){c=i.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=Ye.protocol+"//"+Ye.host!=c.protocol+"//"+c.host}catch(t){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=w.param(p.data,p.traditional)),$e(Pe,p,n,C),h)return C;for(d in(u=w.event&&p.global)&&0==w.active++&&w.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Ie.test(p.type),o=p.url.replace(Me,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Ee,"+")):(f=p.url.slice(o.length),p.data&&(p.processData||"string"==typeof p.data)&&(o+=(De.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(o=o.replace(Ae,"$1"),f=(De.test(o)?"&":"?")+"_="+we+++f),p.url=o+f),p.ifModified&&(w.lastModified[o]&&C.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&C.setRequestHeader("If-None-Match",w.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+je+"; q=0.01":""):p.accepts["*"]),p.headers)C.setRequestHeader(d,p.headers[d]);if(p.beforeSend&&(!1===p.beforeSend.call(m,C,p)||h))return C.abort();if(k="abort",y.add(p.complete),C.done(p.success),C.fail(p.error),s=$e(Le,p,n,C)){if(C.readyState=1,u&&g.trigger("ajaxSend",[C,p]),h)return C;p.async&&p.timeout>0&&(l=t.setTimeout(function(){C.abort("timeout")},p.timeout));try{h=!1,s.send(_,x)}catch(t){if(h)throw t;x(-1,t)}}else x(-1,"No Transport");function x(e,n,i,a){var c,d,f,_,D,k=n;h||(h=!0,l&&t.clearTimeout(l),s=void 0,r=a||"",C.readyState=e>0?4:0,c=e>=200&&e<300||304===e,i&&(_=function(t,e,n){for(var i,s,o,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){l.unshift(s);break}if(l[0]in n)o=l[0];else{for(s in n){if(!l[0]||t.converters[s+" "+l[0]]){o=s;break}r||(r=s)}o=o||r}if(o)return o!==l[0]&&l.unshift(o),n[o]}(p,C,i)),_=function(t,e,n,i){var s,o,r,a,l,c={},h=t.dataTypes.slice();if(h[1])for(r in t.converters)c[r.toLowerCase()]=t.converters[r];for(o=h.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=h.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(r=c[l+" "+o]||c["* "+o]))for(s in c)if((a=s.split(" "))[1]===o&&(r=c[l+" "+a[0]]||c["* "+a[0]])){!0===r?r=c[s]:!0!==c[s]&&(o=a[0],h.unshift(a[1]));break}if(!0!==r)if(r&&t.throws)e=r(e);else try{e=r(e)}catch(t){return{state:"parsererror",error:r?t:"No conversion from "+l+" to "+o}}}return{state:"success",data:e}}(p,_,C,c),c?(p.ifModified&&((D=C.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=D),(D=C.getResponseHeader("etag"))&&(w.etag[o]=D)),204===e||"HEAD"===p.type?k="nocontent":304===e?k="notmodified":(k=_.state,d=_.data,c=!(f=_.error))):(f=k,!e&&k||(k="error",e<0&&(e=0))),C.status=e,C.statusText=(n||k)+"",c?v.resolveWith(m,[d,k,C]):v.rejectWith(m,[C,k,f]),C.statusCode(b),b=void 0,u&&g.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?d:f]),y.fireWith(m,[C,k]),u&&(g.trigger("ajaxComplete",[C,p]),--w.active||w.event.trigger("ajaxStop")))}return C},getJSON:function(t,e,n){return w.get(t,e,n,"json")},getScript:function(t,e){return w.get(t,void 0,e,"script")}}),w.each(["get","post"],function(t,e){w[e]=function(t,n,i,s){return m(n)&&(s=s||i,i=n,n=void 0),w.ajax(w.extend({url:t,type:e,dataType:s,data:n,success:i},w.isPlainObject(t)&&t))}}),w._evalUrl=function(t){return w.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},w.fn.extend({wrapAll:function(t){var e;return this[0]&&(m(t)&&(t=t.call(this[0])),e=w(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return m(t)?this.each(function(e){w(this).wrapInner(t.call(this,e))}):this.each(function(){var e=w(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=m(t);return this.each(function(n){w(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(t){return!w.expr.pseudos.visible(t)},w.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var We={0:200,1223:204},Ue=w.ajaxSettings.xhr();p.cors=!!Ue&&"withCredentials"in Ue,p.ajax=Ue=!!Ue,w.ajaxTransport(function(e){var n,i;if(p.cors||Ue&&!e.crossDomain)return{send:function(s,o){var r,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)a[r]=e.xhrFields[r];for(r in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),s)a.setRequestHeader(r,s[r]);n=function(t){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(We[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&t.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(e.hasContent&&e.data||null)}catch(t){if(n)throw t}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return w.globalEval(t),t}}}),w.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),w.ajaxTransport("script",function(t){var e,n;if(t.crossDomain)return{send:function(s,o){e=w("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&o("error"===t.type?404:200,t.type)}),i.head.appendChild(e[0])},abort:function(){n&&n()}}});var Fe,qe=[],Ve=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=qe.pop()||w.expando+"_"+we++;return this[t]=!0,t}}),w.ajaxPrefilter("json jsonp",function(e,n,i){var s,o,r,a=!1!==e.jsonp&&(Ve.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ve.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return s=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ve,"$1"+s):!1!==e.jsonp&&(e.url+=(De.test(e.url)?"&":"?")+e.jsonp+"="+s),e.converters["script json"]=function(){return r||w.error(s+" was not called"),r[0]},e.dataTypes[0]="json",o=t[s],t[s]=function(){r=arguments},i.always(function(){void 0===o?w(t).removeProp(s):t[s]=o,e[s]&&(e.jsonpCallback=n.jsonpCallback,qe.push(s)),r&&m(o)&&o(r[0]),r=o=void 0}),"script"}),p.createHTMLDocument=((Fe=i.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Fe.childNodes.length),w.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(p.createHTMLDocument?((s=(e=i.implementation.createHTMLDocument("")).createElement("base")).href=i.location.href,e.head.appendChild(s)):e=i),o=M.exec(t),r=!n&&[],o?[e.createElement(o[1])]:(o=yt([t],e,r),r&&r.length&&w(r).remove(),w.merge([],o.childNodes)));var s,o,r},w.fn.load=function(t,e,n){var i,s,o,r=this,a=t.indexOf(" ");return a>-1&&(i=pe(t.slice(a)),t=t.slice(0,a)),m(e)?(n=e,e=void 0):e&&"object"==typeof e&&(s="POST"),r.length>0&&w.ajax({url:t,type:s||"GET",dataType:"html",data:e}).done(function(t){o=arguments,r.html(i?w("<div>").append(w.parseHTML(t)).find(i):t)}).always(n&&function(t,e){r.each(function(){n.apply(this,o||[t.responseText,e,t])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){w.fn[e]=function(t){return this.on(e,t)}}),w.expr.pseudos.animated=function(t){return w.grep(w.timers,function(e){return t===e.elem}).length},w.offset={setOffset:function(t,e,n){var i,s,o,r,a,l,c=w.css(t,"position"),h=w(t),u={};"static"===c&&(t.style.position="relative"),a=h.offset(),o=w.css(t,"top"),l=w.css(t,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(r=(i=h.position()).top,s=i.left):(r=parseFloat(o)||0,s=parseFloat(l)||0),m(e)&&(e=e.call(t,n,w.extend({},a))),null!=e.top&&(u.top=e.top-a.top+r),null!=e.left&&(u.left=e.left-a.left+s),"using"in e?e.using.call(t,u):h.css(u)}},w.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){w.offset.setOffset(this,t,e)});var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,i=this[0],s={top:0,left:0};if("fixed"===w.css(i,"position"))e=i.getBoundingClientRect();else{for(e=this.offset(),n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===w.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&((s=w(t).offset()).top+=w.css(t,"borderTopWidth",!0),s.left+=w.css(t,"borderLeftWidth",!0))}return{top:e.top-s.top-w.css(i,"marginTop",!0),left:e.left-s.left-w.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===w.css(t,"position");)t=t.offsetParent;return t||bt})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;w.fn[t]=function(i){return F(this,function(t,i,s){var o;if(g(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===s)return o?o[e]:t[i];o?o.scrollTo(n?o.pageXOffset:s,n?s:o.pageYOffset):t[i]=s},t,i,arguments.length)}}),w.each(["top","left"],function(t,e){w.cssHooks[e]=Wt(p.pixelPosition,function(t,n){if(n)return n=Rt(t,e),Yt.test(n)?w(t).position()[e]+"px":n})}),w.each({Height:"height",Width:"width"},function(t,e){w.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){w.fn[i]=function(s,o){var r=arguments.length&&(n||"boolean"!=typeof s),a=n||(!0===s||!0===o?"margin":"border");return F(this,function(e,n,s){var o;return g(e)?0===i.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===s?w.css(e,n,a):w.style(e,n,s,a)},e,r?s:void 0,r)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){w.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),w.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),w.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),w.proxy=function(t,e){var n,i,s;if("string"==typeof e&&(n=t[e],e=t,t=n),m(t))return i=o.call(arguments,2),(s=function(){return t.apply(e||this,i.concat(o.call(arguments)))}).guid=t.guid=t.guid||w.guid++,s},w.holdReady=function(t){t?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=E,w.isFunction=m,w.isWindow=g,w.camelCase=z,w.type=b,w.now=Date.now,w.isNumeric=function(t){var e=w.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Be=t.jQuery,ze=t.$;return w.noConflict=function(e){return t.$===w&&(t.$=ze),e&&t.jQuery===w&&(t.jQuery=Be),w},e||(t.jQuery=t.$=w),w}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){var i,s,o;i=t,s=e,o=n[e],s in i?Object.defineProperty(i,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[s]=o})}return t}var o="transitionend";function r(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||a.triggerTransitionEnd(n)},t),this}var a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),s=parseFloat(n),o=parseFloat(i);return s||o?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(o)},supportsTransitionEnd:function(){return Boolean(o)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var s=n[i],o=e[i],r=o&&a.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(s).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+s+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?a.findShadowRoot(t.parentNode):null}};(e=e&&e.hasOwnProperty("default")?e.default:e).fn.emulateTransitionEnd=r,e.event.special[a.TRANSITION_END]={bindType:o,delegateType:o,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var l="alert",c="bs.alert",h="."+c,u=e.fn[l],d={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",p="fade",m="show",g=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,c),this._element=null},n._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest("."+f)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(d.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass(m),e(t).hasClass(p)){var i=a.getTransitionDurationFromElement(t);e(t).one(a.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(d.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data(c);s||(s=new t(this),i.data(c,s)),"close"===n&&s[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(d.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),e.fn[l]=g._jQueryInterface,e.fn[l].Constructor=g,e.fn[l].noConflict=function(){return e.fn[l]=u,g._jQueryInterface};var v="button",y="bs.button",b="."+y,_=".data-api",w=e.fn[v],D="active",k="btn",C="focus",x='[data-toggle^="button"]',T='[data-toggle="buttons"]',S='input:not([type="hidden"])',E=".active",M=".btn",A={CLICK_DATA_API:"click"+b+_,FOCUS_BLUR_DATA_API:"focus"+b+_+" blur"+b+_},O=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest(T)[0];if(i){var s=this._element.querySelector(S);if(s){if("radio"===s.type)if(s.checked&&this._element.classList.contains(D))t=!1;else{var o=i.querySelector(E);o&&e(o).removeClass(D)}if(t){if(s.hasAttribute("disabled")||i.hasAttribute("disabled")||s.classList.contains("disabled")||i.classList.contains("disabled"))return;s.checked=!this._element.classList.contains(D),e(s).trigger("change")}s.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(D)),t&&e(this._element).toggleClass(D)},n.dispose=function(){e.removeData(this._element,y),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(y);i||(i=new t(this),e(this).data(y,i)),"toggle"===n&&i[n]()})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(A.CLICK_DATA_API,x,function(t){t.preventDefault();var n=t.target;e(n).hasClass(k)||(n=e(n).closest(M)),O._jQueryInterface.call(e(n),"toggle")}).on(A.FOCUS_BLUR_DATA_API,x,function(t){var n=e(t.target).closest(M)[0];e(n).toggleClass(C,/^focus(in)?$/.test(t.type))}),e.fn[v]=O._jQueryInterface,e.fn[v].Constructor=O,e.fn[v].noConflict=function(){return e.fn[v]=w,O._jQueryInterface};var I="carousel",N="bs.carousel",P="."+N,L=".data-api",j=e.fn[I],Y={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$="next",R="prev",W="left",U="right",F={SLIDE:"slide"+P,SLID:"slid"+P,KEYDOWN:"keydown"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P,TOUCHSTART:"touchstart"+P,TOUCHMOVE:"touchmove"+P,TOUCHEND:"touchend"+P,POINTERDOWN:"pointerdown"+P,POINTERUP:"pointerup"+P,DRAG_START:"dragstart"+P,LOAD_DATA_API:"load"+P+L,CLICK_DATA_API:"click"+P+L},q="carousel",V="active",B="slide",z="carousel-item-right",G="carousel-item-left",K="carousel-item-next",Q="carousel-item-prev",Z="pointer-event",X={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",ITEM_IMG:".carousel-item img",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},J={TOUCH:"touch",PEN:"pen"},tt=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(X.INDICATORS),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide($)},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(R)},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(X.NEXT_PREV)&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(X.ACTIVE_ITEM);var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(F.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var s=t>i?$:R;this._slide(s,this._items[t])}},n.dispose=function(){e(this._element).off(P),e.removeData(this._element,N),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=s({},Y,t),a.typeCheckConfig(I,t,H),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(F.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&e(this._element).on(F.MOUSEENTER,function(e){return t.pause(e)}).on(F.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&J[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&J[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};e(this._element.querySelectorAll(X.ITEM_IMG)).on(F.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(e(this._element).on(F.POINTERDOWN,function(t){return n(t)}),e(this._element).on(F.POINTERUP,function(t){return i(t)}),this._element.classList.add(Z)):(e(this._element).on(F.TOUCHSTART,function(t){return n(t)}),e(this._element).on(F.TOUCHMOVE,function(e){var n;(n=e).originalEvent.touches&&n.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=n.originalEvent.touches[0].clientX-t.touchStartX}),e(this._element).on(F.TOUCHEND,function(t){return i(t)}))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(X.ITEM)):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n=t===$,i=t===R,s=this._getItemIndex(e),o=this._items.length-1;if((i&&0===s||n&&s===o)&&!this._config.wrap)return e;var r=(s+(t===R?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),s=this._getItemIndex(this._element.querySelector(X.ACTIVE_ITEM)),o=e.Event(F.SLIDE,{relatedTarget:t,direction:n,from:s,to:i});return e(this._element).trigger(o),o},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(X.ACTIVE));e(n).removeClass(V);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(V)}},n._slide=function(t,n){var i,s,o,r=this,l=this._element.querySelector(X.ACTIVE_ITEM),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(t,l),u=this._getItemIndex(h),d=Boolean(this._interval);if(t===$?(i=G,s=K,o=W):(i=z,s=Q,o=U),h&&e(h).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(h,o).isDefaultPrevented()&&l&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event(F.SLID,{relatedTarget:h,direction:o,from:c,to:u});if(e(this._element).hasClass(B)){e(h).addClass(s),a.reflow(h),e(l).addClass(i),e(h).addClass(i);var p=parseInt(h.getAttribute("data-interval"),10);p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval;var m=a.getTransitionDurationFromElement(l);e(l).one(a.TRANSITION_END,function(){e(h).removeClass(i+" "+s).addClass(V),e(l).removeClass(V+" "+s+" "+i),r._isSliding=!1,setTimeout(function(){return e(r._element).trigger(f)},0)}).emulateTransitionEnd(m)}else e(l).removeClass(V),e(h).addClass(V),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(N),o=s({},Y,e(this).data());"object"==typeof n&&(o=s({},o,n));var r="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data(N,i)),"number"==typeof n)i.to(n);else if("string"==typeof r){if(void 0===i[r])throw new TypeError('No method named "'+r+'"');i[r]()}else o.interval&&o.ride&&(i.pause(),i.cycle())})},t._dataApiClickHandler=function(n){var i=a.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass(q)){var r=s({},e(o).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(r.interval=!1),t._jQueryInterface.call(e(o),r),l&&e(o).data(N).to(l),n.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Y}}]),t}();e(document).on(F.CLICK_DATA_API,X.DATA_SLIDE,tt._dataApiClickHandler),e(window).on(F.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(X.DATA_RIDE)),n=0,i=t.length;n<i;n++){var s=e(t[n]);tt._jQueryInterface.call(s,s.data())}}),e.fn[I]=tt._jQueryInterface,e.fn[I].Constructor=tt,e.fn[I].noConflict=function(){return e.fn[I]=j,tt._jQueryInterface};var et="collapse",nt="bs.collapse",it="."+nt,st=e.fn[et],ot={toggle:!0,parent:""},rt={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ct="collapse",ht="collapsing",ut="collapsed",dt="width",ft="height",pt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},mt=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(pt.DATA_TOGGLE)),i=0,s=n.length;i<s;i++){var o=n[i],r=a.getSelectorFromElement(o),l=[].slice.call(document.querySelectorAll(r)).filter(function(e){return e===t});null!==r&&l.length>0&&(this._selector=r,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass(lt)?this.hide():this.show()},n.show=function(){var n,i,s=this;if(!this._isTransitioning&&!e(this._element).hasClass(lt)&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(pt.ACTIVES)).filter(function(t){return"string"==typeof s._config.parent?t.getAttribute("data-parent")===s._config.parent:t.classList.contains(ct)})).length&&(n=null),!(n&&(i=e(n).not(this._selector).data(nt))&&i._isTransitioning))){var o=e.Event(at.SHOW);if(e(this._element).trigger(o),!o.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data(nt,null));var r=this._getDimension();e(this._element).removeClass(ct).addClass(ht),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(r[0].toUpperCase()+r.slice(1)),c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,function(){e(s._element).removeClass(ht).addClass(ct).addClass(lt),s._element.style[r]="",s.setTransitioning(!1),e(s._element).trigger(at.SHOWN)}).emulateTransitionEnd(c),this._element.style[r]=this._element[l]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(lt)){var n=e.Event(at.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",a.reflow(this._element),e(this._element).addClass(ht).removeClass(ct).removeClass(lt);var s=this._triggerArray.length;if(s>0)for(var o=0;o<s;o++){var r=this._triggerArray[o],l=a.getSelectorFromElement(r);if(null!==l)e([].slice.call(document.querySelectorAll(l))).hasClass(lt)||e(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var c=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,function(){t.setTransitioning(!1),e(t._element).removeClass(ht).addClass(ct).trigger(at.HIDDEN)}).emulateTransitionEnd(c)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=s({},ot,t)).toggle=Boolean(t.toggle),a.typeCheckConfig(et,t,rt),t},n._getDimension=function(){return e(this._element).hasClass(dt)?dt:ft},n._getParent=function(){var n,i=this;a.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(n.querySelectorAll(s));return e(o).each(function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])}),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass(lt);n.length&&e(n).toggleClass(ut,!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=a.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),o=i.data(nt),r=s({},ot,i.data(),"object"==typeof n&&n?n:{});if(!o&&r.toggle&&/show|hide/.test(n)&&(r.toggle=!1),o||(o=new t(this,r),i.data(nt,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"');o[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ot}}]),t}();e(document).on(at.CLICK_DATA_API,pt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=a.getSelectorFromElement(this),s=[].slice.call(document.querySelectorAll(i));e(s).each(function(){var t=e(this),i=t.data(nt)?"toggle":n.data();mt._jQueryInterface.call(t,i)})}),e.fn[et]=mt._jQueryInterface,e.fn[et].Constructor=mt,e.fn[et].noConflict=function(){return e.fn[et]=st,mt._jQueryInterface};for(var gt="undefined"!=typeof window&&"undefined"!=typeof document,vt=["Edge","Trident","Firefox"],yt=0,bt=0;bt<vt.length;bt+=1)if(gt&&navigator.userAgent.indexOf(vt[bt])>=0){yt=1;break}var _t=gt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},yt))}};function wt(t){return t&&"[object Function]"==={}.toString.call(t)}function Dt(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function kt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function Ct(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Dt(t),n=e.overflow,i=e.overflowX,s=e.overflowY;return/(auto|scroll|overlay)/.test(n+s+i)?t:Ct(kt(t))}var xt=gt&&!(!window.MSInputMethodContext||!document.documentMode),Tt=gt&&/MSIE 10/.test(navigator.userAgent);function St(t){return 11===t?xt:10===t?Tt:xt||Tt}function Et(t){if(!t)return document.documentElement;for(var e=St(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Dt(n,"position")?Et(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Mt(t){return null!==t.parentNode?Mt(t.parentNode):t}function At(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,s=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(s,0);var r,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(s))return"BODY"===(a=(r=l).nodeName)||"HTML"!==a&&Et(r.firstElementChild)!==r?Et(l):l;var c=Mt(t);return c.host?At(c.host,e):At(t,Mt(e).host)}function Ot(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function It(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Nt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],St(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Pt(t){var e=t.body,n=t.documentElement,i=St(10)&&getComputedStyle(n);return{height:Nt("Height",e,n,i),width:Nt("Width",e,n,i)}}var Lt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},jt=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Yt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function $t(t){return Ht({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Rt(t){var e={};try{if(St(10)){e=t.getBoundingClientRect();var n=Ot(t,"top"),i=Ot(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var s={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Pt(t.ownerDocument):{},r=o.width||t.clientWidth||s.right-s.left,a=o.height||t.clientHeight||s.bottom-s.top,l=t.offsetWidth-r,c=t.offsetHeight-a;if(l||c){var h=Dt(t);l-=It(h,"x"),c-=It(h,"y"),s.width-=l,s.height-=c}return $t(s)}function Wt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=St(10),s="HTML"===e.nodeName,o=Rt(t),r=Rt(e),a=Ct(t),l=Dt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&s&&(r.top=Math.max(r.top,0),r.left=Math.max(r.left,0));var u=$t({top:o.top-r.top-c,left:o.left-r.left-h,width:o.width,height:o.height});if(u.marginTop=0,u.marginLeft=0,!i&&s){var d=parseFloat(l.marginTop,10),f=parseFloat(l.marginLeft,10);u.top-=c-d,u.bottom-=c-d,u.left-=h-f,u.right-=h-f,u.marginTop=d,u.marginLeft=f}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=Ot(e,"top"),s=Ot(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=s*o,t.right+=s*o,t}(u,e)),u}function Ut(t){if(!t||!t.parentElement||St())return document.documentElement;for(var e=t.parentElement;e&&"none"===Dt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Ft(t,e,n,i){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},r=s?Ut(t):At(t,e);if("viewport"===i)o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Wt(t,n),s=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),r=e?0:Ot(n),a=e?0:Ot(n,"left");return $t({top:r-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:s,height:o})}(r,s);else{var a=void 0;"scrollParent"===i?"BODY"===(a=Ct(kt(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=Wt(a,r,s);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===Dt(e,"position"))return!0;var i=kt(e);return!!i&&t(i)}(r))o=l;else{var c=Pt(t.ownerDocument),h=c.height,u=c.width;o.top+=l.top-l.marginTop,o.bottom=h+l.top,o.left+=l.left-l.marginLeft,o.right=u+l.left}}var d="number"==typeof(n=n||0);return o.left+=d?n:n.left||0,o.top+=d?n:n.top||0,o.right-=d?n:n.right||0,o.bottom-=d?n:n.bottom||0,o}function qt(t,e,n,i,s){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var r=Ft(n,i,o,s),a={top:{width:r.width,height:e.top-r.top},right:{width:r.right-e.right,height:r.height},bottom:{width:r.width,height:r.bottom-e.bottom},left:{width:e.left-r.left,height:r.height}},l=Object.keys(a).map(function(t){return Ht({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function Vt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Wt(n,i?Ut(e):At(e,n),i)}function Bt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function zt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Gt(t,e,n){n=n.split("-")[0];var i=Bt(t),s={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),r=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return s[r]=e[r]+e[l]/2-i[l]/2,s[a]=n===a?e[a]-i[c]:e[zt(a)],s}function Kt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Qt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=Kt(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&wt(n)&&(e.offsets.popper=$t(e.offsets.popper),e.offsets.reference=$t(e.offsets.reference),e=n(e,t))}),e}function Zt(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function Xt(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var s=e[i],o=s?""+s+n:t;if(void 0!==document.body.style[o])return o}return null}function Jt(t){var e=t.ownerDocument;return e?e.defaultView:window}function te(t,e,n,i){n.updateBound=i,Jt(t).addEventListener("resize",n.updateBound,{passive:!0});var s=Ct(t);return function t(e,n,i,s){var o="BODY"===e.nodeName,r=o?e.ownerDocument.defaultView:e;r.addEventListener(n,i,{passive:!0}),o||t(Ct(r.parentNode),n,i,s),s.push(r)}(s,"scroll",n.updateBound,n.scrollParents),n.scrollElement=s,n.eventsEnabled=!0,n}function ee(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,Jt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function ne(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function ie(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&ne(e[n])&&(i="px"),t.style[n]=e[n]+i})}var se=gt&&/Firefox/i.test(navigator.userAgent);function oe(t,e,n){var i=Kt(t,function(t){return t.name===e}),s=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!s){var o="`"+e+"`",r="`"+n+"`";console.warn(r+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return s}var re=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ae=re.slice(3);function le(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=ae.indexOf(t),i=ae.slice(n+1).concat(ae.slice(0,n));return e?i.reverse():i}var ce={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function he(t,e,n,i){var s=[0,0],o=-1!==["right","left"].indexOf(i),r=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=r.indexOf(Kt(r,function(t){return-1!==t.search(/,|\s/)}));r[a]&&-1===r[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[r.slice(0,a).concat([r[a].split(l)[0]]),[r[a].split(l)[1]].concat(r.slice(a+1))]:[r];return(c=c.map(function(t,i){var s=(1===i?!o:o)?"height":"width",r=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,r=!0,t):r?(t[t.length-1]+=e,r=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var s=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+s[1],r=s[2];if(!o)return t;if(0===r.indexOf("%")){var a=void 0;switch(r){case"%p":a=n;break;case"%":case"%r":default:a=i}return $t(a)[e]/100*o}if("vh"===r||"vw"===r)return("vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,s,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){ne(n)&&(s[e]+=n*("-"===t[i-1]?-1:1))})}),s}var ue={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var s=t.offsets,o=s.reference,r=s.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Yt({},l,o[l]),end:Yt({},l,o[l]+o[c]-r[c])};t.offsets.popper=Ht({},r,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,s=t.offsets,o=s.popper,r=s.reference,a=i.split("-")[0],l=void 0;return l=ne(+n)?[+n,0]:he(n,o,r,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||Et(t.instance.popper);t.instance.reference===n&&(n=Et(n));var i=Xt("transform"),s=t.instance.popper.style,o=s.top,r=s.left,a=s[i];s.top="",s.left="",s[i]="";var l=Ft(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);s.top=o,s.left=r,s[i]=a,e.boundaries=l;var c=e.priority,h=t.offsets.popper,u={primary:function(t){var n=h[t];return h[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(h[t],l[t])),Yt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=h[n];return h[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(h[n],l[t]-("right"===t?h.width:h.height))),Yt({},n,i)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Ht({},h,u[e](t))}),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,s=t.placement.split("-")[0],o=Math.floor,r=-1!==["top","bottom"].indexOf(s),a=r?"right":"bottom",l=r?"left":"top",c=r?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!oe(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var s=t.placement.split("-")[0],o=t.offsets,r=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(s),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),d=l?"left":"top",f=l?"bottom":"right",p=Bt(i)[c];a[f]-p<r[u]&&(t.offsets.popper[u]-=r[u]-(a[f]-p)),a[u]+p>r[f]&&(t.offsets.popper[u]+=a[u]+p-r[f]),t.offsets.popper=$t(t.offsets.popper);var m=a[u]+a[c]/2-p/2,g=Dt(t.instance.popper),v=parseFloat(g["margin"+h],10),y=parseFloat(g["border"+h+"Width"],10),b=m-t.offsets.popper[u]-v-y;return b=Math.max(Math.min(r[c]-p,b),0),t.arrowElement=i,t.offsets.arrow=(Yt(n={},u,Math.round(b)),Yt(n,d,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(Zt(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=Ft(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],s=zt(i),o=t.placement.split("-")[1]||"",r=[];switch(e.behavior){case ce.FLIP:r=[i,s];break;case ce.CLOCKWISE:r=le(i);break;case ce.COUNTERCLOCKWISE:r=le(i,!0);break;default:r=e.behavior}return r.forEach(function(a,l){if(i!==a||r.length===l+1)return t;i=t.placement.split("-")[0],s=zt(i);var c,h=t.offsets.popper,u=t.offsets.reference,d=Math.floor,f="left"===i&&d(h.right)>d(u.left)||"right"===i&&d(h.left)<d(u.right)||"top"===i&&d(h.bottom)>d(u.top)||"bottom"===i&&d(h.top)<d(u.bottom),p=d(h.left)<d(n.left),m=d(h.right)>d(n.right),g=d(h.top)<d(n.top),v=d(h.bottom)>d(n.bottom),y="left"===i&&p||"right"===i&&m||"top"===i&&g||"bottom"===i&&v,b=-1!==["top","bottom"].indexOf(i),_=!!e.flipVariations&&(b&&"start"===o&&p||b&&"end"===o&&m||!b&&"start"===o&&g||!b&&"end"===o&&v);(f||y||_)&&(t.flipped=!0,(f||y)&&(i=r[l+1]),_&&(o="end"===(c=o)?"start":"start"===c?"end":c),t.placement=i+(o?"-"+o:""),t.offsets.popper=Ht({},t.offsets.popper,Gt(t.instance.popper,t.offsets.reference,t.placement)),t=Qt(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,s=i.popper,o=i.reference,r=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return s[r?"left":"top"]=o[n]-(a?s[r?"width":"height"]:0),t.placement=zt(e),t.offsets.popper=$t(s),t}},hide:{order:800,enabled:!0,fn:function(t){if(!oe(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=Kt(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,s=t.offsets.popper,o=Kt(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var r,a,l,c,h,u,d,f,p,m,g,v,y,b,_=void 0!==o?o:e.gpuAcceleration,w=Et(t.instance.popper),D=Rt(w),k={position:s.position},C=(r=t,a=window.devicePixelRatio<2||!se,l=r.offsets,c=l.popper,h=l.reference,u=Math.round,d=Math.floor,f=function(t){return t},p=u(h.width),m=u(c.width),g=-1!==["left","right"].indexOf(r.placement),v=-1!==r.placement.indexOf("-"),y=a?g||v||p%2==m%2?u:d:f,b=a?u:f,{left:y(p%2==1&&m%2==1&&!v&&a?c.left-1:c.left),top:b(c.top),bottom:b(c.bottom),right:y(c.right)}),x="bottom"===n?"top":"bottom",T="right"===i?"left":"right",S=Xt("transform"),E=void 0,M=void 0;if(M="bottom"===x?"HTML"===w.nodeName?-w.clientHeight+C.bottom:-D.height+C.bottom:C.top,E="right"===T?"HTML"===w.nodeName?-w.clientWidth+C.right:-D.width+C.right:C.left,_&&S)k[S]="translate3d("+E+"px, "+M+"px, 0)",k[x]=0,k[T]=0,k.willChange="transform";else{var A="bottom"===x?-1:1,O="right"===T?-1:1;k[x]=M*A,k[T]=E*O,k.willChange=x+", "+T}var I={"x-placement":t.placement};return t.attributes=Ht({},I,t.attributes),t.styles=Ht({},k,t.styles),t.arrowStyles=Ht({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return ie(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&ie(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,s){var o=Vt(s,e,t,n.positionFixed),r=qt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",r),ie(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},de=function(){function t(e,n){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Lt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=_t(this.update.bind(this)),this.options=Ht({},t.Defaults,s),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(Ht({},t.Defaults.modifiers,s.modifiers)).forEach(function(e){i.options.modifiers[e]=Ht({},t.Defaults.modifiers[e]||{},s.modifiers?s.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Ht({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&wt(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return jt(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Vt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=qt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Gt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Qt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,Zt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Xt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=te(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ee.call(this)}}]),t}();de.Utils=("undefined"!=typeof window?window:global).PopperUtils,de.placements=re,de.Defaults=ue;var fe="dropdown",pe="bs.dropdown",me="."+pe,ge=".data-api",ve=e.fn[fe],ye=new RegExp("38|40|27"),be={HIDE:"hide"+me,HIDDEN:"hidden"+me,SHOW:"show"+me,SHOWN:"shown"+me,CLICK:"click"+me,CLICK_DATA_API:"click"+me+ge,KEYDOWN_DATA_API:"keydown"+me+ge,KEYUP_DATA_API:"keyup"+me+ge},_e="disabled",we="show",De="dropup",ke="dropright",Ce="dropleft",xe="dropdown-menu-right",Te="position-static",Se='[data-toggle="dropdown"]',Ee=".dropdown form",Me=".dropdown-menu",Ae=".navbar-nav",Oe=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ie="top-start",Ne="top-end",Pe="bottom-start",Le="bottom-end",je="right-start",Ye="left-start",He={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},$e={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Re=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var n=t.prototype;return n.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(_e)){var n=t._getParentFromElement(this._element),i=e(this._menu).hasClass(we);if(t._clearMenus(),!i){var s={relatedTarget:this._element},o=e.Event(be.SHOW,s);if(e(n).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===de)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var r=this._element;"parent"===this._config.reference?r=n:a.isElement(this._config.reference)&&(r=this._config.reference,void 0!==this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(n).addClass(Te),this._popper=new de(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(n).closest(Ae).length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(we),e(n).toggleClass(we).trigger(e.Event(be.SHOWN,s))}}}},n.show=function(){if(!(this._element.disabled||e(this._element).hasClass(_e)||e(this._menu).hasClass(we))){var n={relatedTarget:this._element},i=e.Event(be.SHOW,n),s=t._getParentFromElement(this._element);e(s).trigger(i),i.isDefaultPrevented()||(e(this._menu).toggleClass(we),e(s).toggleClass(we).trigger(e.Event(be.SHOWN,n)))}},n.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(_e)&&e(this._menu).hasClass(we)){var n={relatedTarget:this._element},i=e.Event(be.HIDE,n),s=t._getParentFromElement(this._element);e(s).trigger(i),i.isDefaultPrevented()||(e(this._menu).toggleClass(we),e(s).toggleClass(we).trigger(e.Event(be.HIDDEN,n)))}},n.dispose=function(){e.removeData(this._element,pe),e(this._element).off(me),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},n.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},n._addEventListeners=function(){var t=this;e(this._element).on(be.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},n._getConfig=function(t){return t=s({},this.constructor.Default,e(this._element).data(),t),a.typeCheckConfig(fe,t,this.constructor.DefaultType),t},n._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(Me))}return this._menu},n._getPlacement=function(){var t=e(this._element.parentNode),n=Pe;return t.hasClass(De)?(n=Ie,e(this._menu).hasClass(xe)&&(n=Ne)):t.hasClass(ke)?n=je:t.hasClass(Ce)?n=Ye:e(this._menu).hasClass(xe)&&(n=Le),n},n._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},n._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},n._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(pe);if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data(pe,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(Se)),s=0,o=i.length;s<o;s++){var r=t._getParentFromElement(i[s]),a=e(i[s]).data(pe),l={relatedTarget:i[s]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass(we)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event(be.HIDE,l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[s].setAttribute("aria-expanded","false"),e(c).removeClass(we),e(r).removeClass(we).trigger(e.Event(be.HIDDEN,l)))}}}},t._getParentFromElement=function(t){var e,n=a.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if((/input|textarea/i.test(n.target.tagName)?!(32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(Me).length)):ye.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(_e))){var i=t._getParentFromElement(this),s=e(i).hasClass(we);if(s&&(!s||27!==n.which&&32!==n.which)){var o=[].slice.call(i.querySelectorAll(Oe));if(0!==o.length){var r=o.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<o.length-1&&r++,r<0&&(r=0),o[r].focus()}}else{if(27===n.which){var a=i.querySelector(Se);e(a).trigger("focus")}e(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return He}},{key:"DefaultType",get:function(){return $e}}]),t}();e(document).on(be.KEYDOWN_DATA_API,Se,Re._dataApiKeydownHandler).on(be.KEYDOWN_DATA_API,Me,Re._dataApiKeydownHandler).on(be.CLICK_DATA_API+" "+be.KEYUP_DATA_API,Re._clearMenus).on(be.CLICK_DATA_API,Se,function(t){t.preventDefault(),t.stopPropagation(),Re._jQueryInterface.call(e(this),"toggle")}).on(be.CLICK_DATA_API,Ee,function(t){t.stopPropagation()}),e.fn[fe]=Re._jQueryInterface,e.fn[fe].Constructor=Re,e.fn[fe].noConflict=function(){return e.fn[fe]=ve,Re._jQueryInterface};var We="modal",Ue="bs.modal",Fe="."+Ue,qe=e.fn[We],Ve={backdrop:!0,keyboard:!0,focus:!0,show:!0},Be={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ze={HIDE:"hide"+Fe,HIDDEN:"hidden"+Fe,SHOW:"show"+Fe,SHOWN:"shown"+Fe,FOCUSIN:"focusin"+Fe,RESIZE:"resize"+Fe,CLICK_DISMISS:"click.dismiss"+Fe,KEYDOWN_DISMISS:"keydown.dismiss"+Fe,MOUSEUP_DISMISS:"mouseup.dismiss"+Fe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Fe,CLICK_DATA_API:"click"+Fe+".data-api"},Ge="modal-dialog-scrollable",Ke="modal-scrollbar-measure",Qe="modal-backdrop",Ze="modal-open",Xe="fade",Je="show",tn={DIALOG:".modal-dialog",MODAL_BODY:".modal-body",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},en=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(tn.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(Xe)&&(this._isTransitioning=!0);var i=e.Event(ze.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(ze.CLICK_DISMISS,tn.DATA_DISMISS,function(t){return n.hide(t)}),e(this._dialog).on(ze.MOUSEDOWN_DISMISS,function(){e(n._element).one(ze.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event(ze.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=e(this._element).hasClass(Xe);if(s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(ze.FOCUSIN),e(this._element).removeClass(Je),e(this._element).off(ze.CLICK_DISMISS),e(this._dialog).off(ze.MOUSEDOWN_DISMISS),s){var o=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return e(t).off(Fe)}),e(document).off(ze.FOCUSIN),e.removeData(this._element,Ue),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=s({},Ve,t),a.typeCheckConfig(We,t,Be),t},n._showElement=function(t){var n=this,i=e(this._element).hasClass(Xe);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass(Ge)?this._dialog.querySelector(tn.MODAL_BODY).scrollTop=0:this._element.scrollTop=0,i&&a.reflow(this._element),e(this._element).addClass(Je),this._config.focus&&this._enforceFocus();var s=e.Event(ze.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var r=a.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(a.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},n._enforceFocus=function(){var t=this;e(document).off(ze.FOCUSIN).on(ze.FOCUSIN,function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()})},n._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(ze.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(ze.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on(ze.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(ze.RESIZE)},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(Ze),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(ze.HIDDEN)})},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(Xe)?Xe:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=Qe,i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on(ze.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),i&&a.reflow(this._backdrop),e(this._backdrop).addClass(Je),!t)return;if(!i)return void t();var s=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(s)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(Je);var o=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass(Xe)){var r=a.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(a.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(tn.FIXED_CONTENT)),i=[].slice.call(document.querySelectorAll(tn.STICKY_CONTENT));e(n).each(function(n,i){var s=i.style.paddingRight,o=e(i).css("padding-right");e(i).data("padding-right",s).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(i).each(function(n,i){var s=i.style.marginRight,o=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")});var s=document.body.style.paddingRight,o=e(document.body).css("padding-right");e(document.body).data("padding-right",s).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}e(document.body).addClass(Ze)},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(tn.FIXED_CONTENT));e(t).each(function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""});var n=[].slice.call(document.querySelectorAll(""+tn.STICKY_CONTENT));e(n).each(function(t,n){var i=e(n).data("margin-right");void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")});var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Ke,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each(function(){var o=e(this).data(Ue),r=s({},Ve,e(this).data(),"object"==typeof n&&n?n:{});if(o||(o=new t(this,r),e(this).data(Ue,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else r.show&&o.show(i)})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Ve}}]),t}();e(document).on(ze.CLICK_DATA_API,tn.DATA_TOGGLE,function(t){var n,i=this,o=a.getSelectorFromElement(this);o&&(n=document.querySelector(o));var r=e(n).data(Ue)?"toggle":s({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var l=e(n).one(ze.SHOW,function(t){t.isDefaultPrevented()||l.one(ze.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});en._jQueryInterface.call(e(n),r,this)}),e.fn[We]=en._jQueryInterface,e.fn[We].Constructor=en,e.fn[We].noConflict=function(){return e.fn[We]=qe,en._jQueryInterface};var nn=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],sn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},on=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,rn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function an(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=o[t],r=i.nodeName.toLowerCase();if(-1===s.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===nn.indexOf(n)||Boolean(t.nodeValue.match(on)||t.nodeValue.match(rn));for(var i=e.filter(function(t){return t instanceof RegExp}),s=0,o=i.length;s<o;s++)if(n.match(i[s]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)})},a=0,l=o.length;a<l;a++)r(a);return i.body.innerHTML}var ln="tooltip",cn="bs.tooltip",hn="."+cn,un=e.fn[ln],dn="bs-tooltip",fn=new RegExp("(^|\\s)"+dn+"\\S+","g"),pn=["sanitize","whiteList","sanitizeFn"],mn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},gn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},vn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:sn},yn="show",bn="out",_n={HIDE:"hide"+hn,HIDDEN:"hidden"+hn,SHOW:"show"+hn,SHOWN:"shown"+hn,INSERTED:"inserted"+hn,CLICK:"click"+hn,FOCUSIN:"focusin"+hn,FOCUSOUT:"focusout"+hn,MOUSEENTER:"mouseenter"+hn,MOUSELEAVE:"mouseleave"+hn},wn="fade",Dn="show",kn=".tooltip-inner",Cn=".arrow",xn="hover",Tn="focus",Sn="click",En="manual",Mn=function(){function t(t,e){if(void 0===de)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var n=t.prototype;return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(Dn))return void this._leave(null,this);this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var n=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(n);var i=a.findShadowRoot(this.element),s=e.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!s)return;var o=this.getTipElement(),r=a.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&e(o).addClass(wn);var l="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var h=this._getContainer();e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(h),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new de(this.element,o,{placement:c,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Cn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}}),e(o).addClass(Dn),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var u=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===bn&&t._leave(null,t)};if(e(this.tip).hasClass(wn)){var d=a.getTransitionDurationFromElement(this.tip);e(this.tip).one(a.TRANSITION_END,u).emulateTransitionEnd(d)}else u()}},n.hide=function(t){var n=this,i=this.getTipElement(),s=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==yn&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(s),!s.isDefaultPrevented()){if(e(i).removeClass(Dn),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger[Sn]=!1,this._activeTrigger[Tn]=!1,this._activeTrigger[xn]=!1,e(this.tip).hasClass(wn)){var r=a.getTransitionDurationFromElement(i);e(i).one(a.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){e(this.getTipElement()).addClass(dn+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},n.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(kn)),this.getTitle()),e(t).removeClass(wn+" "+Dn)},n.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=an(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},n.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},n._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=s({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},n._getContainer=function(){return!1===this.config.container?document.body:a.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},n._getAttachment=function(t){return gn[t.toUpperCase()]},n._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==En){var i=n===xn?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,s=n===xn?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(s,t.config.selector,function(e){return t._leave(e)})}}),e(this.element).closest(".modal").on("hide.bs.modal",function(){t.element&&t.hide()}),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?Tn:xn]=!0),e(n.getTipElement()).hasClass(Dn)||n._hoverState===yn?n._hoverState=yn:(clearTimeout(n._timeout),n._hoverState=yn,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===yn&&n.show()},n.config.delay.show):n.show())},n._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?Tn:xn]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=bn,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===bn&&n.hide()},n.config.delay.hide):n.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},n._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach(function(t){-1!==pn.indexOf(t)&&delete n[t]}),"number"==typeof(t=s({},this.constructor.Default,n,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a.typeCheckConfig(ln,t,this.constructor.DefaultType),t.sanitize&&(t.template=an(t.template,t.whiteList,t.sanitizeFn)),t},n._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},n._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(fn);null!==n&&n.length&&t.removeClass(n.join(""))},n._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(wn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(cn),s="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,s),e(this).data(cn,i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return vn}},{key:"NAME",get:function(){return ln}},{key:"DATA_KEY",get:function(){return cn}},{key:"Event",get:function(){return _n}},{key:"EVENT_KEY",get:function(){return hn}},{key:"DefaultType",get:function(){return mn}}]),t}();e.fn[ln]=Mn._jQueryInterface,e.fn[ln].Constructor=Mn,e.fn[ln].noConflict=function(){return e.fn[ln]=un,Mn._jQueryInterface};var An="popover",On="bs.popover",In="."+On,Nn=e.fn[An],Pn="bs-popover",Ln=new RegExp("(^|\\s)"+Pn+"\\S+","g"),jn=s({},Mn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Yn=s({},Mn.DefaultType,{content:"(string|element|function)"}),Hn="fade",$n="show",Rn=".popover-header",Wn=".popover-body",Un={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,INSERTED:"inserted"+In,CLICK:"click"+In,FOCUSIN:"focusin"+In,FOCUSOUT:"focusout"+In,MOUSEENTER:"mouseenter"+In,MOUSELEAVE:"mouseleave"+In},Fn=function(t){var n,s;function o(){return t.apply(this,arguments)||this}s=t,(n=o).prototype=Object.create(s.prototype),n.prototype.constructor=n,n.__proto__=s;var r=o.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass(Pn+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(Rn),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(Wn),n),t.removeClass(Hn+" "+$n)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Ln);null!==n&&n.length>0&&t.removeClass(n.join(""))},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(On),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data(On,n)),"string"==typeof t)){if(void 0===n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return jn}},{key:"NAME",get:function(){return An}},{key:"DATA_KEY",get:function(){return On}},{key:"Event",get:function(){return Un}},{key:"EVENT_KEY",get:function(){return In}},{key:"DefaultType",get:function(){return Yn}}]),o}(Mn);e.fn[An]=Fn._jQueryInterface,e.fn[An].Constructor=Fn,e.fn[An].noConflict=function(){return e.fn[An]=Nn,Fn._jQueryInterface};var qn="scrollspy",Vn="bs.scrollspy",Bn="."+Vn,zn=e.fn[qn],Gn={offset:10,method:"auto",target:""},Kn={offset:"number",method:"string",target:"(string|element)"},Qn={ACTIVATE:"activate"+Bn,SCROLL:"scroll"+Bn,LOAD_DATA_API:"load"+Bn+".data-api"},Zn="dropdown-item",Xn="active",Jn={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},ti="offset",ei="position",ni=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+Jn.NAV_LINKS+","+this._config.target+" "+Jn.LIST_ITEMS+","+this._config.target+" "+Jn.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(Qn.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?ti:ei,i="auto"===this._config.method?n:this._config.method,s=i===ei?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var n,o=a.getSelectorFromElement(t);if(o&&(n=document.querySelector(o)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+s,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},n.dispose=function(){e.removeData(this._element,Vn),e(this._scrollElement).off(Bn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=s({},Gn,"object"==typeof t&&t?t:{})).target){var n=e(t.target).attr("id");n||(n=a.getUID(qn),e(t.target).attr("id",n)),t.target="#"+n}return a.typeCheckConfig(qn,t,Kn),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&(void 0===this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(Zn)?(i.closest(Jn.DROPDOWN).find(Jn.DROPDOWN_TOGGLE).addClass(Xn),i.addClass(Xn)):(i.addClass(Xn),i.parents(Jn.NAV_LIST_GROUP).prev(Jn.NAV_LINKS+", "+Jn.LIST_ITEMS).addClass(Xn),i.parents(Jn.NAV_LIST_GROUP).prev(Jn.NAV_ITEMS).children(Jn.NAV_LINKS).addClass(Xn)),e(this._scrollElement).trigger(Qn.ACTIVATE,{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(Xn)}).forEach(function(t){return t.classList.remove(Xn)})},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data(Vn);if(i||(i=new t(this,"object"==typeof n&&n),e(this).data(Vn,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"');i[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Gn}}]),t}();e(window).on(Qn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(Jn.DATA_SPY)),n=t.length;n--;){var i=e(t[n]);ni._jQueryInterface.call(i,i.data())}}),e.fn[qn]=ni._jQueryInterface,e.fn[qn].Constructor=ni,e.fn[qn].noConflict=function(){return e.fn[qn]=zn,ni._jQueryInterface};var ii="bs.tab",si="."+ii,oi=e.fn.tab,ri={HIDE:"hide"+si,HIDDEN:"hidden"+si,SHOW:"show"+si,SHOWN:"shown"+si,CLICK_DATA_API:"click"+si+".data-api"},ai="dropdown-menu",li="active",ci="disabled",hi="fade",ui="show",di=".dropdown",fi=".nav, .list-group",pi=".active",mi="> li > .active",gi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',vi=".dropdown-toggle",yi="> .dropdown-menu .active",bi=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(li)||e(this._element).hasClass(ci))){var n,i,s=e(this._element).closest(fi)[0],o=a.getSelectorFromElement(this._element);if(s){var r="UL"===s.nodeName||"OL"===s.nodeName?mi:pi;i=(i=e.makeArray(e(s).find(r)))[i.length-1]}var l=e.Event(ri.HIDE,{relatedTarget:this._element}),c=e.Event(ri.SHOW,{relatedTarget:i});if(i&&e(i).trigger(l),e(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){o&&(n=document.querySelector(o)),this._activate(this._element,s);var h=function(){var n=e.Event(ri.HIDDEN,{relatedTarget:t._element}),s=e.Event(ri.SHOWN,{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(s)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,ii),this._element=null},n._activate=function(t,n,i){var s=this,o=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(pi):e(n).find(mi))[0],r=i&&o&&e(o).hasClass(hi),l=function(){return s._transitionComplete(t,o,i)};if(o&&r){var c=a.getTransitionDurationFromElement(o);e(o).removeClass(ui).one(a.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass(li);var s=e(n.parentNode).find(yi)[0];s&&e(s).removeClass(li),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(li),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),t.classList.contains(hi)&&t.classList.add(ui),t.parentNode&&e(t.parentNode).hasClass(ai)){var o=e(t).closest(di)[0];if(o){var r=[].slice.call(o.querySelectorAll(vi));e(r).addClass(li)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data(ii);if(s||(s=new t(this),i.data(ii,s)),"string"==typeof n){if(void 0===s[n])throw new TypeError('No method named "'+n+'"');s[n]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),t}();e(document).on(ri.CLICK_DATA_API,gi,function(t){t.preventDefault(),bi._jQueryInterface.call(e(this),"show")}),e.fn.tab=bi._jQueryInterface,e.fn.tab.Constructor=bi,e.fn.tab.noConflict=function(){return e.fn.tab=oi,bi._jQueryInterface};var _i="toast",wi="bs.toast",Di="."+wi,ki=e.fn[_i],Ci={CLICK_DISMISS:"click.dismiss"+Di,HIDE:"hide"+Di,HIDDEN:"hidden"+Di,SHOW:"show"+Di,SHOWN:"shown"+Di},xi="fade",Ti="hide",Si="show",Ei="showing",Mi={animation:"boolean",autohide:"boolean",delay:"number"},Ai={animation:!0,autohide:!0,delay:500},Oi='[data-dismiss="toast"]',Ii=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this;e(this._element).trigger(Ci.SHOW),this._config.animation&&this._element.classList.add(xi);var n=function(){t._element.classList.remove(Ei),t._element.classList.add(Si),e(t._element).trigger(Ci.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Ti),this._element.classList.add(Ei),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n.hide=function(t){var n=this;this._element.classList.contains(Si)&&(e(this._element).trigger(Ci.HIDE),t?this._close():this._timeout=setTimeout(function(){n._close()},this._config.delay))},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Si)&&this._element.classList.remove(Si),e(this._element).off(Ci.CLICK_DISMISS),e.removeData(this._element,wi),this._element=null,this._config=null},n._getConfig=function(t){return t=s({},Ai,e(this._element).data(),"object"==typeof t&&t?t:{}),a.typeCheckConfig(_i,t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on(Ci.CLICK_DISMISS,Oi,function(){return t.hide(!0)})},n._close=function(){var t=this,n=function(){t._element.classList.add(Ti),e(t._element).trigger(Ci.HIDDEN)};if(this._element.classList.remove(Si),this._config.animation){var i=a.getTransitionDurationFromElement(this._element);e(this._element).one(a.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data(wi);if(s||(s=new t(this,"object"==typeof n&&n),i.data(wi,s)),"string"==typeof n){if(void 0===s[n])throw new TypeError('No method named "'+n+'"');s[n](this)}})},i(t,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Mi}},{key:"Default",get:function(){return Ai}}]),t}();e.fn[_i]=Ii._jQueryInterface,e.fn[_i].Constructor=Ii,e.fn[_i].noConflict=function(){return e.fn[_i]=ki,Ii._jQueryInterface},function(){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=a,t.Alert=g,t.Button=O,t.Carousel=tt,t.Collapse=mt,t.Dropdown=Re,t.Modal=en,t.Popover=Fn,t.Scrollspy=ni,t.Tab=bi,t.Toast=Ii,t.Tooltip=Mn,Object.defineProperty(t,"__esModule",{value:!0})}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.moment=e()}(this,function(){"use strict";var t,e;function n(){return t.apply(null,arguments)}function i(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function s(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function o(t){return void 0===t}function r(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function a(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function l(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function c(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function h(t,e){for(var n in e)c(e,n)&&(t[n]=e[n]);return c(e,"toString")&&(t.toString=e.toString),c(e,"valueOf")&&(t.valueOf=e.valueOf),t}function u(t,e,n,i){return Se(t,e,n,i,!0).utc()}function d(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),t._pf}function f(t){if(null==t._isValid){var n=d(t),i=e.call(n.parsedDateParts,function(t){return null!=t}),s=!isNaN(t._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&i);if(t._strict&&(s=s&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return s;t._isValid=s}return t._isValid}function p(t){var e=u(NaN);return null!=t?h(d(e),t):d(e).userInvalidated=!0,e}e=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var m=n.momentProperties=[];function g(t,e){var n,i,s;if(o(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),o(e._i)||(t._i=e._i),o(e._f)||(t._f=e._f),o(e._l)||(t._l=e._l),o(e._strict)||(t._strict=e._strict),o(e._tzm)||(t._tzm=e._tzm),o(e._isUTC)||(t._isUTC=e._isUTC),o(e._offset)||(t._offset=e._offset),o(e._pf)||(t._pf=d(e)),o(e._locale)||(t._locale=e._locale),m.length>0)for(n=0;n<m.length;n++)o(s=e[i=m[n]])||(t[i]=s);return t}var v=!1;function y(t){g(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===v&&(v=!0,n.updateOffset(this),v=!1)}function b(t){return t instanceof y||null!=t&&null!=t._isAMomentObject}function _(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function w(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=_(e)),n}function D(t,e,n){var i,s=Math.min(t.length,e.length),o=Math.abs(t.length-e.length),r=0;for(i=0;i<s;i++)(n&&t[i]!==e[i]||!n&&w(t[i])!==w(e[i]))&&r++;return r+o}function k(t){!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function C(t,e){var i=!0;return h(function(){if(null!=n.deprecationHandler&&n.deprecationHandler(null,t),i){for(var s,o=[],r=0;r<arguments.length;r++){if(s="","object"==typeof arguments[r]){for(var a in s+="\n["+r+"] ",arguments[0])s+=a+": "+arguments[0][a]+", ";s=s.slice(0,-2)}else s=arguments[r];o.push(s)}k(t+"\nArguments: "+Array.prototype.slice.call(o).join("")+"\n"+(new Error).stack),i=!1}return e.apply(this,arguments)},e)}var x,T={};function S(t,e){null!=n.deprecationHandler&&n.deprecationHandler(t,e),T[t]||(k(e),T[t]=!0)}function E(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function M(t,e){var n,i=h({},t);for(n in e)c(e,n)&&(s(t[n])&&s(e[n])?(i[n]={},h(i[n],t[n]),h(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)c(t,n)&&!c(e,n)&&s(t[n])&&(i[n]=h({},i[n]));return i}function A(t){null!=t&&this.set(t)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,x=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)c(t,e)&&n.push(e);return n};var O={};function I(t,e){var n=t.toLowerCase();O[n]=O[n+"s"]=O[e]=t}function N(t){return"string"==typeof t?O[t]||O[t.toLowerCase()]:void 0}function P(t){var e,n,i={};for(n in t)c(t,n)&&(e=N(n))&&(i[e]=t[n]);return i}var L={};function j(t,e){L[t]=e}function Y(t,e,n){var i=""+Math.abs(t),s=e-i.length;return(t>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i}var H=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,$=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R={},W={};function U(t,e,n,i){var s=i;"string"==typeof i&&(s=function(){return this[i]()}),t&&(W[t]=s),e&&(W[e[0]]=function(){return Y(s.apply(this,arguments),e[1],e[2])}),n&&(W[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),t)})}function F(t,e){return t.isValid()?(e=q(e,t.localeData()),R[e]=R[e]||function(t){var e,n,i,s=t.match(H);for(e=0,n=s.length;e<n;e++)W[s[e]]?s[e]=W[s[e]]:s[e]=(i=s[e]).match(/\[[\s\S]/)?i.replace(/^\[|\]$/g,""):i.replace(/\\/g,"");return function(e){var i,o="";for(i=0;i<n;i++)o+=E(s[i])?s[i].call(e,t):s[i];return o}}(e),R[e](t)):t.localeData().invalidDate()}function q(t,e){var n=5;function i(t){return e.longDateFormat(t)||t}for($.lastIndex=0;n>=0&&$.test(t);)t=t.replace($,i),$.lastIndex=0,n-=1;return t}var V=/\d/,B=/\d\d/,z=/\d{3}/,G=/\d{4}/,K=/[+-]?\d{6}/,Q=/\d\d?/,Z=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,J=/\d{1,3}/,tt=/\d{1,4}/,et=/[+-]?\d{1,6}/,nt=/\d+/,it=/[+-]?\d+/,st=/Z|[+-]\d\d:?\d\d/gi,ot=/Z|[+-]\d\d(?::?\d\d)?/gi,rt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,at={};function lt(t,e,n){at[t]=E(e)?e:function(t,i){return t&&n?n:e}}function ct(t,e){return c(at,t)?at[t](e._strict,e._locale):new RegExp(ht(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,s){return e||n||i||s})))}function ht(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ut={};function dt(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),r(e)&&(i=function(t,n){n[e]=w(t)}),n=0;n<t.length;n++)ut[t[n]]=i}function ft(t,e){dt(t,function(t,n,i,s){i._w=i._w||{},e(t,i._w,i,s)})}var pt=0,mt=1,gt=2,vt=3,yt=4,bt=5,_t=6,wt=7,Dt=8;function kt(t){return Ct(t)?366:365}function Ct(t){return t%4==0&&t%100!=0||t%400==0}U("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),I("year","y"),j("year",1),lt("Y",it),lt("YY",Q,B),lt("YYYY",tt,G),lt("YYYYY",et,K),lt("YYYYYY",et,K),dt(["YYYYY","YYYYYY"],pt),dt("YYYY",function(t,e){e[pt]=2===t.length?n.parseTwoDigitYear(t):w(t)}),dt("YY",function(t,e){e[pt]=n.parseTwoDigitYear(t)}),dt("Y",function(t,e){e[pt]=parseInt(t,10)}),n.parseTwoDigitYear=function(t){return w(t)+(w(t)>68?1900:2e3)};var xt,Tt=St("FullYear",!0);function St(t,e){return function(i){return null!=i?(Mt(this,t,i),n.updateOffset(this,e),this):Et(this,t)}}function Et(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function Mt(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&Ct(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),At(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function At(t,e){if(isNaN(t)||isNaN(e))return NaN;var n,i=(e%(n=12)+n)%n;return t+=(e-i)/12,1===i?Ct(t)?29:28:31-i%7%2}xt=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),U("MMMM",0,0,function(t){return this.localeData().months(this,t)}),I("month","M"),j("month",8),lt("M",Q),lt("MM",Q,B),lt("MMM",function(t,e){return e.monthsShortRegex(t)}),lt("MMMM",function(t,e){return e.monthsRegex(t)}),dt(["M","MM"],function(t,e){e[mt]=w(t)-1}),dt(["MMM","MMMM"],function(t,e,n,i){var s=n._locale.monthsParse(t,i,n._strict);null!=s?e[mt]=s:d(n).invalidMonth=t});var Ot=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,It="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Nt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Pt(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=w(e);else if(!r(e=t.localeData().monthsParse(e)))return t;return n=Math.min(t.date(),At(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function Lt(t){return null!=t?(Pt(this,t),n.updateOffset(this,!0),this):Et(this,"Month")}var jt=rt;var Yt=rt;function Ht(){function t(t,e){return e.length-t.length}var e,n,i=[],s=[],o=[];for(e=0;e<12;e++)n=u([2e3,e]),i.push(this.monthsShort(n,"")),s.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(i.sort(t),s.sort(t),o.sort(t),e=0;e<12;e++)i[e]=ht(i[e]),s[e]=ht(s[e]);for(e=0;e<24;e++)o[e]=ht(o[e]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function $t(t){var e;if(t<100&&t>=0){var n=Array.prototype.slice.call(arguments);n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)}else e=new Date(Date.UTC.apply(null,arguments));return e}function Rt(t,e,n){var i=7+e-n;return-((7+$t(t,0,i).getUTCDay()-e)%7)+i-1}function Wt(t,e,n,i,s){var o,r,a=1+7*(e-1)+(7+n-i)%7+Rt(t,i,s);return a<=0?r=kt(o=t-1)+a:a>kt(t)?(o=t+1,r=a-kt(t)):(o=t,r=a),{year:o,dayOfYear:r}}function Ut(t,e,n){var i,s,o=Rt(t.year(),e,n),r=Math.floor((t.dayOfYear()-o-1)/7)+1;return r<1?i=r+Ft(s=t.year()-1,e,n):r>Ft(t.year(),e,n)?(i=r-Ft(t.year(),e,n),s=t.year()+1):(s=t.year(),i=r),{week:i,year:s}}function Ft(t,e,n){var i=Rt(t,e,n),s=Rt(t+1,e,n);return(kt(t)-i+s)/7}U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),I("week","w"),I("isoWeek","W"),j("week",5),j("isoWeek",5),lt("w",Q),lt("ww",Q,B),lt("W",Q),lt("WW",Q,B),ft(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=w(t)});function qt(t,e){return t.slice(e,7).concat(t.slice(0,e))}U("d",0,"do","day"),U("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),U("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),U("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),I("day","d"),I("weekday","e"),I("isoWeekday","E"),j("day",11),j("weekday",11),j("isoWeekday",11),lt("d",Q),lt("e",Q),lt("E",Q),lt("dd",function(t,e){return e.weekdaysMinRegex(t)}),lt("ddd",function(t,e){return e.weekdaysShortRegex(t)}),lt("dddd",function(t,e){return e.weekdaysRegex(t)}),ft(["dd","ddd","dddd"],function(t,e,n,i){var s=n._locale.weekdaysParse(t,i,n._strict);null!=s?e.d=s:d(n).invalidWeekday=t}),ft(["d","e","E"],function(t,e,n,i){e[i]=w(t)});var Vt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Bt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var zt="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var Gt=rt;var Kt=rt;var Qt=rt;function Zt(){function t(t,e){return e.length-t.length}var e,n,i,s,o,r=[],a=[],l=[],c=[];for(e=0;e<7;e++)n=u([2e3,1]).day(e),i=this.weekdaysMin(n,""),s=this.weekdaysShort(n,""),o=this.weekdays(n,""),r.push(i),a.push(s),l.push(o),c.push(i),c.push(s),c.push(o);for(r.sort(t),a.sort(t),l.sort(t),c.sort(t),e=0;e<7;e++)a[e]=ht(a[e]),l[e]=ht(l[e]),c[e]=ht(c[e]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Xt(){return this.hours()%12||12}function Jt(t,e){U(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function te(t,e){return e._meridiemParse}U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Xt),U("k",["kk",2],0,function(){return this.hours()||24}),U("hmm",0,0,function(){return""+Xt.apply(this)+Y(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Xt.apply(this)+Y(this.minutes(),2)+Y(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+Y(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+Y(this.minutes(),2)+Y(this.seconds(),2)}),Jt("a",!0),Jt("A",!1),I("hour","h"),j("hour",13),lt("a",te),lt("A",te),lt("H",Q),lt("h",Q),lt("k",Q),lt("HH",Q,B),lt("hh",Q,B),lt("kk",Q,B),lt("hmm",Z),lt("hmmss",X),lt("Hmm",Z),lt("Hmmss",X),dt(["H","HH"],vt),dt(["k","kk"],function(t,e,n){var i=w(t);e[vt]=24===i?0:i}),dt(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),dt(["h","hh"],function(t,e,n){e[vt]=w(t),d(n).bigHour=!0}),dt("hmm",function(t,e,n){var i=t.length-2;e[vt]=w(t.substr(0,i)),e[yt]=w(t.substr(i)),d(n).bigHour=!0}),dt("hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[vt]=w(t.substr(0,i)),e[yt]=w(t.substr(i,2)),e[bt]=w(t.substr(s)),d(n).bigHour=!0}),dt("Hmm",function(t,e,n){var i=t.length-2;e[vt]=w(t.substr(0,i)),e[yt]=w(t.substr(i))}),dt("Hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[vt]=w(t.substr(0,i)),e[yt]=w(t.substr(i,2)),e[bt]=w(t.substr(s))});var ee,ne=St("Hours",!0),ie={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:It,monthsShort:Nt,week:{dow:0,doy:6},weekdays:Vt,weekdaysMin:zt,weekdaysShort:Bt,meridiemParse:/[ap]\.?m?\.?/i},se={},oe={};function re(t){return t?t.toLowerCase().replace("_","-"):t}function ae(t){var e=null;if(!se[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=ee._abbr,require("./locale/"+t),le(e)}catch(t){}return se[t]}function le(t,e){var n;return t&&((n=o(e)?he(t):ce(t,e))?ee=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),ee._abbr}function ce(t,e){if(null!==e){var n,i=ie;if(e.abbr=t,null!=se[t])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=se[t]._config;else if(null!=e.parentLocale)if(null!=se[e.parentLocale])i=se[e.parentLocale]._config;else{if(null==(n=ae(e.parentLocale)))return oe[e.parentLocale]||(oe[e.parentLocale]=[]),oe[e.parentLocale].push({name:t,config:e}),null;i=n._config}return se[t]=new A(M(i,e)),oe[t]&&oe[t].forEach(function(t){ce(t.name,t.config)}),le(t),se[t]}return delete se[t],null}function he(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return ee;if(!i(t)){if(e=ae(t))return e;t=[t]}return function(t){for(var e,n,i,s,o=0;o<t.length;){for(e=(s=re(t[o]).split("-")).length,n=(n=re(t[o+1]))?n.split("-"):null;e>0;){if(i=ae(s.slice(0,e).join("-")))return i;if(n&&n.length>=e&&D(s,n,!0)>=e-1)break;e--}o++}return ee}(t)}function ue(t){var e,n=t._a;return n&&-2===d(t).overflow&&(e=n[mt]<0||n[mt]>11?mt:n[gt]<1||n[gt]>At(n[pt],n[mt])?gt:n[vt]<0||n[vt]>24||24===n[vt]&&(0!==n[yt]||0!==n[bt]||0!==n[_t])?vt:n[yt]<0||n[yt]>59?yt:n[bt]<0||n[bt]>59?bt:n[_t]<0||n[_t]>999?_t:-1,d(t)._overflowDayOfYear&&(e<pt||e>gt)&&(e=gt),d(t)._overflowWeeks&&-1===e&&(e=wt),d(t)._overflowWeekday&&-1===e&&(e=Dt),d(t).overflow=e),t}function de(t,e,n){return null!=t?t:null!=e?e:n}function fe(t){var e,i,s,o,r,a=[];if(!t._d){var l,c;for(l=t,c=new Date(n.now()),s=l._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()],t._w&&null==t._a[gt]&&null==t._a[mt]&&function(t){var e,n,i,s,o,r,a,l;if(null!=(e=t._w).GG||null!=e.W||null!=e.E)o=1,r=4,n=de(e.GG,t._a[pt],Ut(Ee(),1,4).year),i=de(e.W,1),((s=de(e.E,1))<1||s>7)&&(l=!0);else{o=t._locale._week.dow,r=t._locale._week.doy;var c=Ut(Ee(),o,r);n=de(e.gg,t._a[pt],c.year),i=de(e.w,c.week),null!=e.d?((s=e.d)<0||s>6)&&(l=!0):null!=e.e?(s=e.e+o,(e.e<0||e.e>6)&&(l=!0)):s=o}i<1||i>Ft(n,o,r)?d(t)._overflowWeeks=!0:null!=l?d(t)._overflowWeekday=!0:(a=Wt(n,i,s,o,r),t._a[pt]=a.year,t._dayOfYear=a.dayOfYear)}(t),null!=t._dayOfYear&&(r=de(t._a[pt],s[pt]),(t._dayOfYear>kt(r)||0===t._dayOfYear)&&(d(t)._overflowDayOfYear=!0),i=$t(r,0,t._dayOfYear),t._a[mt]=i.getUTCMonth(),t._a[gt]=i.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=a[e]=s[e];for(;e<7;e++)t._a[e]=a[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[vt]&&0===t._a[yt]&&0===t._a[bt]&&0===t._a[_t]&&(t._nextDay=!0,t._a[vt]=0),t._d=(t._useUTC?$t:function(t,e,n,i,s,o,r){var a;return t<100&&t>=0?(a=new Date(t+400,e,n,i,s,o,r),isFinite(a.getFullYear())&&a.setFullYear(t)):a=new Date(t,e,n,i,s,o,r),a}).apply(null,a),o=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[vt]=24),t._w&&void 0!==t._w.d&&t._w.d!==o&&(d(t).weekdayMismatch=!0)}}var pe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,me=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ge=/Z|[+-]\d\d(?::?\d\d)?/,ve=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ye=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],be=/^\/?Date\((\-?\d+)/i;function _e(t){var e,n,i,s,o,r,a=t._i,l=pe.exec(a)||me.exec(a);if(l){for(d(t).iso=!0,e=0,n=ve.length;e<n;e++)if(ve[e][1].exec(l[1])){s=ve[e][0],i=!1!==ve[e][2];break}if(null==s)return void(t._isValid=!1);if(l[3]){for(e=0,n=ye.length;e<n;e++)if(ye[e][1].exec(l[3])){o=(l[2]||" ")+ye[e][0];break}if(null==o)return void(t._isValid=!1)}if(!i&&null!=o)return void(t._isValid=!1);if(l[4]){if(!ge.exec(l[4]))return void(t._isValid=!1);r="Z"}t._f=s+(o||"")+(r||""),xe(t)}else t._isValid=!1}var we=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function De(t,e,n,i,s,o){var r=[function(t){var e=parseInt(t,10);{if(e<=49)return 2e3+e;if(e<=999)return 1900+e}return e}(t),Nt.indexOf(e),parseInt(n,10),parseInt(i,10),parseInt(s,10)];return o&&r.push(parseInt(o,10)),r}var ke={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ce(t){var e,n,i,s=we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(s){var o=De(s[4],s[3],s[2],s[5],s[6],s[7]);if(e=s[1],n=o,i=t,e&&Bt.indexOf(e)!==new Date(n[0],n[1],n[2]).getDay()&&(d(i).weekdayMismatch=!0,i._isValid=!1,1))return;t._a=o,t._tzm=function(t,e,n){if(t)return ke[t];if(e)return 0;var i=parseInt(n,10),s=i%100;return(i-s)/100*60+s}(s[8],s[9],s[10]),t._d=$t.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),d(t).rfc2822=!0}else t._isValid=!1}function xe(t){if(t._f!==n.ISO_8601)if(t._f!==n.RFC_2822){t._a=[],d(t).empty=!0;var e,i,s,o,r,a,l,h,u=""+t._i,f=u.length,p=0;for(s=q(t._f,t._locale).match(H)||[],e=0;e<s.length;e++)o=s[e],(i=(u.match(ct(o,t))||[])[0])&&((r=u.substr(0,u.indexOf(i))).length>0&&d(t).unusedInput.push(r),u=u.slice(u.indexOf(i)+i.length),p+=i.length),W[o]?(i?d(t).empty=!1:d(t).unusedTokens.push(o),a=o,h=t,null!=(l=i)&&c(ut,a)&&ut[a](l,h._a,h,a)):t._strict&&!i&&d(t).unusedTokens.push(o);d(t).charsLeftOver=f-p,u.length>0&&d(t).unusedInput.push(u),t._a[vt]<=12&&!0===d(t).bigHour&&t._a[vt]>0&&(d(t).bigHour=void 0),d(t).parsedDateParts=t._a.slice(0),d(t).meridiem=t._meridiem,t._a[vt]=function(t,e,n){var i;if(null==n)return e;return null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?((i=t.isPM(n))&&e<12&&(e+=12),i||12!==e||(e=0),e):e}(t._locale,t._a[vt],t._meridiem),fe(t),ue(t)}else Ce(t);else _e(t)}function Te(t){var e,c,u,m,v=t._i,_=t._f;return t._locale=t._locale||he(t._l),null===v||void 0===_&&""===v?p({nullInput:!0}):("string"==typeof v&&(t._i=v=t._locale.preparse(v)),b(v)?new y(ue(v)):(a(v)?t._d=v:i(_)?function(t){var e,n,i,s,o;if(0===t._f.length)return d(t).invalidFormat=!0,void(t._d=new Date(NaN));for(s=0;s<t._f.length;s++)o=0,e=g({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[s],xe(e),f(e)&&(o+=d(e).charsLeftOver,o+=10*d(e).unusedTokens.length,d(e).score=o,(null==i||o<i)&&(i=o,n=e));h(t,n||e)}(t):_?xe(t):o(c=(e=t)._i)?e._d=new Date(n.now()):a(c)?e._d=new Date(c.valueOf()):"string"==typeof c?(u=e,null===(m=be.exec(u._i))?(_e(u),!1===u._isValid&&(delete u._isValid,Ce(u),!1===u._isValid&&(delete u._isValid,n.createFromInputFallback(u)))):u._d=new Date(+m[1])):i(c)?(e._a=l(c.slice(0),function(t){return parseInt(t,10)}),fe(e)):s(c)?function(t){if(!t._d){var e=P(t._i);t._a=l([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),fe(t)}}(e):r(c)?e._d=new Date(c):n.createFromInputFallback(e),f(t)||(t._d=null),t))}function Se(t,e,n,o,r){var a,l={};return!0!==n&&!1!==n||(o=n,n=void 0),(s(t)&&function(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}(t)||i(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=r,l._l=n,l._i=t,l._f=e,l._strict=o,(a=new y(ue(Te(l))))._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function Ee(t,e,n,i){return Se(t,e,n,i,!1)}n.createFromInputFallback=C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),n.ISO_8601=function(){},n.RFC_2822=function(){};var Me=C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Ee.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:p()}),Ae=C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Ee.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:p()});function Oe(t,e){var n,s;if(1===e.length&&i(e[0])&&(e=e[0]),!e.length)return Ee();for(n=e[0],s=1;s<e.length;++s)e[s].isValid()&&!e[s][t](n)||(n=e[s]);return n}var Ie=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ne(t){var e=P(t),n=e.year||0,i=e.quarter||0,s=e.month||0,o=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,l=e.minute||0,c=e.second||0,h=e.millisecond||0;this._isValid=function(t){for(var e in t)if(-1===xt.call(Ie,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,i=0;i<Ie.length;++i)if(t[Ie[i]]){if(n)return!1;parseFloat(t[Ie[i]])!==w(t[Ie[i]])&&(n=!0)}return!0}(e),this._milliseconds=+h+1e3*c+6e4*l+1e3*a*60*60,this._days=+r+7*o,this._months=+s+3*i+12*n,this._data={},this._locale=he(),this._bubble()}function Pe(t){return t instanceof Ne}function Le(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function je(t,e){U(t,0,0,function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+Y(~~(t/60),2)+e+Y(~~t%60,2)})}je("Z",":"),je("ZZ",""),lt("Z",ot),lt("ZZ",ot),dt(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=He(ot,t)});var Ye=/([\+\-]|\d\d)/gi;function He(t,e){var n=(e||"").match(t);if(null===n)return null;var i=((n[n.length-1]||[])+"").match(Ye)||["-",0,0],s=60*i[1]+w(i[2]);return 0===s?0:"+"===i[0]?s:-s}function $e(t,e){var i,s;return e._isUTC?(i=e.clone(),s=(b(t)||a(t)?t.valueOf():Ee(t).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+s),n.updateOffset(i,!1),i):Ee(t).local()}function Re(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function We(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}n.updateOffset=function(){};var Ue=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Fe=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function qe(t,e){var n,i,s,o=t,a=null;return Pe(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:r(t)?(o={},e?o[e]=t:o.milliseconds=t):(a=Ue.exec(t))?(n="-"===a[1]?-1:1,o={y:0,d:w(a[gt])*n,h:w(a[vt])*n,m:w(a[yt])*n,s:w(a[bt])*n,ms:w(Le(1e3*a[_t]))*n}):(a=Fe.exec(t))?(n="-"===a[1]?-1:1,o={y:Ve(a[2],n),M:Ve(a[3],n),w:Ve(a[4],n),d:Ve(a[5],n),h:Ve(a[6],n),m:Ve(a[7],n),s:Ve(a[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(s=function(t,e){var n;if(!t.isValid()||!e.isValid())return{milliseconds:0,months:0};e=$e(e,t),t.isBefore(e)?n=Be(t,e):((n=Be(e,t)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Ee(o.from),Ee(o.to)),(o={}).ms=s.milliseconds,o.M=s.months),i=new Ne(o),Pe(t)&&c(t,"_locale")&&(i._locale=t._locale),i}function Ve(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Be(t,e){var n={};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function ze(t,e){return function(n,i){var s;return null===i||isNaN(+i)||(S(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=i,i=s),Ge(this,qe(n="string"==typeof n?+n:n,i),t),this}}function Ge(t,e,i,s){var o=e._milliseconds,r=Le(e._days),a=Le(e._months);t.isValid()&&(s=null==s||s,a&&Pt(t,Et(t,"Month")+a*i),r&&Mt(t,"Date",Et(t,"Date")+r*i),o&&t._d.setTime(t._d.valueOf()+o*i),s&&n.updateOffset(t,r||a))}qe.fn=Ne.prototype,qe.invalid=function(){return qe(NaN)};var Ke=ze(1,"add"),Qe=ze(-1,"subtract");function Ze(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,"months");return-(n+(e-i<0?(e-i)/(i-t.clone().add(n-1,"months")):(e-i)/(t.clone().add(n+1,"months")-i)))||0}function Xe(t){var e;return void 0===t?this._locale._abbr:(null!=(e=he(t))&&(this._locale=e),this)}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Je=C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});function tn(){return this._locale}var en=1e3,nn=60*en,sn=60*nn,on=3506328*sn;function rn(t,e){return(t%e+e)%e}function an(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-on:new Date(t,e,n).valueOf()}function ln(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-on:Date.UTC(t,e,n)}function cn(t,e){U(0,[t,t.length],0,e)}function hn(t,e,n,i,s){var o;return null==t?Ut(this,i,s).year:(e>(o=Ft(t,i,s))&&(e=o),function(t,e,n,i,s){var o=Wt(t,e,n,i,s),r=$t(o.year,0,o.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}.call(this,t,e,n,i,s))}U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),cn("gggg","weekYear"),cn("ggggg","weekYear"),cn("GGGG","isoWeekYear"),cn("GGGGG","isoWeekYear"),I("weekYear","gg"),I("isoWeekYear","GG"),j("weekYear",1),j("isoWeekYear",1),lt("G",it),lt("g",it),lt("GG",Q,B),lt("gg",Q,B),lt("GGGG",tt,G),lt("gggg",tt,G),lt("GGGGG",et,K),lt("ggggg",et,K),ft(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=w(t)}),ft(["gg","GG"],function(t,e,i,s){e[s]=n.parseTwoDigitYear(t)}),U("Q",0,"Qo","quarter"),I("quarter","Q"),j("quarter",7),lt("Q",V),dt("Q",function(t,e){e[mt]=3*(w(t)-1)}),U("D",["DD",2],"Do","date"),I("date","D"),j("date",9),lt("D",Q),lt("DD",Q,B),lt("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),dt(["D","DD"],gt),dt("Do",function(t,e){e[gt]=w(t.match(Q)[0])});var un=St("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),I("dayOfYear","DDD"),j("dayOfYear",4),lt("DDD",J),lt("DDDD",z),dt(["DDD","DDDD"],function(t,e,n){n._dayOfYear=w(t)}),U("m",["mm",2],0,"minute"),I("minute","m"),j("minute",14),lt("m",Q),lt("mm",Q,B),dt(["m","mm"],yt);var dn=St("Minutes",!1);U("s",["ss",2],0,"second"),I("second","s"),j("second",15),lt("s",Q),lt("ss",Q,B),dt(["s","ss"],bt);var fn,pn=St("Seconds",!1);for(U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),I("millisecond","ms"),j("millisecond",16),lt("S",J,V),lt("SS",J,B),lt("SSS",J,z),fn="SSSS";fn.length<=9;fn+="S")lt(fn,nt);function mn(t,e){e[_t]=w(1e3*("0."+t))}for(fn="S";fn.length<=9;fn+="S")dt(fn,mn);var gn=St("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var vn=y.prototype;function yn(t){return t}vn.add=Ke,vn.calendar=function(t,e){var i=t||Ee(),s=$e(i,this).startOf("day"),o=n.calendarFormat(this,s)||"sameElse",r=e&&(E(e[o])?e[o].call(this,i):e[o]);return this.format(r||this.localeData().calendar(o,this,Ee(i)))},vn.clone=function(){return new y(this)},vn.diff=function(t,e,n){var i,s,o;if(!this.isValid())return NaN;if(!(i=$e(t,this)).isValid())return NaN;switch(s=6e4*(i.utcOffset()-this.utcOffset()),e=N(e)){case"year":o=Ze(this,i)/12;break;case"month":o=Ze(this,i);break;case"quarter":o=Ze(this,i)/3;break;case"second":o=(this-i)/1e3;break;case"minute":o=(this-i)/6e4;break;case"hour":o=(this-i)/36e5;break;case"day":o=(this-i-s)/864e5;break;case"week":o=(this-i-s)/6048e5;break;default:o=this-i}return n?o:_(o)},vn.endOf=function(t){var e;if(void 0===(t=N(t))||"millisecond"===t||!this.isValid())return this;var i=this._isUTC?ln:an;switch(t){case"year":e=i(this.year()+1,0,1)-1;break;case"quarter":e=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=i(this.year(),this.month()+1,1)-1;break;case"week":e=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=sn-rn(e+(this._isUTC?0:this.utcOffset()*nn),sn)-1;break;case"minute":e=this._d.valueOf(),e+=nn-rn(e,nn)-1;break;case"second":e=this._d.valueOf(),e+=en-rn(e,en)-1}return this._d.setTime(e),n.updateOffset(this,!0),this},vn.format=function(t){t||(t=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var e=F(this,t);return this.localeData().postformat(e)},vn.from=function(t,e){return this.isValid()&&(b(t)&&t.isValid()||Ee(t).isValid())?qe({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},vn.fromNow=function(t){return this.from(Ee(),t)},vn.to=function(t,e){return this.isValid()&&(b(t)&&t.isValid()||Ee(t).isValid())?qe({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},vn.toNow=function(t){return this.to(Ee(),t)},vn.get=function(t){return E(this[t=N(t)])?this[t]():this},vn.invalidAt=function(){return d(this).overflow},vn.isAfter=function(t,e){var n=b(t)?t:Ee(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=N(e)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())},vn.isBefore=function(t,e){var n=b(t)?t:Ee(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=N(e)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())},vn.isBetween=function(t,e,n,i){var s=b(t)?t:Ee(t),o=b(e)?e:Ee(e);return!!(this.isValid()&&s.isValid()&&o.isValid())&&("("===(i=i||"()")[0]?this.isAfter(s,n):!this.isBefore(s,n))&&(")"===i[1]?this.isBefore(o,n):!this.isAfter(o,n))},vn.isSame=function(t,e){var n,i=b(t)?t:Ee(t);return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=N(e)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))},vn.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)},vn.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)},vn.isValid=function(){return f(this)},vn.lang=Je,vn.locale=Xe,vn.localeData=tn,vn.max=Ae,vn.min=Me,vn.parsingFlags=function(){return h({},d(this))},vn.set=function(t,e){if("object"==typeof t)for(var n=function(t){var e=[];for(var n in t)e.push({unit:n,priority:L[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}(t=P(t)),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit]);else if(E(this[t=N(t)]))return this[t](e);return this},vn.startOf=function(t){var e;if(void 0===(t=N(t))||"millisecond"===t||!this.isValid())return this;var i=this._isUTC?ln:an;switch(t){case"year":e=i(this.year(),0,1);break;case"quarter":e=i(this.year(),this.month()-this.month()%3,1);break;case"month":e=i(this.year(),this.month(),1);break;case"week":e=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=i(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=rn(e+(this._isUTC?0:this.utcOffset()*nn),sn);break;case"minute":e=this._d.valueOf(),e-=rn(e,nn);break;case"second":e=this._d.valueOf(),e-=rn(e,en)}return this._d.setTime(e),n.updateOffset(this,!0),this},vn.subtract=Qe,vn.toArray=function(){return[this.year(),this.month(),this.date(),this.hour(),this.minute(),this.second(),this.millisecond()]},vn.toObject=function(){return{years:this.year(),months:this.month(),date:this.date(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()}},vn.toDate=function(){return new Date(this.valueOf())},vn.toISOString=function(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?F(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):E(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",F(n,"Z")):F(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},vn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s=e+'[")]';return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+s)},vn.toJSON=function(){return this.isValid()?this.toISOString():null},vn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},vn.unix=function(){return Math.floor(this.valueOf()/1e3)},vn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},vn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},vn.year=Tt,vn.isLeapYear=function(){return Ct(this.year())},vn.weekYear=function(t){return hn.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},vn.isoWeekYear=function(t){return hn.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)},vn.quarter=vn.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},vn.month=Lt,vn.daysInMonth=function(){return At(this.year(),this.month())},vn.week=vn.weeks=function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},vn.isoWeek=vn.isoWeeks=function(t){var e=Ut(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},vn.weeksInYear=function(){var t=this.localeData()._week;return Ft(this.year(),t.dow,t.doy)},vn.isoWeeksInYear=function(){return Ft(this.year(),1,4)},vn.date=un,vn.day=vn.days=function(t){if(!this.isValid())return null!=t?this:NaN;var e,n,i=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(e=t,n=this.localeData(),t="string"!=typeof e?e:isNaN(e)?"number"==typeof(e=n.weekdaysParse(e))?e:null:parseInt(e,10),this.add(t-i,"d")):i},vn.weekday=function(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},vn.isoWeekday=function(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=(n=t,i=this.localeData(),"string"==typeof n?i.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?e:e-7)}return this.day()||7;var n,i},vn.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},vn.hour=vn.hours=ne,vn.minute=vn.minutes=dn,vn.second=vn.seconds=pn,vn.millisecond=vn.milliseconds=gn,vn.utcOffset=function(t,e,i){var s,o=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=He(ot,t)))return this}else Math.abs(t)<16&&!i&&(t*=60);return!this._isUTC&&e&&(s=Re(this)),this._offset=t,this._isUTC=!0,null!=s&&this.add(s,"m"),o!==t&&(!e||this._changeInProgress?Ge(this,qe(t-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?o:Re(this)},vn.utc=function(t){return this.utcOffset(0,t)},vn.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Re(this),"m")),this},vn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=He(st,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this},vn.hasAlignedHourOffset=function(t){return!!this.isValid()&&(t=t?Ee(t).utcOffset():0,(this.utcOffset()-t)%60==0)},vn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},vn.isLocal=function(){return!!this.isValid()&&!this._isUTC},vn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},vn.isUtc=We,vn.isUTC=We,vn.zoneAbbr=function(){return this._isUTC?"UTC":""},vn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},vn.dates=C("dates accessor is deprecated. Use date instead.",un),vn.months=C("months accessor is deprecated. Use month instead",Lt),vn.years=C("years accessor is deprecated. Use year instead",Tt),vn.zone=C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}),vn.isDSTShifted=C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var t={};if(g(t,this),(t=Te(t))._a){var e=t._isUTC?u(t._a):Ee(t._a);this._isDSTShifted=this.isValid()&&D(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var bn=A.prototype;function _n(t,e,n,i){var s=he(),o=u().set(i,e);return s[n](o,t)}function wn(t,e,n){if(r(t)&&(e=t,t=void 0),t=t||"",null!=e)return _n(t,e,n,"month");var i,s=[];for(i=0;i<12;i++)s[i]=_n(t,i,n,"month");return s}function Dn(t,e,n,i){"boolean"==typeof t?(r(e)&&(n=e,e=void 0),e=e||""):(n=e=t,t=!1,r(e)&&(n=e,e=void 0),e=e||"");var s,o=he(),a=t?o._week.dow:0;if(null!=n)return _n(e,(n+a)%7,i,"day");var l=[];for(s=0;s<7;s++)l[s]=_n(e,(s+a)%7,i,"day");return l}bn.calendar=function(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return E(i)?i.call(e,n):i},bn.longDateFormat=function(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])},bn.invalidDate=function(){return this._invalidDate},bn.ordinal=function(t){return this._ordinal.replace("%d",t)},bn.preparse=yn,bn.postformat=yn,bn.relativeTime=function(t,e,n,i){var s=this._relativeTime[n];return E(s)?s(t,e,n,i):s.replace(/%d/i,t)},bn.pastFuture=function(t,e){var n=this._relativeTime[t>0?"future":"past"];return E(n)?n(e):n.replace(/%s/i,e)},bn.set=function(t){var e,n;for(n in t)E(e=t[n])?this[n]=e:this["_"+n]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},bn.months=function(t,e){return t?i(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Ot).test(e)?"format":"standalone"][t.month()]:i(this._months)?this._months:this._months.standalone},bn.monthsShort=function(t,e){return t?i(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Ot.test(e)?"format":"standalone"][t.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},bn.monthsParse=function(t,e,n){var i,s,o;if(this._monthsParseExact)return function(t,e,n){var i,s,o,r=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)o=u([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===e?-1!==(s=xt.call(this._shortMonthsParse,r))?s:null:-1!==(s=xt.call(this._longMonthsParse,r))?s:null:"MMM"===e?-1!==(s=xt.call(this._shortMonthsParse,r))?s:-1!==(s=xt.call(this._longMonthsParse,r))?s:null:-1!==(s=xt.call(this._longMonthsParse,r))?s:-1!==(s=xt.call(this._shortMonthsParse,r))?s:null}.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(s=u([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(o="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}},bn.monthsRegex=function(t){return this._monthsParseExact?(c(this,"_monthsRegex")||Ht.call(this),t?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=Yt),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)},bn.monthsShortRegex=function(t){return this._monthsParseExact?(c(this,"_monthsRegex")||Ht.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=jt),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)},bn.week=function(t){return Ut(t,this._week.dow,this._week.doy).week},bn.firstDayOfYear=function(){return this._week.doy},bn.firstDayOfWeek=function(){return this._week.dow},bn.weekdays=function(t,e){var n=i(this._weekdays)?this._weekdays:this._weekdays[t&&!0!==t&&this._weekdays.isFormat.test(e)?"format":"standalone"];return!0===t?qt(n,this._week.dow):t?n[t.day()]:n},bn.weekdaysMin=function(t){return!0===t?qt(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin},bn.weekdaysShort=function(t){return!0===t?qt(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort},bn.weekdaysParse=function(t,e,n){var i,s,o;if(this._weekdaysParseExact)return function(t,e,n){var i,s,o,r=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)o=u([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===e?-1!==(s=xt.call(this._weekdaysParse,r))?s:null:"ddd"===e?-1!==(s=xt.call(this._shortWeekdaysParse,r))?s:null:-1!==(s=xt.call(this._minWeekdaysParse,r))?s:null:"dddd"===e?-1!==(s=xt.call(this._weekdaysParse,r))?s:-1!==(s=xt.call(this._shortWeekdaysParse,r))?s:-1!==(s=xt.call(this._minWeekdaysParse,r))?s:null:"ddd"===e?-1!==(s=xt.call(this._shortWeekdaysParse,r))?s:-1!==(s=xt.call(this._weekdaysParse,r))?s:-1!==(s=xt.call(this._minWeekdaysParse,r))?s:null:-1!==(s=xt.call(this._minWeekdaysParse,r))?s:-1!==(s=xt.call(this._weekdaysParse,r))?s:-1!==(s=xt.call(this._shortWeekdaysParse,r))?s:null}.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(s=u([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(o="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[i]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}},bn.weekdaysRegex=function(t){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Zt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Gt),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)},bn.weekdaysShortRegex=function(t){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Zt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Kt),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},bn.weekdaysMinRegex=function(t){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Zt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Qt),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},bn.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},bn.meridiem=function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},le("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===w(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),n.lang=C("moment.lang is deprecated. Use moment.locale instead.",le),n.langData=C("moment.langData is deprecated. Use moment.localeData instead.",he);var kn=Math.abs;function Cn(t,e,n,i){var s=qe(e,n);return t._milliseconds+=i*s._milliseconds,t._days+=i*s._days,t._months+=i*s._months,t._bubble()}function xn(t){return t<0?Math.floor(t):Math.ceil(t)}function Tn(t){return 4800*t/146097}function Sn(t){return 146097*t/4800}function En(t){return function(){return this.as(t)}}var Mn=En("ms"),An=En("s"),On=En("m"),In=En("h"),Nn=En("d"),Pn=En("w"),Ln=En("M"),jn=En("Q"),Yn=En("y");function Hn(t){return function(){return this.isValid()?this._data[t]:NaN}}var $n=Hn("milliseconds"),Rn=Hn("seconds"),Wn=Hn("minutes"),Un=Hn("hours"),Fn=Hn("days"),qn=Hn("months"),Vn=Hn("years");var Bn=Math.round,zn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Kn(t){return(t>0)-(t<0)||+t}function Qn(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n=Gn(this._milliseconds)/1e3,i=Gn(this._days),s=Gn(this._months);e=_((t=_(n/60))/60),n%=60,t%=60;var o=_(s/12),r=s%=12,a=i,l=e,c=t,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",u=this.asSeconds();if(!u)return"P0D";var d=u<0?"-":"",f=Kn(this._months)!==Kn(u)?"-":"",p=Kn(this._days)!==Kn(u)?"-":"",m=Kn(this._milliseconds)!==Kn(u)?"-":"";return d+"P"+(o?f+o+"Y":"")+(r?f+r+"M":"")+(a?p+a+"D":"")+(l||c||h?"T":"")+(l?m+l+"H":"")+(c?m+c+"M":"")+(h?m+h+"S":"")}var Zn=Ne.prototype;return Zn.isValid=function(){return this._isValid},Zn.abs=function(){var t=this._data;return this._milliseconds=kn(this._milliseconds),this._days=kn(this._days),this._months=kn(this._months),t.milliseconds=kn(t.milliseconds),t.seconds=kn(t.seconds),t.minutes=kn(t.minutes),t.hours=kn(t.hours),t.months=kn(t.months),t.years=kn(t.years),this},Zn.add=function(t,e){return Cn(this,t,e,1)},Zn.subtract=function(t,e){return Cn(this,t,e,-1)},Zn.as=function(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if("month"===(t=N(t))||"quarter"===t||"year"===t)switch(e=this._days+i/864e5,n=this._months+Tn(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(Sn(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}},Zn.asMilliseconds=Mn,Zn.asSeconds=An,Zn.asMinutes=On,Zn.asHours=In,Zn.asDays=Nn,Zn.asWeeks=Pn,Zn.asMonths=Ln,Zn.asQuarters=jn,Zn.asYears=Yn,Zn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN},Zn._bubble=function(){var t,e,n,i,s,o=this._milliseconds,r=this._days,a=this._months,l=this._data;return o>=0&&r>=0&&a>=0||o<=0&&r<=0&&a<=0||(o+=864e5*xn(Sn(a)+r),r=0,a=0),l.milliseconds=o%1e3,t=_(o/1e3),l.seconds=t%60,e=_(t/60),l.minutes=e%60,n=_(e/60),l.hours=n%24,a+=s=_(Tn(r+=_(n/24))),r-=xn(Sn(s)),i=_(a/12),a%=12,l.days=r,l.months=a,l.years=i,this},Zn.clone=function(){return qe(this)},Zn.get=function(t){return t=N(t),this.isValid()?this[t+"s"]():NaN},Zn.milliseconds=$n,Zn.seconds=Rn,Zn.minutes=Wn,Zn.hours=Un,Zn.days=Fn,Zn.weeks=function(){return _(this.days()/7)},Zn.months=qn,Zn.years=Vn,Zn.humanize=function(t){if(!this.isValid())return this.localeData().invalidDate();var e,n,i,s,o,r,a,l,c,h,u,d=this.localeData(),f=(n=!t,i=d,s=qe(e=this).abs(),o=Bn(s.as("s")),r=Bn(s.as("m")),a=Bn(s.as("h")),l=Bn(s.as("d")),c=Bn(s.as("M")),h=Bn(s.as("y")),(u=o<=zn.ss&&["s",o]||o<zn.s&&["ss",o]||r<=1&&["m"]||r<zn.m&&["mm",r]||a<=1&&["h"]||a<zn.h&&["hh",a]||l<=1&&["d"]||l<zn.d&&["dd",l]||c<=1&&["M"]||c<zn.M&&["MM",c]||h<=1&&["y"]||["yy",h])[2]=n,u[3]=+e>0,u[4]=i,function(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}.apply(null,u));return t&&(f=d.pastFuture(+this,f)),d.postformat(f)},Zn.toISOString=Qn,Zn.toString=Qn,Zn.toJSON=Qn,Zn.locale=Xe,Zn.localeData=tn,Zn.toIsoString=C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Qn),Zn.lang=Je,U("X",0,0,"unix"),U("x",0,0,"valueOf"),lt("x",it),lt("X",/[+-]?\d+(\.\d{1,3})?/),dt("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),dt("x",function(t,e,n){n._d=new Date(w(t))}),n.version="2.24.0",t=Ee,n.fn=vn,n.min=function(){return Oe("isBefore",[].slice.call(arguments,0))},n.max=function(){return Oe("isAfter",[].slice.call(arguments,0))},n.now=function(){return Date.now?Date.now():+new Date},n.utc=u,n.unix=function(t){return Ee(1e3*t)},n.months=function(t,e){return wn(t,e,"months")},n.isDate=a,n.locale=le,n.invalid=p,n.duration=qe,n.isMoment=b,n.weekdays=function(t,e,n){return Dn(t,e,n,"weekdays")},n.parseZone=function(){return Ee.apply(null,arguments).parseZone()},n.localeData=he,n.isDuration=Pe,n.monthsShort=function(t,e){return wn(t,e,"monthsShort")},n.weekdaysMin=function(t,e,n){return Dn(t,e,n,"weekdaysMin")},n.defineLocale=ce,n.updateLocale=function(t,e){if(null!=e){var n,i,s=ie;null!=(i=ae(t))&&(s=i._config),(n=new A(e=M(s,e))).parentLocale=se[t],se[t]=n,le(t)}else null!=se[t]&&(null!=se[t].parentLocale?se[t]=se[t].parentLocale:null!=se[t]&&delete se[t]);return se[t]},n.locales=function(){return x(se)},n.weekdaysShort=function(t,e,n){return Dn(t,e,n,"weekdaysShort")},n.normalizeUnits=N,n.relativeTimeRounding=function(t){return void 0===t?Bn:"function"==typeof t&&(Bn=t,!0)},n.relativeTimeThreshold=function(t,e){return void 0!==zn[t]&&(void 0===e?zn[t]:(zn[t]=e,"s"===t&&(zn.ss=e-1),!0))},n.calendarFormat=function(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},n.prototype=vn,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},n}),function(e){e.fn.extend({slimScroll:function(n){var i=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},n);return this.each(function(){var s,o,r,a,l,c,h,u,d="<div></div>",f=30,p=!1,m=e(this);if(m.parent().hasClass(i.wrapperClass)){var g=m.scrollTop();if(D=m.siblings("."+i.barClass),w=m.siblings("."+i.railClass),T(),e.isPlainObject(n)){if("height"in n&&"auto"==n.height){m.parent().css("height","auto"),m.css("height","auto");var v=m.parent().parent().height();m.parent().css("height",v),m.css("height",v)}else if("height"in n){var y=n.height;m.parent().css("height",y),m.css("height",y)}if("scrollTo"in n)g=parseInt(i.scrollTo);else if("scrollBy"in n)g+=parseInt(i.scrollBy);else if("destroy"in n)return D.remove(),w.remove(),void m.unwrap();x(g,!1,!0)}}else if(!(e.isPlainObject(n)&&"destroy"in n)){i.height="auto"==i.height?m.parent().height():i.height;var b=e(d).addClass(i.wrapperClass).css({position:"relative",overflow:"hidden",width:i.width,height:i.height});m.css({overflow:"hidden",width:i.width,height:i.height});var _,w=e(d).addClass(i.railClass).css({width:i.size,height:"100%",position:"absolute",top:0,display:i.alwaysVisible&&i.railVisible?"block":"none","border-radius":i.railBorderRadius,background:i.railColor,opacity:i.railOpacity,zIndex:90}),D=e(d).addClass(i.barClass).css({background:i.color,width:i.size,position:"absolute",top:0,opacity:i.opacity,display:i.alwaysVisible?"block":"none","border-radius":i.borderRadius,BorderRadius:i.borderRadius,MozBorderRadius:i.borderRadius,WebkitBorderRadius:i.borderRadius,zIndex:99}),k="right"==i.position?{right:i.distance}:{left:i.distance};w.css(k),D.css(k),m.wrap(b),m.parent().append(D),m.parent().append(w),i.railDraggable&&D.bind("mousedown",function(n){var i=e(document);return r=!0,t=parseFloat(D.css("top")),pageY=n.pageY,i.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,D.css("top",currTop),x(0,D.position().top,!1)}),i.bind("mouseup.slimscroll",function(t){r=!1,E(),i.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(t){return t.stopPropagation(),t.preventDefault(),!1}),w.hover(function(){S()},function(){E()}),D.hover(function(){o=!0},function(){o=!1}),m.hover(function(){s=!0,S(),E()},function(){s=!1,E()}),m.bind("touchstart",function(t,e){t.originalEvent.touches.length&&(l=t.originalEvent.touches[0].pageY)}),m.bind("touchmove",function(t){(p||t.originalEvent.preventDefault(),t.originalEvent.touches.length)&&(x((l-t.originalEvent.touches[0].pageY)/i.touchScrollStep,!0),l=t.originalEvent.touches[0].pageY)}),T(),"bottom"===i.start?(D.css({top:m.outerHeight()-D.outerHeight()}),x(0,!0)):"top"!==i.start&&(x(e(i.start).position().top,null,!0),i.alwaysVisible||D.hide()),_=this,window.addEventListener?(_.addEventListener("DOMMouseScroll",C,!1),_.addEventListener("mousewheel",C,!1)):document.attachEvent("onmousewheel",C)}function C(t){if(s){var n=0;(t=t||window.event).wheelDelta&&(n=-t.wheelDelta/120),t.detail&&(n=t.detail/3);var o=t.target||t.srcTarget||t.srcElement;e(o).closest("."+i.wrapperClass).is(m.parent())&&x(n,!0),t.preventDefault&&!p&&t.preventDefault(),p||(t.returnValue=!1)}}function x(t,e,n){p=!1;var s=t,o=m.outerHeight()-D.outerHeight();if(e&&(s=parseInt(D.css("top"))+t*parseInt(i.wheelStep)/100*D.outerHeight(),s=Math.min(Math.max(s,0),o),s=t>0?Math.ceil(s):Math.floor(s),D.css({top:s+"px"})),s=(h=parseInt(D.css("top"))/(m.outerHeight()-D.outerHeight()))*(m[0].scrollHeight-m.outerHeight()),n){var r=(s=t)/m[0].scrollHeight*m.outerHeight();r=Math.min(Math.max(r,0),o),D.css({top:r+"px"})}m.scrollTop(s),m.trigger("slimscrolling",~~s),S(),E()}function T(){c=Math.max(m.outerHeight()/m[0].scrollHeight*m.outerHeight(),f),D.css({height:c+"px"});var t=c==m.outerHeight()?"none":"block";D.css({display:t})}function S(){if(T(),clearTimeout(a),h==~~h){if(p=i.allowPageScroll,u!=h){var t=0==~~h?"top":"bottom";m.trigger("slimscroll",t)}}else p=!1;u=h,c>=m.outerHeight()?p=!0:(D.stop(!0,!0).fadeIn("fast"),i.railVisible&&w.stop(!0,!0).fadeIn("fast"))}function E(){i.alwaysVisible||(a=setTimeout(function(){i.disableFadeOut&&s||o||r||(D.fadeOut("slow"),w.fadeOut("slow"))},1e3))}}),this}}),e.fn.extend({slimscroll:e.fn.slimScroll})}(jQuery),function(t,e){if("function"==typeof define&&define.amd)define(["moment","jquery"],function(t,n){return n.fn||(n.fn={}),e(t,n)});else if("object"==typeof module&&module.exports){var n="undefined"!=typeof window?window.jQuery:void 0;n||(n=require("jquery")).fn||(n.fn={});var i="undefined"!=typeof window&&void 0!==window.moment?window.moment:require("moment");module.exports=e(i,n)}else t.daterangepicker=e(t.moment,t.jQuery)}(this,function(t,e){var n=function(n,i,s){if(this.parentEl="body",this.element=e(n),this.startDate=t().startOf("day"),this.endDate=t().endOf("day"),this.minDate=!1,this.maxDate=!1,this.maxSpan=!1,this.autoApply=!1,this.singleDatePicker=!1,this.showDropdowns=!1,this.minYear=t().subtract(100,"year").format("YYYY"),this.maxYear=t().add(100,"year").format("YYYY"),this.showWeekNumbers=!1,this.showISOWeekNumbers=!1,this.showCustomRangeLabel=!0,this.timePicker=!1,this.timePicker24Hour=!1,this.timePickerIncrement=1,this.timePickerSeconds=!1,this.linkedCalendars=!0,this.autoUpdateInput=!0,this.alwaysShowCalendars=!1,this.ranges={},this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.drops="down",this.element.hasClass("dropup")&&(this.drops="up"),this.buttonClasses="btn btn-sm",this.applyButtonClasses="btn-primary",this.cancelButtonClasses="btn-default",this.locale={direction:"ltr",format:t.localeData().longDateFormat("L"),separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:t.weekdaysMin(),monthNames:t.monthsShort(),firstDay:t.localeData().firstDayOfWeek()},this.callback=function(){},this.isShowing=!1,this.leftCalendar={},this.rightCalendar={},"object"==typeof i&&null!==i||(i={}),"string"==typeof(i=e.extend(this.element.data(),i)).template||i.template instanceof e||(i.template='<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),this.parentEl=i.parentEl&&e(i.parentEl).length?e(i.parentEl):e(this.parentEl),this.container=e(i.template).appendTo(this.parentEl),"object"==typeof i.locale&&("string"==typeof i.locale.direction&&(this.locale.direction=i.locale.direction),"string"==typeof i.locale.format&&(this.locale.format=i.locale.format),"string"==typeof i.locale.separator&&(this.locale.separator=i.locale.separator),"object"==typeof i.locale.daysOfWeek&&(this.locale.daysOfWeek=i.locale.daysOfWeek.slice()),"object"==typeof i.locale.monthNames&&(this.locale.monthNames=i.locale.monthNames.slice()),"number"==typeof i.locale.firstDay&&(this.locale.firstDay=i.locale.firstDay),"string"==typeof i.locale.applyLabel&&(this.locale.applyLabel=i.locale.applyLabel),"string"==typeof i.locale.cancelLabel&&(this.locale.cancelLabel=i.locale.cancelLabel),"string"==typeof i.locale.weekLabel&&(this.locale.weekLabel=i.locale.weekLabel),"string"==typeof i.locale.customRangeLabel)){(f=document.createElement("textarea")).innerHTML=i.locale.customRangeLabel;var o=f.value;this.locale.customRangeLabel=o}if(this.container.addClass(this.locale.direction),"string"==typeof i.startDate&&(this.startDate=t(i.startDate,this.locale.format)),"string"==typeof i.endDate&&(this.endDate=t(i.endDate,this.locale.format)),"string"==typeof i.minDate&&(this.minDate=t(i.minDate,this.locale.format)),"string"==typeof i.maxDate&&(this.maxDate=t(i.maxDate,this.locale.format)),"object"==typeof i.startDate&&(this.startDate=t(i.startDate)),"object"==typeof i.endDate&&(this.endDate=t(i.endDate)),"object"==typeof i.minDate&&(this.minDate=t(i.minDate)),"object"==typeof i.maxDate&&(this.maxDate=t(i.maxDate)),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),"string"==typeof i.applyButtonClasses&&(this.applyButtonClasses=i.applyButtonClasses),"string"==typeof i.applyClass&&(this.applyButtonClasses=i.applyClass),"string"==typeof i.cancelButtonClasses&&(this.cancelButtonClasses=i.cancelButtonClasses),"string"==typeof i.cancelClass&&(this.cancelButtonClasses=i.cancelClass),"object"==typeof i.maxSpan&&(this.maxSpan=i.maxSpan),"object"==typeof i.dateLimit&&(this.maxSpan=i.dateLimit),"string"==typeof i.opens&&(this.opens=i.opens),"string"==typeof i.drops&&(this.drops=i.drops),"boolean"==typeof i.showWeekNumbers&&(this.showWeekNumbers=i.showWeekNumbers),"boolean"==typeof i.showISOWeekNumbers&&(this.showISOWeekNumbers=i.showISOWeekNumbers),"string"==typeof i.buttonClasses&&(this.buttonClasses=i.buttonClasses),"object"==typeof i.buttonClasses&&(this.buttonClasses=i.buttonClasses.join(" ")),"boolean"==typeof i.showDropdowns&&(this.showDropdowns=i.showDropdowns),"number"==typeof i.minYear&&(this.minYear=i.minYear),"number"==typeof i.maxYear&&(this.maxYear=i.maxYear),"boolean"==typeof i.showCustomRangeLabel&&(this.showCustomRangeLabel=i.showCustomRangeLabel),"boolean"==typeof i.singleDatePicker&&(this.singleDatePicker=i.singleDatePicker,this.singleDatePicker&&(this.endDate=this.startDate.clone())),"boolean"==typeof i.timePicker&&(this.timePicker=i.timePicker),"boolean"==typeof i.timePickerSeconds&&(this.timePickerSeconds=i.timePickerSeconds),"number"==typeof i.timePickerIncrement&&(this.timePickerIncrement=i.timePickerIncrement),"boolean"==typeof i.timePicker24Hour&&(this.timePicker24Hour=i.timePicker24Hour),"boolean"==typeof i.autoApply&&(this.autoApply=i.autoApply),"boolean"==typeof i.autoUpdateInput&&(this.autoUpdateInput=i.autoUpdateInput),"boolean"==typeof i.linkedCalendars&&(this.linkedCalendars=i.linkedCalendars),"function"==typeof i.isInvalidDate&&(this.isInvalidDate=i.isInvalidDate),"function"==typeof i.isCustomDate&&(this.isCustomDate=i.isCustomDate),"boolean"==typeof i.alwaysShowCalendars&&(this.alwaysShowCalendars=i.alwaysShowCalendars),0!=this.locale.firstDay)for(var r=this.locale.firstDay;r>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),r--;var a,l,c;if(void 0===i.startDate&&void 0===i.endDate&&e(this.element).is(":text")){var h=e(this.element).val(),u=h.split(this.locale.separator);a=l=null,2==u.length?(a=t(u[0],this.locale.format),l=t(u[1],this.locale.format)):this.singleDatePicker&&""!==h&&(a=t(h,this.locale.format),l=t(h,this.locale.format)),null!==a&&null!==l&&(this.setStartDate(a),this.setEndDate(l))}if("object"==typeof i.ranges){for(c in i.ranges){a="string"==typeof i.ranges[c][0]?t(i.ranges[c][0],this.locale.format):t(i.ranges[c][0]),l="string"==typeof i.ranges[c][1]?t(i.ranges[c][1],this.locale.format):t(i.ranges[c][1]),this.minDate&&a.isBefore(this.minDate)&&(a=this.minDate.clone());var d=this.maxDate;if(this.maxSpan&&d&&a.clone().add(this.maxSpan).isAfter(d)&&(d=a.clone().add(this.maxSpan)),d&&l.isAfter(d)&&(l=d.clone()),!(this.minDate&&l.isBefore(this.minDate,this.timepicker?"minute":"day")||d&&a.isAfter(d,this.timepicker?"minute":"day"))){var f;(f=document.createElement("textarea")).innerHTML=c;o=f.value;this.ranges[o]=[a,l]}}var p="<ul>";for(c in this.ranges)p+='<li data-range-key="'+c+'">'+c+"</li>";this.showCustomRangeLabel&&(p+='<li data-range-key="'+this.locale.customRangeLabel+'">'+this.locale.customRangeLabel+"</li>"),p+="</ul>",this.container.find(".ranges").prepend(p)}"function"==typeof s&&(this.callback=s),this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"),this.container.find(".calendar-time").hide()),this.timePicker&&this.autoApply&&(this.autoApply=!1),this.autoApply&&this.container.addClass("auto-apply"),"object"==typeof i.ranges&&this.container.addClass("show-ranges"),this.singleDatePicker&&(this.container.addClass("single"),this.container.find(".drp-calendar.left").addClass("single"),this.container.find(".drp-calendar.left").show(),this.container.find(".drp-calendar.right").hide(),this.timePicker||this.container.addClass("auto-apply")),(void 0===i.ranges&&!this.singleDatePicker||this.alwaysShowCalendars)&&this.container.addClass("show-calendar"),this.container.addClass("opens"+this.opens),this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),this.applyButtonClasses.length&&this.container.find(".applyBtn").addClass(this.applyButtonClasses),this.cancelButtonClasses.length&&this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),this.container.find(".applyBtn").html(this.locale.applyLabel),this.container.find(".cancelBtn").html(this.locale.cancelLabel),this.container.find(".drp-calendar").on("click.daterangepicker",".prev",e.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",e.proxy(this.clickNext,this)).on("mousedown.daterangepicker","td.available",e.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",e.proxy(this.hoverDate,this)).on("change.daterangepicker","select.yearselect",e.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",e.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",e.proxy(this.timeChanged,this)),this.container.find(".ranges").on("click.daterangepicker","li",e.proxy(this.clickRange,this)),this.container.find(".drp-buttons").on("click.daterangepicker","button.applyBtn",e.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",e.proxy(this.clickCancel,this)),this.element.is("input")||this.element.is("button")?this.element.on({"click.daterangepicker":e.proxy(this.show,this),"focus.daterangepicker":e.proxy(this.show,this),"keyup.daterangepicker":e.proxy(this.elementChanged,this),"keydown.daterangepicker":e.proxy(this.keydown,this)}):(this.element.on("click.daterangepicker",e.proxy(this.toggle,this)),this.element.on("keydown.daterangepicker",e.proxy(this.toggle,this))),this.updateElement()};return n.prototype={constructor:n,setStartDate:function(e){"string"==typeof e&&(this.startDate=t(e,this.locale.format)),"object"==typeof e&&(this.startDate=t(e)),this.timePicker||(this.startDate=this.startDate.startOf("day")),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.maxDate&&this.startDate.isAfter(this.maxDate)&&(this.startDate=this.maxDate.clone(),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.floor(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement)),this.isShowing||this.updateElement(),this.updateMonthsInView()},setEndDate:function(e){"string"==typeof e&&(this.endDate=t(e,this.locale.format)),"object"==typeof e&&(this.endDate=t(e)),this.timePicker||(this.endDate=this.endDate.add(1,"d").startOf("day").subtract(1,"second")),this.timePicker&&this.timePickerIncrement&&this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.endDate.isBefore(this.startDate)&&(this.endDate=this.startDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),this.maxSpan&&this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)&&(this.endDate=this.startDate.clone().add(this.maxSpan)),this.previousRightTime=this.endDate.clone(),this.container.find(".drp-selected").html(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.isShowing||this.updateElement(),this.updateMonthsInView()},isInvalidDate:function(){return!1},isCustomDate:function(){return!1},updateView:function(){this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"),this.endDate?this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled"):this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")),this.endDate&&this.container.find(".drp-selected").html(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.updateMonthsInView(),this.updateCalendars(),this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM")))return;this.leftCalendar.month=this.startDate.clone().date(2),this.linkedCalendars||this.endDate.month()==this.startDate.month()&&this.endDate.year()==this.startDate.year()?this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"):this.rightCalendar.month=this.endDate.clone().date(2)}else this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&(this.leftCalendar.month=this.startDate.clone().date(2),this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"));this.maxDate&&this.linkedCalendars&&!this.singleDatePicker&&this.rightCalendar.month>this.maxDate&&(this.rightCalendar.month=this.maxDate.clone().date(2),this.leftCalendar.month=this.maxDate.clone().date(2).subtract(1,"month"))},updateCalendars:function(){if(this.timePicker){var t,e,n,i;if(this.endDate){if(t=parseInt(this.container.find(".left .hourselect").val(),10),e=parseInt(this.container.find(".left .minuteselect").val(),10),n=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".left .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0)}else if(t=parseInt(this.container.find(".right .hourselect").val(),10),e=parseInt(this.container.find(".right .minuteselect").val(),10),n=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0,!this.timePicker24Hour)"PM"===(i=this.container.find(".right .ampmselect").val())&&t<12&&(t+=12),"AM"===i&&12===t&&(t=0);this.leftCalendar.month.hour(t).minute(e).second(n),this.rightCalendar.month.hour(t).minute(e).second(n)}this.renderCalendar("left"),this.renderCalendar("right"),this.container.find(".ranges li").removeClass("active"),null!=this.endDate&&this.calculateChosenLabel()},renderCalendar:function(n){var i,s=(i="left"==n?this.leftCalendar:this.rightCalendar).month.month(),o=i.month.year(),r=i.month.hour(),a=i.month.minute(),l=i.month.second(),c=t([o,s]).daysInMonth(),h=t([o,s,1]),u=t([o,s,c]),d=t(h).subtract(1,"month").month(),f=t(h).subtract(1,"month").year(),p=t([f,d]).daysInMonth(),m=h.day();(i=[]).firstDay=h,i.lastDay=u;for(var g=0;g<6;g++)i[g]=[];var v=p-m+this.locale.firstDay+1;v>p&&(v-=7),m==this.locale.firstDay&&(v=p-6);for(var y=t([f,d,v,12,a,l]),b=(g=0,0),_=0;g<42;g++,b++,y=t(y).add(24,"hour"))g>0&&b%7==0&&(b=0,_++),i[_][b]=y.clone().hour(r).minute(a).second(l),y.hour(12),this.minDate&&i[_][b].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&i[_][b].isBefore(this.minDate)&&"left"==n&&(i[_][b]=this.minDate.clone()),this.maxDate&&i[_][b].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&i[_][b].isAfter(this.maxDate)&&"right"==n&&(i[_][b]=this.maxDate.clone());"left"==n?this.leftCalendar.calendar=i:this.rightCalendar.calendar=i;var w="left"==n?this.minDate:this.startDate,D=this.maxDate,k=("left"==n?this.startDate:this.endDate,this.locale.direction,'<table class="table-condensed">');k+="<thead>",k+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(k+="<th></th>"),w&&!w.isBefore(i.firstDay)||this.linkedCalendars&&"left"!=n?k+="<th></th>":k+='<th class="prev available"><span></span></th>';var C=this.locale.monthNames[i[1][1].month()]+i[1][1].format(" YYYY");if(this.showDropdowns){for(var x=i[1][1].month(),T=i[1][1].year(),S=D&&D.year()||this.maxYear,E=w&&w.year()||this.minYear,M=T==E,A=T==S,O='<select class="monthselect">',I=0;I<12;I++)(!M||I>=w.month())&&(!A||I<=D.month())?O+="<option value='"+I+"'"+(I===x?" selected='selected'":"")+">"+this.locale.monthNames[I]+"</option>":O+="<option value='"+I+"'"+(I===x?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[I]+"</option>";O+="</select>";for(var N='<select class="yearselect">',P=E;P<=S;P++)N+='<option value="'+P+'"'+(P===T?' selected="selected"':"")+">"+P+"</option>";C=O+(N+="</select>")}if(k+='<th colspan="5" class="month">'+C+"</th>",D&&!D.isAfter(i.lastDay)||this.linkedCalendars&&"right"!=n&&!this.singleDatePicker?k+="<th></th>":k+='<th class="next available"><span></span></th>',k+="</tr>",k+="<tr>",(this.showWeekNumbers||this.showISOWeekNumbers)&&(k+='<th class="week">'+this.locale.weekLabel+"</th>"),e.each(this.locale.daysOfWeek,function(t,e){k+="<th>"+e+"</th>"}),k+="</tr>",k+="</thead>",k+="<tbody>",null==this.endDate&&this.maxSpan){var L=this.startDate.clone().add(this.maxSpan).endOf("day");D&&!L.isBefore(D)||(D=L)}for(_=0;_<6;_++){k+="<tr>",this.showWeekNumbers?k+='<td class="week">'+i[_][0].week()+"</td>":this.showISOWeekNumbers&&(k+='<td class="week">'+i[_][0].isoWeek()+"</td>");for(b=0;b<7;b++){var j=[];i[_][b].isSame(new Date,"day")&&j.push("today"),i[_][b].isoWeekday()>5&&j.push("weekend"),i[_][b].month()!=i[1][1].month()&&j.push("off"),this.minDate&&i[_][b].isBefore(this.minDate,"day")&&j.push("off","disabled"),D&&i[_][b].isAfter(D,"day")&&j.push("off","disabled"),this.isInvalidDate(i[_][b])&&j.push("off","disabled"),i[_][b].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&j.push("active","start-date"),null!=this.endDate&&i[_][b].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&j.push("active","end-date"),null!=this.endDate&&i[_][b]>this.startDate&&i[_][b]<this.endDate&&j.push("in-range");var Y=this.isCustomDate(i[_][b]);!1!==Y&&("string"==typeof Y?j.push(Y):Array.prototype.push.apply(j,Y));var H="",$=!1;for(g=0;g<j.length;g++)H+=j[g]+" ","disabled"==j[g]&&($=!0);$||(H+="available"),k+='<td class="'+H.replace(/^\s+|\s+$/g,"")+'" data-title="r'+_+"c"+b+'">'+i[_][b].date()+"</td>"}k+="</tr>"}k+="</tbody>",k+="</table>",this.container.find(".drp-calendar."+n+" .calendar-table").html(k)},renderTimePicker:function(t){if("right"!=t||this.endDate){var e,n,i,s=this.maxDate;if(!this.maxSpan||this.maxDate&&!this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate)||(s=this.startDate.clone().add(this.maxSpan)),"left"==t)n=this.startDate.clone(),i=this.minDate;else if("right"==t){n=this.endDate.clone(),i=this.startDate;var o=this.container.find(".drp-calendar.right .calendar-time");if(""!=o.html()&&(n.hour(n.hour()||o.find(".hourselect option:selected").val()),n.minute(n.minute()||o.find(".minuteselect option:selected").val()),n.second(n.second()||o.find(".secondselect option:selected").val()),!this.timePicker24Hour)){var r=o.find(".ampmselect option:selected").val();"PM"===r&&n.hour()<12&&n.hour(n.hour()+12),"AM"===r&&12===n.hour()&&n.hour(0)}n.isBefore(this.startDate)&&(n=this.startDate.clone()),s&&n.isAfter(s)&&(n=s.clone())}e='<select class="hourselect">';for(var a=this.timePicker24Hour?0:1,l=this.timePicker24Hour?23:12,c=a;c<=l;c++){var h=c;this.timePicker24Hour||(h=n.hour()>=12?12==c?12:c+12:12==c?0:c);var u=n.clone().hour(h),d=!1;i&&u.minute(59).isBefore(i)&&(d=!0),s&&u.minute(0).isAfter(s)&&(d=!0),h!=n.hour()||d?e+=d?'<option value="'+c+'" disabled="disabled" class="disabled">'+c+"</option>":'<option value="'+c+'">'+c+"</option>":e+='<option value="'+c+'" selected="selected">'+c+"</option>"}e+="</select> ",e+=': <select class="minuteselect">';for(c=0;c<60;c+=this.timePickerIncrement){var f=c<10?"0"+c:c;u=n.clone().minute(c),d=!1;i&&u.second(59).isBefore(i)&&(d=!0),s&&u.second(0).isAfter(s)&&(d=!0),n.minute()!=c||d?e+=d?'<option value="'+c+'" disabled="disabled" class="disabled">'+f+"</option>":'<option value="'+c+'">'+f+"</option>":e+='<option value="'+c+'" selected="selected">'+f+"</option>"}if(e+="</select> ",this.timePickerSeconds){e+=': <select class="secondselect">';for(c=0;c<60;c++){f=c<10?"0"+c:c,u=n.clone().second(c),d=!1;i&&u.isBefore(i)&&(d=!0),s&&u.isAfter(s)&&(d=!0),n.second()!=c||d?e+=d?'<option value="'+c+'" disabled="disabled" class="disabled">'+f+"</option>":'<option value="'+c+'">'+f+"</option>":e+='<option value="'+c+'" selected="selected">'+f+"</option>"}e+="</select> "}if(!this.timePicker24Hour){e+='<select class="ampmselect">';var p="",m="";i&&n.clone().hour(12).minute(0).second(0).isBefore(i)&&(p=' disabled="disabled" class="disabled"'),s&&n.clone().hour(0).minute(0).second(0).isAfter(s)&&(m=' disabled="disabled" class="disabled"'),n.hour()>=12?e+='<option value="AM"'+p+'>AM</option><option value="PM" selected="selected"'+m+">PM</option>":e+='<option value="AM" selected="selected"'+p+'>AM</option><option value="PM"'+m+">PM</option>",e+="</select>"}this.container.find(".drp-calendar."+t+" .calendar-time").html(e)}},updateFormInputs:function(){this.singleDatePicker||this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate))?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled")},move:function(){var t,n={top:0,left:0},i=e(window).width();this.parentEl.is("body")||(n={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()},i=this.parentEl[0].clientWidth+this.parentEl.offset().left),t="up"==this.drops?this.element.offset().top-this.container.outerHeight()-n.top:this.element.offset().top+this.element.outerHeight()-n.top,this.container["up"==this.drops?"addClass":"removeClass"]("drop-up"),"left"==this.opens?(this.container.css({top:t,right:i-this.element.offset().left-this.element.outerWidth(),left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):"center"==this.opens?(this.container.css({top:t,left:this.element.offset().left-n.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:t,left:this.element.offset().left-n.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>e(window).width()&&this.container.css({left:"auto",right:0}))},show:function(t){this.isShowing||(this._outsideClickProxy=e.proxy(function(t){this.outsideClick(t)},this),e(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),e(window).on("resize.daterangepicker",e.proxy(function(t){this.move(t)},this)),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.previousRightTime=this.endDate.clone(),this.updateView(),this.container.show(),this.move(),this.element.trigger("show.daterangepicker",this),this.isShowing=!0)},hide:function(t){this.isShowing&&(this.endDate||(this.startDate=this.oldStartDate.clone(),this.endDate=this.oldEndDate.clone()),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.callback(this.startDate.clone(),this.endDate.clone(),this.chosenLabel),this.updateElement(),e(document).off(".daterangepicker"),e(window).off(".daterangepicker"),this.container.hide(),this.element.trigger("hide.daterangepicker",this),this.isShowing=!1)},toggle:function(t){this.isShowing?this.hide():this.show()},outsideClick:function(t){var n=e(t.target);"focusin"==t.type||n.closest(this.element).length||n.closest(this.container).length||n.closest(".calendar-table").length||(this.hide(),this.element.trigger("outsideClick.daterangepicker",this))},showCalendars:function(){this.container.addClass("show-calendar"),this.move(),this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar"),this.element.trigger("hideCalendar.daterangepicker",this)},clickRange:function(t){var e=t.target.getAttribute("data-range-key");if(this.chosenLabel=e,e==this.locale.customRangeLabel)this.showCalendars();else{var n=this.ranges[e];this.startDate=n[0],this.endDate=n[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.alwaysShowCalendars||this.hideCalendars(),this.clickApply()}},clickPrev:function(t){e(t.target).parents(".drp-calendar").hasClass("left")?(this.leftCalendar.month.subtract(1,"month"),this.linkedCalendars&&this.rightCalendar.month.subtract(1,"month")):this.rightCalendar.month.subtract(1,"month"),this.updateCalendars()},clickNext:function(t){e(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.month.add(1,"month"):(this.rightCalendar.month.add(1,"month"),this.linkedCalendars&&this.leftCalendar.month.add(1,"month")),this.updateCalendars()},hoverDate:function(t){if(e(t.target).hasClass("available")){var n=e(t.target).attr("data-title"),i=n.substr(1,1),s=n.substr(3,1),o=e(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.calendar[i][s]:this.rightCalendar.calendar[i][s],r=this.leftCalendar,a=this.rightCalendar,l=this.startDate;this.endDate||this.container.find(".drp-calendar tbody td").each(function(t,n){if(!e(n).hasClass("week")){var i=e(n).attr("data-title"),s=i.substr(1,1),c=i.substr(3,1),h=e(n).parents(".drp-calendar").hasClass("left")?r.calendar[s][c]:a.calendar[s][c];h.isAfter(l)&&h.isBefore(o)||h.isSame(o,"day")?e(n).addClass("in-range"):e(n).removeClass("in-range")}})}},clickDate:function(t){if(e(t.target).hasClass("available")){var n=e(t.target).attr("data-title"),i=n.substr(1,1),s=n.substr(3,1),o=e(t.target).parents(".drp-calendar").hasClass("left")?this.leftCalendar.calendar[i][s]:this.rightCalendar.calendar[i][s];if(this.endDate||o.isBefore(this.startDate,"day")){if(this.timePicker){var r=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(c=this.container.find(".left .ampmselect").val())&&r<12&&(r+=12),"AM"===c&&12===r&&(r=0);var a=parseInt(this.container.find(".left .minuteselect").val(),10),l=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;o=o.clone().hour(r).minute(a).second(l)}this.endDate=null,this.setStartDate(o.clone())}else if(!this.endDate&&o.isBefore(this.startDate))this.setEndDate(this.startDate.clone());else{if(this.timePicker){var c;r=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour)"PM"===(c=this.container.find(".right .ampmselect").val())&&r<12&&(r+=12),"AM"===c&&12===r&&(r=0);a=parseInt(this.container.find(".right .minuteselect").val(),10),l=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;o=o.clone().hour(r).minute(a).second(l)}this.setEndDate(o.clone()),this.autoApply&&(this.calculateChosenLabel(),this.clickApply())}this.singleDatePicker&&(this.setEndDate(this.startDate),this.timePicker||this.clickApply()),this.updateView(),t.stopPropagation()}},calculateChosenLabel:function(){var t=!0,e=0;for(var n in this.ranges){if(this.timePicker){var i=this.timePickerSeconds?"YYYY-MM-DD hh:mm:ss":"YYYY-MM-DD hh:mm";if(this.startDate.format(i)==this.ranges[n][0].format(i)&&this.endDate.format(i)==this.ranges[n][1].format(i)){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").attr("data-range-key");break}}else if(this.startDate.format("YYYY-MM-DD")==this.ranges[n][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[n][1].format("YYYY-MM-DD")){t=!1,this.chosenLabel=this.container.find(".ranges li:eq("+e+")").addClass("active").attr("data-range-key");break}e++}t&&(this.showCustomRangeLabel?this.chosenLabel=this.container.find(".ranges li:last").addClass("active").attr("data-range-key"):this.chosenLabel=null,this.showCalendars())},clickApply:function(t){this.hide(),this.element.trigger("apply.daterangepicker",this)},clickCancel:function(t){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.hide(),this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(t){var n=e(t.target).closest(".drp-calendar").hasClass("left"),i=n?"left":"right",s=this.container.find(".drp-calendar."+i),o=parseInt(s.find(".monthselect").val(),10),r=s.find(".yearselect").val();n||(r<this.startDate.year()||r==this.startDate.year()&&o<this.startDate.month())&&(o=this.startDate.month(),r=this.startDate.year()),this.minDate&&(r<this.minDate.year()||r==this.minDate.year()&&o<this.minDate.month())&&(o=this.minDate.month(),r=this.minDate.year()),this.maxDate&&(r>this.maxDate.year()||r==this.maxDate.year()&&o>this.maxDate.month())&&(o=this.maxDate.month(),r=this.maxDate.year()),n?(this.leftCalendar.month.month(o).year(r),this.linkedCalendars&&(this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month"))):(this.rightCalendar.month.month(o).year(r),this.linkedCalendars&&(this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month"))),this.updateCalendars()},timeChanged:function(t){var n=e(t.target).closest(".drp-calendar"),i=n.hasClass("left"),s=parseInt(n.find(".hourselect").val(),10),o=parseInt(n.find(".minuteselect").val(),10),r=this.timePickerSeconds?parseInt(n.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var a=n.find(".ampmselect").val();"PM"===a&&s<12&&(s+=12),"AM"===a&&12===s&&(s=0)}if(i){var l=this.startDate.clone();l.hour(s),l.minute(o),l.second(r),this.setStartDate(l),this.singleDatePicker?this.endDate=this.startDate.clone():this.endDate&&this.endDate.format("YYYY-MM-DD")==l.format("YYYY-MM-DD")&&this.endDate.isBefore(l)&&this.setEndDate(l.clone())}else if(this.endDate){var c=this.endDate.clone();c.hour(s),c.minute(o),c.second(r),this.setEndDate(c)}this.updateCalendars(),this.updateFormInputs(),this.renderTimePicker("left"),this.renderTimePicker("right")},elementChanged:function(){if(this.element.is("input")&&this.element.val().length){var e=this.element.val().split(this.locale.separator),n=null,i=null;2===e.length&&(n=t(e[0],this.locale.format),i=t(e[1],this.locale.format)),(this.singleDatePicker||null===n||null===i)&&(i=n=t(this.element.val(),this.locale.format)),n.isValid()&&i.isValid()&&(this.setStartDate(n),this.setEndDate(i),this.updateView())}},keydown:function(t){9!==t.keyCode&&13!==t.keyCode||this.hide(),27===t.keyCode&&(t.preventDefault(),t.stopPropagation(),this.hide())},updateElement:function(){if(this.element.is("input")&&this.autoUpdateInput){var t=this.startDate.format(this.locale.format);this.singleDatePicker||(t+=this.locale.separator+this.endDate.format(this.locale.format)),t!==this.element.val()&&this.element.val(t).trigger("change")}},remove:function(){this.container.remove(),this.element.off(".daterangepicker"),this.element.removeData()}},e.fn.daterangepicker=function(t,i){var s=e.extend(!0,{},e.fn.daterangepicker.defaultOptions,t);return this.each(function(){var t=e(this);t.data("daterangepicker")&&t.data("daterangepicker").remove(),t.data("daterangepicker",new n(t,s,i))}),this},n}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):t.metisMenu=e(t.jQuery)}(this,function(t){"use strict";function e(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){var i,s,o;i=t,s=e,o=n[e],s in i?Object.defineProperty(i,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[s]=o})}return t}var n,i,s,o,r,a,l,c,h=function(t){var e="transitionend",n={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(n){t(n).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)}};function i(e){var i=this,s=!1;return t(this).one(n.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||n.triggerTransitionEnd(i)},e),this}return t.fn.mmEmulateTransitionEnd=i,t.event.special[n.TRANSITION_END]={bindType:e,delegateType:e,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},n}(t=t&&t.hasOwnProperty("default")?t.default:t);return i="metisMenu",o="."+(s="metisMenu"),r=(n=t).fn[i],a={toggle:!0,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing",triggerElement:"a",parentTrigger:"li",subMenu:"ul"},l={SHOW:"show"+o,SHOWN:"shown"+o,HIDE:"hide"+o,HIDDEN:"hidden"+o,CLICK_DATA_API:"click"+o+".data-api"},c=function(){function t(t,n){this.element=t,this.config=e({},a,n),this.transitioning=null,this.init()}var i=t.prototype;return i.init=function(){var t=this,e=this.config;n(this.element).find(e.parentTrigger+"."+e.activeClass).has(e.subMenu).children(e.subMenu).attr("aria-expanded",!0).addClass(e.collapseClass+" "+e.collapseInClass),n(this.element).find(e.parentTrigger).not("."+e.activeClass).has(e.subMenu).children(e.subMenu).attr("aria-expanded",!1).addClass(e.collapseClass),n(this.element).find(e.parentTrigger).has(e.subMenu).children(e.triggerElement).on(l.CLICK_DATA_API,function(i){var s=n(this),o=s.parent(e.parentTrigger),r=o.siblings(e.parentTrigger).children(e.triggerElement),a=o.children(e.subMenu);e.preventDefault&&i.preventDefault(),"true"!==s.attr("aria-disabled")&&(o.hasClass(e.activeClass)?(s.attr("aria-expanded",!1),t.hide(a)):(t.show(a),s.attr("aria-expanded",!0),e.toggle&&r.attr("aria-expanded",!1)),e.onTransitionStart&&e.onTransitionStart(i))})},i.show=function(t){var e=this;if(!this.transitioning&&!n(t).hasClass(this.config.collapsingClass)){var i=n(t),s=n.Event(l.SHOW);if(i.trigger(s),!s.isDefaultPrevented()){i.parent(this.config.parentTrigger).addClass(this.config.activeClass),this.config.toggle&&this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+this.config.collapseInClass).attr("aria-expanded",!1)),i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),this.setTransitioning(!0);var o=function(){e.config&&e.element&&(i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass+" "+e.config.collapseInClass).height("").attr("aria-expanded",!0),e.setTransitioning(!1),i.trigger(l.SHOWN))};h.supportsTransitionEnd()?i.height(t[0].scrollHeight).one(h.TRANSITION_END,o).mmEmulateTransitionEnd(350):o()}}},i.hide=function(t){var e=this;if(!this.transitioning&&n(t).hasClass(this.config.collapseInClass)){var i=n(t),s=n.Event(l.HIDE);if(i.trigger(s),!s.isDefaultPrevented()){i.parent(this.config.parentTrigger).removeClass(this.config.activeClass),i.height(i.height())[0].offsetHeight,i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),this.setTransitioning(!0);var o=function(){e.config&&e.element&&(e.transitioning&&e.config.onTransitionEnd&&e.config.onTransitionEnd(),e.setTransitioning(!1),i.trigger(l.HIDDEN),i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass).attr("aria-expanded",!1))};h.supportsTransitionEnd()?0===i.height()||"none"===i.css("display")?o():i.height(0).one(h.TRANSITION_END,o).mmEmulateTransitionEnd(350):o()}}},i.setTransitioning=function(t){this.transitioning=t},i.dispose=function(){n.removeData(this.element,s),n(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},t.jQueryInterface=function(i){return this.each(function(){var o=n(this),r=o.data(s),l=e({},a,o.data(),"object"==typeof i&&i?i:{});if(!r&&/dispose/.test(i)&&this.dispose(),r||(r=new t(this,l),o.data(s,r)),"string"==typeof i){if(void 0===r[i])throw new Error('No method named "'+i+'"');r[i]()}})},t}(),n.fn[i]=c.jQueryInterface,n.fn[i].Constructor=c,n.fn[i].noConflict=function(){return n.fn[i]=r,c.jQueryInterface},c}),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,n,i){"use strict";var s={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(e,n){this.prepareOptions(e,t.toast.options),this.process()},prepareOptions:function(e,n){var i={};"string"==typeof e||e instanceof Array?i.text=e:i=e,this.options=t.extend({},n,i)},process:function(){this.setup(),this.addToDom(),this.position(),this.bindToast(),this.animate()},setup:function(){var e="";if(this._toastEl=this._toastEl||t("<div></div>",{class:"jq-toast-single"}),e+='<span class="jq-toast-loader"></span>',this.options.allowToastClose&&(e+='<span class="close-jq-toast-single">&times;</span>'),this.options.text instanceof Array){this.options.heading&&(e+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),e+='<ul class="jq-toast-ul">';for(var n=0;n<this.options.text.length;n++)e+='<li class="jq-toast-li" id="jq-toast-item-'+n+'">'+this.options.text[n]+"</li>";e+="</ul>"}else this.options.heading&&(e+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),e+=this.options.text;this._toastEl.html(e),!1!==this.options.bgColor&&this._toastEl.css("background-color",this.options.bgColor),!1!==this.options.textColor&&this._toastEl.css("color",this.options.textColor),this.options.textAlign&&this._toastEl.css("text-align",this.options.textAlign),!1!==this.options.icon&&(this._toastEl.addClass("jq-has-icon"),-1!==t.inArray(this.options.icon,this._defaultIcons)&&this._toastEl.addClass("jq-icon-"+this.options.icon)),!1!==this.options.class&&this._toastEl.addClass(this.options.class)},position:function(){"string"==typeof this.options.position&&-1!==t.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,top:t(e).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"==typeof this.options.position?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left")},bindToast:function(){var t=this;this._toastEl.on("afterShown",function(){t.processLoader()}),this._toastEl.find(".close-jq-toast-single").on("click",function(e){e.preventDefault(),"fade"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))}),"function"==typeof this.options.beforeShow&&this._toastEl.on("beforeShow",function(){t.options.beforeShow()}),"function"==typeof this.options.afterShown&&this._toastEl.on("afterShown",function(){t.options.afterShown()}),"function"==typeof this.options.beforeHide&&this._toastEl.on("beforeHide",function(){t.options.beforeHide()}),"function"==typeof this.options.afterHidden&&this._toastEl.on("afterHidden",function(){t.options.afterHidden()})},addToDom:function(){var e=t(".jq-toast-wrap");if(0===e.length?(e=t("<div></div>",{class:"jq-toast-wrap"}),t("body").append(e)):(!this.options.stack||isNaN(parseInt(this.options.stack,10)))&&e.empty(),e.find(".jq-toast-single:hidden").remove(),e.append(this._toastEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var n=e.find(".jq-toast-single").length-this.options.stack;n>0&&t(".jq-toast-wrap").find(".jq-toast-single").slice(0,n).remove()}this._container=e},canAutoHide:function(){return!1!==this.options.hideAfter&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||!1===this.options.loader)return!1;var t=this._toastEl.find(".jq-toast-loader"),e=(this.options.hideAfter-400)/1e3+"s",n=this.options.loaderBg,i=t.attr("style")||"";i=i.substring(0,i.indexOf("-webkit-transition")),i+="-webkit-transition: width "+e+" ease-in;                       -o-transition: width "+e+" ease-in;                       transition: width "+e+" ease-in;                       background-color: "+n+";",t.attr("style",i).addClass("jq-toast-loaded")},animate:function(){var t=this;if(this._toastEl.hide(),this._toastEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._toastEl.fadeIn(function(){t._toastEl.trigger("afterShown")}):"slide"===this.options.showHideTransition.toLowerCase()?this._toastEl.slideDown(function(){t._toastEl.trigger("afterShown")}):this._toastEl.show(function(){t._toastEl.trigger("afterShown")}),this.canAutoHide()){t=this;e.setTimeout(function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))},this.options.hideAfter)}},reset:function(e){"all"===e?t(".jq-toast-wrap").remove():this._toastEl.remove()},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindToast()}};t.toast=function(t){var e=Object.create(s);return e.init(t,this),{reset:function(t){e.reset(t)},update:function(t){e.update(t)}}},t.toast.options={text:"",heading:"",showHideTransition:"fade",allowToastClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}}}(jQuery,window,document),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)}(function(t){var e=function(){if(t&&t.fn&&t.fn.select2&&t.fn.select2.amd)var e=t.fn.select2.amd;var n,i,s;return e&&e.requirejs||(e?i=e:e={},function(t){function e(t,e){return b.call(t,e)}function o(t,e){var n,i,s,o,r,a,l,c,h,u,d,f=e&&e.split("/"),p=v.map,m=p&&p["*"]||{};if(t){for(r=(t=t.split("/")).length-1,v.nodeIdCompat&&w.test(t[r])&&(t[r]=t[r].replace(w,"")),"."===t[0].charAt(0)&&f&&(t=f.slice(0,f.length-1).concat(t)),h=0;h<t.length;h++)if("."===(d=t[h]))t.splice(h,1),h-=1;else if(".."===d){if(0===h||1===h&&".."===t[2]||".."===t[h-1])continue;h>0&&(t.splice(h-1,2),h-=2)}t=t.join("/")}if((f||m)&&p){for(h=(n=t.split("/")).length;h>0;h-=1){if(i=n.slice(0,h).join("/"),f)for(u=f.length;u>0;u-=1)if((s=p[f.slice(0,u).join("/")])&&(s=s[i])){o=s,a=h;break}if(o)break;!l&&m&&m[i]&&(l=m[i],c=h)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),t=n.join("/"))}return t}function r(e,n){return function(){var i=_.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),d.apply(t,i.concat([e,n]))}}function a(t){return function(e){m[t]=e}}function l(n){if(e(g,n)){var i=g[n];delete g[n],y[n]=!0,u.apply(t,i)}if(!e(m,n)&&!e(y,n))throw new Error("No "+n);return m[n]}function c(t){var e,n=t?t.indexOf("!"):-1;return n>-1&&(e=t.substring(0,n),t=t.substring(n+1,t.length)),[e,t]}function h(t){return t?c(t):[]}var u,d,f,p,m={},g={},v={},y={},b=Object.prototype.hasOwnProperty,_=[].slice,w=/\.js$/;f=function(t,e){var n,i,s=c(t),r=s[0],a=e[1];return t=s[1],r&&(n=l(r=o(r,a))),r?t=n&&n.normalize?n.normalize(t,(i=a,function(t){return o(t,i)})):o(t,a):(r=(s=c(t=o(t,a)))[0],t=s[1],r&&(n=l(r))),{f:r?r+"!"+t:t,n:t,pr:r,p:n}},p={require:function(t){return r(t)},exports:function(t){var e=m[t];return void 0!==e?e:m[t]={}},module:function(t){return{id:t,uri:"",exports:m[t],config:(e=t,function(){return v&&v.config&&v.config[e]||{}})};var e}},u=function(n,i,s,o){var c,u,d,v,b,_,w,D=[],k=typeof s;if(_=h(o=o||n),"undefined"===k||"function"===k){for(i=!i.length&&s.length?["require","exports","module"]:i,b=0;b<i.length;b+=1)if("require"===(u=(v=f(i[b],_)).f))D[b]=p.require(n);else if("exports"===u)D[b]=p.exports(n),w=!0;else if("module"===u)c=D[b]=p.module(n);else if(e(m,u)||e(g,u)||e(y,u))D[b]=l(u);else{if(!v.p)throw new Error(n+" missing "+u);v.p.load(v.n,r(o,!0),a(u),{}),D[b]=m[u]}d=s?s.apply(m[n],D):void 0,n&&(c&&c.exports!==t&&c.exports!==m[n]?m[n]=c.exports:d===t&&w||(m[n]=d))}else n&&(m[n]=s)},n=i=d=function(e,n,i,s,o){if("string"==typeof e)return p[e]?p[e](n):l(f(e,h(n)).f);if(!e.splice){if((v=e).deps&&d(v.deps,v.callback),!n)return;n.splice?(e=n,n=i,i=null):e=t}return n=n||function(){},"function"==typeof i&&(i=s,s=o),s?u(t,e,n,i):setTimeout(function(){u(t,e,n,i)},4),d},d.config=function(t){return d(t)},n._defined=m,(s=function(t,n,i){if("string"!=typeof t)throw new Error("See almond README: incorrect module build, no module name");n.splice||(i=n,n=[]),e(m,t)||e(g,t)||(g[t]=[t,n,i])}).amd={jQuery:!0}}(),e.requirejs=n,e.require=i,e.define=s),e.define("almond",function(){}),e.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(t){function e(t){var e=t.prototype,n=[];for(var i in e)"function"==typeof e[i]&&"constructor"!==i&&n.push(i);return n}var n={Extend:function(t,e){function n(){this.constructor=t}var i={}.hasOwnProperty;for(var s in e)i.call(e,s)&&(t[s]=e[s]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Decorate:function(t,n){function i(){var e=Array.prototype.unshift,i=n.prototype.constructor.length,s=t.prototype.constructor;i>0&&(e.call(arguments,t.prototype.constructor),s=n.prototype.constructor),s.apply(this,arguments)}var s=e(n),o=e(t);n.displayName=t.displayName,i.prototype=new function(){this.constructor=i};for(var r=0;r<o.length;r++){var a=o[r];i.prototype[a]=t.prototype[a]}for(var l=function(t){var e=function(){};t in i.prototype&&(e=i.prototype[t]);var s=n.prototype[t];return function(){return Array.prototype.unshift.call(arguments,e),s.apply(this,arguments)}},c=0;c<s.length;c++){var h=s[c];i.prototype[h]=l(h)}return i}},i=function(){this.listeners={}};i.prototype.on=function(t,e){this.listeners=this.listeners||{},t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e]},i.prototype.trigger=function(t){var e=Array.prototype.slice,n=e.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),n[0]._type=t,t in this.listeners&&this.invoke(this.listeners[t],e.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},i.prototype.invoke=function(t,e){for(var n=0,i=t.length;n<i;n++)t[n].apply(this,e)},n.Observable=i,n.generateChars=function(t){for(var e="",n=0;n<t;n++)e+=Math.floor(36*Math.random()).toString(36);return e},n.bind=function(t,e){return function(){t.apply(e,arguments)}},n._convertData=function(t){for(var e in t){var n=e.split("-"),i=t;if(1!==n.length){for(var s=0;s<n.length;s++){var o=n[s];(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),s==n.length-1&&(i[o]=t[e]),i=i[o]}delete t[e]}}return t},n.hasScroll=function(e,n){var i=t(n),s=n.style.overflowX,o=n.style.overflowY;return(s!==o||"hidden"!==o&&"visible"!==o)&&("scroll"===s||"scroll"===o||i.innerHeight()<n.scrollHeight||i.innerWidth()<n.scrollWidth)},n.escapeMarkup=function(t){var e={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof t?t:String(t).replace(/[&<>"'\/\\]/g,function(t){return e[t]})},n.appendMany=function(e,n){if("1.7"===t.fn.jquery.substr(0,3)){var i=t();t.map(n,function(t){i=i.add(t)}),n=i}e.append(n)},n.__cache={};var s=0;return n.GetUniqueElementId=function(t){var e=t.getAttribute("data-select2-id");return null==e&&(t.id?(e=t.id,t.setAttribute("data-select2-id",e)):(t.setAttribute("data-select2-id",++s),e=s.toString())),e},n.StoreData=function(t,e,i){var s=n.GetUniqueElementId(t);n.__cache[s]||(n.__cache[s]={}),n.__cache[s][e]=i},n.GetData=function(e,i){var s=n.GetUniqueElementId(e);return i?n.__cache[s]&&null!=n.__cache[s][i]?n.__cache[s][i]:t(e).data(i):n.__cache[s]},n.RemoveData=function(t){var e=n.GetUniqueElementId(t);null!=n.__cache[e]&&delete n.__cache[e]},n}),e.define("select2/results",["jquery","./utils"],function(t,e){function n(t,e,i){this.$element=t,this.data=i,this.options=e,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e,e},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(e){var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var i=t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);i.append(n(s(e.args))),i[0].className+=" select2-results__message",this.$results.append(i)},n.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},n.prototype.append=function(t){this.hideLoading();var e=[];if(null!=t.results&&0!==t.results.length){t.results=this.sort(t.results);for(var n=0;n<t.results.length;n++){var i=t.results[n],s=this.option(i);e.push(s)}this.$results.append(e)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},n.prototype.position=function(t,e){e.find(".select2-results").append(t)},n.prototype.sort=function(t){return this.options.get("sorter")(t)},n.prototype.highlightFirstItem=function(){var t=this.$results.find(".select2-results__option[aria-selected]"),e=t.filter("[aria-selected=true]");e.length>0?e.first().trigger("mouseenter"):t.first().trigger("mouseenter"),this.ensureHighlightVisible()},n.prototype.setClasses=function(){var n=this;this.data.current(function(i){var s=t.map(i,function(t){return t.id.toString()});n.$results.find(".select2-results__option[aria-selected]").each(function(){var n=t(this),i=e.GetData(this,"data"),o=""+i.id;null!=i.element&&i.element.selected||null==i.element&&t.inArray(o,s)>-1?n.attr("aria-selected","true"):n.attr("aria-selected","false")})})},n.prototype.showLoading=function(t){this.hideLoading();var e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(t)},n=this.option(e);n.className+=" loading-results",this.$results.prepend(n)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.option=function(n){var i=document.createElement("li");i.className="select2-results__option";var s={role:"treeitem","aria-selected":"false"};for(var o in n.disabled&&(delete s["aria-selected"],s["aria-disabled"]="true"),null==n.id&&delete s["aria-selected"],null!=n._resultId&&(i.id=n._resultId),n.title&&(i.title=n.title),n.children&&(s.role="group",s["aria-label"]=n.text,delete s["aria-selected"]),s){var r=s[o];i.setAttribute(o,r)}if(n.children){var a=t(i),l=document.createElement("strong");l.className="select2-results__group",t(l),this.template(n,l);for(var c=[],h=0;h<n.children.length;h++){var u=n.children[h],d=this.option(u);c.push(d)}var f=t("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});f.append(c),a.append(l),a.append(f)}else this.template(n,i);return e.StoreData(i,"data",n),i},n.prototype.bind=function(n,i){var s=this,o=n.id+"-results";this.$results.attr("id",o),n.on("results:all",function(t){s.clear(),s.append(t.data),n.isOpen()&&(s.setClasses(),s.highlightFirstItem())}),n.on("results:append",function(t){s.append(t.data),n.isOpen()&&s.setClasses()}),n.on("query",function(t){s.hideMessages(),s.showLoading(t)}),n.on("select",function(){n.isOpen()&&(s.setClasses(),s.highlightFirstItem())}),n.on("unselect",function(){n.isOpen()&&(s.setClasses(),s.highlightFirstItem())}),n.on("open",function(){s.$results.attr("aria-expanded","true"),s.$results.attr("aria-hidden","false"),s.setClasses(),s.ensureHighlightVisible()}),n.on("close",function(){s.$results.attr("aria-expanded","false"),s.$results.attr("aria-hidden","true"),s.$results.removeAttr("aria-activedescendant")}),n.on("results:toggle",function(){var t=s.getHighlightedResults();0!==t.length&&t.trigger("mouseup")}),n.on("results:select",function(){var t=s.getHighlightedResults();if(0!==t.length){var n=e.GetData(t[0],"data");"true"==t.attr("aria-selected")?s.trigger("close",{}):s.trigger("select",{data:n})}}),n.on("results:previous",function(){var t=s.getHighlightedResults(),e=s.$results.find("[aria-selected]"),n=e.index(t);if(!(n<=0)){var i=n-1;0===t.length&&(i=0);var o=e.eq(i);o.trigger("mouseenter");var r=s.$results.offset().top,a=o.offset().top,l=s.$results.scrollTop()+(a-r);0===i?s.$results.scrollTop(0):a-r<0&&s.$results.scrollTop(l)}}),n.on("results:next",function(){var t=s.getHighlightedResults(),e=s.$results.find("[aria-selected]"),n=e.index(t)+1;if(!(n>=e.length)){var i=e.eq(n);i.trigger("mouseenter");var o=s.$results.offset().top+s.$results.outerHeight(!1),r=i.offset().top+i.outerHeight(!1),a=s.$results.scrollTop()+r-o;0===n?s.$results.scrollTop(0):r>o&&s.$results.scrollTop(a)}}),n.on("results:focus",function(t){t.element.addClass("select2-results__option--highlighted")}),n.on("results:message",function(t){s.displayMessage(t)}),t.fn.mousewheel&&this.$results.on("mousewheel",function(t){var e=s.$results.scrollTop(),n=s.$results.get(0).scrollHeight-e+t.deltaY,i=t.deltaY>0&&e-t.deltaY<=0,o=t.deltaY<0&&n<=s.$results.height();i?(s.$results.scrollTop(0),t.preventDefault(),t.stopPropagation()):o&&(s.$results.scrollTop(s.$results.get(0).scrollHeight-s.$results.height()),t.preventDefault(),t.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(n){var i=t(this),o=e.GetData(this,"data");"true"!==i.attr("aria-selected")?s.trigger("select",{originalEvent:n,data:o}):s.options.get("multiple")?s.trigger("unselect",{originalEvent:n,data:o}):s.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(n){var i=e.GetData(this,"data");s.getHighlightedResults().removeClass("select2-results__option--highlighted"),s.trigger("results:focus",{data:i,element:t(this)})})},n.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},n.prototype.destroy=function(){this.$results.remove()},n.prototype.ensureHighlightVisible=function(){var t=this.getHighlightedResults();if(0!==t.length){var e=this.$results.find("[aria-selected]").index(t),n=this.$results.offset().top,i=t.offset().top,s=this.$results.scrollTop()+(i-n),o=i-n;s-=2*t.outerHeight(!1),e<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(s)}},n.prototype.template=function(e,n){var i=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),o=i(e,n);null==o?n.style.display="none":"string"==typeof o?n.innerHTML=s(o):t(n).append(o)},n}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(t,e,n){function i(t,e){this.$element=t,this.options=e,i.__super__.constructor.call(this)}return e.Extend(i,e.Observable),i.prototype.render=function(){var n=t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=e.GetData(this.$element[0],"old-tabindex")?this._tabindex=e.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),n.attr("title",this.$element.attr("title")),n.attr("tabindex",this._tabindex),this.$selection=n,n},i.prototype.bind=function(t,e){var i=this,s=(t.id,t.id+"-results");this.container=t,this.$selection.on("focus",function(t){i.trigger("focus",t)}),this.$selection.on("blur",function(t){i._handleBlur(t)}),this.$selection.on("keydown",function(t){i.trigger("keypress",t),t.which===n.SPACE&&t.preventDefault()}),t.on("results:focus",function(t){i.$selection.attr("aria-activedescendant",t.data._resultId)}),t.on("selection:update",function(t){i.update(t.data)}),t.on("open",function(){i.$selection.attr("aria-expanded","true"),i.$selection.attr("aria-owns",s),i._attachCloseHandler(t)}),t.on("close",function(){i.$selection.attr("aria-expanded","false"),i.$selection.removeAttr("aria-activedescendant"),i.$selection.removeAttr("aria-owns"),i.$selection.focus(),window.setTimeout(function(){i.$selection.focus()},0),i._detachCloseHandler(t)}),t.on("enable",function(){i.$selection.attr("tabindex",i._tabindex)}),t.on("disable",function(){i.$selection.attr("tabindex","-1")})},i.prototype._handleBlur=function(e){var n=this;window.setTimeout(function(){document.activeElement==n.$selection[0]||t.contains(n.$selection[0],document.activeElement)||n.trigger("blur",e)},1)},i.prototype._attachCloseHandler=function(n){t(document.body).on("mousedown.select2."+n.id,function(n){var i=t(n.target).closest(".select2");t(".select2.select2-container--open").each(function(){t(this),this!=i[0]&&e.GetData(this,"element").select2("close")})})},i.prototype._detachCloseHandler=function(e){t(document.body).off("mousedown.select2."+e.id)},i.prototype.position=function(t,e){e.find(".selection").append(t)},i.prototype.destroy=function(){this._detachCloseHandler(this.container)},i.prototype.update=function(t){throw new Error("The `update` method must be defined in child classes.")},i}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(t,e,n,i){function s(){s.__super__.constructor.apply(this,arguments)}return n.Extend(s,e),s.prototype.render=function(){var t=s.__super__.render.call(this);return t.addClass("select2-selection--single"),t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),t},s.prototype.bind=function(t,e){var n=this;s.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(t){1===t.which&&n.trigger("toggle",{originalEvent:t})}),this.$selection.on("focus",function(t){}),this.$selection.on("blur",function(t){}),t.on("focus",function(e){t.isOpen()||n.$selection.focus()})},s.prototype.clear=function(){var t=this.$selection.find(".select2-selection__rendered");t.empty(),t.removeAttr("title")},s.prototype.display=function(t,e){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(t,e))},s.prototype.selectionContainer=function(){return t("<span></span>")},s.prototype.update=function(t){if(0!==t.length){var e=t[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(e,n);n.empty().append(i),n.attr("title",e.title||e.text)}else this.clear()},s}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(t,e,n){function i(t,e){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,e),i.prototype.render=function(){var t=i.__super__.render.call(this);return t.addClass("select2-selection--multiple"),t.html('<ul class="select2-selection__rendered"></ul>'),t},i.prototype.bind=function(e,s){var o=this;i.__super__.bind.apply(this,arguments),this.$selection.on("click",function(t){o.trigger("toggle",{originalEvent:t})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!o.options.get("disabled")){var i=t(this).parent(),s=n.GetData(i[0],"data");o.trigger("unselect",{originalEvent:e,data:s})}})},i.prototype.clear=function(){var t=this.$selection.find(".select2-selection__rendered");t.empty(),t.removeAttr("title")},i.prototype.display=function(t,e){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(t,e))},i.prototype.selectionContainer=function(){return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},i.prototype.update=function(t){if(this.clear(),0!==t.length){for(var e=[],i=0;i<t.length;i++){var s=t[i],o=this.selectionContainer(),r=this.display(s,o);o.append(r),o.attr("title",s.title||s.text),n.StoreData(o[0],"data",s),e.push(o)}var a=this.$selection.find(".select2-selection__rendered");n.appendMany(a,e)}},i}),e.define("select2/selection/placeholder",["../utils"],function(t){function e(t,e,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),t.call(this,e,n)}return e.prototype.normalizePlaceholder=function(t,e){return"string"==typeof e&&(e={id:"",text:e}),e},e.prototype.createPlaceholder=function(t,e){var n=this.selectionContainer();return n.html(this.display(e)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},e.prototype.update=function(t,e){var n=1==e.length&&e[0].id!=this.placeholder.id;if(e.length>1||n)return t.call(this,e);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},e}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(t,e,n){function i(){}return i.prototype.bind=function(t,e,n){var i=this;t.call(this,e,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(t){i._handleClear(t)}),e.on("keypress",function(t){i._handleKeyboardClear(t,e)})},i.prototype._handleClear=function(t,e){if(!this.options.get("disabled")){var i=this.$selection.find(".select2-selection__clear");if(0!==i.length){e.stopPropagation();var s=n.GetData(i[0],"data"),o=this.$element.val();this.$element.val(this.placeholder.id);var r={data:s};if(this.trigger("clear",r),r.prevented)return void this.$element.val(o);for(var a=0;a<s.length;a++)if(r={data:s[a]},this.trigger("unselect",r),r.prevented)return void this.$element.val(o);this.$element.trigger("change"),this.trigger("toggle",{})}}},i.prototype._handleKeyboardClear=function(t,n,i){i.isOpen()||n.which!=e.DELETE&&n.which!=e.BACKSPACE||this._handleClear(n)},i.prototype.update=function(e,i){if(e.call(this,i),!(this.$selection.find(".select2-selection__placeholder").length>0||0===i.length)){var s=t('<span class="select2-selection__clear">&times;</span>');n.StoreData(s[0],"data",i),this.$selection.find(".select2-selection__rendered").prepend(s)}},i}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(t,e,n){function i(t,e,n){t.call(this,e,n)}return i.prototype.render=function(e){var n=t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=n,this.$search=n.find("input");var i=e.call(this);return this._transferTabIndex(),i},i.prototype.bind=function(t,i,s){var o=this;t.call(this,i,s),i.on("open",function(){o.$search.trigger("focus")}),i.on("close",function(){o.$search.val(""),o.$search.removeAttr("aria-activedescendant"),o.$search.trigger("focus")}),i.on("enable",function(){o.$search.prop("disabled",!1),o._transferTabIndex()}),i.on("disable",function(){o.$search.prop("disabled",!0)}),i.on("focus",function(t){o.$search.trigger("focus")}),i.on("results:focus",function(t){o.$search.attr("aria-activedescendant",t.id)}),this.$selection.on("focusin",".select2-search--inline",function(t){o.trigger("focus",t)}),this.$selection.on("focusout",".select2-search--inline",function(t){o._handleBlur(t)}),this.$selection.on("keydown",".select2-search--inline",function(t){if(t.stopPropagation(),o.trigger("keypress",t),o._keyUpPrevented=t.isDefaultPrevented(),t.which===n.BACKSPACE&&""===o.$search.val()){var i=o.$searchContainer.prev(".select2-selection__choice");if(i.length>0){var s=e.GetData(i[0],"data");o.searchRemoveChoice(s),t.preventDefault()}}});var r=document.documentMode,a=r&&r<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(t){a?o.$selection.off("input.search input.searchcheck"):o.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(t){if(a&&"input"===t.type)o.$selection.off("input.search input.searchcheck");else{var e=t.which;e!=n.SHIFT&&e!=n.CTRL&&e!=n.ALT&&e!=n.TAB&&o.handleSearch(t)}})},i.prototype._transferTabIndex=function(t){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},i.prototype.createPlaceholder=function(t,e){this.$search.attr("placeholder",e.text)},i.prototype.update=function(t,e){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),t.call(this,e),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&(this.$element.find("[data-select2-tag]").length?this.$element.focus():this.$search.focus())},i.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},i.prototype.searchRemoveChoice=function(t,e){this.trigger("unselect",{data:e}),this.$search.val(e.text),this.handleSearch()},i.prototype.resizeSearch=function(){this.$search.css("width","25px");var t="";t=""!==this.$search.attr("placeholder")?this.$selection.find(".select2-selection__rendered").innerWidth():.75*(this.$search.val().length+1)+"em",this.$search.css("width",t)},i}),e.define("select2/selection/eventRelay",["jquery"],function(t){function e(){}return e.prototype.bind=function(e,n,i){var s=this,o=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],r=["opening","closing","selecting","unselecting","clearing"];e.call(this,n,i),n.on("*",function(e,n){if(-1!==t.inArray(e,o)){n=n||{};var i=t.Event("select2:"+e,{params:n});s.$element.trigger(i),-1!==t.inArray(e,r)&&(n.prevented=i.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,e){function n(t){this.dict=t||{}}return n.prototype.all=function(){return this.dict},n.prototype.get=function(t){return this.dict[t]},n.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},n._cache={},n.loadPath=function(t){if(!(t in n._cache)){var i=e(t);n._cache[t]=i}return new n(n._cache[t])},n}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),e.define("select2/data/base",["../utils"],function(t){function e(t,n){e.__super__.constructor.call(this)}return t.Extend(e,t.Observable),e.prototype.current=function(t){throw new Error("The `current` method must be defined in child classes.")},e.prototype.query=function(t,e){throw new Error("The `query` method must be defined in child classes.")},e.prototype.bind=function(t,e){},e.prototype.destroy=function(){},e.prototype.generateResultId=function(e,n){var i=e.id+"-result-";return i+=t.generateChars(4),null!=n.id?i+="-"+n.id.toString():i+="-"+t.generateChars(4),i},e}),e.define("select2/data/select",["./base","../utils","jquery"],function(t,e,n){function i(t,e){this.$element=t,this.options=e,i.__super__.constructor.call(this)}return e.Extend(i,t),i.prototype.current=function(t){var e=[],i=this;this.$element.find(":selected").each(function(){var t=n(this),s=i.item(t);e.push(s)}),t(e)},i.prototype.select=function(t){var e=this;if(t.selected=!0,n(t.element).is("option"))return t.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(i){var s=[];(t=[t]).push.apply(t,i);for(var o=0;o<t.length;o++){var r=t[o].id;-1===n.inArray(r,s)&&s.push(r)}e.$element.val(s),e.$element.trigger("change")});else{var i=t.id;this.$element.val(i),this.$element.trigger("change")}},i.prototype.unselect=function(t){var e=this;if(this.$element.prop("multiple")){if(t.selected=!1,n(t.element).is("option"))return t.element.selected=!1,void this.$element.trigger("change");this.current(function(i){for(var s=[],o=0;o<i.length;o++){var r=i[o].id;r!==t.id&&-1===n.inArray(r,s)&&s.push(r)}e.$element.val(s),e.$element.trigger("change")})}},i.prototype.bind=function(t,e){var n=this;this.container=t,t.on("select",function(t){n.select(t.data)}),t.on("unselect",function(t){n.unselect(t.data)})},i.prototype.destroy=function(){this.$element.find("*").each(function(){e.RemoveData(this)})},i.prototype.query=function(t,e){var i=[],s=this;this.$element.children().each(function(){var e=n(this);if(e.is("option")||e.is("optgroup")){var o=s.item(e),r=s.matches(t,o);null!==r&&i.push(r)}}),e({results:i})},i.prototype.addOptions=function(t){e.appendMany(this.$element,t)},i.prototype.option=function(t){var i;t.children?(i=document.createElement("optgroup")).label=t.text:void 0!==(i=document.createElement("option")).textContent?i.textContent=t.text:i.innerText=t.text,void 0!==t.id&&(i.value=t.id),t.disabled&&(i.disabled=!0),t.selected&&(i.selected=!0),t.title&&(i.title=t.title);var s=n(i),o=this._normalizeItem(t);return o.element=i,e.StoreData(i,"data",o),s},i.prototype.item=function(t){var i={};if(null!=(i=e.GetData(t[0],"data")))return i;if(t.is("option"))i={id:t.val(),text:t.text(),disabled:t.prop("disabled"),selected:t.prop("selected"),title:t.prop("title")};else if(t.is("optgroup")){i={text:t.prop("label"),children:[],title:t.prop("title")};for(var s=t.children("option"),o=[],r=0;r<s.length;r++){var a=n(s[r]),l=this.item(a);o.push(l)}i.children=o}return(i=this._normalizeItem(i)).element=t[0],e.StoreData(t[0],"data",i),i},i.prototype._normalizeItem=function(t){t!==Object(t)&&(t={id:t,text:t});return null!=(t=n.extend({},{text:""},t)).id&&(t.id=t.id.toString()),null!=t.text&&(t.text=t.text.toString()),null==t._resultId&&t.id&&null!=this.container&&(t._resultId=this.generateResultId(this.container,t)),n.extend({},{selected:!1,disabled:!1},t)},i.prototype.matches=function(t,e){return this.options.get("matcher")(t,e)},i}),e.define("select2/data/array",["./select","../utils","jquery"],function(t,e,n){function i(t,e){var n=e.get("data")||[];i.__super__.constructor.call(this,t,e),this.addOptions(this.convertToOptions(n))}return e.Extend(i,t),i.prototype.select=function(t){var e=this.$element.find("option").filter(function(e,n){return n.value==t.id.toString()});0===e.length&&(e=this.option(t),this.addOptions(e)),i.__super__.select.call(this,t)},i.prototype.convertToOptions=function(t){function i(t){return function(){return n(this).val()==t.id}}for(var s=this,o=this.$element.find("option"),r=o.map(function(){return s.item(n(this)).id}).get(),a=[],l=0;l<t.length;l++){var c=this._normalizeItem(t[l]);if(n.inArray(c.id,r)>=0){var h=o.filter(i(c)),u=this.item(h),d=n.extend(!0,{},c,u),f=this.option(d);h.replaceWith(f)}else{var p=this.option(c);if(c.children){var m=this.convertToOptions(c.children);e.appendMany(p,m)}a.push(p)}}return a},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(t,e,n){function i(t,e){this.ajaxOptions=this._applyDefaults(e.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),i.__super__.constructor.call(this,t,e)}return e.Extend(i,t),i.prototype._applyDefaults=function(t){var e={data:function(t){return n.extend({},t,{q:t.term})},transport:function(t,e,i){var s=n.ajax(t);return s.then(e),s.fail(i),s}};return n.extend({},e,t,!0)},i.prototype.processResults=function(t){return t},i.prototype.query=function(t,e){function i(){var i=o.transport(o,function(i){var o=s.processResults(i,t);s.options.get("debug")&&window.console&&console.error&&(o&&o.results&&n.isArray(o.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),e(o)},function(){"status"in i&&(0===i.status||"0"===i.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=i}var s=this;null!=this._request&&(n.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var o=n.extend({type:"GET"},this.ajaxOptions);"function"==typeof o.url&&(o.url=o.url.call(this.$element,t)),"function"==typeof o.data&&(o.data=o.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(i,this.ajaxOptions.delay)):i()},i}),e.define("select2/data/tags",["jquery"],function(t){function e(e,n,i){var s=i.get("tags"),o=i.get("createTag");void 0!==o&&(this.createTag=o);var r=i.get("insertTag");if(void 0!==r&&(this.insertTag=r),e.call(this,n,i),t.isArray(s))for(var a=0;a<s.length;a++){var l=s[a],c=this._normalizeItem(l),h=this.option(c);this.$element.append(h)}}return e.prototype.query=function(t,e,n){var i=this;this._removeOldTags(),null!=e.term&&null==e.page?t.call(this,e,function t(s,o){for(var r=s.results,a=0;a<r.length;a++){var l=r[a],c=null!=l.children&&!t({results:l.children},!0);if((l.text||"").toUpperCase()===(e.term||"").toUpperCase()||c)return!o&&(s.data=r,void n(s))}if(o)return!0;var h=i.createTag(e);if(null!=h){var u=i.option(h);u.attr("data-select2-tag",!0),i.addOptions([u]),i.insertTag(r,h)}s.results=r,n(s)}):t.call(this,e,n)},e.prototype.createTag=function(e,n){var i=t.trim(n.term);return""===i?null:{id:i,text:i}},e.prototype.insertTag=function(t,e,n){e.unshift(n)},e.prototype._removeOldTags=function(e){this._lastTag,this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(t){function e(t,e,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),t.call(this,e,n)}return e.prototype.bind=function(t,e,n){t.call(this,e,n),this.$search=e.dropdown.$search||e.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,n,i){var s=this;n.term=n.term||"";var o=this.tokenizer(n,this.options,function(e){var n,i=s._normalizeItem(e);if(!s.$element.find("option").filter(function(){return t(this).val()===i.id}).length){var o=s.option(i);o.attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([o])}n=i,s.trigger("select",{data:n})});o.term!==n.term&&(this.$search.length&&(this.$search.val(o.term),this.$search.focus()),n.term=o.term),e.call(this,n,i)},e.prototype.tokenizer=function(e,n,i,s){for(var o=i.get("tokenSeparators")||[],r=n.term,a=0,l=this.createTag||function(t){return{id:t.term,text:t.term}};a<r.length;){var c=r[a];if(-1!==t.inArray(c,o)){var h=r.substr(0,a),u=l(t.extend({},n,{term:h}));null!=u?(s(u),r=r.substr(a+1)||"",a=0):a++}else a++}return{term:r}},e}),e.define("select2/data/minimumInputLength",[],function(){function t(t,e,n){this.minimumInputLength=n.get("minimumInputLength"),t.call(this,e,n)}return t.prototype.query=function(t,e,n){e.term=e.term||"",e.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:e.term,params:e}}):t.call(this,e,n)},t}),e.define("select2/data/maximumInputLength",[],function(){function t(t,e,n){this.maximumInputLength=n.get("maximumInputLength"),t.call(this,e,n)}return t.prototype.query=function(t,e,n){e.term=e.term||"",this.maximumInputLength>0&&e.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:e.term,params:e}}):t.call(this,e,n)},t}),e.define("select2/data/maximumSelectionLength",[],function(){function t(t,e,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),t.call(this,e,n)}return t.prototype.query=function(t,e,n){var i=this;this.current(function(s){var o=null!=s?s.length:0;i.maximumSelectionLength>0&&o>=i.maximumSelectionLength?i.trigger("results:message",{message:"maximumSelected",args:{maximum:i.maximumSelectionLength}}):t.call(i,e,n)})},t}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(t,e){this.$element=t,this.options=e,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e,e},n.prototype.bind=function(){},n.prototype.position=function(t,e){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(t,e){function n(){}return n.prototype.render=function(e){var n=e.call(this),i=t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=i,this.$search=i.find("input"),n.prepend(i),n},n.prototype.bind=function(e,n,i){var s=this;e.call(this,n,i),this.$search.on("keydown",function(t){s.trigger("keypress",t),s._keyUpPrevented=t.isDefaultPrevented()}),this.$search.on("input",function(e){t(this).off("keyup")}),this.$search.on("keyup input",function(t){s.handleSearch(t)}),n.on("open",function(){s.$search.attr("tabindex",0),s.$search.focus(),window.setTimeout(function(){s.$search.focus()},0)}),n.on("close",function(){s.$search.attr("tabindex",-1),s.$search.val(""),s.$search.blur()}),n.on("focus",function(){n.isOpen()||s.$search.focus()}),n.on("results:all",function(t){null!=t.query.term&&""!==t.query.term||(s.showSearch(t)?s.$searchContainer.removeClass("select2-search--hide"):s.$searchContainer.addClass("select2-search--hide"))})},n.prototype.handleSearch=function(t){if(!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},n.prototype.showSearch=function(t,e){return!0},n}),e.define("select2/dropdown/hidePlaceholder",[],function(){function t(t,e,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),t.call(this,e,n,i)}return t.prototype.append=function(t,e){e.results=this.removePlaceholder(e.results),t.call(this,e)},t.prototype.normalizePlaceholder=function(t,e){return"string"==typeof e&&(e={id:"",text:e}),e},t.prototype.removePlaceholder=function(t,e){for(var n=e.slice(0),i=e.length-1;i>=0;i--){var s=e[i];this.placeholder.id===s.id&&n.splice(i,1)}return n},t}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(t){function e(t,e,n,i){this.lastParams={},t.call(this,e,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(t,e){this.$loadingMore.remove(),this.loading=!1,t.call(this,e),this.showLoadingMore(e)&&this.$results.append(this.$loadingMore)},e.prototype.bind=function(e,n,i){var s=this;e.call(this,n,i),n.on("query",function(t){s.lastParams=t,s.loading=!0}),n.on("query:append",function(t){s.lastParams=t,s.loading=!0}),this.$results.on("scroll",function(){var e=t.contains(document.documentElement,s.$loadingMore[0]);!s.loading&&e&&s.$results.offset().top+s.$results.outerHeight(!1)+50>=s.$loadingMore.offset().top+s.$loadingMore.outerHeight(!1)&&s.loadMore()})},e.prototype.loadMore=function(){this.loading=!0;var e=t.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(t,e){return e.pagination&&e.pagination.more},e.prototype.createLoadingMore=function(){var e=t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),n=this.options.get("translations").get("loadingMore");return e.html(n(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(t,e){function n(e,n,i){this.$dropdownParent=i.get("dropdownParent")||t(document.body),e.call(this,n,i)}return n.prototype.bind=function(t,e,n){var i=this,s=!1;t.call(this,e,n),e.on("open",function(){i._showDropdown(),i._attachPositioningHandler(e),s||(s=!0,e.on("results:all",function(){i._positionDropdown(),i._resizeDropdown()}),e.on("results:append",function(){i._positionDropdown(),i._resizeDropdown()}))}),e.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(e)}),this.$dropdownContainer.on("mousedown",function(t){t.stopPropagation()})},n.prototype.destroy=function(t){t.call(this),this.$dropdownContainer.remove()},n.prototype.position=function(t,e,n){e.attr("class",n.attr("class")),e.removeClass("select2"),e.addClass("select2-container--open"),e.css({position:"absolute",top:-999999}),this.$container=n},n.prototype.render=function(e){var n=t("<span></span>"),i=e.call(this);return n.append(i),this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(t){this.$dropdownContainer.detach()},n.prototype._attachPositioningHandler=function(n,i){var s=this,o="scroll.select2."+i.id,r="resize.select2."+i.id,a="orientationchange.select2."+i.id,l=this.$container.parents().filter(e.hasScroll);l.each(function(){e.StoreData(this,"select2-scroll-position",{x:t(this).scrollLeft(),y:t(this).scrollTop()})}),l.on(o,function(n){var i=e.GetData(this,"select2-scroll-position");t(this).scrollTop(i.y)}),t(window).on(o+" "+r+" "+a,function(t){s._positionDropdown(),s._resizeDropdown()})},n.prototype._detachPositioningHandler=function(n,i){var s="scroll.select2."+i.id,o="resize.select2."+i.id,r="orientationchange.select2."+i.id;this.$container.parents().filter(e.hasScroll).off(s),t(window).off(s+" "+o+" "+r)},n.prototype._positionDropdown=function(){var e=t(window),n=this.$dropdown.hasClass("select2-dropdown--above"),i=this.$dropdown.hasClass("select2-dropdown--below"),s=null,o=this.$container.offset();o.bottom=o.top+this.$container.outerHeight(!1);var r={height:this.$container.outerHeight(!1)};r.top=o.top,r.bottom=o.top+r.height;var a=this.$dropdown.outerHeight(!1),l=e.scrollTop(),c=e.scrollTop()+e.height(),h=l<o.top-a,u=c>o.bottom+a,d={left:o.left,top:r.bottom},f=this.$dropdownParent;"static"===f.css("position")&&(f=f.offsetParent());var p=f.offset();d.top-=p.top,d.left-=p.left,n||i||(s="below"),u||!h||n?!h&&u&&n&&(s="below"):s="above",("above"==s||n&&"below"!==s)&&(d.top=r.top-p.top-a),null!=s&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+s),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+s)),this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){var t={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(t.minWidth=t.width,t.position="relative",t.width="auto"),this.$dropdown.css(t)},n.prototype._showDropdown=function(t){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},n}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function t(t,e,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),t.call(this,e,n,i)}return t.prototype.showSearch=function(t,e){return!(function t(e){for(var n=0,i=0;i<e.length;i++){var s=e[i];s.children?n+=t(s.children):n++}return n}(e.data.results)<this.minimumResultsForSearch)&&t.call(this,e)},t}),e.define("select2/dropdown/selectOnClose",["../utils"],function(t){function e(){}return e.prototype.bind=function(t,e,n){var i=this;t.call(this,e,n),e.on("close",function(t){i._handleSelectOnClose(t)})},e.prototype._handleSelectOnClose=function(e,n){if(n&&null!=n.originalSelect2Event){var i=n.originalSelect2Event;if("select"===i._type||"unselect"===i._type)return}var s=this.getHighlightedResults();if(!(s.length<1)){var o=t.GetData(s[0],"data");null!=o.element&&o.element.selected||null==o.element&&o.selected||this.trigger("select",{data:o})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function t(){}return t.prototype.bind=function(t,e,n){var i=this;t.call(this,e,n),e.on("select",function(t){i._selectTriggered(t)}),e.on("unselect",function(t){i._selectTriggered(t)})},t.prototype._selectTriggered=function(t,e){var n=e.originalEvent;n&&n.ctrlKey||this.trigger("close",{originalEvent:n,originalSelect2Event:e})},t}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(t){var e=t.input.length-t.maximum,n="Please delete "+e+" character";return 1!=e&&(n+="s"),n},inputTooShort:function(t){return"Please enter "+(t.minimum-t.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(t){var e="You can only select "+t.maximum+" item";return 1!=t.maximum&&(e+="s"),e},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(t,e,n,i,s,o,r,a,l,c,h,u,d,f,p,m,g,v,y,b,_,w,D,k,C,x,T,S,E){function M(){this.reset()}return M.prototype.apply=function(u){if(null==(u=t.extend(!0,{},this.defaults,u)).dataAdapter){if(null!=u.ajax?u.dataAdapter=p:null!=u.data?u.dataAdapter=f:u.dataAdapter=d,u.minimumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,v)),u.maximumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,y)),u.maximumSelectionLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,b)),u.tags&&(u.dataAdapter=c.Decorate(u.dataAdapter,m)),null==u.tokenSeparators&&null==u.tokenizer||(u.dataAdapter=c.Decorate(u.dataAdapter,g)),null!=u.query){var E=e(u.amdBase+"compat/query");u.dataAdapter=c.Decorate(u.dataAdapter,E)}if(null!=u.initSelection){var M=e(u.amdBase+"compat/initSelection");u.dataAdapter=c.Decorate(u.dataAdapter,M)}}if(null==u.resultsAdapter&&(u.resultsAdapter=n,null!=u.ajax&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,k)),null!=u.placeholder&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,D)),u.selectOnClose&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,T))),null==u.dropdownAdapter){if(u.multiple)u.dropdownAdapter=_;else{var A=c.Decorate(_,w);u.dropdownAdapter=A}if(0!==u.minimumResultsForSearch&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,x)),u.closeOnSelect&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,S)),null!=u.dropdownCssClass||null!=u.dropdownCss||null!=u.adaptDropdownCssClass){var O=e(u.amdBase+"compat/dropdownCss");u.dropdownAdapter=c.Decorate(u.dropdownAdapter,O)}u.dropdownAdapter=c.Decorate(u.dropdownAdapter,C)}if(null==u.selectionAdapter){if(u.multiple?u.selectionAdapter=s:u.selectionAdapter=i,null!=u.placeholder&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,o)),u.allowClear&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,r)),u.multiple&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,a)),null!=u.containerCssClass||null!=u.containerCss||null!=u.adaptContainerCssClass){var I=e(u.amdBase+"compat/containerCss");u.selectionAdapter=c.Decorate(u.selectionAdapter,I)}u.selectionAdapter=c.Decorate(u.selectionAdapter,l)}if("string"==typeof u.language)if(u.language.indexOf("-")>0){var N=u.language.split("-")[0];u.language=[u.language,N]}else u.language=[u.language];if(t.isArray(u.language)){var P=new h;u.language.push("en");for(var L=u.language,j=0;j<L.length;j++){var Y=L[j],H={};try{H=h.loadPath(Y)}catch(t){try{Y=this.defaults.amdLanguageBase+Y,H=h.loadPath(Y)}catch(t){u.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+Y+'" could not be automatically loaded. A fallback will be used instead.');continue}}P.extend(H)}u.translations=P}else{var $=h.loadPath(this.defaults.amdLanguageBase+"en"),R=new h(u.language);R.extend($),u.translations=R}return u},M.prototype.reset=function(){function e(t){return t.replace(/[^\u0000-\u007E]/g,function(t){return u[t]||t})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:E,matcher:function n(i,s){if(""===t.trim(i.term))return s;if(s.children&&s.children.length>0){for(var o=t.extend(!0,{},s),r=s.children.length-1;r>=0;r--)null==n(i,s.children[r])&&o.children.splice(r,1);return o.children.length>0?o:n(i,o)}var a=e(s.text).toUpperCase(),l=e(i.term).toUpperCase();return a.indexOf(l)>-1?s:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(t){return t},templateResult:function(t){return t.text},templateSelection:function(t){return t.text},theme:"default",width:"resolve"}},M.prototype.set=function(e,n){var i={};i[t.camelCase(e)]=n;var s=c._convertData(i);t.extend(!0,this.defaults,s)},new M}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(t,e,n,i){function s(e,s){if(this.options=e,null!=s&&this.fromElement(s),this.options=n.apply(this.options),s&&s.is("input")){var o=t(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=i.Decorate(this.options.dataAdapter,o)}}return s.prototype.fromElement=function(t){var n=["select2"];null==this.options.multiple&&(this.options.multiple=t.prop("multiple")),null==this.options.disabled&&(this.options.disabled=t.prop("disabled")),null==this.options.language&&(t.prop("lang")?this.options.language=t.prop("lang").toLowerCase():t.closest("[lang]").prop("lang")&&(this.options.language=t.closest("[lang]").prop("lang"))),null==this.options.dir&&(t.prop("dir")?this.options.dir=t.prop("dir"):t.closest("[dir]").prop("dir")?this.options.dir=t.closest("[dir]").prop("dir"):this.options.dir="ltr"),t.prop("disabled",this.options.disabled),t.prop("multiple",this.options.multiple),i.GetData(t[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),i.StoreData(t[0],"data",i.GetData(t[0],"select2Tags")),i.StoreData(t[0],"tags",!0)),i.GetData(t[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),t.attr("ajax--url",i.GetData(t[0],"ajaxUrl")),i.StoreData(t[0],"ajax-Url",i.GetData(t[0],"ajaxUrl")));var s;s=e.fn.jquery&&"1."==e.fn.jquery.substr(0,2)&&t[0].dataset?e.extend(!0,{},t[0].dataset,i.GetData(t[0])):i.GetData(t[0]);var o=e.extend(!0,{},s);for(var r in o=i._convertData(o))e.inArray(r,n)>-1||(e.isPlainObject(this.options[r])?e.extend(this.options[r],o[r]):this.options[r]=o[r]);return this},s.prototype.get=function(t){return this.options[t]},s.prototype.set=function(t,e){this.options[t]=e},s}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(t,e,n,i){var s=function(t,i){null!=n.GetData(t[0],"select2")&&n.GetData(t[0],"select2").destroy(),this.$element=t,this.id=this._generateId(t),i=i||{},this.options=new e(i,t),s.__super__.constructor.call(this);var o=t.attr("tabindex")||0;n.StoreData(t[0],"old-tabindex",o),t.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(t,this.options);var a=this.render();this._placeContainer(a);var l=this.options.get("selectionAdapter");this.selection=new l(t,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,a);var c=this.options.get("dropdownAdapter");this.dropdown=new c(t,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,a);var h=this.options.get("resultsAdapter");this.results=new h(t,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var u=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(t){u.trigger("selection:update",{data:t})}),t.addClass("select2-hidden-accessible"),t.attr("aria-hidden","true"),this._syncAttributes(),n.StoreData(t[0],"select2",this),t.data("select2",this)};return n.Extend(s,n.Observable),s.prototype._generateId=function(t){return"select2-"+(null!=t.attr("id")?t.attr("id"):null!=t.attr("name")?t.attr("name")+"-"+n.generateChars(2):n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},s.prototype._placeContainer=function(t){t.insertAfter(this.$element);var e=this._resolveWidth(this.$element,this.options.get("width"));null!=e&&t.css("width",e)},s.prototype._resolveWidth=function(t,e){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==e){var i=this._resolveWidth(t,"style");return null!=i?i:this._resolveWidth(t,"element")}if("element"==e){var s=t.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"==e){var o=t.attr("style");if("string"!=typeof o)return null;for(var r=o.split(";"),a=0,l=r.length;a<l;a+=1){var c=r[a].replace(/\s/g,"").match(n);if(null!==c&&c.length>=1)return c[1]}return null}return e},s.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},s.prototype._registerDomEvents=function(){var e=this;this.$element.on("change.select2",function(){e.dataAdapter.current(function(t){e.trigger("selection:update",{data:t})})}),this.$element.on("focus.select2",function(t){e.trigger("focus",t)}),this._syncA=n.bind(this._syncAttributes,this),this._syncS=n.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var i=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=i?(this._observer=new i(function(n){t.each(n,e._syncA),t.each(n,e._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",e._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",e._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",e._syncS,!1))},s.prototype._registerDataEvents=function(){var t=this;this.dataAdapter.on("*",function(e,n){t.trigger(e,n)})},s.prototype._registerSelectionEvents=function(){var e=this,n=["toggle","focus"];this.selection.on("toggle",function(){e.toggleDropdown()}),this.selection.on("focus",function(t){e.focus(t)}),this.selection.on("*",function(i,s){-1===t.inArray(i,n)&&e.trigger(i,s)})},s.prototype._registerDropdownEvents=function(){var t=this;this.dropdown.on("*",function(e,n){t.trigger(e,n)})},s.prototype._registerResultsEvents=function(){var t=this;this.results.on("*",function(e,n){t.trigger(e,n)})},s.prototype._registerEvents=function(){var t=this;this.on("open",function(){t.$container.addClass("select2-container--open")}),this.on("close",function(){t.$container.removeClass("select2-container--open")}),this.on("enable",function(){t.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){t.$container.addClass("select2-container--disabled")}),this.on("blur",function(){t.$container.removeClass("select2-container--focus")}),this.on("query",function(e){t.isOpen()||t.trigger("open",{}),this.dataAdapter.query(e,function(n){t.trigger("results:all",{data:n,query:e})})}),this.on("query:append",function(e){this.dataAdapter.query(e,function(n){t.trigger("results:append",{data:n,query:e})})}),this.on("keypress",function(e){var n=e.which;t.isOpen()?n===i.ESC||n===i.TAB||n===i.UP&&e.altKey?(t.close(),e.preventDefault()):n===i.ENTER?(t.trigger("results:select",{}),e.preventDefault()):n===i.SPACE&&e.ctrlKey?(t.trigger("results:toggle",{}),e.preventDefault()):n===i.UP?(t.trigger("results:previous",{}),e.preventDefault()):n===i.DOWN&&(t.trigger("results:next",{}),e.preventDefault()):(n===i.ENTER||n===i.SPACE||n===i.DOWN&&e.altKey)&&(t.open(),e.preventDefault())})},s.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},s.prototype._syncSubtree=function(t,e){var n=!1,i=this;if(!t||!t.target||"OPTION"===t.target.nodeName||"OPTGROUP"===t.target.nodeName){if(e)if(e.addedNodes&&e.addedNodes.length>0)for(var s=0;s<e.addedNodes.length;s++){e.addedNodes[s].selected&&(n=!0)}else e.removedNodes&&e.removedNodes.length>0&&(n=!0);else n=!0;n&&this.dataAdapter.current(function(t){i.trigger("selection:update",{data:t})})}},s.prototype.trigger=function(t,e){var n=s.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===e&&(e={}),t in i){var o=i[t],r={prevented:!1,name:t,args:e};if(n.call(this,o,r),r.prevented)return void(e.prevented=!0)}n.call(this,t,e)},s.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},s.prototype.open=function(){this.isOpen()||this.trigger("query",{})},s.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},s.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},s.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},s.prototype.focus=function(t){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},s.prototype.enable=function(t){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=t&&0!==t.length||(t=[!0]);var e=!t[0];this.$element.prop("disabled",e)},s.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},s.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var n=e[0];t.isArray(n)&&(n=t.map(n,function(t){return t.toString()})),this.$element.val(n).trigger("change")},s.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",n.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),n.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},s.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),n.StoreData(e[0],"element",this.$element),e},s}),e.define("jquery-mousewheel",["jquery"],function(t){return t}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(t,e,n,i,s){if(null==t.fn.select2){var o=["open","close","destroy"];t.fn.select2=function(e){if("object"==typeof(e=e||{}))return this.each(function(){var i=t.extend(!0,{},e);new n(t(this),i)}),this;if("string"==typeof e){var i,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=s.GetData(this,"select2");null==t&&window.console&&console.error&&console.error("The select2('"+e+"') method was called on an element that is not using Select2."),i=t[e].apply(t,r)}),t.inArray(e,o)>-1?this:i}throw new Error("Invalid arguments for Select2: "+e)}}return null==t.fn.select2.defaults&&(t.fn.select2.defaults=i),n}),{define:e.define,require:e.require}}(),n=e.require("jquery.select2");return t.fn.select2.amd=e,n});var $jscomp={scope:{},findInternal:function(t,e,n){t instanceof String&&(t=String(t));for(var i=t.length,s=0;s<i;s++){var o=t[s];if(e.call(n,o,s,t))return{i:s,v:o}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof global&&null!=global?global:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(t,e,n,i){if(e){for(n=$jscomp.global,t=t.split("."),i=0;i<t.length-1;i++){var s=t[i];s in n||(n[s]={}),n=n[s]}(e=e(i=n[t=t[t.length-1]]))!=i&&null!=e&&$jscomp.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.find",function(t){return t||function(t,e){return $jscomp.findInternal(this,t,e).v}},"es6-impl","es3"),function(t,e,n){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(e||n)}(function(t){var e=function(e,n,i){var s={invalid:[],getCaret:function(){try{var t,n=0,i=e.get(0),o=document.selection,r=i.selectionStart;return o&&-1===navigator.appVersion.indexOf("MSIE 10")?((t=o.createRange()).moveStart("character",-s.val().length),n=t.text.length):(r||"0"===r)&&(n=r),n}catch(t){}},setCaret:function(t){try{if(e.is(":focus")){var n,i=e.get(0);i.setSelectionRange?i.setSelectionRange(t,t):((n=i.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select())}}catch(t){}},events:function(){e.on("keydown.mask",function(t){e.data("mask-keycode",t.keyCode||t.which),e.data("mask-previus-value",e.val()),e.data("mask-previus-caret-pos",s.getCaret()),s.maskDigitPosMapOld=s.maskDigitPosMap}).on(t.jMaskGlobals.useInput?"input.mask":"keyup.mask",s.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){e.keydown().keyup()},100)}).on("change.mask",function(){e.data("changed",!0)}).on("blur.mask",function(){a===s.val()||e.data("changed")||e.trigger("change"),e.data("changed",!1)}).on("blur.mask",function(){a=s.val()}).on("focus.mask",function(e){!0===i.selectOnFocus&&t(e.target).select()}).on("focusout.mask",function(){i.clearIfNotMatch&&!o.test(s.val())&&s.val("")})},getRegexMask:function(){for(var t,e,i,s,o=[],a=0;a<n.length;a++)(t=r.translation[n.charAt(a)])?(e=t.pattern.toString().replace(/.{1}$|^.{1}/g,""),i=t.optional,(t=t.recursive)?(o.push(n.charAt(a)),s={digit:n.charAt(a),pattern:e}):o.push(i||t?e+"?":e)):o.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return o=o.join(""),s&&(o=o.replace(new RegExp("("+s.digit+"(.*"+s.digit+")?)"),"($1)?").replace(new RegExp(s.digit,"g"),s.pattern)),new RegExp(o)},destroyEvents:function(){e.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(t){var n=e.is("input")?"val":"text";return 0<arguments.length?(e[n]()!==t&&e[n](t),n=e):n=e[n](),n},calculateCaretPosition:function(){var t=e.data("mask-previus-value")||"",n=s.getMasked(),i=s.getCaret();if(t!==n){var o,r=e.data("mask-previus-caret-pos")||0,a=(n=n.length,t.length),l=t=0,c=0,h=0;for(o=i;o<n&&s.maskDigitPosMap[o];o++)l++;for(o=i-1;0<=o&&s.maskDigitPosMap[o];o--)t++;for(o=i-1;0<=o;o--)s.maskDigitPosMap[o]&&c++;for(o=r-1;0<=o;o--)s.maskDigitPosMapOld[o]&&h++;i>a?i=10*n:r>=i&&r!==a?s.maskDigitPosMapOld[i]||(r=i,i=i-(h-c)-t,s.maskDigitPosMap[i]&&(i=r)):i>r&&(i=i+(c-h)+l)}return i},behaviour:function(n){n=n||window.event,s.invalid=[];var i=e.data("mask-keycode");if(-1===t.inArray(i,r.byPassKeys)){i=s.getMasked();var o=s.getCaret();return setTimeout(function(){s.setCaret(s.calculateCaretPosition())},t.jMaskGlobals.keyStrokeCompensation),s.val(i),s.setCaret(o),s.callbacks(n)}},getMasked:function(t,e){var o,a,l,c=[],h=void 0===e?s.val():e+"",u=0,d=n.length,f=0,p=h.length,m=1,g="push",v=-1,y=0,b=[];for(i.reverse?(g="unshift",m=-1,o=0,u=d-1,f=p-1,a=function(){return-1<u&&-1<f}):(o=d-1,a=function(){return u<d&&f<p});a();){var _=n.charAt(u),w=h.charAt(f),D=r.translation[_];D?(w.match(D.pattern)?(c[g](w),D.recursive&&(-1===v?v=u:u===o&&u!==v&&(u=v-m),o===v&&(u-=m)),u+=m):w===l?(y--,l=void 0):D.optional?(u+=m,f-=m):D.fallback?(c[g](D.fallback),u+=m,f-=m):s.invalid.push({p:f,v:w,e:D.pattern}),f+=m):(t||c[g](_),w===_?(b.push(f),f+=m):(l=_,b.push(f+y),y++),u+=m)}return h=n.charAt(o),d!==p+1||r.translation[h]||c.push(h),c=c.join(""),s.mapMaskdigitPositions(c,b,p),c},mapMaskdigitPositions:function(t,e,n){for(t=i.reverse?t.length-n:0,s.maskDigitPosMap={},n=0;n<e.length;n++)s.maskDigitPosMap[e[n]+t]=1},callbacks:function(t){var o=s.val(),r=o!==a,l=[o,t,e,i],c=function(t,e,n){"function"==typeof i[t]&&e&&i[t].apply(this,n)};c("onChange",!0===r,l),c("onKeyPress",!0===r,l),c("onComplete",o.length===n.length,l),c("onInvalid",0<s.invalid.length,[o,t,e,s.invalid,i])}};e=t(e);var o,r=this,a=s.val();n="function"==typeof n?n(s.val(),void 0,e,i):n,r.mask=n,r.options=i,r.remove=function(){var t=s.getCaret();return r.options.placeholder&&e.removeAttr("placeholder"),e.data("mask-maxlength")&&e.removeAttr("maxlength"),s.destroyEvents(),s.val(r.getCleanVal()),s.setCaret(t),e},r.getCleanVal=function(){return s.getMasked(!0)},r.getMaskedVal=function(t){return s.getMasked(!1,t)},r.init=function(a){if(a=a||!1,i=i||{},r.clearIfNotMatch=t.jMaskGlobals.clearIfNotMatch,r.byPassKeys=t.jMaskGlobals.byPassKeys,r.translation=t.extend({},t.jMaskGlobals.translation,i.translation),r=t.extend(!0,{},r,i),o=s.getRegexMask(),a)s.events(),s.val(s.getMasked());else{i.placeholder&&e.attr("placeholder",i.placeholder),e.data("mask")&&e.attr("autocomplete","off"),a=0;for(var l=!0;a<n.length;a++){var c=r.translation[n.charAt(a)];if(c&&c.recursive){l=!1;break}}l&&e.attr("maxlength",n.length).data("mask-maxlength",!0),s.destroyEvents(),s.events(),a=s.getCaret(),s.val(s.getMasked()),s.setCaret(a)}},r.init(!e.is("input"))};t.maskWatchers={};var n=function(){var n=t(this),s={},o=n.attr("data-mask");if(n.attr("data-mask-reverse")&&(s.reverse=!0),n.attr("data-mask-clearifnotmatch")&&(s.clearIfNotMatch=!0),"true"===n.attr("data-mask-selectonfocus")&&(s.selectOnFocus=!0),i(n,o,s))return n.data("mask",new e(this,o,s))},i=function(e,n,i){i=i||{};var s=t(e).data("mask"),o=JSON.stringify;e=t(e).val()||t(e).text();try{return"function"==typeof n&&(n=n(e)),"object"!=typeof s||o(s.options)!==o(i)||s.mask!==n}catch(t){}},s=function(t){var e,n=document.createElement("div");return(e=(t="on"+t)in n)||(n.setAttribute(t,"return;"),e="function"==typeof n[t]),e};t.fn.mask=function(n,s){s=s||{};var o=this.selector,r=(a=t.jMaskGlobals).watchInterval,a=s.watchInputs||a.watchInputs,l=function(){if(i(this,n,s))return t(this).data("mask",new e(this,n,s))};return t(this).each(l),o&&""!==o&&a&&(clearInterval(t.maskWatchers[o]),t.maskWatchers[o]=setInterval(function(){t(document).find(o).each(l)},r)),this},t.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},t.fn.unmask=function(){return clearInterval(t.maskWatchers[this.selector]),delete t.maskWatchers[this.selector],this.each(function(){var e=t(this).data("mask");e&&e.remove().removeData("mask")})},t.fn.cleanVal=function(){return this.data("mask").getCleanVal()},t.applyDataMask=function(e){((e=e||t.jMaskGlobals.maskElements)instanceof t?e:t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(n)},s={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&s("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}},t.jMaskGlobals=t.jMaskGlobals||{},(s=t.jMaskGlobals=t.extend(!0,{},s,t.jMaskGlobals)).dataMask&&t.applyDataMask(),setInterval(function(){t.jMaskGlobals.watchDataMask&&t.applyDataMask()},s.watchInterval)},window.jQuery,window.Zepto),function(t){t.fn.bootstrapWizard=function(e){if("string"==typeof e){var n=Array.prototype.slice.call(arguments,1);return 1===n.length&&n.toString(),this.data("bootstrapWizard")[e](n)}return this.each(function(n){if(!(n=t(this)).data("bootstrapWizard")){var i=new function(e,n){e=t(e);var i=this,s=[],o=t.extend({},t.fn.bootstrapWizard.defaults,n),r=null,a=null;this.rebindClick=function(t,e){t.unbind("click",e).bind("click",e)},this.fixNavigationButtons=function(){if(r.length||(a.find("a:first").tab("show"),r=a.find('li:has([data-toggle="tab"]):first')),t(o.previousSelector,e).toggleClass("disabled",i.firstIndex()>=i.currentIndex()),t(o.nextSelector,e).toggleClass("disabled",i.currentIndex()>=i.navigationLength()),t(o.backSelector,e).toggleClass("disabled",0==s.length),i.rebindClick(t(o.nextSelector,e),i.next),i.rebindClick(t(o.previousSelector,e),i.previous),i.rebindClick(t(o.lastSelector,e),i.last),i.rebindClick(t(o.firstSelector,e),i.first),i.rebindClick(t(o.backSelector,e),i.back),o.onTabShow&&"function"==typeof o.onTabShow&&!1===o.onTabShow(r,a,i.currentIndex()))return!1},this.next=function(t){if(e.hasClass("last")||o.onNext&&"function"==typeof o.onNext&&!1===o.onNext(r,a,i.nextIndex()))return!1;t=i.currentIndex(),$index=i.nextIndex(),$index>i.navigationLength()||(s.push(t),a.find('li:has([data-toggle="tab"]):eq('+$index+") a").tab("show"))},this.previous=function(t){if(e.hasClass("first")||o.onPrevious&&"function"==typeof o.onPrevious&&!1===o.onPrevious(r,a,i.previousIndex()))return!1;t=i.currentIndex(),$index=i.previousIndex(),0>$index||(s.push(t),a.find('li:has([data-toggle="tab"]):eq('+$index+") a").tab("show"))},this.first=function(t){if(o.onFirst&&"function"==typeof o.onFirst&&!1===o.onFirst(r,a,i.firstIndex())||e.hasClass("disabled"))return!1;s.push(i.currentIndex()),a.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")},this.last=function(t){if(o.onLast&&"function"==typeof o.onLast&&!1===o.onLast(r,a,i.lastIndex())||e.hasClass("disabled"))return!1;s.push(i.currentIndex()),a.find('li:has([data-toggle="tab"]):eq('+i.navigationLength()+") a").tab("show")},this.back=function(){if(0==s.length)return null;var t=s.pop();if(o.onBack&&"function"==typeof o.onBack&&!1===o.onBack(r,a,t))return s.push(t),!1;e.find('li:has([data-toggle="tab"]):eq('+t+") a").tab("show")},this.currentIndex=function(){return a.find('li:has([data-toggle="tab"])').index(r)},this.firstIndex=function(){return 0},this.lastIndex=function(){return i.navigationLength()},this.getIndex=function(t){return a.find('li:has([data-toggle="tab"])').index(t)},this.nextIndex=function(){return a.find('li:has([data-toggle="tab"])').index(r)+1},this.previousIndex=function(){return a.find('li:has([data-toggle="tab"])').index(r)-1},this.navigationLength=function(){return a.find('li:has([data-toggle="tab"])').length-1},this.activeTab=function(){return r},this.nextTab=function(){return a.find('li:has([data-toggle="tab"]):eq('+(i.currentIndex()+1)+")").length?a.find('li:has([data-toggle="tab"]):eq('+(i.currentIndex()+1)+")"):null},this.previousTab=function(){return 0>=i.currentIndex()?null:a.find('li:has([data-toggle="tab"]):eq('+parseInt(i.currentIndex()-1)+")")},this.show=function(t){0<(t=isNaN(t)?e.find('li:has([data-toggle="tab"]) a[href=#'+t+"]"):e.find('li:has([data-toggle="tab"]):eq('+t+") a")).length&&(s.push(i.currentIndex()),t.tab("show"))},this.disable=function(t){a.find('li:has([data-toggle="tab"]):eq('+t+")").addClass("disabled")},this.enable=function(t){a.find('li:has([data-toggle="tab"]):eq('+t+")").removeClass("disabled")},this.hide=function(t){a.find('li:has([data-toggle="tab"]):eq('+t+")").hide()},this.display=function(t){a.find('li:has([data-toggle="tab"]):eq('+t+")").show()},this.remove=function(e){var n=void 0!==e[1]&&e[1];e=a.find('li:has([data-toggle="tab"]):eq('+e[0]+")"),n&&(n=e.find("a").attr("href"),t(n).remove()),e.remove()};var l=function(e){var n=a.find('li:has([data-toggle="tab"])');if(e=n.index(t(e.currentTarget).parent('li:has([data-toggle="tab"])')),n=t(n[e]),o.onTabClick&&"function"==typeof o.onTabClick&&!1===o.onTabClick(r,a,i.currentIndex(),e,n))return!1},c=function(e){if($element=t(e.target).parent(),e=a.find('li:has([data-toggle="tab"])').index($element),$element.hasClass("disabled")||o.onTabChange&&"function"==typeof o.onTabChange&&!1===o.onTabChange(r,a,i.currentIndex(),e))return!1;r=$element,i.fixNavigationButtons()};this.resetWizard=function(){t('a[data-toggle="tab"]',a).off("click",l),t('a[data-toggle="tab"]',a).off("shown shown.bs.tab",c),a=e.find("ul:first",e),r=a.find('li:has([data-toggle="tab"]).active',e),t('a[data-toggle="tab"]',a).on("click",l),t('a[data-toggle="tab"]',a).on("shown shown.bs.tab",c),i.fixNavigationButtons()},a=e.find("ul:first",e),r=a.find('li:has([data-toggle="tab"]).active',e),a.hasClass(o.tabClass)||a.addClass(o.tabClass),o.onInit&&"function"==typeof o.onInit&&o.onInit(r,a,0),o.onShow&&"function"==typeof o.onShow&&o.onShow(r,a,i.nextIndex()),t('a[data-toggle="tab"]',a).on("click",l),t('a[data-toggle="tab"]',a).on("shown shown.bs.tab",c)}(n,e);n.data("bootstrapWizard",i),i.fixNavigationButtons()}})},t.fn.bootstrapWizard.defaults={tabClass:"nav nav-pills",nextSelector:".wizard li.next",previousSelector:".wizard li.previous",firstSelector:".wizard li.first",lastSelector:".wizard li.last",backSelector:".wizard li.back",onShow:null,onInit:null,onNext:null,onPrevious:null,onLast:null,onFirst:null,onBack:null,onTabChange:null,onTabClick:null,onTabShow:null}}(jQuery),function(t,e,n){"use strict";var i=function(e,n){this.widget="",this.$element=t(e),this.defaultTime=n.defaultTime,this.disableFocus=n.disableFocus,this.disableMousewheel=n.disableMousewheel,this.isOpen=n.isOpen,this.minuteStep=n.minuteStep,this.modalBackdrop=n.modalBackdrop,this.orientation=n.orientation,this.secondStep=n.secondStep,this.snapToStep=n.snapToStep,this.showInputs=n.showInputs,this.showMeridian=n.showMeridian,this.showSeconds=n.showSeconds,this.template=n.template,this.appendWidgetTo=n.appendWidgetTo,this.showWidgetOnAddonClick=n.showWidgetOnAddonClick,this.icons=n.icons,this.maxHours=n.maxHours,this.explicitMode=n.explicitMode,this.handleDocumentClick=function(t){var e=t.data.scope;e.$element.parent().find(t.target).length||e.$widget.is(t.target)||e.$widget.find(t.target).length||e.hideWidget()},this._init()};i.prototype={constructor:i,_init:function(){var e=this;this.showWidgetOnAddonClick&&this.$element.parent().hasClass("input-group")&&this.$element.parent().hasClass("bootstrap-timepicker")?(this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({"click.timepicker":t.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":t.proxy(this.highlightUnit,this),"click.timepicker":t.proxy(this.highlightUnit,this),"keydown.timepicker":t.proxy(this.elementKeydown,this),"blur.timepicker":t.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":t.proxy(this.mousewheel,this)})):this.template?this.$element.on({"focus.timepicker":t.proxy(this.showWidget,this),"click.timepicker":t.proxy(this.showWidget,this),"blur.timepicker":t.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":t.proxy(this.mousewheel,this)}):this.$element.on({"focus.timepicker":t.proxy(this.highlightUnit,this),"click.timepicker":t.proxy(this.highlightUnit,this),"keydown.timepicker":t.proxy(this.elementKeydown,this),"blur.timepicker":t.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":t.proxy(this.mousewheel,this)}),!1!==this.template?this.$widget=t(this.getTemplate()).on("click",t.proxy(this.widgetClick,this)):this.$widget=!1,this.showInputs&&!1!==this.$widget&&this.$widget.find("input").each(function(){t(this).on({"click.timepicker":function(){t(this).select()},"keydown.timepicker":t.proxy(e.widgetKeydown,e),"keyup.timepicker":t.proxy(e.widgetKeyup,e)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=null,this.updateFromElementVal()},clear:function(){this.hour="",this.minute="",this.second="",this.meridian="",this.$element.val("")},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else this.hour<=0?this.hour=this.maxHours-1:this.hour--},decrementMinute:function(t){var e;0>(e=t?this.minute-t:this.minute-this.minuteStep)?(this.decrementHour(),this.minute=e+60):this.minute=e},decrementSecond:function(){var t=this.second-this.secondStep;0>t?(this.decrementMinute(!0),this.second=t+60):this.second=t},elementKeydown:function(t){switch(t.which){case 9:if(t.shiftKey){if("hour"===this.highlightedUnit){this.hideWidget();break}this.highlightPrevUnit()}else{if(this.showMeridian&&"meridian"===this.highlightedUnit||this.showSeconds&&"second"===this.highlightedUnit||!this.showMeridian&&!this.showSeconds&&"minute"===this.highlightedUnit){this.hideWidget();break}this.highlightNextUnit()}t.preventDefault(),this.updateFromElementVal();break;case 27:this.updateFromElementVal();break;case 37:t.preventDefault(),this.highlightPrevUnit(),this.updateFromElementVal();break;case 38:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update();break;case 39:t.preventDefault(),this.highlightNextUnit(),this.updateFromElementVal();break;case 40:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update()}},getCursorPosition:function(){var t=this.$element.get(0);if("selectionStart"in t)return t.selectionStart;if(n.selection){t.focus();var e=n.selection.createRange(),i=n.selection.createRange().text.length;return e.moveStart("character",-t.value.length),e.text.length-i}},getTemplate:function(){var t,e,n,i,s,o;switch(this.showInputs?(e='<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>',n='<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>',i='<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>',s='<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>'):(e='<span class="bootstrap-timepicker-hour"></span>',n='<span class="bootstrap-timepicker-minute"></span>',i='<span class="bootstrap-timepicker-second"></span>',s='<span class="bootstrap-timepicker-meridian"></span>'),o='<table><tr><td><a href="#" data-action="incrementHour"><span class="'+this.icons.up+'"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="'+this.icons.up+'"></span></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="'+this.icons.up+'"></span></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="'+this.icons.up+'"></span></a></td>':"")+"</tr><tr><td>"+e+'</td> <td class="separator">:</td><td>'+n+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+i+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+s+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><span class="'+this.icons.down+'"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="'+this.icons.down+'"></span></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="'+this.icons.down+'"></span></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="'+this.icons.down+'"></span></a></td>':"")+"</tr></table>",this.template){case"modal":t='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">'+o+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":t='<div class="bootstrap-timepicker-widget dropdown-menu">'+o+"</div>"}return t},getTime:function(){return""===this.hour?"":this.hour+":"+(1===this.minute.toString().length?"0"+this.minute:this.minute)+(this.showSeconds?":"+(1===this.second.toString().length?"0"+this.second:this.second):"")+(this.showMeridian?" "+this.meridian:"")},hideWidget:function(){!1!==this.isOpen&&(this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),t(n).off("mousedown.timepicker, touchend.timepicker",this.handleDocumentClick),this.isOpen=!1,this.$widget.detach())},highlightUnit:function(){this.position=this.getCursorPosition(),this.position>=0&&this.position<=2?this.highlightHour():this.position>=3&&this.position<=5?this.highlightMinute():this.position>=6&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():this.position>=9&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.showMeridian?this.highlightMeridian():this.showSeconds?this.highlightSecond():this.highlightMinute();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="hour",t.setSelectionRange&&setTimeout(function(){e.hour<10?t.setSelectionRange(0,1):t.setSelectionRange(0,2)},0)},highlightMinute:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="minute",t.setSelectionRange&&setTimeout(function(){e.hour<10?t.setSelectionRange(2,4):t.setSelectionRange(3,5)},0)},highlightSecond:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="second",t.setSelectionRange&&setTimeout(function(){e.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0)},highlightMeridian:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="meridian",t.setSelectionRange&&(this.showSeconds?setTimeout(function(){e.hour<10?t.setSelectionRange(8,10):t.setSelectionRange(9,11)},0):setTimeout(function(){e.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}return this.hour===this.maxHours-1?void(this.hour=0):void this.hour++},incrementMinute:function(t){var e;(e=t?this.minute+t:this.minute+this.minuteStep-this.minute%this.minuteStep)>59?(this.incrementHour(),this.minute=e-60):this.minute=e},incrementSecond:function(){var t=this.second+this.secondStep-this.second%this.secondStep;t>59?(this.incrementMinute(!0),this.second=t-60):this.second=t},mousewheel:function(e){if(!this.disableMousewheel){e.preventDefault(),e.stopPropagation();var n=e.originalEvent.wheelDelta||-e.originalEvent.detail,i=null;switch("mousewheel"===e.type?i=-1*e.originalEvent.wheelDelta:"DOMMouseScroll"===e.type&&(i=40*e.originalEvent.detail),i&&(e.preventDefault(),t(this).scrollTop(i+t(this).scrollTop())),this.highlightedUnit){case"minute":n>0?this.incrementMinute():this.decrementMinute(),this.highlightMinute();break;case"second":n>0?this.incrementSecond():this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian();break;default:n>0?this.incrementHour():this.decrementHour(),this.highlightHour()}return!1}},changeToNearestStep:function(t,e){return t%e==0?t:Math.round(t%e/e)?(t+(e-t%e))%60:t-t%e},place:function(){if(!this.isInline){var n=this.$widget.outerWidth(),i=this.$widget.outerHeight(),s=t(e).width(),o=t(e).height(),r=t(e).scrollTop(),a=parseInt(this.$element.parents().filter(function(){return"auto"!==t(this).css("z-index")}).first().css("z-index"),10)+10,l=this.component?this.component.parent().offset():this.$element.offset(),c=this.component?this.component.outerHeight(!0):this.$element.outerHeight(!1),h=this.component?this.component.outerWidth(!0):this.$element.outerWidth(!1),u=l.left,d=l.top;this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),"auto"!==this.orientation.x?(this.$widget.addClass("timepicker-orient-"+this.orientation.x),"right"===this.orientation.x&&(u-=n-h)):(this.$widget.addClass("timepicker-orient-left"),l.left<0?u-=l.left-10:l.left+n>s&&(u=s-n-10));var f,p,m=this.orientation.y;"auto"===m&&(f=-r+l.top-i,p=r+o-(l.top+c+i),m=Math.max(f,p)===p?"top":"bottom"),this.$widget.addClass("timepicker-orient-"+m),"top"===m?d+=c:d-=i+parseInt(this.$widget.css("padding-top"),10),this.$widget.css({top:d,left:u,zIndex:a})}},remove:function(){t("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(t){if(this.$element.val())this.updateFromElementVal();else if("current"===t){var e=new Date,n=e.getHours(),i=e.getMinutes(),s=e.getSeconds(),o="AM";0!==s&&(60===(s=Math.ceil(e.getSeconds()/this.secondStep)*this.secondStep)&&(i+=1,s=0)),0!==i&&(60===(i=Math.ceil(e.getMinutes()/this.minuteStep)*this.minuteStep)&&(n+=1,i=0)),this.showMeridian&&(0===n?n=12:n>=12?(n>12&&(n-=12),o="PM"):o="AM"),this.hour=n,this.minute=i,this.second=s,this.meridian=o,this.update()}else!1===t?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(t)},setTime:function(t,e){if(t){var n,i,s,o,r,a;if("object"==typeof t&&t.getMonth)s=t.getHours(),o=t.getMinutes(),r=t.getSeconds(),this.showMeridian&&(a="AM",s>12&&(a="PM",s%=12),12===s&&(a="PM"));else{if((n=(/a/i.test(t)?1:0)+(/p/i.test(t)?2:0))>2)return void this.clear();if(s=(i=t.replace(/[^0-9\:]/g,"").split(":"))[0]?i[0].toString():i.toString(),this.explicitMode&&s.length>2&&s.length%2!=0)return void this.clear();o=i[1]?i[1].toString():"",r=i[2]?i[2].toString():"",s.length>4&&(r=s.slice(-2),s=s.slice(0,-2)),s.length>2&&(o=s.slice(-2),s=s.slice(0,-2)),o.length>2&&(r=o.slice(-2),o=o.slice(0,-2)),s=parseInt(s,10),o=parseInt(o,10),r=parseInt(r,10),isNaN(s)&&(s=0),isNaN(o)&&(o=0),isNaN(r)&&(r=0),r>59&&(r=59),o>59&&(o=59),s>=this.maxHours&&(s=this.maxHours-1),this.showMeridian?(s>12&&(n=2,s-=12),n||(n=1),0===s&&(s=12),a=1===n?"AM":"PM"):12>s&&2===n?s+=12:s>=this.maxHours?s=this.maxHours-1:(0>s||12===s&&1===n)&&(s=0)}this.hour=s,this.snapToStep?(this.minute=this.changeToNearestStep(o,this.minuteStep),this.second=this.changeToNearestStep(r,this.secondStep)):(this.minute=o,this.second=r),this.meridian=a,this.update(e)}else this.clear()},showWidget:function(){this.isOpen||this.$element.is(":disabled")||(this.$widget.appendTo(this.appendWidgetTo),t(n).on("mousedown.timepicker, touchend.timepicker",{scope:this},this.handleDocumentClick),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.place(),this.disableFocus&&this.$element.blur(),""===this.hour&&(this.defaultTime?this.setDefaultTime(this.defaultTime):this.setTime("0:0:0")),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",t.proxy(this.hideWidget,this)):!1===this.isOpen&&this.$widget.addClass("open"),this.isOpen=!0)},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM"},update:function(t){this.updateElement(),t||this.updateWidget(),this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}})},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){this.setTime(this.$element.val())},updateWidget:function(){if(!1!==this.$widget){var t=this.hour,e=1===this.minute.toString().length?"0"+this.minute:this.minute,n=1===this.second.toString().length?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(t),this.$widget.find("input.bootstrap-timepicker-minute").val(e),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(n),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(t),this.$widget.find("span.bootstrap-timepicker-minute").text(e),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(n),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(!1!==this.$widget){var t=this.$widget.find("input.bootstrap-timepicker-hour").val()+":"+this.$widget.find("input.bootstrap-timepicker-minute").val()+(this.showSeconds?":"+this.$widget.find("input.bootstrap-timepicker-second").val():"")+(this.showMeridian?this.$widget.find("input.bootstrap-timepicker-meridian").val():"");this.setTime(t,!0)}},widgetClick:function(e){e.stopPropagation(),e.preventDefault();var n=t(e.target),i=n.closest("a").data("action");i&&this[i](),this.update(),n.is("input")&&n.get(0).setSelectionRange(0,2)},widgetKeydown:function(e){var n=t(e.target),i=n.attr("class").replace("bootstrap-timepicker-","");switch(e.which){case 9:if(e.shiftKey){if("hour"===i)return this.hideWidget()}else if(this.showMeridian&&"meridian"===i||this.showSeconds&&"second"===i||!this.showMeridian&&!this.showSeconds&&"minute"===i)return this.hideWidget();break;case 27:this.hideWidget();break;case 38:switch(e.preventDefault(),i){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),n.get(0).setSelectionRange(0,2);break;case 40:switch(e.preventDefault(),i){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),n.get(0).setSelectionRange(0,2)}},widgetKeyup:function(t){(65===t.which||77===t.which||80===t.which||46===t.which||8===t.which||t.which>=48&&t.which<=57||t.which>=96&&t.which<=105)&&this.updateFromWidgetInputs()}},t.fn.timepicker=function(e){var n=Array.apply(null,arguments);return n.shift(),this.each(function(){var s=t(this),o=s.data("timepicker"),r="object"==typeof e&&e;o||s.data("timepicker",o=new i(this,t.extend({},t.fn.timepicker.defaults,r,t(this).data()))),"string"==typeof e&&o[e].apply(o,n)})},t.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,disableMousewheel:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,orientation:{x:"auto",y:"auto"},secondStep:15,snapToStep:!1,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:"body",showWidgetOnAddonClick:!0,icons:{up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down"},maxHours:24,explicitMode:!1},t.fn.timepicker.Constructor=i,t(n).on("focus.timepicker.data-api click.timepicker.data-api",'[data-provide="timepicker"]',function(e){var n=t(this);n.data("timepicker")||(e.preventDefault(),n.timepicker())})}(jQuery,window,document),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(n),n}:t(jQuery)}(function(t){"use strict";var e=0;t.fn.TouchSpin=function(n){var i={min:0,max:100,initval:"",replacementval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalup:"+",verticaldown:"-",verticalupclass:"",verticaldownclass:"",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-primary",buttonup_class:"btn btn-primary",buttondown_txt:"-",buttonup_txt:"+",callback_before_calculation:function(t){return t},callback_after_calculation:function(t){return t}},s={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){var o,r,a,l,c,h,u,d,f,p,m=t(this),g=m.data(),v=0,y=!1;function b(){""===o.prefix&&(r=c.prefix.detach()),""===o.postfix&&(a=c.postfix.detach())}function _(){var t,e,n;""!==(t=o.callback_before_calculation(m.val()))?0<o.decimals&&"."===t||(e=parseFloat(t),isNaN(e)&&(e=""!==o.replacementval?o.replacementval:0),(n=e).toString()!==t&&(n=e),null!==o.min&&e<o.min&&(n=o.min),null!==o.max&&e>o.max&&(n=o.max),n=function(t){switch(o.forcestepdivisibility){case"round":return(Math.round(t/o.step)*o.step).toFixed(o.decimals);case"floor":return(Math.floor(t/o.step)*o.step).toFixed(o.decimals);case"ceil":return(Math.ceil(t/o.step)*o.step).toFixed(o.decimals);default:return t}}(n),Number(t).toString()!==n.toString()&&(m.val(n),m.trigger("change"))):""!==o.replacementval&&(m.val(o.replacementval),m.trigger("change"))}function w(){if(o.booster){var t=Math.pow(2,Math.floor(v/o.boostat))*o.step;return o.maxboostedstep&&t>o.maxboostedstep&&(t=o.maxboostedstep,h=Math.round(h/t)*t),Math.max(o.step,t)}return o.step}function D(){_(),h=parseFloat(o.callback_before_calculation(c.input.val())),isNaN(h)&&(h=0);var t=h,e=w();h+=e,null!==o.max&&h>o.max&&(h=o.max,m.trigger("touchspin.on.max"),T()),c.input.val(o.callback_after_calculation(Number(h).toFixed(o.decimals))),t!==h&&m.trigger("change")}function k(){_(),h=parseFloat(o.callback_before_calculation(c.input.val())),isNaN(h)&&(h=0);var t=h,e=w();h-=e,null!==o.min&&h<o.min&&(h=o.min,m.trigger("touchspin.on.min"),T()),c.input.val(o.callback_after_calculation(Number(h).toFixed(o.decimals))),t!==h&&m.trigger("change")}function C(){T(),v=0,y="down",m.trigger("touchspin.on.startspin"),m.trigger("touchspin.on.startdownspin"),f=setTimeout(function(){u=setInterval(function(){v++,k()},o.stepinterval)},o.stepintervaldelay)}function x(){T(),v=0,y="up",m.trigger("touchspin.on.startspin"),m.trigger("touchspin.on.startupspin"),p=setTimeout(function(){d=setInterval(function(){v++,D()},o.stepinterval)},o.stepintervaldelay)}function T(){switch(clearTimeout(f),clearTimeout(p),clearInterval(u),clearInterval(d),y){case"up":m.trigger("touchspin.on.stopupspin"),m.trigger("touchspin.on.stopspin");break;case"down":m.trigger("touchspin.on.stopdownspin"),m.trigger("touchspin.on.stopspin")}v=0,y=!1}!function(){var h,u,d,f,p;if(!m.data("alreadyinitialized"))m.data("alreadyinitialized",!0),e+=1,m.data("spinnerid",e),m.is("input")?(""!==(o=t.extend({},i,g,(p={},t.each(s,function(t,e){var n="bts-"+e;m.is("[data-"+n+"]")&&(p[t]=m.data(n))}),p),n)).initval&&""===m.val()&&m.val(o.initval),_(),d=m.val(),f=m.parent(),""!==d&&(d=o.callback_after_calculation(Number(d).toFixed(o.decimals))),m.data("initvalue",d).val(d),m.addClass("form-control"),f.hasClass("input-group")?function(e){e.addClass("bootstrap-touchspin");var n,i,s=m.prev(),r=m.next(),a='<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">'+o.prefix+"</span></span>",c='<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">'+o.postfix+"</span></span>";s.hasClass("input-group-btn")||s.hasClass("input-group-prepend")?(n='<button class="'+o.buttondown_class+' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">'+o.buttondown_txt+"</button>",s.append(n)):(n='<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="'+o.buttondown_class+' bootstrap-touchspin-down" type="button">'+o.buttondown_txt+"</button></span>",t(n).insertBefore(m)),r.hasClass("input-group-btn")||r.hasClass("input-group-append")?(i='<button class="'+o.buttonup_class+' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">'+o.buttonup_txt+"</button>",r.prepend(i)):(i='<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="'+o.buttonup_class+' bootstrap-touchspin-up" type="button">'+o.buttonup_txt+"</button></span>",t(i).insertAfter(m)),t(a).insertBefore(m),t(c).insertAfter(m),l=e}(f):(u="",m.hasClass("input-sm")&&(u="input-group-sm"),m.hasClass("input-lg")&&(u="input-group-lg"),h=o.verticalbuttons?'<div class="input-group '+u+' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">'+o.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">'+o.postfix+'</span></span><span class="input-group-btn-vertical"><button class="'+o.buttondown_class+" bootstrap-touchspin-up "+o.verticalupclass+'" type="button">'+o.verticalup+'</button><button class="'+o.buttonup_class+" bootstrap-touchspin-down "+o.verticaldownclass+'" type="button">'+o.verticaldown+"</button></span></div>":'<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="'+o.buttondown_class+' bootstrap-touchspin-down" type="button">'+o.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">'+o.prefix+'</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">'+o.postfix+'</span></span><span class="input-group-btn input-group-append"><button class="'+o.buttonup_class+' bootstrap-touchspin-up" type="button">'+o.buttonup_txt+"</button></span></div>",l=t(h).insertBefore(m),t(".bootstrap-touchspin-prefix",l).after(m),m.hasClass("input-sm")?l.addClass("input-group-sm"):m.hasClass("input-lg")&&l.addClass("input-group-lg")),c={down:t(".bootstrap-touchspin-down",l),up:t(".bootstrap-touchspin-up",l),input:t("input",l),prefix:t(".bootstrap-touchspin-prefix",l).addClass(o.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",l).addClass(o.postfix_extraclass)},b(),m.on("keydown.touchspin",function(t){var e=t.keyCode||t.which;38===e?("up"!==y&&(D(),x()),t.preventDefault()):40===e&&("down"!==y&&(k(),C()),t.preventDefault())}),m.on("keyup.touchspin",function(t){var e=t.keyCode||t.which;38===e?T():40===e&&T()}),m.on("blur.touchspin",function(){_(),m.val(o.callback_after_calculation(m.val()))}),c.down.on("keydown",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||("down"!==y&&(k(),C()),t.preventDefault())}),c.down.on("keyup.touchspin",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||T()}),c.up.on("keydown.touchspin",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||("up"!==y&&(D(),x()),t.preventDefault())}),c.up.on("keyup.touchspin",function(t){var e=t.keyCode||t.which;32!==e&&13!==e||T()}),c.down.on("mousedown.touchspin",function(t){c.down.off("touchstart.touchspin"),m.is(":disabled")||(k(),C(),t.preventDefault(),t.stopPropagation())}),c.down.on("touchstart.touchspin",function(t){c.down.off("mousedown.touchspin"),m.is(":disabled")||(k(),C(),t.preventDefault(),t.stopPropagation())}),c.up.on("mousedown.touchspin",function(t){c.up.off("touchstart.touchspin"),m.is(":disabled")||(D(),x(),t.preventDefault(),t.stopPropagation())}),c.up.on("touchstart.touchspin",function(t){c.up.off("mousedown.touchspin"),m.is(":disabled")||(D(),x(),t.preventDefault(),t.stopPropagation())}),c.up.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",function(t){y&&(t.stopPropagation(),T())}),c.down.on("mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin",function(t){y&&(t.stopPropagation(),T())}),c.down.on("mousemove.touchspin touchmove.touchspin",function(t){y&&(t.stopPropagation(),t.preventDefault())}),c.up.on("mousemove.touchspin touchmove.touchspin",function(t){y&&(t.stopPropagation(),t.preventDefault())}),m.on("mousewheel.touchspin DOMMouseScroll.touchspin",function(t){if(o.mousewheel&&m.is(":focus")){var e=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;t.stopPropagation(),t.preventDefault(),e<0?k():D()}}),m.on("touchspin.destroy",function(){var e;e=m.parent(),T(),m.off(".touchspin"),e.hasClass("bootstrap-touchspin-injected")?(m.siblings().remove(),m.unwrap()):(t(".bootstrap-touchspin-injected",e).remove(),e.removeClass("bootstrap-touchspin")),m.data("alreadyinitialized",!1)}),m.on("touchspin.uponce",function(){T(),D()}),m.on("touchspin.downonce",function(){T(),k()}),m.on("touchspin.startupspin",function(){x()}),m.on("touchspin.startdownspin",function(){C()}),m.on("touchspin.stopspin",function(){T()}),m.on("touchspin.updatesettings",function(e,n){!function(e){(function(e){(o=t.extend({},o,e),e.postfix)&&(0===m.parent().find(".bootstrap-touchspin-postfix").length&&a.insertAfter(m),m.parent().find(".bootstrap-touchspin-postfix .input-group-text").text(e.postfix));e.prefix&&(0===m.parent().find(".bootstrap-touchspin-prefix").length&&r.insertBefore(m),m.parent().find(".bootstrap-touchspin-prefix .input-group-text").text(e.prefix));b()})(n),_();var i=c.input.val();""!==i&&(i=Number(o.callback_before_calculation(c.input.val())),c.input.val(o.callback_after_calculation(Number(i).toFixed(o.decimals))))}()})):console.log("Must be an input.")}()})}}),function(t){"use strict";t.event.special.destroyed||(t.event.special.destroyed={remove:function(t){t.handler&&t.handler()}}),t.fn.extend({maxlength:function(e,n){function i(t){var n=t.val();n=e.twoCharLinebreak?n.replace(/\r(?!\n)|\n(?!\r)/g,"\r\n"):n.replace(new RegExp("\r?\n","g"),"\n");return e.utf8?function(t){for(var e=0,n=0;n<t.length;n++){var i=t.charCodeAt(n);128>i?e++:e+=i>127&&2048>i?2:3}return e}(n):n.length}function s(t,e){return e-i(t)}function o(t,e){e.css({display:"block"}),t.trigger("maxlength.shown")}function r(t,n,i){var s="";return e.message?s="function"==typeof e.message?e.message(t,n):e.message.replace("%charsTyped%",i).replace("%charsRemaining%",n-i).replace("%charsTotal%",n):(e.preText&&(s+=e.preText),s+=e.showCharsTyped?i:n-i,e.showMaxLength&&(s+=e.separator+n),e.postText&&(s+=e.postText)),s}function a(t,n,s,a){var l,c,h,u,d;a&&(a.html(r(n.val(),s,s-t)),t>0?(c=n,h=e.threshold,u=s,d=!0,!e.alwaysShow&&u-i(c)>h&&(d=!1),d?o(n,a.removeClass(e.limitReachedClass).addClass(e.warningClass)):(l=n,a.css({display:"none"}),l.trigger("maxlength.hidden"))):o(n,a.removeClass(e.warningClass).addClass(e.limitReachedClass))),e.allowOverMax&&(0>t?n.addClass("overmax"):n.removeClass("overmax"))}function l(n,i){var s,o,r=(o=(s=n)[0],t.extend({},"function"==typeof o.getBoundingClientRect?o.getBoundingClientRect():{width:o.offsetWidth,height:o.offsetHeight},s.offset()));if("function"!==t.type(e.placement))if(t.isPlainObject(e.placement))!function(n,i){if(n&&i){var s={};t.each(["top","bottom","left","right","position"],function(t,n){var i=e.placement[n];void 0!==i&&(s[n]=i)}),i.css(s)}}(e.placement,i);else{var a=n.outerWidth(),l=i.outerWidth(),c=i.width(),h=i.height();switch(e.appendToParent&&(r.top-=n.parent().offset().top,r.left-=n.parent().offset().left),e.placement){case"bottom":i.css({top:r.top+r.height,left:r.left+r.width/2-c/2});break;case"top":i.css({top:r.top-h,left:r.left+r.width/2-c/2});break;case"left":i.css({top:r.top+r.height/2-h/2,left:r.left-c});break;case"right":i.css({top:r.top+r.height/2-h/2,left:r.left+r.width});break;case"bottom-right":i.css({top:r.top+r.height,left:r.left+r.width});break;case"top-right":i.css({top:r.top-h,left:r.left+a});break;case"top-left":i.css({top:r.top-h,left:r.left-l});break;case"bottom-left":i.css({top:r.top+n.outerHeight(),left:r.left-l});break;case"centered-right":i.css({top:r.top+h/2,left:r.left+a-l-3});break;case"bottom-right-inside":i.css({top:r.top+r.height,left:r.left+r.width-l});break;case"top-right-inside":i.css({top:r.top-h,left:r.left+a-l});break;case"top-left-inside":i.css({top:r.top-h,left:r.left});break;case"bottom-left-inside":i.css({top:r.top+n.outerHeight(),left:r.left})}}else e.placement(n,i,r)}function c(t){var n="maxlength";return e.allowOverMax&&(n="data-bs-mxl"),t.attr(n)||t.attr("size")}var h=t("body");return t.isFunction(e)&&!n&&(n=e,e={}),e=t.extend({showOnReady:!1,alwaysShow:!1,threshold:10,warningClass:"label label-success",limitReachedClass:"label label-important label-danger",separator:" / ",preText:"",postText:"",showMaxLength:!0,placement:"bottom",message:null,showCharsTyped:!0,validate:!1,utf8:!1,appendToParent:!1,twoCharLinebreak:!0,allowOverMax:!1},e),this.each(function(){function n(){var n=r(u.val(),i,"0");i=c(u),o||(o=t('<span class="bootstrap-maxlength"></span>').css({display:"none",position:"absolute",whiteSpace:"nowrap",zIndex:1099}).html(n)),u.is("textarea")&&(u.data("maxlenghtsizex",u.outerWidth()),u.data("maxlenghtsizey",u.outerHeight()),u.mouseup(function(){(u.outerWidth()!==u.data("maxlenghtsizex")||u.outerHeight()!==u.data("maxlenghtsizey"))&&l(u,o),u.data("maxlenghtsizex",u.outerWidth()),u.data("maxlenghtsizey",u.outerHeight())})),e.appendToParent?(u.parent().append(o),u.parent().css("position","relative")):h.append(o),a(s(u,c(u)),u,i,o),l(u,o)}var i,o,u=t(this);t(window).resize(function(){o&&l(u,o)}),e.allowOverMax&&(t(this).attr("data-bs-mxl",t(this).attr("maxlength")),t(this).removeAttr("maxlength")),e.showOnReady?u.ready(function(){n()}):u.focus(function(){n()}),u.on("maxlength.reposition",function(){l(u,o)}),u.on("destroyed",function(){o&&o.remove()}),u.on("blur",function(){o&&!e.showOnReady&&o.remove()}),u.on("input",function(){var t,n,r,h,d=c(u),f=s(u,d),p=!0;return e.validate&&0>f?(n=d,r=(t=u).val(),h=0,e.twoCharLinebreak&&"\n"===(r=r.replace(/\r(?!\n)|\n(?!\r)/g,"\r\n")).substr(r.length-1)&&r.length%2==1&&(h=1),t.val(r.substr(0,n-h)),p=!1):a(f,u,i,o),("bottom-right-inside"===e.placement||"top-right-inside"===e.placement)&&l(u,o),p})})}})}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t,e){function n(){return new Date(Date.UTC.apply(Date,arguments))}function i(){var t=new Date;return n(t.getFullYear(),t.getMonth(),t.getDate())}function s(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()}function o(n,i){return function(){return i!==e&&t.fn.datepicker.deprecated(i),this[n].apply(this,arguments)}}var r,a=(r={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),n=0,i=this.length;n<i;n++)if(0<=this[n].valueOf()-e&&this[n].valueOf()-e<864e5)return n;return-1},remove:function(t){this.splice(t,1)},replace:function(e){e&&(t.isArray(e)||(e=[e]),this.clear(),this.push.apply(this,e))},clear:function(){this.length=0},copy:function(){var t=new a;return t.replace(this),t}},function(){var e=[];return e.push.apply(e,arguments),t.extend(e,r),e}),l=function(e,n){t.data(e,"datepicker",this),this._process_options(n),this.dates=new a,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=t(e),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=t(m.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(t,e){return Number(e)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};l.prototype={constructor:l,_resolveViewName:function(e){return t.each(m.viewModes,function(n,i){if(e===n||-1!==t.inArray(e,i.names))return e=n,!1}),e},_resolveDaysOfWeek:function(e){return t.isArray(e)||(e=e.split(/[,\s]*/)),t.map(e,Number)},_check_template:function(n){try{return n!==e&&""!==n&&((n.match(/[<>]/g)||[]).length<=0||t(n).length>0)}catch(t){return!1}},_process_options:function(e){this._o=t.extend({},this._o,e);var s=this.o=t.extend({},this._o),o=s.language;p[o]||(o=o.split("-")[0],p[o]||(o=d.language)),s.language=o,s.startView=this._resolveViewName(s.startView),s.minViewMode=this._resolveViewName(s.minViewMode),s.maxViewMode=this._resolveViewName(s.maxViewMode),s.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,s.startView)),!0!==s.multidate&&(s.multidate=Number(s.multidate)||!1,!1!==s.multidate&&(s.multidate=Math.max(0,s.multidate))),s.multidateSeparator=String(s.multidateSeparator),s.weekStart%=7,s.weekEnd=(s.weekStart+6)%7;var r=m.parseFormat(s.format);s.startDate!==-1/0&&(s.startDate?s.startDate instanceof Date?s.startDate=this._local_to_utc(this._zero_time(s.startDate)):s.startDate=m.parseDate(s.startDate,r,s.language,s.assumeNearbyYear):s.startDate=-1/0),s.endDate!==1/0&&(s.endDate?s.endDate instanceof Date?s.endDate=this._local_to_utc(this._zero_time(s.endDate)):s.endDate=m.parseDate(s.endDate,r,s.language,s.assumeNearbyYear):s.endDate=1/0),s.daysOfWeekDisabled=this._resolveDaysOfWeek(s.daysOfWeekDisabled||[]),s.daysOfWeekHighlighted=this._resolveDaysOfWeek(s.daysOfWeekHighlighted||[]),s.datesDisabled=s.datesDisabled||[],t.isArray(s.datesDisabled)||(s.datesDisabled=s.datesDisabled.split(",")),s.datesDisabled=t.map(s.datesDisabled,function(t){return m.parseDate(t,r,s.language,s.assumeNearbyYear)});var a=String(s.orientation).toLowerCase().split(/\s+/g),l=s.orientation.toLowerCase();if(a=t.grep(a,function(t){return/^auto|left|right|top|bottom$/.test(t)}),s.orientation={x:"auto",y:"auto"},l&&"auto"!==l)if(1===a.length)switch(a[0]){case"top":case"bottom":s.orientation.y=a[0];break;case"left":case"right":s.orientation.x=a[0]}else l=t.grep(a,function(t){return/^left|right$/.test(t)}),s.orientation.x=l[0]||"auto",l=t.grep(a,function(t){return/^top|bottom$/.test(t)}),s.orientation.y=l[0]||"auto";if(s.defaultViewDate instanceof Date||"string"==typeof s.defaultViewDate)s.defaultViewDate=m.parseDate(s.defaultViewDate,r,s.language,s.assumeNearbyYear);else if(s.defaultViewDate){var c=s.defaultViewDate.year||(new Date).getFullYear(),h=s.defaultViewDate.month||0,u=s.defaultViewDate.day||1;s.defaultViewDate=n(c,h,u)}else s.defaultViewDate=i()},_events:[],_secondaryEvents:[],_applyEvents:function(t){for(var n,i,s,o=0;o<t.length;o++)n=t[o][0],2===t[o].length?(i=e,s=t[o][1]):3===t[o].length&&(i=t[o][1],s=t[o][2]),n.on(s,i)},_unapplyEvents:function(t){for(var n,i,s,o=0;o<t.length;o++)n=t[o][0],2===t[o].length?(s=e,i=t[o][1]):3===t[o].length&&(s=t[o][1],i=t[o][2]),n.off(i,s)},_buildEvents:function(){var e={keyup:t.proxy(function(e){-1===t.inArray(e.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:t.proxy(this.keydown,this),paste:t.proxy(this.paste,this)};!0===this.o.showOnFocus&&(e.focus=t.proxy(this.show,this)),this.isInput?this._events=[[this.element,e]]:this.component&&this.inputField.length?this._events=[[this.inputField,e],[this.component,{click:t.proxy(this.show,this)}]]:this._events=[[this.element,{click:t.proxy(this.show,this),keydown:t.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:t.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:t.proxy(function(t){this._focused_from=t.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":t.proxy(function(t){this.update(t.date)},this)}]),this._secondaryEvents=[[this.picker,{click:t.proxy(this.click,this)}],[this.picker,".prev, .next",{click:t.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:t.proxy(this.dayCellClick,this)}],[t(window),{resize:t.proxy(this.place,this)}],[t(document),{"mousedown touchstart":t.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(e,n){var i=n||this.dates.get(-1),s=this._utc_to_local(i);this.element.trigger({type:e,date:s,viewMode:this.viewMode,dates:t.map(this.dates,this._utc_to_local),format:t.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var n=this.dates.get(t);return m.formatDate(n,e,this.o.language)},this)})},show:function(){if(!(this.inputField.prop("disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&t(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(e){var n;if(e.originalEvent.clipboardData&&e.originalEvent.clipboardData.types&&-1!==t.inArray("text/plain",e.originalEvent.clipboardData.types))n=e.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;n=window.clipboardData.getData("Text")}this.setDate(n),this.update(),e.preventDefault()},_utc_to_local:function(t){if(!t)return t;var e=new Date(t.getTime()+6e4*t.getTimezoneOffset());return e.getTimezoneOffset()!==t.getTimezoneOffset()&&(e=new Date(t.getTime()+6e4*e.getTimezoneOffset())),e},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&n(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())},getDates:function(){return t.map(this.dates,this._utc_to_local)},getUTCDates:function(){return t.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var t=this.dates.get(-1);return t!==e?new Date(t):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,e),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var e=t.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,t.map(e,this._utc_to_local)),this},setDate:o("setDates"),setUTCDate:o("setUTCDates"),remove:o("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var t=this.getFormattedDate();return this.inputField.val(t),this},getFormattedDate:function(n){n===e&&(n=this.o.format);var i=this.o.language;return t.map(this.dates,function(t){return m.formatDate(t,n,i)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(t){return this._process_options({startDate:t}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(t){return this._process_options({endDate:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(t){return this._process_options({daysOfWeekDisabled:t}),this.update(),this},setDaysOfWeekHighlighted:function(t){return this._process_options({daysOfWeekHighlighted:t}),this.update(),this},setDatesDisabled:function(t){return this._process_options({datesDisabled:t}),this.update(),this},place:function(){if(this.isInline)return this;var e=this.picker.outerWidth(),n=this.picker.outerHeight(),i=t(this.o.container),s=i.width(),o="body"===this.o.container?t(document).scrollTop():i.scrollTop(),r=i.offset(),a=[0];this.element.parents().each(function(){var e=t(this).css("z-index");"auto"!==e&&0!==Number(e)&&a.push(Number(e))});var l=Math.max.apply(Math,a)+this.o.zIndexOffset,c=this.component?this.component.parent().offset():this.element.offset(),h=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),u=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),d=c.left-r.left,f=c.top-r.top;"body"!==this.o.container&&(f+=o),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(d-=e-u)):c.left<0?(this.picker.addClass("datepicker-orient-left"),d-=c.left-10):d+e>s?(this.picker.addClass("datepicker-orient-right"),d+=u-e):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var p=this.o.orientation.y;if("auto"===p&&(p=-o+f-n<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?f-=n+parseInt(this.picker.css("padding-top")):f+=h,this.o.rtl){var m=s-(d+u);this.picker.css({top:f,right:m,zIndex:l})}else this.picker.css({top:f,left:d,zIndex:l});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var e=this.dates.copy(),n=[],i=!1;return arguments.length?(t.each(arguments,t.proxy(function(t,e){e instanceof Date&&(e=this._local_to_utc(e)),n.push(e)},this)),i=!0):(n=(n=this.isInput?this.element.val():this.element.data("date")||this.inputField.val())&&this.o.multidate?n.split(this.o.multidateSeparator):[n],delete this.element.data().date),n=t.map(n,t.proxy(function(t){return m.parseDate(t,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),n=t.grep(n,t.proxy(function(t){return!this.dateWithinRange(t)||!t},this),!0),this.dates.replace(n),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),i?(this.setValue(),this.element.change()):this.dates.length&&String(e)!==String(this.dates)&&i&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&e.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var e=this.o.weekStart,n="<tr>";for(this.o.calendarWeeks&&(n+='<th class="cw">&#160;</th>');e<this.o.weekStart+7;)n+='<th class="dow',-1!==t.inArray(e,this.o.daysOfWeekDisabled)&&(n+=" disabled"),n+='">'+p[this.o.language].daysMin[e++%7]+"</th>";n+="</tr>",this.picker.find(".datepicker-days thead").append(n)}},fillMonths:function(){for(var t=this._utc_to_local(this.viewDate),e="",n=0;n<12;n++)e+='<span class="month'+(t&&t.getMonth()===n?" focused":"")+'">'+p[this.o.language].monthsShort[n]+"</span>";this.picker.find(".datepicker-months td").html(e)},setRange:function(e){e&&e.length?this.range=t.map(e,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(e){var n=[],o=this.viewDate.getUTCFullYear(),r=this.viewDate.getUTCMonth(),a=i();return e.getUTCFullYear()<o||e.getUTCFullYear()===o&&e.getUTCMonth()<r?n.push("old"):(e.getUTCFullYear()>o||e.getUTCFullYear()===o&&e.getUTCMonth()>r)&&n.push("new"),this.focusDate&&e.valueOf()===this.focusDate.valueOf()&&n.push("focused"),this.o.todayHighlight&&s(e,a)&&n.push("today"),-1!==this.dates.contains(e)&&n.push("active"),this.dateWithinRange(e)||n.push("disabled"),this.dateIsDisabled(e)&&n.push("disabled","disabled-date"),-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekHighlighted)&&n.push("highlighted"),this.range&&(e>this.range[0]&&e<this.range[this.range.length-1]&&n.push("range"),-1!==t.inArray(e.valueOf(),this.range)&&n.push("selected"),e.valueOf()===this.range[0]&&n.push("range-start"),e.valueOf()===this.range[this.range.length-1]&&n.push("range-end")),n},_fill_yearsView:function(n,i,s,o,r,a,l){for(var c,h,u,d="",f=s/10,p=this.picker.find(n),m=Math.floor(o/s)*s,g=m+9*f,v=Math.floor(this.viewDate.getFullYear()/f)*f,y=t.map(this.dates,function(t){return Math.floor(t.getUTCFullYear()/f)*f}),b=m-f;b<=g+f;b+=f)c=[i],h=null,b===m-f?c.push("old"):b===g+f&&c.push("new"),-1!==t.inArray(b,y)&&c.push("active"),(b<r||b>a)&&c.push("disabled"),b===v&&c.push("focused"),l!==t.noop&&((u=l(new Date(b,0,1)))===e?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),!1===u.enabled&&c.push("disabled"),u.classes&&(c=c.concat(u.classes.split(/\s+/))),u.tooltip&&(h=u.tooltip)),d+='<span class="'+c.join(" ")+'"'+(h?' title="'+h+'"':"")+">"+b+"</span>";p.find(".datepicker-switch").text(m+"-"+g),p.find("td").html(d)},fill:function(){var i,s,o=new Date(this.viewDate),r=o.getUTCFullYear(),a=o.getUTCMonth(),l=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,c=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,u=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,d=p[this.o.language].today||p.en.today||"",f=p[this.o.language].clear||p.en.clear||"",g=p[this.o.language].titleFormat||p.en.titleFormat;if(!isNaN(r)&&!isNaN(a)){this.picker.find(".datepicker-days .datepicker-switch").text(m.formatDate(o,g,this.o.language)),this.picker.find("tfoot .today").text(d).css("display",!0===this.o.todayBtn||"linked"===this.o.todayBtn?"table-cell":"none"),this.picker.find("tfoot .clear").text(f).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var v=n(r,a,0),y=v.getUTCDate();v.setUTCDate(y-(v.getUTCDay()-this.o.weekStart+7)%7);var b=new Date(v);v.getUTCFullYear()<100&&b.setUTCFullYear(v.getUTCFullYear()),b.setUTCDate(b.getUTCDate()+42),b=b.valueOf();for(var _,w,D=[];v.valueOf()<b;){if((_=v.getUTCDay())===this.o.weekStart&&(D.push("<tr>"),this.o.calendarWeeks)){var k=new Date(+v+(this.o.weekStart-_-7)%7*864e5),C=new Date(Number(k)+(11-k.getUTCDay())%7*864e5),x=new Date(Number(x=n(C.getUTCFullYear(),0,1))+(11-x.getUTCDay())%7*864e5),T=(C-x)/864e5/7+1;D.push('<td class="cw">'+T+"</td>")}(w=this.getClassNames(v)).push("day");var S=v.getUTCDate();this.o.beforeShowDay!==t.noop&&((s=this.o.beforeShowDay(this._utc_to_local(v)))===e?s={}:"boolean"==typeof s?s={enabled:s}:"string"==typeof s&&(s={classes:s}),!1===s.enabled&&w.push("disabled"),s.classes&&(w=w.concat(s.classes.split(/\s+/))),s.tooltip&&(i=s.tooltip),s.content&&(S=s.content)),w=t.isFunction(t.uniqueSort)?t.uniqueSort(w):t.unique(w),D.push('<td class="'+w.join(" ")+'"'+(i?' title="'+i+'"':"")+' data-date="'+v.getTime().toString()+'">'+S+"</td>"),i=null,_===this.o.weekEnd&&D.push("</tr>"),v.setUTCDate(v.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(D.join(""));var E=p[this.o.language].monthsTitle||p.en.monthsTitle||"Months",M=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?E:r).end().find("tbody span").removeClass("active");if(t.each(this.dates,function(t,e){e.getUTCFullYear()===r&&M.eq(e.getUTCMonth()).addClass("active")}),(r<l||r>h)&&M.addClass("disabled"),r===l&&M.slice(0,c).addClass("disabled"),r===h&&M.slice(u+1).addClass("disabled"),this.o.beforeShowMonth!==t.noop){var A=this;t.each(M,function(n,i){var s=new Date(r,n,1),o=A.o.beforeShowMonth(s);o===e?o={}:"boolean"==typeof o?o={enabled:o}:"string"==typeof o&&(o={classes:o}),!1!==o.enabled||t(i).hasClass("disabled")||t(i).addClass("disabled"),o.classes&&t(i).addClass(o.classes),o.tooltip&&t(i).prop("title",o.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,r,l,h,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,r,l,h,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,r,l,h,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var t,e,n=new Date(this.viewDate),i=n.getUTCFullYear(),s=n.getUTCMonth(),o=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,r=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,a=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,c=1;switch(this.viewMode){case 4:c*=10;case 3:c*=10;case 2:c*=10;case 1:t=Math.floor(i/c)*c<o,e=Math.floor(i/c)*c+c>a;break;case 0:t=i<=o&&s<r,e=i>=a&&s>l}this.picker.find(".prev").toggleClass("disabled",t),this.picker.find(".next").toggleClass("disabled",e)}},click:function(e){var s,o,r,a;e.preventDefault(),e.stopPropagation(),(s=t(e.target)).hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),s.hasClass("today")&&!s.hasClass("day")&&(this.setViewMode(0),this._setDate(i(),"linked"===this.o.todayBtn?null:"view")),s.hasClass("clear")&&this.clearDates(),s.hasClass("disabled")||(s.hasClass("month")||s.hasClass("year")||s.hasClass("decade")||s.hasClass("century"))&&(this.viewDate.setUTCDate(1),o=1,1===this.viewMode?(a=s.parent().find("span").index(s),r=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(a)):(a=0,r=Number(s.text()),this.viewDate.setUTCFullYear(r)),this._trigger(m.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(n(r,a,o)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(e){var n=t(e.currentTarget).data("date"),i=new Date(n);this.o.updateViewDate&&(i.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),i.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(i)},navArrowsClick:function(e){var n=t(e.currentTarget).hasClass("prev")?-1:1;0!==this.viewMode&&(n*=12*m.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,n),this._trigger(m.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t||this.dates.clear(),-1!==e?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(e):!1===this.o.multidate?(this.dates.clear(),this.dates.push(t)):this.dates.push(t),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),(!e&&this.o.updateViewDate||"view"===e)&&(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),e&&"view"===e||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||e&&"date"!==e||this.hide()},moveDay:function(t,e){var n=new Date(t);return n.setUTCDate(t.getUTCDate()+e),n},moveWeek:function(t,e){return this.moveDay(t,7*e)},moveMonth:function(t,e){if(!(n=t)||isNaN(n.getTime()))return this.o.defaultViewDate;var n;if(!e)return t;var i,s,o=new Date(t.valueOf()),r=o.getUTCDate(),a=o.getUTCMonth(),l=Math.abs(e);if(e=e>0?1:-1,1===l)s=-1===e?function(){return o.getUTCMonth()===a}:function(){return o.getUTCMonth()!==i},i=a+e,o.setUTCMonth(i),i=(i+12)%12;else{for(var c=0;c<l;c++)o=this.moveMonth(o,e);i=o.getUTCMonth(),o.setUTCDate(r),s=function(){return i!==o.getUTCMonth()}}for(;s();)o.setUTCDate(--r),o.setUTCMonth(i);return o},moveYear:function(t,e){return this.moveMonth(t,12*e)},moveAvailableDate:function(t,e,n){do{if(t=this[n](t,e),!this.dateWithinRange(t))return!1;n="moveDay"}while(this.dateIsDisabled(t));return t},weekOfDateIsDisabled:function(e){return-1!==t.inArray(e.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(e){return this.weekOfDateIsDisabled(e)||t.grep(this.o.datesDisabled,function(t){return s(e,t)}).length>0},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(this.picker.is(":visible")){var e,n,i=!1,s=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault(),t.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;e=37===t.keyCode||38===t.keyCode?-1:1,0===this.viewMode?t.ctrlKey?(n=this.moveAvailableDate(s,e,"moveYear"))&&this._trigger("changeYear",this.viewDate):t.shiftKey?(n=this.moveAvailableDate(s,e,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===t.keyCode||39===t.keyCode?n=this.moveAvailableDate(s,e,"moveDay"):this.weekOfDateIsDisabled(s)||(n=this.moveAvailableDate(s,e,"moveWeek")):1===this.viewMode?(38!==t.keyCode&&40!==t.keyCode||(e*=4),n=this.moveAvailableDate(s,e,"moveMonth")):2===this.viewMode&&(38!==t.keyCode&&40!==t.keyCode||(e*=4),n=this.moveAvailableDate(s,e,"moveYear")),n&&(this.focusDate=this.viewDate=n,this.setValue(),this.fill(),t.preventDefault());break;case 13:if(!this.o.forceParse)break;s=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(s),i=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),t.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}i&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))}else 40!==t.keyCode&&27!==t.keyCode||(this.show(),t.stopPropagation())},setViewMode:function(t){this.viewMode=t,this.picker.children("div").hide().filter(".datepicker-"+m.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var c=function(e,n){t.data(e,"datepicker",this),this.element=t(e),this.inputs=t.map(n.inputs,function(t){return t.jquery?t[0]:t}),delete n.inputs,this.keepEmptyValues=n.keepEmptyValues,delete n.keepEmptyValues,u.call(t(this.inputs),n).on("changeDate",t.proxy(this.dateUpdated,this)),this.pickers=t.map(this.inputs,function(e){return t.data(e,"datepicker")}),this.updateDates()};c.prototype={updateDates:function(){this.dates=t.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var e=t.map(this.dates,function(t){return t.valueOf()});t.each(this.pickers,function(t,n){n.setRange(e)})},clearDates:function(){t.each(this.pickers,function(t,e){e.clearDates()})},dateUpdated:function(n){if(!this.updating){this.updating=!0;var i=t.data(n.target,"datepicker");if(i!==e){var s=i.getUTCDate(),o=this.keepEmptyValues,r=t.inArray(n.target,this.inputs),a=r-1,l=r+1,c=this.inputs.length;if(-1!==r){if(t.each(this.pickers,function(t,e){e.getUTCDate()||e!==i&&o||e.setUTCDate(s)}),s<this.dates[a])for(;a>=0&&s<this.dates[a];)this.pickers[a--].setUTCDate(s);else if(s>this.dates[l])for(;l<c&&s>this.dates[l];)this.pickers[l++].setUTCDate(s);this.updateDates(),delete this.updating}}}},destroy:function(){t.map(this.pickers,function(t){t.destroy()}),t(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:o("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var h=t.fn.datepicker,u=function(n){var i,s=Array.apply(null,arguments);if(s.shift(),this.each(function(){var e=t(this),o=e.data("datepicker"),r="object"==typeof n&&n;if(!o){var a=function(e,n){function i(t,e){return e.toLowerCase()}var s=t(e).data(),o={},r=new RegExp("^"+n.toLowerCase()+"([A-Z])");for(var a in n=new RegExp("^"+n.toLowerCase()),s)n.test(a)&&(o[a.replace(r,i)]=s[a]);return o}(this,"date"),h=function(e){var n={};if(p[e]||(e=e.split("-")[0],p[e])){var i=p[e];return t.each(f,function(t,e){e in i&&(n[e]=i[e])}),n}}(t.extend({},d,a,r).language),u=t.extend({},d,h,a,r);e.hasClass("input-daterange")||u.inputs?(t.extend(u,{inputs:u.inputs||e.find("input").toArray()}),o=new c(this,u)):o=new l(this,u),e.data("datepicker",o)}"string"==typeof n&&"function"==typeof o[n]&&(i=o[n].apply(o,s))}),i===e||i instanceof l||i instanceof c)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+n+" function)");return i};t.fn.datepicker=u;var d=t.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:t.noop,beforeShowMonth:t.noop,beforeShowYear:t.noop,beforeShowDecade:t.noop,beforeShowCentury:t.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},f=t.fn.datepicker.locale_opts=["format","rtl","weekStart"];t.fn.datepicker.Constructor=l;var p=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},m={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(t){if("function"==typeof t.toValue&&"function"==typeof t.toDisplay)return t;var e=t.replace(this.validParts,"\0").split("\0"),n=t.match(this.validParts);if(!e||!e.length||!n||0===n.length)throw new Error("Invalid date format.");return{separators:e,parts:n}},parseDate:function(n,s,o,r){function a(){var t=this.slice(0,c[d].length),e=c[d].slice(0,t.length);return t.toLowerCase()===e.toLowerCase()}if(!n)return e;if(n instanceof Date)return n;if("string"==typeof s&&(s=m.parseFormat(s)),s.toValue)return s.toValue(n,s,o);var c,h,u,d,f,g={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},v={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(n in v&&(n=v[n]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)){for(c=n.match(/([\-+]\d+)([dmwy])/gi),n=new Date,d=0;d<c.length;d++)h=c[d].match(/([\-+]\d+)([dmwy])/i),u=Number(h[1]),f=g[h[2].toLowerCase()],n=l.prototype[f](n,u);return l.prototype._zero_utc_time(n)}c=n&&n.match(this.nonpunctuation)||[];var y,b,_={},w=["yyyy","yy","M","MM","m","mm","d","dd"],D={yyyy:function(t,e){return t.setUTCFullYear(r?(n=e,!0===(i=r)&&(i=10),n<100&&(n+=2e3)>(new Date).getFullYear()+i&&(n-=100),n):e);var n,i},m:function(t,e){if(isNaN(t))return t;for(e-=1;e<0;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};D.yy=D.yyyy,D.M=D.MM=D.mm=D.m,D.dd=D.d,n=i();var k=s.parts.slice();if(c.length!==k.length&&(k=t(k).filter(function(e,n){return-1!==t.inArray(n,w)}).toArray()),c.length===k.length){var C,x,T;for(d=0,C=k.length;d<C;d++){if(y=parseInt(c[d],10),h=k[d],isNaN(y))switch(h){case"MM":b=t(p[o].months).filter(a),y=t.inArray(b[0],p[o].months)+1;break;case"M":b=t(p[o].monthsShort).filter(a),y=t.inArray(b[0],p[o].monthsShort)+1}_[h]=y}for(d=0;d<w.length;d++)(T=w[d])in _&&!isNaN(_[T])&&(x=new Date(n),D[T](x,_[T]),isNaN(x)||(n=x))}return n},formatDate:function(e,n,i){if(!e)return"";if("string"==typeof n&&(n=m.parseFormat(n)),n.toDisplay)return n.toDisplay(e,n,i);var s={d:e.getUTCDate(),D:p[i].daysShort[e.getUTCDay()],DD:p[i].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:p[i].monthsShort[e.getUTCMonth()],MM:p[i].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m,e=[];for(var o=t.extend([],n.separators),r=0,a=n.parts.length;r<=a;r++)o.length&&e.push(o.shift()),e.push(s[n.parts[r]]);return e.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+d.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+d.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};m.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+m.headTemplate+"<tbody></tbody>"+m.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+"</table></div></div>",t.fn.datepicker.DPGlobal=m,t.fn.datepicker.noConflict=function(){return t.fn.datepicker=h,this},t.fn.datepicker.version="1.8.0",t.fn.datepicker.deprecated=function(t){var e=window.console;e&&e.warn&&e.warn("DEPRECATED: "+t)},t(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(e){var n=t(this);n.data("datepicker")||(e.preventDefault(),u.call(n,"show"))}),t(function(){u.call(t('[data-provide="datepicker-inline"]'))})}),function(t){"use strict";var e=function(){this.$body=t("body"),this.$portletIdentifier=".card",this.$portletCloser='.card a[data-toggle="remove"]',this.$portletRefresher='.card a[data-toggle="reload"]'};e.prototype.init=function(){var e=this;t(document).on("click",this.$portletCloser,function(n){n.preventDefault();var i=t(this).closest(e.$portletIdentifier),s=i.parent();i.remove(),0==s.children().length&&s.remove()}),t(document).on("click",this.$portletRefresher,function(n){n.preventDefault();var i=t(this).closest(e.$portletIdentifier);i.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');var s=i.find(".card-disabled");setTimeout(function(){s.fadeOut("fast",function(){s.remove()})},500+5*Math.random()*300)})},t.Portlet=new e,t.Portlet.Constructor=e}(window.jQuery),function(t){"use strict";var e=function(){this.$body=t("body"),this.$window=t(window)};e.prototype.initSelect2=function(){t('[data-toggle="select2"]').select2()},e.prototype.initMask=function(){t('[data-toggle="input-mask"]').each(function(e,n){var i=t(n).data("maskFormat"),s=t(n).data("reverse");null!=s?t(n).mask(i,{reverse:s}):t(n).mask(i)})},e.prototype.initDateRange=function(){var e={cancelClass:"btn-light",applyButtonClasses:"btn-success"};t('[data-toggle="date-picker"]').each(function(n,i){var s=t.extend({},e,t(i).data());t(i).daterangepicker(s)});var n={startDate:moment().subtract(29,"days"),endDate:moment(),ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]}};t('[data-toggle="date-picker-range"]').each(function(e,i){var s=t.extend({},n,t(i).data()),o=s.targetDisplay;t(i).daterangepicker(s,function(e,n){o&&t(o).html(e.format("MMMM D, YYYY")+" - "+n.format("MMMM D, YYYY"))})})},e.prototype.initTimePicker=function(){var e={showSeconds:!0,icons:{up:"mdi mdi-chevron-up",down:"mdi mdi-chevron-down"}};t('[data-toggle="timepicker"]').each(function(n,i){var s=t.extend({},e,t(i).data());t(i).timepicker(s)})},e.prototype.initTouchspin=function(){var e={};t('[data-toggle="touchspin"]').each(function(n,i){var s=t.extend({},e,t(i).data());t(i).TouchSpin(s)})},e.prototype.initMaxlength=function(){var e={warningClass:"badge badge-success",limitReachedClass:"badge badge-danger",separator:" out of ",preText:"You typed ",postText:" chars available.",placement:"bottom"};t('[data-toggle="maxlength"]').each(function(n,i){var s=t.extend({},e,t(i).data());t(i).maxlength(s)})},e.prototype.init=function(){this.initSelect2(),this.initMask(),this.initDateRange(),this.initTimePicker(),this.initTouchspin(),this.initMaxlength()},t.AdvanceFormApp=new e,t.AdvanceFormApp.Constructor=e}(window.jQuery),function(t){"use strict";var e=function(){};e.prototype.send=function(e,n,i,s,o,r,a,l){r||(r=3e3),a||(a=1);var c={heading:e,text:n,position:i,loaderBg:s,icon:o,hideAfter:r,stack:a};c.showHideTransition=l||"fade",t.toast().reset("all"),t.toast(c)},t.NotificationApp=new e,t.NotificationApp.Constructor=e}(window.jQuery),function(t){"use strict";var e=function(){};e.prototype.initTooltipPlugin=function(){t.fn.tooltip&&t('[data-toggle="tooltip"]').tooltip()},e.prototype.initPopoverPlugin=function(){t.fn.popover&&t('[data-toggle="popover"]').popover()},e.prototype.initToastPlugin=function(){t.fn.toast&&t('[data-toggle="toast"]').toast()},e.prototype.initSlimScrollPlugin=function(){t.fn.slimScroll&&t(".slimscroll").slimScroll({height:"auto",position:"right",size:"8px",touchScrollStep:20,color:"#9ea5ab"})},e.prototype.initFormValidation=function(){t(".needs-validation").on("submit",function(e){return t(this).addClass("was-validated"),!1!==t(this)[0].checkValidity()||(e.preventDefault(),e.stopPropagation(),!1)})},e.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initToastPlugin(),this.initSlimScrollPlugin(),this.initFormValidation()},t.Components=new e,t.Components.Constructor=e}(window.jQuery),function(t){"use strict";var e=function(){this.$body=t("body"),this.$window=t(window)};e.prototype._resetSidebarScroll=function(){t(".slimscroll-menu").slimscroll({height:"auto",position:"right",size:"8px",color:"#9ea5ab",wheelStep:5,touchScrollStep:20})},e.prototype.initMenu=function(){var e=this;t(".button-menu-mobile").on("click",function(t){t.preventDefault(),e.$body.toggleClass("sidebar-enable"),e.$window.width()>=768?e.$body.toggleClass("enlarged"):e.$body.removeClass("enlarged"),e._resetSidebarScroll()}),t(".side-nav").metisMenu(),this.$body.hasClass("scrollable-layout")&&t("#left-side-menu-container").removeClass("slimscroll-menu"),e._resetSidebarScroll(),t(".right-bar-toggle").on("click",function(e){t("body").toggleClass("right-bar-enabled")}),t(document).on("click","body",function(e){t(e.target).closest(".right-bar-toggle, .right-bar").length>0||t(e.target).closest(".left-side-menu, .side-nav").length>0||t(e.target).hasClass("button-menu-mobile")||t(e.target).closest(".button-menu-mobile").length>0||(t("body").removeClass("right-bar-enabled"),t("body").removeClass("sidebar-enable"))}),t(".side-nav a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(t(this).addClass("active"),t(this).parent().addClass("active"),t(this).parent().parent().addClass("in"),t(this).parent().parent().prev().addClass("active"),t(this).parent().parent().parent().addClass("active"),t(this).parent().parent().parent().parent().addClass("in"),t(this).parent().parent().parent().parent().parent().addClass("active"))}),t(".topnav-menu li a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(t(this).addClass("active"),t(this).parent().parent().addClass("active"),t(this).parent().parent().parent().parent().addClass("active"))}),t(".navbar-toggle").on("click",function(e){t(this).toggleClass("open"),t("#navigation").slideToggle(400)}),t(".dropdown-menu a.dropdown-toggle").on("click",function(e){return t(this).next().hasClass("show")||t(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),t(this).next(".dropdown-menu").toggleClass("show"),!1})},e.prototype.initLayout=function(){this.$window.width()>=768&&this.$window.width()<=1028?this.$body.addClass("enlarged"):1!=this.$body.data("keep-enlarged")&&this.$body.removeClass("enlarged")},e.prototype.init=function(){var e=this;this.initLayout(),this.initMenu(),t.Portlet.init(),t.AdvanceFormApp.init(),t.Components.init(),e.$window.on("resize",function(t){t.preventDefault(),e.initLayout(),e._resetSidebarScroll()})},t.App=new e,t.App.Constructor=e}(window.jQuery),function(t){"use strict";t.App.init()}(window.jQuery);
//# sourceMappingURL=app.min.js.map

/* axios v0.19.0 | (c) 2019 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(2),s=n(3),i=n(5),a=n(22),u=n(11),c=r(u);c.Axios=i,c.create=function(e){return r(a(c.defaults,e))},c.Cancel=n(23),c.CancelToken=n(24),c.isCancel=n(10),c.all=function(e){return Promise.all(e)},c.spread=n(25),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";function r(e){return"[object Array]"===j.call(e)}function o(e){return"[object ArrayBuffer]"===j.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===j.call(e)}function d(e){return"[object File]"===j.call(e)}function l(e){return"[object Blob]"===j.call(e)}function h(e){return"[object Function]"===j.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,t){if(null!==e&&"undefined"!=typeof e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):"object"==typeof e?t[n]=b({},e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function E(e,t,n){return v(t,function(t,r){n&&"function"==typeof t?e[r]=S(t,n):e[r]=t}),e}var S=n(3),R=n(4),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:R,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:x,forEach:v,merge:w,deepMerge:b,extend:E,trim:g}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){/*!
    * Determine if an object is a Buffer
    *
    * @author   Feross Aboukhadijeh <https://feross.org>
    * @license  MIT
    */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(2),s=n(6),i=n(7),a=n(8),u=n(22);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),s=n(9),i=n(10),a=n(11),u=n(20),c=n(21);e.exports=function(e){r(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?e=n(13):"undefined"!=typeof XMLHttpRequest&&(e=n(13)),e}var s=n(2),i=n(12),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){u.headers[e]={}}),s.forEach(["post","put","patch"],function(e){u.headers[e]=s.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(14),s=n(6),i=n(17),a=n(18),u=n(15);e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+h)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,c,s),d=null}},d.onabort=function(){d&&(c(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){c(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var m=n(19),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),c(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";var r=n(16);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;"set-cookie"===t?i[t]=(i[t]?i[t]:[]).concat([n]):i[t]=i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!=typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!=typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!=typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!=typeof t[r]?n[r]=t[r]:"undefined"!=typeof e[r]&&(n[r]=e[r])}),n}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(23);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving the component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

function submitForm(elementID)
{
   if (elementID == 'paymentForm' && $("#budget").val().length < 4) return setErrorMess("Budget can not be less than NGN 1000");
   return $('#' + elementID).submit();
}


$(document).ready(function () { "use strict"; $("#basicwizard").bootstrapWizard(), $("#progressbarwizard").bootstrapWizard({ onTabShow: function (t, r, a) { var o = (a + 1) / r.find("li").length * 100; $("#progressbarwizard").find(".bar").css({ width: o + "%" }) } }), $("#btnwizard").bootstrapWizard({ nextSelector: ".button-next", previousSelector: ".button-previous", firstSelector: ".button-first", lastSelector: ".button-last" }), $("#rootwizard").bootstrapWizard({ onNext: function (t, r, a) { var o = $($(t).data("targetForm")); if (o && (o.addClass("was-validated"), !1 === o[0].checkValidity())) return event.preventDefault(), event.stopPropagation(), !1 } }) });

/*
*
* More info at [www.dropzonejs.com](http://www.dropzonejs.com)
*
* Copyright (c) 2012, Matias Meno
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
*/

(function () {
    var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    noop = function () { };

    Emitter = (function () {
        function Emitter() { }

        Emitter.prototype.addEventListener = Emitter.prototype.on;

        Emitter.prototype.on = function (event, fn) {
            this._callbacks = this._callbacks || {};
            if (!this._callbacks[event]) {
                this._callbacks[event] = [];
            }
            this._callbacks[event].push(fn);
            return this;
        };

        Emitter.prototype.emit = function () {
            var args, callback, callbacks, event, _i, _len;
            event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            this._callbacks = this._callbacks || {};
            callbacks = this._callbacks[event];
            if (callbacks) {
                for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
                    callback = callbacks[_i];
                    callback.apply(this, args);
                }
            }
            return this;
        };

        Emitter.prototype.removeListener = Emitter.prototype.off;

        Emitter.prototype.removeAllListeners = Emitter.prototype.off;

        Emitter.prototype.removeEventListener = Emitter.prototype.off;

        Emitter.prototype.off = function (event, fn) {
            var callback, callbacks, i, _i, _len;
            if (!this._callbacks || arguments.length === 0) {
                this._callbacks = {};
                return this;
            }
            callbacks = this._callbacks[event];
            if (!callbacks) {
                return this;
            }
            if (arguments.length === 1) {
                delete this._callbacks[event];
                return this;
            }
            for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
                callback = callbacks[i];
                if (callback === fn) {
                    callbacks.splice(i, 1);
                    break;
                }
            }
            return this;
        };

        return Emitter;

    })();

    Dropzone = (function (_super) {
        var extend, resolveOption;

        __extends(Dropzone, _super);

        Dropzone.prototype.Emitter = Emitter;


        /*
        This is a list of all available events you can register on a dropzone object.

        You can register an event handler like this:

        dropzone.on("dragEnter", function() { });
        */

        Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

        Dropzone.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: false,
            parallelUploads: 2,
            uploadMultiple: false,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: true,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1000,
            maxFiles: null,
            params: {},
            clickable: true,
            ignoreHiddenFiles: true,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: true,
            autoQueue: true,
            addRemoveLinks: false,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function (file, done) {
                return done();
            },
            init: function () {
                return noop;
            },
            forceFallback: false,
            fallback: function () {
                var child, messageElement, span, _i, _len, _ref;
                this.element.className = "" + this.element.className + " dz-browser-not-supported";
                _ref = this.element.getElementsByTagName("div");
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    child = _ref[_i];
                    if (/(^| )dz-message($| )/.test(child.className)) {
                        messageElement = child;
                        child.className = "dz-message";
                        continue;
                    }
                }
                if (!messageElement) {
                    messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
                    this.element.appendChild(messageElement);
                }
                span = messageElement.getElementsByTagName("span")[0];
                if (span) {
                    if (span.textContent != null) {
                        span.textContent = this.options.dictFallbackMessage;
                    } else if (span.innerText != null) {
                        span.innerText = this.options.dictFallbackMessage;
                    }
                }
                return this.element.appendChild(this.getFallbackForm());
            },
            resize: function (file) {
                var info, srcRatio, trgRatio;
                info = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: file.width,
                    srcHeight: file.height
                };
                srcRatio = file.width / file.height;
                info.optWidth = this.options.thumbnailWidth;
                info.optHeight = this.options.thumbnailHeight;
                if ((info.optWidth == null) && (info.optHeight == null)) {
                    info.optWidth = info.srcWidth;
                    info.optHeight = info.srcHeight;
                } else if (info.optWidth == null) {
                    info.optWidth = srcRatio * info.optHeight;
                } else if (info.optHeight == null) {
                    info.optHeight = (1 / srcRatio) * info.optWidth;
                }
                trgRatio = info.optWidth / info.optHeight;
                if (file.height < info.optHeight || file.width < info.optWidth) {
                    info.trgHeight = info.srcHeight;
                    info.trgWidth = info.srcWidth;
                } else {
                    if (srcRatio > trgRatio) {
                        info.srcHeight = file.height;
                        info.srcWidth = info.srcHeight * trgRatio;
                    } else {
                        info.srcWidth = file.width;
                        info.srcHeight = info.srcWidth / trgRatio;
                    }
                }
                info.srcX = (file.width - info.srcWidth) / 2;
                info.srcY = (file.height - info.srcHeight) / 2;
                return info;
            },

            /*
            Those functions register themselves to the events on init and handle all
            the user interface specific stuff. Overwriting them won't break the upload
            but can break the way it's displayed.
            You can overwrite them if you don't like the default behavior. If you just
            want to add an additional event handler, register it on the dropzone object
            and don't overwrite those options.
            */
            drop: function (e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: noop,
            dragend: function (e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function (e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragover: function (e) {
                return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function (e) {
                return this.element.classList.remove("dz-drag-hover");
            },
            paste: noop,
            reset: function () {
                return this.element.classList.remove("dz-started");
            },
            addedfile: function (file) {
                var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
                if (this.element === this.previewsContainer) {
                    this.element.classList.add("dz-started");
                }
                if (this.previewsContainer) {
                    file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
                    file.previewTemplate = file.previewElement;
                    this.previewsContainer.appendChild(file.previewElement);
                    _ref = file.previewElement.querySelectorAll("[data-dz-name]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        node.textContent = this._renameFilename(file.name);
                    }
                    _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
                    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                        node = _ref1[_j];
                        node.innerHTML = this.filesize(file.size);
                    }
                    if (this.options.addRemoveLinks) {
                        file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
                        file.previewElement.appendChild(file._removeLink);
                    }
                    removeFileEvent = (function (_this) {
                        return function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            if (file.status === Dropzone.UPLOADING) {
                                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function () {
                                    return _this.removeFile(file);
                                });
                            } else {
                                if (_this.options.dictRemoveFileConfirmation) {
                                    return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function () {
                                        return _this.removeFile(file);
                                    });
                                } else {
                                    return _this.removeFile(file);
                                }
                            }
                        };
                    })(this);
                    _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
                    _results = [];
                    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                        removeLink = _ref2[_k];
                        _results.push(removeLink.addEventListener("click", removeFileEvent));
                    }
                    return _results;
                }
            },
            removedfile: function (file) {
                var _ref;
                if (file.previewElement) {
                    if ((_ref = file.previewElement) != null) {
                        _ref.parentNode.removeChild(file.previewElement);
                    }
                }
                return this._updateMaxFilesReachedClass();
            },
            thumbnail: function (file, dataUrl) {
                var thumbnailElement, _i, _len, _ref;
                if (file.previewElement) {
                    file.previewElement.classList.remove("dz-file-preview");
                    _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        thumbnailElement = _ref[_i];
                        thumbnailElement.alt = file.name;
                        thumbnailElement.src = dataUrl;
                    }
                    return setTimeout(((function (_this) {
                        return function () {
                            return file.previewElement.classList.add("dz-image-preview");
                        };
                    })(this)), 1);
                }
            },
            error: function (file, message) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-error");
                    if (typeof message !== "String" && message.error) {
                        message = message.error;
                    }
                    _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        _results.push(node.textContent = message);
                    }
                    return _results;
                }
            },
            errormultiple: noop,
            processing: function (file) {
                if (file.previewElement) {
                    file.previewElement.classList.add("dz-processing");
                    if (file._removeLink) {
                        return file._removeLink.textContent = this.options.dictCancelUpload;
                    }
                }
            },
            processingmultiple: noop,
            uploadprogress: function (file, progress, bytesSent) {
                var node, _i, _len, _ref, _results;
                if (file.previewElement) {
                    _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        node = _ref[_i];
                        if (node.nodeName === 'PROGRESS') {
                            _results.push(node.value = progress);
                        } else {
                            _results.push(node.style.width = "" + progress + "%");
                        }
                    }
                    return _results;
                }
            },
            totaluploadprogress: noop,
            sending: noop,
            sendingmultiple: noop,
            success: function (file) {
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-success");
                }
            },
            successmultiple: noop,
            canceled: function (file) {
                return this.emit("error", file, "Upload canceled.");
            },
            canceledmultiple: noop,
            complete: function (file) {
                if (file._removeLink) {
                    file._removeLink.textContent = this.options.dictRemoveFile;
                }
                if (file.previewElement) {
                    return file.previewElement.classList.add("dz-complete");
                }
            },
            completemultiple: noop,
            maxfilesexceeded: noop,
            maxfilesreached: noop,
            queuecomplete: noop,
            addedfiles: noop,
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
        };

        extend = function () {
            var key, object, objects, target, val, _i, _len;
            target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            for (_i = 0, _len = objects.length; _i < _len; _i++) {
                object = objects[_i];
                for (key in object) {
                    val = object[key];
                    target[key] = val;
                }
            }
            return target;
        };

        function Dropzone(element, options) {
            var elementOptions, fallback, _ref;
            this.element = element;
            this.version = Dropzone.version;
            this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
            this.clickableElements = [];
            this.listeners = [];
            this.files = [];
            if (typeof this.element === "string") {
                this.element = document.querySelector(this.element);
            }
            if (!(this.element && (this.element.nodeType != null))) {
                throw new Error("Invalid dropzone element.");
            }
            if (this.element.dropzone) {
                throw new Error("Dropzone already attached.");
            }
            Dropzone.instances.push(this);
            this.element.dropzone = this;
            elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
            this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
            if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
                return this.options.fallback.call(this);
            }
            if (this.options.url == null) {
                this.options.url = this.element.getAttribute("action");
            }
            if (!this.options.url) {
                throw new Error("No URL provided.");
            }
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
                throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            }
            if (this.options.acceptedMimeTypes) {
                this.options.acceptedFiles = this.options.acceptedMimeTypes;
                delete this.options.acceptedMimeTypes;
            }
            this.options.method = this.options.method.toUpperCase();
            if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
                fallback.parentNode.removeChild(fallback);
            }
            if (this.options.previewsContainer !== false) {
                if (this.options.previewsContainer) {
                    this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
                } else {
                    this.previewsContainer = this.element;
                }
            }
            if (this.options.clickable) {
                if (this.options.clickable === true) {
                    this.clickableElements = [this.element];
                } else {
                    this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
                }
            }
            this.init();
        }

        Dropzone.prototype.getAcceptedFiles = function () {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getRejectedFiles = function () {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (!file.accepted) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getFilesWithStatus = function (status) {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === status) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.getQueuedFiles = function () {
            return this.getFilesWithStatus(Dropzone.QUEUED);
        };

        Dropzone.prototype.getUploadingFiles = function () {
            return this.getFilesWithStatus(Dropzone.UPLOADING);
        };

        Dropzone.prototype.getAddedFiles = function () {
            return this.getFilesWithStatus(Dropzone.ADDED);
        };

        Dropzone.prototype.getActiveFiles = function () {
            var file, _i, _len, _ref, _results;
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
                    _results.push(file);
                }
            }
            return _results;
        };

        Dropzone.prototype.init = function () {
            var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
            if (this.element.tagName === "form") {
                this.element.setAttribute("enctype", "multipart/form-data");
            }
            if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
                this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
            }
            if (this.clickableElements.length) {
                setupHiddenFileInput = (function (_this) {
                    return function () {
                        if (_this.hiddenFileInput) {
                            _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
                        }
                        _this.hiddenFileInput = document.createElement("input");
                        _this.hiddenFileInput.setAttribute("type", "file");
                        if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
                            _this.hiddenFileInput.setAttribute("multiple", "multiple");
                        }
                        _this.hiddenFileInput.className = "dz-hidden-input";
                        if (_this.options.acceptedFiles != null) {
                            _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
                        }
                        if (_this.options.capture != null) {
                            _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
                        }
                        _this.hiddenFileInput.style.visibility = "hidden";
                        _this.hiddenFileInput.style.position = "absolute";
                        _this.hiddenFileInput.style.top = "0";
                        _this.hiddenFileInput.style.left = "0";
                        _this.hiddenFileInput.style.height = "0";
                        _this.hiddenFileInput.style.width = "0";
                        document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
                        return _this.hiddenFileInput.addEventListener("change", function () {
                            var file, files, _i, _len;
                            files = _this.hiddenFileInput.files;
                            if (files.length) {
                                for (_i = 0, _len = files.length; _i < _len; _i++) {
                                    file = files[_i];
                                    _this.addFile(file);
                                }
                            }
                            _this.emit("addedfiles", files);
                            return setupHiddenFileInput();
                        });
                    };
                })(this);
                setupHiddenFileInput();
            }
            this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
            _ref1 = this.events;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                eventName = _ref1[_i];
                this.on(eventName, this.options[eventName]);
            }
            this.on("uploadprogress", (function (_this) {
                return function () {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("removedfile", (function (_this) {
                return function () {
                    return _this.updateTotalUploadProgress();
                };
            })(this));
            this.on("canceled", (function (_this) {
                return function (file) {
                    return _this.emit("complete", file);
                };
            })(this));
            this.on("complete", (function (_this) {
                return function (file) {
                    if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
                        return setTimeout((function () {
                            return _this.emit("queuecomplete");
                        }), 0);
                    }
                };
            })(this));
            noPropagation = function (e) {
                e.stopPropagation();
                if (e.preventDefault) {
                    return e.preventDefault();
                } else {
                    return e.returnValue = false;
                }
            };
            this.listeners = [
                {
                    element: this.element,
                    events: {
                        "dragstart": (function (_this) {
                            return function (e) {
                                return _this.emit("dragstart", e);
                            };
                        })(this),
                        "dragenter": (function (_this) {
                            return function (e) {
                                noPropagation(e);
                                return _this.emit("dragenter", e);
                            };
                        })(this),
                        "dragover": (function (_this) {
                            return function (e) {
                                var efct;
                                try {
                                    efct = e.dataTransfer.effectAllowed;
                                } catch (_error) { }
                                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                                noPropagation(e);
                                return _this.emit("dragover", e);
                            };
                        })(this),
                        "dragleave": (function (_this) {
                            return function (e) {
                                return _this.emit("dragleave", e);
                            };
                        })(this),
                        "drop": (function (_this) {
                            return function (e) {
                                noPropagation(e);
                                return _this.drop(e);
                            };
                        })(this),
                        "dragend": (function (_this) {
                            return function (e) {
                                return _this.emit("dragend", e);
                            };
                        })(this)
                    }
                }
            ];
            this.clickableElements.forEach((function (_this) {
                return function (clickableElement) {
                    return _this.listeners.push({
                        element: clickableElement,
                        events: {
                            "click": function (evt) {
                                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                                    _this.hiddenFileInput.click();
                                }
                                return true;
                            }
                        }
                    });
                };
            })(this));
            this.enable();
            return this.options.init.call(this);
        };

        Dropzone.prototype.destroy = function () {
            var _ref;
            this.disable();
            this.removeAllFiles(true);
            if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
                this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = null;
            }
            delete this.element.dropzone;
            return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
        };

        Dropzone.prototype.updateTotalUploadProgress = function () {
            var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
            totalBytesSent = 0;
            totalBytes = 0;
            activeFiles = this.getActiveFiles();
            if (activeFiles.length) {
                _ref = this.getActiveFiles();
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    totalBytesSent += file.upload.bytesSent;
                    totalBytes += file.upload.total;
                }
                totalUploadProgress = 100 * totalBytesSent / totalBytes;
            } else {
                totalUploadProgress = 100;
            }
            return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
        };

        Dropzone.prototype._getParamName = function (n) {
            if (typeof this.options.paramName === "function") {
                return this.options.paramName(n);
            } else {
                return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
            }
        };

        Dropzone.prototype._renameFilename = function (name) {
            if (typeof this.options.renameFilename !== "function") {
                return name;
            }
            return this.options.renameFilename(name);
        };

        Dropzone.prototype.getFallbackForm = function () {
            var existingFallback, fields, fieldsString, form;
            if (existingFallback = this.getExistingFallback()) {
                return existingFallback;
            }
            fieldsString = "<div class=\"dz-fallback\">";
            if (this.options.dictFallbackText) {
                fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
            }
            fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
            fields = Dropzone.createElement(fieldsString);
            if (this.element.tagName !== "FORM") {
                form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
                form.appendChild(fields);
            } else {
                this.element.setAttribute("enctype", "multipart/form-data");
                this.element.setAttribute("method", this.options.method);
            }
            return form != null ? form : fields;
        };

        Dropzone.prototype.getExistingFallback = function () {
            var fallback, getFallback, tagName, _i, _len, _ref;
            getFallback = function (elements) {
                var el, _i, _len;
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )fallback($| )/.test(el.className)) {
                        return el;
                    }
                }
            };
            _ref = ["div", "form"];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                tagName = _ref[_i];
                if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
                    return fallback;
                }
            }
        };

        Dropzone.prototype.setupEventListeners = function () {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function () {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.addEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.removeEventListeners = function () {
            var elementListeners, event, listener, _i, _len, _ref, _results;
            _ref = this.listeners;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                elementListeners = _ref[_i];
                _results.push((function () {
                    var _ref1, _results1;
                    _ref1 = elementListeners.events;
                    _results1 = [];
                    for (event in _ref1) {
                        listener = _ref1[event];
                        _results1.push(elementListeners.element.removeEventListener(event, listener, false));
                    }
                    return _results1;
                })());
            }
            return _results;
        };

        Dropzone.prototype.disable = function () {
            var file, _i, _len, _ref, _results;
            this.clickableElements.forEach(function (element) {
                return element.classList.remove("dz-clickable");
            });
            this.removeEventListeners();
            _ref = this.files;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                _results.push(this.cancelUpload(file));
            }
            return _results;
        };

        Dropzone.prototype.enable = function () {
            this.clickableElements.forEach(function (element) {
                return element.classList.add("dz-clickable");
            });
            return this.setupEventListeners();
        };

        Dropzone.prototype.filesize = function (size) {
            var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
            selectedSize = 0;
            selectedUnit = "b";
            if (size > 0) {
                units = ['TB', 'GB', 'MB', 'KB', 'b'];
                for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
                    unit = units[i];
                    cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                    if (size >= cutoff) {
                        selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                        selectedUnit = unit;
                        break;
                    }
                }
                selectedSize = Math.round(10 * selectedSize) / 10;
            }
            return "<strong>" + selectedSize + "</strong> " + selectedUnit;
        };

        Dropzone.prototype._updateMaxFilesReachedClass = function () {
            if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                if (this.getAcceptedFiles().length === this.options.maxFiles) {
                    this.emit('maxfilesreached', this.files);
                }
                return this.element.classList.add("dz-max-files-reached");
            } else {
                return this.element.classList.remove("dz-max-files-reached");
            }
        };

        Dropzone.prototype.drop = function (e) {
            var files, items;
            if (!e.dataTransfer) {
                return;
            }
            this.emit("drop", e);
            files = e.dataTransfer.files;
            this.emit("addedfiles", files);
            if (files.length) {
                items = e.dataTransfer.items;
                if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                    this._addFilesFromItems(items);
                } else {
                    this.handleFiles(files);
                }
            }
        };

        Dropzone.prototype.paste = function (e) {
            var items, _ref;
            if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
                return;
            }
            this.emit("paste", e);
            items = e.clipboardData.items;
            if (items.length) {
                return this._addFilesFromItems(items);
            }
        };

        Dropzone.prototype.handleFiles = function (files) {
            var file, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                _results.push(this.addFile(file));
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromItems = function (items) {
            var entry, item, _i, _len, _results;
            _results = [];
            for (_i = 0, _len = items.length; _i < _len; _i++) {
                item = items[_i];
                if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) {
                        _results.push(this.addFile(item.getAsFile()));
                    } else if (entry.isDirectory) {
                        _results.push(this._addFilesFromDirectory(entry, entry.name));
                    } else {
                        _results.push(void 0);
                    }
                } else if (item.getAsFile != null) {
                    if ((item.kind == null) || item.kind === "file") {
                        _results.push(this.addFile(item.getAsFile()));
                    } else {
                        _results.push(void 0);
                    }
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        Dropzone.prototype._addFilesFromDirectory = function (directory, path) {
            var dirReader, errorHandler, readEntries;
            dirReader = directory.createReader();
            errorHandler = function (error) {
                return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
            };
            readEntries = (function (_this) {
                return function () {
                    return dirReader.readEntries(function (entries) {
                        var entry, _i, _len;
                        if (entries.length > 0) {
                            for (_i = 0, _len = entries.length; _i < _len; _i++) {
                                entry = entries[_i];
                                if (entry.isFile) {
                                    entry.file(function (file) {
                                        if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                                            return;
                                        }
                                        file.fullPath = "" + path + "/" + file.name;
                                        return _this.addFile(file);
                                    });
                                } else if (entry.isDirectory) {
                                    _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
                                }
                            }
                            readEntries();
                        }
                        return null;
                    }, errorHandler);
                };
            })(this);
            return readEntries();
        };

        Dropzone.prototype.accept = function (file, done) {
            if (file.size > this.options.maxFilesize * 1024 * 1024) {
                return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
            } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
                return done(this.options.dictInvalidFileType);
            } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
                done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
                return this.emit("maxfilesexceeded", file);
            } else {
                return this.options.accept.call(this, file, done);
            }
        };

        Dropzone.prototype.addFile = function (file) {
            file.upload = {
                progress: 0,
                total: file.size,
                bytesSent: 0
            };
            this.files.push(file);
            file.status = Dropzone.ADDED;
            this.emit("addedfile", file);
            this._enqueueThumbnail(file);
            return this.accept(file, (function (_this) {
                return function (error) {
                    if (error) {
                        file.accepted = false;
                        _this._errorProcessing([file], error);
                    } else {
                        file.accepted = true;
                        if (_this.options.autoQueue) {
                            _this.enqueueFile(file);
                        }
                    }
                    return _this._updateMaxFilesReachedClass();
                };
            })(this));
        };

        Dropzone.prototype.enqueueFiles = function (files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                this.enqueueFile(file);
            }
            return null;
        };

        Dropzone.prototype.enqueueFile = function (file) {
            if (file.status === Dropzone.ADDED && file.accepted === true) {
                file.status = Dropzone.QUEUED;
                if (this.options.autoProcessQueue) {
                    return setTimeout(((function (_this) {
                        return function () {
                            return _this.processQueue();
                        };
                    })(this)), 0);
                }
            } else {
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
            }
        };

        Dropzone.prototype._thumbnailQueue = [];

        Dropzone.prototype._processingThumbnail = false;

        Dropzone.prototype._enqueueThumbnail = function (file) {
            if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
                this._thumbnailQueue.push(file);
                return setTimeout(((function (_this) {
                    return function () {
                        return _this._processThumbnailQueue();
                    };
                })(this)), 0);
            }
        };

        Dropzone.prototype._processThumbnailQueue = function () {
            if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
                return;
            }
            this._processingThumbnail = true;
            return this.createThumbnail(this._thumbnailQueue.shift(), (function (_this) {
                return function () {
                    _this._processingThumbnail = false;
                    return _this._processThumbnailQueue();
                };
            })(this));
        };

        Dropzone.prototype.removeFile = function (file) {
            if (file.status === Dropzone.UPLOADING) {
                this.cancelUpload(file);
            }
            this.files = without(this.files, file);
            this.emit("removedfile", file);
            if (this.files.length === 0) {
                return this.emit("reset");
            }
        };

        Dropzone.prototype.removeAllFiles = function (cancelIfNecessary) {
            var file, _i, _len, _ref;
            if (cancelIfNecessary == null) {
                cancelIfNecessary = false;
            }
            _ref = this.files.slice();
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                file = _ref[_i];
                if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
                    this.removeFile(file);
                }
            }
            return null;
        };

        Dropzone.prototype.createThumbnail = function (file, callback) {
            var fileReader;
            fileReader = new FileReader;
            fileReader.onload = (function (_this) {
                return function () {
                    if (file.type === "image/svg+xml") {
                        _this.emit("thumbnail", file, fileReader.result);
                        if (callback != null) {
                            callback();
                        }
                        return;
                    }
                    return _this.createThumbnailFromUrl(file, fileReader.result, callback);
                };
            })(this);
            return fileReader.readAsDataURL(file);
        };

        Dropzone.prototype.createThumbnailFromUrl = function (file, imageUrl, callback, crossOrigin) {
            var img;
            img = document.createElement("img");
            if (crossOrigin) {
                img.crossOrigin = crossOrigin;
            }
            img.onload = (function (_this) {
                return function () {
                    var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
                    file.width = img.width;
                    file.height = img.height;
                    resizeInfo = _this.options.resize.call(_this, file);
                    if (resizeInfo.trgWidth == null) {
                        resizeInfo.trgWidth = resizeInfo.optWidth;
                    }
                    if (resizeInfo.trgHeight == null) {
                        resizeInfo.trgHeight = resizeInfo.optHeight;
                    }
                    canvas = document.createElement("canvas");
                    ctx = canvas.getContext("2d");
                    canvas.width = resizeInfo.trgWidth;
                    canvas.height = resizeInfo.trgHeight;
                    drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                    thumbnail = canvas.toDataURL("image/png");
                    _this.emit("thumbnail", file, thumbnail);
                    if (callback != null) {
                        return callback();
                    }
                };
            })(this);
            if (callback != null) {
                img.onerror = callback;
            }
            return img.src = imageUrl;
        };

        Dropzone.prototype.processQueue = function () {
            var i, parallelUploads, processingLength, queuedFiles;
            parallelUploads = this.options.parallelUploads;
            processingLength = this.getUploadingFiles().length;
            i = processingLength;
            if (processingLength >= parallelUploads) {
                return;
            }
            queuedFiles = this.getQueuedFiles();
            if (!(queuedFiles.length > 0)) {
                return;
            }
            if (this.options.uploadMultiple) {
                return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
            } else {
                while (i < parallelUploads) {
                    if (!queuedFiles.length) {
                        return;
                    }
                    this.processFile(queuedFiles.shift());
                    i++;
                }
            }
        };

        Dropzone.prototype.processFile = function (file) {
            return this.processFiles([file]);
        };

        Dropzone.prototype.processFiles = function (files) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.processing = true;
                file.status = Dropzone.UPLOADING;
                this.emit("processing", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("processingmultiple", files);
            }
            return this.uploadFiles(files);
        };

        Dropzone.prototype._getFilesWithXhr = function (xhr) {
            var file, files;
            return files = (function () {
                var _i, _len, _ref, _results;
                _ref = this.files;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    file = _ref[_i];
                    if (file.xhr === xhr) {
                        _results.push(file);
                    }
                }
                return _results;
            }).call(this);
        };

        Dropzone.prototype.cancelUpload = function (file) {
            var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
            if (file.status === Dropzone.UPLOADING) {
                groupedFiles = this._getFilesWithXhr(file.xhr);
                for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
                    groupedFile = groupedFiles[_i];
                    groupedFile.status = Dropzone.CANCELED;
                }
                file.xhr.abort();
                for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
                    groupedFile = groupedFiles[_j];
                    this.emit("canceled", groupedFile);
                }
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", groupedFiles);
                }
            } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
                file.status = Dropzone.CANCELED;
                this.emit("canceled", file);
                if (this.options.uploadMultiple) {
                    this.emit("canceledmultiple", [file]);
                }
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        resolveOption = function () {
            var args, option;
            option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if (typeof option === 'function') {
                return option.apply(this, args);
            }
            return option;
        };

        Dropzone.prototype.uploadFile = function (file) {
            return this.uploadFiles([file]);
        };

        Dropzone.prototype.uploadFiles = function (files) {
            var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
            xhr = new XMLHttpRequest();
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.xhr = xhr;
            }
            method = resolveOption(this.options.method, files);
            url = resolveOption(this.options.url, files);
            xhr.open(method, url, true);
            xhr.withCredentials = !!this.options.withCredentials;
            response = null;
            handleError = (function (_this) {
                return function () {
                    var _j, _len1, _results;
                    _results = [];
                    for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                        file = files[_j];
                        _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
                    }
                    return _results;
                };
            })(this);
            updateProgress = (function (_this) {
                return function (e) {
                    var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
                    if (e != null) {
                        progress = 100 * e.loaded / e.total;
                        for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                            file = files[_j];
                            file.upload = {
                                progress: progress,
                                total: e.total,
                                bytesSent: e.loaded
                            };
                        }
                    } else {
                        allFilesFinished = true;
                        progress = 100;
                        for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
                            file = files[_k];
                            if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                                allFilesFinished = false;
                            }
                            file.upload.progress = progress;
                            file.upload.bytesSent = file.upload.total;
                        }
                        if (allFilesFinished) {
                            return;
                        }
                    }
                    _results = [];
                    for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
                        file = files[_l];
                        _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
                    }
                    return _results;
                };
            })(this);
            xhr.onload = (function (_this) {
                return function (e) {
                    var _ref;
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    if (xhr.readyState !== 4) {
                        return;
                    }
                    response = xhr.responseText;
                    if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
                        try {
                            response = JSON.parse(response);
                        } catch (_error) {
                            e = _error;
                            response = "Invalid JSON response from server.";
                        }
                    }
                    updateProgress();
                    if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
                        return handleError();
                    } else {
                        return _this._finished(files, response, e);
                    }
                };
            })(this);
            xhr.onerror = (function (_this) {
                return function () {
                    if (files[0].status === Dropzone.CANCELED) {
                        return;
                    }
                    return handleError();
                };
            })(this);
            progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
            progressObj.onprogress = updateProgress;
            headers = {
                "Accept": "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            };
            if (this.options.headers) {
                extend(headers, this.options.headers);
            }
            for (headerName in headers) {
                headerValue = headers[headerName];
                if (headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }
            formData = new FormData();
            if (this.options.params) {
                _ref1 = this.options.params;
                for (key in _ref1) {
                    value = _ref1[key];
                    formData.append(key, value);
                }
            }
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
                file = files[_j];
                this.emit("sending", file, xhr, formData);
            }
            if (this.options.uploadMultiple) {
                this.emit("sendingmultiple", files, xhr, formData);
            }
            if (this.element.tagName === "FORM") {
                _ref2 = this.element.querySelectorAll("input, textarea, select, button");
                for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                    input = _ref2[_k];
                    inputName = input.getAttribute("name");
                    inputType = input.getAttribute("type");
                    if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                        _ref3 = input.options;
                        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                            option = _ref3[_l];
                            if (option.selected) {
                                formData.append(inputName, option.value);
                            }
                        }
                    } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
                        formData.append(inputName, input.value);
                    }
                }
            }
            for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
                formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name));
            }
            return this.submitRequest(xhr, formData, files);
        };

        Dropzone.prototype.submitRequest = function (xhr, formData, files) {
            return xhr.send(formData);
        };

        Dropzone.prototype._finished = function (files, responseText, e) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.SUCCESS;
                this.emit("success", file, responseText, e);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("successmultiple", files, responseText, e);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        Dropzone.prototype._errorProcessing = function (files, message, xhr) {
            var file, _i, _len;
            for (_i = 0, _len = files.length; _i < _len; _i++) {
                file = files[_i];
                file.status = Dropzone.ERROR;
                this.emit("error", file, message, xhr);
                this.emit("complete", file);
            }
            if (this.options.uploadMultiple) {
                this.emit("errormultiple", files, message, xhr);
                this.emit("completemultiple", files);
            }
            if (this.options.autoProcessQueue) {
                return this.processQueue();
            }
        };

        return Dropzone;

    })(Emitter);

    Dropzone.version = "4.3.0";

    Dropzone.options = {};

    Dropzone.optionsForElement = function (element) {
        if (element.getAttribute("id")) {
            return Dropzone.options[camelize(element.getAttribute("id"))];
        } else {
            return void 0;
        }
    };

    Dropzone.instances = [];

    Dropzone.forElement = function (element) {
        if (typeof element === "string") {
            element = document.querySelector(element);
        }
        if ((element != null ? element.dropzone : void 0) == null) {
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        }
        return element.dropzone;
    };

    Dropzone.autoDiscover = true;

    Dropzone.discover = function () {
        var checkElements, dropzone, dropzones, _i, _len, _results;
        if (document.querySelectorAll) {
            dropzones = document.querySelectorAll(".dropzone");
        } else {
            dropzones = [];
            checkElements = function (elements) {
                var el, _i, _len, _results;
                _results = [];
                for (_i = 0, _len = elements.length; _i < _len; _i++) {
                    el = elements[_i];
                    if (/(^| )dropzone($| )/.test(el.className)) {
                        _results.push(dropzones.push(el));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };
            checkElements(document.getElementsByTagName("div"));
            checkElements(document.getElementsByTagName("form"));
        }
        _results = [];
        for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
            dropzone = dropzones[_i];
            if (Dropzone.optionsForElement(dropzone) !== false) {
                _results.push(new Dropzone(dropzone));
            } else {
                _results.push(void 0);
            }
        }
        return _results;
    };

    Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

    Dropzone.isBrowserSupported = function () {
        var capableBrowser, regex, _i, _len, _ref;
        capableBrowser = true;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
            if (!("classList" in document.createElement("a"))) {
                capableBrowser = false;
            } else {
                _ref = Dropzone.blacklistedBrowsers;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    regex = _ref[_i];
                    if (regex.test(navigator.userAgent)) {
                        capableBrowser = false;
                        continue;
                    }
                }
            }
        } else {
            capableBrowser = false;
        }
        return capableBrowser;
    };

    without = function (list, rejectedItem) {
        var item, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = list.length; _i < _len; _i++) {
            item = list[_i];
            if (item !== rejectedItem) {
                _results.push(item);
            }
        }
        return _results;
    };

    camelize = function (str) {
        return str.replace(/[\-_](\w)/g, function (match) {
            return match.charAt(1).toUpperCase();
        });
    };

    Dropzone.createElement = function (string) {
        var div;
        div = document.createElement("div");
        div.innerHTML = string;
        return div.childNodes[0];
    };

    Dropzone.elementInside = function (element, container) {
        if (element === container) {
            return true;
        }
        while (element = element.parentNode) {
            if (element === container) {
                return true;
            }
        }
        return false;
    };

    Dropzone.getElement = function (el, name) {
        var element;
        if (typeof el === "string") {
            element = document.querySelector(el);
        } else if (el.nodeType != null) {
            element = el;
        }
        if (element == null) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
        }
        return element;
    };

    Dropzone.getElements = function (els, name) {
        var e, el, elements, _i, _j, _len, _len1, _ref;
        if (els instanceof Array) {
            elements = [];
            try {
                for (_i = 0, _len = els.length; _i < _len; _i++) {
                    el = els[_i];
                    elements.push(this.getElement(el, name));
                }
            } catch (_error) {
                e = _error;
                elements = null;
            }
        } else if (typeof els === "string") {
            elements = [];
            _ref = document.querySelectorAll(els);
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                el = _ref[_j];
                elements.push(el);
            }
        } else if (els.nodeType != null) {
            elements = [els];
        }
        if (!((elements != null) && elements.length)) {
            throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        }
        return elements;
    };

    Dropzone.confirm = function (question, accepted, rejected) {
        if (window.confirm(question)) {
            return accepted();
        } else if (rejected != null) {
            return rejected();
        }
    };

    Dropzone.isValidFile = function (file, acceptedFiles) {
        var baseMimeType, mimeType, validType, _i, _len;
        if (!acceptedFiles) {
            return true;
        }
        acceptedFiles = acceptedFiles.split(",");
        mimeType = file.type;
        baseMimeType = mimeType.replace(/\/.*$/, "");
        for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
            validType = acceptedFiles[_i];
            validType = validType.trim();
            if (validType.charAt(0) === ".") {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                    return true;
                }
            } else if (/\/\*$/.test(validType)) {
                if (baseMimeType === validType.replace(/\/.*$/, "")) {
                    return true;
                }
            } else {
                if (mimeType === validType) {
                    return true;
                }
            }
        }
        return false;
    };

    if (typeof jQuery !== "undefined" && jQuery !== null) {
        jQuery.fn.dropzone = function (options) {
            return this.each(function () {
                return new Dropzone(this, options);
            });
        };
    }

    if (typeof module !== "undefined" && module !== null) {
        module.exports = Dropzone;
    } else {
        window.Dropzone = Dropzone;
    }

    Dropzone.ADDED = "added";

    Dropzone.QUEUED = "queued";

    Dropzone.ACCEPTED = Dropzone.QUEUED;

    Dropzone.UPLOADING = "uploading";

    Dropzone.PROCESSING = Dropzone.UPLOADING;

    Dropzone.CANCELED = "canceled";

    Dropzone.ERROR = "error";

    Dropzone.SUCCESS = "success";


    /*

    Bugfix for iOS 6 and 7
    Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    based on the work of https://github.com/stomita/ios-imagefile-megapixel
    */

    detectVerticalSquash = function (img) {
        var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
        iw = img.naturalWidth;
        ih = img.naturalHeight;
        canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = ih;
        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        data = ctx.getImageData(0, 0, 1, ih).data;
        sy = 0;
        ey = ih;
        py = ih;
        while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];
            if (alpha === 0) {
                ey = py;
            } else {
                sy = py;
            }
            py = (ey + sy) >> 1;
        }
        ratio = py / ih;
        if (ratio === 0) {
            return 1;
        } else {
            return ratio;
        }
    };

    drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        var vertSquashRatio;
        vertSquashRatio = detectVerticalSquash(img);
        return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
    };


    /*
    * contentloaded.js
    *
    * Author: Diego Perini (diego.perini at gmail.com)
    * Summary: cross-browser wrapper for DOMContentLoaded
    * Updated: 20101020
    * License: MIT
    * Version: 1.2
    *
    * URL:
    * http://javascript.nwbox.com/ContentLoaded/
    * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
    */

    contentLoaded = function (win, fn) {
        var add, doc, done, init, poll, pre, rem, root, top;
        done = false;
        top = true;
        doc = win.document;
        root = doc.documentElement;
        add = (doc.addEventListener ? "addEventListener" : "attachEvent");
        rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
        pre = (doc.addEventListener ? "" : "on");
        init = function (e) {
            if (e.type === "readystatechange" && doc.readyState !== "complete") {
                return;
            }
            (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) {
                return fn.call(win, e.type || e);
            }
        };
        poll = function () {
            var e;
            try {
                root.doScroll("left");
            } catch (_error) {
                e = _error;
                setTimeout(poll, 50);
                return;
            }
            return init("poll");
        };
        if (doc.readyState !== "complete") {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (_error) { }
                if (top) {
                    poll();
                }
            }
            doc[add](pre + "DOMContentLoaded", init, false);
            doc[add](pre + "readystatechange", init, false);
            return win[add](pre + "load", init, false);
        }
    };

    Dropzone._autoDiscoverFunction = function () {
        if (Dropzone.autoDiscover) {
            return Dropzone.discover();
        }
    };

    contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);


