import{$ as e,$i as t,$n as n,An as r,Ao as i,B as a,Bn as o,C as s,Co as c,Dt as l,Eo as u,Fo as d,Fr as f,Fs as p,Gi as m,Ha as h,Hi as g,Ho as _,I as v,Ia as y,Io as b,Ir as x,Jn as S,Ka as C,Kn as ee,Kt as w,Li as te,Lo as T,Lr as E,Ls as D,Lt as ne,Mo as O,Mr as k,Mt as A,N as j,No as M,Nr as N,Nt as P,On as re,Oo as F,P as I,Po as L,Pr as ie,Pt as ae,Q as R,R as oe,Ri as se,S as z,Sn as ce,So as le,Sr as ue,To as B,Ua as V,Uo as de,V as fe,Va as H,Vo as pe,Wi as me,Wt as he,Xr as ge,Yn as _e,Yt as ve,_ as ye,_i as be,_o as xe,an as Se,ao as Ce,as as we,bn as Te,bo as Ee,cn as De,co as Oe,ct as ke,d as U,di as Ae,do as je,et as Me,fr as Ne,fs as Pe,ft as Fe,go as Ie,h as Le,ho as W,hr as Re,hs as ze,jo as Be,jt as Ve,kn as He,ko as Ue,kt as We,l as Ge,lo as Ke,lr as qe,m as Je,mo as G,mr as Ye,o as Xe,or as Ze,os as Qe,po as $e,pr as et,qn as tt,qt as nt,rn as rt,sn as it,so as at,t as ot,ts as st,u as ct,un as K,uo as lt,vi as q,vn as ut,vo as J,vr as dt,x as ft,xn as pt,xo as mt,xt as ht,yo as gt,yr as _t,z as vt,zi as Y,zr as yt}from"./index-CQvgB2ts.js";import{$t as bt,C as xt,Cr as St,Kn as Ct,M as wt,Ot as Tt,Q as Et,Qt as Dt,Xn as Ot,bt as kt,cr as At,ct as jt,f as Mt,jr as Nt,l as Pt,mn as Ft,st as It,x as Lt,yt as Rt,zt}from"./app-CXq9Ok7f.js";import{CopyBtn as Bt,Help as X,TabBar as Vt}from"./kit-DWOct_wD.js";import"./CHANGELOG-DtH__9EY.js";import{_ as Ht}from"./components-CSmterf6.js";import{n as Ut,t as Wt}from"./storage-DI7U6hRM.js";import{n as Gt,t as Kt}from"./sync-BNQX0j90.js";import{C as qt,S as Jt,_ as Yt,d as Xt,f as Zt,g as Qt,h as $t,i as en,l as tn,m as nn,n as rn,p as an,r as on,s as sn,t as cn,v as ln,w as un,x as dn,y as fn}from"./deckChecks-Bdm645zK.js";import{i as pn,t as mn}from"./progress-B5apEc0b.js";var Z=D(p(),1),Q=ze();function hn(e){if(!e||typeof e!=`object`||Array.isArray(e))return`expected a backup object.`;let t=[`decks`,`games`,`accs`,`rankerRuns`,`pipeline`,`gauntlets`,`tourneys`,`builds`,`games60`,`gamesLimited`];for(let n=0;n<t.length;n++){let r=t[n];if(e[r]!==void 0&&e[r]!==null&&!Array.isArray(e[r]))return`'`+r+`' is not a list.`}let n=[`loads`,`inv`,`playgroup`,`settings`];for(let t=0;t<n.length;t++){let r=n[t];if(e[r]!==void 0&&e[r]!==null&&(typeof e[r]!=`object`||Array.isArray(e[r])))return`'`+r+`' is not an object.`}if(e.decks){for(let t=0;t<e.decks.length;t++){let n=e.decks[t];if(!n||typeof n!=`object`||typeof n.id!=`string`||!n.id||typeof n.name!=`string`)return`deck #`+(t+1)+` is malformed (needs id and name).`}let t={};for(let n=0;n<e.decks.length;n++){if(t[e.decks[n].id])return`duplicate deck id '`+e.decks[n].id+`'.`;t[e.decks[n].id]=1}}if(e.games){for(let t=0;t<e.games.length;t++){let n=e.games[t];if(!n||typeof n!=`object`||typeof n.id!=`string`||!n.id)return`game #`+(t+1)+` is malformed (needs id).`}let t={};for(let n=0;n<e.games.length;n++){if(t[e.games[n].id])return`duplicate game id '`+e.games[n].id+`'.`;t[e.games[n].id]=1}}return null}function gn(e){let t=e&&e.decks||[],n=e&&e.decklists&&typeof e.decklists==`object`?Object.keys(e.decklists).length:0,r=e&&e.lastBackup?new Date(e.lastBackup):null;return{decks:t.length,games:(e&&e.games||[]).length,decklists:n,art:t.filter(function(e){return e&&(e.art||e.artUrl)}).length,saved:r&&!isNaN(r.getTime())?r.toISOString().slice(0,10):``}}function _n(e,t,n){return t===`ok`?{bad:!1,text:e+`on, and the key works -- Categorize leads with Claude.`}:t===`rejected`?{bad:!0,text:e+`the Worker's key was rejected: it's wrong, revoked or expired. Make a new one at platform.claude.com and put it in the Worker's AI key (Cloudflare: the Worker, Settings > Variables and Secrets). Until then the app categorizes by rules.`}:t===`denied`?{bad:!0,text:e+`the Worker's key isn't allowed to use the API (HTTP 403). Check its workspace at platform.claude.com.`}:t===`none`?{bad:!1,text:e+`off (add the AI key on the Worker, see worker/README, to categorize with Claude).`}:{bad:!1,text:e+`on, but the key couldn't be checked just now`+(n?` (HTTP `+n+`)`:``)+`. Tap Test again in a minute.`}}function vn(){try{return/[?&]debug\b/.test(String(window.location.search||``))}catch{return!1}}function yn(){let e=M();e.on=!0;let t=Date.now();return Object.keys(De).forEach(function(n){!Ce(G(n))&&!e.stamps[n]&&(e.stamps[n]=t,e.pending[n]=!0)}),x(e),tt(!1),f()}function bn(e){return e=Ue(e),e.length===8?e.slice(0,4)+`-`+e.slice(4):e}function xn(e,t){let n=``;try{n=location.origin+location.pathname}catch{}return n+`#pair=`+Ue(e)+(t&&t!==`https://cll-worker.grantkphillips4313.workers.dev`?`&w=`+encodeURIComponent(t):``)}function Sn(){let e=M();e.on=!1,e.pending={},x(e),Object.keys(et).forEach(function(e){clearTimeout(et[e])}),S({})}var Cn={"cll2:decks":`Decks (with their pictures)`,"cll2:games":`Commander games (with life timelines)`,"cll2:decklists":`Decklists`,"cll2:collection":`Collection`,"cll2:trash":`Trash`,"cll2:gameJournal":`Game record (safety copy)`,"cll2:wishlist":`Wishlist`,"cll2:activeGame":`Game in progress`,"cll2:ui:tileImgs":`Table tile pictures`,"cll2:lifeSoundsLocal":`Your life sounds`,"cll2:games60":`60-card games`,"cll2:gamesLimited":`Limited games`,"cll2:rankerRuns":`Ranking runs`};function wn(e){return Cn[e]||(e.indexOf(`cll2:cache:`)===0?`Cached card data`:e.replace(/^cll2:(ui:)?/,``))}function $(e){return(e/1048576).toFixed(e<104858?2:1)+` MB`}function Tn(e){let t=0,n=0,r=0,i=0;return(e||[]).forEach(function(e){e&&(t+=String(e.art||``).length*2,n+=String(e.artBig||``).length*2,e.artFull&&(r+=String(e.artFull).length*2,i++))}),{thumb:t,big:n,full:r,nFull:i}}var En=5242880;function Dn(e){let t={};return(e||[]).forEach(function(e){e&&Object.keys(e).forEach(function(n){let r=0;try{r=JSON.stringify(e[n]).length*2}catch{}t[n]=(t[n]||0)+r})}),Object.keys(t).map(function(e){return{field:e,bytes:t[e]}}).sort(function(e,t){return t.bytes-e.bytes})}function On(){let e=`cll2:probe`,t=0,n=16777216;try{for(;n-t>16384;){let r=Math.floor((t+n)/2);try{localStorage.setItem(e,`x`.repeat(r)),t=r}catch{n=r}}}catch{}try{localStorage.removeItem(e)}catch{}return t*2}function kn({pop:e}){let t=(0,Z.useState)(0),r=(0,Z.useMemo)(function(){return Ee()},[t[0]]),i=(0,Z.useState)(null),a=Tn(G(`cll2:decks`)||[]),o={};r.list.forEach(function(e){let t=wn(e.key);o[t]=(o[t]||0)+e.bytes});let c=Object.keys(o).map(function(e){return{label:e,bytes:o[e]}}).sort(function(e,t){return t.bytes-e.bytes}).slice(0,8),l=Math.round(r.total/En*100);return(0,Q.jsx)(`div`,{"data-storage-use":l,style:{margin:`8px 0 4px`},children:(0,Q.jsxs)(y,{ck:`data2:space`,title:`What's using space`,summary:$(r.total)+` used`+(l>=80?` -- may be nearly full`:``),children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:l>=80?K.bad:K.body,lineHeight:1.5,marginBottom:6},children:`About `+$(r.total)+` used. Phones allow the app roughly 5 MB, but the real limit varies -- Measure room left checks this one. When it's full, a save can't be kept on the phone.`}),c.map(function(e){return(0,Q.jsxs)(`div`,{"data-storage-row":e.label,style:{display:`flex`,gap:8,fontFamily:I,fontSize:11,color:K.tx2,padding:`2px 0`},children:[(0,Q.jsx)(`span`,{style:{flex:1,minWidth:0},children:e.label}),(0,Q.jsx)(`span`,{children:$(e.bytes)})]},e.label)}),n.split&&(function(){let e=Oe(G(`cll2:decks`)||[]).heavy,t=0;try{t=JSON.stringify(e).length*2}catch{}return(0,Q.jsx)(`div`,{"data-storage-heavy":t,style:{fontFamily:I,fontSize:11,color:K.good,marginTop:4,lineHeight:1.5},children:`Deck pictures, EDHREC data, card checks, combos and prices (`+$(t)+`) are kept in the phone's larger storage, so they don't count here.`})})(),n.err&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.warn,marginTop:4},children:`The larger storage isn't working on this phone (`+n.err+`), so decks stay whole here.`}),!n.split&&(function(){let e=Dn(G(`cll2:decks`)||[]).slice(0,6);return e.length?(0,Q.jsx)(`div`,{"data-storage-deck-fields":`1`,style:{fontFamily:I,fontSize:11,color:K.dim,marginTop:4,lineHeight:1.5},children:`Inside Decks, the biggest: `+e.map(function(e){return e.field+` `+$(e.bytes)}).join(`, `)}):null})(),i[0]!==null&&(0,Q.jsx)(`div`,{"data-storage-free":i[0],style:{fontFamily:I,fontSize:11,color:i[0]<262144?K.bad:K.good,marginTop:4},children:`Room left on this phone: about `+$(i[0])+(i[0]<262144?` -- nearly full`:``)}),!n.split&&a.full+a.big+a.thumb>0&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.dim,marginTop:4,lineHeight:1.5},children:`Deck pictures inside Decks: `+$(a.thumb+a.big+a.full)+(a.full?` (`+$(a.full)+` of it full-size uploads on `+a.nFull+` deck`+(a.nFull===1?``:`s`)+`)`:``)}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginTop:8},children:[(0,Q.jsx)(U,{small:!0,onClick:function(){let n=Ee().total;gt(``,2**53-1);let r=Ee().total;t[1](t[0]+1),i[1](null),e(r<n?`Freed `+$(n-r)+`: cached card data and Trash older than a week.`:`Nothing to free -- no caches or old Trash.`)},children:`Free up space`}),(0,Q.jsx)(U,{small:!0,onClick:function(){i[1](On())},children:`Measure room left`}),a.full>0&&(0,Q.jsx)(U,{small:!0,onClick:function(){let e=G(`cll2:decks`)||[],n=e.map(function(e){return!e||!e.artFull?e:Object.assign({},e,{artFull:``})});W(s,n),t[1](t[0]+1);try{window.dispatchEvent(new CustomEvent(`cll2:undo`,{detail:{msg:`Full-size deck pictures removed (`+$(a.full)+`); each deck keeps its picture.`,restore:function(){W(s,e),t[1](t[0]+2)}}}))}catch{}},children:`Remove full-size deck pictures (`+$(a.full)+`)`})]}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,marginTop:4,lineHeight:1.5},children:`Free up space clears only what the app can rebuild. Removing full-size pictures keeps each deck's own picture; only the uncropped original goes.`})]})})}function An(){let e=(0,Z.useState)(qe.state);(0,Z.useEffect)(function(){let t=function(){e[1](qe.state)};return window.addEventListener(`cll2:persist`,t),mt(!1).then(t),function(){window.removeEventListener(`cll2:persist`,t)}},[]);let t=e[0];return t===`unknown`||t===`unsupported`?(0,Q.jsx)(`div`,{"data-storage-keep":t,hidden:!0}):(0,Q.jsxs)(`div`,{"data-storage-keep":t,style:{fontFamily:I,fontSize:11,color:t===`kept`?K.good:K.warn,margin:`8px 0 2px`,lineHeight:1.5},children:[t===`kept`?`Storage: kept for good on this phone (the browser won't clear it to free space).`:`Storage: the browser may clear it if the phone runs low on space. Back up often, or add the app to your home screen.`,t!==`kept`&&(0,Q.jsx)(`button`,{"data-storage-keep-ask":`1`,onClick:function(){mt(!0)},style:{marginLeft:8,padding:`6px 12px`,minHeight:36,borderRadius:H(6),background:`transparent`,border:`1px solid `+K.br,color:K.tx2,fontFamily:I,fontSize:11,cursor:`pointer`},children:`Ask to keep it`})]})}function jn(e,t){return Math.max(0,Math.ceil(((Number(e.at)||0)+30*Te-(t||Date.now()))/Te))}function Mn(e,t){let n={};return(e||[]).forEach(function(e){e&&e.id&&(n[e.id]=1)}),(e||[]).concat((t||[]).filter(function(e){return e&&!n[e.id]}))}function Nn(e){let t=e.data||{},n=!0,r=function(e){return function(t){W(e,t,{allowShrink:!0})}},i=Object.assign({games:G(`cll2:games`)||[],decks:G(`cll2:decks`)||[],loads:G(`cll2:loadouts`)||{},accs:G(`cll2:accessories`)||[],inv:G(`cll2:inventory`)||{},settings:G(`cll2:settings`)||{},saveGames:r(v),saveDecks:r(s),saveLoads:r(ke),saveAccs:r(ot),saveInv:r(R),saveSettings:r(ve)},Re||{});switch(e.kind){case`game`:case`games`:i.saveGames(Mn(i.games,t.games),{allowShrink:!0});break;case`deck`:i.saveDecks(Mn(i.decks,[t.deck])),t.games&&t.games.length&&i.saveGames(Mn(i.games,t.games));break;case`loadout`:{let e=Object.assign({},i.loads||{});e[t.id]||(e[t.id]=t.load),i.saveLoads(e);break}case`accessory`:i.saveAccs(Mn(i.accs,[t.acc]));break;case`box`:i.saveInv(Object.assign({},i.inv||{},{boxes:Mn(se(i.inv||{}),[t.box])}));break;case`tournament`:W(ut,Mn(G(`cll2:tourneys`)||[],[t.t]));break;case`season`:kt(Mn(Rt(),[t.q]));break;case`decklist`:{let e=te(G(`cll2:decklists`)||{});e[t.deckId]||(e=Object.assign({},e),e[t.deckId]=t.entry,W(ft,e));break}case`palette`:{let e=i.settings||{};i.saveSettings(Object.assign({},e,{customThemes:Mn(e.customThemes||[],[t.ct])}));break}case`plane`:{let e=Dt();bt({mode:e.mode,cards:Mn(e.cards,[t.card])});break}default:n=!1}return n&&Ut(e.id),n}function Pn(e,t){let n=Math.floor(((t||Date.now())-(Number(e)||0))/Te);return n<=0?`today`:n===1?`yesterday`:n+` days ago`}function Fn({pop:e}){Mt(pt),(0,Z.useEffect)(function(){le()},[]);let t=(0,Z.useState)(``),n=c(),r={padding:`4px 10px`,borderRadius:H(6),background:`transparent`,border:`1px solid `+K.br,color:K.tx2,fontFamily:I,fontSize:11,cursor:`pointer`},i=function(t){Nn(t)?(k(`confirm`),e&&e(`Restored: `+t.label+`.`)):e&&e(`Couldn't restore that one.`)},a=function(n){t[0]===n.id?(t[1](``),Ut(n.id),e&&e(`Deleted for good.`)):t[1](n.id)};return(0,Q.jsxs)(`div`,{"data-trash":n.length,children:[(0,Q.jsxs)(`div`,{style:{fontFamily:I,fontSize:11,color:K.muted,lineHeight:1.5,marginBottom:8},children:[`What you delete waits here for `,30,` days, then goes for good. Restore puts it back where it was. Kept on this phone only.`]}),n.length===0&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,padding:`6px 0`},children:`Trash is empty.`}),n.map(function(e){let n=jn(e),o=e.data&&e.data.games&&e.kind!==`game`?e.data.games.length:0;return(0,Q.jsxs)(`div`,{"data-trash-item":e.kind,style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`,padding:`7px 0`,borderTop:`1px solid `+K.divd},children:[(0,Q.jsxs)(`div`,{style:{flex:1,minWidth:150},children:[(0,Q.jsxs)(`div`,{style:{fontFamily:j,fontSize:13,color:K.tx,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[(0,Q.jsx)(`span`,{style:{fontFamily:I,fontSize:11,color:K.dim,letterSpacing:1,textTransform:`uppercase`,marginRight:6},children:ce[e.kind]||e.kind}),e.label]}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:n<=3?K.warn:K.faint},children:`Deleted `+Pn(e.at)+(o?` with `+q(o,`game`):``)+` - `+(n<=1?`goes for good within a day`:`goes for good in `+n+` days`)})]}),(0,Q.jsx)(`button`,{"data-trash-restore":e.id,onClick:function(){i(e)},style:Object.assign({},r,{color:K.goldBr,borderColor:K.gold+`88`}),children:`Restore`}),(0,Q.jsx)(`button`,{"data-trash-forget":e.id,onClick:function(){a(e)},style:Object.assign({},r,{color:K.bad,borderColor:K.bad+`66`}),children:t[0]===e.id?`Tap again`:`Delete`})]},e.id)}),n.length>0&&(0,Q.jsx)(`div`,{style:{marginTop:8,display:`flex`,justifyContent:`flex-end`},children:(0,Q.jsx)(`button`,{"data-trash-empty":`1`,onClick:function(){t[0]===`__all`?(t[1](``),B([]),e&&e(`Trash emptied.`)):t[1](`__all`)},style:Object.assign({},r,{color:K.bad,borderColor:K.bad+`66`}),children:t[0]===`__all`?`Tap again to empty`:`Empty trash`})})]})}var In=[`tier`,`updateNote`,`fmtPod`,`podWhy`,`fmt2hg`,`plan2hg`,`plan`,`bracketWhy`,`strategy`,`stage`,`note`];function Ln(e,t){let n={};(e||[]).forEach(function(e){n[e.id]=e});let r=0;return(t||[]).forEach(function(e){let t=n[e.id];t&&e.fields.every(function(n){return JSON.stringify(t[n])===JSON.stringify(e.v[n])})&&r++}),r}function Rn(e,t,n){n||={};let r=!!n.overwrite,i=t&&Array.isArray(t.decks)?t.decks:[],a={},o={};(e||[]).forEach(function(e){a[e.id]=e;let t=String(e.name||``).trim().toLowerCase();t&&(o[t]=o[t]||[]).push(e)});let s={},c=[],l=[];return i.forEach(function(e){if(!e||typeof e!=`object`)return;let t=e.id&&a[e.id],n=String(e.name||``).trim().toLowerCase();if(t&&e.name&&String(t.name||``).trim().toLowerCase()!==n){l.push({id:e.id,name:e.name,why:`id is a different deck here (`+t.name+`)`});return}if(!t&&n&&o[n]&&o[n].length===1&&(t=o[n][0]),!t){l.push({id:e.id||``,name:e.name||``,why:`no such deck here`});return}let i=[],u=Object.assign({},s[t.id]||t);In.forEach(function(t){if(e[t]===void 0||e[t]===null)return;let n=typeof e[t]==`string`?e[t].trim():e[t];if(t===`tier`&&(n=String(n).toUpperCase(),[`S`,`A`,`B`,`C`].indexOf(n)<0)||t===`fmtPod`&&[`duel`,`either`,`multi`].indexOf(n)<0||t===`fmt2hg`&&[`good`,`neutral`,`poor`].indexOf(n)<0||t===`stage`&&[`idea`,`decklist`,`cart`,`ordered`,`built`].indexOf(n)<0)return;let a=u[t];(r||a==null||a===``||t===`fmtPod`&&a===`either`||t===`fmt2hg`&&a===`neutral`)&&JSON.stringify(a)!==JSON.stringify(n)&&(u[t]=n,i.push(t),t===`stage`&&(n===`built`?(u.color===`Build Idea`||u.color===`Proxy Order Cart`)&&(u.color=``):u.color=n===`cart`||n===`ordered`?rt:Se))}),i.length&&(s[t.id]=u,c.push({id:t.id,name:t.name,fields:i}))}),{decks:(e||[]).map(function(e){return s[e.id]?Tt(e,s[e.id]):e}),changed:c,skipped:l}}function zn(e,t){let n={};return(t||[]).forEach(function(e){n[e.id]=e}),(J(`SEED_DECKS`)||[]).forEach(function(e){n[e.id]||(n[e.id]=e)}),(e||[]).map(function(e){let t=n[e.id];if(!t)return e;let r=Object.assign({},e);return!r.art&&t.art&&(r.art=t.art),r})}function Bn(e){let t=JSON.stringify(e===void 0?null:e),n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e)|0;return t.length+`:`+n}function Vn(e){return Promise.all(Me.map(function(t){let n=e&&e[t[0]];return zt(t[0],n&&n.data?n:null)})).catch(function(){})}function Hn({getText:e,pop:t,onClose:n}){let r=(0,Z.useState)(``),i=r[0],a=r[1],o=(0,Z.useState)(``),s=o[0],c=o[1],l=(0,Z.useRef)(null);(0,Z.useEffect)(function(){let t=``;try{t=e()||``}catch{t=``}a(t)},[]);let u=Math.round((i||``).length/1024);return(0,Q.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:1300,background:V(`#060504`),display:`flex`,flexDirection:`column`,padding:`calc(14px + var(--sat)) 14px calc(14px + var(--sab))`,boxSizing:`border-box`},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:10},children:[(0,Q.jsx)(`button`,{onClick:n,style:{background:`transparent`,border:`1px solid `+K.br,borderRadius:H(6),color:K.muted,cursor:`pointer`,fontFamily:I,fontSize:12,padding:`4px 14px`},children:`Back`}),(0,Q.jsxs)(`div`,{style:{fontFamily:I,fontSize:11,letterSpacing:3,color:K.gold},children:[`BACKUP (`,u,`KB)`]})]}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:8,flexWrap:`wrap`},children:[(0,Q.jsx)(U,{gold:!0,small:!0,onClick:function(){if(!i)c(`nothing to share`);else try{navigator&&navigator.share?(navigator.share({title:`CLL backup`,text:i}).then(function(){c(`shared -- pick Save to Files`)},function(e){let t=e&&(e.name||e.message)||`rejected`;c(t===`AbortError`?`share cancelled`:`share refused (`+t+`) -- select the text below instead`)}),c(`opening share sheet...`)):c(`no share API here -- select the text below`)}catch{c(`share threw -- select the text below`)}},children:`Share`}),(0,Q.jsx)(U,{small:!0,onClick:function(){let e=l.current;if(e)try{e.focus(),e.setSelectionRange(0,(i||``).length),c(`selected -- long-press, Share, Save to Files`)}catch{c(`could not select`)}},children:`Select All`})]}),(0,Q.jsxs)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,lineHeight:1.5,marginBottom:8},children:[`Share opens the iOS sheet -- choose Save to Files. If that is refused, tap Select All, then long-press the text, Share, Save to Files.`,s?` -- `+s:``]}),(0,Q.jsx)(`textarea`,{"aria-label":`Exported text`,ref:l,readOnly:!0,value:i,style:{flex:1,width:`100%`,boxSizing:`border-box`,background:K.bg,border:`1px solid `+K.br,borderRadius:H(6),color:K.tx2,fontFamily:I,fontSize:11,lineHeight:1.35,padding:8,resize:`none`}})]})}var Un=[`Commander Loadout Ledger analysis pack. One player's Commander (EDH) collection and game log.`,`decks: every deck. bracket 1-5 is the declared power bracket (WotC Commander Brackets). tags may include precon/proxy. colorId is WUBRG identity. cardCheck.sig is what the list reads (gc = Game Changers, mld = mass land denial, turns = extra turns, fast = fast mana). combos.inList counts two-card infinite combos (Commander Spellbook). edhrecTop compares the list to EDHREC's top cards for the commander.`,`decklists: keyed by deck id. text is the list, one card per line; when the list has been categorized each line ends with the card's roles in brackets: l land, r ramp, d draw, t targeted removal, m mass removal (wipes), h threat, o other (a card can have several). comp holds the counts per role and via says whether rules or Claude assigned them. versions are earlier lists (newest first) with what changed going into the next one.`,`games: one row per game the player logged, newest first. placement is the player's finish (1st wins). playerCount seats. turnOrder is the player's seat (1 = went first). bracketPlayed is the table's bracket. opponents carry name, commander, bracket, won, deckId when they borrowed one of the player's decks. eliminations say who took whom out and how. eloDelta is not stored; ELO is replayed from placements. excludeFromOwnStats marks practice, self-play and tournament rows.`,`cards (when built with the option on): oracle text, type line, mana value, color identity, price and Game Changer flag for every card in a deck that has been played, keyed by name. decks[].edhrec (same option): EDHREC's numbers for the commander -- decks is how many decks EDHREC has for it; inList gives each card in this list its inclusion rate (pct of those decks running it) and synergy (how much more often it appears in this commander's decks than in decks of the same colors); notInList is the most-run cards this list lacks.`,`playgroup: people and venues the player has recorded. loadouts: sets of decks packed for an outing. wishlist: the player's Moxfield wishlist link and, when the pack was built with the Worker, its current card list.`,`Ask anything: which decks win, seat effects, what to cut, which opponents beat which commanders, what to bring next time.`].join(`
`);function Wn(e){let t={type:Qe(e),text:we(e),mv:e&&e.cmc,ci:(e&&e.color_identity||[]).join(``)||`C`,usd:Nt(e)};return e&&e.game_changer===!0&&(t.gc=!0),t}function Gn(e,t){let n={};(e||[]).forEach(function(e){n[_(e.name)]=1});let r=Number(t&&t.num_decks)||0,i={},a={},o=[];return(t&&t.cardlists||[]).forEach(function(e){(e.cards||[]).forEach(function(e){let t=_(e.name);if(!t||i[t])return;i[t]=1;let s=Number(e.potential)||r,c=Number(e.inclusion),l={};s>0&&c>=0&&(l.pct=Math.min(100,Math.round(c/s*100))),typeof e.synergy==`number`&&(l.syn=Math.round(e.synergy*100)/100),n[t]?a[e.name]=l:o.push(Object.assign({name:e.name},l))})}),o.sort(function(e,t){return(t.pct||0)-(e.pct||0)}),{decks:r,inList:a,notInList:o.slice(0,30)}}function Kn(e){e||={};let t=(e.decks||[]).map(function(t){let n={};if(`id.name.commander.commander2.cmdrName.bracket.tags.themes.customTags.colorId.strategy.tier.price.priceFrom.note.plan.plan2hg.fmt2hg.fmtPod.podWhy.bracketWhy.stage.retired.created.fromBuild.edhrecRank.edhrecDecks.edhrecCardRank.combos.edhrecTop.cardCheck.journal.link`.split(`.`).forEach(function(e){t[e]!==void 0&&t[e]!==``&&t[e]!==null&&(n[e]=t[e])}),n.cardCheck){let e=n.cardCheck;n.cardCheck={usd:e.usd,cards:e.cards,missing:e.missing,notLegal:e.notLegal,sig:e.sig,at:e.at}}return n.combos&&={inList:n.combos.inList,almost:n.combos.almost,included:(n.combos.included||[]).map(function(e){return{cards:e.cards,makes:e.makes}})},n.journal&&=(n.journal||[]).slice(0,30).map(function(e){return{t:e.t,text:e.text}}),e.edhrec&&e.edhrec[t.id]&&(n.edhrec=e.edhrec[t.id]),n}),n={};Object.keys(e.decklists||{}).forEach(function(t){let r=e.decklists[t];if(!r||!r.text)return;let i=r.comp?Object.assign({},r.comp):void 0,a={};i&&(Object.keys(i.by||{}).forEach(function(e){(i.by[e]||[]).forEach(function(t){let n=_(t);a[n]=(a[n]||``)+(ne[e]||``)})}),delete i.fp,delete i.by);let o=Object.keys(a).length?String(r.text).split(`
`).map(function(e){let t=e.match(/^(\d+)\s*[xX]?\s+(.+)$/);if(!t)return e;let n=a[_(t[2].replace(/\s*\([A-Za-z0-9]{2,6}\)\s*[\w-]*\s*$/,``).trim())];return n?e+` [`+n+`]`:e}).join(`
`):r.text,s=Et(r);n[t]={text:o,updatedAt:r.updatedAt,comp:i,versions:s.length>1?s.map(function(e,t){let n=s[t+1],r=n?wt(n.text,e.text):null;return{fp:e.fp,at:e.at,current:e.current,cards:me(e.text).total,changed:r&&r.changed?r.summary:void 0}}):void 0}});let r=(e.games||[]).map(function(e){let t=Object.assign({},e);return delete t.changeLog,delete t.loadoutId,delete t.unk,t.opponents&&=t.opponents.map(function(e){let t=Object.assign({},e);return delete t.id,delete t.trackNotes,t}),t}),i=Object.keys(e.loads||{}).map(function(t){let n=e.loads[t];return{name:n.name,savedAt:n.savedAt,decks:n.deckIds||n.decks,notes:n.notes}}),a={readme:Un,generatedAt:new Date(e.now||Date.now()).toISOString(),player:e.settings&&e.settings.playerName||`You`,decks:t,decklists:n,games:r,playgroup:e.playgroup||{},loadouts:i};return e.cards&&Object.keys(e.cards).length&&(a.cards=e.cards),e.wishlist&&e.wishlist.url&&(a.wishlist={url:e.wishlist.url},e.wishlist.text&&(a.wishlist.text=e.wishlist.text,a.wishlist.cards=me(e.wishlist.text).total)),a}function qn({decks:e,saveDecks:t,pop:n}){let r=(0,Z.useState)(``),i=r[0],a=r[1],o=(0,Z.useState)(!1),c=o[0],l=o[1],u=null,d=``;if(i.trim())try{let e=JSON.parse(i);u=Array.isArray(e)?{decks:e}:e,(!u||!Array.isArray(u.decks))&&(d=`expected {"decks":[...]}`)}catch{d=`not valid JSON`}let f=u&&!d?Rn(e,u,{overwrite:c}):null,p=function(e){let t=e.target.files&&e.target.files[0];if(!t)return;let n=new FileReader;n.onload=function(){a(String(n.result||``))},n.readAsText(t);try{e.target.value=``}catch{}},g=(0,Z.useState)(Pt()),_=g[0],v=g[1];return(0,Q.jsxs)(`div`,{"data-notes-import":`1`,children:[(0,Q.jsx)(X,{children:`Fill in notes on decks you already have from a file: 1v1 or multiplayer and why, 2HG fit and plan, game plan, bracket note, strategy, stage and note. Decks are matched by id, or by exact name. Only empty fields are filled unless you tick overwrite. Nothing is added or removed.`}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`,marginBottom:6},children:[(0,Q.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontFamily:I,fontSize:11,color:K.tx2,border:`1px solid `+K.br,borderRadius:H(6),padding:`5px 10px`},children:[`Choose a file`,(0,Q.jsx)(`input`,{type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:p,style:{display:`none`}})]}),(0,Q.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:5,cursor:`pointer`,fontFamily:I,fontSize:11,color:c?K.tx:K.dim},children:[(0,Q.jsx)(h,{checked:c,onChange:function(e){l(e.target.checked)}}),` Overwrite fields that are already filled`]})]}),(0,Q.jsx)(`textarea`,{value:i,onChange:function(e){a(e.target.value)},"aria-label":`or paste: {"decks":[{"id":"...","name":"...","fmtPod":"duel","podWhy":"..."}]}`,placeholder:`or paste: {"decks":[{"id":"...","name":"...","fmtPod":"duel","podWhy":"..."}]}`,rows:3,style:{background:K.bg,border:`1px solid `+K.br,borderRadius:H(6),color:K.tx,fontFamily:I,fontSize:11,padding:`8px 10px`,width:`100%`,boxSizing:`border-box`,marginBottom:6}}),d&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.bad,marginBottom:6},children:`Cannot read it: `+d+`.`}),f&&(0,Q.jsxs)(`div`,{"data-notes-preview":`1`,style:{fontFamily:I,fontSize:11,color:K.body,marginBottom:8,lineHeight:1.6},children:[f.changed.length?f.changed.length+` deck`+(f.changed.length===1?``:`s`)+` will change: `+f.changed.slice(0,8).map(function(e){return e.name+` (`+e.fields.map(function(e){return z[e]||e}).join(`, `)+`)`}).join(`; `)+(f.changed.length>8?`; and `+(f.changed.length-8)+` more`:``)+`.`:`Nothing to change: every matching field is already filled.`,f.skipped.length?(0,Q.jsx)(`div`,{style:{color:K.dim},children:f.skipped.length+` not matched: `+f.skipped.slice(0,5).map(function(e){return(e.name||e.id)+` -- `+e.why}).join(`; `)+(f.skipped.length>5?`; ...`:``)}):null]}),(0,Q.jsx)(U,{small:!0,gold:!0,onClick:function(){if(!f||!f.changed.length)return;let e={};f.decks.forEach(function(t){e[t.id]=t});let r=f.changed.map(function(t){let n={};return t.fields.forEach(function(r){n[r]=e[t.id][r]}),{id:t.id,fields:t.fields,v:n}}),i=t(f.decks),o=0;try{o=Ln(G(s),r)}catch{}let c={at:Date.now(),n:r.length,kept:o,podMarked:r.filter(function(e){return e.v.fmtPod&&e.v.fmtPod!==`either`}).length};try{localStorage.setItem(ht,JSON.stringify(c))}catch{}v(c),i===!1||o<r.length?n&&n(`Saved `+o+` of `+r.length+` decks -- the rest did not stick. Nothing else was changed.`):n&&n(`Saved: `+o+` deck`+(o===1?``:`s`)+` now carry the notes.`),a(``)},disabled:!f||!f.changed.length,children:f&&f.changed.length?`Apply to `+f.changed.length+` deck`+(f.changed.length===1?``:`s`):`Apply`}),_&&(0,Q.jsx)(`div`,{"data-notes-last":`1`,style:{fontFamily:I,fontSize:11,color:_.kept<_.n?K.bad:K.dim,marginTop:8},children:`Last import on this device: `+_.kept+` of `+_.n+` decks saved, `+m(_.at)+`.`})]})}function Jn({decks:e,games:t,loads:n,inv:r,pop:i}){let a=`cll2:ui:exportOpts`,o=(0,Z.useState)(function(){let e={decks:!0,stats:!0,links:!1,tonight:!0,loadouts:!1,games:!1,lists:!1,inventory:!1,wishlist:!1};try{return Object.assign(e,G(a)||{})}catch{return e}}),s=o[0],c=function(e){o[1](function(t){let n=e(t);try{W(a,n)}catch{}return n})},l=[{k:`decks`,l:`Decks`},{k:`stats`,l:`Deck records`},{k:`links`,l:`Deck links`},{k:`tonight`,l:`Tonight's loadout`},{k:`loadouts`,l:`All loadouts`},{k:`games`,l:`Recent games`},{k:`lists`,l:`Decklists`},{k:`inventory`,l:`Inventory`},{k:`wishlist`,l:`Wishlist link`}],u=function(){let i=G(`cll2:settings`)||{},a=String(i.shareName||i.playerName||``).trim(),o=(t||[]).filter(C),c={};o.forEach(function(e){if(!e.deckId)return;let t=c[e.deckId]=c[e.deckId]||{g:0,w:0};t.g++,e.placement===`1st`&&t.w++});let l=function(e){let t=(e.colorId||[]).join(``);return t?` [`+t+`]`:``},u=function(e){return e.commander?` -- `+e.commander+(e.commander2?` & `+e.commander2:``):``},d=(e||[]).filter(function(e){return Y(e)&&!e.retired}),f=[(a?a+`'s `:`My `)+`Commander decks`,new Date().toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})+` -- `+d.length+` built`,``];if(s.tonight||s.loadouts){let t=Object.entries(n||{}).map(function(e){return e[1]}).filter(Boolean).sort(function(e,t){return(t.savedAt||0)-(e.savedAt||0)});(s.loadouts?t:t.slice(0,1)).forEach(function(t,n){let r=[];Object.values(t.deckSel||{}).forEach(function(e){(e||[]).forEach(function(e){r.indexOf(e)<0&&r.push(e)})});let i=r.map(function(t){return(e||[]).find(function(e){return e.id===t})}).filter(Boolean);f.push((n===0&&s.tonight?`TONIGHT I'M BRINGING`:`LOADOUT`)+`: `+(t.name||`Loadout`)+` (`+i.length+`)`),i.slice().sort(Ct).forEach(function(e){f.push(`- `+e.name+` (B`+(e.bracket||`?`)+`)`+u(e))}),t.notes&&f.push(`  `+t.notes),f.push(``)})}if(s.decks){[1,2,3,4,5].forEach(function(e){let t=d.filter(function(t){return t.bracket===e}).slice().sort(Ct);t.length&&(f.push(`BRACKET `+e+` -- `+String(Ge[e]||``).replace(/^B\d\s*/,``).toUpperCase()+` (`+t.length+`)`),t.forEach(function(e){f.push(`- `+e.name+u(e)+l(e));let t=c[e.id],n=[],r=Ot(e);r&&n.push(r),s.stats&&t&&n.push(t.g+` game`+(t.g===1?``:`s`)+`, `+t.w+` win`+(t.w===1?``:`s`)+` (`+Math.round(t.w/t.g*100)+`%)`),n.length&&f.push(`  `+n.join(` -- `)),s.links&&e.link&&f.push(`  `+e.link)}),f.push(``))});let t=(e||[]).filter(function(e){return!Y(e)&&!e.retired}).length;t&&(f.push(`Plus `+t+` deck`+(t===1?``:`s`)+` planned or being built.`),f.push(``))}if(s.lists){let t=te(G(`cll2:decklists`)||{}),n=e.filter(function(e){return t[e.id]&&t[e.id].text}).slice().sort(Ct);f.push(`DECKLISTS (`+n.length+`)`),f.push(`Roles after a card, when categorized: l land, r ramp, d draw, t targeted removal, m mass removal, h threat, o other.`),n.forEach(function(e){let n=t[e.id],r={};Object.keys(n.comp&&n.comp.by||{}).forEach(function(e){(n.comp.by[e]||[]).forEach(function(t){let n=_(t);r[n]=(r[n]||``)+(ne[e]||``)})}),f.push(``),f.push(`== `+e.name+` -- `+(e.commander||`?`)+(e.commander2?` & `+e.commander2:``)+` -- B`+(e.bracket||`?`)+(e.strategy?` -- `+e.strategy:``)+` ==`),String(n.text).split(`
`).forEach(function(e){let t=e.match(/^(\d+)\s*[xX]?\s+(.+)$/);if(!t){e.trim()&&f.push(e);return}let n=r[_(t[2].replace(/\s*\([A-Za-z0-9]{2,6}\)\s*[\w-]*\s*$/,``).trim())];f.push(n?e+` [`+n+`]`:e)})}),f.push(``)}if(s.games&&o.length){let t=o.filter(function(e){return e.placement===`1st`}).length;f.push(`RECENT GAMES -- `+t+` wins in `+o.length+` (`+Math.round(t/o.length*100)+`%)`),o.slice().sort(function(e,t){return String(t.date||``).localeCompare(String(e.date||``))}).slice(0,5).forEach(function(t){let n=(e||[]).find(function(e){return e.id===t.deckId});f.push(`- `+(t.date||``)+`: `+(t.placement===`1st`?`won`:t.placement||`played`)+` with `+(n?n.name:`a deck`)+(t.venue?` at `+t.venue:``))}),f.push(``)}if(s.inventory&&(f.push(`INVENTORY`),se(r).forEach(function(e){f.push(`- `+e.name+`: `+(e.qty||0))}),f.push(``)),s.wishlist){let e=G(re);e&&e.url&&(f.push(`WISHLIST: `+e.url),f.push(``))}return f.push(`Shared from Commander Loadout & Ledger`),f.join(`
`)},d=(0,Z.useState)(!0),f=d[0],p=d[1],m=(0,Z.useState)(``),g=m[0],v=m[1],y=(0,Z.useState)(``),x=y[0],S=y[1],ee=(0,Z.useState)(``),w=ee[0],E=ee[1],D=function(){let r=te(G(`cll2:decklists`)||{}),i={decks:e,games:t,decklists:r,playgroup:G(`cll2:playgroup`)||{},loads:n,settings:G(`cll2:settings`)||{},wishlist:G(`cll2:wishlist`)||null};if(!f)return Promise.resolve({text:JSON.stringify(Kn(i)),note:``});let a=Promise.resolve(null);i.wishlist&&St(i.wishlist.url)&&T()&&(a=b(`moxfield/`+encodeURIComponent(St(i.wishlist.url))).then(function(e){return e&&e.text||null},function(){return null}));let o={};(t||[]).forEach(function(e){e.deckId&&(o[e.deckId]=1),(e.opponents||[]).forEach(function(e){e&&e.deckId&&(o[e.deckId]=1)})});let s=Object.keys(o).filter(function(e){return r[e]&&r[e].text}),c=[];return s.forEach(function(e){me(r[e].text).cards.forEach(function(e){c.push(e.name)})}),v(`Scryfall: `+c.length+` cards in `+s.length+` played decks...`),a.then(function(e){return e&&(i.wishlist=Object.assign({},i.wishlist,{text:e})),st(c,v).catch(function(){return{index:{},notFound:[],offline:!0}})}).then(function(t){let n={};c.forEach(function(e){let r=t.index[_(e)];r&&!n[r.name]&&(n[r.name]=Wn(r))});let i={},a=[];if(t.offline)return a.push(`card text skipped: no connection to Scryfall`),{cards:n,edh:i,notes:a};if(t.notFound&&t.notFound.length&&a.push(t.notFound.length+` card names Scryfall could not match`),!T())return a.push(`EDHREC rates skipped: no Worker set up`),{cards:n,edh:i,notes:a};let o=s.filter(function(t){let n=(e||[]).find(function(e){return e.id===t});return n&&String(n.commander||``).trim()}),l=Promise.resolve(),u=0;return o.forEach(function(t,n){l=l.then(function(){let a=(e||[]).find(function(e){return e.id===t});return v(`EDHREC `+(n+1)+`/`+o.length+`: `+a.name),b(`edhrec/`+encodeURIComponent(de(a.cmdrName||a.commander,a.commander2))).then(function(e){i[t]=Gn(me(r[t].text).cards,e),u++},function(){})})}),l.then(function(){return u<o.length&&a.push(o.length-u+` decks had no EDHREC page`),{cards:n,edh:i,notes:a}})}).then(function(e){return{text:JSON.stringify(Kn(Object.assign({},i,{cards:e.cards,edhrec:e.edh}))),note:e.notes.join(`; `)}})},O=function(){g||(S(``),E(``),v(`Building...`),D().then(function(e){S(e.text),E(e.note),v(``)},function(e){v(``),E(`Build failed: `+(e&&e.message||`unknown`))}))},k=x?Math.round(x.length/1024):null,A=(0,Z.useState)(function(){try{return localStorage.getItem(`cll2:ui:exportTab`)||`person`}catch{return`person`}}),j=Kt(),M=j&&A[0]===`claude`?`person`:A[0],N=function(e){A[1](e);try{localStorage.setItem(`cll2:ui:exportTab`,e)}catch{}},P=(0,Z.useState)(!1),F=P[0];return(0,Q.jsxs)(`div`,{"data-export-tabs":M,children:[(0,Q.jsx)(Vt,{dk:`export`,cur:M,set:N,tabs:[[`person`,`For a person`],[`graphic`,`As a graphic`]].concat(j?[]:[[`claude`,`For a Claude chat`]])}),M===`claude`&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(X,{children:`One JSON file with everything an analysis needs: decks, lists with roles and versions, every game with seats, opponents and eliminations, playgroup, loadouts. Life-change logs, art and the Worker token are left out, so it stays small enough to attach or paste. It starts with a readme that explains the fields.`}),(0,Q.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontFamily:I,fontSize:11,color:f?K.tx:K.dim,marginBottom:8},children:[(0,Q.jsx)(h,{checked:f,onChange:function(e){p(e.target.checked),S(``)}}),`Add oracle text and EDHREC rates for every deck that has been played (Scryfall and the Worker; about a minute)`]}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,marginBottom:6},children:[(0,Q.jsx)(U,{small:!0,gold:!0,onClick:O,disabled:!!g,children:g?`Building...`:x?`Rebuild analysis pack`:`Build analysis pack`}),x&&(0,Q.jsx)(U,{small:!0,onClick:function(){Ke(`cll-analysis-`+Ft()+`.json`,x,`application/json`,function(e){i&&i(k+`KB: `+e)})},children:`Download`}),x&&(0,Q.jsx)(Bt,{small:!0,label:`Copy`,getText:function(){return x},onCopied:function(e){i&&i(e?`Copied. Paste it into a chat and ask your question.`:`Clipboard blocked -- showing the text.`)}})]}),g&&(0,Q.jsx)(`div`,{"data-pack-busy":`1`,style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:10},children:g}),x&&(0,Q.jsx)(`div`,{"data-pack-ready":`1`,style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:10},children:k+` KB`+(w?` -- `+w:``)+`. Attach the file to a chat and ask, for example: "Which of my decks should I bring to a bracket 3 night with my usual pod, and what would you cut from the one you pick?"`}),!x&&w&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.bad,marginBottom:10},children:w})]}),M===`graphic`&&(0,Q.jsx)(Ht,{decks:e,games:t,pop:i}),M===`person`&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:8,lineHeight:1.5},children:`Pick what goes in, then copy it into a message.`}),(0,Q.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,marginBottom:10},children:l.map(function(e){return(0,Q.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:5,cursor:`pointer`,fontFamily:I,fontSize:11,color:s[e.k]?K.tx:K.dim},children:[(0,Q.jsx)(h,{checked:s[e.k]||!1,onChange:function(){c(function(t){return{...t,[e.k]:!t[e.k]}})}}),e.l]},e.k)})}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,marginBottom:8},children:[(0,Q.jsx)(Bt,{small:!0,label:`Copy summary`,getText:function(){return u()},onCopied:function(e){i&&i(e?`Copied!`:`Clipboard blocked -- showing the text.`)}}),(0,Q.jsx)(U,{small:!0,onClick:function(){P[1](!F)},children:F?`Hide preview`:`Preview`})]}),F&&(0,Q.jsx)(`pre`,{"data-export-preview":`1`,style:{whiteSpace:`pre-wrap`,wordBreak:`break-word`,fontFamily:I,fontSize:11,lineHeight:1.5,color:K.body,background:K.bg,border:`1px solid `+K.br,borderRadius:H(8),padding:`8px 10px`,maxHeight:240,overflowY:`auto`,margin:`0 0 8px`},children:u()})]})]})}function Yn({pop:e,url:t}){let n=T(),r=(0,Z.useState)(null),a=r[0],o=(0,Z.useState)(``),s=o[0],c=(0,Z.useState)(Date.now());(0,Z.useEffect)(function(){if(!a)return;let e=setInterval(function(){c[1](Date.now())},1e3);return function(){clearInterval(e)}},[a&&a.code]);let l=(0,Z.useState)(``),u=l[0],f=(0,Z.useState)(!1),p=f[0],m=(0,Z.useState)(``),h=m[0],g=function(){let t=a&&a.code;r[1](null),t&&b(`pair/`+t,{method:`DELETE`}).then(function(){e(`Code cancelled.`)},function(){e(`Code cleared here; it runs out on its own within 10 minutes.`)})},_=function(){o[1](`Asking your Worker...`),b(`pair`,{method:`POST`}).then(function(e){o[1](``),r[1](e)},function(t){o[1](``),e(`Could not make a code: `+(t&&t.message||`unknown`))})},v=function(n){F(`Link this device to your synced data? Your synced decks, games and settings replace what is on this device.`)&&(o[1](`Linking...`),m[1](``),i(t||d().url,n).then(function(){o[1](``),e(`Linked. Loading your synced data...`),setTimeout(function(){window.location.reload()},800)},function(t){o[1](``);let n=t&&t.message||`unknown`;m[1](`Could not link: `+n),e(`Could not link: `+n)}))},y=a?Math.max(0,Math.round((a.expiresAt-Date.now())/1e3)):0;return(0,Q.jsxs)(`div`,{"data-link-device":`1`,style:{marginTop:12,paddingTop:10,borderTop:`1px solid `+K.divd},children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,letterSpacing:2,color:K.gold,marginBottom:6},children:`LINK A DEVICE`}),n&&Be()&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(X,{children:`Put your iPhone and iPad on the same data: make a code here, then enter it on the other device (Settings, Data, Worker and sync). It works once, for 10 minutes, and only for your Worker -- nobody else's data and nobody else can join.`}),!a||y<=0?(0,Q.jsx)(U,{small:!0,gold:!0,onClick:_,disabled:!!s,children:s||`Make a link code`}):(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{"data-link-code":a.code,style:{fontFamily:I,fontSize:26,letterSpacing:4,color:K.goldBr,margin:`4px 0`},children:bn(a.code)}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:6},children:`Good for `+Math.floor(y/60)+`:`+String(y%60).padStart(2,`0`)+`. On the other device, open the app and enter it, or open this link there.`}),(0,Q.jsx)(`div`,{"data-link-worker":`1`,style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:6,wordBreak:`break-all`},children:`Made on `+L(d().url).replace(/^https:\/\//,``)+` -- the other device's Worker (Settings > Data > Worker) must match.`}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,Q.jsx)(Bt,{small:!0,label:`Copy link`,getText:function(){return xn(a.code,d().url)},onCopied:function(t){e(t?`Link copied -- send it only to your own device (AirDrop works).`:`Clipboard blocked.`)}}),(0,Q.jsx)(U,{small:!0,onClick:g,children:`Cancel code`})]})]}),(0,Q.jsx)(`div`,{"data-link-note":`1`,style:{fontFamily:I,fontSize:11,color:K.dim,margin:`8px 0 6px`,lineHeight:1.5},children:`Already syncing on both devices with the same Worker and token? Then they are already linked -- you do not need a code. A code is only for a device that is not syncing yet.`}),p?null:(0,Q.jsx)(U,{small:!0,onClick:function(){f[1](!0)},children:`Enter a code from another device`})]}),n&&!Be()&&(0,Q.jsx)(X,{children:`Turn sync on above, then you can link your other device from here.`}),(!Be()||p)&&(0,Q.jsxs)(`div`,{style:{marginTop:n?8:0},children:[Be()?(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:6},children:`Linking with a code replaces this device's synced data with the other device's.`}):(0,Q.jsx)(X,{children:`Already syncing on your other device? Make a code there (Settings, Data, Worker and sync, Link a device) and enter it here.`}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,Q.jsx)(`input`,{"data-link-input":`1`,value:bn(u),onChange:function(e){l[1](Ue(e.target.value))},"aria-label":`ABCD-EFGH`,placeholder:`ABCD-EFGH`,autoCapitalize:`characters`,autoCorrect:`off`,spellCheck:!1,style:Object.assign({},he.input,{maxWidth:160,letterSpacing:2,marginBottom:0})}),(0,Q.jsx)(U,{small:!0,gold:!0,onClick:function(){v(u)},disabled:!!s||Ue(u).length!==8,children:s||`Link`}),p?(0,Q.jsx)(U,{small:!0,onClick:function(){f[1](!1),l[1](``),m[1](``)},children:`Close`}):null]}),h?(0,Q.jsx)(`div`,{"data-link-error":`1`,style:{fontFamily:I,fontSize:11,color:K.bad,marginTop:6},children:h}):null]})]})}function Xn({pop:e}){let t=d(),n=(0,Z.useState)(t.url),i=n[0],a=n[1],o=(0,Z.useState)(t.token),s=o[0],c=o[1],l=(0,Z.useState)(null),u=l[0],f=l[1];return(0,Z.useEffect)(function(){let e=function(){let e=d();a(e.url),c(e.token),f(e.token?{bad:!1,text:`Restored from the backup. Tap Test to check it.`}:null)};return window.addEventListener(`cll2:worker`,e),function(){window.removeEventListener(`cll2:worker`,e)}},[]),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(X,{children:`Optional. A small Cloudflare Worker (worker/ in the repo) gives this site three things a browser cannot do alone: import a public Moxfield deck, find combos in-app, and run Review / Categorize with AI. The URL and token are saved on this device and travel in your backup file, so a restore brings them back.`}),(0,Q.jsxs)(Fe,{children:[`Worker URL`,i===`https://cll-worker.grantkphillips4313.workers.dev`?` (pre-set for this site)`:``]}),(0,Q.jsx)(`input`,{value:i,onChange:function(e){a(e.target.value)},"aria-label":`https://cll-worker.....workers.dev`,placeholder:`https://cll-worker.....workers.dev`,inputMode:`url`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,style:he.input}),(0,Q.jsx)(Fe,{children:`Token (CLL_TOKEN on the Worker)`}),(0,Q.jsx)(`input`,{value:s,onChange:function(e){c(e.target.value)},type:`password`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"aria-label":`the secret you set in Cloudflare`,placeholder:`the secret you set in Cloudflare`,style:he.input}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginTop:8},children:[(0,Q.jsx)(U,{small:!0,gold:!0,onClick:function(){let e=String(i||``).trim().replace(/\/+$/,``),t=String(s||``).trim();e&&!/^https:\/\//.test(e)?f({bad:!0,text:`The URL must start with https://`}):(W(r,{url:e,token:t}),a(e),c(t),f({bad:!1,text:e&&t?`Saved. Tap Test to check it.`:`Saved -- the site works as before with no Worker.`}))},children:`Save`}),(0,Q.jsx)(U,{small:!0,onClick:function(){let e=String(i||``).trim().replace(/\/+$/,``),t=String(s||``).trim();!e||!t?f({bad:!0,text:`Enter both the URL and the token first.`}):(W(r,{url:e,token:t}),f({bad:!1,text:`Testing...`}),b(`health`).then(function(e){if(!e||!e.ok){f({bad:!0,text:`That URL answered, but not like the Worker.`});return}if(!e.token){f({bad:!0,text:`Connected, but the token does not match CLL_TOKEN on the Worker.`});return}W(He,{ai:!!e.ai,at:Date.now()}),_e(!0);let t=`Connected`+(e.v?` (Worker `+e.v+`)`:` (Worker before 2026-09-29)`)+`. Moxfield import and in-app combos are on. AI: `;!e.ai||Kt()?f({bad:!1,text:t+(e.ai?`on at the Worker, but hidden here (Settings > App > AI features).`:`off (add the AI key on the Worker, see worker/README, to categorize with Claude).`)}):(f({bad:!1,text:t+`checking the key...`}),b(`ai/check`).then(function(e){f(_n(t,e&&e.key,e&&e.status))},function(){f({bad:!1,text:t+`on -- Categorize leads with Claude.`})}))},function(e){f({bad:!0,text:`Could not reach it: `+(e&&e.message||`unknown`)})}))},children:`Test`}),(t.url||t.token)&&(0,Q.jsx)(U,{small:!0,danger:!0,onClick:function(){W(`cll2:worker`,{url:``,token:``}),a(``),c(``),f({bad:!1,text:`Worker removed. The site works as before.`})},children:`Remove`})]}),u&&(0,Q.jsx)(`div`,{"data-worker-status":u.bad?`bad`:`ok`,style:{fontFamily:I,fontSize:11,color:u.bad?K.bad:K.good,marginTop:8,lineHeight:1.5},children:u.text}),T()&&(0,Q.jsx)(tr,{pop:e}),(0,Q.jsx)(Yn,{pop:e,url:String(i||``).trim()})]})}function Zn(e,t,n){let r=Object.assign({},n||{});(e||[]).forEach(function(e){e&&e.id&&(r[e.id]=1)});let i=[],a={};return(t||[]).forEach(function(e){(e.games||[]).forEach(function(e){e&&e.id&&!r[e.id]&&!a[e.id]&&(a[e.id]=1,i.push(e))})}),i.sort(function(e,t){return String(t.date||``).localeCompare(String(e.date||``))||(t.loggedAt||0)-(e.loggedAt||0)})}function Qn(e){let t={};return Object.keys(e&&e.e||{}).forEach(function(n){e.e[n]&&e.e[n].gone&&(t[n]=1)}),t}function $n(e){let t={};return(e||[]).forEach(function(e){(e&&e.data&&e.data.games||[]).forEach(function(e){e&&e.id&&(t[e.id]=1)})}),t}var er=[[`cll2:games`,`Commander`],[`cll2:games60`,`60-card`],[`cll2:gamesLimited`,`Limited`]];function tr({pop:t}){let n=(0,Z.useState)(M()),r=n[0],i=n[1],a=(0,Z.useState)(Ze),l=a[0],u=a[1];(0,Z.useEffect)(function(){r.on&&_t().then(function(e){e&&u(e)},function(){})},[r.on]);let d=function(e){b(`sync/night`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({cfg:{on:e}})}).then(function(n){o(n),u(n),t(e?`Nightly refresh on. It runs at about 4am Central from GitHub.`:`Nightly refresh off.`)},function(e){t(`Could not change it: `+(e&&e.message||`unknown`))})},p=(0,Z.useState)(``),m=p[0],h=p[1],g=(0,Z.useState)(null),_=g[0],v=g[1],y=(0,Z.useState)(``),S=y[0],C=y[1];(0,Z.useEffect)(function(){let e=function(e){i(e)};return Ne.push(e),function(){ee(Ne.filter(function(t){return t!==e}))}},[]);let w=function(e){if(!e)return`never`;let t=Math.round((Date.now()-e)/6e4);return t<1?`just now`:t<60?t+` min ago`:Math.round(t/60)+` h ago`},te=Object.keys(r.pending||{}).length,T=function(){h(`Turning sync on...`),yn().then(function(e){h(``),e.length?(t(`Sync on. Loaded `+e.length+` store`+(e.length===1?``:`s`)+` from the cloud -- reloading.`),setTimeout(function(){window.location.reload()},900)):t(`Sync on. This device's data is now the cloud copy.`)},function(e){h(``),t(`Sync failed: `+(e&&e.message||`unknown`))})},D=function(){h(`Syncing...`),f().then(function(e){h(``),e.length?(t(`Loaded `+e.length+` store`+(e.length===1?``:`s`)+` from the cloud -- reloading.`),setTimeout(function(){window.location.reload()},900)):t(`Up to date.`)})},ne=function(){h(`Listing snapshots...`),b(`sync/snapshots`).then(function(e){h(``),v(e&&e.days||[])},function(e){h(``),t(`Could not list snapshots: `+(e&&e.message||`unknown`))})},k=function(e){h(`Restoring `+e+`...`),b(`sync/snapshot/`+e).then(function(n){let r=ie(n&&n.stores||{}),i=Object.keys(r);if(!i.length){h(``),t(`That snapshot holds nothing to restore.`);return}let a=Date.now();return i.forEach(function(e){N(e,{at:a,data:r[e].data});let t=M();t.pending[e]=!0,x(t)}),Promise.all(i.map(function(e){return O(e)})).then(function(){h(``),t(`Restored `+i.length+` store`+(i.length===1?``:`s`)+` as of `+e+` -- reloading.`),setTimeout(function(){window.location.reload()},900)})},function(e){h(``),t(`Restore failed: `+(e&&e.message||`unknown`))})},A=[`favRank`,`rankScore`,`buildRank`],j=function(e){h(`Restoring ranks from `+e+`...`),b(`sync/snapshot/`+e).then(function(n){let r=n&&n.stores&&n.stores[`cll2:decks`]||null,i=r&&Array.isArray(r.data)?r.data:null;if(!i){h(``),t(`That snapshot holds no decks.`);return}let a={};i.forEach(function(e){e&&e.id&&(a[e.id]=e)});let o=0,c=(G(`cll2:decks`)||[]).map(function(e){let t=a[e.id];if(!t)return e;let n=Object.assign({},e),r=!1;return A.forEach(function(i){t[i]!==void 0&&t[i]!==null&&t[i]!==0?n[i]=t[i]:delete n[i],n[i]!==e[i]&&(r=!0)}),r&&o++,n}),l=n.stores[ae],u=At([],G(`cll2:rankerRuns`)||[],[],l&&Array.isArray(l.data)?l.data:[]);if(!o&&!u.nRuns){h(``),t(`Ranks already match `+e+`.`);return}let d=Date.now(),f=[s].concat(u.nRuns?[ae]:[]);N(s,{at:d,data:c}),u.nRuns&&N(ae,{at:d,data:u.runs});let p=M();return f.forEach(function(e){p.pending[e]=!0}),x(p),Promise.all(f.map(function(e){return O(e)})).then(function(){h(``),t(`Ranks restored on `+o+` deck`+(o===1?``:`s`)+(u.nRuns?` and `+u.nRuns+` favorites run`+(u.nRuns===1?``:`s`)+` added`:``)+` as of `+e+` -- reloading.`),setTimeout(function(){window.location.reload()},900)})},function(e){h(``),t(`Restore failed: `+(e&&e.message||`unknown`))})},P=(0,Z.useState)(null),re=function(){P[1]({busy:!0});let t={};er.forEach(function(e){t[e[0]]=[]});let n=function(e,n){let r=ie(e||{});er.forEach(function(e){let i=r[e[0]];i&&Array.isArray(i.data)&&t[e[0]].push({label:n,games:i.data})})},r={},i=Object.assign({},Qn(G(e)),$n(c())),a=Promise.all(er.map(function(e){return b(`sync/store/`+encodeURIComponent(E(e[0]))).then(function(t){r[E(e[0])]=t},function(){})})).then(function(){n(r,`the cloud copy`)});a=a.then(function(){return b(`sync/snapshots`).then(function(e){let t=Promise.resolve();return(e&&e.days||[]).slice().reverse().forEach(function(e){t=t.then(function(){return b(`sync/snapshot/`+e).then(function(t){n(t&&t.stores,`snapshot `+e)},function(){})})}),t},function(){})}),a=a.then(function(){let n=$e(G(e));return er.forEach(function(e){n[e[0]]&&t[e[0]].unshift({label:`this device's game record`,games:n[e[0]]})}),b(`sync/store/`+encodeURIComponent(E(e))).then(function(e){Object.assign(i,Qn(e&&e.data));let n=$e(e&&e.data);er.forEach(function(e){n[e[0]]&&t[e[0]].push({label:`the cloud's game record`,games:n[e[0]]})})},function(){})}),a.then(function(){let e=[];er.forEach(function(n){Zn(G(n[0])||[],t[n[0]],i).forEach(function(t){e.push({key:n[0],kind:n[1],g:t,on:!0})})}),P[1]({list:e})},function(e){P[1]({err:e&&e.message||`failed`})})},F=function(){let e=(P[0]&&P[0].list||[]).filter(function(e){return e.on});e.length?(er.forEach(function(t){let n=e.filter(function(e){return e.key===t[0]}).map(function(e){return e.g});n.length&&W(t[0],(G(t[0])||[]).concat(n))}),t(`Added back `+e.length+` game`+(e.length===1?``:`s`)+` -- reloading.`),setTimeout(function(){window.location.reload()},900)):t(`Tick the games to add back first.`)},L=function(e){let t=(G(`cll2:decks`)||[]).find(function(t){return t&&t.id===e});return t?t.name:``};return(0,Q.jsxs)(`div`,{style:{marginTop:14,paddingTop:10,borderTop:`1px solid `+K.divd},children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,letterSpacing:2,color:K.gold,marginBottom:6},children:`SYNC`}),(0,Q.jsx)(X,{children:`Keeps every device with this token on the same data through the Worker. The newer save wins per store; a change made elsewhere loads when you come back to the app. The Worker keeps a snapshot per day for 30 days.`}),!r.on&&(0,Q.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,alignItems:`center`},children:(0,Q.jsx)(U,{small:!0,gold:!0,onClick:T,disabled:!!m,children:m||`Turn sync on for this device`})}),r.on&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:r.err?K.bad:K.body,lineHeight:1.6,marginBottom:6},children:r.err?`Last attempt failed: `+r.err:`On. Pulled `+w(r.pulledAt)+`, pushed `+w(r.pushedAt)+(te?`, `+te+` store`+(te===1?``:`s`)+` waiting to push`:`, nothing waiting`)+`.`}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,Q.jsx)(U,{small:!0,gold:!0,onClick:D,disabled:!!m,children:m&&m.indexOf(`Sync`)===0?m:`Sync now`}),(0,Q.jsx)(U,{small:!0,onClick:ne,disabled:!!m,children:`Cloud snapshots`}),(0,Q.jsx)(U,{small:!0,onClick:re,disabled:!!m||!!(P[0]&&P[0].busy),children:P[0]&&P[0].busy?`Looking...`:`Find missing games`}),(0,Q.jsx)(U,{small:!0,onClick:function(){Sn(),t(`Sync off for this device. Its data stays; the cloud copy stays.`)},children:`Turn off`}),S===`wipe`?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(U,{small:!0,danger:!0,onClick:function(){h(`Erasing the cloud copy...`),b(`sync/meta`,{method:`DELETE`}).then(function(){Sn(),h(``),C(``),t(`Cloud copy erased. Sync is off; this device keeps its data.`)},function(e){h(``),t(`Could not erase: `+(e&&e.message||`unknown`))})},disabled:!!m,children:`Yes, erase the cloud copy`}),(0,Q.jsx)(U,{small:!0,onClick:function(){C(``)},children:`Cancel`})]}):(0,Q.jsx)(U,{small:!0,danger:!0,onClick:function(){C(`wipe`)},children:`Erase cloud copy`})]}),(0,Q.jsxs)(`div`,{style:{marginTop:12,paddingTop:10,borderTop:`1px solid `+K.divd},children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,letterSpacing:2,color:K.gold,marginBottom:6},children:`NIGHTLY REFRESH`}),(0,Q.jsx)(X,{children:`Every night, GitHub runs the card check and a price point for every listed deck against the cloud copy, and once a week combos, the EDHREC comparison and the commander rank. Sync brings the results to every device. It needs the CLL_TOKEN secret on the repository (README).`}),l&&(0,Q.jsxs)(`div`,{style:{fontFamily:I,fontSize:11,color:K.body,lineHeight:1.6,marginBottom:6},children:[l.cfg&&l.cfg.on?`On.`:`Off.`,` `,l.last?`Last ran `+be(l.last.at)+`: `+l.last.checked+` decks checked, `+l.last.priced+` priced`+(l.last.aiCategorized?`, `+l.last.aiCategorized+` categorized by Claude`:``)+((l.last.gcNew||[]).length?`, Game Changer list moved`:``)+(l.last.combos?`, `+l.last.combos+` combos`:``)+(l.last.edhrec?`, `+l.last.edhrec+` EDHREC`:``)+(l.last.failed&&l.last.failed.length?`, `+l.last.failed.length+` failed`:``)+`.`:`Has not run yet.`,l.last&&(l.last.newlyIllegal||[]).length>0&&(0,Q.jsxs)(`div`,{style:{color:K.bad,fontWeight:700},children:[`Newly not legal: `,l.last.newlyIllegal.map(function(e,t){return(0,Q.jsxs)(Z.Fragment,{children:[(t?`; `:``)+e.name+` (`,(0,Q.jsx)(ge,{names:e.cards}),`)`]},t)})]})]}),(0,Q.jsx)(U,{small:!0,gold:!(l&&l.cfg&&l.cfg.on),onClick:function(){d(!(l&&l.cfg&&l.cfg.on))},children:l&&l.cfg&&l.cfg.on?`Turn nightly refresh off`:`Turn nightly refresh on`})]}),P[0]&&!P[0].busy&&(0,Q.jsxs)(`div`,{"data-missing-games":P[0].list?P[0].list.length:`err`,style:{marginTop:8,border:`1px solid `+K.br,borderRadius:H(8),padding:`8px 10px`},children:[P[0].err&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.bad},children:`Couldn't look: `+P[0].err}),P[0].list&&!P[0].list.length&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.body,lineHeight:1.5},children:`No missing games: every game in the cloud copy and the snapshots is on this device.`}),P[0].list&&P[0].list.length>0&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.body,marginBottom:6,lineHeight:1.5},children:P[0].list.length+` game`+(P[0].list.length===1?``:`s`)+` in the cloud that `+(P[0].list.length===1?`isn't`:`aren't`)+` on this device:`}),P[0].list.map(function(e,t){let n=e.g;return(0,Q.jsxs)(`label`,{"data-missing-game":n.id,style:{display:`flex`,gap:8,alignItems:`center`,fontFamily:I,fontSize:11,color:K.tx2,padding:`3px 0`,borderTop:`1px solid `+K.divd,cursor:`pointer`},children:[(0,Q.jsx)(`input`,{type:`checkbox`,"aria-label":`Add back `+(n.date||``),checked:!!e.on,onChange:function(n){let r=P[0].list.slice();r[t]=Object.assign({},e,{on:n.target.checked}),P[1]({list:r})}}),(0,Q.jsx)(`span`,{children:[n.date,L(n.deckId)||n.myCommander||``,n.placement||``,e.kind===`Commander`?``:e.kind].filter(Boolean).join(` - `)})]},e.key+n.id)}),(0,Q.jsx)(`div`,{style:{marginTop:6},children:(0,Q.jsx)(U,{small:!0,gold:!0,onClick:F,children:(function(){let e=P[0].list.filter(function(e){return e.on}).length;return e===P[0].list.length?`Add `+(e===1?`it`:`them`)+` back`:`Add `+e+` back`})()})}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,marginTop:4},children:`Only adds: nothing on this device is removed or changed.`})]})]}),_&&(0,Q.jsxs)(`div`,{style:{marginTop:8},children:[!_.length&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint},children:`No snapshots yet -- the first one is written on the first save of a new day.`}),_.slice().reverse().map(function(e){return(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,padding:`3px 0`},children:[(0,Q.jsx)(`span`,{style:{fontFamily:I,fontSize:11,color:K.tx,flex:1},children:e}),S!==`snap:`+e&&S!==`ranks:`+e&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(U,{small:!0,onClick:function(){C(`ranks:`+e)},children:`Ranks only`}),(0,Q.jsx)(U,{small:!0,onClick:function(){C(`snap:`+e)},children:`Restore`})]}),S===`ranks:`+e&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(U,{small:!0,gold:!0,onClick:function(){j(e)},disabled:!!m,children:[`Favorites and build order from `,e]}),(0,Q.jsx)(U,{small:!0,onClick:function(){C(``)},children:`Cancel`})]}),S===`snap:`+e&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(U,{small:!0,danger:!0,onClick:function(){k(e)},disabled:!!m,children:[`Replace everything with `,e]}),(0,Q.jsx)(U,{small:!0,onClick:function(){C(``)},children:`Cancel`})]})]},e)})]})]})]})}function nr({decks:e,games:n,loads:i,accs:o,inv:d,saveDecks:f,saveGames:p,saveLoads:m,saveAccs:_,saveInv:v,pop:x,popUndo:S,part:C}){Mt(pt);let ee=(0,Z.useState)(``),E=ee[0],D=ee[1],ne=(0,Z.useState)(null),O=ne[0],k=ne[1],M=(0,Z.useRef)(!1),N=(0,Z.useState)(null),F=N[0],L=function(e){N[1](function(t){return t&&e(t)})},ie=(0,Z.useRef)(null),R=(0,Z.useRef)(e);R.current=e;let se=(0,Z.useState)(null),z=se[0],ce=se[1],le=(0,Z.useState)(ln),B=le[0],V=le[1],de=function(e,t){let n=Object.assign({},B);n[e]=t,V(n),W(on,n)},_e=function(e){V(e),W(on,e)},be=(0,Z.useState)(Qt),Se=be[0],Ce=be[1],we=function(e){Ce(e),W(rn,e)},Te=(0,Z.useState)(``),Ee=Te[0],De=Te[1],Oe=function(t,n,r){let i=$t(e,r).filter(function(e){return!!St(e.link)}),a={decks:0,imported:[],replaced:[],kept:[],same:0,small:[],removed:[],failed:[],stopped:!1,none:!i.length},o=0;return new Promise(function(e){let t=function(){if(M.current||a.blocked||o>=i.length){a.stopped=M.current&&o<i.length,e(a);return}let r=i[o++];L(function(e){return tn(e,o-1,r.name)}),D(`Moxfield `+o+` of `+i.length+`: `+r.name),qt(r,n,a).then(function(e){if(!e)return;let t=(R.current||[]).map(function(t){return t.id===r.id?Object.assign({},t,{journal:Jt(t,e)}):t});R.current=t,f(t)}).then(function(){return pe(en)}).then(t)};t()})},ke=function(e,t,r){let i=(R.current||[]).slice(),a=$t(i,r).map(function(e){return e.id}),o=un();ie.current=o;let s=0;return new Promise(function(e){let r=function(){if(M.current||s>=a.length){o.stopped=M.current&&s<a.length,e(o);return}let c=a[s++],l=i.filter(function(e){return e.id===c})[0];if(!l){r();return}let u=s+` of `+a.length+`: `+l.name,d=s-1;L(function(e){return tn(e,d,l.name)}),sn(l,t,{games:n,stats:o,tell:function(e){D(u+` -- `+e),L(function(t){return an(t,e)})},step:function(e,t,n){L(function(r){return nn(r,e,t,n)})}}).then(function(e){Object.keys(e).length&&(i=i.map(function(t){return t.id===l.id?Object.assign({},t,e):t}),R.current=i,f(i)),Ae({done:s}),r()})};r()})},Me=function(e){let t=G(`cll2:wishlist`)||{},n=St(t.url||``);return n?(L(function(e){let t=e.parts[e.cur];return t&&t.key===`mox`?tn(e,t.total-1,`Wishlist`):e}),e(`Wishlist from Moxfield...`),b(`moxfield/`+encodeURIComponent(n)).then(function(e){return!e||!e.text?0:(W(re,Object.assign({},G(`cll2:wishlist`)||t,{text:e.text,textAt:Date.now()}),{allowShrink:!0}),me(e.text).cards.length)})):Promise.resolve(null)},Ne=function(t,n){let r=T(),i=Gt(),a={moxfield:r,combos:r,edhrec:r,notes:i},o=[`moxfield`,`commander`,`cards`,`categorize`,`alts`,`combos`,`edhrec`,`collection`,`notes`].filter(function(e){return t[e]&&a[e]!==!1}).length,s=$t(e,n),c=te(G(`cll2:decklists`)||{}),l=0;return s.forEach(function(e){let n=c[e.id];n&&n.text&&(t.notes&&i&&(t.notesAll||dn(e))&&l++,t.categorize&&t.ai&&i&&(t.recategorize||!n.comp)&&l++)}),{checks:o,decks:s.length,claude:l,redo:!!(t.categorize&&t.recategorize||t.combos&&t.recombos||t.edhrec&&t.reedhrec)}},Fe=function(t){if(E)return;let n=t?Yt(le[0],!0):le[0],r=t?{mode:`all`,ids:[]}:be[0];if(!$t(e,r).length){x(`No decks in this group. Pick another under Decks.`);return}let i=n.commander||n.cards||n.categorize||n.alts||n.combos||n.edhrec||n.notes&&Gt()||n.collection,o=n.moxfield&&T();if(!i&&!o){x(`Tick at least one check.`);return}M.current=!1,k(null),ce(null),Le.on=!0,Ae({start:Date.now(),state:`running`,total:i?$t(e,r).length:0,done:0},!0);let s=function(e){D(e),L(function(t){return an(t,e)})},c=function(e){L(function(t){return Zt(t,e)})};ie.current=null,N[1](Xt([{key:`mox`,label:`Moxfield`,total:o?$t(e,r).filter(function(e){return!!St(e.link)}).length+ +!!St((G(`cll2:wishlist`)||{}).url||``):0},{key:`decks`,label:`Decks`,total:i?$t(e,r).length:0},{key:`wish`,label:`Wishlist prices`,total:n.cards&&i?1:0},{key:`collection`,label:`Collection`,total:n.collection&&i&&G(`cll2:collection`)?1:0}])),o&&c(`mox`),s(`Starting...`),(o?Oe(s,n,r).then(function(e){return e&&e.blocked?e:Me(s).then(function(t){return e&&t!=null&&(e.wish=t),e},function(t){return e&&(e.wishErr=t&&t.message||`failed`),e})}):Promise.resolve(null)).then(function(e){if(e&&ce(e),e&&e.blocked&&Ae({moxBlocked:!0}),M.current||!i)return null;let t=n.cards&&T()?b(`edhrec-list/game-changers`).then(function(e){let t=vt?Object.keys(fe).sort().join(`|`):``,n={names:e&&e.names||[],at:Date.now()},r=ue(n);return r?(W(a,n),{count:r.count,added:r.added,removed:r.removed,changed:!!t&&t!==Object.keys(fe).sort().join(`|`)}):null},function(){return null}):Promise.resolve(null);return c(`decks`),t.then(function(e){return ke(s,n,r).then(function(t){return t&&e&&(t.gcList=e),t})})}).then(function(e){return!e||M.current||!n.cards?e:(c(`wish`),s(`Wishlist prices...`),Lt(function(e){s(`Wishlist -- `+e)}).then(function(t){return t&&(e.wishPriced=t.priced,e.wishDrops=t.alerts.length),e},function(t){return e.failed.push(`Wishlist prices (`+(t&&t.message||`failed`)+`)`),e}))}).then(function(e){if(!e||M.current||!n.collection)return e;let t=G(ye);return t?(c(`collection`),s(`Collection details...`),xt(t,function(e){s(`Collection -- `+e)}).then(function(t){return t.want&&W(ye,t.col,{allowShrink:!0}),e.colDetails=t.found,s(`Land colors...`),pn(t.col,function(e){s(`Lands -- `+e)}).then(function(t){return e.landColors=t,e})}).catch(function(t){return t&&t.col&&W(ye,t.col,{allowShrink:!0}),e.failed.push(`Collection (`+(t&&t.message||`failed`)+`)`),e})):e}).then(function(e){if(e&&k(e),e&&!e.stopped&&(r.mode===`all`||r.mode===`active`))try{localStorage.setItem(Je,String(Date.now()))}catch{}Le.on=!1,Ae({end:Date.now(),state:M.current?`stopped`:`done`,problems:e?(e.failed||[]).length:0}),D(``),N[1](null),x(M.current?`Stopped. Everything done so far is saved.`:e?`Checked `+e.decks+` decks.`:`Moxfield pull done.`)},function(e){Le.on=!1,Ae({end:Date.now(),state:`failed`,err:e&&e.message||`it failed`}),D(``),N[1](null),x(`Run failed: `+(e&&e.message||`unknown`))})},Re=(0,Z.useState)(!1),ze=Re[0],Be=Re[1],He=function(){let t=function(e){return e=e==null?``:String(e),`"`+e.replace(/"/g,`""`).replace(/\r?\n/g,` `)+`"`},r=[`Date`,`Deck`,`Commander`,`Placement`,`Pod`,`TurnOrder`,`Bracket`,`Turns`,`Venue`,`WinType`,`LossType`,`Mulligans`,`KeptCards`,`WentFirst`,`FastMana`,`Knockouts`,`KnockedOutBy`,`Opponents`,`Notes`],i=(n||[]).map(function(n){let r=(e||[]).find(function(e){return e.id===n.deckId}),i=n.opponents||[],a=i.filter(function(e){return e.koByYou}).map(function(e){return e.name}).join(`; `),o=i.filter(function(e){return e.koYou}).map(function(e){return e.name}).join(`; `),s=i.map(function(e){return e.name+(e.commander?` [`+e.commander+`]`:``)}).join(`; `);return[n.date,r&&r.name,r&&r.commander,n.placement,n.playerCount,n.turnOrder,n.bracketPlayed,n.turns,n.venue,n.winType,n.lossType,n.mulliganCount,n.mulliganTo,n.youWentFirst===!0?`yes`:n.youWentFirst===!1?`no`:``,n.youHadFastMana?`yes`:``,a,o,s,n.notes].map(t).join(`,`)});return r.map(t).join(`,`)+`
`+i.join(`
`)},Ue=(0,Z.useState)(``),Ge=Ue[1],Ke=Ue[0],qe=(0,Z.useState)(!1),Ze=qe[1],Qe=qe[0],$e=(0,Z.useState)(!1),et=$e[0],tt=$e[1],rt=(0,Z.useState)(null);rt[1],rt[0];let ot=function(t,i){let a;try{a=JSON.parse(t)}catch{x(`Restore rejected: not valid JSON.`);return}let o=Ie(a);JSON.stringify(o)!==JSON.stringify(a)&&(a=o,x(`Restore: fixed mangled accents/apostrophes in the backup before applying.`));let c=hn(a);if(c){x(`Restore rejected: `+c);return}let u=[];if(a.games&&a.decks){let e={};a.decks.forEach(function(t){e[t.id]=1});let t=a.games.filter(function(t){return t.deckId&&!e[t.deckId]}).length;t&&u.push(t+` game`+(t===1?``:`s`)+` reference unknown decks`);let n={};a.games.forEach(function(e){n[e.id]=1});let r=a.games.filter(function(e){return e.sourceGameId&&!n[e.sourceGameId]}).length;r&&u.push(r+` mirror record`+(r===1?``:`s`)+` missing their primary game`)}if(!i){let t=`Import this file? It replaces what's on this phone`+(a.decks?`: `+e.length+` decks become `+a.decks.length:``)+(a.games?`, `+n.length+` games become `+a.games.length:``)+`.`;if(!window.confirm(t))return}let d={};try{for(let e=0;e<localStorage.length;e++){let t=localStorage.key(e);t&&t.indexOf(`cll2:`)===0&&(d[t]=localStorage.getItem(t))}}catch{}try{let e=G(s);Array.isArray(e)&&(d[s]=JSON.stringify(e))}catch{}try{if(a.decks&&f(zn(a.decks,i?[]:e),{allowShrink:!0}),a.games&&p(a.games,{allowShrink:!0}),a.loads&&m(a.loads,{allowShrink:!0}),a.accs&&_(a.accs,{allowShrink:!0}),a.inv&&v(a.inv),a.playgroup!==void 0&&W(Ve,a.playgroup),a.settings!==void 0){W(ve,a.settings);try{window.dispatchEvent(new CustomEvent(`cll2:settingsRestored`,{detail:a.settings}))}catch{}}if(a.ranker!==void 0&&W(P,a.ranker),a.rankerRuns!==void 0&&W(ae,a.rankerRuns),a.rankerRuns===void 0&&a.decks){let e=G(ae);(!e||!e.length)&&W(ae,J(`SEED_RANK_RUNS`))}if(a.pipeline!==void 0&&W(l,a.pipeline),a.gauntlets!==void 0&&W(oe,a.gauntlets),a.tourneys!==void 0&&W(ut,a.tourneys),a.builds!==void 0&&W(ct,a.builds),a.lastBackup&&W(Xe,a.lastBackup),a.randomCfg&&W(A,a.randomCfg),a.sessionNames&&W(nt,a.sessionNames),a.worker&&typeof a.worker==`object`){W(r,{url:String(a.worker.url||``),token:String(a.worker.token||``)});try{window.dispatchEvent(new CustomEvent(`cll2:worker`))}catch{}}a.decklists&&typeof a.decklists==`object`&&W(ft,a.decklists,{allowShrink:!0}),a.wishlist!==void 0&&W(re,a.wishlist,{allowShrink:!0}),a.collection!==void 0&&W(ye,a.collection,{allowShrink:!0}),a.customPlanes!==void 0&&W(We,a.customPlanes,{allowShrink:!0}),a.seasons!==void 0&&W(w,a.seasons,{allowShrink:!0}),a.todo!==void 0&&W(`cll2:todo`,a.todo,{allowShrink:!0}),a.lifeSounds!==void 0&&Vn(a.lifeSounds||{}),a.matchupNotes!==void 0&&W(`cll2:matchupNotes`,a.matchupNotes,{allowShrink:!0}),a.games60!==void 0&&W(`cll2:games60`,a.games60,{allowShrink:!0}),a.gamesLimited!==void 0&&W(`cll2:gamesLimited`,a.gamesLimited,{allowShrink:!0}),a.houseRules!==void 0&&W(`cll2:houseRules`,a.houseRules,{allowShrink:!0}),a.houseRulesHidden!==void 0&&W(`cll2:houseRulesHidden`,a.houseRulesHidden,{allowShrink:!0}),a.venueHouseRules!==void 0&&W(`cll2:venueHouseRules`,a.venueHouseRules,{allowShrink:!0}),Ze(!1),Ge(``);let t=`Restored`+(a.decks?` `+a.decks.length+` decks`:``)+(a.games?`, `+a.games.length+` games`:``)+`.`;if(u.length&&(t+=` Note: `+u.join(`; `)+`.`),i)x(t);else try{window.dispatchEvent(new CustomEvent(`cll2:undo`,{detail:{msg:t,restore:function(){try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);n&&n.indexOf(`cll2:`)===0&&d[n]===void 0&&e.push(n)}e.forEach(function(e){localStorage.removeItem(e)}),Object.keys(d).forEach(function(e){localStorage.setItem(e,d[e])})}catch{}location.reload()}}}))}catch{x(t)}return!0}catch(e){x(`Restore failed while applying: `+String(e&&e.message||e))}},st=(0,Z.useState)(!1),mt=st[0],ht=st[1],gt=function(){xe(x)},_t=(0,Z.useState)(null),Y=_t[0],bt=_t[1],Ct=(0,Z.useState)(!1),wt=Ct[0],Tt=Ct[1],Et=function(e){let t=e.target.files&&e.target.files[0];if(!t)return;let n=new FileReader;n.onload=function(){let e=String(n.result||``),r;try{r=Ie(JSON.parse(e))}catch{x(`That file is not a backup (not valid JSON). Nothing was changed.`);return}let i=hn(r);!i&&!(r.decks&&r.decks.length)&&!(r.games&&r.games.length)&&(i=`it has no decks and no games.`),i?x(`That file cannot be loaded: `+i+` Nothing was changed.`):bt({text:JSON.stringify(r),name:t.name||`backup`,sum:gn(r)})},n.onerror=function(){x(`Could not read that file.`)},n.readAsText(t);try{e.target.value=``}catch{}},Dt=function(){if(!Y)return;u();let e=ot(Y.text,!0);bt(null),e&&setTimeout(function(){try{window.location.reload()}catch{}},600)},Ot=function(){u(),Tt(!1);try{window.location.reload()}catch{}},kt=function(){try{let r=0,a=0,s=0,c=0,l={};e.forEach(function(e){l[e.id]=1});let u=e.slice();J(`SEED_DECKS`).forEach(function(e){l[e.id]||(u.push(Object.assign({},e,{colorId:It(e.colorId)})),r++)});let d={};J(`SEED_DECKS`).forEach(function(e){d[e.id]=e});let h=0,v=function(e){return e==null||e===``||Array.isArray(e)&&e.length===0};u=u.map(function(e){let t=d[e.id];if(!t)return e;let n=e,r=!1,i=e._seeded||{};return[`commander`,`colorId`,`themes`,`strategy`,`note`,`bracketWhy`,`plan`,`edhrec`,`buildRank`,`cmdrText`].forEach(function(a){let o=a===`colorId`?It(t[a]):t[a];if(v(t[a]))return;let s=v(e[a]),c=i[a]===void 0?(t._seededPrev||{})[a]:i[a],l=!s&&c!==void 0&&c===Bn(e[a]);if(s||l){if(JSON.stringify(e[a])===JSON.stringify(o)&&!s)return;r||(n=Object.assign({},e)),n[a]=o,n._seeded=Object.assign({},n._seeded||{}),n._seeded[a]=Bn(o),r=!0}}),!v(t.name)&&t.name!==e.name&&(e.name===t.commander||e.name===e.commander)&&(r||(n=Object.assign({},e)),n.name=t.name,r=!0),r&&h++,n});let y={},b={},S=0;J(`SEED_DECKS`).forEach(function(e){e.art&&(y[e.id]=e.art,b[e.name]=e.art)}),u=u.map(function(e){if(e.art)return e;let t=y[e.id]||b[e.name];return t?(S++,Object.assign({},e,{art:t})):e});let C={};n.forEach(function(e){C[e.id]=1});let ee=n.slice();J(`SEED_GAMES`).forEach(function(e){C[e.id]||(ee.push(e),a++)});let w=Object.assign({},i);Object.keys(J(`SEED_LOADS`)).forEach(function(e){w[e]||(w[e]=J(`SEED_LOADS`)[e],s++)});let T=G(`cll2:builds`)||[],E={};T.forEach(function(e){E[e.id]=1});let D=T.slice();J(`SEED_BUILDS`).forEach(function(e){E[e.id]||(D.push(e),c++)});let ne=te(G(`cll2:decklists`)||{}),O=Object.assign({},ne),k=0,A=0,j=te(J(`SEED_DECKLISTS`)||{});Object.keys(j).forEach(function(e){O[e]?!O[e].comp&&j[e]&&j[e].comp&&j[e].comp.fp===g(O[e].text)&&(O[e]=Object.assign({},O[e],{comp:j[e].comp}),A++):(O[e]=j[e],k++)});let M=o||[],N={};M.forEach(function(e){N[e.id]=1});let P=M.slice(),F=0;(J(`SEED_ACCS`)||[]).forEach(function(e){N[e.id]||(P.push(e),F++)});let I=G(`cll2:rankerRuns`)||[],L={};I.forEach(function(e){L[e.id]=1});let ie=I.slice(),R=0;(J(`SEED_RANK_RUNS`)||[]).forEach(function(e){L[e.id]||(ie.push(e),R++)});let oe=G(`cll2:tourneys`)||[],se={};oe.forEach(function(e){se[e.id]=1});let z=oe.slice(),ce=0;(J(`SEED_TOURNEYS`)||[]).forEach(function(e){se[e.id]||(z.push(e),ce++)});let le=G(re),ue=0;!le&&J(`SEED_WISHLIST`)&&(ue=1),(r||S||h)&&f(u),a&&p(ee.sort(t)),s&&m(w),c&&W(ct,D),(k||A)&&W(ft,O),F&&_&&_(P),R&&W(ae,ie),ce&&W(ut,z),ue&&W(re,J(`SEED_WISHLIST`));let B=r+a+s+c+S+k+F+R+ce+ue+A+h,V=[];r&&V.push(r+` decks`),h&&V.push(h+` ideas filled in`),k&&V.push(k+` decklists`),A&&V.push(A+` deck compositions`),a&&V.push(a+` games`),s&&V.push(s+` loadouts`),c&&V.push(c+` build ideas`),F&&V.push(F+` accessories`),R&&V.push(R+` ranker runs`),ce&&V.push(ce+` tournaments`),ue&&V.push(`wishlist`),S&&V.push(S+` deck images`),x(B?`Restored: `+V.join(`, `)+`.`:`Nothing to merge - your data already has everything in the seed.`)}catch{x(`Merge failed.`)}},At=function(e){let t=e.target.files&&e.target.files[0];if(!t)return;let n=new FileReader;n.onload=function(){ot(String(n.result||``))},n.onerror=function(){x(`Could not read that file.`)},n.readAsText(t);try{e.target.value=``}catch{}};if(et)throw Error(`Test crash from Settings -> Data -> Danger Zone`);let Nt=(0,Z.useState)(`checks`),Pt=Nt[0],Ft=Nt[1],Rt=at(),zt=Rt===null?`never backed up`:Rt===0?`backed up today`:`last backup `+q(Rt,`day`)+` ago`,Ht={fontFamily:I,fontSize:11,letterSpacing:2,color:K.dim,margin:`4px 0 8px`};return(0,Q.jsxs)(`div`,{children:[ze&&(0,Q.jsx)(Hn,{pop:x,onClose:function(){Be(!1)},getText:function(){try{return JSON.stringify(dt(!0),null,0)}catch(e){return Ye?String(e&&e.message||``):`Still loading -- wait a moment and try again.`}}}),!C&&(0,Q.jsxs)(y,{ck:`data2:backup`,title:`Backup and restore`,summary:zt,children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:8,flexWrap:`wrap`,alignItems:`center`},children:[(0,Q.jsx)(U,{primary:!0,onClick:je()?function(){Be(!0)}:gt,children:`Back up`}),(0,Q.jsx)(U,{small:!0,onClick:function(){ht(!mt)},children:mt?`Fewer options`:`More export options`})]}),mt&&(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:10,flexWrap:`wrap`},children:[je()?(0,Q.jsx)(U,{small:!0,onClick:gt,children:`Download Backup`}):(0,Q.jsx)(U,{small:!0,onClick:function(){Be(!0)},children:`Save / Share Backup`}),(0,Q.jsx)(Bt,{small:!0,label:`Export Games (CSV)`,getText:He,onCopied:function(e){x(e?`Games CSV copied to clipboard!`:`Clipboard blocked -- showing the text.`)}})]}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,letterSpacing:1,color:K.faint,margin:`10px 0 6px`},children:`RESTORE`}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:10,flexWrap:`wrap`},children:[(0,Q.jsx)(U,{onClick:function(){Ze(!Qe)},children:Qe?`Hide`:`Import`}),(0,Q.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,background:`transparent`,border:`1px solid `+K.br,borderRadius:H(6),color:K.muted,fontFamily:I,fontSize:11,padding:`7px 16px`,cursor:`pointer`},children:[`Start over from a file`,(0,Q.jsx)(`input`,{type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:Et,style:{display:`none`}})]}),lt()&&(0,Q.jsx)(U,{onClick:kt,children:`Add back built-in decks`})]}),Y&&(0,Q.jsxs)(`div`,{style:{margin:`4px 0 12px`,padding:`10px 12px`,border:`1px solid `+K.bad,borderRadius:H(8),background:K.panel2},children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.tx,lineHeight:1.6},children:Y.name+`: `+Y.sum.decks+` decks, `+Y.sum.games+` games, `+Y.sum.decklists+` decklists, art on `+Y.sum.art+` decks`+(Y.sum.saved?`, saved `+Y.sum.saved:``)+`.`}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.bad,margin:`4px 0 8px`,lineHeight:1.5},children:`Everything on this device is erased and replaced with this file, then the app restarts. Save a backup first if you want to keep what is here now.`}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,Q.jsx)(U,{small:!0,danger:!0,onClick:Dt,children:`Erase and load this file`}),(0,Q.jsx)(U,{small:!0,onClick:function(){bt(null)},children:`Cancel`})]})]}),(0,Q.jsxs)(X,{style:{fontFamily:I,fontSize:11,color:K.faint,marginBottom:10,lineHeight:1.5},children:[`Your data lives in this browser (and in the cloud copy, with sync on). Back up after a session and keep the file in Files or iCloud.`,(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`b`,{style:{color:K.body},children:`Import`}),` replaces your data with a backup -- paste it or pick a file.`,(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`b`,{style:{color:K.body},children:`Start over from a file`}),` erases everything on this device first, then loads the file and restarts -- use it to begin again from a backup.`,lt()&&(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`br`,{}),(0,Q.jsx)(`b`,{style:{color:K.body},children:`Add back built-in decks`}),` is different: it only adds decks, games, loadouts and build ideas from the version built into this app that you do not already have. It never overwrites or deletes anything.`]})]}),Qe&&(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:6},children:`Paste exported JSON here, then tap Restore:`}),(0,Q.jsx)(`textarea`,{"aria-label":`Backup JSON to restore`,value:Ke,onChange:function(e){Ge(e.target.value)},placeholder:`{"decks":[...]}`,style:{background:K.bg,border:`1px solid `+K.br,borderRadius:H(6),color:K.tx,padding:`7px 10px`,fontFamily:j,outline:`none`,height:80,resize:`vertical`,width:`100%`,marginBottom:8,fontSize:11}}),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,alignItems:`center`},children:[(0,Q.jsx)(U,{gold:!0,onClick:function(){ot(Ke)},children:`Restore`}),(0,Q.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,background:K.raised,border:`1px solid `+K.br,borderRadius:H(6),color:K.tx2,fontFamily:I,fontSize:11,padding:`0 14px`,height:34,cursor:`pointer`},children:[`Choose a file instead`,(0,Q.jsx)(`input`,{type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:At,style:{display:`none`}})]})]})]})]}),!C&&(0,Q.jsx)(An,{}),!C&&(0,Q.jsx)(kn,{pop:x}),!C&&(0,Q.jsx)(y,{ck:`data2:trash`,title:`Trash`,summary:(function(){let e=c().length;return e?q(e,`item`)+`, kept 30 days`:`empty`})(),children:(0,Q.jsx)(Fn,{pop:x})}),!C&&(0,Q.jsx)(y,{ck:`data2:share`,title:`Share and export`,summary:Kt()?`text, stats picture`:`text, stats picture, Claude pack`,children:(0,Q.jsx)(Jn,{decks:e,games:n,loads:i,inv:d,pop:x})}),!C&&(0,Q.jsx)(y,{ck:`data2:worker`,title:`Worker and sync`,summary:T()?`connected`:`not set up`,children:(0,Q.jsx)(Xn,{pop:x})}),C===`upkeep`&&(0,Q.jsxs)(y,{ck:`data2:upkeep`,title:`Deck upkeep`,summary:`run checks, import notes`,children:[(0,Q.jsx)(Vt,{dk:`data-upkeep`,cur:Pt,set:Ft,tabs:[[`checks`,`Run checks`],[`notes`,`Import deck notes`]]}),Pt===`notes`&&(0,Q.jsx)(qn,{decks:e,saveDecks:f,pop:x}),Pt===`checks`&&(0,Q.jsxs)(`div`,{"data-run-checks":`1`,children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.muted,lineHeight:1.6,marginBottom:6},children:(e||[]).filter(function(e){return e.art||e.artUrl}).length+` of `+(e||[]).length+` decks have art; `+(e||[]).filter(function(e){return!!St(e.link)}).length+` link to Moxfield.`}),(0,Q.jsx)(X,{children:`Every bulk lookup in one pass, one deck at a time; each deck is saved as it finishes, so Stop keeps what is done. Pick the decks, then tick the checks. Moxfield goes first so the card checks read the fresh lists. Work already done is protected: art only where missing, typed prices kept, saved breakdowns, combos and EDHREC comparisons kept unless you ask to redo them. Everything, every deck runs it all, redoing saved results, without changing what is ticked; it never replaces prices or lists you typed.`}),(function(){let t=function(e,t,n,r,i){return(0,Q.jsx)(`button`,{...i||{},onClick:r,style:{background:t?K.gold+`22`:`transparent`,border:`1px solid `+(t?K.gold:K.br),borderRadius:H(10),color:t?K.goldBr:K.muted,fontFamily:I,fontSize:11,padding:`3px 9px`,minHeight:28,cursor:`pointer`},children:n},e)},n=function(e){return(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,letterSpacing:2,color:K.muted,margin:`4px 0 5px`},children:e})},r=e||[],i=Se.ids||[],a=function(e){we({mode:`pick`,ids:e})},o=Ee.trim().toLowerCase(),s=r.filter(function(e){return!o||(e.name+` `+(e.commander||``)).toLowerCase().indexOf(o)>=0});return(0,Q.jsxs)(`div`,{"data-check-scope":Se.mode,style:{marginBottom:8},children:[n(`DECKS`),(0,Q.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginBottom:6},children:cn.map(function(e){let n=$t(r,{mode:e[0],ids:i}).length;return t(e[0],Se.mode===e[0],e[1]+` (`+n+`)`,function(){we({mode:e[0],ids:i})},{"data-scope":e[0]})})}),Se.mode===`pick`&&(0,Q.jsxs)(`div`,{"data-check-pick":`1`,style:{border:`1px solid `+K.br,borderRadius:H(8),padding:`6px 8px`,marginBottom:6},children:[(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`,marginBottom:6,flexWrap:`wrap`},children:[(0,Q.jsx)(`input`,{value:Ee,onChange:function(e){De(e.target.value)},placeholder:`Find a deck`,"aria-label":`Find a deck`,style:Object.assign({},he.input||{},{flex:`1 1 140px`,minWidth:0,fontSize:12})}),t(`pa`,!1,o?`All shown`:`All`,function(){let e=i.slice();s.forEach(function(t){e.indexOf(t.id)<0&&e.push(t.id)}),a(e)},{"data-pick-all":`1`}),t(`pn`,!1,o?`None shown`:`None`,function(){let e=s.map(function(e){return e.id});a(i.filter(function(t){return e.indexOf(t)<0}))},{"data-pick-none":`1`})]}),(0,Q.jsxs)(`div`,{style:{maxHeight:220,overflowY:`auto`},children:[s.map(function(e){let t=i.indexOf(e.id)>=0;return(0,Q.jsxs)(`label`,{"data-pick-deck":e.id,style:{display:`flex`,gap:8,alignItems:`center`,fontFamily:I,fontSize:11,color:t?K.tx:K.dim,padding:`3px 0`,cursor:`pointer`},children:[(0,Q.jsx)(`input`,{type:`checkbox`,"aria-label":e.name,checked:t,onChange:function(t){a(t.target.checked?i.concat([e.id]):i.filter(function(t){return t!==e.id}))}}),(0,Q.jsxs)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[e.name,e.retired?` (retired)`:``]})]},e.id)}),!s.length&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint},children:`No deck matches.`})]})]}),n(`CHECKS`),(0,Q.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginBottom:6},children:[t(`all`,!1,`All checks`,function(){_e(Yt(B,!1))},{"data-check-preset":`all`}),t(`redo`,!1,`All checks, redo saved results`,function(){_e(Yt(B,!0))},{"data-check-preset":`redo`}),t(`none`,!1,`None`,function(){_e(fn(B))},{"data-check-preset":`none`})]})]})})(),(function(){let t=function(e,t,n,r){return(0,Q.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`flex-start`,fontFamily:I,fontSize:11,color:r?K.faint:B[e]?K.tx:K.dim,marginBottom:5,cursor:r?`default`:`pointer`,paddingLeft:n?18:0},children:[(0,Q.jsx)(h,{checked:!!B[e]&&!r,disabled:!!r,onChange:function(t){de(e,t.target.checked)}}),(0,Q.jsx)(`span`,{children:t})]},e)},n=T();return(0,Q.jsxs)(`div`,{"data-check-steps":`1`,style:{marginBottom:8},children:[n&&t(`moxfield`,`Pull lists from Moxfield (decks with a Moxfield link, and the wishlist)`),B.moxfield&&n&&t(`moxReplace`,`Replace lists I edited by hand too`,!0),t(`commander`,`Commander: art where missing, EDHREC link and card rank, and the set where none is given`),t(`cards`,`Card check: legality, prices, price history, bracket signals`),B.cards&&t(`replacePrices`,`Replace prices I typed in (otherwise only empty or Scryfall prices update)`,!0),t(`categorize`,`Categorize lists that have no breakdown`),B.categorize&&t(`recategorize`,`Re-categorize lists already categorized`,!0),B.categorize&&n&&!Kt()&&t(`ai`,Gt()?`With Claude instead of the rules (a few cents a deck; falls back to the rules)`:`With Claude -- the Worker has no AI key`,!0,!Gt()),t(`alts`,`Other commanders: score the cards in each list that could lead it`+(n?` (with the EDHREC step, its best 3 get EDHREC's view too)`:``)),n&&t(`combos`,`Combos through the Worker (Spellbook)`),B.combos&&n&&t(`recombos`,`Redo saved combo searches too`,!0),n&&t(`edhrec`,`EDHREC comparison through the Worker (and starting points for decks with no list)`),B.edhrec&&n&&t(`reedhrec`,`Redo saved comparisons too`,!0),t(`collection`,`Collection: Scryfall details for new cards, and which colors your lands make (for Land fixes)`),n&&!Kt()&&t(`notes`,Gt()?`Write deck notes with Claude (a few cents a deck) -- plan, bracket reason, strategy, themes, 1v1 / 2HG fit`:`Write deck notes with Claude -- the Worker has no AI key`,!1,!Gt()),B.notes&&Gt()&&(0,Q.jsxs)(`div`,{"data-notes-scope":`1`,style:{display:`flex`,gap:6,flexWrap:`wrap`,margin:`-1px 0 7px 22px`},children:[(function(){let t=te(G(`cll2:decklists`)||{}),n=(e||[]).filter(function(e){return t[e.id]&&t[e.id].text});return[[!1,`Only decks with notes missing (`+n.filter(function(e){return dn(e)}).length+`)`],[!0,`All decks with a list (`+n.length+`) -- suggest changes to written notes`]]})().map(function(e){let t=!!B.notesAll===e[0];return(0,Q.jsx)(`button`,{onClick:function(){de(`notesAll`,e[0])},style:{background:t?K.gold+`22`:`transparent`,border:`1px solid `+(t?K.gold:K.br),borderRadius:H(10),color:t?K.goldBr:K.muted,fontFamily:I,fontSize:11,padding:`3px 9px`,cursor:`pointer`},children:e[1]},String(e[0]))}),(0,Q.jsx)(`div`,{style:{width:`100%`,fontFamily:I,fontSize:11,color:K.faint,lineHeight:1.5},children:`Needs a stored decklist. Blank notes are filled. Notes you wrote are never replaced; with All decks, different wording waits on the deck page for you to apply or dismiss.`})]})]})})(),!E&&(function(){let e=Ne(B,Se);return(0,Q.jsx)(`div`,{"data-check-plan":e.checks+`/`+e.decks,style:{fontFamily:I,fontSize:11,color:e.checks&&e.decks?K.body:K.warn,marginBottom:8,lineHeight:1.5},children:e.decks?e.checks?`Runs `+q(e.checks,`check`)+` on `+q(e.decks,`deck`)+(e.redo?`, redoing saved results`:``)+`.`+(e.claude?` Up to `+q(e.claude,`Claude call`)+`.`:``):`No checks ticked.`:`No decks in this group.`})})(),E&&(F?(0,Q.jsx)(mn,{prog:F,stats:ie.current}):(0,Q.jsx)(`div`,{"data-check-run":`1`,style:{fontFamily:I,fontSize:11,color:K.goldBr,marginBottom:8},children:E})),E?(0,Q.jsx)(U,{small:!0,onClick:function(){M.current=!0},children:`Stop`}):(0,Q.jsxs)(`span`,{style:{display:`inline-flex`,gap:8,flexWrap:`wrap`},children:[(0,Q.jsx)(`span`,{"data-upkeep-run":`1`,children:(0,Q.jsx)(U,{gold:!0,small:!0,disabled:!(e||[]).length,onClick:function(){Fe()},children:`Run checks`})}),(0,Q.jsx)(`span`,{"data-upkeep-all":`1`,children:(0,Q.jsx)(U,{small:!0,disabled:!(e||[]).length,onClick:function(){let e=Ne(Yt(B,!0),{mode:`all`,ids:[]});window.confirm(`Run `+q(e.checks,`check`)+` on all `+q(e.decks,`deck`)+`, redoing saved results?`+(e.claude?` Up to `+q(e.claude,`Claude call`)+` (a few cents each).`:``)+` Prices and lists you typed are kept.`)&&Fe(!0)},children:`Everything, every deck`})}),(0,Q.jsx)(yt,{style:{alignSelf:`center`}})]}),z&&!E&&(0,Q.jsxs)(`div`,{style:{marginTop:8,fontFamily:I,fontSize:11,color:K.body,lineHeight:1.6},children:[!(z.blocked&&!z.decks)&&(0,Q.jsx)(`div`,{style:{color:K.tx},children:(z.stopped?`Moxfield stopped after `:`Moxfield: `)+z.decks+` decks. Imported `+z.imported.length+`, updated `+z.replaced.length+`, unchanged `+z.same+`, kept `+z.kept.length+(z.none?` (no deck has a Moxfield link)`:``)+`.`}),z.wish!=null&&(0,Q.jsx)(`div`,{"data-mx-wish":z.wish,children:`Wishlist read from Moxfield: `+z.wish+` cards.`}),z.wishErr&&(0,Q.jsx)(`div`,{style:{color:K.bad},children:`Wishlist from Moxfield: `+z.wishErr}),z.imported.length>0&&(0,Q.jsx)(`div`,{children:`Imported: `+z.imported.join(`; `)}),z.replaced.length>0&&(0,Q.jsx)(`div`,{children:`Updated: `+z.replaced.join(`; `)}),z.kept.length>0&&(0,Q.jsx)(`div`,{style:{color:K.warn},children:`Kept (edited here since the last Moxfield import): `+z.kept.join(`, `)}),z.small.length>0&&(0,Q.jsx)(`div`,{style:{color:K.faint},children:`Skipped, fewer than 10 cards on Moxfield: `+z.small.join(`, `)}),z.removed.length>0&&(0,Q.jsx)(`div`,{style:{color:K.faint},children:`Removed commander-only stubs from the earlier pull: `+z.removed.join(`, `)}),z.blocked&&(0,Q.jsx)(`div`,{"data-mx-blocked":`1`,style:{color:K.bad},children:z.blocked}),z.failed.length>0&&(0,Q.jsx)(`div`,{style:{color:K.bad},children:`Failed: `+z.failed.join(`; `)})]}),O&&!E&&(0,Q.jsxs)(`div`,{style:{marginTop:8,fontFamily:I,fontSize:11,color:K.body,lineHeight:1.6},children:[(0,Q.jsx)(`div`,{style:{color:K.tx},children:(O.stopped?`Stopped after `:`Done: `)+O.decks+` decks. Art added `+O.art+`, EDHREC card ranks `+O.edhrec+`, priced `+O.priced+`, categorized `+O.categorized+(O.aiCategorized?` by rules and `+O.aiCategorized+` by Claude`:``)+(O.aiFell?` (`+O.aiFell+` fell back to the rules)`:``)+`, other commanders scored `+(O.alts||0)+(O.altsEdhrec?` (`+O.altsEdhrec+` EDHREC looks)`:``)+`, combos `+O.combos+`, EDHREC comparisons `+O.edhrecTop+(O.noEdhrec?` (`+q(O.noEdhrec,`commander`)+` EDHREC has no page for)`:``)+(O.starter?`, starting points for `+O.starter+` deck`+(O.starter===1?``:`s`)+` with no list`:``)+`.`+(O.colDetails==null?``:` Collection: details for `+O.colDetails+` new cards, colors learned for `+(O.landColors||0)+` lands.`)}),((O.notesFilled||[]).length>0||(O.notesSuggested||[]).length>0||O.notesSkipped>0)&&(0,Q.jsx)(`div`,{"data-notes-done":`1`,style:{color:K.tx},children:`Notes: written for `+q((O.notesFilled||[]).length,`deck`)+((O.notesSuggested||[]).length?`, suggestions waiting on `+q(O.notesSuggested.length,`deck`)+` (`+O.notesSuggested.slice(0,6).join(`, `)+(O.notesSuggested.length>6?`, ...`:``)+`)`:``)+(O.notesSkipped?`, `+O.notesSkipped+` already filled and skipped`:``)+`.`}),O.gcList&&(0,Q.jsx)(`div`,{"data-gc-done":O.gcList.count,style:{color:O.gcList.changed?K.goldBr:K.tx},children:`Game Changers list: `+O.gcList.count+` cards from EDHREC`+(O.gcList.changed?`, changed since the last run`:``)+(O.gcList.added.length||O.gcList.removed.length?` (`+[O.gcList.added.length?`added since the built-in list: `+O.gcList.added.join(`, `):``,O.gcList.removed.length?`taken off: `+O.gcList.removed.join(`, `):``].filter(Boolean).join(`; `)+`)`:``)+`.`}),O.sets>0&&(0,Q.jsx)(`div`,{"data-sets-done":`1`,style:{color:K.tx},children:`Sets: found for `+q(O.sets,`deck`)+` (Edit > Basics to change one).`}),O.wishPriced!=null&&(0,Q.jsx)(`div`,{"data-wish-done":`1`,style:{color:O.wishDrops?K.good:K.tx},children:`Wishlist: priced `+q(O.wishPriced,`card`)+(O.wishDrops?`, `+q(O.wishDrops,`price drop`)+` (Lists > Wishlist).`:`, no price drops.`)}),(O.newlyIllegal||[]).length>0&&(0,Q.jsxs)(`div`,{style:{color:K.bad,fontWeight:700},children:[`Newly not legal since the last check: `,O.newlyIllegal.map(function(e,t){return(0,Q.jsxs)(Z.Fragment,{children:[(t?`; `:``)+e.name+` (`,(0,Q.jsx)(ge,{names:e.cards}),`)`]},t)})]}),O.issues.length>0&&(0,Q.jsx)(`div`,{style:{color:K.warn},children:`Card issues: `+O.issues.map(function(e){return e.name+` (`+[e.missing?e.missing+` unmatched`:``,e.notLegal?e.notLegal+` not legal`:``,e.unreleased?e.unreleased+` unreleased`:``,e.offColor?e.offColor+` off-color`:``].filter(Boolean).join(`, `)+`)`}).join(`; `)}),(O.altNames||[]).length>0&&(0,Q.jsx)(`div`,{style:{color:K.faint},children:`Commander printed under another name: `+O.altNames.join(`; `)+`.`}),(O.respelled||[]).length>0&&(0,Q.jsx)(`div`,{style:{color:K.warn},children:`Commander spelling: `+O.respelled.join(`; `)+`. Matched anyway; fix the commander on the deck to be sure.`}),O.failed.length>0&&(0,Q.jsx)(`div`,{style:{color:K.faint},children:`Did not finish: `+O.failed.slice(0,12).join(`; `)+(O.failed.length>12?`; and `+(O.failed.length-12)+` more`:``)+`. Run it again to retry.`})]})]})]}),C===`app`&&(function(){let e=jt(`# Changelog

Newest first. Each release has a version number (major.minor.patch: a
release with new features raises the middle number, one with only
enhancements and fixes raises the last), its date and a title. The app
reads this file at build time and shows it under Settings > App >
What's new. Every release stays here.

## 1.131.1 -- 2026-10-27 -- Review fixes
Summary: A full review of the last dozen releases turned up edge cases in seat swaps, missing games, storage and the ranker; all are fixed.

### Bug fixes
- History: **Swap seats with you** no longer guesses a placement it can't
  know -- when you went out the same turn as someone, or the seat was
  still in when another player won, the placement is left blank to set.
  A partner commander moves with the deck, knockout flags from the old
  seat are cleared, and the button isn't offered on a game shared with
  another device's log.
  Check: History: Edit a game, Swap seats with you on a player who was still in at the end: the toast asks you to set your placement and the placement is blank
- History: in Edit, **Check names** fixes only a name that is still the
  one it looked up, so a Swap seats in between can't put the right
  spelling on the wrong seat.
  Check: History: Edit a game, Check names, then Use: only the misspelled name changes
- Settings > Data: **Find missing games** no longer offers games you
  deleted (from the game record or the Trash), and each game has a tick
  box: **Add N back** adds just the ticked ones.
  Check: Settings > Data: Worker and sync, Find missing games: each game has a tick box and the button counts the ticked ones
- Settings > Data: the game record is never cleared by **Free up
  space**, and a copy arriving from the cloud is joined with this
  device's instead of replacing it, so it keeps doing its job as the
  safety net for lost games.
  Check: Settings > Data: What's using space, Free up space: the toast doesn't mention the game record, and Find missing games still works after
- Settings > Data: when a save didn't fit, the app now remembers it after
  a restart: that store is fetched from the cloud, never pushed from the
  out-of-date copy on the phone.
  Check: Settings > Data: Worker and sync: sync shows no error after a normal reload
- Decks: after **Start over** or **Erase this device**, the deck
  pictures and card data in the larger storage are cleared too, and a
  late save can't strip the decks you start again with. If the larger
  storage is cleared by the phone, the app says so. **Remove full-size
  deck pictures** now removes all of them, and Undo after an import puts
  every deck back whole.
  Check: Settings > Data: What's using space: the decks' larger storage shows, with no warning
- Game: after a 60-card or Limited game, the next game (or a tournament
  pod) starts as Commander. The seat named **You** gets the partner
  picker and keeps its own bracket wherever it sits in setup.
  Check: Game: finish a 60-card game, then start a new game: setup shows Commander seats
- Decks: in **Rank**, a favorite no run has ranked (one brought back from
  a copy) keeps its place after the next run instead of losing it.
  **Bring back** only fills decks without a rank and numbers them with no
  ties; its Undo, and the Undo after **Use as build order**, put back
  only the ranks or build order, keeping any edits made since. Closing
  **Find lost favorites** while it loads stays closed.
  Check: Decks: Rank, Favorites (built), Find lost favorites, Bring back: every ranked deck has its own number; Undo puts the old numbers back

## 1.131.0 -- 2026-10-26 -- Swap seats
Summary: A game played on the wrong seat is put right in one tap from History's Edit.

### New features
- History: in a game's **Edit**, each opponent has **Swap seats with you**
  -- for a game where you tapped the seat with their name and they tapped
  yours. Everything about the two seats trades owners: commanders and
  decks, who won and your placement (worked out from when each of you
  went out), knockouts and eliminations, turn times, mulligans,
  concessions, the life timeline, who went first and fast mana. How you
  lost is cleared to be asked again. Nothing is saved until you tap Save;
  Cancel undoes it. Not for Two-Headed Giant games.
  Check: History: open a game, Edit, Swap seats with you on an opponent: your commander and placement become theirs; Save, then the game shows the swapped seats

### Bug fixes
- Decks: right after a deck was saved, its pictures and card data reached
  the phone's larger storage a moment later than the rest, so reloading
  or closing the app in that moment could lose the newest picture or
  check results. Now every save keeps the whole deck list in the small
  storage until the larger one has it, then trims.
  Check: Decks: change a deck's picture and reload the app straight away: the new picture is still there

## 1.130.3 -- 2026-10-26 -- Steadier tests
Summary: Housekeeping: a browser test that failed on some machines is fixed, and the working notes match the current plan.

### Behind the scenes
- The deck page's edge-swipe test gave the page one more finger move, so
  it no longer fails on browsers that hand over each move only when the
  next arrives. The whole browser suite passes on every machine again.
  Check: Decks: open a deck's page and swipe in from its left edge: the page follows your finger and closes past a third of the width

## 1.130.2 -- 2026-10-26 -- Room to grow
Summary: Deck pictures and card data move to the phone's larger storage, freeing most of the space the app was out of.

### Enhancements
- Settings > Data: deck pictures, EDHREC data, card checks, combos and
  prices now live in the phone's larger storage instead of the small one
  that was full -- about 3 MB of it back, nothing deleted and nothing
  different on screen. Sync and backups still carry whole decks, and a
  deck list from another device without pictures never removes this
  phone's. On the first launch the data is copied over before anything
  is trimmed; a phone without the larger storage keeps decks as before.
  What's using space says where they are.
  Check: Settings > Data: open What's using space: Decks is much smaller, and a line says pictures and card data are in the larger storage
  Check: Decks: deck pictures and the deck page's card checks still show after reloading the app

## 1.130.1 -- 2026-10-26 -- How much room is left
Summary: What's using space measures the room actually left on this phone and shows what fills your decks.

### Enhancements
- Settings > Data: **Measure room left** under What's using space checks
  how much more this phone will really take (the limit varies by phone),
  and a line lists the biggest fields inside your decks. The percentage
  against a guessed 5 MB is gone.
  Check: Settings > Data: What's using space, Measure room left: it says about how much room is left; the "Inside Decks, the biggest" line names fields and sizes

## 1.130.0 -- 2026-10-26 -- When the phone's storage is full
Summary: A full phone no longer loses what you save: the app frees space itself, keeps your change, and shows what's using the space.

### New features
- Settings > Data: **What's using space** shows how much of the phone's
  storage the app uses (an iPhone gives it about 5 MB) and what takes it,
  with your deck pictures broken out. **Free up space** clears what the
  app can rebuild; **Remove full-size deck pictures** drops the uncropped
  originals of pictures you uploaded (each deck keeps its picture; Undo
  puts them back).
  Check: Settings > Data: open What's using space: the total and the biggest stores show; Free up space says what it freed

### Bug fixes
- With the phone's storage full, a save -- a new deck, a logged game --
  was shown for the rest of the session, but sync uploaded the old copy
  and a reload brought the old copy back, so the change was lost. Now the
  app first frees space it can rebuild (cached card data, Trash older than
  a week, this phone's copy of the game record) and saves again; if it
  still doesn't fit, the change goes to the cloud and comes back after a
  reload, and the red warning stays until it is saved. The Trash now keeps
  at most 0.8 MB.
  Check: Decks: add a deck, then reload the app: the deck is still there
- The game record keeps each game without its life timeline, so it takes
  far less space.
  Check: Settings > Data: open What's using space: Game record (safety copy) is small

## 1.129.0 -- 2026-10-26 -- A safety copy of every game
Summary: Every game you log is also kept in a separate game record, so a game that goes missing can always be brought back.

### New features
- Settings > Data: every game you log or edit (Commander, 60-card and
  Limited) is also copied to a **game record**, kept on this device and
  synced to the cloud -- the last 60 days, up to 60 games. If a game ever
  disappears from History, **Find missing games** finds it there and
  **Add it back** returns it. A game you delete yourself is marked as
  deleted and never offered back.
  Check: Settings > Data: Worker and sync, Find missing games: it says there are no missing games (or lists any the record holds that History doesn't)

## 1.128.0 -- 2026-10-26 -- Find missing games
Summary: Games missing from this device can be found in the cloud copy or a snapshot and added back, and 60-card games now sync.

### New features
- Settings > Data: **Find missing games** under Worker and sync looks
  through the cloud copy and every snapshot for games -- Commander,
  60-card and Limited -- that aren't on this device, and lists them.
  **Add them back** adds just those; nothing on the device is removed or
  changed.
  Check: Settings > Data: Worker and sync, Find missing games: it lists any game the cloud has that this device doesn't, or says there are none

### Bug fixes
- Settings > Data: sync said **Last attempt failed: not a store key** and
  60-card games never synced -- the Worker only takes store names made of
  letters. They now sync under one it accepts.
  Check: Settings > Data: Worker and sync, Sync now: the line says when it last pulled and pushed, with no "not a store key"

## 1.127.0 -- 2026-10-25 -- Fix a game without retyping
Summary: History's Edit can swap your commander with an opponent's and fix misspelled commander names from Scryfall.

### New features
- History: in a game's **Edit**, each opponent has **Swap commanders with
  you** (when you played a deck that isn't yours) -- for a game logged with
  your commander and theirs the wrong way round.
  Check: History: open a game you played on a deck that isn't yours, Edit, Swap commanders with you on an opponent: your commander and theirs trade places; Save
- History: **Check names** in a game's Edit looks up every commander on
  the game on Scryfall and lists the ones spelled differently, each with
  **Use**, and **Use all**. A name with no card says so.
  Check: History: Edit a game with a misspelled commander, Check names: the right spelling shows with Use; Use all, Save: the game shows the fixed names

### Enhancements
- History: Edit has **Deck name** and **Borrowed from** for a game on a
  deck that isn't yours, so a game logged before 1.126.0 can say whose
  deck it was.
  Check: History: Edit a game on a deck that isn't yours, set Deck name and Borrowed from, Save: the game names the deck and whose it was

## 1.126.1 -- 2026-10-25 -- Your commander stays yours
Summary: Moving seats for turn order no longer swaps your commander with another player's.

### Bug fixes
- Game setup: the **Your deck** controls always sat on the top seat, but
  the game takes your seat by name ("You", or your name in Settings > Play).
  After the arrows moved someone else to the top, the commander typed
  under Your deck went on their seat and theirs on yours, so the logged
  game had them swapped. The Your deck controls now follow your seat
  wherever turn order puts it. A game already logged swapped can be put
  right with Edit in History.
  Check: Game setup: name the seats, move another player above you with the arrows: the Your deck box stays on your seat; log a game: History has your commander as yours

## 1.126.0 -- 2026-10-24 -- Playing a borrowed deck
Summary: When someone hands you a deck, Game setup takes its name and whose it is, and the log says so.

### New features
- Game setup: under **Not one of your decks? Type the commander** on your
  seat, a **Deck name** box and **Borrowed from** -- one chip for each
  person at the table. The logged game keeps the commander, the deck's
  name and whose it was, History shows it as "Zhulodok, Void Gorger --
  Eldrazi Unbound, Adam's", and none of your own decks gets the result.
  Check: Game setup: leave your deck unpicked, tap Not one of your decks, type a commander and a deck name, tap a Borrowed from name, start and log the game: History shows the commander, deck name and whose it was

## 1.125.0 -- 2026-10-23 -- Find lost favorites
Summary: The Rank page can look through every older copy of your data for your favorites ranking and bring it back.

### New features
- Decks: **Find lost favorites** under Rank > Favorites lists every cloud
  snapshot (with sync on) and the copy of your data built into the app,
  each with how many built decks it ranked and how many favorites runs it
  holds. **Bring back** puts that copy's favorites back -- its runs are
  added, none of yours removed -- and Undo takes it out again.
  Check: Decks: Rank, Favorites (built), Find lost favorites: each copy shows its ranked decks and runs; Bring back on one with ranks puts your # back

### Enhancements
- Settings > Data: **Ranks only** on a cloud snapshot now also brings
  back that day's favorites runs (added to yours), not just the ranks.
  Check: Settings > Data: Worker and sync, Cloud snapshots, Ranks only: the toast says how many favorites runs were added

## 1.124.4 -- 2026-10-23 -- Favorites stay put, and ranks come back
Summary: A build priority ranking no longer changes your favorites, and a cloud snapshot can bring back just your ranks.

### Bug fixes
- Decks: finishing or removing a Build priority ranking also recalculated
  your Favorites ranking, dropping any built deck that wasn't in a saved
  favorites run. Build priority runs now leave favorites alone; only a
  favorites run changes them. A run you leave mid-way and come back to
  also stays a build priority run (it used to be filed as favorites).
  Check: Decks: Rank, Build priority (unbuilt), finish a run, then Favorites (built): the same decks keep their # as before

### Enhancements
- Settings > Data: each cloud snapshot has **Ranks only** next to Restore.
  It brings back your favorites ranking and build order from that day
  and leaves everything else -- games, decks, lists -- as it is now.
  Check: Settings > Data: Worker and sync, Cloud snapshots, Ranks only on a day before the ranking run: your favorites # and build order are back

## 1.124.3 -- 2026-10-23 -- Your build order stays yours
Summary: Ranking decks no longer rewrites the build order you set.

### Bug fixes
- Decks: finishing or removing a ranking run -- build priority or
  favorites -- rewrote the build order you'd set on each deck's page, or
  cleared it. Rankings now leave it alone. Under the Build Priority list,
  **Use as build order** copies the ranking into your queue when you want
  it to, and Undo puts your own order back. A build order already changed
  by a run before this fix stays as it is now; set it again on the deck
  pages or restore a backup from before the run.
  Check: Decks: Rank, Build priority (unbuilt), finish a run: each unbuilt deck's # in the build order is unchanged

## 1.124.2 -- 2026-10-23 -- Keep drawing in mulligan practice
Summary: Mulligan practice has a Draw a card button after you keep.

### Enhancements
- Decks: after a keep in Mulligan practice, **Draw a card** draws the next
  card off the library -- T4, T5 and on -- shown with the turn 1-3 draws
  (pictures, or names offline). Deal another starts over.
  Check: Decks: open a deck, Practice > Mulligan practice: deal, keep, tap Draw a card twice: T4 and T5 show

## 1.124.1 -- 2026-10-23 -- Each headline number its own switch
Summary: The loadout image's headline numbers -- Decks, Value, Weight and Bags -- each have their own switch.

### Enhancements
- Loadout image: Headline numbers is a group of four switches -- Decks,
  Value, Weight and Bags -- each shown or left out on its own; the tiles
  that are on share the row, and with all four off the row is gone. A
  picture saved with the old single switch off keeps all four off.
  Check: Loadout > Step 5: under Headline numbers switch off Weight and Bags, make the image: just Decks and Value show

## 1.124.0 -- 2026-10-21 -- EDH, 60-card and Limited
Summary: History and Stats each have three tabs -- EDH, 60-card and Limited -- with 60-card games tracked by format, and Limited (draft, sealed, prerelease, cube...) is a game mode with a record of its own.

### New features
- History: **EDH**, **60-card** and **Limited** tabs at the top. EDH is
  your Commander history as before; 60-card shows your record, filters by
  format, your deck and opponent, your record with each deck and every
  game, each removable with Undo. The 60-card games fold left the EDH
  view for its own tab. The tab you're on is remembered on this device.
  Check: History: tap 60-card: your 60-card record and games show; tap EDH: your Commander games are back
- Stats: the same three tabs. 60-card and Limited each show games,
  record, win rate and the last 10, then the record by format (or event
  and set), by your deck, by opponent and, for 60-card, by their deck.
  Check: Stats: tap 60-card: the tiles, the last games and the record by format show
- Game setup: with **60-card 1v1** picked, **Which 60-card format**
  (Standard, Pioneer, Modern, Pauper, Legacy, Vintage or Other) sits
  under Format, remembered for next time. The game carries it, and the
  60-card result starts on it (you can still change it there).
  Check: Game setup > Format: choose 60-card 1v1, pick Modern under it, Start Game, Log Game: the result's format reads Modern
- Game setup: **Limited** in the Format dropdown, for draft, sealed,
  prerelease, cube, Jumpstart and the like: two players at 20 life (the
  pod can change), no Commander controls, the **Event** and **Set** under
  Format, both remembered. Log Game opens a **Limited result** (result,
  event, set, an optional event name, your deck, the opponent and their
  deck, notes) with **Save to Limited record** or **Don't save**. It is
  never a Commander game, and the record is in backups, restore and sync.
  Check: Game setup > Format: choose Limited, Start Game, Log Game: the Limited result opens; save it and History's EDH game count stays the same
- History and Stats: a **Limited** tab -- the record, filters by event,
  set, deck and opponent, and the record by event, by set, by deck and by
  opponent.
  Check: History: tap Limited: the game you saved shows, with its record

## 1.123.1 -- 2026-10-21 -- 60-card setup without Commander; 2HG EDH
Summary: With 60-card 1v1 picked, Game setup drops every Commander field and the game keeps none; Two-Headed Giant is called 2HG EDH.

### Enhancements
- Game setup: with 60-card 1v1 picked, the seats have no commander, deck
  or bracket to set, the Game Bracket section and the Rule 0 check are
  gone, and the header says 60-card 1v1. The game keeps no commander,
  deck or bracket on its seats.
  Check: Game setup > Format: choose 60-card 1v1: no Your Deck, commander or bracket on the seats, and no Game Bracket section
- Two-Headed Giant is called 2HG EDH: in the Format dropdown, the History
  and Stats filters, Settings' default format, Stats and the tour.
  Check: Game setup > Format: the team format reads 2HG EDH

## 1.123.0 -- 2026-10-21 -- 60-card 1v1
Summary: A game mode for 60-card 1v1: two players at 20 life, kept out of your Commander records, with a 60-card record of its own (or nothing saved at all).

### New features
- Game setup: **60-card 1v1** in the Format dropdown -- two players at 20
  life, and no commander damage or commander tax at the table. It is one
  game at a time, like Momir: the next game is back to Free-for-all, and
  Rematch keeps it.
  Check: Game setup > Format: choose 60-card 1v1, Start Game: two players at 20 life, and a seat's menu has no Commander section
- 60-card games are never Commander games: Log Game opens a short
  **60-card result** (Win, Loss or Draw, your deck, the opponent and their
  deck, the format, notes) with **Save to 60-card record** or **Don't
  save**. Nothing goes into your Commander games, stats, achievements or
  playgroup numbers.
  Check: Game setup > Format: 60-card 1v1, Start Game, Log Game: the 60-card result opens; save it and History's game count stays the same
- History: **60-card games** -- your 60-card record, your record with each
  deck, and every game newest first, each removable with Undo. It is in
  backups and sync.
  Check: History: open 60-card games: the record and the game you saved show

## 1.122.0 -- 2026-10-21 -- Save at the bottom; decks stand up
Summary: The loadout builder has save controls under its last step, and the loadout image shows every deck standing up.

### New features
- Loadout: Save this loadout, under Step 5 -- the name, Save (Save as
  new once you've loaded one), and Update for the loadout you loaded,
  which asks first. No scrolling back up to Step 1.
  Check: Loadout > Step 5: load a saved loadout, scroll to the bottom: Save this loadout has Save as new and Update with its name

### Enhancements
- Loadout image: a deck the case keeps on its side is drawn standing up:
  a Stanley's two bottom-corner boxes are upright cards the size of the
  rest, at each end of the bottom row, and a case of decks on their sides
  (the Peak Design 7L) is a row of upright cards. A deck's labels that
  don't fit beside each other go on a second line.
  Check: Loadout > Step 5: with a Stanley full to 12, make the image: the two corner decks stand upright like the others

## 1.121.1 -- 2026-10-20 -- Momir's draw for the turn
Summary: Momir's draw for the turn waits until you keep your opening hand, never misses a new game, and shows on your side of the board.

### Bug fixes
- Momir: the first player's draw landed straight in the opening hand when
  the game started, before Keep or Mulligan -- eight cards, and no chance
  to mulligan. Now each player keeps (or mulligans) first, and their draw
  comes the moment they keep. A new game that starts on the same turn and
  seat as the last one also gets its draw.
  Check: Game setup > Format: Momir, 3 players, Start Game: the first player has 7 and Keep; tap Keep: they draw to 8

### Enhancements
- Momir: the line above your hand says what you drew this turn (DREW A
  FOREST), or, going first in a two-player game, that the first turn has
  no draw.
  Check: Game setup > Format: Momir, 2 players, Start Game: on the first turn the line says NO DRAW: FIRST TURN OF A DUEL; the next player's says DREW and the card

## 1.121.0 -- 2026-10-20 -- Classic sets and Universes Beyond
Summary: Set themes reach back to Alpha and out to Universes Beyond: 77 in all, in three groups under Settings > Look > All themes.

### New features
- Themes: Classic Magic sets. A theme for each iconic set from Alpha
  (1993) to Zendikar Rising (2020) -- Arabian Nights, Ice Age, Urza's
  Saga, Mirrodin, Ravnica, Lorwyn, Zendikar, Innistrad, Theros, Kaladesh,
  Throne of Eldraine and more, with Modern Horizons and Commander Legends
  -- by decade, Alpha first.
  Check: Settings > Look > All themes: open Classic Magic sets: Alpha leads the 1990s
- Themes: Universes Beyond. Every crossover in its own group, newest
  first: Star Trek (ahead of its release), The Hobbit, Marvel Super
  Heroes, Ninja Turtles, Avatar, Spider-Man, Final Fantasy, Assassin's
  Creed, Fallout, Jurassic World, Doctor Who, The Lord of the Rings,
  Transformers and Warhammer 40,000.
  Check: Settings > Look > All themes: open Universes Beyond: Star Trek leads, Warhammer 40,000 is last

### Bug fixes
- Loadout image: with Commanders switched off, a deck's name ran off the
  bottom of its tile (the last line dropped below it). Names now sit at
  the foot of the tile and never draw outside it.
  Check: Loadout > Step 5: switch off Commanders, make the image: every deck's name sits whole inside its tile
- Loadout image: a long loadout had a tall empty band over its title (the
  room left for a phone's notch grew with the picture). It now stops at
  what a phone-shaped picture needs.
  Check: Loadout > Step 5: with many cases, make the image: the title starts near the top

### Enhancements
- Themes: Baldur's Gate joins the recent sets, and the recent sets fold
  away under Magic sets, 2021 on. Each group's fonts load only when you
  open it.
  Check: Settings > Look > All themes: open Magic sets, 2021 on: Baldur's Gate is under 2022

## 1.120.0 -- 2026-10-20 -- A theme for each set
Summary: Settings > Look has a theme for each main Magic set of the last five years, from Kaldheim to Reality Fracture, each in its set's colors with its own type and corners.

### New features
- Themes: Magic sets. Thirty new themes, one for each main set since
  Kaldheim (2021) -- Strixhaven, Neon Dynasty, Bloomburrow, Duskmourn,
  Final Fantasy, Avatar, The Hobbit, Reality Fracture and the rest -- in
  their own group under All themes, newest first by year. Each has the
  set's colors, its own heading type and its own corners, and works in
  light mode. Random theme can pick them too.
  Check: Settings > Look > All themes: under Magic sets, 2026, pick Reality Fracture: the app wears it

## 1.119.0 -- 2026-10-20 -- Choose what's in the picture
Summary: The loadout image has a switch for each part, so you choose what it shows, and more it can show: color identities, strategies, tiers, accessories, your notes, and each deck's bracket, price and record. In the case view, cases move up and down, and each shows what it's worth.

### New features
- Loadout image: switches under Make image choose what goes in the
  picture -- the date line, the headline numbers, colors, brackets, the
  cases, empty cases and how they've played -- and, on each deck, its
  commander and color pips. They're kept on this device, and flipping one
  redraws an image already made.
  Check: Loadout > Step 5: make the image, then switch off Cases and decks: it redraws without them
- New things the picture can show: color identities, strategies and tiers
  as chips, the accessories packed, the night's notes, and on each deck its
  bracket, its price and its wins and losses.
  Check: Loadout > Step 5: switch on Strategies and Price, make the image: strategies are listed and each deck shows its price
- Case view: up and down arrows on each case move it among the cases
  beside it (loose, or in the same bag). The order is kept when you save
  the loadout, and the loadout image follows it.
  Check: Loadout > Step 3: in the Case view, tap the down arrow on the top case: it moves below the next one
- Case view: each case shows what its decks are worth; a bag counts the
  cases packed inside it. The loadout image shows it too (a switch, What
  each case is worth).
  Check: Loadout > Step 3: in the Case view, each case's header shows its value

## 1.118.23 -- 2026-10-20 -- Pips you can see
Summary: In the loadout image, each deck's color pips sit on a soft dark backing, so they show up over bright card art.

### Enhancements
- Loadout image: the color pips at the top of each deck sit on a slight
  dark shading, easier to see against light or busy art.
  Check: Loadout > Step 5: make the image: each deck's color pips show clearly over its card

## 1.118.22 -- 2026-10-20 -- Empty cases last
Summary: In the loadout image, empty cases come after the ones with decks in them.

### Enhancements
- Loadout image: empty cases are drawn last, at every level (inside a bag
  too); a bag holding only empty cases counts as empty. The rest keep their
  order.
  Check: Loadout > Step 5: with an empty case packed, make the image: the empty case is at the bottom

## 1.118.21 -- 2026-10-20 -- A tighter picture
Summary: The loadout image has room above the title for a phone's notch, an empty case just says Empty, and the cases fill the picture's width instead of leaving space beside them.

### Enhancements
- Loadout image: a case with nothing in it shows one line, Empty, instead
  of its open slots; a bag holding other cases shows just those.
  Check: Loadout > Step 5: add an empty case and make the image: it says Empty
- Loadout image: each case fills the width (its decks bigger, their names
  easier to read), a DeWalt's small squares are only drawn when something
  is in them, and the notes under a bag ("standing up", which slots go to
  which case) are gone -- the cases inside are drawn right below it.
  Check: Loadout > Step 5: make the image: no empty space beside the cases

### Bug fixes
- Opened whole on a phone, the loadout image sat its title under the notch
  and its last line over the home bar. It now leaves room for both, in
  step with how tall the picture is.
  Check: Loadout > Step 5: save the image and open it in Photos: the title is clear of the notch

## 1.118.20 -- 2026-10-20 -- Every deck's commander, back in the picture
Summary: The loadout image shows each deck's commander under its name again, on every deck, not just the wide ones.

### Enhancements
- Loadout image: every deck shows its name with its commander (or both
  partners, or its background) under it, as the picture did before it took
  the Case view's layout. The cases are drawn a little larger so both read.
  Check: Loadout > Step 5: make the image: every deck in a Stanley shows its name and its commander

## 1.118.19 -- 2026-10-20 -- The picture matches the case
Summary: The loadout image lays every case out as the Case view does, each deck in its slot, and an empty case you've added shows too; dragging a deck to the edge scrolls at one pace on any phone; and tests that only failed on a busy machine are fixed.

### Enhancements
- Loadout image: every case is drawn the way the Case view lays it out --
  a Stanley's two rows of five and two lying flat, a DeWalt's three across
  and its small squares, a Peak Design case's column on their sides -- with
  each deck in the slot you put it in, as its card with its name, colors and
  bracket on it. Open slots are dashed, and a case you've added with nothing
  in it yet is in the picture as its empty slots.
  Check: Loadout > Step 5: add an empty case and make the image: the case is there, and the decks sit where they do in the Case view

### Bug fixes
- Held at the top or bottom edge while dragging a deck (the Case view, the
  To do board), the page scrolled by the screen frame: twice as fast on a
  120 Hz phone and slower on a busy one. It now scrolls by the clock, at one
  pace on any phone.
  Check: Loadout > Case view: hold a deck at the bottom edge: the page scrolls at a steady pace
- On a slow phone, opening or folding a section could play its sound twice.
  It plays once.
  Check: Settings: Look > Sounds on Full, then fold and open a section: one sound each way
- On a busy phone, a quick flick back from the left edge of a deck page
  could be read as slow and not close it, and tapping the title seven times
  for a chaos theme could miss. Both are now timed by when you touched the
  screen, not when the phone got round to it.
  Check: Decks: open a deck, flick quickly from the left edge: it closes

### Behind the scenes
- The behaviour tests can run under strain (E2E_THROTTLE slows the
  browser, E2E_HOG keeps cores busy), which shook out four tests that only
  passed when everything answered on time; those are fixed.
  Check: Settings > App > What's new: look at 1.118.19: it lists this item
- Vite 8.3.4 (the tool that builds the app).
  Check: Settings > App > What's new: look at 1.118.19: it lists Vite 8.3.4

## 1.118.18 -- 2026-10-20 -- A key you can trust
Summary: Test now checks the Worker's Claude key actually works, and says so when it has expired; Claude can finish categorizing a full 100-card list, so the nightly refresh stops failing on the same two decks.

### Bug fixes
- Claude categorize (the nightly refresh and the Categorize button) gave
  Claude too little room for a full 100-card list: its thinking and the
  reply shared a 4,000-token limit, so bigger lists were cut off and
  failed, night after night (My Cabbages!, Hanging Out With Your Dad's
  Friends). It now has the Worker's full 8,000. A list that still can't be
  finished is sorted by the rules and Claude tries again a week later,
  rather than failing every night.
  Check: Settings: Data > Worker and sync, after tomorrow's nightly refresh: "failed" is gone, or a line says Claude tries again in a week

### Enhancements
- Settings > Data > Worker and sync: Test tries the Worker's Claude key
  (free; Anthropic's model list), so it says "AI: on, and the key works",
  or that the key was rejected (wrong, revoked or expired) with where to
  make a new one. Before, "AI: on" only meant a key was set.
  Check: Settings: Data > Worker and sync: tap Test: it says the key works

## 1.118.17 -- 2026-10-20 -- Stats that add up
Summary: Stats numbers no longer freeze partway through counting up (a Top ELO of 107, win rates of 3%), the View stat rows are easier to tell apart, and an opened section stays open for 3 minutes.

### Bug fixes
- With animations on, Stats numbers count up from zero. If the page
  started counting again while a count was running (coming back to the
  tab, a filter), it took the half-counted numbers as the real ones and
  stopped there: a Top ELO of 107 instead of about 1500, win rates of 3%,
  vs Expected 0.09x. Every number now lands on its real value.
  Check: Stats: go to Home and straight back twice: Top ELO is around 1500 and the win rates match your record
- In the case view, holding a deck, dropping it on the swap zone and
  picking a replacement could now and then leave the old deck in the case
  too. The list it opens could offer the deck you were swapping out, and
  picking it put it straight back. That deck is no longer offered, and the
  deck taken out always stays out.
  Check: Loadout > Step 3: hold a deck in a case, drop it on the swap zone: the held deck isn't in the list; pick another: only the new one is in the case
- With the Comprehensive Rules kept on the device, opening them on a slow
  phone briefly offered "Load the Comprehensive Rules" while the saved copy
  was being read, and a tap there fetched them all again. It now says it's
  reading the kept rules until they're on screen.
  Check: Rules: open Comprehensive Rules with them already loaded: no Load button flashes up first

### Enhancements
- View stat's two rows looked alike. The groups are now tabs with the
  open one underlined, and its charts sit in a tray beneath as chips,
  the one showing filled in.
  Check: Stats > Overview: View stat: tap How games go: it's underlined and its charts show below; tap one: its chip fills in
- Sections that start folded (Game setup's Table, a deck's Details, the
  deck page's cards, Settings' less-used sections and the rest) folded
  again every time you came back. Opened, one now stays open for 3
  minutes, so stepping away and back keeps it as you left it; after
  that it starts folded again. One you fold yourself stays folded.
  Check: Game setup: open Table, go to Home and back: Table is still open; come back after 3 minutes: it starts folded
  Check: Decks: open a deck, open Details, close the deck and open it again: Details is still open

## 1.118.16 -- 2026-10-20 -- Slots, faces and steadier checks
Summary: Undoing a quick swap keeps a deck's slot, Momir names a two-faced card once, screen readers skip hidden scroll arrows, and the test machines stay on a fixed system.

### Bug fixes
- Undoing a quick swap in a case put the old deck back in the first free
  slot, not the one it came from.
  Check: Loadout > Step 3: in a case's cuts and adds, Swap, then UNDO: the old deck is back in its own slot
- A double-faced Momir creature was named by both faces on the board and
  in the log ("Delver of Secrets // Insectile Aberration"). It now goes
  by the face it shows.
  Check: Game setup: start a Momir game: a double-faced creature shows one name; Transform shows the other

### Enhancements
- With VoiceOver or a keyboard, the scroll arrows could still be reached
  while hidden or stepped aside. They're now skipped until they show.
  Check: Settings > Look with VoiceOver on: swipe through the page: the scroll arrows aren't read out unless they're showing

### Behind the scenes
- Opening the app asks the Worker for last night's check once, not twice,
  and the app icon's number is only updated when it changes.
  Check: Settings > App > What's new: look at 1.118.16: it lists both items
- The machines that test and publish the app stay on a fixed version of
  their system, so GitHub's move to a newer one can't break a deploy
  overnight. Pull-request checks now run the browser tests on two
  machines, like the deploy. The app is unchanged.
  Check: Settings > App > What's new: look at 1.118.16: it lists this release

## 1.118.15 -- 2026-10-20 -- Scroll arrows step aside
Summary: The scroll arrows step aside for whatever is under them, a deck deleted from its page waits in the Trash, and the app icon's number is right.

### Bug fixes
- Deleting a deck from its own page (Edit, Delete deck) offered Undo but
  didn't put the deck in the Trash, so once the message went it was gone.
  It now waits in the Trash like everything else.
  Check: A deck's page > Edit: Delete deck: Settings > Data > Trash lists it, and Restore brings it back
- The number on the app icon (a backup due, decks no longer legal) only
  appeared once you opened Home's notices, and stayed after Back up now.
  It now follows your data on any page, and clears when you back up.
  Check: Home: with a backup due and another notice, the app icon shows 1; Back up now: the 1 goes
- On a phone on its side that's too narrow to dock the deck page, the
  page ran under a side notch. It now keeps clear of it.
  Check: A narrow phone on its side with a notch, Decks: open a deck: nothing sits under the notch

### Enhancements
- The scroll arrows at the bottom right, shown while you scroll, used to
  sit over whatever was at the right edge, often a switch, and take its
  tap. Wherever a button or switch is under them they now step aside, and
  come back when scrolling moves it away. Popups' arrows do the same.
  Check: Settings > Look: scroll so a switch is at the bottom right: the arrows aren't shown over it, and tapping the switch flips it

### Behind the scenes
- Twelve more structure tests now check the app in a browser instead of
  quoting its code.
  Check: Settings > App > What's new: look at 1.118.15: it lists this release

## 1.118.14 -- 2026-10-19 -- Taps and copies land where you aim
Summary: Five fixes: Copy works for the Claude-chat pack on a phone, Loadout's Step 1 opens everything it should, a two-faced commander is one name in the loadout image, and taps land where you aim.

### Bug fixes
- The loadout image named a double-faced commander as two, as if they
  were partners ("Tony Stark & The Invincible Iron Man"). It now shows
  the front face; real partners and backgrounds still show both.
  Check: Loadout > What's packed > Loadout image: Make image: a double-faced commander shows one name under its deck
- Copy did nothing for Settings > Data > Share and export > For a Claude
  chat on a phone: the button grew as it changed to "Tap again to view",
  the row re-wrapped, and the tap landed beside it. A copy button now
  keeps its size.
  Check: Settings > Data > Share and export > For a Claude chat: tap Copy: it says it copied
- Loadout's Step 1 in the step bar opened Session Name but left Notes,
  venue, players folded when Session Name had been folded too.
  Check: Loadout: fold Session Name, then tap 1 in the step bar: Session Name and Notes, venue, players both open
- In Game setup, tapping the bottom edge of a bracket chip (1 to 5)
  opened "Not one of your decks? Type the commander" instead of picking
  the bracket.
  Check: Game setup: tap the bottom edge of bracket 3: it picks bracket 3
- On Home, tapping near the edge of a card in the hand could pick the
  card underneath it instead.
  Check: Home: tap just inside the bottom edge of the Decks card: Decks is picked, not History

### Behind the scenes
- A new browser test visits every page, upright and sideways, and fails
  if any button's touch area takes taps meant for another. It found the
  two tap fixes above.
  Check: Settings > App > What's new: look at 1.118.14: it lists this release
- Twelve more structure tests now check the app in a browser instead of
  quoting its code. The deploy's browser tests run on two machines at
  once, so a deploy takes about half as long again.
  Check: Settings > App > What's new: look at 1.118.14: it lists both items

## 1.118.13 -- 2026-10-19 -- Help buttons stay in their lane
Summary: A small help button no longer takes taps meant for the button right above it, and more tests check the app in a browser.

### Bug fixes
- Tapping the bottom edge of a button that sits right above a "? what
  is this" help button (With Claude on a deck's decklist, for one)
  opened the help instead. The help button's wider touch area now
  reaches to the sides and below, not up over its neighbour.
  Check: A deck's page > Decklist: tap the bottom edge of With Claude: it opens With Claude, not the help
  Check: A deck's page > Decklist: tap just below a "?" help button: it still opens the help

### Behind the scenes
- Twelve more structure tests that quoted exact lines of code now drive
  the app in a browser instead: the rules guide, release-note checks,
  Run checks, Categorize, deck evidence, the table log, Spotlight,
  restart, dungeons, planechase and the newer easter eggs. The slowest
  browser tests now start first, so a deploy finishes sooner.
  Check: Settings > App > What's new: look at 1.118.13: it lists this release

## 1.118.12 -- 2026-10-19 -- Sturdier tests
Summary: Behind-the-scenes only: twelve of the most often broken structure tests now check the app's behaviour in a browser instead of quoting its code.

### Behind the scenes
- Twelve structure tests that quoted exact lines of code, and broke on
  every rewording, now drive the app in a browser and check what you
  see: text size and the table zoom, the hold ring, case-view dragging,
  the deck picture, seasons and fold sounds, Home notices and art, Threat
  and its sort, the AI switch, haptics, pull to reload and shake, the
  guided tour, and the table's easter eggs. The app is unchanged.
  Check: Settings > App > What's new: look at 1.118.12: it lists this release

## 1.118.11 -- 2026-10-19 -- Faster deploys
Summary: Behind-the-scenes only: the browser tests run four at a time, so a deploy takes about half as long.

### Behind the scenes
- The deploy's browser tests run four at a time instead of one by one,
  cutting about 5 minutes from each deploy. The app is unchanged.
  Check: Settings > App > What's new: look at 1.118.11: it lists this release

## 1.118.10 -- 2026-10-19 -- Strict type-checking by default
Summary: Behind-the-scenes only: strict type-checking is now the default for every file, and a new tool explains failing tests.

### Behind the scenes
- Strict type-checking is on for the whole app by default, so any new
  code is checked from the start. A guard fails the tests if it is ever
  switched off. The app itself is unchanged.
  Check: Settings > App > What's new: look at 1.118.10: it lists this release
- A new developer command, pins:why, names the exact line a failing
  structure test was looking for, which makes those tests quicker and
  cheaper to fix.
  Check: Settings > App > What's new: look at 1.118.10: it lists both items

## 1.118.9 -- 2026-10-19 -- Commanders in the loadout image, nested cases drawn smaller
Summary: The loadout image names each deck's commander under the deck, a bag no longer draws the deck slots a case inside it has taken, and every file in the app is now fully type-checked.

### Enhancements
- **Commanders in the loadout image**: each deck in the image shows its
  commander under its name, or both commanders for partners and a
  background ("Burakos, Party Leader & Folk Hero").
  Check: Loadout > What's packed > Loadout image: under each deck's name is its commander
- **Taken slots not drawn**: when a case packed inside a bag takes some
  of the bag's deck slots, the case view draws the bag with only the
  slots it has left, and a line under it says which case has the rest
  ("1 deck slot goes to Peak Design XXS Cube").
  Check: Loadout > Step 3: put a cube inside the 7L and tap + on Takes: the 7L draws one slot fewer, with a line naming the cube

### Behind the scenes
- Every file in the app is now fully type-checked (86 of 86). Apart
  from the two changes above, the app works exactly as before.
  Check: Settings > App > What's new: look at 1.118.9: it lists this release

## 1.118.8 -- 2026-10-19 -- Five more files type-checked
Summary: Behind-the-scenes only: five more files are fully type-checked, and the app is unchanged.

### Behind the scenes
- Five more files are fully type-checked (56 in all): the game log form,
  seasons, deck helpers, home storage and card helpers. The built app is
  byte-for-byte the same.
  Check: Settings > App > What's new: look at 1.118.8: it lists this release

## 1.118.7 -- 2026-10-19 -- Full cards when ranking, and a swipe fix
Summary: Ranking decks shows both decks' whole cards, and a swipe through Other commanders' cards no longer leaves the deck page slid off the screen.

### Enhancements
- **Full cards when ranking**: each match in Rank shows both decks'
  whole cards, high-res, above their names. Tapping the card still picks
  it.
  Check: Decks > Rank: Start Ranking: both decks show their full card

### Bug fixes
- **Deck page stays put under the card carousel**: a sideways swipe
  through Browse as cards (Other commanders) moved the deck page behind
  it too, and with See why closing the carousel before the finger
  lifted, the page stayed slid part-way off the screen. The swipe now
  only moves the cards. The same goes for the other pop-ups drawn over
  a page.
  Check: A deck's page > Decklist > Other commanders (after Find other commanders) > Browse as cards: swipe the cards, then tap See why: the deck page stays in place

## 1.118.6 -- 2026-10-19 -- A compact Decks list
Summary: The Decks list can show one line a deck, and To do's suggestion settings start folded.

### Enhancements
- **Compact deck rows**: Compact, beside the deck count, shows one line
  a deck (picture, name, commander, record) and leaves the strategy,
  details line and theme chips to the deck's page. Remembered on this
  phone.
  Check: Decks: tap Compact beside the deck count: each deck is one line
- **To do, settings folded**: What to suggest starts folded, saying
  which kinds are on.
  Check: To do: look under Suggested: What to suggest is one line

### Behind the scenes
- Five more files are fully type-checked (51 in all), with no change to
  what they do.
  Check: Settings > App > What's new: look at 1.118.6: it lists this release

## 1.118.5 -- 2026-10-19 -- Fixes from a review of the week's releases
Summary: A cube packed inside a bag no longer costs the bag two slots, an emptied cube lets go of its bag, Suggest a Deck respects case limits, and a few smaller fixes.

### Bug fixes
- **A cube's slots counted twice**: a packing cube taking one of the 7L's
  slots left room for only 2 decks instead of 3, with a deck spilling
  into Over the limit. The bag is now drawn at its full size with the
  cube's slots marked taken.
  Check: Loadout > Case view: put the XXS cube in the 7L, set Takes to 1, pack 3 decks in the 7L: all 3 fit
- **An emptied cube kept its bag**: emptying a cube that was inside a
  bag hid Start with a case and left What's packed showing zeros, and
  packing the cube again pulled the empty bag back in. An emptied cube
  now lets go of its bag.
  Check: Loadout > Case view: empty a cube that's in a bag: Start with a case comes back
- **A cube Settings no longer allows in its bag**: it stayed inside with
  no button to take it out. The bag it's in is still offered, so a tap
  takes it out.
  Check: Loadout > Case view: look at a cube's Goes in buttons: the bag it's in is lit and can be tapped off
- **Suggest a Deck skipped case limits**: Pack it and + Add put a deck
  in a full case or a bag with no deck slots. They now go through the
  same limits as the rest of the page (which say why when one says no),
  and bags with no deck slots aren't offered.
  Check: Loadout > Suggest a Deck: tap Browse, Pack it, pick a full case: it says the case is full
- **A redrawn 25L took any number of strapped playmats**: a redrawn
  25L now counts a strapped playmat as one of its accessories.
  Check: Loadout > Accessory Assignment: put two strapped playmats in a redrawn 25L: the limit stops you
- **Loadout image counted decks carried loose as a bag**.
  Check: Loadout > Loadout image: tap Make image with a deck carried loose: Bags counts only cases
- **Stats header**: it called every uncounted game practice, and a game
  with lent decks counted once per lent deck. It now says "not counted:
  practice, loans, tournaments" and counts each game once.
  Check: Stats: look at the header: uncounted games say practice, loans, tournaments
- **"You've funWon"**: a typo in the Good matchup bright spot.
  Check: Stats: look at Bright spots: Good matchup reads "You've won"
- **Try this changed at the wrong time**: the Home tip changed at
  midnight UTC (afternoon or evening in the US) instead of your
  midnight.
  Check: Home: look at Try this: it's the same tip all evening

## 1.118.4 -- 2026-10-19 -- Deck page, Settings, Game setup and Stats tidied
Summary: The deck page folds its long cards, Settings' cases and Play settings fold to one line each, Start Game stays in reach, and Stats picks its chart from chips instead of a dropdown.

### Enhancements
- **Deck page, shorter**: the game plan shows its start with Read the
  whole plan; the commander text, In Two-Headed Giant, 1v1 or
  multiplayer and Why B fold to their heading and badge (remembered
  across decks); a note that only repeats the strategy isn't shown
  twice; an unchecked list has one line for the bracket check and mana
  base.
  Check: Decks > a deck's page > Overview: look at the game plan: it shows its start and Read the whole plan
- **Settings, cases on one line**: Your cases starts folded (saying how
  many are built in); each built-in case is one line with its picture
  in a column, its name and Redraw, and its accessory limit and what it
  goes inside open from the line under the name.
  Check: Settings > Decks > Your cases: tap the line under Stanley Case 1: its accessory limit and Goes inside open
- **Settings, Play in three lines**: On this phone, Game defaults and At
  the table fold, each saying what's set; Links and about folds on the
  App tab.
  Check: Settings > Play: look at Game defaults: it says the starting life, pod size, bracket and format
- **Start Game in reach**: in Game setup, Start Game rides at the
  bottom of the screen while you fill in players, and settles into its
  place when you get there.
  Check: Game: look at the bottom of the screen: Start Game is there before you scroll
- **Stats chart chips**: View stat is a row of groups, then that
  group's charts as chips, instead of a dropdown that hid them.
  Check: Stats: tap How games go under View stat: its charts show as chips

## 1.118.3 -- 2026-10-19 -- Steps that look like steps
Summary: Loadout's steps are boxes with numbered headings and a dotted step row, a step you jump to opens and lights up, every Home card names itself the same way, and the 25L can be redrawn.

### Enhancements
- **Steps in order**: the step row is numbered dots on a line with each
  step's name under it, so it reads as steps rather than counts. Each
  step is its own box headed Step 1 of 5 and so on.
  Check: Loadout: look at the top: numbered dots on a line, and each step in its own box
- **Jump and open**: tapping a step opens its sections (Accessory
  Assignment, the case view, Suggest a Deck...), jumps there and
  outlines the step for a moment.
  Check: Loadout: tap 4 in the step row: Accessory Assignment opens and the step is outlined
- **Redraw the 25L**: the Peak Design 25L can be redrawn like the
  other built-in cases. The designer starts empty; once saved, the 25L
  counts the slots you drew, and Back to original makes it a bag with
  no set slots again.
  Check: Settings > Decks > Built-in cases: tap Redraw on the Peak Design 25L: the designer opens, empty

### Bug fixes
- **Settings card in the hand**: the last card in the Home fan wrote
  its name across its top, sideways to the rest. Every card names
  itself down its left edge now; the lifted one also across the top.
  Check: Home: look at the hand fan: Settings reads down its edge like the others

## 1.118.2 -- 2026-10-19 -- A tidier Loadout page
Summary: The Loadout page packs from the case view in Step 3, keeps the list of every case a tap away, folds what you rarely change, and has a row of step buttons that stays at the top.

### Enhancements
- **Step buttons**: a row of buttons for the five steps stays at the top
  of the Loadout page as you scroll; tap one to jump there, and the
  step you're in is lit.
  Check: Loadout: tap 5 Packed in the step row: the page jumps to Step 5 and the row stays at the top
- **Case view first**: the case view moved up into Step 3 as the way to
  pack. The list of every case, with its filters and sort, is under
  Pick from a list right below it.
  Check: Loadout: look at Step 3: the case view comes first, then Pick from a list
- **The list, shorter**: in Pick from a list only the cases in use
  show (Show the other cases brings the rest back), a case's deck
  chips open from + Add decks, the nickname from the pencil, the help
  for the share-a-slot button shows once, and Cuts and adds starts
  folded with the top cut and add named.
  Check: Loadout > Pick from a list: tap + Add decks on a case: its deck chips show
- **One line for who and where**: notes, venue and who's playing fold
  into one line ("Monday · Shop · 3 players") that opens on tap.
  Check: Loadout: tap Notes, venue, players: the notes, venue and players open
- **Suggest a Deck**: Browse leads; the top five list is behind Top 5.
  Check: Loadout > Suggest a Deck: tap Top 5: the five suggestions show
- **What's packed, in one card**: the totals, colors, boxes and
  warnings sit in one summary card, Not in any case is folded, and
  the cases to add are one + Add a case button that asks which.
  Check: Loadout > What's packed: look at the top: the totals and colors share one card

## 1.118.1 -- 2026-10-19 -- Home tidied, bags as they are, a readable loadout image
Summary: Home folds its extras into At a glance and one Today card, the Peak Design bags hold what they really hold, and the loadout image groups cases inside their bags with decks big enough to read.

### Enhancements
- **Today on Home**: tonight's game night awards, the nudges and the
  Try this tip share one TODAY card, which isn't there when none of
  them has anything to say.
  Check: Home: look under the page cards: one Today card holds the tip
- **At a glance folds**: Never played and Color Coverage fold up inside
  At a glance instead of being cards of their own.
  Check: Home: tap Color Coverage in At a glance: it opens
- **Hand names show**: in the Hand layout a covered card shows its name
  down its visible edge, and the fan sits lower with less gap above it.
  Check: Home: look at the hand fan: each covered card shows its name on its edge
- **Real bag sizes**: the Peak Design 25L has no set deck slots (no
  structure inside; the 7L, the packing cubes and accessories go in
  it), the Smedium holds 6 decks and the XXS 2. The 25L shows as a bag
  in Settings, and a case packed in it has no Takes stepper.
  Check: Settings > Decks > Built-in cases: find the Peak Design 25L: it says bag, with no accessory limit
- **Loadout image grouping and size**: cases packed inside a bag are
  drawn inside its panel, indented, so the 25L shows the 7L (with the
  XXS in it) and the Smedium. Each deck is a row with its card, its
  name in large type, its bracket and its colors, two columns wide on
  a wide panel. The picture grows taller to fit, and a long name
  wraps to two lines.
  Check: Loadout > Loadout image: tap Make image: cases inside a bag sit inside its panel and deck names are easy to read

## 1.118.0 -- 2026-10-19 -- The loadout as a picture
Summary: What's packed makes an image of tonight's loadout -- every case with its decks, and the stats -- to save or share.

### New features
- **Loadout image**: What's packed > Loadout image > Make image draws
  tonight's loadout as one picture: its name, the date and venue, the
  decks, value, weight and how many bags you carry, the colors and
  brackets it covers, every case with its decks as their cards in their
  box colors (a case packed inside a bag says so), and how the decks
  have played. Save or share sends it on.
  Check: Loadout > Loadout image: tap Make image: the picture shows your cases and decks

## 1.117.1 -- 2026-10-19 -- Empty bags, shared slots, strapped mats
Summary: A case can hold no decks, a bag can give up deck slots to a case packed inside it, and a strapped playmat goes on a bag that holds only other cases.

### Enhancements
- **Cases with no deck slots**: a case of your own (or a redrawn one)
  can have no deck slots at all -- a bag for accessories and packing
  cubes. The designer says so instead of refusing to save.
  Check: Settings > Decks > Your cases: + Add a case, empty every cell, name it: it saves with no deck slots
- **A case inside takes bag slots**: a case packed inside another has a
  Takes stepper: how many of the bag's deck slots it uses (none to
  start). The bag's limit drops by that much and those slots are drawn
  taken. Remembered for that case in that bag.
  Check: Loadout > Case view: pack the 7L in the 25L, tap + on Takes twice: the 25L shows 8 deck slots

### Bug fixes
- **Strapped playmat on a bag with only cases in it**: Accessory
  Assignment offered only cases with decks in them, so a 25L holding
  just the 7L (or a bag added empty) couldn't take the strapped
  playmat. Every case in the loadout is offered now, and the 25L takes
  one strapped playmat outside, without an accessory slot.
  Check: Loadout > Accessory Assignment: with the 7L packed in the 25L, tap Playmat Tube -- Strapped under the 25L: it goes on

## 1.117.0 -- 2026-10-19 -- Bags inside bags
Summary: The Peak Design 25L backpack and the XXS and Smedium packing cubes are cases now, and cases go inside other cases.

### New features
- **Peak Design bags and cubes**: the 25L backpack, the Smedium cube and
  the XXS cube join the built-in cases. Their deck counts are estimates
  (10, 8 and 4) -- redraw any of them in Settings > Decks > Your cases to
  match how yours pack.
  Check: Loadout > Deck Assignment: the Peak Design 25L Backpack, Smedium Cube and XXS Cube are there to pack
- **Cases inside cases**: the XXS cube goes in the 7L sling or the 25L
  backpack; the Smedium cube and the 7L sling go in the 25L. In the case
  view, a case's **Goes in** chips pack it inside a bag (the bag comes
  along), it's drawn inside that bag, and tapping again takes it out.
  What's packed says what you carry -- each bag with what's inside it.
  Saved with the loadout.
  Check: Loadout > Case view: pack the XXS cube, tap Goes in Peak Design 7L: the cube is drawn inside the 7L
- **What goes inside what**: every case in Settings > Decks > Your cases
  says what it goes inside; Change picks the bags, Default puts it back.
  Check: Settings > Decks > Your cases: tap Change under Peak Design Smedium Cube: the bags it goes inside light up

## 1.116.1 -- 2026-10-19 -- The life clicker is an accessory
Summary: The life clicker is added like any other accessory, to any case.

### Enhancements
- **Life clicker as an accessory**: it's in your accessories now (added
  once if your list had none) and goes in any case from Accessory
  Assignment. It's small: it never uses up an accessory slot, and in a
  DeWalt it sits in a free small square instead of a deck slot, drawn
  there in the case view. A saved loadout with a "Life clicker" small
  square loads it as the accessory.
  Check: Loadout > Accessory Assignment: tap Life Clicker under a DeWalt: it goes in a small square, not a deck slot

## 1.116.0 -- 2026-10-18 -- More fun than the numbers
Summary: Stats leads with the good news, has a Just for fun view, personal records and monthly challenges; logging a game shows a recap; Home has game night awards and a Try this tip.

### New features
- **Bright spots**: Stats opens on what went well -- a win streak going
  now, your deck of the month, winning more than lately, more wins than
  the odds for your pod sizes, knockouts, fun ratings, the friend you beat
  most.
  Check: Stats: look at Bright spots: they sit above the four headline numbers
- **Just for fun**: a switch at the top of Stats shows only the bright
  spots, challenges, personal records and game night awards -- no win
  rates. It remembers which you picked.
  Check: Stats: tap Just for fun: the win-rate tiles go and the fun cards show
- **Personal records**: biggest comeback, fastest win, longest game (in
  turns and at the table), most knockouts in a game and in a night, most
  games in a night, longest win streak, most life gained, most played deck.
  Check: Stats: tap Just for fun: Personal records shows your biggest comeback
- **Monthly challenges**: nine a month, three by three, worked out from
  your games (play 8 games, win from the first seat, play all five
  colors...); a row, column or diagonal done is a bingo. New ones on the
  1st. In Just for fun and on Achievements.
  Check: Stats > Achievements: the month's nine challenges sit at the top
- **Game night awards**: for the whole pod, from a night's games -- the
  champion, your knockouts, the closest call, the wildest game, the
  marathon and the speedrun, the biggest life gain, the most fun. Home
  shows tonight's, with Share the awards for the group chat; Just for fun
  steps back through earlier nights.
  Check: Home: after logging a game today, Game night awards shows the champion
- **A recap after logging**: the Game logged card says which game it was
  for the deck, firsts (first win with the deck, first win against
  someone, first win in a pod that big), a streak, your knockouts, and
  any record it set.
  Check: Game setup: Start Game, then Log Game: the Game logged card shows a recap
- **Try this**: a card on Home with a different part of the app each day
  (mulligan practice, Momir, random themes, the case view...) and Go
  there; Another, Not for me, or Hide tips.
  Check: Home: tap Another on Try this: a different tip shows

## 1.115.0 -- 2026-10-18 -- Colors covered; empty cases
Summary: What's packed shows what your decks cover, a case can go in the case view before any deck does, and the held deck's price sits beside its name.

### New features
- **What the packed decks cover**: What's packed shows the five colors
  (how many decks bring each, and which are missing), the decks' color
  identities (mono, two-color... and which: Simic, Esper), their tiers,
  their strategies and how they've played -- games and wins between
  them, and any never played or not played in three months.
  Check: Loadout > What's packed: pack decks: Colors shows which colors they cover and which are missing
- **Add an empty case**: **Add a case** under the case view puts one of
  your cases in it with nothing inside, to fill from its + slots or by
  dragging decks in; with nothing packed yet, Step 5 offers **Start with
  a case**. An empty case has an x to put it away, and saving the
  loadout keeps it.
  Check: Loadout > Case view: tap a case under Add a case: it shows empty with its + slots

### Enhancements
- **Price on the held deck**: holding a deck in the case view shows its
  price beside its name (No price when it has none, Proxy for a proxy),
  read even when it's typed with a $ or a comma.
  Check: Loadout > Case view: press and hold a deck: its price is beside its name

## 1.114.0 -- 2026-10-18 -- The held deck at a glance
Summary: Holding a deck in the case view shows a small overview of it at the top of the screen.

### New features
- **Held deck overview**: press and hold a deck in the case view and a
  small card comes up at the top of the screen with what you'd want to
  know while deciding where it goes: its picture, name, commander and
  strategy, colors, bracket, tier, price and deck box, its record (games,
  wins, win rate, when it last played) and the case it's in. It goes
  when you let go, and drops under it still land. Loadout's and Home
  layout's case views both have it.
  Check: Loadout > Case view: press and hold a deck: its overview is at the top until you let go

## 1.113.1 -- 2026-10-17 -- Stats counts fixed; full cards in the case view
Summary: The case view shows each deck as its whole card, and four Statistics numbers that were off now add up.

### Enhancements
- **Full cards in the case view**: each deck in the case view is its
  commander's whole card, sharp, instead of a cropped corner of the art
  -- your own picture shows in full too. Decks on their side in a case
  (the Peak Design, a Stanley's bottom row) show the card turned with
  them.
  Check: Loadout > Case view: look at the decks: each is the whole card, and sideways slots show it turned

### Bug fixes
- **Game count in the Statistics header**: it counted practice and
  other not-counted games too, so it didn't match the tiles below; it
  now shows the counted games, with the others noted beside it.
  Check: Stats: read the header: the count matches Overview's games, with "+N practice, not counted" when there are some
- **Seat par per seat**: the turn order table's expected win rate is
  now worked out from the pods each seat was played in, not one average
  for every seat.
  Check: Stats: look at Turn order: seats played in pods of different sizes show different pars
- **2HG in Venues**: Two-Headed Giant games had their own tile in Pods
  but counted as 4-player pods in Venues' Pod & Commander Stats; they
  have their own 2HG tile there now, with a par of 50%.
  Check: Stats: open Venues: 2HG games show on a 2HG tile, not in 4P POD
- **Damage counted down to 0**: the damage profile counted every point
  of life lost, even far below 0 (a player knocked to -6,000 read as
  6,000 damage), which made its averages huge. It now counts life lost
  down to 0, and its labels say what it is -- life lost by the table and
  by you, from the life log.
  Check: Stats: look at the damage profile: the averages are game-sized and the note explains them

## 1.113.0 -- 2026-10-17 -- Deck select in five more places
Summary: The fighter-select deck carousel now also does Random deck, picking decks in Game setup, Random loadout's Swap, browsing Suggest a Deck and browsing Other commanders.

### New features
- **Random deck spins**: Decks' **Random deck** and **Random unplayed
  deck** open deck select spinning and stop on one; **Open** opens it,
  or spin again, or move on by hand.
  Check: Decks: Random deck; the carousel spins, stops, and Open opens that deck
- **Deck select in Game setup**: **Deck select** beside Your deck picks
  yours (tonight's loadout first), and beside each seat's loaner it picks
  the deck you lend them -- pass the phone round, swipe, spin the dice,
  Select. Decks already taken at the table are left out.
  Check: Game setup: Deck select by Your deck; pick one and it's your deck; do the same for a seat's loaner
- **Swap picks the replacement**: in the Random loadout results, **Swap**
  opens deck select on the decks that could take that slot, best fits
  first by your settings; the dice still rolls one at random.
  Check: Loadout > Random > Generate, then Swap on a deck; pick another and it takes that deck's place
- **Browse Suggest a Deck**: **Browse** shows the top suggestions in deck
  select, each with why (a new bracket or themes, its win rate, time on
  the shelf, record against tonight's pod); **Pack it** asks which case.
  Check: Loadout > Suggest a Deck > Browse; Pack it, pick a case; the deck is in it
- **Other commanders as cards**: on a deck's page, **Browse as cards**
  shows the candidate commanders as full cards with their fit score;
  **See why** opens that one's reasons.
  Check: A deck's page > Decklist > Other commanders (after Find other commanders) > Browse as cards

## 1.112.0 -- 2026-10-17 -- Randomize, decks that stay put, framed pictures
Summary: Deck select has a dice that spins the carousel to a random deck; in the case view decks keep their slots and a deck let go outside the cases comes out; and your own deck picture is framed by you and stays sharp.

### New features
- **Frame your own deck picture**: after choosing a picture with **Own
  picture**, drag it and pinch (or slide) to zoom until the square shows
  the part you want -- a face, the whole figure -- with a preview as a
  square, a deck box and a wide tile. A picture shaped like a card starts
  framed on its art. **Frame picture** changes it later. The whole
  picture is kept for the full view and deck select's spotlight.
  Check: A deck's page > Own picture: pick a card picture; frame it on the art and Use this; the deck shows that square, sharp
- **Randomize**: the dice beside Select in deck select spins the
  carousel along the decks, slowing as it goes, and stops on one at
  random -- then Select it, spin again, or move on by hand. With
  animations off it lands straight away. (Pick from the list is now
  **From the list**, so the three buttons fit a phone.)
  Check: Loadout > Case view: tap + in an empty slot, then the dice; the carousel spins and stops on a deck
- **Drag a deck out to remove it**: in the case view, hold a deck and let
  go anywhere outside the cases and it comes out of its case (it says
  **Take out** while you're outside one). Undo puts it back in its slot.
  Check: Loadout > Case view: hold a deck, drag it above the cases, let go; it's out, and Undo puts it back

### Enhancements
- **Deck pictures are sharp**: small deck pictures were a 72px copy
  blown up; they now use the art Scryfall has (or your framed picture,
  saved at 720px), keeping the small copy for when you're offline.
  Your own picture used to show its middle square in small pictures and
  the whole thing in large ones; now every place shows the square you
  framed.
  Check: Decks: the deck pictures in the list are crisp on a phone
- **Decks stay in their slots**: taking a deck out of a case leaves its
  slot empty instead of sliding every deck after it along. The next deck
  you add fills the first empty slot, one dropped on an empty slot goes
  there, a swap takes the slot of the deck it replaces, and a saved
  loadout keeps where everything sits.
  Check: Loadout > Case view: take the second deck out (Step 3 or drag it out); the others don't move, and the next deck added fills its slot

## 1.111.0 -- 2026-10-17 -- Deck select, swaps from the case view, cuts and adds
Summary: An empty slot in the case view opens a fighter-select style deck picker; hold a deck and drop it on the swap zone to replace it; and each case in Step 3 suggests three cuts and three adds with a quick swap.

### New features
- **Deck select**: in Loadout's case view, an empty slot has a **+**.
  It opens a dark stage with a spotlight on one deck (drawn in its deck
  box, the commander's full card sharp at full size, as through the box's
  window) and the next ones either side, turned away into the dark. Swipe or
  use the arrows to move; the name plate gives its commander, bracket,
  box, record and why it would suit tonight. **Select** puts it in that
  slot. The decks are those Step 3 shows that aren't packed, in Step 3's
  order when its filters, Show or sort are set, otherwise shuffled. The
  deck floats a little, the light breathes and dust drifts in the beam;
  choosing one makes it flare. Animations follow your Look setting.
  **Pick from the list** goes to Step 3 with that case open.
  Check: Loadout > What's packed > Case view: tap + in an empty slot, swipe to another deck, Select; it's in that slot
- **Swap from the case view**: hold a deck in the case view and a **Swap
  for another deck** zone comes up at the bottom of the screen. Drop it
  there: it comes out, deck select opens for its slot, and what you pick
  goes where it was (Undo swaps them back; closing puts it back). A
  button under the case view goes to Step 3's list.
  Check: Loadout > Case view: hold a deck, drag it to the swap zone, pick another; it takes the same slot
- **Cuts and adds**: each open case in Step 3 lists **Could leave** (the
  three decks there that bring the least) and **Could come** (the three
  best left at home), each with why: a bracket, themes or colors nothing
  else packed has, how long since it was played, its win rate and record
  against tonight's pod, your favorites -- or that it repeats what's
  packed, shares a commander, or lost its last four. The adds follow Step
  3's filters. Tap a cut, then **Swap** on an add to trade them (the
  case's limits still apply; Undo puts it back); **Add** packs one when
  there's room. Tap the heading to fold it away.
  Check: Loadout > Step 3: open a case with decks in it; tap the second cut, then Swap on the first add; the two trade places, and Undo puts them back

## 1.110.1 -- 2026-10-17 -- Picking decks holds still; decks in their box colors
Summary: Picking a deck in Step 3 no longer makes the page jump, and the case view draws each deck inside its deck box's color.

### Enhancements
- **Decks in their box colors**: in the case view (Loadout's What's packed
  and Home storage), each deck is drawn as its deck box -- purple, blue, a
  Boulder or a box of your own -- with the commander showing through the
  window. A deck with no box shows just its art.
  Check: Loadout > What's packed > Case view: a deck in a purple box has a purple frame, a Boulder its Boulder color

### Bug fixes
- **The page jumped when you picked a deck**: in Step 3, picking a deck
  adds it to the case's row above the deck chips, which pushed the chip
  you tapped (and everything under it) down the screen. The page now
  scrolls by the same amount, so what you tapped stays under your finger.
  Check: Loadout > Step 3: open a case and pick three decks in a row; the chip you tap doesn't move

## 1.110.0 -- 2026-10-17 -- Mulligan practice deals the actual cards
Summary: Mulligan practice shows each card's picture instead of its name, in the hand and in the result.

### New features
- **The actual cards in mulligan practice**: the hand is dealt as card
  pictures from Scryfall, four to a row on a phone (seven across on a
  wider screen). The whole list is looked up once, when the first hand
  is dealt, so new hands and mulligans show straight away. A card picked
  for the bottom greys out and says BOTTOM; the small i on it opens its
  details. After a keep, the kept hand and the turn 1 to 3 draws show as
  small pictures (tap one to read it). Offline, or until the pictures
  arrive, the names show as before.
  Check: A deck's page > Practice > Mulligan practice: Deal an opening hand; seven card pictures, mulligan twice and one picked for the bottom says BOTTOM

## 1.109.0 -- 2026-10-17 -- Peak Design holds 4 accessories; accessory limits per case
Summary: The Peak Design 7L holds up to 4 accessories plus a strapped playmat, and you can set how many accessories any built-in case holds.

### New features
- **Accessory limits per case**: Settings > Decks > Your cases > Built-in
  cases now has an Accessories count with - and + on each case (not the
  DeWalts, whose accessories take a deck slot, and not a redrawn case,
  which sets it in the designer). Loadout stops you at that number.
  Default puts it back to how the case ships.
  Check: Settings > Decks > Your cases: set Stanley Case 1's Accessories to 1; in Loadout a second accessory in it is refused

### Enhancements
- **Peak Design 7L holds more**: it held 1 accessory at most if you
  redrew it. It now holds up to 4 accessories, plus one playmat strapped
  to the outside (Playmat Tube -- Strapped, or any playmat whose name or
  note says strapped or bungee). A playmat in a tube is refused, and Loadout
  says why. Its own token box and deck-slot limits still apply.
  Check: Loadout: put 4 accessories and the strapped playmat in the Peak Design 7L; a fifth accessory and a tube playmat are refused

## 1.108.3 -- 2026-10-16 -- Every seat's controls fit on a phone
Summary: On a phone the seat-menu button and the seat chip no longer run off the edge of sideways seats, for any number of players.

### Bug fixes
- **Controls cut off on sideways seats**: on a phone, the seat chip's
  own row pushed the seat-menu button off the edge of sideways seats (4
  and 6 players), and at 5 and 6 players that button didn't fit even
  before the chip. The chip now shares the seat-menu button's row; on
  narrow sideways seats (5 and 6 players) and seats whose controls sit in
  one row, it sits beside the life number instead, and the seat-menu
  button joins the second row of buttons. Checked for 3 to 6 players with
  the phase bar, turn clock, threat read and table answers on and off.
  Check: Game: start a 6-player game on a phone; every seat shows its chip and its seat-menu button in full

## 1.108.2 -- 2026-10-16 -- Seat chip names who in full
Summary: In commander damage mode the seat chip reads "Cmdr damage" over "from <player>", in full, instead of cutting the name off.

### Bug fixes
- **Commander damage chip was cut off**: "Cmdr Player 2" didn't fit the
  chip and ended in "...". The chip is now two lines (the kind, then
  "from <player>") and a little wider, the same size in every mode so it
  still doesn't move.
  Check: Game: tap a seat's chip twice (Cmdr damage); it reads "from" and the player's whole name

## 1.108.1 -- 2026-10-16 -- Seat chip: easier to hit, with icons
Summary: The seat chip is bigger, stays put, takes near misses, and shows an icon with each name.

### Enhancements
- **Easier to hit**: the seat chip is bigger, keeps one width and one
  place in every mode (it used to move as its name or the count beside
  it changed, so the next tap could land on the tile), and a margin
  round it takes a near miss instead of the tile.
  Check: Game: game menu > Display > Tap tiles for life on > tap just beside a seat's chip a few times; it cycles and the life doesn't change
- **Icons**: a heart for Life, a drop for Poison, crossed swords for
  commander damage, a bolt for Energy, a star for Experience and a pin
  for your own counters, on the chip and in its hold list.
  Check: Game: tap a seat's chip; each mode shows its icon beside its name

## 1.108.0 -- 2026-10-16 -- The seat chip: poison and commander damage on the +/- buttons
Summary: A chip beside each seat's life switches what its +/- buttons change: life, poison, commander damage from each opponent, or a counter.

### New features
- **Seat chip**: on the table, the chip beside each seat's life (Life)
  sets what its -5 / -1 / +1 / +5 change. Tap it for Poison, then
  commander damage from each opponent's commander, then any counter on
  the seat; hold it for the whole list. The big number shows that count
  (out of 10 or 21) with the life beside it; commander damage takes the
  life too, and it all goes in the game log and undoes as usual.
  Check: Game: start a game > tap a seat's Life chip > Poison > +1; the seat shows 1/10 and its life is unchanged
- **Back to Life on its own**: by default a seat goes back to Life after
  8 seconds without a tap or when the turn passes, whichever comes
  first; game menu > Display > Seat chip goes back to Life also offers
  only when the turn passes, or never.
  Check: Game: game menu > Display > Seat chip goes back to Life > When the turn passes; set a seat to Poison, pass the turn; it reads Life again

## 1.107.1 -- 2026-10-15 -- Worker controls only with your token
Summary: Without your Worker token (a friend using the link) the controls that need the Worker are hidden instead of shown and refused.

### Enhancements
- **Hidden without the token**: on a device without your Worker token,
  Run checks has no Moxfield, combo, EDHREC or Claude steps; a deck has
  no Write notes with Claude, no Update from a primer and no Starting
  points (unless read before); the wishlist has no Read wishlist; and
  Settings > App has no AI features switch. Everything that works
  without the Worker stays. Worker and sync stays so your own new
  device can connect.
  Check: Settings: Data > Worker and sync > clear the token on a test device > Decks > a deck; no Write notes with Claude or Update from a primer

## 1.107.0 -- 2026-10-15 -- The primer goes in by itself
Summary: Update from a primer fills in the primer for you, the side menu is reordered, and the tour no longer shows your own To do board.

### New features
- **The primer goes in by itself**: in Update from a primer, an
  Archidekt link is read as soon as you pick it. For Moxfield (apps
  can't read its Primer tab), open the primer, copy it and come back:
  the box fills from your clipboard. Paste from clipboard does the same
  in one tap where the browser asks first.
  Check: Decks: a deck with a Moxfield link > Overview > Details > Update from a primer > open the primer > copy the primer > come back; the box is filled

### Enhancements
- **Side menu order**: Decks, Lists, Loadout, Playgroup, Game,
  History, Stats, To do, Settings (Playgroup under Loadout, To do just
  above Settings).
  Check: Home: open the side menu; Playgroup is under Loadout and To do is just above Settings

### Bug fixes
- **Your To do board showed in the tour**: the tour's made-up world
  left out the To do board, so your own cards showed on its To do page.
  Every store of yours the sample doesn't fill now starts empty in the
  tour, and your board is untouched after it.
  Check: Settings: App > Take the tour > To do; none of your own cards are there

## 1.106.0 -- 2026-10-15 -- One set of filters for History and Stats
Summary: History and Stats share one Filters panel, and you can filter by who played, venue and everything else a season is made of.

### New features
- **Who played**: Filters on History and Stats has a chip for each
  opponent you've played with. Pick one or more; with two or more,
  choose All of them there or Any of them there.
  Check: History: Filters > Who played > pick two people > All of them there, then Any of them there; the count changes
- **More you can filter on**: venue, pod size and played-at bracket are
  chips you can pick several of, and both pages also have dates (with
  Pick dates for a custom range), format, house rules, venue type,
  loadout and game tags.
  Check: Stats: Filters > Venue > pick two venues; the games from both show

### Enhancements
- **The same filters on both pages**: History and Stats use one Filters
  panel with the same controls in the same order, and they share what's
  set. A filter put on History is on Stats too, and Clear filters on
  either page clears both. Placement and Show stay History's own.
  Check: History: Filters > Venue > pick one > Stats: Filtered by Venue shows and the same chip is picked
- **Filters to a season**: Save as season (Stats) and These filters
  (History's + New season) both carry every filter, now including who
  played and venues.
  Check: Stats: Filters > Who played > pick someone > Save as season > Save as season; the season's Who played has them

## 1.105.0 -- 2026-10-15 -- Settings in the Home hand
Summary: The hand of cards on Home has a Settings card.

### New features
- **Settings card on Home**: the fanned hand of page cards on Home has a
  seventh card, Settings (look, play defaults, data and backups). Lift
  it and tap again to open Settings; it shuffles with the rest. Simple
  mode's plain tiles stay as they were.
  Check: Home: the hand has a Settings card; tap it, then tap again, and Settings opens

## 1.104.0 -- 2026-10-15 -- A switch for AI features
Summary: Settings > App > AI features turns off every button that asks Claude, without removing anything Claude already wrote.

### New features
- **AI features switch**: Settings > App has an AI features switch (on
  by default). Off hides Write notes with Claude, Update from a primer,
  Categorize with AI and the With Claude group on a deck's list, Run
  checks' Claude steps, How it usually plays on a starting point, the
  prep sheet's Ask Claude and the For a Claude chat export, and the
  nightly refresh categorizes by the rules only. Notes, breakdowns,
  prep reads and waiting suggestions Claude already wrote stay and still
  show. It's kept with your settings, so synced devices follow it.
  Check: Settings: App > AI features off > a deck's Overview > Details has no Write notes with Claude or Update from a primer, and its notes are still there

## 1.103.1 -- 2026-10-15 -- A Moxfield primer is the Primer tab
Summary: Reading a primer from a Moxfield link only ever got the deck's one-line description; the app now opens the deck's Primer tab for you to copy instead.

### Bug fixes
- **Moxfield primers**: Read the primer from Moxfield fetched the deck's
  short description (the line under its title), not its Primer tab --
  Moxfield's API gives apps no Primer tab. For a Moxfield link the
  primer panel now says so and its open the primer link goes straight
  to that deck's Primer tab, to copy and paste. Archidekt links are
  still read directly.
  Check: Decks: a deck with a Moxfield link > Overview > Details > Update from a primer > Moxfield: open the primer opens the deck's Primer tab

## 1.103.0 -- 2026-10-15 -- Build a season from History
Summary: Seasons can be made on History too, starting from the filters you have on.

### New features
- **New season on History**: the SEASON row on History has + New season
  (there even before your first season). Start from These filters (the
  dates, pod size, format, played-at bracket, venue, house rule and deck
  filters on History) or the usual starting points, set it up in the
  same builder as Stats, and Save as season: it's picked on History and
  Stats straight away.
  Check: History: Filters > Pod size 4 > SEASON > + New season > These filters > Save as season: the season is picked and History shows the same games

## 1.102.1 -- 2026-10-15 -- Titles scroll on the card you lift
Summary: A long card name on Home scrolls only once you lift that card from the hand, and runs all the way through in a loop.

### Bug fixes
- **Only the lifted card, all the way through**: long card names on Home
  scrolled on every card in the hand, and only far enough to show their
  end. Now a name scrolls only on the card you've lifted: after a short
  pause the whole name runs left and comes round again, the name
  following itself with a gap, resting a moment at the start of each
  cycle. Put the card back and it stops.
  Check: Home: lift a card with a long name (Pack a loadout on a narrow phone): its name runs through and loops; the others stay still

## 1.102.0 -- 2026-10-15 -- Simple mode your color, and titles that scroll
Summary: Simple mode gets its plain Home tiles back, a choice of nine colors and no table jokes; card titles too long for their bar scroll to show the rest.

### New features
- **Simple mode color**: Settings > Look, in the Simple mode box, picks
  Simple mode's color from nine (teal, blue, indigo, purple, rose, red,
  orange, gold, green). The whole app follows at once; it's kept on this
  device.
  Check: Settings: Look with Simple mode on > SIMPLE MODE COLOR > Rose: the app turns rose

### Enhancements
- **Long card titles scroll**: on Home, a card whose name is too long for
  its title bar waits a moment, slides left to show the rest, holds, and
  starts over. Names that fit stay still; with animations off they're cut
  with "..." as before.
  Check: Home: a card with a long name (Pack a loadout on a narrow phone): after a moment the name slides left
- **Simple mode Home tiles**: in Simple mode Home shows its page cards as
  the plain two-column tiles again, still and in their usual order,
  instead of the fanned hand.
  Check: Home with Simple mode on: plain tiles (Start a game, Decks, History, Stats), no hand

### Bug fixes
- **No table jokes in Simple mode**: the "durdle" remarks after two quiet
  rounds showed in Simple mode. They now follow the easter eggs switch
  like the table's other jokes, so Simple mode never shows them.
  Check: Game: Simple mode on, pass five turns with nothing happening: no durdle remark

## 1.101.0 -- 2026-10-15 -- Seasons on History and Stats
Summary: Pick a season on History or Stats and both pages show just that season's games; the game list's icon buttons are centered.

### New features
- **One season across History and Stats**: once you have a season, SEASON
  chips sit at the top of History and of Stats. Pick one and both pages
  narrow to that season's games (every Stats tab, the History list and
  its counts), with a line saying how many; All games on either page
  clears it on both.
  Check: History: SEASON > a season: the list narrows; then Stats: the same season is picked and the title says "in <season>"

### Bug fixes
- **Icons centered on a player's buttons**: in the game's list view the
  monarch, initiative, dungeon and Momir buttons were different sizes
  with their icons off center (the monarch a small text crown). They are
  now one square size with the icon centered, the crown drawn like the
  others.
  Check: Game: list view, a player's row: the crown, swords and door buttons are the same size, icons centered

## 1.100.0 -- 2026-10-15 -- Your own links, and notes from a primer
Summary: Give a deck its own named links (buttons beside Moxfield and EDHREC), and update its game plan and notes from a primer read from one of those links or pasted in, with cards the list doesn't run kept out.

### New features
- **Your own links on a deck**: Edit > Basics > OTHER LINKS takes up to
  eight more links, each with the name you want on its button (blank
  takes the site's name). They sit beside Moxfield > and EDHREC > at the
  top of the deck page, and Full details lists them.
  Check: Decks: a deck > Edit > Basics > + Add a link, name it, Save: a button with that name sits beside Moxfield >
- **Update the notes from a primer**: Overview > Details > Update from a
  primer. Pick where it comes from: a Moxfield or Archidekt link is read
  through the Worker; for any other link, open it and paste the primer;
  or just paste one. Claude writes the game plan, strategy, bracket,
  1v1 or multiplayer and Two-Headed Giant notes and themes from it: blank
  notes are filled, and changes to yours come up under FROM THE PRIMER to
  use or keep (or use all).
  Check: Decks: a deck with a Moxfield link > Overview > Details > Update from a primer > Read the primer from Moxfield > Update notes from this primer: blank notes fill and FROM THE PRIMER lists the rest
- **Primer cards your list doesn't run**: a primer is often written for
  another version of a deck. Before anything is written the panel names
  the cards it mentions that your list lacks; Claude leaves them out, any
  that slip into a note are flagged on it, and the deck remembers them
  ("Last primer ... names N cards not in your list").
  Check: Decks: a deck > Update from a primer, paste one naming a card not in the list: it says which card isn't in your list

## 1.99.3 -- 2026-10-15 -- Info stays on the right
Summary: On the Decks list, every row's Info button sits on the right, even when the row's details wrap.

### Bug fixes
- **Info button on the right on every row**: when a deck's details line
  (last played, unplayed, EDHREC rank, list, loaded) ran long, Info
  wrapped to the left on a line of its own. The details now wrap in their
  own space and Info keeps to the right on every row.
  Check: Decks: a deck with a long details line (last played and an EDHREC rank): Info is on the right like the others

## 1.99.2 -- 2026-10-15 -- Game plans you can skim
Summary: A deck's game plan reads in sections instead of one dense block.

### Enhancements
- **Game plan in sections**: on a deck's page, a game plan written as
  labelled lines (GOAL:, EARLY:, MID:, HOW IT WINS:, WATCH OUT: ...) shows
  each label as a small heading with its text under it and a gap between
  sections, and long clauses split at "; " or " -- " go on lines of their
  own. Labels run together in one paragraph are split too; a plan with no
  labels shows as written.
  Check: Decks: a deck with a game plan > Overview > GAME PLAN: each section has its own heading and lines

## 1.99.1 -- 2026-10-14 -- When checks last ran
Summary: Beside Run checks, a line says when the last run was and whether it finished.

### Enhancements
- **Last run, and how it ended**: beside Run checks (Settings > Decks >
  Deck upkeep, and Decks > Tools) a line says when the last run started
  and how it went: finished (with how many decks and how long it took;
  amber with how many checks in it didn't finish), stopped (and after how
  many decks), or didn't finish when the app closed part way or the run
  failed. The run's record is written as it goes, so a run cut short
  still says how far it got.
  Check: Decks: Tools: the line beside Run checks says when it last ran and that it finished
  Check: Settings: Decks > Deck upkeep > Run checks, then Stop part way: the line says stopped after N of M decks

## 1.99.0 -- 2026-10-14 -- What EDHREC knows now
Summary: EDHREC's redesign carries much more about each commander; the deck page now shows it (brackets, curve, card types, popularity, combos, similar commanders, budget and expensive builds, partners), cards show how often they're played, Decks has trending commanders, and the Game Changers list comes from EDHREC. The pages EDHREC stopped serving are replaced by ones it still does.

### New features
- **EDHREC on the deck page**: a new **EDHREC** fold (after Details) shows
  how the commander's decks spread across Brackets 1 to 5 with yours
  marked, this list's mana curve and card types beside EDHREC's average
  deck, the commander's rank over two years and decks saved in the last
  30 days, EDHREC's most played combos for it (in this list, one card
  away, or not here), similar commanders and the budget / typical /
  expensive split. Run checks (the EDHREC step) fills it in.
  Check: Decks: a deck with a list > Run checks with EDHREC on, then its page > EDHREC: brackets, curve, types, popularity and combos show
- **Budget, expensive and partner builds**: **Budget version** and
  **Expensive version** in the EDHREC fold show those builds' top cards
  this list doesn't run; **Other partners** lists the commanders it pairs
  with most, each linking to EDHREC's page for the pair.
  Check: Decks: a deck's page > EDHREC > Budget version: a list of cards you don't run
- **How often a card is played**: a card's details (tap a card name) say,
  with the Worker on, how many of the decks that could play it do, and
  its salt.
  Check: Decks: a deck's page > Decklist > tap Sol Ring: a line says what share of decks play it
- **Trending on EDHREC**: Decks > Tools lists the commanders rising this
  week, over the past two years, or from the newest set. The ones you
  have say so; **Add as idea** files one as a deck idea.
  Check: Decks: Tools > Trending on EDHREC > This week: a list of commanders, with yours marked

### Enhancements
- **Game Changers from EDHREC**: Run checks (the card check, Worker on)
  fetches EDHREC's current Game Changers list, so the bracket check keeps
  up when the list changes without waiting for an app update. Decklist
  says which date the list is from.
  Check: Decks: a deck's page > Decklist: the line under the bracket check says the Game Changers list is from EDHREC with today's date

### Bug fixes
- **Partner decks' EDHREC links**: a partner deck's EDHREC link and
  comparison use EDHREC's own order for the pair, so they land on the
  right page whichever partner is listed first.
  Check: Decks: a partner deck > EDHREC >: the pair's EDHREC page opens
- **What EDHREC stopped serving**: EDHREC's redesign took down the pages
  for similar commanders, combos by color and the Game Changers list.
  The app now reads similar commanders from the commander's own page,
  combos from the commander's combos page, and Game Changers from
  EDHREC's top list. A commander EDHREC has no page for is counted as
  such in Run checks, not as a failed check.
  Check: Decks: Tools > Run checks with EDHREC on: no EDHREC failures for commanders EDHREC lacks; the summary counts them apart

## 1.98.6 -- 2026-10-14 -- Moxfield at its own pace
Summary: Moxfield allows one request a second; Run checks now waits a little longer than that between decks, and the Worker spaces its own Moxfield calls too.

### Bug fixes
- **One Moxfield call a second**: Run checks asked Moxfield for the next
  deck 0.7 seconds after the last, faster than the once a second Moxfield
  allows (it bans the address of anything faster). It now waits 1.25
  seconds, and the Worker holds any Moxfield call that comes less than 1.1
  seconds after its last. A full pull of 95 decks takes about two minutes.
  Check: Settings: Decks > Deck upkeep > Run checks with Moxfield on: the Moxfield part counts the decks at about one a second

## 1.98.5 -- 2026-10-14 -- When Moxfield says no
Summary: Moxfield is refusing requests from servers, the Worker included; the app now says so once with what to do, instead of failing every deck, and the Worker is ready for Moxfield's approval.

### Bug fixes
- **Moxfield blocking the Worker**: Moxfield's bot protection now refuses
  the Worker's requests, so every deck with a Moxfield link failed one by
  one in Run checks. Run checks now asks once, says in one line that
  Moxfield is blocking the Worker and what to do (paste the list from
  Moxfield's Export), and carries on with the other checks. A deck page's
  Moxfield import and the wishlist's Read say the same.
  Check: Settings: Decks > Deck upkeep > Run checks with Moxfield on: one line says Moxfield is blocking the Worker, and the rest of the checks finish
- **Ready for Moxfield's approval**: once Moxfield approves the app for API
  access, the identifier they give goes in the Worker's
  \`MOXFIELD_USER_AGENT\` setting (Cloudflare: Worker > Settings > Variables
  and Secrets) and pulls work again with no app change.
  Check: Settings: Decks > Deck upkeep > Run checks with Moxfield on, after setting MOXFIELD_USER_AGENT: lists pull from Moxfield

## 1.98.4 -- 2026-10-14 -- Sample decks say where they came from again
Summary: Starting points' sample decks link to their Moxfield or Archidekt list again; EDHREC stopped answering the old way of asking.

### Bug fixes
- **Sample deck sources**: EDHREC's deck previews stopped answering the
  Worker, so the sample decks under Starting points lost their link to the
  list on Moxfield, Archidekt and the like (the EDHREC link still worked).
  The Worker now reads the source from the preview's page.
  Check: Decks: a deck with a commander and no list > Overview > Starting points: the sample decks link to their Moxfield or Archidekt list

## 1.98.3 -- 2026-10-14 -- EDHREC lookups for partner pairs
Summary: EDHREC lookups now work for partner pairs entered in either order, and a commander EDHREC has no page for no longer counts as a failed check.

### Bug fixes
- **Partner pairs on EDHREC**: EDHREC files a partner pair under one order
  of the two names and now answers the other order with a pointer to it,
  which the lookups didn't follow, so the EDHREC comparison, deck count,
  rank and starting points came back empty for those decks. They follow it
  now, in Run checks, a deck page's checks and the nightly refresh.
  Check: Decks: a partner deck (e.g. Tymna first, Thrasios second) > Run checks with EDHREC on: its EDHREC comparison fills in
- **A commander EDHREC doesn't have**: EDHREC now answers "access denied"
  for a page it doesn't have, which the Worker reported as an EDHREC error
  and Run checks listed under Did not finish. It now counts as no page, and
  the summary says how many commanders EDHREC has no page for.
  Check: Settings: Decks > Deck upkeep > Run checks with EDHREC on a deck whose commander is brand new: the summary says EDHREC has no page for it, with no EDHREC failure

## 1.98.2 -- 2026-10-14 -- Games on the right list version
Summary: Every game now counts for the decklist version it was played on, even when it was logged late or before versions existed; History shows which, and you can pick another.

### Enhancements
- **Which list, in History**: an opened game says which version of the
  deck's list it was played on ("List: v2 (from 2026-08-11)") and, when the
  app worked it out from the game's date, says so.
  Check: History: open a game with a deck whose list has changed: a "List:" line names the version
- **Pick the version**: Edit a game and choose its **List version**; **Auto**
  goes back to the game's own record or its date.
  Check: History: Edit a game > List version > pick another and Save: the game says "picked by you" and the deck page's BY LIST VERSION moves it

### Bug fixes
- **Games without a version counted for the current list**: games logged
  before versions existed, or imported from a friend, all went to today's
  list. They now count for the version in use on their date.
  Check: Decks: a deck with an old game and a changed list > Decklist > BY LIST VERSION: the old game is on the version of its day
- **Backdated games**: a game logged days later, after the list changed, was
  credited to the new list. A game dated before its version began goes by
  its date.
  Check: History: log a game with an earlier date after editing the list: its List line shows the earlier version, by the game's date
- **Versions that drop off**: only 15 earlier versions are kept, and games on
  an older one moved to the current list. They now show as **Older
  versions**.
  Check: Decks: a deck with more than 15 list changes > Decklist > BY LIST VERSION: games on the oldest lists sit under Older versions
- **Re-saving the same list moved its date**: a Moxfield pull of an
  unchanged list made that version look new. A version now keeps the day
  it began.
  Check: Decks: pull an unchanged list from Moxfield, later change the list > Decklist > BY LIST VERSION: the earlier version shows the day it began, not the day of the pull

## 1.98.1 -- 2026-10-13 -- Run checks shows its progress
Summary: Run checks now shows a progress panel instead of a single line: how far along it is, which part and deck it's on, about how long is left, and what it's found so far.

### Enhancements
- **Progress panel**: while Run checks runs (Settings > Decks > Deck upkeep),
  a panel shows the whole run as a percentage and a bar, the parts it goes
  through -- Moxfield, Decks, Wishlist prices, Collection -- ticked off as
  they finish, the deck it's on with a dot for each of its checks, how long
  it's been and about how long the current part has left, and a tally so far
  (priced, categorized, combo searches and more). Big card lookups move the
  bar along as their batches finish.
  Check: Settings: Decks > Deck upkeep > Run checks: the panel counts the decks (1/3, 2/3 ...), names the deck and its check, and the percentage climbs to the end
- **Deck page checks**: a deck page's own Run checks shows a bar under the
  button with which of the deck's checks is running ("2 of 3: other
  commanders").
  Check: Decks: open a deck with a list, Overview > CHECKS > Run checks: a bar under the button counts its checks

## 1.98.0 -- 2026-10-13 -- Redraw the built-in cases
Summary: The built-in cases can be redrawn in Settings > Decks > Your cases, so a DeWalt, Stanley, Dungeon or any other case counts and looks the way yours really is; Back to original undoes it.

### New features
- **Redraw a built-in case**: Settings > Decks > Your cases > **Built-in
  cases** lists every case the app comes with, drawn small. **Redraw** opens
  the designer on that case as it ships; change the rows, columns and cells
  and **Save case**. From then on the case's packing limits, the case view
  and Case storage follow your drawing, and it's marked **redrawn**. Its own
  special rules (a Stanley's insert, the Peak Design's pools, the Quiver's
  mix) step aside for the design.
  Check: Settings: Decks > Your cases > Built-in cases > DeWalt Case 1 > Redraw, take a row away and save: it's marked redrawn; pack two decks in it and the case view shows 2/3 in your layout
- **Back to original**: Redraw a redrawn case and tap **Back to original** to
  put it back as shipped.
  Check: Settings: Decks > Your cases > Built-in cases > a redrawn case > Redraw > Back to original: the redrawn mark goes and the case view is drawn as before

### Bug fixes
- **Printed-deck room outside the Stanleys**: the room for printed decks
  (Deck Boulders and other thick boxes) used a Stanley's 12 for every case,
  so a Deck Dungeon took 10 printed decks instead of 8. Only the Stanleys use
  it now.
  Check: Loadout: pack 9 printed decks into the Deck Dungeon: the ninth is refused

## 1.97.0 -- 2026-10-13 -- Your own cases, laid out your way
Summary: Add cases of your own in Settings > Decks > Your cases and design each one on a grid; they work everywhere the built-in cases do.

### New features
- **Add a case**: Settings > Decks > **Your cases** > **+ Add a case**. Name
  it, set rows and columns, and tap cells to place a deck, a deck lying
  sideways, a small square (dice, a life clicker) or nothing; start from a
  DeWalt- or Stanley-like shape if you like. Say whether accessories take a
  deck slot or how much accessory room it has, and how the boxes sit.
  Check: Settings: Decks > Your cases > + Add a case, make a 1 x 4 with a small square at the end and save: it's listed as 3 deck slots, 1 small square
- **Works like the built-in cases**: a case of your own shows up in
  Loadout's Deck Assignment (with its packing limits), the case view --
  drawn the way you laid it out -- the random loadout's cases and Case
  storage. Edit or delete it any time.
  Check: Loadout: open Deck Assignment: your case is listed; pack a deck in it and the case view draws your layout

## 1.96.2 -- 2026-10-13 -- Shared slots in the case view
Summary: In the Loadout's case view, a deck or accessory marked as sharing a slot now takes one slot with its partner instead of pushing the last thing over the limit.

### Bug fixes
- **Shared slot counted twice**: with a deck marked as sharing a slot (the
  double-arrow), the case view still counted the deck and its accessory as
  two, said 7/6, and put the last thing (a token box) under Over the limit.
  The pair now takes one slot, drawn as the deck with the accessory tagged
  across its top, and the count matches.
  Check: Loadout: in a DeWalt with 6 decks and a token box, mark a deck as sharing a slot: the case view says 6/6 and that deck shows + the token box

## 1.96.1 -- 2026-10-13 -- Home is a hand
Summary: Home's page cards are always fanned out as a hand of Magic cards; the Grid layout and its switch in Settings > Look are gone.

### Enhancements
- **One Home layout**: Home's cards (Pack a loadout, To do, Decks, History,
  Stats, Playgroup) are always a hand you look through: tap one to lift it,
  tap it again to go there, pull down a little to shuffle. The two-column
  Grid and the Home layout switch under Settings > Look are gone.
  Check: Home: the cards are fanned out as a hand; Settings > Look has no Home layout switch

## 1.96.0 -- 2026-10-13 -- Every card, filtered and sorted
Summary: Lists > Collection has a Cards tab listing every card you own, with search, sort and filters; Fits my decks gets the same controls.

### New features
- **Cards tab**: every card in your collection once, with its colors, copies,
  price, binders, type, rarity, set, foils and how many decks it fits.
  Search by name or theme; sort by name, price, value, copies, color, type,
  popularity, newest or decks it fits (and reverse); filter by binder, role,
  the colors it fits in, type, rarity, a minimum price, foils, game
  changers, 2+ copies and cards that fit your decks. It totals the copies and
  value of what's shown, and keeps your choices on this device.
  Check: Decks: Lists > Collection > Cards, sort by Price, open Filters and tap blue: blue and colorless cards, priciest first

### Enhancements
- **Fits my decks, filtered**: the same search, sort and filters on Fits my
  decks (sorted by most decks to start); the 80 shown are the first 80 of
  what's left after the filters.
  Check: Decks: Lists > Collection > Fits my decks, open Filters and pick Instant: only instants
- **More from ManaBox**: an import now keeps each card's rarity, set and date
  added, for the Cards tab's filters and Newest sort (import again to fill
  them in).
  Check: Decks: import your ManaBox CSVs again, then Cards > Filters > Rarity > Mythic: your mythics

## 1.95.2 -- 2026-10-12 -- A sell stack inside your collection
Summary: Importing your whole ManaBox collection together with a sell stack that's also inside it no longer counts those cards twice: they count once, as Selling.

### Bug fixes
- **Cards counted twice**: a whole-collection export plus a separate export
  of the cards you're selling (also in the whole one) counted every card for
  sale twice -- once usable, once selling. When most of a smaller binder's
  cards (same printing and finish) are in a bigger one, they now count once,
  in the smaller binder under its role; the import message and the Binders
  tab say so, and **Separate copies** on that binder turns it off.
  Check: Decks: in Lists > Collection, import your Card Collection and Sell Stack exports together: Sell Stack says how many are also in Card Collection and they count once

## 1.95.1 -- 2026-10-12 -- Drag a card across the board
Summary: On the To do board, holding a dragged card at the left or right edge now brings in the next column, one column at a time.

### Enhancements
- **Edge brings in the next column**: dragging a card to the board's right
  (or left) edge and holding it there a moment slides the next column into
  view; keep holding to go one further. The board snaps by column, so the
  old slow sideways scroll mostly snapped back on a phone.
  Check: To do: press and hold a card in To do, drag it to the right edge and hold: Doing slides in, then Done; let go and it lands there

## 1.95.0 -- 2026-10-12 -- The board follows your build queue
Summary: Decks on the way to the table put themselves on the To do board: a deck in your build queue without a full list gets a card to build it, and a deck at Decklist with all 100 cards gets one to print or buy them.

### New features
- **Build the decklist**: a deck in your build queue (Decks > build order)
  that has no decklist, or one short of 100 cards, goes straight onto the To
  do board as **Build the decklist for ...**, saying where it sits in the
  queue and how many cards it has so far. Once its list reaches 100 (or the
  deck leaves the queue) the card moves itself to Done.
  Check: To do: put an unbuilt deck with no list into the build queue: Build the decklist for it is in To do
- **Print or buy cards**: a deck at **Decklist** whose list has all 100 cards
  (its commander counted if the list leaves it out) goes straight onto the
  board as **Print or buy cards for ...**. Moving the deck on to the cart
  moves the card to Done.
  Check: To do: a deck at Decklist with a full 100-card list shows Print or buy cards for it in To do

### Enhancements
- **Drop anywhere in a column**: the board's columns now run its full
  height, so with a long To do the whole of Doing and Done is beside the card
  you're dragging (they used to stop short at the top of the board).
  Check: To do: with a long To do column, drag a card from near the bottom straight across into Doing
## 1.94.2 -- 2026-10-12 -- Coming back from another app
Summary: Switching to another app in the middle of a hold or a drag no longer leaves it running when you come back, sounds and keep-awake come back with you, and a restart (or a sync reload) returns to the page you were on.

### Bug fixes
- **Holds kept going after switching apps**: holding a life button (or a
  commander damage or counter step) and switching apps without lifting your
  finger could leave it stepping by 5 when you came back. Hiding the app now
  calls every hold off.
  Check: Game: hold +1 on a seat until it steps, switch to another app, come back: the life has stopped where it was
- **The menu ring stayed up**: holding the menu button and switching apps
  left the dimmed ring on screen, the page wouldn't scroll, and your next tap
  anywhere jumped to a page. It now closes when the app is hidden.
  Check: Settings: hold the menu button, switch apps, come back: no ring, and tapping the page stays on Settings
- **Drags dropped where you next tapped**: a deck being dragged in the case
  view (or a To do card) stayed picked up after an app switch and dropped
  wherever you tapped next. It is now put back.
  Check: Loadout: press and hold a deck in the case view, switch apps, come back: the deck is where it was
- **Swipes counted when called off**: a swipe on the side menu, a deck page,
  a loadout sheet or a card picture that the phone called off (an app switch,
  a notification) counted as a finished swipe and closed it; a long pull that
  was called off offered a reload. They now spring back.
  Check: Decks: open a deck, start swiping it right, switch apps, come back: the deck page is still open
- **Back where you were**: when the phone restarted the app after you
  switched away, or a sync from another device reloaded it, it started over
  on Home. For half an hour it now comes back to the page you were on, and
  to the table if a game was up.
  Check: Settings: scroll down a little, switch apps, then pull down and tap Reload app: you are back on Settings
- **Sounds went quiet**: after a switch to another app or a call, sounds
  could stay silent until a reload. They now wake on your next tap, and a
  held life sound stops when the app is hidden.
  Check: Settings: with sounds on, switch apps and come back, then tap a button: it plays
- **Keep awake after coming back**: if asking to keep the screen on failed
  as the app came back, it was never asked again. It now tries again, and
  again on your next tap.
  Check: Game: with Keep screen on, start a game, switch apps and come back: the screen stays on
- **Table layout after turning the phone**: a phone turned while the app was
  in the background could come back with the table laid out for the old
  direction. It is laid out again on return.
  Check: Game: start a game, switch apps, turn the phone, come back: the seats fit the screen

## 1.94.1 -- 2026-10-12 -- The hand shuffles like a hand
Summary: In Home's Hand layout the pull-down shuffle gathers, riffles and deals the cards, a tap off the hand puts the lifted card back, and the bar under the hand is gone; the hold menu picks whatever is in your finger's slice; Home's pod buttons go straight to a full-screen table.

### Enhancements
- **A real shuffle**: with Home's **Hand** layout, the pull-down shuffle
  (animations on High, easter eggs on) gathers the cards into a pile, splits
  and riffles them twice, then deals them back out in their new order.
  Check: Home (Hand layout): pull down from the top a little: the hand gathers, riffles and fans back out reordered
- **Tap off the hand**: tapping anywhere off the hand (or between its cards)
  puts the lifted card back.
  Check: Home (Hand layout): lift a card, then tap PLAY's heading: the card drops back into the hand
- **No bar under the hand**: the panel with **Open** under the hand is gone; a
  lifted card's bottom line says what it holds instead, and tapping it again
  opens it. Cards in the hand no longer carry a "Page --" line.
  Check: Home (Hand layout): lift Decks: its bottom line shows how many are built; tap it again to open Decks
- **Hold menu by slice**: holding the menu button, sliding off the circle
  (past a bubble, or between two) now lights the bubble in that slice, so you
  needn't land right on it; slide back to the middle to pick nothing.
  Check: Settings: hold the menu button and slide far past Stats, off the circle: Stats lights; let go and you're on Stats

### Bug fixes
- **Lifted card over the title bar**: a lifted card in the hand scrolled over
  the title bar. It now stays under it.
  Check: Home (Hand layout): lift a card and scroll down: the title bar covers it
- **Pod buttons flashed the table in the page**: tapping a pod size on Home
  showed the table inside the page, under the title bar, for a moment before
  it filled the screen. It is full screen from the start.
  Check: Home: tap 4: the table fills the screen at once, with no step in between

## 1.94.0 -- 2026-10-12 -- A To do board; Home as a hand
Summary: A new To do page: a kanban board of your own (To do, Doing, Done), fed by decks you've marked to update and a Suggested inbox from your games, decks, wishlist and upkeep; Home gets a To do card and an optional Hand layout.

### New features
- **To do board**: **To do** in the side menu is a board with three columns,
  **To do**, **Doing** and **Done**. Add your own cards, drag them between
  columns (press and hold on a phone; the board scrolls sideways at its
  edges), or tap a card for **Go there**, arrows, **Edit** and **Delete** (with
  Undo). Done keeps cards two weeks. Moving a card never changes a deck. Home's
  At a glance has a **TO DO** line with what's open.
  Check: To do: type a card in Add a card..., drag it to Doing, then tap it and move it on to Done
- **Suggested to do**: under the board, the app suggests jobs from your data:
  games still to finish logging (missing venue, turns, who won, player names)
  or still in progress; decks with cards not legal or off-color, decks to
  upgrade, decks with no list or no notes, decks not played in 60 days; decks
  in the cart and wishlist price drops; a backup due, deck checks due, a card
  legality change, a full case. Problems come first. **Add** puts one on the
  board, **Go** takes you there, the cross dismisses it. A card from a
  suggestion moves itself to Done once it's fixed. **What to suggest** turns
  each kind on or off.
  Check: To do: Suggested lists a recent game missing details; Add it, fill in the game in History, and the card moves itself to Done
- **Decks to update on the board**: decks you've marked **to update** go
  straight into To do as **Update** cards, with the deck's update plan as the
  note. Remove the tag and the card moves itself to Done; delete it and it stays
  off. They have their own switch under **What to suggest**.
  Check: To do: a deck marked to update has an Update card in To do with its update plan
- **Hand layout for Home**: Settings > Look > **Home layout** shows Home's cards
  as a **Grid** (as before) or a **Hand**: fanned out like a hand of Magic
  cards. Tap one to lift it, tap it again (or **Open**) to go there, and slide
  a finger along the hand to look through it.
  Check: Settings: Look > Home layout > Hand, then Home: tap Decks to lift it and tap again to open Decks

### Enhancements
- **To do on Home**: Home's **Start a game** card is now **To do** (with what's
  open on the board); **PLAY** above it starts games. Simple mode keeps Start a
  game.
  Check: Home: the cards are Pack a loadout, To do, Decks, History, Stats and Playgroup
- **Make your own above Gestures**: in Settings > Look, **Make your own** (your
  palettes and the deck art theme) now comes before **Gestures**.
  Check: Settings: Look: Make your own sits above Gestures

## 1.93.2 -- 2026-10-12 -- Weight in pounds
Summary: Loadout weights show in pounds (ounces under a pound), and the weights you correct are typed in ounces.

### Enhancements
- **Weight in pounds**: What's packed's **Weight** tile and each case's weight
  show in pounds, or ounces under a pound; kilograms are gone. Under
  **Weights**, the typical weights and the ones you type are in ounces. Weights
  you'd already typed are kept.
  Check: Loadout: What's packed: the Weight tile reads in lb; open Weights and the boxes are in oz

## 1.93.1 -- 2026-10-12 -- Pod buttons all alike
Summary: Home's Play buttons no longer highlight the default pod size.

### Enhancements
- **Pod buttons all alike**: under **PLAY** on Home, the 2 to 6 buttons look the
  same; the default pod size is no longer picked out.
  Check: Home: the five buttons under PLAY all look the same

## 1.93.0 -- 2026-10-12 -- One tap to a game from Home
Summary: Home opens with Play: tap how many are at the table and you're there; while a game runs it's a live strip with everyone's life.

### New features
- **Play from Home**: the first card on Home is **PLAY** with **2 3 4 5 6**.
  Tap the pod size and you're at the table, using Game setup as it is. Your
  default pod size is highlighted; **Full setup** opens Game setup.
  Check: Home: tap 3 under PLAY: a three-player table opens
- **Live game on Home**: while a game is going, PLAY becomes **GAME IN
  PROGRESS** with the turn, whose turn it is, how long it's been and everyone's
  life. Tap it (or **Back to the table**) to go back; **Discard this game** is
  there too. It replaces the Resume button that was in At a glance.
  Check: Home: start a game, go back to Home: the live strip shows every seat's life; Back to the table returns to it

## 1.92.0 -- 2026-10-12 -- What's packed, in one place
Summary: Loadout's packed totals, weight, bag value and case view are one What's packed section; the case view draws each case like the real one with every accessory; Home storage can take this loadout as the home layout.

### New features
- **Home layout from this loadout**: on the Loadout page, **Home storage** >
  **Use a loadout** has a **This loadout** button that makes the loadout you're
  packing the home layout, saved or not: its decks go in the cases they're in
  there, every other deck is left unassigned. It asks first if you'd placed
  decks yourself.
  Check: Loadout: Home storage: tap This loadout; the plan puts this loadout's decks in their cases and says Set from the loadout

### Enhancements
- **What's packed**: Step 5 is one section instead of four that said the same
  thing (the line under Who's playing, the weight box, Bag Value Manifest and
  Current Loadout). Tiles for **Decks**, **Accessories**, **Value** and
  **Weight**, the deck boxes against what you own, decks not in any case, the
  **Case view** (moved here from Deck Assignment), the bracket spread, and
  **Deck values** and **Weights** in folds.
  Check: Loadout: Step 5 What's packed shows the four tiles, then the case view; the line under Who's playing is gone
- **Cases drawn like the real ones**: the case view lays each case out the way
  it packs. A **DeWalt** is two rows of three, flat, with the two small squares
  to the right (one top, one bottom). A **Stanley** is two rows of five with a
  landscape box at the bottom left and bottom right; with the insert, the insert
  takes the top row. A **Deck Dungeon** is a row standing up, a **Peak Design
  7L** a column on their sides with the tops facing out, a **Quiver** a row on
  their backs. Anything past a case's limit shows under it as **Over the limit**.
  Check: Loadout: Case view: a full Stanley shows ten portrait boxes and two landscape ones at the bottom corners; a DeWalt's Dice sit in the top-right square
- **Every accessory in the case view**: accessories now show in every case, not
  only the DeWalts. A Stanley's sit in its insert, other cases' are named under
  the case, and so are a DeWalt's small squares.
  Check: Loadout: pack a token box in a Stanley: Case view shows it inside the Stanley's insert

## 1.91.1 -- 2026-10-12 -- Drag to cases off screen; swaps in one case fixed
Summary: In the case pictures, holding a dragged deck near the top or bottom of the screen scrolls the page that way, and dropping a deck on another in the same case swaps them instead of copying it.

### Enhancements
- **Drag to a case off screen**: in Loadout's **Case view** and in **Home
  storage**, hold a dragged deck near the top or bottom edge of the screen and,
  after a short pause, the page scrolls that way. It starts slowly and speeds up
  the closer you are to the edge (up to about a screen a second), and stops as
  soon as you move away. The top edge starts under the title bar.
  Check: Loadout: Home storage: press and hold a deck, drag it to the bottom of the screen and hold: the page scrolls down to the next cases; move up to the middle and it stops

### Bug fixes
- **Swapping decks in one case**: in Loadout's **Case view**, dropping a deck on
  another deck in the same case filled both spots with the deck you dragged, so
  a case could end up holding several copies of one deck. Now the two decks
  trade places. Copies already in a case fold back to one.
  Check: Loadout: Case view: drag a deck onto another deck in the same case: they trade places and the count stays the same

## 1.91.0 -- 2026-10-12 -- Run every check on every deck
Summary: Run checks can now run everything on every deck in one tap, pick which decks a run covers, and tick the checks with presets.

### New features
- **Everything, every deck**: a button beside **Run checks** runs every check on
  every deck and redoes saved results (breakdowns, combo searches, EDHREC
  comparisons, starting points). It asks first and says how many Claude calls it
  could make. What you've ticked stays as it was, and prices or lists you typed
  are never replaced.
  Check: Settings: Decks > Deck upkeep > Run checks: tap Everything, every deck; it asks with the number of checks and decks, and runs on every deck
- **Choose the decks**: **DECKS** picks which decks a run covers: All decks, Not
  retired, Built, Ideas and in cart, Tagged upgrade, or **Pick decks** (a
  searchable list with All / None). Each choice shows its count, and the choice
  is kept on this device.
  Check: Settings: Decks > Deck upkeep > Run checks: tap Pick decks, tick two, then Run checks: the run says 1 of 2
- **Check presets**: **All checks**, **All checks, redo saved results** and
  **None** set the switches in one tap. A line above the button says what the run
  will do: how many checks on how many decks, and the most Claude calls it could
  make.
  Check: Settings: Decks > Deck upkeep > Run checks: tap None, then All checks; the line above the button follows

## 1.90.2 -- 2026-10-12 -- Deck links up top; Lists beside Roster
Summary: The deck page's Moxfield and EDHREC links now sit at the top under the commander, and the Decks tabs read Roster, Lists, Rank.

### Enhancements
- **Moxfield and EDHREC links up top**: on a deck's page, **Moxfield >** and
  **EDHREC >** are now buttons right under the commander's name, so they're in
  reach from every tab. They used to sit at the end of the Overview.
  Check: Decks: open a deck with a Moxfield link: Moxfield > and EDHREC > are under the commander's name at the top, on every tab
- **Lists beside Roster**: the Decks page's tabs are now **Roster**, **Lists**,
  **Rank**.
  Check: Decks: the tabs at the top read Roster, Lists, Rank

## 1.90.1 -- 2026-10-12 -- Suggestions lean on the deck's themes
Summary: Every card suggestion now favours cards that play into the deck's themes, and How it wins names the deck's themes instead of its tags.

### Enhancements
- **Suggestions lean on the deck's themes**: wherever the app suggests cards
  for a deck, cards whose rules text plays into the deck's themes (set under
  Edit > Themes: a token maker for Tokens, a sacrifice outlet for Aristocrats...)
  rank higher. It applies to:
  - **Swap ideas**: cards that fit a theme come first and say "fits its ... theme".
  - **Fits my decks** and the wishlist's decks: a theme fit adds weight, and
    is a reason of its own.
  - **Staples you usually run**: cards your decks with the same theme run
    count extra.
  - **EDHREC top cards not here**: the cards built around the commander (high
    synergy) come before general staples.
  - **Starting points**: theme cards move up each group and say "fits your theme".
  - **Land fixes**: a tie-break.
  Collection cards are looked up once more (Lists > Collection, or Run checks)
  to learn which themes they play into.
  Check: Lists: Collection > Swap ideas, pick a deck with themes: cards that fit its themes come first and say "fits its ... theme"
  Check: Decks: a deck with no list > Decklist > STARTING POINTS > Look again: cards that play into the deck's themes say "fits your theme" and sit near the top

### Bug fixes
- **How it wins named tags, not themes**: the Plan line on a deck's Overview
  showed its status tags (like "themes: proxy") instead of its themes. It now
  lists the deck's themes and your own tags for it.
  Check: Decks: a deck with themes and no written plan > Overview > HOW IT WINS: Plan says "themes:" followed by its themes, not "proxy" or "precon"

## 1.90.0 -- 2026-10-12 -- Links can open in Chrome
Summary: Settings > App can send links to other sites to the Chrome app instead of the home-screen app's own browser.

### New features
- **Open links in Chrome**: Settings > **App** > **Links to other sites open
  in** picks **This app** (the home-screen app's own little browser, as
  before) or **Chrome**. With Chrome, tapping a link to Scryfall, EDHREC,
  Moxfield or any other site opens it in a new tab of the Chrome app, on
  iPhone, iPad and Android. Chrome has to be installed, and the choice is kept
  per device. On a computer, links open in a new tab either way.
  Check: Settings > App: Links to other sites open in > Chrome, then open a deck's Scryfall or EDHREC link: it opens in the Chrome app
  Check: Settings > App: switch back to This app: links open in the app's own browser again

## 1.89.0 -- 2026-10-12 -- Find decks with a strong other commander
Summary: The Decks list can filter and sort by Other commanders: Status > Strong other commander, and Sort > Other commander.

### New features
- **Find decks with a strong other commander**: on **Decks**, **Filters** >
  **Status** > **Strong other commander** keeps the decks whose best other
  commander in their 99 scores 60 or more, or comes within 5 of the deck's
  own commander scored the same way. **Sort & group** > **Other commander**
  puts the best candidates first, with decks not scored yet last. With
  either on, each row names the candidate and its score against your own
  ("other commander: Name 72 (yours 50)"). The scores come from Other
  commanders on the deck page, or from Run checks for every deck at once.
  Check: Decks: Sort & group > Other commander: decks with the best other commander come first, each row says which and its score against yours
  Check: Decks: Filters > Status > Strong other commander: only decks whose best other commander scores 60+ (or within 5 of their own) stay

## 1.88.1 -- 2026-10-11 -- Other ways to build it
Summary: Starting points now shows other ways to build the deck: the commander's other popular themes and a budget build, each with the cards that set it apart.

### Enhancements
- **Other ways to build it**: Starting points (Decklist tab of a deck with no
  list) has a new **OTHER WAYS TO BUILD IT** section. It lists the
  commander's next three most popular themes on EDHREC, plus a budget build
  when EDHREC has one. Each shows how many decks build it that way and the
  cards that set it apart: ones far more common in those decks than in the
  commander's decks overall. Cards past your bracket are flagged and hidden
  with the rest, and cards you own are marked. **Look at this way** switches
  the panel to that build. When you pick a theme, its page is now used before
  the plain bracket page: the bracket flags already cover the bracket.
  Check: Decks: a deck with no list > Decklist > STARTING POINTS > Look again: OTHER WAYS TO BUILD IT lists other themes (with deck counts) and maybe Budget, each with a few cards
  Check: Decks: starting points > OTHER WAYS TO BUILD IT > Look at this way: the cards above change to that build and the line under the button names it

## 1.88.0 -- 2026-10-11 -- Starting points for decks with no list
Summary: A deck with no list gets Starting points on its Decklist tab: what decks with its commander, theme and bracket run, a few cards per job (with bracket-breaking cards flagged), EDHREC's average deck, sample lists and, with Claude, a few lines on how it plays.

### New features
- **Starting points**: on the **Decklist** tab of a deck with no list,
  **STARTING POINTS** > **Find starting points** asks EDHREC (through the
  Worker) what decks with the same commander run. It uses EDHREC's theme
  that matches your deck's themes or plan, at your deck's bracket; the chips
  switch theme, and the line under the button says which theme and bracket
  the cards came from (or that EDHREC had no page for that bracket).
  - A few cards for each job: ramp, card draw, removal, threats and wincons,
    and synergy with the commander, with how many decks run each.
  - Cards past your bracket are flagged in red (a Game Changer below Bracket
    3, mass land denial below Bracket 4), softer notes in amber; **Hide cards
    past Bracket N** takes the red ones out.
  - **you own it** marks cards in your collection; wishlist cards say so.
  - **AVERAGE DECK**: EDHREC's average list, how many of its cards you own,
    **Copy the list** and **Open on EDHREC**. It never becomes the deck's list.
  - **SAMPLE LISTS**: real decks EDHREC read, Moxfield ones first, with price
    and tags.
  - With Claude on the Worker, **How it usually plays** adds two or three
    sentences.
  Run checks (the EDHREC step) refreshes starting points weekly for every
  deck with no list, keeping a theme you picked, and writes Claude's lines
  when **Use Claude** is ticked.
  Check: Decks: a deck with a commander and no decklist > Decklist > STARTING POINTS > Find starting points: cards appear under Ramp, Card draw, Removal, Threats and Synergy, with the theme and bracket they came from
  Check: Decks: on a Bracket 1 or 2 deck's starting points, a Game Changer is flagged in red; tick Hide cards past Bracket 2 and it goes
  Check: Decks: starting points > AVERAGE DECK > Copy the list copies a list, and the deck still has no list afterwards
  Check: Decks: starting points > SAMPLE LISTS: the links open real decks (Moxfield ones first)
  Check: Decks: starting points: tap another theme chip; the cards change and the line says that theme
  Check: Decks: starting points > How it usually plays (with Claude on the Worker): two or three sentences appear

## 1.87.1 -- 2026-10-11 -- Winner buttons centered on iPad
Summary: On an iPad, the winner screen's Log the game and Undo last change buttons sat at the left edge; they're in the middle now.

### Bug fixes
- **Winner screen on iPad**: with four seats on an iPad, the WINNER messages
  sit at the top and bottom of the screen, and **Log the game** / **Undo
  last change** slid to the left edge instead of staying in the middle. On a
  phone the messages to the left and right happened to hold them in the
  middle. They're centered now, however the messages are placed.
  Check: Game: on an iPad, start a 4-player game and scoop three players: the winner screen's Log the game and Undo last change sit in the middle of the screen

## 1.87.0 -- 2026-10-11 -- Check for updates
Summary: Settings > App has a Check for updates button that asks the site which version is live. Also fixes Run checks failing on a deck with no decklist.

### New features
- **Check for updates**: Settings > **App**, under the version you're on.
  It asks the site which release is live. When a newer one is out it says
  which and offers **Reload**; once the new version has downloaded in the
  background, Reload opens it straight away. Otherwise it says you're up to
  date, or that the site couldn't be reached.
  Check: Settings > App: Check for updates: on the newest version it says "You're up to date" with the version number
  Check: Settings > App: after the next release is deployed, open the app and tap Check for updates: it names the new version and Reload opens it (the version line then shows it)
  Check: Settings > App: turn on airplane mode, tap Check for updates: it says it couldn't reach the site

### Bug fixes
- **Run checks on a deck with no decklist**: the EDHREC step failed with
  "null is not an object (evaluating 'h.text')". With no list it still went
  looking for the list's saltiest cards. It now just keeps EDHREC's rank for
  the commander, and the deck page says "EDHREC rank updated". The full run
  had the same failure for every deck without a list.
  Check: Decks: open a deck with no decklist > Overview > CHECKS > Run checks: no "Failed" line, and the "Done" line says EDHREC rank updated

## 1.86.0 -- 2026-10-11 -- Run checks on a deck's page
Summary: A deck's page has its own Run checks button, which runs Deck upkeep's checks for that deck alone.

### New features
- **Run checks for one deck**: a deck's **Overview** > **CHECKS** row ends
  with **Run checks**. It runs that deck alone through the steps ticked under
  Settings > Decks > Deck upkeep: its Moxfield list, commander and art, the
  card check and price, categorize, Other commanders, EDHREC, combos and
  Claude's notes. Collection is left to the full run, since it covers every
  deck. Combos and the EDHREC comparison are redone rather than kept. The
  button shows each step as it goes, and a line underneath says what it did
  and anything that failed. The full Run checks now goes through the same
  code, deck by deck, so the two give the same results.
  Check: Decks: open a deck with a decklist > Overview > CHECKS > Run checks: the button shows each step, then a "Done: ..." line lists what ran and the "checked" date is today
  Check: Decks: open another deck afterwards: its CHECKS row is unchanged (only the deck you ran was checked)
  Check: Settings > Decks: Deck upkeep > Run checks: untick Other commanders, then run a deck's own Run checks: the "Done" line no longer mentions other commanders

### Bug fixes
- **Moxfield journal lines kept**: when Run checks updated a list from
  Moxfield, the "List updated from Moxfield" journal entry could be lost when
  the deck checks that follow saved the deck. Those checks now start from
  the decks as the Moxfield step left them.
  Check: Decks: a deck whose Moxfield list changed > after Settings > Decks > Deck upkeep > Run checks, its Journal shows "List updated from Moxfield"

## 1.85.7 -- 2026-10-11 -- Run checks covers everything
Summary: Deck upkeep's Run checks now runs every automated check the app has, including Other commanders, collection details and land colors, and the wishlist's Moxfield list.

### Enhancements
- **Run checks covers everything**: three checks that only ran from their
  own buttons are now steps of Settings > Decks > Deck upkeep > **Run
  checks**. **Other commanders** scores each list's eligible commanders
  (with the EDHREC step and the Worker, its best three get EDHREC's view
  too). **Collection** fills in Scryfall details for new collection cards
  and learns which colors your lands make, so a deck's **Land fixes** now
  shows straight away instead of waiting on a button. The Moxfield step
  re-reads your wishlist too when it links to a Moxfield deck. The summary
  at the end counts each.
  Check: Settings > Decks: Deck upkeep > Run checks: the steps include Other commanders and Collection; run it, and the summary says how many decks got Other commanders and how many lands had their colors learned
  Check: Decks: open a deck afterwards > Decklist > OTHER COMMANDERS: it is already filled in, dated today
  Check: Decks: a deck whose MANA BASE calls a color short > LAND FIXES FROM YOUR COLLECTION: the lands show without tapping Find

## 1.85.6 -- 2026-10-11 -- One color coverage
Summary: Color coverage on Stats now looks and works exactly like the one on Home.

### Enhancements
- **One color coverage**: Stats > View stat > Color Coverage now shows the
  same panel as Home: the Include precons switch, how many identities
  you've built and planned, a bar per color that opens the decks behind it,
  and the identity grid. The older list of all 31 identities that sat under
  it is gone. The precons switch is one setting, so it's the same on both
  pages.
  Check: Stats: View stat > Color Coverage: the color bars, total line and identity grid match Home > Color Coverage
  Check: Stats: tap a color bar: the decks behind it open, built first, then planned
  Check: Stats: turn off Include precons, then open Home > Color Coverage: it's off there too

## 1.85.5 -- 2026-10-11 -- Mark a release reviewed
Summary: A release note with nothing to test can now be ticked as reviewed, so it turns green like a fully tested one instead of looking unfinished.

### Enhancements
- **Mark a release reviewed**: in What's new, a release with no checks
  (behind-the-scenes work, say) used to stay looking unfinished, since
  there was nothing to tick. It now has a **Reviewed** tick; ticking it
  turns the release's chip green with a check mark, the same as one whose
  checks are all done, and it's remembered on this device. **Check or
  uncheck in bulk** has a button to mark every such release reviewed at
  once, with Undo.
  Check: Settings > App: What's new > tap the v1.84.3 chip > tick **Nothing to test -- mark reviewed**: it reads Reviewed and the v1.84.3 chip turns green with a check mark
  Check: Settings > App: What's new > Check or uncheck in bulk > **Mark the ... releases with nothing to test as reviewed**: every such chip turns green; Undo on the toast puts them back

## 1.85.4 -- 2026-10-11 -- Minstrel decks lose their labels
Summary: The Wandering Minstrel decks' commander no longer carries a build label in brackets.

### Enhancements
- **Minstrel decks lose their labels**: the three decks led by The
  Wandering Minstrel had a build label in brackets after the commander's
  name. It comes off -- the commander now reads just The Wandering
  Minstrel, matching the card, and each deck's own name still tells them
  apart. Done once when the app opens; Sync carries it to your other
  devices.
  Check: Decks: search Minstrel: each of the three decks shows The Wandering Minstrel as its commander, with nothing in brackets
  Check: Decks: open one of them > Decklist > OTHER COMMANDERS > Look again: The Wandering Minstrel is the "Your commander" line, not a candidate

## 1.85.3 -- 2026-10-11 -- Your commander isn't its own alternative
Summary: Other commanders no longer offers a deck's own commander when the commander's name has a note in brackets, and scores it for comparison again.

### Bug fixes
- **Your commander isn't its own alternative**: a commander saved with a
  note after its name -- "Atraxa, Praetors' Voice (foil)" -- wasn't
  recognized as the deck's own, so Other commanders offered it as an
  alternative to itself and skipped the "Your commander, scored the same
  way" line. The note in brackets is now left out when matching, and
  Scryfall's spelling of the commander counts too.
  Check: Decks: a deck whose commander has a note in brackets after its name > Decklist > OTHER COMMANDERS > Look again: the commander is not in the list, and "Your commander, scored the same way" shows its score

## 1.85.2 -- 2026-10-11 -- Other commanders cover your colors
Summary: Other commanders only recommends cards whose colors cover all of the deck's colors; when none does, it recommends none and says why.

### Enhancements
- **Other commanders cover your colors**: a card from the list is only
  recommended when its color identity includes every one of the deck's
  colors (the deck's color identity, or the list's colors when none is
  set) -- one that can't cast part of the deck isn't a replacement for its
  commander. When no card in the list covers them all, nothing is listed
  and the panel says how many candidates fell short.
  Check: Decks: a multicolor deck with legends in its list > Decklist > OTHER COMMANDERS > Look again: every candidate's colors include all of the deck's colors
  Check: Decks: a deck whose legends are all narrower than it (say a three-color deck with only mono-colored legends) > Look again: no candidates, and a line saying none covers all of the deck's colors

## 1.85.1 -- 2026-10-11 -- Hold menu motion; commanders from the list
Summary: The hold-the-menu ring now bursts open and folds away, and Other commanders picks its candidates from the deck's own list.

### Enhancements
- **Hold menu animates**: holding the menu button now pops the page
  bubbles out from under your finger one after another, with a little
  overshoot; letting go folds them back in, and the one you picked swells
  and fades as its page opens underneath. With Animations off (Settings >
  Look) it stays instant.
  Check: Settings > Look: Animations on Low or High; hold the menu button: the bubbles burst out one after another, labels fading in last
  Check: Settings > Look: still holding, slide onto Stats and let go: Stats swells and fades, the others fold back to the center, and the Stats page is already showing
  Check: Settings > Look: Animations Off; hold the menu button: the ring appears and goes at once
- **Other commanders come from your list**: candidates are now only the
  cards in the deck's own list that can be a commander (a legendary
  creature, or one that says it can be your commander), every one of them
  scored against the rest of the list. Nothing from outside the list is
  suggested; a list with none says so.
  Check: Decks: open a deck with legends in its list > Decklist > OTHER COMMANDERS > Look again: every candidate is a card from this deck's list, best score first
  Check: Decks: a deck whose list has no other legends > Find other commanders: it says no other card in this list can be a commander

## 1.85.0 -- 2026-10-11 -- Other commanders
Summary: A deck's page can now suggest other commanders for its list -- legends already in it and the most-played commanders in its colors -- each scored on how well it would lead the cards you have.

### New features
- **Other commanders**: on a deck's **Decklist** tab, **OTHER COMMANDERS**
  > **Find other commanders** reads your list's cards from Scryfall and
  scores 0-100 the legends already in your 99 and the most-played
  commanders in your colors. The score comes from the cards' rules text:
  the themes a commander rewards (tokens, sacrifice, artifacts, a creature
  type...) against how many of your cards feed them, your biggest themes it
  covers, its mana value, and how many of your cards fall outside its
  colors (**cut N off-color** -- those would have to go). Your own
  commander is scored the same way so you can compare. **why** shows the
  reasons; with the Worker, **Check with EDHREC** adds how many of your
  cards that commander's players run. The result is kept on the deck.
  Check: Decks: open a deck with a saved list > Decklist > OTHER COMMANDERS > Find other commanders: a ranked list appears with scores, **in your 99** on legends from the list, and **cut N off-color** where a candidate misses your colors
  Check: Decks: same deck > tap **why** on a candidate: it names the themes it rewards with how many of your cards feed each, its mana value, and any off-color cards
  Check: Decks: leave the deck and come back: the list is still there with "as of" today's date

## 1.84.3 -- 2026-10-10 -- const and let
Summary: Behind the scenes: inside functions the code now says which values change, declaring them with const or let instead of var.

### Behind the scenes
- **const and let**: about 8,100 declarations inside functions now use
  \`const\` (the value is never replaced) or \`let\` (it is), the way current
  JavaScript is written, instead of \`var\`. A tool made each change only
  where the meaning stays the same, checked by the type checker; the 136
  where block scoping could change what the code does stay as they were,
  and that number can only go down. Nothing you see changes.

## 1.84.2 -- 2026-10-10 -- Stricter types, behaviour tests
Summary: Behind the scenes: half the code's files now pass TypeScript's strict checks (35 of 71, up from 13), and a new set of tests drives the real app in a browser before every release.

### Behind the scenes
- **Stricter types**: 22 more files pass TypeScript's strict mode: the
  deck page's rules, art, How it wins, threat dial and land fixes; the
  table's seat cards, planes, Momir and tile pictures; the guide, the
  tour, the rules reader, sync, sounds, storage and the Home strip. Shapes
  the app's data takes (a deck, a seat, a counter, a rule, a sound, a
  Trash item) are written down once in one file. Doing this caught the
  mulligan count being handed around as text where a number was expected;
  it did no harm, and it is now labelled for what it is.
- **Behaviour tests**: a new test suite opens the built app in a headless
  browser and uses it the way you do -- deletes a game and undoes it,
  restores from the Trash, taps a deck's picture, plays a game from Start
  to the log, holds the menu button, trims a sound and resets it -- and
  checks what was saved and what showed. It runs before every release, so
  a flow that breaks stops the release instead of reaching your phone.

## 1.84.1 -- 2026-10-10 -- Files by topic
Summary: Behind the scenes: the code's files are named and grouped by what they do, and the game and deck screens are split into smaller files.

### Behind the scenes
- **Files by topic**: shared code is grouped by what it is about --
  storage, sync, sound, look, cards, games, decks, the tour -- instead of
  being named after whichever function happened to be largest. The game
  screen (once one 470 KB file) and the deck page each have a folder of
  sub-screens (the table, setup, the log form, Momir, dungeons; the
  decklist, mulligan practice, the threat dial). Nothing you see changes;
  the screens still load the same way.

## 1.84.0 -- 2026-10-10 -- Gestures, in the open
Summary: The touch shortcuts are listed in Settings with a switch for each, the hold-the-menu ring shows a tip, and a deck's picture opens its page.

### New features
- **Gestures in Settings**: Settings > Look > Gestures lists the app's
  touch shortcuts -- hold the menu button for the ring of pages, pull
  down from the top for Reload, swipe in from the right edge for the
  side menu -- each with a switch to turn it off if it gets in your way.
  Check: Settings > Look > Gestures: three shortcuts are listed; turn off Hold the menu button, then hold the menu button and no ring opens.
- **A tip for the ring**: the first time, a small tip under the menu
  button says it can be held to jump to any page. It goes once you've
  held it, or after a few seconds.
  Check: Home: on the first open after updating, a tip under the menu button reads "Tip: hold to jump to any page".

### Enhancements
- **Deck picture opens the deck**: on Decks, tapping a deck's picture
  in the list opens its page, the same as tapping its name.
  Check: Decks: tap a deck's picture in the list; its page opens.

## 1.83.3 -- 2026-10-10 -- Stricter types
Summary: Behind the scenes: TypeScript's strict checks are on for the files that pass them, and the list grows file by file.

### Behind the scenes
- **Strict type checks, file by file**: the code compiled with strict
  checks off, so a wrong type went unseen (the first file cleaned had a
  list typed as a single string). A strict build now runs with every test
  run and must pass for the 13 files on its list (the start-up code, the
  on-demand loader, the data tables, and a first few screens); the rest
  are counted, and the closest to clean are named so the list keeps
  growing.

## 1.83.2 -- 2026-10-10 -- Faster start
Summary: The app opens faster: the first screen downloads about a fifth of what it used to, and the other screens load in the background.

### Enhancements
- **Faster to open**: the whole app used to arrive as one 2.6 MB file
  before anything showed. Now the first screen needs about 560 KB; the
  game table, deck page, stats, history, loadout, settings, guide and
  the rest are separate files fetched in the background right after the
  first screen is up, so switching tabs still doesn't wait. If one of
  them can't load (a new version replaced the files while the app was
  open), that screen offers a Reload button instead of going blank.
  Check: Home: close and reopen the app; Home appears sooner than before, and tapping Stats, History and Game right away shows each one without a wait.

### Behind the scenes
- **The code is split into files**: the 32,000-line App.tsx is now a
  core (about 250 KB) plus files for data tables, shared helpers, shared
  components and one file per screen. The test suite reassembles them,
  so every existing check still runs.

## 1.83.1 -- 2026-10-10 -- Easier to read and tap
Summary: The smallest text is now 11 points everywhere outside the game table, and small buttons are taller on a phone.

### Enhancements
- **Bigger small text**: about 1,200 labels, notes and badges were 9 or
  10 points, below what phones recommend. Nothing outside the game table,
  playtester, Momir board and dungeon map is under 11 now; those stay as
  they were because they're fitted to the screen.
  Check: History: open a game; its chips, turn times and notes read at 11 points or more.
- **Taller small buttons**: on a touch screen a small button is now at
  least 32 points tall, and the invisible touch area around it adds a
  little more, so Info, Edit, Delete and chip buttons are easier to hit.
  Decks shows "unplayed" instead of "never played" so a deck's row still
  fits on one line.
  Check: Decks: a deck's row shows unplayed (or last played), its links and Info on one line, and the text under each deck reads at the same size as History's.

## 1.83.0 -- 2026-10-10 -- Kept and undoable
Summary: The app asks the browser to keep its storage for good, and every delete now works the same way: at once, with Undo and the Trash.

### New features
- **Storage kept for good**: everything lives in this browser's storage,
  which it may clear when the phone runs low on space. The app now asks
  once to keep it permanently (a home-screen app is usually allowed
  without a prompt). Settings > Data shows the answer, with Ask to keep
  it if it was refused.
  Check: Settings > Data: a line under Backup and restore says whether storage is kept for good on this phone.

### Enhancements
- **One way to delete**: deletes asked in four different ways (a pop-up,
  "Sure? Yes/No", "Delete it / Keep", "Tap again"). Now Delete acts at
  once, an Undo pop-up offers it back, and the item waits in the Trash
  for 30 days. That covers games, Clear all game history, decks,
  loadouts, accessories, boxes, seasons, palettes, custom planes,
  tournaments and decklists; taking a name or a venue off your games, and
  removing a matchup note, act at once with Undo. A question still comes
  first only where nothing can be taken back: importing over your data,
  linking a device, discarding a game in progress, and deleting from the
  Trash for good.
  Check: History: open a game and tap Delete; it goes at once, Undo brings it back, and without Undo it's in Settings > Data > Trash.

## 1.82.1 -- 2026-10-10 -- Hold menu, no reload
Summary: Dragging down in the hold-the-menu ring no longer brings up the pull-to-reload button.

### Bug fixes
- **Reload over the hold menu**: sliding a finger down to a bubble of the
  hold-the-menu ring also counted as pulling the page down, so "Let go
  for the reload button" showed over the ring and the button came up when
  you let go. A pull is ignored while the ring is open.
  Check: Settings: hold the menu button, slide down to History and let go; History opens and no reload button appears.

## 1.82.0 -- 2026-10-10 -- Trash
Summary: Deleted things go to a Trash for 30 days, where you can restore them, before they're gone for good.

### New features
- **Trash**: a deleted game, deck (with the games logged with it),
  loadout, accessory, box, tournament, season, decklist, palette or
  custom plane now waits in Settings > Data > Trash for 30 days. Restore
  puts it back where it was; Delete removes one for good, and Empty trash
  clears them all. Clearing all of History lands there too, as one item.
  Items older than 30 days are emptied each time the app opens. A month
  is long enough to notice something missing between game nights, and
  the Trash keeps to the newest 150 items so it never crowds out your
  real data. It stays on this phone: it isn't synced or put in backups.
  Check: Settings > Data > Trash: delete a game in History, then open Trash; it's listed with "goes for good in 30 days", and Restore puts it back in History.

## 1.81.2 -- 2026-10-10 -- Won by, unnamed
Summary: A game logged while one opponent is still in shows them as the winner, even when their seat kept its default name.

### Bug fixes
- **Winner left blank for "Player 2"**: 1.80.5 credited the one opponent
  still in only when they had a name, so a game against seats left with
  their default names showed no winner. Any seat counts now; the
  opponent stats still skip unnamed seats as before.
  Check: Game: in a 3-player game with the default seat names, scoop the third seat, then Log Game with placement 2nd; History shows "Won by: Player 2".

## 1.81.1 -- 2026-10-10 -- Reset to original
Summary: The sound trimmer keeps your original file, and Reset puts it back.

### Enhancements
- **Reset to original**: a trimmed sound keeps the file you first picked.
  Opening Trim again shows the whole original with your last handles, so
  you can re-trim without losing anything, and "Reset to original" puts
  the untrimmed file back in place right away. Both files go into backups.
  Check: Settings > Look > Sounds: trim your Big loss sound and save, open Trim again and tap Reset to original; the file name loses "(trimmed)" and it plays whole.

## 1.81.0 -- 2026-10-10 -- Trim your own sounds
Summary: Your own life sounds play exactly as you saved them, and a new Trim edits the sound file itself.

### New features
- **Trim a sound of your own**: each of your own life sounds has a Trim
  button. Drag the start and end, cut out a middle part if you like, add a
  fade-out, and hear it with Play. "Fit to 1 second" keeps the first and
  last half-second. Save trimmed writes the trimmed sound as a new file in
  place of the old one, so it plays that way everywhere, backups included.
  Check: Settings > Look > Sounds: with your own Big loss sound set, tap Trim, then Fit to 1 second and Save trimmed; the file now ends in "(trimmed).wav" and -5 in a game plays about a second.

### Removed
- **Automatic shortening**: 1.80.6 to 1.80.8 shortened long loss sounds as
  they played, a rule made for one sound that would have changed anyone's
  upload. Every sound of your own now plays whole unless you trim it.
  Check: Game: with your own Life lost sound longer than a second, tap -1; it plays to its end.

## 1.80.8 -- 2026-10-10 -- Gains play whole
Summary: Your own life-gain sounds play to the end again; only the loss sounds are shortened.

### Bug fixes
- **Gain sounds cut short**: the shortening added for a long -5 sound
  applied to every tap, so your own gain sounds lost their endings too.
  Only Life lost and Big loss are shortened now; your gain sounds play
  whole, as they did before.
  Check: Game: with your own Life gained sound set, tap +1; it plays to its end.

## 1.80.7 -- 2026-10-10 -- The last note stays
Summary: A long clip of your own keeps its last note: the middle is cut instead of the end.

### Enhancements
- **Your own sound, both ends kept**: 1.80.6 cut a long clip off at a
  second, which lost the note at its end. The clip is now squeezed to that
  second by playing its start, skipping the middle and landing on its last
  half-second, with a short crossfade at the join. A clip that already fits
  plays whole, and a held button's sound still runs until you let go.
  Check: Game: with your own Big loss sound set, tap -5; you hear the clip's start and its last note, within about a second.

## 1.80.6 -- 2026-10-10 -- Centred, sized, trimmed
Summary: The centre menu sits where the seats meet on an iPhone, the hold-the-menu ring fits at every text size, style previews play the built-in sound, and your own tap sounds are trimmed to the roll.

### Enhancements
- **Your seat in Game setup, simpler**: name, deck and bracket are all
  that show. "Or type a deck name not in your list" and the partner box
  fold into one link -- "Not one of your decks? Type the commander" --
  that opens the commander box (with its own partner link) only when you
  want it, and goes away once you pick a deck.
  Check: Game setup: your seat shows name, deck and bracket, then one link; tap it and the commander box opens; pick a deck and the link is gone.

### Bug fixes
- **Page bubbles at XS and XL text**: with a text size other than Normal
  the hold-the-menu ring was drawn at the wrong scale -- off the right
  edge at XL, bunched into the top-left at XS. It allows for the text
  size now.
  Check: Settings > Look: set Text size to XL, then hold the menu button; every bubble is on screen, and sliding to Stats opens it. Same at XS.
- **Retro / Modern played your own sound**: switching the sound style, and
  Try it, are previews of the built-in style, but they played your own
  life sound when you had one. They play the built-in counter now.
  Check: Settings > Look > Sounds with your own life sound set: tap Retro, then Modern; the preview is the built-in counter, not your sound.
- **Your own sound ran long**: a long clip of your own kept playing well
  after the -5's roll. A tap's sound now plays for about a second and
  fades out; a held button's sound still runs until you let go.
  Check: Game: with your own Big loss sound set, tap -5; the sound ends about a second in, with the roll.
- **Centre menu too high on iPhone**: with three seats, the menu covered
  the two side seats' bottom buttons. It was placed from the top of the
  screen while the seats start below the Dynamic Island, so it sat about
  60 pixels above the point where the three seats meet. It's measured from
  the safe area now -- in the Y, in the five- and six-seat lane and in the
  middle of a four-seat table.
  Check: Start a 3-player game: the centre menu's point meets the Y where the three seats join, and every side-seat button is clear of it.

## 1.80.5 -- 2026-10-10 -- Undo the last scoop
Summary: Two more from the review of the game's core: Undo takes back the scoop that ended a game, and a logged game credits the one opponent still in.

### Bug fixes
- **Undo on the winner screen**: when the game ended on a concession,
  "Undo last change" said a pass can't be undone and left the seat
  scooped, so the only way on was to log or start over. The scoop is
  undone now, and the game carries on.
  Check: In a 2-player game tap Scooped on the other seat, then Undo last change on the winner screen; the seat is back in and the game goes on.
- **Who won when you log early**: a game logged while you'd placed below
  1st and exactly one named opponent was still in marked nobody as the
  winner, so their record and your nemesis stats missed it. That opponent
  is credited now.
  Check: Game: in a 3-player game scoop one opponent, then Log Game with placement 2nd; History shows the other opponent as the winner.

## 1.80.4 -- 2026-10-10 -- Looked over
Summary: A review of the last ten releases and the game's core: four fixes, no new features.

### Bug fixes
- **Partner box after the game**: once a game was over, typing a partner
  in the log form was refused with "The game is over" (naming your
  commander wasn't). Both boxes work after the game now.
  Check: Win a 2-player game, Log the game, FULL; type in Your partner / Background; it takes the name with no toast.
- **Un-scooping a seat that's out**: taking a scoop back put a seat back
  in from its life alone, so one that was out on ten poison or 21 from a
  single commander came back. It stays out now, as a life gain already did.
  Check: Give a seat 21 commander damage, tap Scooped, then tap it again to undo; the seat is still out.
- **Three teams, one out**: in Two-Headed Giant with three teams, a team
  that was out still got its turns, and the turn number only moved when
  the first team came up. The pass skips an out team, and the turn counts
  from whichever team leads the round.
  Check: Start a 6-player 2HG with 3 teams, scoop one head of Team B, pass from Team A; Team C is up, and the next pass reads Turn 2 for Team A.
- **Typed commander, logged**: a game logged with a commander typed in
  place of one of your decks can now have that commander and partner
  corrected in History > Edit, and the session's shared text names it
  instead of "(unknown deck)".
  Check: History: edit a game played with a typed commander; Your commander and partner boxes show under Your Deck.

## 1.80.3 -- 2026-10-10 -- Clear of the island
Summary: The hold-the-menu page bubbles stay clear of the Dynamic Island.

### Bug fixes
- **Page bubbles behind the Dynamic Island**: holding the menu button
  fanned the top bubble up behind the island, where it couldn't be
  reached. The ring now stays inside the screen's safe area, dropping a
  little below your finger when it has to; slide to a bubble as before.
  Check: Home: press and hold the menu button; every bubble sits below the Dynamic Island, and sliding to Home opens it.

## 1.80.2 -- 2026-10-09 -- Your partner, kept
Summary: A commander you type instead of picking a deck takes a partner right there, and the logged game keeps both.

### Enhancements
- **Partner for a typed commander**: in Game setup, under "Or type a deck
  name not in your list", the Partner / Background box is always there
  (no link to find), and the log form has one under Your commander too.
  Check: Game setup: type a commander under Or type a deck name not in your list; the Partner / Background box is right below it.

### Bug fixes
- **The logged game kept no commander**: a game played with a commander
  you typed (not one of your decks) saved neither it nor its partner, so
  History showed "(no deck)". It keeps both now and shows them there --
  "Tymna the Weaver + Thrasios, Triton Hero" -- and History's search finds
  them.
  Check: Log a game played with a typed commander and partner; History shows both names on that game.

## 1.80.1 -- 2026-10-09 -- Facing you
Summary: Tile pictures turn to face the player in that seat, and the game screen's code has room to grow.

### Enhancements
- **Tile art faces its player**: a seat's picture (commander art or a
  photo) used to sit the same way up on every tile, so the seats on the
  sides saw it sideways and the seat across saw it upside down. It now
  turns with the seat, upright for whoever sits there, and still fills the
  whole tile.
  Check: Start a 4-player game with Commander art on tiles on; each seat's art is upright from that player's side.

### Behind the scenes
- **Room in the game screen**: the game log form moved out of the game
  screen's main code into its own part, freeing about a fifth of that
  code's size limit for the next features. Nothing looks or works
  differently.
  Check: Finish a game and open Log game; the form works as before.

## 1.80.0 -- 2026-10-09 -- Partners at the start
Summary: Give any seat a partner or Background in Game setup.

### New features
- **Partner or Background in Game setup**: under a seat's commander,
  "+ Partner / Background" opens a second box (and an x takes it away
  again) -- for your seat and everyone else's. The folded row reads
  "Tymna the Weaver + Thrasios, Triton Hero", and at the table that seat
  has two Casts rows and two commander-damage rows. Two typed into one box
  as "A // B" split by themselves when the game starts.
  Check: Game setup: open another player, type their commander, tap + Partner / Background and type the partner, start; their seat menu shows a Casts row for each.

## 1.79.1 -- 2026-10-09 -- Art from a typed name
Summary: Commander art for a tile also comes from a commander only typed in Game setup, even when it isn't spelled exactly.

### Enhancements
- **Art from a typed commander**: a seat with no deck, just a commander
  typed in Game setup, gets its art on the tile too -- from Seat look >
  Commander art, or by itself with Commander art on tiles switched on. A
  typo or a short name ("atraxa") is found by Scryfall's closest match,
  and two partners typed together use the first one's art.
  Check: Game setup: type a commander for a player with no deck, start the game, then that seat's menu > Seat look > Commander art; its art shows.

## 1.79.0 -- 2026-10-09 -- Art on every tile
Summary: Commander art on tiles is sharp and can be the default, and five seats no longer overlap on an iPhone.

### New features
- **Commander art on tiles by default**: Settings > Play > Commander art
  on tiles. On, each seat with a deck or commander gets its commander's
  art when the game starts; a seat's own picture, or None, still wins.
  Check: Settings > Play: switch on Commander art on tiles, start a game with your deck; your tile shows its commander's art.

### Bug fixes
- **Sharp commander art**: the tile used the deck's small saved thumbnail,
  stretched to fill it, so it came out blurry. It uses the full art crop
  now, and the blurry pictures saved in 1.77.3 are cleared once.
  Check: Start a game with your deck, open your seat's menu > Seat look > Commander art; the art is sharp.
- **Five seats overlapped on an iPhone**: the sideways seats' life
  buttons ran into each other. Their rows are sized from the table itself
  now, so the buttons fold into two columns when the rows are short.
  Check: Start a 5-player game; no seat's buttons overlap.

## 1.78.0 -- 2026-10-09 -- Partner, mid-game
Summary: Add a partner to a seat in the middle of a game, with its own commander tax.

### New features
- **Add a partner mid-game**: a seat's menu > Commander has a + Partner
  button when the seat has one commander. Name the partner (or leave it
  blank) and tap Add: it gets its own Casts row for its tax and its own
  commander-damage row on everyone else, and the game log notes it. Damage
  already dealt by the first commander stays where it was.
  Check: Game: open a seat's menu > Commander, tap + Partner, type a name and Add; a second Casts row shows and counts its own tax.

## 1.77.3 -- 2026-10-09 -- Your art, your commander
Summary: Commander art shows on a tile again, each tile names its commander, and the title stays tucked when a scroll down settles.

### Bug fixes
- **Commander art on a tile**: Seat look > Tile picture > Commander art
  did nothing for a deck with its own art -- the deck's saved picture
  was handed to the tile in a form it couldn't draw. It shows now.
  Check: Start a game with a deck that has art, open your seat's menu > Seat look > Commander art; the tile shows the art.
- **Each tile names its commander** (1.76.0-2): the table showed a
  player's name but not what they were on. The commander now sits under
  the name, short ("Atraxa", "Tymna + Thrasios").
  Check: Game setup: name a player and pick your deck, then tap Quick start; your tile shows your commander under your name.
- **Title stays tucked** (1.76.0-4): on iPhone, the bounce at the end of a
  scroll down read as a scroll up and brought the title back. It now
  takes a real scroll up.
  Check: History: scroll all the way down; the title stays tucked after the page settles, and comes back when you scroll up.

## 1.77.2 -- 2026-10-09 -- Partners, typed together
Summary: Two partners typed into one commander field split onto Commander and Commander 2 by themselves, and the Fan Content notice sits in small print in Settings > App.

### Enhancements
- **Partners typed together**: a commander field reading "Tymna the
  Weaver // Thrasios, Triton Hero" now splits onto Commander and Commander 2
  when you save, like a commander and its Background already did -- one Casts
  row and one tax each. It splits only when both halves pair (Partner,
  Partner with, Friends forever, Doctor's companion, a Time Lord Doctor),
  so a double-faced card like Esika stays one card.
  Check: Decks > a deck > Edit: type "Tymna the Weaver // Thrasios, Triton Hero" as the commander and save; Commander 2 reads Thrasios, Triton Hero.
- **Fan Content notice**: the line the Wizards Fan Content Policy asks
  for, plus a credit for Scryfall's card data, in small print under the
  user guide.
  Check: Settings > App: under the user guide, the small print reads "unofficial Fan Content".
- **Rules download asks honestly**: the Worker fetches the Comprehensive
  Rules under the app's own name rather than posing as a phone browser.
  Check: Rules > Comprehensive Rules: tap Load the Comprehensive Rules (or Check for a newer release once they are saved); no error shows, and the effective date reads.

## 1.77.1 -- 2026-10-09 -- Every box has a name
Summary: Every text box and picker now tells a screen reader what it is.

### Enhancements
- **Screen-reader names**: VoiceOver read about 60 text boxes and pickers
  as a bare "text field" or "pop-up button" -- the format picker, the
  bracket range, a deck's color and tier, the price-alert pickers, game
  setup's player names and more. Each one now says what it's for, and a
  test keeps every new one named.
  Check: Game setup: with VoiceOver on, touch the format picker; it reads "Format".

## 1.77.0 -- 2026-10-09 -- Hold to jump
Summary: Hold the menu button for page bubbles, five and six seats keep their life totals clear, three seats sit in a Y sideways too, and the last card names became tappable.

### New features
- **Hold the menu button to jump**: press and hold the menu button (top
  right) and a small bubble for each page fans out round your finger;
  slide onto one and let go to open it. Let go anywhere else and nothing
  happens; a quick tap still opens the side menu.
  Check: Home: press and hold the menu button, slide onto Stats and let go; Stats opens.

### Enhancements
- **Five and six seats**: the centre menu sat on the middle row's life
  totals. It now has its own lane above the last row (and stays level
  there), and on a small phone the sideways seats' buttons go to two rows
  so every seat fits.
  Check: Start a 6-player game: every seat's life total and buttons are clear of the centre menu.
- **Three seats sideways**: the Y for three seats now works with the phone
  on its side and on an iPad too -- the seat on the left comes to the
  point, the other two share the right side, all meeting at Pass.
  Check: iPad: start a 3-player game; the three seats meet at the Pass button.
- **More card names to tap**: a deck's list versions ("+ A, B | - C"), the
  journal's List updated lines, the bracket check's evidence (Game
  Changers, fast mana, extra turns) and the game log's Momir and token-copy
  lines now open the card when you tap a name.
  Check: A deck's page > Decklist: in the bracket check, tap a Game Changer's name; its card opens.

## 1.76.0 -- 2026-10-09 -- Around the table
Summary: Three seats sit around the Pass button, Quick start keeps your setup, Reset goes back to your defaults, the title comes back when you scroll up, and every release check has a Go there.

### New features
- **Three seats in a Y**: a 3-player game, or Two-Headed Giant with three
  teams, now sits round the centre button like a table. The two players
  across from you get the long sides, facing out; yours runs along the
  bottom and comes to a point at the top, so all three meet at **Pass**.
  Each tile's buttons stay clear of the centre menu, the turn outline
  follows the angled edges, and on a small phone the side buttons go
  compact.
  Check: Start a 3-player game: the two other seats face the long sides, yours faces you, and all three meet at the Pass button.

### Enhancements
- **Quick start keeps your setup**: if you've already filled in Game
  setup (names, decks, commanders, brackets, who goes first), Quick start
  uses all of it and goes straight to the table.
  Check: Game setup: name a player and pick your deck, then tap Quick start; the table shows that name and deck.
- **Reset goes back to your defaults**: Reset on Game setup now puts the
  format, pod size, starting life and bracket back to your defaults
  (Settings > Play), not just the seats.
  Check: Game setup: pick Two-Headed Giant, tap Reset; it's back to your default format.
- **Title comes back on scroll up**: scrolling down still tucks the
  Commander Loadout & Ledger title away; any scroll up brings it back
  above the page bar, not just at the very top.
  Check: History: scroll down the list, then up a little; the title slides back in above the page bar.
- **Matchup notes, tidier**: commanders with a note show as compact rows
  (note and Edit); the rest are one row of chips -- tap one to write its
  note. A commander you add ahead of time is always offered in Game setup,
  however many that player has played.
  Check: Playgroup > a person: tap a commander chip under Matchup notes, write a note, save; it moves up into the noted rows.
- **Simple mode lives in Look**: the Simple mode switch is under
  Settings > Look with the other look-and-feel settings.
  Check: Settings > Look: the Simple mode switch is at the top.
- **Go there everywhere**: every check in the release notes has a Go there
  button again, including ones written as a step ("Two-Headed Giant game:
  ...", "Sounds on Full: ...", "Rules > Glossary").
  Check: Settings > App > What's new: open 1.70.0; every check has a Go there.

### Bug fixes
- **Commander and Background in one field**: a deck whose commander read
  "Wilson, Refined Grizzly // Raised by Giants" was taken as one double-faced card,
  so a game showed one Casts row and one tax. A commander typed with its
  Background like that is split onto Commander and Commander 2 when the
  app opens (a real double-faced commander is left alone).
  Check: Game with a commander and Background deck: the seat menu's Commander section has a Casts row for each.

## 1.75.0 -- 2026-10-09 -- Know them before you meet them
Summary: Add a friend's commander to matchup notes before you've played it, and the feel settings now do exactly what they say.

### New features
- **Matchup notes ahead of time**: on Playgroup, each person's Matchup
  notes has an **Add a commander** box, so you can note a deck of theirs
  you haven't played against yet. It's marked "not played yet" (Remove
  takes it off), Game setup offers it as a commander chip for that player,
  and its notes show when it sits down, like the rest. The notes now show
  even for someone whose commanders were never recorded.
  Check: Playgroup > a person: type a commander in Add a commander and add a note; in Game setup pick that person and the commander is offered.

### Enhancements
- **Feel settings, set right**: Look now has its own **Feel** heading for
  Animations, Haptics, Sounds and Easter eggs.
  - **Animations at None** really is still: the flash when + and - are held
    together and the long-turn clock blink no longer loop, buttons don't
    spring, fold arrows don't turn and scrolls jump instead of gliding.
  - The descriptions say what each level does: Low keeps life totals
    ticking and cards turning over; High adds the show pieces.
  - **Sounds at Subtle** says it plays your own life sounds turned down,
    and the hold-both jackpot is a Full sound only (no silent ticker
    running at Subtle).
  - In Simple mode the Animations picker shows your own choice (Simple
    mode still plays High as Low).
  Check: Settings > Look > Feel: set Animations to None, open and close a section; its arrow and the section change in place without moving.

## 1.74.0 -- 2026-10-09 -- Tap any card
Summary: Every list of cards in the app now lets you tap a name to see the card.

### New features
- **Tap a card name to see it**: wherever the app lists cards, the names
  have a dotted underline; tap one for the card's picture, mana cost, type
  and text (double-faced cards flip). That covers a deck's Show list,
  Game Changers, role and composition rows, threats and interaction, combos
  (the Spellbook link sits after them as "how it works"), the Scryfall check
  results, where-to-look advice, How it wins, the staples, Land fixes, the
  wishlist and collection lists, swap ideas, Find a card, legality notices
  and Commander ideas. Tapping the rest of a row still does what it did.
  Check: A deck's page > Decklist: tap a Game Changer's name; its card opens over the page, and tapping outside closes it.

## 1.73.3 -- 2026-10-09 -- Right where you left it
Summary: Two-Headed Giant starts at 60 and its six-player table no longer hides buttons, decks opened from Loadout close back to Loadout, case weights corrected, and cards turn over with less spin.

### Bug fixes
- **Two-Headed Giant starts at 60**: Game setup showed 40 starting life
  for Two-Headed Giant (the general default). Each team starts at 60 now
  (more for bigger teams), whether 2HG is your default format, picked in
  setup, or restored from a game in progress; switching back to another
  format puts your usual starting life back.
  Check: Game setup: pick Two-Headed Giant; Starting life reads 60. Pick free-for-all; it goes back to your usual number.
- **Game setup layout**: the turn clock row no longer spreads out down
  the page beside Planechase and House rules; those rows take the full
  width.
  Check: Game setup: the Turn clock pills sit together in one compact row.
- **Back to Loadout**: a deck opened from Loadout's Case view or Home
  storage jumped to the Decks page, so closing it left you there. It opens
  over Loadout now, and closing it puts you back where you were.
  Check: Loadout: open Case view, tap a deck, close its page; you're still on Loadout.
- **Case weights**: the estimated weight had the Stanley lighter than
  the DeWalt. Going by the listed specs, a Stanley FatMax Pro organiser is
  about 1.93 kg empty and a DeWalt ToughSystem deep organiser about
  1.7 kg, so the Stanley is the heavier case. Sleeves were too light too
  (about 1.25 g each, not 0.6), a Boulder is about 112 g and the Peak Design
  7L sling 335 g. Every weight can still be corrected under Weights.
  Check: Loadout: pack one deck in a Stanley and one in a DeWalt; the Stanley's weight is higher.

- **Six-player Two-Headed Giant table**: with three teams the centre menu
  sat on the middle team's life buttons, and the "Tap to turn on shake to
  roll" pill covered your team's seat menus. The centre menu now has its own
  lane between the other teams and yours, the pill sits just above it, and
  the team bands are more compact (on a small phone the names line, already
  on the seat menus, steps aside).
  Check: Start a 6-player Two-Headed Giant game with 3 teams of 2; every team's buttons are clear of the centre menu and the shake pill.

### Enhancements
- **Card flip**: turning a card over is a plain half-turn now instead of
  one and a half turns.
  Check: Tap a double-faced card's picture; it turns over once, without extra spinning.

## 1.73.2 -- 2026-10-09 -- Fits the bar
Summary: The phase bar's last step no longer spills over the table's center menu.

### Bug fixes
- **Phase bar on the last step**: with the phase bar on, the last step read
  "End / Cleanup · pass", too long for its button, so it ran over the arrows
  and the menu button in the table's center. It reads **Cleanup · pass**
  there now, and a long step name shrinks to fit.
  Check: Game at the table with the phase bar on: step to the last stop; "Cleanup · pass" sits inside its button, clear of the menu button.

## 1.73.1 -- 2026-10-09 -- One way to filter
Summary: Every filter in the app now looks and works the same way.

### Enhancements
- **Filters, all alike**: wherever you narrow a list (Decks, Loadout,
  History, Stats, Playgroup, tournament pools, seasons), filters clear the
  same way -- the **Filtered by ... Clear filters** bar under them (the red
  Clear All and the tournament's CLEAR FILTERS are gone) -- and dropdowns
  start at **Any**. Stats' deck, pod size and house rule filters are labelled
  dropdowns like History's, pod sizes read "4 players" everywhere, Time span
  is the usual pill row, and the header says "filtered" for any filter, not
  just brackets. History uses the same search box as the deck filters.
  Playgroup's show chips and sort use the usual pill row and Sort fold, and
  venues say **Regulars** like people do. Decks' Sort & group is the usual
  Sort fold. Seasons write brackets B1-B5, and tournament play history is a
  dropdown like the deck filters'.
  Check: Stats: open Filters and pick a pod size; the bar under the filters reads "Filtered by Pod size", and Clear filters resets it.

## 1.73.0 -- 2026-10-09 -- Spin, weigh, theme
Summary: Cards spin to turn over, the stats infographic moves to Stats in a bolder layout, and loadouts get an estimated weight and a themed builder.

### New features
- **Themed loadout**: Loadout > **Themed loadout** builds a night around a
  deck theme (tokens, mill...), a commander creature type (read once from
  Scryfall), a color or color identity, or a precon set or release year.
  Pick one to see the decks that fit, then **Pack all** or pack a few at
  random into your cases.
  Check: Loadout > Themed loadout > Color > Has Black > Pack 8 at random; eight black decks land in your cases.
- **Estimated weight**: Deck Assignment shows the loadout's estimated weight
  in kg and lb, case by case, from typical weights for cards, sleeves, deck
  boxes, cases and accessories. **Weights** lets you correct any of them
  (weigh one and type it in); they're kept with your inventory.
  Check: Loadout: pack a few decks; Estimated weight shows, and changing a case's weight under Weights changes it.
- **Infographic on Stats**: the stats image builder is on the Stats page
  under **Infographic**, redrawn in a bolder layout: a big name headline, a
  giant win-rate tile with games, wins and streak beside it, and the sections
  you pick as rounded tiles, in a phone-shaped 4:5 image.
  Check: Stats > Infographic > Make graphic; the image shows the big win-rate tile.

### Enhancements
- **Cards spin to turn over**: flipping a double-faced card spins it round
  onto its other face, and tapping the picture flips it too (in card details
  and in the commander art view).
  Check: Open a double-faced commander's art and tap the picture; it spins to the back face.
- **Threats and interaction, open**: the deck page's threat/interaction
  read shows both card lists without tapping Which cards.
  Check: Open a deck's Decklist tab; the Interaction and Threats lists are showing.

## 1.72.0 -- 2026-10-09 -- Case view
Summary: Your cases drawn with each deck's art in its slot, decks you can drag between cases, and every loadout a venue or person has seen.

### New features
- **Case view**: Loadout > Home storage and each loadout's Deck Assignment
  have a **Case view** that draws your cases like the real ones -- a
  Stanley's 12 slots (7 and the insert when it's in), a DeWalt's 6 with
  accessories in their slots, and so on -- with each deck's commander art
  (or your own picture) filling its slot, a bracket stripe on top and the
  name along the bottom. Empty slots are dashed. Tap a deck to open it;
  press and hold, then drag it into another case to move it, onto another
  deck to swap the two, or to No room / Not packed to take it out. Case
  limits still apply.
  Check: Loadout > Home storage > Case view: hold a deck, drag it onto a deck in another case; the two swap places.
- **Loadouts on Playgroup**: open a venue or a person on the Playgroup page
  and **Loadouts** lists every loadout tied to them: packed for that venue,
  packed expecting that person, or used in a game there or against them.
  Tap one to load it.
  Check: Playgroup: open a venue you've packed a loadout for; it's listed under Loadouts, and tapping it loads it.

## 1.71.0 -- 2026-10-09 -- Teams of three, held sounds
Summary: Six players in Two-Headed Giant can play three teams of two or two teams of three, and your own life sounds get a held-down slot.

### New features
- **Two teams of three**: in Game setup, Two-Headed Giant with 6 players
  now asks **3 teams of 2** or **2 teams of 3**. Teams of two start at 60
  (Commander's usual) and lose at 15 poison; teams of three start at 90 and
  lose at 20, the rules' Three-Headed Giant scaled to Commander life (rule
  810.11). Seats fill a team at a time, and the turn passes team by team.
  Check: Game setup: Two-Headed Giant, 6 players, 2 teams of 3; starting life reads 90, and passing the turn moves from Team A to Team B.
- **Held down sounds**: Your own life sounds has two more slots, **Held
  down: losing** and **Held down: gaining**. A single step of 5 plays your
  Big loss or Big gain sound; keep holding a life button (or a table tile)
  and the Held down sound takes over, plays once through the hold without
  restarting at every step, and fades when you let go.
  Check: Settings > Look > Sounds: put a medium sound in Big loss and a long one in Held down: losing, then in a game hold a life button down; the medium plays on the first step, then the long one until you let go.

## 1.70.0 -- 2026-10-09 -- By the book
Summary: Every game mode checked against the Comprehensive Rules (September 2026), and a switch between your own life sounds and the built-in ones.

### New features
- **Out another way**: a seat's menu (and the list view's seat panel) has
  **Out another way (decked, a card)** beside **Scooped**, for a player who
  drew from an empty library or lost to a card that says so (rules 104.3c,
  104.3e). It takes them out like a scoop but is logged as a loss, not a
  concession, and tapping it again brings them back.
  Check: Game: open a seat's menu and tap Out another way; the seat is out, and the logged game doesn't call it a concession.

### Enhancements
- **Your sounds or the built-in ones**: once you've picked a life sound,
  Settings > Look > Sounds > Your own life sounds has a **Use your own
  sounds** switch. Off plays the built-in Life Point counter again and keeps
  your files for later. It's this phone's own choice.
  Check: Settings > Look > Sounds: with a life sound picked, switch Use your own sounds off; losing life in a game plays the built-in counter.

### Bug fixes
- **Your own life sounds on an iPhone**: picking a sound could fail there.
  The picker now names MP3, M4A, AAC, WAV and CAF (with a **Let me pick any
  file** switch if a file is still greyed out), goes by the file's extension
  when the iPhone leaves its type blank, wakes the audio on the tap, and
  keeps the sound in the phone's storage even where its database refuses.
  For now, each pick shows its steps on screen (picked, checked, read,
  decoded, stored, playback test), with **Copy** to send them over.
  Check: Settings > Look > Sounds: Life lost > Choose an M4A from the Files app; every step under it shows a tick and the sound plays.
- **Two-Headed Giant commander damage**: commander damage counts against the
  player it hits, not the team (rule 903.10a), so 11 to one head and 10 to
  the other is no longer lethal. The life still comes off the shared total,
  and 21 to either head takes the whole team out (810.8a).
  Check: Two-Headed Giant game: give one head 11 commander damage and the teammate 10 from the same commander; the team is still in.
- **Two-Headed Giant concessions**: a player who scoops takes their team out
  with them (810.8b).
  Check: Two-Headed Giant game: Scooped on one head; both heads on that team are out.
- **Free first mulligan is the rule**: in any multiplayer game the first
  mulligan is free (103.5c), so it's no longer listed as a house rule, the
  log form counts a kept 6 as two mulligans, and Mulligan practice calls the
  switch **Multiplayer: first mulligan free** and lets you go down to zero.
  Momir games with three or more players get the free one too.
  Check: Log a 4-player game with Mulligans taken 2; it reads Kept 6.
- **Partner tax**: each partner commander has its own **Casts from command
  zone** count and tax (702.124d).
  Check: Game with a partner pair: the seat menu's Commander section has a Casts row for each, and the tax shows as +x/+y.
- **Poison warning in Two-Headed Giant**: the counter turns red at 15, the
  team's limit, not 10 (810.8d).
  Check: Two-Headed Giant game in the list view: give a seat 10 poison; the counter is not red until 15.
- **Undercity without the initiative**: moving on in Undercity never takes the
  initiative by itself (701.49b): **Move to** / **Venture to** just move you
  on, and **Took the initiative** passes it to you as you move.
  Check: Give one seat the Initiative, then another; open the first seat's Dungeon: Move to keeps the initiative where it is, Took the initiative takes it back.
- **Who's where** in the dungeon screen leaves out players who are out of
  the game (800.4a).
  Check: With two seats in dungeons, take one out of the game; Who's where no longer lists them.
- **Planechase in Two-Headed Giant**: each player on the team whose turn it
  is rolls on their own count, free the first time (901.12d), and a planar
  deck under ten cards says so (901.3).
  Check: Two-Headed Giant game with Planechase on: the plane shows a Roll button for each head, each free the first time.
- **Phase bar**: the last stop is **End / Cleanup**, naming the phase or step
  (500.1); tapping it still passes the turn.
  Check: Settings > Play > At the table: Phase bar on; the last step reads End / Cleanup.
- **Day and night**: once a game is day or night it stays one or the other
  (731.1), so **Off** is now **Clear (mistake)**, and day comes back when the
  active player casts two spells, not any player.
  Check: Game menu: start Day/Night; the button beside it reads Clear (mistake).
- **Rules wording**: the glossary and guide now match the rules on the
  monarch (draws at the beginning of the end step), the initiative (ventures
  at the beginning of each upkeep), dungeon completion, Undercity (only a
  "venture into Undercity" enters it), Commander's 40 life, commander tax,
  concessions, Two-Headed Giant's starting life and Planechase decks.
  Check: Rules > Glossary: Commander damage says it's tracked per player in Two-Headed Giant.

## 1.69.0 -- 2026-10-08 -- Shortcuts
Summary: Links that open the app straight on a page, for Android's long-press menu and an iPhone Shortcuts widget.

### New features
- **Shortcuts**: Settings > App > **Shortcuts** lists links that open the app
  straight on Start a game, Decks, History, Stats, Playgroup or Pack a
  loadout, each with Copy. On Android, long-press the installed app's icon
  for Start a game, Decks, History and Stats. On an iPhone, paste a link into
  an "Open URLs" action in the Shortcuts app and add a Shortcuts widget to
  the Home Screen.
  Check: Settings > App > Shortcuts: copy the Stats link and open it in Safari; the app opens on Stats.

## 1.68.0 -- 2026-10-08 -- Your sounds, your notes
Summary: Pick your own life-change sounds, and keep matchup notes on the commanders you face (and the people who play them).

### New features
- **Your own life sounds**: Settings > Look > Sounds > **Your own life
  sounds** swaps the Life Point counter for files you pick: life lost, life
  gained, a big loss (5 or more) and a big gain (5 or more). MP3, M4A or WAV
  up to 1 MB each; **Play** previews, **Remove** goes back to the counter.
  They play at Subtle and Full, and are kept on the phone and in backups
  (not in sync).
  Check: Settings > Look: Sounds on, Your own life sounds > Life lost > Choose a short sound file; it plays, and losing life in a game plays it.
- **Matchup notes**: on Playgroup, open a person: under **Matchup notes**,
  each commander they've played can have a note about the commander itself
  (whoever plays it) and one about this person's take on it. In Game setup,
  when an opponent and their commander are entered, both notes show under it
  (and can be added or edited there). Kept on the phone, in backups and
  sync, never in anything shared.
  Check: Playgroup > open a person > Matchup notes: add a note to one of their commanders, then in Game setup enter that person and commander; the note shows.

## 1.67.5 -- 2026-10-08 -- Steady
Summary: Low haptics now reach the list view's life buttons, and the Playgroup page no longer jumps as it opens.

### Bug fixes
- **Low haptics in the list view (for real)**: 1.67.3 fixed the Android side,
  but on an iPhone the list view's life buttons still gave no tick on Low,
  because they weren't marked as game buttons. The whole live game counts
  now.
  Check: Settings > Look: Haptics on Low, then in a game in the list view tap a life button: it ticks.
- **Playgroup doesn't jump**: every number on the page, the rows' game
  counts and dates included, counted up as it opened, so rows changed width
  and re-wrapped. Only the four highlight numbers count up now, and dates
  never do anywhere.
  Check: Animations on High, open Playgroup: the page stays still while the highlight numbers count up.

## 1.67.4 -- 2026-10-08 -- Rules you can change
Summary: House rules can be renamed and removed, they travel with backups and sync, and switching Table/Spotlight keeps the game menu open.

### Enhancements
- **Edit your house rules**: **Edit list** in Game setup's House rules (and
  under a venue on the Playgroup page) renames a rule or removes it, from
  the list and from every venue's rules. The built-in ones can be removed
  too, and brought back. Games already logged keep their rules as written.
  Check: Game setup > House rules > Edit list: rename one of your rules and remove another; the list updates.
- **House rules travel with you**: your own rules, the removed built-ins and
  each venue's house rules are now in backups and sync, so a new phone gets
  them.
  Check: Settings > Data > Back up, then restore that file on another device: your house rules and venue rules are there.
- **Table / Spotlight keeps the menu open**: switching the layout in the game
  menu's Display no longer closes the menu.
  Check: In a game, open the game menu > Display and switch between Table and Spotlight: the menu stays open.

## 1.67.3 -- 2026-10-08 -- Second look
Summary: A bug review of the week's changes: season standings, locked seasons, double sounds, the jackpot, Low haptics and a few smaller slips fixed.

### Bug fixes
- **Season standings credit every winner**: in a Two-Headed Giant game your
  partner got the win and you didn't (and only one of a winning team was
  credited). Both players on the winning team now get it, and a duel
  opponent whose win wasn't ticked is credited too.
  Check: Stats > Seasons: a season with a Two-Headed Giant game you won shows a win for you and your partner.
- **A locked season stays as it was**: renaming a locked season pulled in
  every game logged since it was locked. Its games now stay pinned.
  Check: Stats > Seasons: lock a season, log a game that would match, edit its name and save; the game count doesn't change.
- **Seasons after an import**: with Stats left open, importing a backup and
  then locking or deleting a season could put the old list back. Seasons
  now read what's stored each time.
  Check: Stats > Seasons, then import a backup in Settings > Data, then back in Seasons: the seasons are the imported ones.
- **Save as season from empty filters**: deck filters that matched no games
  made a season that matched every game. It stays empty now, and deck
  brackets carry over as the bracket played.
  Check: Stats > Filters: pick a color you've never played, Save as season; it says 0 games match.
- **Loaned-deck copies left out of seasons**: with "Only games that count"
  off, a loaned deck's copy of a game counted it twice.
  Check: Stats > Seasons: turn off Only games that count; no game is counted twice.
- **A new starting point refreshes the builder**: tapping Save as season
  while the builder was open kept the old draft.
  Check: Stats > Seasons > Start blank, then set a Stats filter and tap Save as season; the builder shows the filter's rules.
- **One sound per fold**: on Full, opening or closing a section played two
  sounds (a click and the slide). Now just the slide.
  Check: Sounds on Full, open and close a section: one two-note sound each time.
- **The reels stop with either finger**: holding a seat's + and - together,
  lifting the first finger left the slot reels spinning until the other
  lifted.
  Check: In a game, hold a seat's + and - together, then lift the first finger: the reels stop.
- **Low haptics in every game view**: on Low, an Android phone gave no buzz
  for list-view game buttons or when picking Low itself.
  Check: Settings > Look: Haptics on Low, then in a game in the list view tap a life button: it buzzes.
- **Holiday and achievement themes use their typeface**: they showed the
  fallback font until Settings > Look had been opened.
  Check: Turn on Holiday look: the headings use the theme's own typeface right away.
- **Game log closes clean**: closing the Game log with the X left a change
  armed to rewind the next time it opened.
  Check: In the table view, open the Game log, tap a change, close with X and reopen: no Rewind prompt waiting.
- **Stats house-rule filter refreshes**: changing only the House rules filter
  didn't update Stats.
  Check: Stats > Filters: pick a house rule; the numbers change.

## 1.67.2 -- 2026-10-08 -- Both views, every change
Summary: Four gaps from the audit closed: Day/Night Off and shake to roll in the list view, rewind from the table's Game log, and a No house rules chip in History.

### Enhancements
- **Day/Night Off in the list view**: once day and night have started, an
  **Off** link under the DAY/NIGHT button turns them off (it was only in the
  table view's game menu).
  Check: In a game in the list view, tap DAY/NIGHT, then Off under it: it reads --- again.
- **Rewind from the Game log**: in the table view, tap a change in the Game
  log to rewind the table to just before it (Rewind or Keep), as the list
  view's Changes already did. Changes now has **Show all** past its latest 60.
  Check: In a game in the table view, change a life total, open the Game log and tap that change: Rewind takes it back.
- **No house rules chip in History**: alongside the house-rule chips, **No
  house rules** shows only the games logged without any.
  Check: History: tap No house rules; only games without house rules are left.
- **Shake to roll in the list view**: with Shake to roll a d20 on, shaking the
  phone rolls in the list view too, not only the table view.
  Check: Settings > Play: Shake to roll on, then in a game in the list view shake the phone: a d20 rolls.

## 1.67.1 -- 2026-10-08 -- Everything does what it says
Summary: A feature-by-feature audit against the guide: seven things that fell short are fixed, and the guide now matches the app everywhere else.

### Bug fixes
- **Open rules opens the rules**: Settings > App > Open rules could open the
  User guide instead.
  Check: Settings > App > Open rules: the rules open, not the guide.
- **Low haptics stay in games**: on Low, an Android phone still buzzed for
  pull-to-reload, the art viewer, dragging a sheet closed and copying a
  check id. Low now buzzes only at a table.
  Check: Settings > Look: Haptics on Low, then copy a check id in What's new: no buzz.
- **Subtle stays quiet for achievements**: an achievement unlock played the
  life counter on Subtle. It's a fanfare on Full now, silent on Subtle.
  Check: Sounds on Subtle, log a game that earns an achievement: no sound.
- **A deck's name opens it**: in the roster, tapping a deck's name now opens
  its page, like Info.
  Check: Decks: tap a deck's name; its page opens.
- **Price drops look back 90 days**: wishlist price history only kept about
  30 days, so "under its highest price of the last 90 days" fell short.
  Check: Lists > Wishlist: price alerts compare against up to 90 days of prices once they've been collected.
- **Every Stanley takes the insert**: in the loadout builder, Stanley cases
  3 and 4 now drop to 7 decks when they carry token boxes or a playmat, as
  cases 1 and 2 (and the random loadout) already did.
  Check: Loadout: put a playmat in Stanley Case 3; it holds 7 decks.
- **Custom counters undo**: a seat's own counters weren't logged, so Undo
  and rewind skipped them. They're in the change log now.
  Check: In a game, add a counter to a seat, tap + on it, then Undo: it goes back.

### Enhancements
- **The guide matches the app**: about thirty passages that had drifted are
  corrected (Pause, Day/Night, the round timer, the deck page's order, the
  card table menu, History's Show, house rules, export names and more). The
  audit is recorded in docs/AUDIT.md.
  Check: Home > Guide: search for pause; it says passing the turn resumes the clocks.

## 1.67.0 -- 2026-10-08 -- Filters to a season
Summary: A filtered Stats view can be saved straight as a season.

### New features
- **Save your Stats filters as a season**: with any filter on in Stats
  (time span, pod size, house rule, bracket played, a deck or the deck
  filters), a **Save as season** button opens the season builder already
  set to match: the time span becomes the start date, and deck filters
  become the decks they leave in. Name it, adjust, and save.
  Check: Stats > Filters: pick a time span and a pod size, tap Save as season; the builder opens with those rules and its game count.

### Behind the scenes
- A season can now also ask for a house rule (or games with none).
  Check: Stats > Filters: pick a house rule, tap Save as season; the builder's summary names the house rule after saving.

## 1.66.2 -- 2026-10-08 -- Seasons, always there
Summary: Seasons no longer needs switching on, the builder's date boxes fit the screen, and Who played lists only people you named.

### Enhancements
- **Seasons is always on**: Stats has a Seasons tab without a setting to
  turn on (it's still hidden in Simple mode). The Seasons switch in
  Settings > Play is gone.
  Check: Stats: the Seasons tab is there without touching Settings.

### Bug fixes
- **Season date boxes fit**: on an iPhone the From and To boxes ran past
  the edge of the builder. They now sit side by side inside it.
  Check: Stats > Seasons > Start blank: From and To fit inside the builder.
- **Who played lists people**: the chips included You and seats nobody
  named. You're always in a season's standings, so only people you named are
  offered now.
  Check: Stats > Seasons > Start blank > More rules: Who played shows only names you gave people.

## 1.66.1 -- 2026-10-08 -- A way out of the art
Summary: The card art viewer has a close button, and Art Series cards are left out of the carousel.

### Enhancements
- **Close button on the art viewer**: a round X at the top right closes the
  deck picture viewer (tapping outside the card and swiping down still work).
  Check: Open a deck, tap its picture, then tap the X at the top right: the viewer closes.

### Bug fixes
- **No Art Series cards in the carousel**: the art-only cards from Art
  Series sets showed up as if they were printings of the commander. They're
  left out now.
  Check: Open a deck whose commander has an Art Series card, tap its picture: no Art Series card in the swipe.

## 1.66.0 -- 2026-10-08 -- Seasons
Summary: Seasons: save a question about your games as a season with points and standings that keep up as you log.

### New features
- **Seasons**: switch on Settings > Play > Seasons and Stats gets a Seasons
  tab. A season is a saved question about your games -- dates, who played
  (and how many of them), where, pod size, bracket, your decks, format --
  with points per win and per game played and a minimum to be ranked. Start
  from this month, this year, your most-played venue this month, 4-player
  games with your regulars, or blank; as you build it shows how many games
  match, which were left out for a missing field, and the standings. Saved
  seasons keep the question, so later games that match join on their own;
  **Lock** pins a finished season. Seasons can overlap, are kept in backups
  and sync, and **Copy standings** uses first names and an initial unless you
  ask for full names. Off in Simple mode.
  Check: Settings > Play: turn on Seasons, then Stats > Seasons: tap the current month and Save as season; it shows standings.
  Check: Stats > Seasons: open a season and tap Lock; it says LOCKED.

## 1.65.3 -- 2026-10-08 -- The name goes home
Summary: Tapping "Loadout & Ledger" at the top takes you to Home.

### Enhancements
- **The app's name goes Home**: tap "Commander Loadout & Ledger" at the top
  of any page to go to Home (on Home it scrolls back to the top). Seven
  quick taps still shuffle the theme when easter eggs are on.
  Check: Open Stats, then tap "Loadout & Ledger" at the top: Home opens.

## 1.65.2 -- 2026-10-08 -- The guide and tour catch up
Summary: The user guide and the tour now describe this week's changes, and three passages that had gone out of date are fixed.

### Enhancements
- **Guide brought up to date**: the deck page (How it wins entries by type
  with links, Details above it, the dial on the Decklist tab with Balanced
  in the middle, Previous and Next in the header), house rules (new games
  start clear; a venue brings its own), the palette builder (2 or 5 colors,
  type and corners picked on their own), Sounds (Subtle is life only, Full
  for every button, Retro or Modern), light mode beside the themes, every
  theme its own, the per-game turn timer and End passing the turn, the
  card table (back to opening hand, summoning sickness, double-tap), Flip
  for double-faced cards, Own picture and every printing in the art
  carousel, and What's new's Go there and green releases.
  Check: Home > Guide: search for threat or interaction; it says the dial is on the Decklist tab.
  Check: Home > Guide: search for house rules; it says every new game starts with none ticked.
- **Tour brought up to date**: its stops for a deck's page, the decklist,
  practice, game setup, Feel, Make it yours, Playgroup and Venues mention
  what's new.
  Check: Settings > App: start the tour and step to Make it yours: it mentions 2 or 5 color palettes.

## 1.65.1 -- 2026-10-08 -- Every theme its own
Summary: All 51 built-in themes have their own type, corners and colors; buttons that stayed quiet on Full now sound; a held life button starts slower.

### Enhancements
- **Every theme has its own type**: each built-in theme's headings use a
  typeface no other theme uses (Game Boy gets a pixel font, Rustbelt a
  typewriter, Mossveil an uncial hand, and so on). Shards and wedges no
  longer borrow their guild's. The type is fetched when the theme is shown;
  offline, the theme's old type stands in.
  Check: Settings > Look > All themes: each theme's name is in a different typeface.
- **Every theme has its own corners**: no two themes share a corner
  roundness any more, from square (Game Boy) to the roundest (Swirl).
  Check: Settings > Look: switch between Gruul and Jund; the corners differ.
- **Every theme has its own colors**: shards and wedges that shared an
  accent or background with a guild or each other now each have their own
  (Esper a pale glass blue, Jund a fire orange, Sultai a swamp green...).
  Check: Settings > Look: switch between Grixis and Mardu; the accent red differs.
- **Palette builder type samples** now offer every theme's typeface.
  Check: Settings > Look > Make your own > + Build a palette: the TYPE samples show many typefaces.
- **Buttons that stayed quiet now sound (Full)**: taps inside sheets,
  menus and pop-ups (the deck page, the game menu, card viewers), steppers
  like commander damage and counters, switches, tick boxes, expanders, and
  tappable cards and rows that aren't drawn as buttons were silent. They
  now make their sound too. The Sounds check in 1.65.0 (Check 2) now holds
  across the app.
  Check: Sounds on Full: open a deck, tap its tabs, Fetch art and the How it wins Edit link; each makes a sound.
  Check: In a game, open a seat's menu and tap commander damage +: it ticks.
- **Retro and Modern sound much further apart**: Retro is now all square
  wave, instant and clipped, like a handheld's sound chip. Modern is sine
  tones with a bell-like overtone, a soft attack and a long ring, and life
  changes glide smoothly up or down instead of running a blip counter.
  Check: Settings > Look > Sounds: switch Style between Retro and Modern; they sound clearly different.
- **New open and close sounds for sections (Full)**: the rustle a section
  made when it opened is gone. A section now rises a step as it opens and
  falls back as it closes, so both directions sound.
  Check: Sounds on Full: open a folded section, then close it; each makes a two-note sound, rising then falling.
- **Subtle is only life changes**: on Subtle, the only sound is the quiet
  Life Point counter when a life total changes in a game. Switches,
  sections and the turn passing are quiet (Full keeps them all).
  Check: Sounds on Subtle: flip a switch (no sound), then change a life total in a game (a short counter).
- **A held life button starts slower**: there's a beat before the first
  step, then a step every half second, speeding up only as the hold goes
  on (down to every 110ms), instead of starting fast.
  Check: In a game, hold a seat's - : the first steps come slowly, then speed up.

## 1.65.0 -- 2026-10-08 -- Sounds that say what they do
Summary: Two sound styles that shift with light mode, every button sounding like its job on Full, a jackpot for the tug of war, faster long holds and calmer animations; Previous and Next stay at the top of a deck's page.

### New features
- **Retro or Modern sounds**: Settings > Look > Sounds now has a Style:
  Retro (chiptune blips, like a 90s handheld) or Modern (soft, rounded
  tones). Light mode plays each a little higher and brighter; dark mode keeps
  them low and warm.
  Check: Settings > Look: with Sounds on, pick Modern under Style; the sample sounds softer than Retro.
- **Every button sounds like its job (Full)**: on Full, saving or starting
  plays a rising pair, closing or going back a falling pair, deleting or
  resetting a low buzz, tabs a blip, +/- a tick and copying a triple blip.
  Switches go up when turned on and down when turned off.
  Check: Settings > Look: Sounds on Full, then tap Save on a deck and Back: each makes a different sound.
- **Jackpot**: holding a seat's gain and loss buttons at once spins slot
  reels with a bell now and then until you let go, and the table calls it a
  TUG OF WAR (it used to say STALEMATE).
  Check: In a game with Sounds on, hold a seat's + and - together: reels spin until you let go.

### Enhancements
- **Long holds speed up**: holding a life button steps 5 every 350ms at
  first, then faster, down to every 110ms on a long hold. A fast hold plays
  one short blip per step instead of piling up counter runs.
  Check: In a game, hold a seat's - for five seconds: the steps speed up.
- **Calmer animations**: life totals roll more slowly, the side menu and its
  links slide and fade in more gently, pages and sheets ease in, and Stats
  numbers and charts take about a second to draw.
  Check: Open the side menu: its links fade in one after another.
- **Previous and Next stay up top** on a deck's page: they now sit in the
  header with Back and the deck count, so they're there wherever you scroll.
  Check: Open a deck and scroll down: Previous and Next stay at the top.
- **Playgroup numbers count up** like Stats when you open the page, switch
  between people and venues, or change a sort or filter.
  Check: Animations on High, open the Playgroup page: the numbers count up.

### Bug fixes
- **Balanced sits in the middle of the dial**: the threat-or-interaction
  dial ran from 0% to 70%, so a 50% target sat right of center. It now runs
  0% to 100%: Balanced (50%) is straight up, with Threat and Interaction
  either side. A custom target can go from 5% to 95%.
  Check: Open a deck > Decklist > Set the target: pick Balanced; the green band sits straight up on the dial.

## 1.64.3 -- 2026-10-08 -- Every art for every Minstrel
Summary: Decks whose commander carries a build label get the whole art carousel, a logged game stays put, and a few loose ends from the week are tied off.

### Bug fixes
- **Art carousel for labelled commanders**: a deck whose commander is typed
  with a build label, like "Atraxa, Praetors' Voice (Budget)", looked up the
  arts under the whole label, found none, and showed only the deck picture.
  The label is now dropped for the lookup, so every look shows (for the
  Minstrel: the original, the borderless and the extended art).
  Check: Open a deck whose commander is The Wandering Minstrel with a label in brackets, tap its picture: swipe through the arts, including the extended art.
- **A logged game stays logged**: after Log game, life, counters, turns,
  Monarch and the Initiative could still be changed on the table behind it.
  Now they say the game is logged and to start a new one. Monarch and the
  Initiative are also held while a finished game waits to be logged.
  Check: Start a game, finish and log it, then go back to the table: tapping life or the crown says the game is logged.
- **Home's notice count**: "N things to look at" could count a backup
  reminder that was hidden because sync is healthy. It now counts only what
  it shows.
  Check: Home with sync on and two notices showing: the row says 2 things to look at.

### Enhancements
- **Flip a double-faced commander**: tapping the deck picture of a
  double-faced commander shows a Flip button that turns the card over to its
  back (and Front to turn it back).
  Check: Open a deck with a double-faced commander, tap its picture: Flip shows the back.
- **Balanced is the middle**: the threat-or-interaction dial's Balanced aim
  is now about 50% interaction, between Threat (35%) and Interaction (65%).
  Check: Open a deck > Decklist: pick Balanced on the threat dial; it says about 50%.
- **More checks lead to their page**: release-note checks that start "On
  iPhone", or name Menu > Lists, the side menu, mulligan practice, the phase
  bar and similar now have Go there.
  Check: Settings > App > What's new: a check naming Menu > Lists has Go there, and it opens the side menu.

## 1.64.2 -- 2026-10-08 -- Light mode with the themes
Summary: The Light mode switch moved next to the themes.

### Enhancements
- **Light mode beside the themes**: in Settings > Look the Light mode switch
  is now the first thing under Theme, right above the theme you're using and
  the theme list (in Simple mode too), instead of up with the feel settings.
  Check: Settings > Look: Light mode is the first row under Theme.

## 1.64.1 -- 2026-10-08 -- Links that stick
Summary: How it wins links typed without https:// now show, and What's new starts open.

### Bug fixes
- **Links missing from your How it wins entries**: a link typed without
  https:// in front (like moxfield.com/decks/...) was quietly dropped. It's
  now kept, with https:// added for you.
  Check: Open a deck > How it wins > Edit: give an entry the link moxfield.com and Save: the entry shows a link.

### Enhancements
- **What's new starts open** in Settings > App (if you fold it yourself, that
  choice is remembered on the device).
  Check: Settings > App: What's new is open.

## 1.64.0 -- 2026-10-08 -- Pick your type and corners
Summary: The palette builder picks type and corners on their own, each shown as it looks; a venue's name comes first when you edit it.

### New features
- **Type and corners, picked on their own**: building a palette now shows
  every type set the themes use as a sample to tap, and six corner shapes
  from Sharp to Pill, instead of borrowing both from one theme. The preview
  card shows your choices. Palettes made before keep their look.
  Check: Settings > Look > Make your own > + Build a palette: tap a TYPE sample and a CORNERS shape; the preview card changes to match.

### Enhancements
- **Venue name first**: on Playgroup > Venues, an open venue shows its name
  field first, then its house rules.
  Check: Playgroup > Venues: open a venue: Venue name is the first field.

## 1.63.0 -- 2026-10-08 -- How it wins, entry by entry
Summary: Write How it wins as entries, each with a kind (Plan, Combo, Threats, Commander and more) and its own link.

### New features
- **How it wins entries**: Edit under How it wins now lists one entry per
  row: pick its kind (Plan, Combo, Threats, Commander, Engine, Protection,
  Interaction, Backup plan, Watch out, or Other with your own word), write
  it, and add a link if you like. Move entries up, remove them, or add more.
  Links show beside the entry and go out with Share this deck.
  Check: Open a deck > How it wins > Edit > + Add an entry: pick Combo, write it, add a link and Save; the entry shows with a link.

## 1.62.0 -- 2026-10-08 -- Five-color palettes
Summary: Make your own palettes from two colors (the rest worked out) or five, each set by hand.

### New features
- **Palettes from 2 or 5 colors**: Settings > Look > Make your own > Build a
  palette now has a 2 colors / 5 colors switch. Five sets the background,
  panels, text, accent and highlight yourself; borders and quieter text are
  mixed from them. Two works as before.
  Check: Settings > Look > Make your own > + Build a palette > 5 colors: five color pickers appear and the preview uses them.

## 1.61.0 -- 2026-10-08 -- Every art, your own picture
Summary: The deck picture carousel shows every look of the commander (and its partner or background), you can use your own picture, and a card opened for details flips to its back.

### New features
- **Your own deck picture**: Own picture on a deck's page picks an image
  from your phone. It becomes the deck's picture everywhere, and tapping it
  shows it larger; the commander's arts are still in the carousel to switch
  back.
  Check: Open a deck > Own picture: choose a photo; it becomes the deck's picture.
- **Flip a card**: a double-faced card opened for its details (mulligan
  practice) has a Flip button to see its back.
  Check: Mulligan practice with a double-faced card in hand: tap it, then Flip.

### Bug fixes
- **The art carousel missed some arts**: it only showed one picture per
  illustration, so extended-art and borderless frames of the same art were
  missing (The Wandering Minstrel showed 2 of its 3 looks). It now shows every
  look, skipping only promo stamps and foil-only copies of one already shown,
  and adds the partner's or background's arts after the commander's.
  Check: Open a deck with The Wandering Minstrel, tap its picture: three arts, including the extended art.

## 1.60.2 -- 2026-10-08 -- House rules in their place
Summary: Poison taken back brings a player back in, the deck page's two copy buttons say what each is for, venue house rules live in the House rules section and on Playgroup, and a new game starts with none.

### Bug fixes
- **Poison taken back left the player out**: 10 poison knocks a player out,
  but tapping back to 9 kept them out. Poison is now worked out like life and
  commander damage, so undoing a mistaken tap brings them back (a player you
  knocked out yourself stays out).
  Check: In a game, give a player 10 poison (they go out), then take one off: they're back in.
- **A new game kept the last house rules and venue**: New game and Reset now
  start with no house rules, the venue back to your Settings default (blank
  unless you set one) and the turn clock back to Settings.
  Check: Game setup: tick a house rule and type a venue, then New game: no rules are ticked and the venue is empty.

### Enhancements
- **Full details and Share this deck**: the deck page's Summary button is now
  **Full details** (everything, for a builder or an AI chat) and Share this
  deck is the short version for a friend; each says so when held.
  Check: Open a deck: the top button reads Full details, and Share this deck sits under How it wins.
- **Venue house rules under House rules**: the save and use buttons moved
  into the House rules section in Game setup.
  Check: Game setup > Table > House rules, with a venue typed: the save button sits at the bottom of the House rules section.
- **House rules on Playgroup**: open a venue on Playgroup > Venues to tick the
  house rules its games start with, or add your own.
  Check: Playgroup > Venues: open a venue: House rules here lists the rules to tick.

## 1.60.1 -- 2026-10-08 -- Linking really works
Summary: Link codes failed on every try because of a Worker bug, now fixed; the copy box no longer runs off the top of the screen.

### Bug fixes
- **Linking a device always failed**: the Worker upper-cased the address
  before looking for its link-code route, which is written in lower case, so
  no code ever matched and each one was refused as a missing token. It now
  matches, codes work in either case, and a test runs the whole exchange.
  The Worker redeploys from this repository; Settings > Data > Worker and
  sync > Test shows build 2026-10-08a once it has.
  Check: Settings > Data > Worker and sync > Link a device: make a code on one device, enter it on the other: it links.
- **The copy box was cut off at the top**: sharing many decks showed the text
  box with its top under the status bar. It now sits on the page itself,
  below the notch, with a text box sized to the screen.
  Check: Decks > Tools > Share decks > All > Share: if the text is shown to copy, the whole box fits on screen.

## 1.60.0 -- 2026-10-08 -- Venues with house rules, a clock per game
Summary: Venues can carry their own house rules, Game setup can set this game's turn clock, End on the phase bar passes the turn, and the deck page closes and swipes away more easily.

### New features
- **A venue's own house rules**: in Game setup, with a venue typed in, save
  the house rules you ticked for that venue. Next time you pick that venue,
  they're ticked for you.
  Check: Game setup > Table: type a venue, tick a house rule, tap Save these for (venue); clear the venue and type it again: the rule is ticked.
- **Turn clock per game**: Game setup > Table has a Turn clock row: Default
  (your Settings > Play choice), Off, 2, 3 or 5 minutes, for this game only.
  Check: Game setup > Table > Turn clock: pick 5 min and start: the pass button's ring runs to 5 minutes.

### Enhancements
- **End on the phase bar passes the turn**: from End, the next arrow (or
  tapping END) passes the turn and the bar starts over at Untap.
  Check: Phase bar on, in a game: step to END (it reads END · pass); tap it and the turn passes.
- **Goldfish buttons together on the right**: Came online, Same hand, Start
  over and End rep stay grouped at the right of the goldfish banner.
  Check: Playtest a deck: the four goldfish buttons line up on the right.
- **The deck page swipes away from anywhere**, upright as well as sideways.
  Check: Open a deck (phone upright) and swipe right across the middle of the page: it closes.

### Bug fixes
- **A deck page stayed open after leaving Decks** with the phone upright. It
  now closes whenever you go to another page.
  Check: Open a deck, go to Stats, then back to Decks: the deck page is closed.

## 1.59.0 -- 2026-10-08 -- Small comforts
Summary: Release chips go green when every check is ticked, mulligan practice shows a card when tapped, closing a playtest goes back to its deck, text fields no longer zoom the page, and sharing uses the app's copy.

### New features
- **Card details in mulligan practice**: tap a card in the hand to see its
  picture and text. While picking cards for the bottom, a tap picks and the
  small i shows the card.
  Check: Open a deck > Practice > Mulligan practice > Deal an opening hand: tap a card; its picture and text open.

### Enhancements
- **Finished releases go green**: in What's new, a version chip turns green
  with a tick once every check in that release is ticked.
  Check: Settings > App > What's new: tick every check in one release; its chip at the top turns green.
- **Closing a playtest goes back to the deck**: closing the card table of a
  playtest started from a deck opens that deck on its Practice tab, wherever
  you were.
  Check: Open a deck > Practice > Playtest > Start, go to Settings, come back through Game, then close the card table: the deck's Practice tab opens.
- **Sharing copies instead of opening the share sheet**: Share this deck and
  Share decks now copy the text (or show it to copy by hand). Backups and the
  sample file still use the share sheet, since they are files.
  Check: Open a deck > Share this deck: it says copied and no share sheet opens.

### Bug fixes
- **Tapping a text field zoomed the page** on iPhone. Text fields are now
  16px there, which stops the zoom; pinch zoom still works.
  Check: On an iPhone, tap the search box on Decks: the page doesn't zoom.

## 1.58.3 -- 2026-10-08 -- A phase bar you can read
Summary: The phase bar names the step in full, Flat view sits beside Layout in the game menu, and a failed link says which Worker answered.

### Bug fixes
- **The phase bar was unreadable**: seven steps squeezed into the pass pill
  were cut to three letters. Now the step in play is named in full, big, with
  back and next arrows, and a dot per step underneath (tap one to jump).
  Check: Settings > Play > At the table: Phase bar on, start a game: the pill shows UNTAP in full with arrows, and the next arrow moves to UPKEEP.
- **Linking said the code was wrong without saying why**: when the Worker
  doesn't know link codes, the message now names that Worker and its build,
  and the device that made the code shows which Worker it used, so the two
  can be compared.
  Check: Settings > Data > Worker and sync > Link a device > Make a code: under the code it says which Worker made it.

### Enhancements
- **Flat view beside Layout** in the game menu's Display section.
  Check: In a game, open the game menu > Display: Flat view comes right after Layout.

## 1.58.2 -- 2026-10-08 -- Deck page in a better order
Summary: Details moves above How it wins, the threat and interaction dial moves to the Decklist tab, a docked deck page closes when you leave Decks, and test ids light up when copied.

### Enhancements
- **Details above How it wins** on a deck's Overview (still folded until you
  open it).
  Check: Open a deck: Details sits above HOW IT WINS.
- **Threat and interaction on the Decklist tab**: it reads the list, so it
  now sits under the list.
  Check: Open a deck > Decklist: the threat and interaction dial is under the list, and gone from Overview.
- **Test ids light up when tapped**: a check's id flashes gold as it copies.
  Check: Settings > App > What's new: tap a check's id; it flashes gold and says Copied.

### Bug fixes
- **A docked deck page stayed open on other pages**: with the phone on its
  side, going to another page now closes the deck that was open beside the list.
  Check: Phone on its side, Decks: open a deck, go to Stats, then back to Decks; the deck page is closed.

## 1.58.1 -- 2026-10-08 -- The docked deck page, tidied
Summary: With the phone on its side, a deck's page closes with a swipe anywhere on it, and its edges line up with the rest of the app.

### Bug fixes
- **Swipe to close only worked from the edge**: with the deck page docked
  beside the list (phone on its side, iPad), a swipe to the right now closes
  it from anywhere on the page. Rows that scroll sideways, sliders and text
  boxes keep their own swipes.
  Check: Phone on its side, Decks: open a deck, then swipe right across the middle of its page; it closes.
- **The deck page's background ran under the notch**: its right side went
  past the top bar's edge, and its left side had a strip of notch padding.
  It now ends where the app does.
  Check: Phone on its side, Decks: open a deck; the page's right edge lines up with the top bar's.

## 1.58.0 -- 2026-10-08 -- Run that hand again
Summary: A goldfish rep (or any card table game) can start over with a new shuffle or go back to the opening hand you kept.

### New features
- **Back to opening hand**: once every opening hand is kept, the card table
  remembers that moment. **Same hand** on the goldfish banner (or **Back to
  opening hand** in the menu) puts everything back: the same seven, the same
  library order, turn 1.
  Check: Open a deck > Practice > Playtest: keep, play a land, then tap Same hand; the land is back in your hand and the library is in the same order.
- **Start over** on the goldfish banner: a new shuffle and a new seven (the
  menu's New game, now called Start over (new shuffle)). Neither reset logs
  the rep.
  Check: Playtest: tap Start over on the goldfish banner; a new seven is dealt.

## 1.57.0 -- 2026-10-08 -- The card table follows sickness and tapped lands
Summary: On the card table, summoning sickness is shown and lasts until your next turn, cards that enter tapped come in tapped, and a double-tap taps.

### New features
- **Double-tap to tap**: double-tap a permanent on the card table to tap or
  untap it (it goes in the log). One tap still opens the card.
  Check: Open a deck > Practice > Playtest: play a land, then double-tap it; it turns sideways and no card sheet opens.
- **Enters tapped**: a card whose own text says it enters tapped ("This land
  enters tapped.") now comes in tapped. Conditional ones ("unless you
  control...", "If you control two or fewer...") come in untapped for you to
  judge.
  Check: Playtest a deck with a tapped land (a gain land): play it and it enters sideways.

### Bug fixes
- **Summoning sickness ended too early with three or more players**: it only
  checked whether the creature came in this turn. Now a creature stays sick
  until its controller's next turn begins (haste still ignores it), and a
  zzz mark shows on sick creatures.
  Check: Playtest: play a creature; it shows zzz and Attack says it is summoning sick until your next turn.

## 1.56.4 -- 2026-10-08 -- Counters when you need them
Summary: The card table keeps its menu button on the right, every seat counter is added the way Rad and the Ring are, and the dungeon's Leave button says what it does.

### Bug fixes
- **Card table menu button on the wrong side**: on a full top bar the app
  menu button dropped to its own line on the left. Arena, Menu and the app
  menu now stay together on the right.
  Check: Dandan or a 2-player playtest: the app menu button sits at the right, beside Menu.
- **"Leave" in a dungeon was misleading**: it read like closing the screen.
  It's now **Remove from dungeon**, for fixing a mistake (under the rules you
  only leave a dungeon by completing it), and it asks first.
  Check: In a game, open a dungeon and enter one: the button reads Remove from dungeon.

### Enhancements
- **Every counter added like Rad and the Ring**: Poison, Energy and
  Experience no longer sit in every seat's menu at zero. They wait as + chips
  beside Rad, Speed and The Ring, and get a row once added (or once above zero).
  Check: In a game, open a seat's menu > Counters: + Poison, + Energy and + Experience sit with + Rad; tap + Poison and a Poison row appears.

## 1.56.3 -- 2026-10-08 -- Arena halves stay apart
Summary: In Arena on the card table, looking at a card on one half no longer blocks the other player.

### Bug fixes
- **A card sheet in Arena covered both halves**: tapping a card opened its
  sheet over the whole phone, so the other player had to wait. Now each half
  has its own selected card, and the sheet opens inside that half only.
  Check: Dandan or a 2-player playtest, Arena: tap a card on your half; the other half's buttons still work while your sheet is open.

## 1.56.2 -- 2026-10-08 -- Menu on the right
Summary: In the game menus, the app menu button now sits on the right, where the side menu opens.

### Bug fixes
- **App menu button on the wrong side in game menus**: in the table's Game menu
  and the card table's menu, the app menu button sat in the middle of the
  row. It's now at the far right, like the top bar, and Close moved to the
  left.
  Check: In a game, open the game menu: Close is at the top left and the app menu button at the top right.

## 1.56.1 -- 2026-10-08 -- Momir for four
Summary: Momir with three or more players no longer cuts off the active player's buttons or covers anyone's hand.

### Bug fixes
- **Momir with 3+ players was cramped**: each seat was squeezed to the same
  height, so the active player's Play, Momir, Attack and End turn row was cut
  off, and the Pass pill and the shake pill sat over other players' hands.
  Now each seat is as tall as it needs and the list scrolls. Nothing floats
  over it: Menu sits beside Life view at the top, and each player passes with
  End turn on their own seat.
  Check: Game setup: Format Momir, 4 players, Quick start: the top seat shows Play, Momir, Attack and End turn, and no pill covers a hand.

## 1.56.0 -- 2026-10-08 -- Go there from the guide
Summary: The user guide now takes you to what it's describing.

### New features
- **Go there in the user guide**: every section about a page has a Go there
  beside its heading, and lines that name a place (like Settings > Data >
  Back up) get their own. It closes the guide, opens that page and fold, and
  rings the button when it can. It never presses anything.
  Check: Home: tap Guide, open Settings: Data, tap Go there by Backups: Settings > Data opens with Backup and restore open.

### Bug fixes
- **A guide heading had a paragraph stuck in it**: the Planechase section's
  heading carried the Momir "Creatures from" text. It's back under Momir.
  Check: Home: tap Guide, open Surprises: the Planechase heading is one word and Momir ends with Creatures from.

## 1.55.2 -- 2026-10-08 -- Home holds still on Low
Summary: The Home page cards no longer shuffle unless animations are on High.

### Bug fixes
- **Home cards shuffled with animations on Low**: the pull-down shuffle only
  skipped the motion, not the reorder. Now it only happens on High, and below
  High the cards keep their usual order.
  Check: Settings > Look > Animations Low, then Home: pull down a little from the top; the cards stay in order.

## 1.55.1 -- 2026-10-08 -- Cleaner sharing, a clearer menu
Summary: Sharing no longer opens a copy box behind the share sheet; the side menu has icons and the top bar is easier to hit.

### Bug fixes
- **Share opened a copy box behind the share sheet**: with a long share
  (many decks) the sheet stayed open past a timer and the copy box opened
  too. Now the copy box only appears if sharing fails; closing the sheet does
  nothing more.
  Check: Decks > Tools > Share decks > All > Share: only the share sheet opens; close it and no box appears.

### Enhancements
- **Icons in the side menu**, one for each page.
  Check: Open the side menu: each page has an icon beside its name.
- **A taller top bar** with bigger Home and menu buttons.
  Check: Home: the top bar's Home and menu buttons are larger and easier to tap.

## 1.55.0 -- 2026-10-08 -- Scroll safely, write your own How it wins
Summary: Scrolling a seat menu no longer changes counters; How it wins can be your own words; a finished game can be looked over.

### New features
- **Write your own How it wins** (deck page > Overview > How it wins > Edit):
  one line each, prefilled with the worked-out lines; yours show on the page
  and in Share this deck, and Back to automatic returns to the worked-out ones.
  Check: Open a deck > Overview > How it wins > Edit: change a line, Save: it shows as written by you, and Share this deck carries it.
- **View the table after a game** (the Game over card): look over the final
  board, still locked; a pill at the top brings the options back.
  Check: In a game, finish it and open the table: Game over > View the table shows the board, and the pill at the top brings the card back.

### Bug fixes
- **Scrolling a seat menu changed counters**: the hold-to-repeat buttons
  (commander damage, counters, storm) counted a finger passing over them. Now
  a menu scrolls over them, a moved finger cancels the press, and only a
  still tap or hold counts. A long hold also speeds up the longer it's held.
  Check: In a game, open a seat's menu and scroll it with a finger starting on a + button: nothing changes.
- **Release-note checks lost their Go there button** when written as steps
  ("Open a deck > ...", "In a game, ..."); they get one again.
  Check: Settings > App > What's new > Untested: checks starting "Open a deck" or "In a game" have Go there.
- **The threat-or-interaction band never moved**: the dial is now a fixed
  0-70% scale, so the green band sits on the target and moves with it.
  Check: Open a deck > Overview > Set the target > Interact: the green band moves right.
- **Sliders snapped back while dragging**: they follow the finger now and
  save when you let go.
  Check: Settings > Decks > suggestion weights: drag a slider slowly: the thumb follows and the value sticks.

## 1.54.1 -- 2026-10-08 -- A finished game stays finished
Summary: Once one player is left, the table locks until you log the game or undo the last change.

### Bug fixes
- **Victory screen's Not yet left you stuck**: dismissing it let the game
  carry on with everyone eliminated and no way back to the winner. Now the
  button is **Undo last change** -- it takes back the hit that ended the
  game -- and a finished game locks: life, counters and turns can't change,
  and a Game over card offers Log the game, Undo last change or the game menu.
  Check: Start a game and take every other player to 0: the winner screen shows; Undo last change brings the last one back and play goes on.
  Check: Finish a game, leave the winner screen without logging, and open the table again: GAME OVER shows and tapping a life total does nothing.

## 1.54.0 -- 2026-10-08 -- The table answers
Summary: In practice, the imagined table can now answer your big plays.

### New features
- **The table answers** (Settings > Play > At the table, off to start): in a
  goldfish rep on the card table, casting something with mana value 5 or more
  can draw a counterspell, removal, or with three creatures out a board
  wipe -- about 8% of the time at B1 up to 55% at B5, a little more at 7 mana
  or more. The odds are shown each time; apply it or play on, and it goes in
  the rep's log. Off in Simple mode.
  Check: Settings > Play > The table answers on, then a deck > Practice > goldfish rep at B5: casting a 6-drop sometimes brings a THE TABLE ANSWERS banner with the odds and Apply it.

## 1.53.0 -- 2026-10-08 -- Mulligan practice
Summary: Practise keeps and mulligans with a deck's own list, and see over time how your keeps went.

### New features
- **Mulligan practice** (deck page > Practice): deal seven from the list,
  then keep or mulligan London style -- draw seven again and tap the cards to
  put on the bottom, with the first mulligan free if you like (Commander's
  multiplayer rule). After a keep it shows the draws for turns 1 to 3, on
  the play or the draw, and whether every land drop came. Each drill is
  saved, and the summary shows how often keeps made their land drops.
  Check: Open a deck > Practice > Mulligan practice > Deal an opening hand > Mulligan twice: it asks for one card to the bottom, and Keep 6 shows three turns of draws.
  Check: Deal and keep a few hands: the summary counts the drills and the share of keeps that made every land drop.

## 1.52.0 -- 2026-10-08 -- Retro hardware themes
Summary: Ten themes from old consoles and handhelds, starting with the Game Boy's greens and a see-through Atomic Purple.

### New features
- **Retro hardware themes** (Settings > Look > All themes > Retro
  hardware): Game Boy (the four original greens), Atomic Purple
  (see-through grape), Pocket Silver, Jungle Green, Super Console, Eight-Bit,
  Red Vision, Famicom, Amber Terminal and Swirl. Light mode works on all of
  them, and Random can pick them.
  Check: Settings > Look > All themes > Retro hardware > Game Boy: the app turns four shades of green.
  Check: Pick Atomic Purple, then turn Light mode on: it goes pale lavender with purple accents.

## 1.51.0 -- 2026-10-08 -- Land fixes from your collection
Summary: When a deck is short a color, it lists the lands you own that would fix it.

### New features
- **Land fixes from your collection** (deck page > Decklist > MANA BASE):
  when a color is short, Find lands I own lists the lands in your
  collection's usable binders that fit the deck's colors, aren't in its list
  and make that color, with the binder each is in and any other deck already
  running it. What each land makes comes from Scryfall (fetch lands count
  for the land types they find) and is remembered on this phone. Hidden in
  Simple mode.
  Check: Open a deck whose MANA BASE says a color is short > Find lands I own for it: owned lands that make that color are listed with their binder.

## 1.50.0 -- 2026-10-07 -- Threat or interaction
Summary: A dial on each deck's page shows where it sits between threat and interaction, against a target from its plan or one you set.

### New features
- **Threat or interaction dial** (deck page > Overview, under How it wins):
  every nonland card counts as interaction (it answers or protects) or a
  threat (everything else that pushes your plan, ramp and draw included),
  read from each card's text by Check with Scryfall, or from the decklist's
  roles before that. The needle shows the deck's share of interaction
  against a target band: automatic from the deck's plan (lean threat for
  combo, Voltron, aggro and tokens; lean interaction for control and stax;
  balanced otherwise), or set your own, including a custom share. Which
  cards lists both sides. Hidden in Simple mode.
  Check: Open a deck > Overview: the dial reads On target, Leans threat or Leans interaction with its counts and target.
  Check: Set the target > Custom, drag to 40%: the target line and needle move; Auto puts it back.
  Check: Decklist > Check with Scryfall, then Overview > Which cards: removal, counters and protection are under Interaction, ramp and creatures under Threats.

### Enhancements
- **Random theme picks from everything you've unlocked**: the standard
  themes, the achievement themes you've earned and your own palettes (the
  seven-tap title shuffle too).
  Check: Settings > Look > Random theme a few times: earned achievement themes come up among the others.

## 1.49.0 -- 2026-10-07 -- Achievements unlock themes
Summary: Logging a game that earns an achievement says so and unlocks a theme for it; themes are in groups; Simple mode has its own plain theme.

### New features
- **Achievement unlocks**: when a game you log earns achievements, a card
  names them and the theme each one unlocked, with a way to see them all in
  Stats. Each deck's Results tab shows the achievements that deck has earned.
  Check: Log a game that earns a new achievement (a first win, say): a card names it and its theme.
  Check: Open a deck that has won > Results: its achievements show at the top.
- **A theme for every achievement**: Settings > Look > All themes has an
  Earned with achievements group; earned ones can be picked, locked ones say
  what earns them.
  Check: Settings > Look > All themes > Earned with achievements: pick one you've earned and the app wears it.
- **Simple mode theme**: Simple mode switches the app to a plain theme with
  the phone's own fonts; light mode still works, and your theme comes back
  when Simple mode is off.
  Check: Settings > Simple mode on: the app turns plain slate and teal; turn Light mode on and it goes light.

### Enhancements
- **Themes in groups**: the original, guilds, shards and wedges, then the
  rest by color (fire and gold, forest, sea and sky, twilight, steel and ink).
  Check: Settings > Look > All themes: themes are under group headings with counts.

## 1.48.0 -- 2026-10-07 -- House rules
Summary: Tick your table's house rules at setup; they're saved with the game and Stats can filter by them.

### New features
- **House rules** (Game setup, under the table settings): tick what this
  table plays by -- no infinite combos, no tutors, no extra turns, free first
  mulligan and more -- or add your own. Last game's picks start ticked. They
  are saved with the game and shown in its story in History.
  Check: Game > Setup > open the Table section > House rules: tick No tutors, add your own rule, start a game: the picks are kept for next time.
- **Filter by house rules**: Stats > Filters gets a House rules choice (any,
  none recorded, or with a rule), and History's tag chips include each rule.
  Check: After logging a game with house rules, Stats > Filters > House rules > With: No tutors: only those games count.

## 1.47.1 -- 2026-10-07 -- Leaner deck page, simpler Simple mode
Summary: The deck page opens on what matters, Simple mode strips the table and the frills too, and life changes sound like a duel-show Life Point counter.

### Enhancements
- **Deck page Overview, decluttered**: it opens on the record, how it wins,
  the checks, your notes, commander text, game plan and links. Threat,
  EDHREC, stage and build order, set, storage case, the note tools, price and
  the created date move into **Details**, folded until you open it.
  Check: Open a deck: the Overview shows the record and How it wins first, and Details is folded near the bottom with the threat and stage inside.
- **Simple mode goes all the way**: a deck's Overview keeps only its record,
  how it wins, commander text, notes, plan and links. At the table a seat's
  menu keeps commander damage, poison and conceding, and the game menu keeps
  pause, undo, the log, rules, dice and finishing. Easter eggs and sounds
  are off and animations play at Low at most.
  Check: Simple mode on, start a game > game menu: no Day / Night, storm, live notes or Display; a seat's menu shows only commander damage, poison and Concede.
  Check: Simple mode on, Settings > Look: a note says sounds and easter eggs are off, and their switches are hidden.
- **Life Point counter sound**: with Sounds on, a life change plays a fast
  run of digital blips while the total rolls -- falling for a loss, rising
  for a gain, longer for a bigger change -- landing on a thud (heavy at 5 or
  more) or a chime.
  Check: Settings > Look > Sounds > Full > Try it: a falling counter run with a thud, then a rising one with a chime.

## 1.47.0 -- 2026-10-07 -- Table helpers
Summary: A turn clock, a phase bar and a who's-ahead read for the table, each a switch; Simple mode is on the welcome screen.

### New features
- **Turn clock** (Settings > Play > At the table): Off, 2, 3 or 5 minutes.
  A ring fills on the pass button with the time so far; a tick (and a sound,
  if Sounds are on) at the limit and again a minute later. Nothing is
  enforced, and it stops while the game is paused.
  Check: Settings > Play > Turn clock 2 min, start a game: the pass button shows a ring and a running time that restarts when you pass.
- **Phase bar**: a strip under the pass button names the step; tap to move
  on, or tap a step to jump to it. It starts over each turn.
  Check: Settings > Play > Phase bar on, start a game: tap the lit step and the next one lights; passing the turn starts back at Untap.
- **Who looks ahead**: a thin bar under the pass button reads who looks
  ahead from life, commander damage taken, poison and the monarch. With easter
  eggs on, it calls out a kingmaker when one player is far behind.
  Check: Settings > Play > Who looks ahead on, start a game and take one player down to 10: the bar names someone else as ahead.

### Enhancements
- **Simple mode on the welcome screen**: a new phone can pick it before
  doing anything else.
  Check: On a phone with no data, the welcome screen has a Simple mode switch; turn it on and the app opens with just the core.

## 1.46.0 -- 2026-10-07 -- Simple mode
Summary: One switch at the top of Settings keeps just the core of the app.

### New features
- **Simple mode** (top of Settings): just your decks, the life counter,
  logging games, History and Stats. Loadout, Playgroup, Lists, a deck's
  Practice tab, the Decks tools and the Decks settings are hidden, and Home
  shows only Start a game, Decks, History and Stats. Nothing is deleted;
  switching it off brings everything back. Each phone keeps its own setting.
  Check: Settings > Simple mode on: the menu shows Decks, Game, History, Stats and Settings only, and Home has four cards.
  Check: Open a deck with Simple mode on: no Practice tab; switch it off and Practice is back with its reps.

## 1.45.0 -- 2026-10-07 -- Sounds
Summary: Optional sound effects, None, Subtle or Full, set per device.

### New features
- **Sounds** (Settings > Look, under Haptics): **None** (the default),
  **Subtle** or **Full**. Subtle: a soft click for switches, a tick when a
  life total changes, a page sound when a section opens, a knock as the
  turn passes. Full adds dice and coin sounds, a drop for a big hit (5 or
  more at once) and a short fanfare for a winner. The sounds are made in the
  app, so nothing extra downloads; on an iPhone the silent switch mutes them.
  Check: Settings > Look > Sounds > Full > Try it: a dice rattle, a knock and a fanfare play.
  Check: With Sounds on Subtle, start a game and tap a life total: a soft tick, and passing the turn knocks.
  Check: Flip the iPhone's silent switch on: no sounds play.

## 1.44.1 -- 2026-10-07 -- Linking fixed, art swipes away
Summary: Linking a new phone survives a Worker address with extra on the end and says what went wrong; swipe down closes the art gallery.

### Bug fixes
- **Linking a phone**: a Worker address with anything after the domain (like
  /health) sent the link code to the wrong place, and the Worker answered
  "missing or wrong token". The app now uses just the address's domain, the
  Worker ignores a stray space or line break around its token, and a failed
  link says which step went wrong and what to check. The phone only says
  linked once the Worker has accepted its token.
  Check: On the new phone, Settings > Data > Worker > Link a device > enter a fresh code from your other device: it links and loads your synced data.

### Enhancements
- **Swipe down to close the art gallery**: the art follows your finger and
  fades; past a short distance (a tick tells you) letting go closes it and
  you're back on the deck page. A shorter swipe springs back; sideways still
  flips through the art.
  Check: Open a deck > tap its picture > swipe down: the gallery closes and the deck page is there.

## 1.44.0 -- 2026-10-07 -- Start on a sample, tick tests in bulk
Summary: A new phone can open on sample data, and release-note tests can be ticked or unticked all at once.

### New features
- **Start with sample data** on the welcome screen: a made-up set of decks,
  people and games loads, so a new phone can try everything at once. Home
  then shows a notice: **Clear it and start fresh** erases the phone and
  opens the welcome screen again; **Keep it, hide this** keeps the sample.
  Check: On a phone with no data, the welcome screen > Start with sample data: decks, games and stats fill in and Home shows the sample notice.
  Check: Home > Clear it and start fresh > Erase and start fresh: the app is empty and the welcome screen is back.
- **Check or uncheck in bulk** (Settings > App > What's new, under the
  progress bar): tick or untick every test, or only those in the releases
  you pick. UNDO puts back exactly what was ticked before.
  Check: Settings > App > What's new > Check or uncheck in bulk: pick two release chips > Check all in 2 releases: only their tests tick; UNDO clears them.
  Check: With no chips picked, Uncheck all in every release: Untested counts every test again.

### Enhancements
- The private build's welcome button that loads the built-in decks is now
  called **Load the built-in decks**, since they are real decks, not a sample.
  Check: On a private build with no data, the welcome screen shows Load the built-in decks under Start with sample data.

## 1.43.0 -- 2026-10-07 -- Rules for this deck
Summary: The deck page lists the rules a deck leans on, with links to Wizards' rulebook.

### New features
- **Rules for this deck** (deck page > Overview): the Commander rules, then
  every mechanic the deck's cards have (flying, scry, ward and so on), each
  opening to its rule text from the Comprehensive Rules with a link to that
  rule in Wizards' rulebook. Mechanics come from Check with Scryfall; the
  rules are the ones you loaded in Guide > Rules, so it works offline.
  Check: Open a deck > Decklist > Check with Scryfall, then Overview > Rules for this deck > tap a mechanic: its rule number, text and a Wizards link show.
  Check: On a phone that hasn't loaded the rules, the panel says where to load them and still lists the mechanics.

## 1.42.0 -- 2026-10-07 -- Share your decks
Summary: Send someone one deck or several, with everything worth knowing and every link.

### New features
- **Share this deck** (deck page > Overview, under How it wins): opens the
  share sheet with the deck's commander, colors, bracket and set, its
  record, plan, how it wins, and its links -- the deck online, EDHREC,
  Scryfall and each combo.
  Check: Open a deck > Overview > Share this deck: the share sheet (or clipboard) has its name, commander, record, how it wins and links.
- **Share decks** (Decks > Tools): switch on any number of decks (or All),
  optionally with their decklists, and share them in one message.
  Check: Decks > Tools > Share decks: switch on two decks > Share 2 decks: both are in the message, separated.

## 1.41.0 -- 2026-10-07 -- How it wins
Summary: Each deck's page now lays out its paths to victory -- its plan, the combos and threats in its list, its commander, how its wins have actually ended, and how fast it gets going.

### New features
- **How it wins** (deck page > Overview): the deck's through-lines in one
  place -- the plan and themes you gave it, combos Commander Spellbook found
  in its list (with a link to how each works), the cards its list counts as
  threats, the commander, how its logged wins ended, a nudge when it has a
  combo you've never won with, and the turn it usually comes online in
  practice games. With no list yet, it says how to fill it in.
  Check: Open a deck with a decklist and some wins > Overview: HOW IT WINS lists its plan, threats, commander and "Has won by".
  Check: A deck whose combos were found (Decklist > Find combos): each combo is listed with a "how it works" link.

## 1.40.3 -- 2026-10-07 -- Faster tab switches
Summary: Switching pages is several times faster with a big collection: pages you aren't looking at no longer redraw on every change.

### Enhancements
- **Faster pages**: every page stays loaded (so each keeps its place), but
  they all used to redraw whenever anything changed. A hidden page now waits
  and catches up when you open it. Measured with 200 decks and 2,000 games on
  a phone-speed processor: Settings opens in 0.07s instead of 0.9s, Loadout
  and History in about 0.3s instead of 0.8s, and the app starts about a
  second sooner.
  Check: Switch between Home, Decks, Stats and Settings: each opens quickly, and each is where you left it.

## 1.40.2 -- 2026-10-07 -- Newer counters, one tap
Summary: A seat's menu offers Rad, Speed and the Ring as one-tap counters.

### Enhancements
- **One-tap counters**: under Custom in a seat's menu, + Rad, + Speed and
  + The Ring add those counters without typing (press and hold one to read
  what it is). Everything else on the life tracker's list -- tax, poison,
  energy, experience, monarch, initiative, partner damage, timers, dice,
  five and six seats, undo -- was already there.
  Check: In a game, open a seat's menu > Custom: tap + Speed: a Speed counter appears with - and +.

## 1.40.1 -- 2026-10-07 -- The last switches
Summary: The game menu's remaining On/Off buttons are switches too.

### Enhancements
- **Game menu switches**: Tap tiles for life, Flat view, Center faces the
  turn and Tag as playtest (in the game menu and the log form) are switches,
  each with its line on what it does.
  Check: In a game, open the game menu > Table: Tap tiles for life, Flat view and Center faces the turn are switches.

## 1.40.0 -- 2026-10-07 -- Pick your deck's art
Summary: In the commander art carousel, any artwork can become the deck's picture.

### New features
- **Use as deck picture**: swipe to an artwork you like in the carousel and
  tap Use as deck picture; it becomes the deck's picture everywhere (the
  roster, its page, art themes), and the carousel marks it as yours.
  Check: Open a deck's page > tap its picture > swipe to another art > Use as deck picture: "Deck picture changed", and the deck's picture is the new art when you close the viewer.

## 1.39.3 -- 2026-10-07 -- Easier to read, easier to hear
Summary: Every theme now meets the standard for readable text, and VoiceOver can name every field and icon button.

### Enhancements
- **Readable in every theme**: text on gold buttons, bright gold text and the
  grey hint lines were too faint in some themes (most in light mode). They
  are nudged just enough to read clearly; themes keep their look.
  Check: Settings > Look: pick Sunspire with Light mode on: the gold buttons' text and the grey hints read clearly.
- **VoiceOver names everything**: about 80 fields that only had a heading
  above them now carry it as their name, and the X close buttons, arrows,
  life boxes and a few others got names too.
  Check: With VoiceOver on, Settings > Play > Starting life: it reads "Starting life".

## 1.39.2 -- 2026-10-07 -- Taps that stick
Summary: A root fix for taps that seemed to need doing twice: after a change was saved, parts of the app could briefly show the value from before it.

### Bug fixes
- **Changes show at once**: when something was saved, the app told the
  screens that show it *before* the save landed, so a screen could redraw
  with the old value (the People star needing two taps was one case). The
  app now announces a save only after it lands.
  Check: Playgroup > People: tap a star once: it fills and the count changes at once.
- **No hover on a phone**: the slight brighten on hover now only applies to
  devices with a mouse or trackpad.
  Check: iPhone: tap a few buttons: each acts on the first tap.

## 1.39.1 -- 2026-10-07 -- Full-screen sweep fixes
Summary: Every screen was checked on a small iPhone, a regular iPhone (both ways up) and an iPad (both ways); the table now fits a small phone, and the scroll arrows no longer cover buttons.

### Bug fixes
- **The table fits a small phone**: on an iPhone SE-sized screen a seat's
  life buttons ran past its edge into the next seat and its menu button hung
  off the screen. The buttons are a little tighter there and the menu sits
  at the end of the button row.
  Check: iPhone SE (or Zoom set to Larger Text): start a 4-player game: every seat's -5 to +5 and menu button sit inside the seat, upright and sideways.
- **Scroll arrows step aside**: the two arrows at the bottom-right sat over
  whatever was at the right edge (a deck's Info, Loadout's Add, a switch).
  They now show while you scroll and fade away a couple of seconds after.
  Check: Scroll any long page: the arrows appear; stop for a few seconds: they fade and the button under them can be tapped.

## 1.39.0 -- 2026-10-07 -- Switches done properly
Summary: Every on/off control is an iPhone-style switch in your theme's colors that says what it does, settings with more than two choices get a sliding multi-position switch, and the pull-down Reload button works on the first tap.

### New features
- **Multi-position switch**: one track with a knob that slides to your
  choice, and a line under it saying what that choice does. Used for Text
  size, Animations, Haptics, Play or draw in the game log (Not set / Play /
  Draw), and the home storage plan.
  Check: Settings > Look > Animations: tap Low: the knob slides to Low and the line under it describes Low.
  Check: Log a game: "You were on the" has Not set / Play / Draw on one switch.

### Enhancements
- **Switches in theme colors, everywhere**: the switches are drawn in your
  theme (gold when on), still give the iPhone's haptic click, and now also
  replace the remaining On/Off buttons: Light mode, Easter eggs, Holiday
  look, Planechase, Momir, fast mana in the game log, Show retired and
  Reverse sort on Decks, and Monarch / Initiative / Fast Mana in a seat's
  menu. Checklists you tick off stay check boxes.
  Check: Settings > Look > Light mode: a gold-and-dark switch; tap the row or the switch: it flips.
- **Each switch says what it does**: the seat menu's Monarch, Initiative
  and Fast Mana each have a line explaining them; Planechase says what On
  and Off mean.
  Check: In a game, open a seat's menu > Table status: three switches, each with a line on what it does.

### Bug fixes
- **Reload button works on the first tap**: right after pulling down, the
  page is still bouncing back, and a tap then was swallowed; the button now
  acts as your finger lifts.
  Check: iPhone: pull down for Reload app, tap it once: the app reloads.

## 1.38.0 -- 2026-10-07 -- Every artwork of your commander
Summary: Tapping a deck's picture now opens a carousel of every unique artwork of its commander, with the set, year and artist.

### New features
- **Commander art carousel**: tap the picture on a deck's page; your picture
  shows at once, then every other unique artwork of the commander loads in
  behind it (from Scryfall, oldest first). Swipe or use the arrows; under
  each art is its set, year and artist, and a counter like "2 / 9". Your
  own picture stays first and is marked.
  Check: Open a deck's page > tap its picture: after a moment the counter shows "1 / N" and "Your deck picture"; swipe left: the next artwork, with its set, year and artist.
  Check: Tap outside the picture: the viewer closes.

## 1.37.5 -- 2026-10-07 -- Feel the pull
Summary: Pulling down for the Reload button now ticks as you pass the let-go point and bumps when the button appears.

### Enhancements
- **Pull to reload is felt**: a tick when the pull passes the point where
  letting go brings up Reload app (and again if you pull back), and a bump
  when the button appears. On an iPhone, Safari only allows a haptic on a
  real tap, so the tick comes when you tap Reload app.
  Check: Android: pull down from the top of a page: a tick near "Let go for the reload button", a bump when the button appears.

## 1.37.4 -- 2026-10-07 -- Sideways table fixes and switches everywhere
Summary: On the game table nothing covers the seats' buttons any more, every on/off option in the app is an iPhone-style switch, a star takes one tap, and card pictures fill the screen.

### Enhancements
- **Switches everywhere**: every on/off option (export choices, graphic
  sections, game log ticks like First Kill and Won, Run checks steps, stats
  options...) is an iPhone-style switch with the phone's haptic click.
  Checklists you tick off (packing, note checks) stay as check boxes.
  Check: iPhone: Settings > Data > Share and export: the options are switches that click when flipped.

### Bug fixes
- **One tap stars a person**: on Playgroup > People the star took two taps
  to stick.
  Check: Playgroup > People: tap a person's star once: it fills and the regular count goes up by one.
- **Card pictures fill the screen**: a card picture opened from a deck page
  docked beside the list (iPad, or a phone on its side) was cut off at the
  middle; it now covers the whole screen.
  Check: iPhone sideways: Decks > Info > tap the deck picture: the card shows whole, centered on the screen.
- **"Who took out..." no longer covers the top seats**: the question shows
  in the middle of the table instead of across the top, which hid the top
  seats' life buttons (worst on a phone on its side).
  Check: iPhone sideways: knock a player out: the question sits in the middle and every seat's buttons stay visible.
- **The shake-to-roll pill steps aside**: it covered the bottom seats'
  buttons; it now leaves after a few seconds (the game menu keeps the
  button).
  Check: Start a game with shake to roll on but motion not yet allowed: the pill shows, then goes after about 8 seconds.

## 1.37.3 -- 2026-10-07 -- Fewer loud buttons
Summary: A light pass on how busy the screens look: unpicked choices lose their outlines, long rows of names fold away, and the top of Decks is quieter.

### Enhancements
- **Quieter choices**: in rows of choices (Decks > Show, sort and group,
  Playgroup's filters, Loadout's venues and people) only the picked one has
  an outline; the rest read as plain options.
  Check: Decks: in the Show row only the picked choice (e.g. Built) has an outline.
- **Long rows fold**: Loadout's venue and "who's playing" rows show the
  most-used few (plus anyone already picked); "+N more" shows the rest.
  Check: Loadout > Step 1 with many people logged: six names and "+N more"; tap it: everyone shows, "fewer" folds them again.
- **Quieter top of Decks**: Run checks and "Random unplayed deck" moved into
  Tools; beside the count there's one "Random deck" and Show retired.
  Check: Decks: beside "N of M decks" are Random deck and Show retired; open Tools: Run checks and Random unplayed deck are there.

## 1.37.2 -- 2026-10-07 -- Small fixes
Summary: Easier-to-hit small buttons, tidier popups on a sideways phone, rows that show they scroll, popups that fade out, and iPhone switches for settings toggles.

### Enhancements
- **Easier to hit**: small buttons have a bigger invisible touch area (the
  look is the same); the "? what is this" help buttons, the regular-star on
  People and Venues, and the opening-hand buttons got the most.
  Check: Playgroup > People: tap just beside a person's star: it still toggles.
- **Popups fade out** instead of vanishing when you close them.
  Check: Home > Random Loadout > Back: the screen fades away rather than snapping off.
- **Rows that scroll show it**: a sideways-scrolling row of choices (like
  Decks > Show) fades at the edge that has more, and keeps the one you
  picked in view.
  Check: iPhone sideways: Decks > Show row: its right edge fades; tap the last visible choice: the row slides so it is fully in view.
- **iPhone switches** for the on/off settings (keep the screen awake, shake
  to roll, show retired decks, planar art): a real tap gives the phone's
  own haptic click.
  Check: iPhone: Settings > Play: the toggles look like iPhone switches and click when flipped.

### Bug fixes
- **Popups on a sideways phone** are smaller and sit at the bottom-left
  instead of covering the middle of the screen.
  Check: iPhone sideways: do anything that shows a popup message: it sits small at the bottom-left.
- **One birthday message on Home**: a deck's birthday showed as a line and a
  popup at once; Home now shows just the line (which says the app is wearing
  its colors). The popup still shows if the app opens on another page.
  Check: On a deck's birthday, open the app on Home: one birthday line, no popup.

## 1.37.1 -- 2026-10-07 -- Smoother and more tactile
Summary: Things now leave the way they arrive: folds glide shut, a deck page slides away, and you can swipe in from its left edge to go back.

### Enhancements
- **Folds glide** open and shut instead of snapping (every collapsible
  section, and the side menu's groups).
  Check: Home: tap a section heading, like Color Coverage: it shrinks shut smoothly; tap again: it grows open.
- **Swipe back on a deck page**: start at the left edge and drag right --
  the page follows your finger; let go past a third of the way (or flick)
  and it goes back, otherwise it springs back. Back now slides the page
  off, and pulling it down drops it away instead of it vanishing.
  Check: iPhone: open a deck's page, swipe in from the left edge: it slides off to the right with your finger.
  Check: Open a deck's page, tap Back: the page slides off to the right.
- **Side menu slides out** when you tap off it.
  Check: Open the side menu, tap the dimmed area: the menu slides out to the right.
- **Press feedback** on section headings and other tappable rows, and a
  ticked box gives a small pop.
  Check: Press and hold a section heading: it dips slightly under your finger.

## 1.37.0 -- 2026-10-07 -- Color coverage details
Summary: The stats graphic's color coverage now includes colorless, and a Show details tick adds every color identity's name and its decks below the picture.

### New features
- **Show details** for color coverage (Settings > Data > Share and export >
  As a graphic, with Color coverage ticked): adds a panel below the
  picture listing all 32 identities -- the name (Azorius, Esper,
  Colorless...), built, planned or open, and the decks in each, planned
  ones marked.
  Check: Settings > Data > Share and export > As a graphic: tick Color coverage, then Show details > Make graphic: the picture gets taller, with a COLOR COVERAGE DETAILS panel naming each identity and its decks.
  Check: Untick Show details: the picture goes back to a square.

### Bug fixes
- **Colorless in color coverage**: colorless decks were left out of the
  graphic. Colorless is now the 32nd identity, a gray circle at the end of
  the one-color row, and the count reads "of 32".
  Check: With a colorless deck built: Make graphic with Color coverage: the one-color row ends in a filled gray circle and the count says "of 32 built".

## 1.36.1 -- 2026-10-06 -- Upright and sideways
Summary: The app now has its own layout for each way you hold an iPhone or iPad -- upright stays as it was, and sideways uses the wide, short screen properly. Link codes can be cancelled and entered on any device, and the edge swipe works on a deck's page.

### Enhancements
- **Phone on its side**: the app's title bar hides so pages start at the
  nav bar, and the side notch no longer covers buttons on any page, the
  game table, or a deck page.
  Check: iPhone sideways: Home: the nav bar (HOME, home and menu buttons) is at the top, no "Loadout & Ledger" title above it.
  Check: iPhone sideways, notch on the left: Decks and Home: nothing sits under the notch.
- **Game table sideways on a phone**: each seat's life buttons sit in one
  row (-5 -1 +/- +1 +5) with the seat menu beside them, so nothing is cut
  off at the seat's edge.
  Check: iPhone sideways: start a 4-player game: every seat shows -5, -1, +/-, +1, +5 in one row and its menu button is fully visible.
  Check: Turn the iPhone upright mid-game: the seats go back to two rows of buttons.
- **Deck page beside the list on a sideways phone**: the split view from
  1.35.0 now also works on an iPhone turned sideways; upright, the deck
  page still opens full screen.
  Check: iPhone sideways: Decks > Info on a deck: its page opens on the right half and the deck stays highlighted in the list.
  Check: iPad upright: Decks > Info: the deck page opens full screen, as before.

### Bug fixes
- **Link a device**: if both devices already synced, neither showed the box
  for entering a code, so a code could never be used. A syncing device now
  explains that two devices on the same Worker and token are already linked
  (no code needed), and still offers "Enter a code from another device". A
  shown code has **Cancel code**, and a failed link says why under the box.
  Check: iPhone and iPad both syncing: Settings > Data > Worker and sync > Link a device: the note says they are already linked, and "Enter a code from another device" opens the code box.
  Check: Make a link code > Cancel code: the code disappears and "Code cancelled." shows.
- **Edge swipe on the deck page**: swiping in from the right edge now opens
  the side menu on a deck's page too.
  Check: iPhone: open any deck's page, swipe in from the right edge: the side menu opens.

## 1.36.0 -- 2026-10-06 -- Link your iPhone and iPad
Summary: Put a second device on your synced data with a one-time code instead of typing the Worker token -- your data stays on your Worker, shared with no one.

### New features
- **Link a device** (Settings > Data > Worker and sync): on a device that
  syncs, make a code; on the other device, enter it (or open the copied
  link) and it joins your sync. A code works once, for 10 minutes, and only
  your own Worker can make or accept one; the token itself is never shown.
  The new device takes your synced copy -- it asks first -- so its own old
  data can never overwrite yours.
  Check: iPhone (syncing): Settings > Data > Worker and sync > Make a link code: an 8-character code shows with a 10-minute countdown.
  Check: iPad: Settings > Data > Worker and sync: enter the code > Link > OK: the app reloads with the iPhone's decks and games, and sync reads On.
  Check: iPad: enter a wrong code > Link: "that code is wrong or has expired", and nothing changes.

## 1.35.0 -- 2026-10-06 -- The whole iPad screen
Summary: On an iPad the app fills the screen: in landscape a deck's page opens beside the deck list, and History, Loadout's cases, Achievements and Home's cards spread into columns. Phones look the same as before.

### New features
- **Deck page beside the list** on a wide screen (iPad landscape): tapping
  Info opens the deck's page on the right half while the list stays on the
  left, with the open deck highlighted in the list; tap another deck to
  switch, Back to close. In portrait it opens full screen as before.
  Check: On an iPad in landscape: Decks > Info on a deck: its page fills the right half and the list stays on the left.
  Check: On an iPad in landscape, with a deck open: Info on another deck: the right half switches to it; Back closes it.
  Check: On an iPad in landscape, with a deck open: that deck's row in the list is highlighted with a gold edge.
- **Full width on iPad** (760px wide or more): the page uses the whole width;
  History's games sit in two columns (three on the widest screens) under
  month headings that span the width, Loadout's cases two across,
  Achievements four across, and Home's six cards three across.
  Check: On an iPad: Home's six cards sit in two rows of three.
  Check: On an iPad: History's games sit in columns, with each month heading across the full width.
  Check: On a phone: Decks, History and Home look as before.

## 1.34.4 -- 2026-10-06 -- Dice stay on the screen
Summary: With a larger text size, dice and coins rolled at the table land on the active seat again instead of running off the screen, and on an iPad the app's title lines up with the page.

### Bug fixes
- **Dice cut off at the table**: with text size Large or Larger (Settings >
  Look), a roll landed down and to the right of the active seat and ran off
  the screen on an iPad. It lands in the middle of the seat at every text
  size, in portrait and landscape.
  Check: Settings > Look > Text size: Large, then a game on the table > game menu > d20: the die lands inside the active seat, whole.
- On a wide screen the **Loadout & Ledger** title sat at the far left while
  the page was centered; it lines up with the page now.
  Check: On an iPad: the title sits above the left edge of the page, in line with the bar under it.

## 1.34.3 -- 2026-10-06 -- Swipe in for the menu
Summary: Swipe in from the right edge of the screen to open the side menu.

### Enhancements
- **Edge swipe**: a swipe left that starts at the right edge of the screen
  opens the side menu, the side it slides out from. The live table and the
  card table keep their own swipes.
  Check: Home: swipe left from the right edge: the side menu opens.
  Check: Home: swipe left from the middle of the screen: nothing opens.

## 1.34.2 -- 2026-10-06 -- Run checks finds every deck's set
Summary: Run checks now looks up the set of every deck that doesn't have one, so the Set sort and grouping work across your whole collection.

### Enhancements
- **Run checks** (its Commander step) looks up each deck's set -- where its
  commander was first printed -- for every deck without one, and says how
  many it found. A set you typed or looked up before is never replaced.
  Check: Decks > Run checks > Run checks (Commander ticked): the result line says "Sets: found for N decks", and Decks > Sort & group > Group: Set shows them by year.

## 1.34.1 -- 2026-10-06 -- Lists marked in the menu
Summary: The side menu marks Lists, not Decks, while you're on Lists, and the page header says Lists.

### Bug fixes
- Opening **Lists** from the side menu left **Decks** marked in the menu
  and the header reading Decks. Lists is marked now, the header says Lists,
  and Decks in the menu goes back to the roster.
  Check: Menu > Lists: the menu marks Lists and the header reads LISTS.
  Check: Menu > Decks (from Lists): the roster shows and the menu marks Decks.

## 1.34.0 -- 2026-10-06 -- Stats, Home, checks and History tidied
Summary: Stats leads with four numbers and keeps every filter in Filters, Achievements is a tab, Home leads with its six cards and folds notices into one row, Run checks is on Decks and nudged when stale, a deck's checks show on its Overview, and History groups games by month.

### New features
- **Achievements tab** on Stats, beside Overview and the others. Trophies
  on the Overview opens it.
  Check: Stats > Achievements: the five groups show.
- **Run checks on Decks**, next to the deck count, and a Home reminder when
  deck checks haven't run in 30 days.
  Check: Decks > Run checks: Settings opens at Deck upkeep with its Run checks button.
- **CHECKS on a deck's Overview**: the bracket, mana base, legality and
  combos from the last check in one line; tap any of it for the details.
  Check: Decks: open a checked deck > Overview: CHECKS shows chips like Bracket OK and All legal; tapping one opens Decklist.
- **History by month**: sorted by date, games sit under month headings
  that fold; the newest month starts open.
  Check: History (Sort: Newest): month headings with game counts; tap the second month to open it.

### Enhancements
- **Stats**: four headline numbers, with the rest under **More numbers**;
  the deck, pod size and time span filters moved into **Filters**, whose
  count includes them.
  Check: Stats > Filters: the deck and pod size choices and Last 30 days are inside; picking one makes it read "Filters (1 active)".
- **Home leads with the six cards.** Notices follow them, and several fold
  into one "N things to look at" row (backup, price drops, full cases, deck
  checks, the nightly card check).
  Check: Home: the six cards come right after search; with several notices, one row says how many and opens them.
- **Deck page Decklist tab**: the check buttons come before what they found
  (Bracket check, Mana base, By list version).
  Check: Decks: open a deck > Decklist: Check with Scryfall sits above BRACKET CHECK.
- "Restore Missing from Seed" is now **Add back built-in decks**, and
  "Refresh All" is called Run checks everywhere.
  Check: Settings > Data > Backup and restore: there is no Restore Missing from Seed button (Add back built-in decks only appears in a build that ships with built-in decks, so the live app shows neither).

## 1.33.0 -- 2026-10-06 -- Sets by release, Loadout in steps, one Sort control
Summary: Sets are kept in release order, the Loadout page reads as five steps with ideas before packing, Loadout and History sort with the same fold as Decks, Decks' tools fold away, and Lists is in the side menu.

### New features
- **Sets in release order.** The Set sort on Decks goes oldest release
  first, a new **Set** grouping heads each group with its year, a deck's Set
  field shows the year it was released, and the home storage plan keeps
  precons from one set together in release order. Release dates come from
  Scryfall's set list.
  Check: Decks > Sort & group > Group: Set: groups are headed like "2021 - Kaldheim Commander", oldest first, No set last.
  Check: Decks: open a deck with a set > Edit > Basics: under Set it says the year it was released.
- **Lists in the side menu**, right under Decks.
  Check: Menu > Lists: opens Decks > Lists.

### Enhancements
- **Loadout in five steps**: Who and where, Ideas for tonight (Suggest a
  deck, now before the cases), Pick and pack decks, Accessories, and Check
  what's packed (the bracket spread and bag value, now after packing).
  Check: Loadout: the steps read 1 to 5 down the page, and Suggest a deck sits above Deck Assignment.
- **One Sort control**: Loadout and History fold their sort pills behind
  one line that says what's in effect, like Decks.
  Check: Loadout > Sort: Bracket: tap it, pick Threat and Reverse: the line reads "Sort: Threat (reversed)".
  Check: History > Sort: Newest: tap it, pick Best finish: the line reads "Sort: Best finish".
- **Decks starts sooner**: Find a Card and Commander ideas share one closed
  **Tools** fold under + New deck, and the Show choices sit on one row that
  scrolls sideways.
  Check: Decks: Tools sits under + New deck and opens to Find a Card and Commander ideas.

## 1.32.0 -- 2026-10-06 -- Default roster grouping
Summary: Settings can set how the roster is grouped when you open it, beside the default sort.

### New features
- **Default roster grouping** in Settings > Decks > Roster defaults: None,
  Bracket, Box, Color or Theme. The roster starts grouped that way and
  switches as soon as you change it. Until you pick one, the roster keeps the
  last grouping you used, as before.
  Check: Settings > Decks > Roster defaults > Default roster grouping: Color: Decks > Sort & group reads "by color" and the roster is in color groups.
  Check: Reload the app: Decks is still grouped by color.

## 1.31.1 -- 2026-10-06 -- To update, not to upgrade
Summary: Decks you plan to change say "to update" everywhere, not "to upgrade".

### Enhancements
- The deck tag, the Show choice, the Status filter, the deck badge's hint
  and the guide all say **to update**; the decks you had marked keep their
  mark.
  Check: Decks > Show: the choice reads To update with its count.
  Check: Decks > Filters > Status: the choice reads To update.
  Check: Decks: open a deck > Edit: the tag reads to update.

## 1.31.0 -- 2026-10-06 -- Mana base, price drops, practice by version, more achievements
Summary: Each deck's mana base is checked against its curve and its mana costs, wishlist cards that drop in price are flagged, goldfish reps are compared list version by list version, and Stats has 30 more achievements in five groups.

### New features
- **MANA BASE** on the deck's Decklist tab, from Check with Scryfall (and
  Run checks): your land count against a suggested count from the curve and
  the cheap ramp and draw, and each color's land sources against its share of
  the colored pips. A short color is called out.
  Check: Decks: open a deck with a list > Decklist > Check with Scryfall: MANA BASE shows the land count, a suggestion and a row per color.
- **Wishlist price drops**: Check prices keeps a price a day for every
  wishlist card, and a card is flagged when it falls a set percent and amount
  under its 90-day high (15% and $1 to start, both adjustable). Run checks
  in Deck upkeep prices the wishlist too.
  Check: Decks > Lists > Wishlist: PRICE DROPS has Check prices and the two drop settings.
  Check: Settings > Decks > Deck upkeep > Run checks with the card check on: the result line names how many wishlist cards were priced.
- **Worth buying now on Home** when a wishlist card has dropped, with a
  button to the wishlist.
  Check: Home: with a flagged wishlist card, the green card lists it with its old and new price; Wishlist opens Lists > Wishlist.
- **Goldfish by list version**: each rep remembers which version of the list
  it was played on, and BY LIST VERSION (Decklist tab) and the Practice tab
  say which turn the deck came online on each version.
  Check: Decks: open a deck with list versions and goldfish reps > Practice: "By list version" compares the online turns.
  Check: Decks: same deck > Decklist: each BY LIST VERSION row (v1 is the oldest) ends with its goldfish online turn.
- **30 more achievements**, in five groups with a count each: Games, Wins,
  Feats, Decks and Table. New ones include winning with every color, from
  every seat, from the last seat, with a precon and with a brew, at 3
  brackets, by commander damage, mill, poison or an alternate win, after
  dropping to 5 life or to 1, after keeping 5 cards, as the underdog, in Two-
  Headed Giant and 1v1, plus bigger game, win and collection goals.
  Check: Stats > VIEW STAT > Achievements: five groups, each headed with how many are unlocked.

## 1.30.0 -- 2026-10-06 -- Sorts and filters, one language
Summary: Every page now sorts and filters with the same names and the same rules, and Threat, Tier, pod size and format can be filtered wherever they make sense.

### New features
- **Threat and Tier filters** on Decks, Stats, History and the Loadout deck
  picker: High (7-10), Middle (4-6), Low (1-3), and S to C tier or No tier.
  Check: Decks > Filters > Threat: High: only decks whose Threat is 7 or more stay.
  Check: Decks > Filters > Tier: No tier: only decks without a tier stay.
- **Loadout deck picker sorts**, with the same choices as the roster and a
  Reverse button.
  Check: Loadout > Edit a loadout > Sort > Win rate: the best decks come first; Reverse flips them.
- **History filters by pod size and format** (Free-for-all or Two-Headed
  Giant), and sorts by Best finish, Pod size, Longest or Quickest game, with
  a Reverse button.
  Check: History > Filters > Format: Two-Headed Giant: only team games stay.
  Check: History > Sort > Best finish > Reverse: the worst finishes come first.
- **Roster sorts by Tier, Color, Box and Set**, and every roster sort can be
  the default in Settings.
  Check: Settings > Decks > Roster defaults: Default roster sort offers Tier, Color, Box and Set.

### Enhancements
- The same names everywhere: Name, Win rate, Last played, Deck bracket,
  Status, Play history, In loadout, Last 30 days / Last 90 days, and "All"
  as each filter's first choice.
  Check: Stats > Filters: the time filter reads Last 30 days and Last 90 days.

### Bug fixes
- In the Loadout deck picker, **Play history** and **In loadout** filters did
  nothing; they now filter.
  Check: Loadout > Edit a loadout > Filters > Play history: Never played: only unplayed decks stay.
- **Status: Build queue** and **To upgrade** only worked on the roster; they
  now work on every page that offers them.
  Check: History > Filters > Status: To upgrade: only games with decks flagged to update stay.
- Stats offered a Play history filter that did nothing; it is gone.
  Check: Stats > Filters: no Play history choice.
- The Sort fold showed raw keys (like "lastplayed"); it shows the names.
  Check: Decks > Sort > Last played: the fold reads Last played.
- **Clear All** in the filter panel left some filters set; it now clears every one.
  Check: Decks > Filters: set Threat and Tier > Clear All: every deck is back.

## 1.29.2 -- 2026-10-06 -- Sort by Threat
Summary: The roster can sort by Threat, the biggest target first, and Threat can be the default sort.

### Enhancements
- **Sort: Threat** on the roster puts the decks the table is most likely to
  target first (your own number where you set one, else the app's); Reverse
  flips it. It can also be the default sort in Settings.
  Check: Decks > Sort > Threat: the first decks have the highest Threat on their pages.
  Check: Settings > Decks > Roster defaults: Default roster sort offers Threat.

## 1.29.1 -- 2026-10-06 -- EDHREC on the Overview
Summary: A deck's EDHREC popularity is back on its Overview, under its Threat.

### Bug fixes
- A deck's **EDHREC POPULARITY** (rank, deck count, Refresh and the list
  comparison) was tucked away on the Decklist tab; it is on the Overview
  again, right under the Threat it feeds.
  Check: Decks: open a deck > Overview: EDHREC POPULARITY with the rank and Refresh sits under THREAT.

## 1.29.0 -- 2026-10-06 -- Threat index
Summary: Every deck gets a Threat from 1 to 10 -- how likely the table is to target it -- worked out from EDHREC research, the list, its games and its speed, with your own number able to override it.

### New features
- A deck's Overview shows its **THREAT** (1 to 10): how likely the table
  is to make it the target. The app works it out from EDHREC's research
  (the commander's salt score, the saltiest cards in the list, how well
  known the commander is, a precon's tier), the list's power, how it does
  at your table, and its speed, with a line on what's driving it. A brand
  new deck gets one from the research and the list alone.
  Check: Decks: open any deck > Overview: a THREAT number with the reasons under it.
- Set your own **Threat** under Edit > Basics; the Overview then shows
  yours next to the app's, and Auto puts the app's back.
  Check: Decks: open a deck > Edit > Basics > Threat, pick 9, Save: the Overview reads 9, yours, and what the app says.
- Threat steers the **Random** loadout with three new biases, **Low
  threat**, **High threat** and **Spread the threat** (no loadout stacked
  with decks of one threat level), and a **Low-key** weight in Settings >
  Deck suggestion bias.
  Check: Loadout > Random: the bias chips include Low threat, High threat and Spread the threat.

### Bug fixes
- The **Deck suggestion bias** sliders showed 1.0 for weights that really
  start at 0 (Off the beaten path); they now show their true value.
  Check: Settings > Decks > Loadout suggestions > Deck suggestion bias: Off the beaten path and Low-key read 0.0 (off).

### Behind the scenes
- The Worker passes along EDHREC's salt scores for a commander and keeps
  EDHREC's saltiest-cards list for a day; Refresh All records which of
  them each list runs.

## 1.28.1 -- 2026-10-06 -- Loadout names in home storage
Summary: A home layout taken from a loadout uses that loadout's case nicknames and drops the auto plan's descriptions.

### Enhancements
- When **Use a loadout** sets the home layout, each case goes by its
  nickname from that loadout and the auto plan's description lines are
  gone. A saved layout keeps the names, so a deck's page says which named
  case it lives in.
  Check: Loadout > Home storage: Use a loadout whose cases have nicknames: the cases show those names and no description lines.

## 1.28.0 -- 2026-10-06 -- Back to the game, slide to reverse
Summary: Leaving any game for another page leaves a Back to button (with Dismiss), a held life tile reverses when you slide across, -1 and +1 tick on iPhones, Dandan's hand shows in Arena, and the tour shows every page it talks about.

### New features
- Leave a game in progress for another page and a **Back to** button sits
  at the bottom of the screen, for every format: the game (or Momir, or
  Two-Headed Giant) with its turn, and Dandan or the playtest on the card
  table. **Dismiss** hides it until you next leave the game.
  Check: Game Setup: start a game, go to Stats from the side menu: Back to the game - turn 1 shows, and tapping it returns to the table.
  Check: Game Setup: start a game, go to Stats, tap Dismiss: the button goes away.
- **Goldfish and playtest** are one thing on a deck's Practice tab: pick
  the pressure, then play the rep **On the card table** or **With your own
  cards**. On the card table each turn brings a pressure prompt that names
  only what's on your battlefield, **Came online** marks the turn, and **End
  rep** logs it to the deck's journal like any other rep.
  Check: Decks: open a deck with a list > Practice > On the card table > Start, keep, play two turns, End rep: the Journal has the rep and the summary counts it.
- **Home storage** can take its layout from a saved loadout: **Use a
  loadout** puts each of its decks in the case it's packed in there, and
  every deck not in it is **Unassigned**.
  Check: Loadout > Home storage: pick a saved loadout under Use a loadout: its decks fill their cases and the rest show as Unassigned.
- Hold a **life tile** and slide your finger to its other half: the count
  turns round and runs the other way until you slide back or let go.
  Check: Game Setup: table view with tile tapping on, hold the top half of a seat, slide to the bottom half: life starts going the other way.

### Enhancements
- The **-1** and **+1** life buttons tick on an iPhone again. A tap adds or
  takes one with a tick; holding still repeats by 5.
  Check: Game Setup: start a game in table view, tap +1 on a seat: life goes up by one with a tick.
  Check: Game Setup: in table view, hold -1 on a seat: life drops by 5 at a time, and no text gets selected.
- A deck's **set** is now edited with its other details, under **Edit >
  Basics** (with Look it up); the deck's Overview just shows it.
  Check: Decks: open a deck > Edit > Basics: a Set field with Look it up; type a set, go back to Overview: it shows there.
- The **tour** shows everything it describes: new stops for Home storage,
  a game's life timeline, sharing games, Venues and the Look settings.
  Check: Settings > App: Take the tour: A game's story opens a game and points at its life timeline.

### Bug fixes
- **Animations** and **Haptics** in Settings > Look no longer jump back to
  High when you change page: each phone now keeps its own choice.
  Check: Settings > Look: set Animations to Low and Haptics to Low, go to Stats and back: both still read Low.
- **Dandan** in **Arena**: your hand was squashed to nothing in the short
  half. Rows now keep their height, permanents and lands share one row there,
  and the action buttons scroll in one line.
  Check: Game Setup: start Dandan, tap Arena: your seven cards show in your half.

### Removed
- The haptic **Strength** slider in Settings > Look.
  Check: Settings > Look: Haptics shows None, Low and High with no Strength slider.

## 1.27.0 -- 2026-10-05 -- Haptic levels and the side menu everywhere
Summary: Haptics get None/Low/High and a strength slider, life tiles tick, taps register faster, the side menu opens from every game view, and the card table gets the life table's menu.

### New features
- **Haptics** in Settings > Look is now **None**, **Low** (games only:
  life tiles and buttons, the table, the boards, dice, passing the turn) or
  **High** (every button), with a **Strength** slider. Life tiles tick when
  tapped.
  Check: Settings > Look: tap Haptics > Low, then tap Try it: you feel a tick.
  Check: Game Setup: start a game in table view with tile tapping on, tap a tile: you feel a tick and life changes by one.
- The **side menu** opens from every game view: the life table's game menu
  and the card table both have a menu button, and going to another page from
  it tucks the card table away behind a **Back to** button.
  Check: Game Setup: start Dandan, tap the menu button on the middle strip, go to Stats: a Back to Dandan button brings the table back.
- The **card table** (playtest and Dandan) has a **Menu** like the life
  table's: game log, library, graveyard, dice and coin, layout, New game and
  Close card table at the top and the bottom.
  Check: Game Setup: start Dandan, tap Menu: dice, layout and Close card table at the top and bottom.
- Tap a check's **id** in the release notes to copy it.
  Check: Settings > App > What's new > Untested: tap an id: it says Copied and pastes elsewhere.

### Enhancements
- Taps register sooner: buttons no longer wait to see whether a tap is the
  start of a double-tap zoom, which is what made haptics feel late.
  Check: Settings > Look: tap Try it a few times quickly: each tick comes as the finger lifts.
- The double bump (a turn passing, a die landing) is two clearly separate
  pulses on Android. An iPhone can only give one fixed tick per tap.
  Check: Settings > Look: on an Android phone, tap Try it: two distinct pulses.
- The tour is up to date: new stops for Formats, Practice and playtest, and
  What's new, and the other stops mention haptics, home storage, sharing
  games and the side menu.
  Check: Settings > App: Take the tour and step through: Formats points at the Format dropdown.
- Playgroup's **You own them** filter is now **You lead**: the people you've
  beaten more than they've beaten you (3+ games).
  Check: Playgroup: the filter chips read You lead.

## 1.26.1 -- 2026-10-05 -- Progress starts fresh each update
Summary: The testing progress bar counts only what's been tested since the newest version arrived, starting at 0% each update.

### Enhancements
- The **testing progress** bar no longer counts every check you've ever
  ticked. Each new version starts a round at 0%: it covers the checks still
  untested when that version arrived, including any left over from before.
  Check: Settings > App > What's new: the bar reads "ticked since v1.26.1 arrived" and starts at 0 of the untested count.

## 1.26.0 -- 2026-10-05 -- Testing progress, easier scry
Summary: Release notes show how much is tested, scry and surveil are one clear decision, every deck can carry its set, and iPhone haptics work again.

### New features
- The release notes show a **testing progress** bar: how many checks are
  ticked across every release, and the shown release's own count.
  Check: Settings > App > What's new: tick a check: the bar and "of N checks ticked" go up by one.

### Enhancements
- **Scry** and **Surveil** are easier: next to **Draw**, set the count with
  - and +, then tap **Look**, **Scry**, **Surveil** or **Mill**. Scry and
  surveil show the cards together; choose **Top** or **Bottom**
  (**Graveyard**) for each, reorder the ones you keep with the arrows, and
  tap **Done**. Nothing moves before then, and **Cancel** leaves the library
  alone.
  Check: Game Setup: start Dandan, set 3, tap Scry: send one to Bottom, move another up, tap Done: the log reads 2 on top, 1 on the bottom.
  Check: Game Setup: start Dandan, tap Surveil, tap a card, tap Done: that card is in the graveyard.
- **Every deck can carry its set**, not just precons: the deck's Overview
  shows **Set** with Edit and Look it up, and the home storage plan looks up
  and edits sets for every deck. Precons from one set still stay together.
  Check: Decks: open a deck that isn't a precon > Overview: it shows SET with Edit and Look it up.

### Bug fixes
- **Haptic taps** work on iPhones again. iOS 26.5 stopped the old way, so
  each button now carries an invisible switch your tap lands on, which is
  the one kind of tap iOS still answers with a tick. Holding a button
  (life steps) still can't tick on an iPhone.
  Check: Settings > Look: Haptic taps on, tap Try it: you feel a tick (System Haptics on in the phone's settings).

## 1.25.0 -- 2026-10-05 -- Scry, surveil and flip
Summary: The card table can scry, surveil and mill, and flip cards -- transform a double-faced card or turn one face down.

### New features
- Next to **Draw** on the playtester and Dandan, the top-cards control does
  **Look at**, **Scry** (keep each on top, in order, or bottom), **Surveil**
  (top or graveyard) or **Mill** for the number you set, and logs it.
  Check: Game Setup: start Dandan, pick Scry, set 2, tap it: the two top cards each offer Bottom, and To top to reorder.
  Check: Game Setup: Dandan, pick Mill, set 3, tap it: three cards go to the graveyard and the log names them.
- **Flip** a card on the battlefield: **Transform** shows a double-faced
  card's back face (and back again); a card without one can **Turn face
  down**, showing as a nameless 2/2 until turned up. Momir creatures with a
  back face can **Transform** too.
  Check: Decks: playtest a deck, play a card, tap it > Turn face down: it shows as a face-down 2/2; Turn face up brings it back.

## 1.24.1 -- 2026-10-05 -- Go there sets the page up
Summary: A check's Go there now points at the exact control the check names, and fills in a search when the check gives one.

### Enhancements
- **Go there** on a release note check now sets the page up for it: it
  scrolls to the button, filter or setting the check names and rings it in
  gold for a few seconds, and types a search term into the page's search
  when the check gives one in quotes. It never presses anything or changes
  a setting for you.
  Check: Settings > App > What's new > Untested: tap Go there on the "tap Rivals" check: Playgroup opens with the Rivals filter ringed.

## 1.24.0 -- 2026-10-05 -- A livelier Playgroup
Summary: Opponents and venues filter and sort by their numbers, open with the standouts, and show head-to-head bars; venue win rates count again.

### New features
- **Standouts** at the top of People: your Nemesis, Favorite victim, Most
  played and Slowest turns (from people you've played 3+ times); Venues
  have Home base and Lucky venue. Tap one to open it.
  Check: Playgroup: People shows Nemesis and Favorite victim cards with their win rates; tap one: that person opens.
- **Filters and sorts**: People by Regulars, Rivals, You own them, Last 90
  days or New faces, sorted by games, your best or toughest matchups, their
  wins, last played or pace; Venues by Favorites, Lucky (50%+) or Last 90
  days, sorted by games, win rate, last played or name. Your choice is kept.
  Check: Playgroup: tap Rivals: only people who beat you more than you beat them (3+ games) are listed.
  Check: Playgroup > Venues: Sort by Win rate: the venue you win most at is first.

### Enhancements
- Each person has a head-to-head bar (your wins green, theirs red) and each
  venue a win-rate bar.
  Check: Playgroup: each row has a thin bar matching its win rate.

### Bug fixes
- Venue win rates counted no wins at all (placements are stored as "1st",
  which the venue count compared to the number 1).
  Check: Playgroup > Venues: a venue where you've won shows its wins and a win rate above 0%.

## 1.23.0 -- 2026-10-05 -- Precon sets everywhere
Summary: A precon's set is on its deck page, the set lookup tells you which it couldn't find, and the Untested list saves as an image.

### New features
- A precon's deck page (Overview) shows its **set**, with **Edit** to change
  it and **Look it up** to find it.
  Check: Decks: open a precon > Overview: PRECON SET shows; Edit changes it, and Home layout shows the new set.
- **Save as image** on What's new's Untested tab: every check left to test,
  grouped by release, with its ID.
  Check: Settings > App > What's new > Untested: Save as image saves a picture listing the checks with their IDs.

### Enhancements
- **Look up sets** in the home layout now says which precons it couldn't
  find a set for, so you can type those in.
  Check: Settings > Decks > Case storage: Home layout, Look up sets: any precon it can't find is listed by name.

## 1.22.0 -- 2026-10-05 -- Swap games with friends
Summary: Send games to a friend as a file and import theirs into your history, from your side of the table; and another go at iPhone haptics.

### New features
- **Send as a file** (History > Select to share): saves the games you
  picked to a file for a friend who uses the app.
  Check: History: Select to share, pick a game, Send as a file: a .json file is saved or shared.
- **Import a friend's games** (History): open their file, say which player
  you were, your deck and where you finished, and the games join your
  history from your side -- your friend becomes one of your opponents. A
  game already imported is skipped, and Undo takes the import back.
  Check: History: Import a friend's games, choose their file: each game asks who you were, your deck and placement; Add puts them in your history.
  Check: History: import the same file again: each game says it's already in your history.

### Bug fixes
- Haptics on iPhone: now made the way that's known to work on iOS 18
  (a fresh hidden switch each tap). The Look tab has a **Try it** button,
  and says what it needs: iOS 18 or later with System Haptics on.
  Check: Settings > Look: tap Try it next to Haptic taps: on a supported phone you feel it.

## 1.21.0 -- 2026-10-05 -- Scrub through a game
Summary: A game's life timeline in History opens into a scrubber that steps through the game with its log.

### New features
- **Scrub through the game** under a game's life timeline in History opens
  it bigger: drag across the chart or the slider (or press Play) to step
  through the game one logged event at a time. It shows the turn,
  everyone's life at that moment, and the log around it, with the current
  line marked. Tap a log line to jump there.
  Check: History: open a game with a life timeline, tap Scrub through the game, drag the slider: the turn, the totals and the marked log line follow.
  Check: History: in the scrubber, press Play: it steps to the end on its own.

## 1.20.0 -- 2026-10-05 -- Your home layout, your way
Summary: Move decks between cases yourself, keep each precon set together, and plan home storage from the Loadout page.

### New features
- Every deck in the **Home layout** has a move list: pick a case or No
  room to place it yourself. Your choices stay through any re-plan; a case
  you overfill says by how much; **Let the plan place them** undoes them.
  Check: Settings > Decks > Case storage: Home layout, change a deck's move list to another case: it moves there and "1 deck placed by you" shows.
- Precons from the same set stay together: each precon shows its set
  (tap to change it), **Look up sets** finds them from each commander's
  first printing, and each set goes whole into one case where it fits.
  Check: Settings > Decks > Case storage: Home layout with Precons together on, tap Look up sets: each precon shows a set, and a set's precons share a case.
- The home storage plan is on the **Loadout** page too.
  Check: Loadout: open Home storage: the same plan, with the same saved choices.

## 1.19.0 -- 2026-10-05 -- Test IDs and better haptics
Summary: Every check has an ID you can quote, haptics reach more places and work better on iPhone, and Momir from your own cards no longer seems to do nothing.

### New features
- Every check in What's new has an ID (like **1.18.0-2**: the release and
  its place in it), on each check line, in the Untested tab and on the
  saved release image -- so you can say exactly which one failed.
  Check: Settings > App > What's new: open a note's checks: each starts with an ID like 1.19.0-1.
  Check: Settings > App > What's new > Untested: each line shows its ID.

### Enhancements
- More haptics: a tick for each step while holding a life button, and a
  bump when the turn passes and when a die or coin lands. On iPhones the
  tap tick now fires on the tap itself, which is when iOS allows it.
  Check: Game: on a phone, hold +1 on a seat: a tick with each step of 5.
  Check: Game: pass the turn: a double bump.

### Bug fixes
- Momir with creatures from **My decks** or **My collection** looked like it
  did nothing: a press waited silently while your cards were looked up, and
  unknown names were retried one by one. The lookup is now plain batches,
  and a press says how far it has got; the creature comes when it's done.
  Check: Game: Momir game, Creatures from My decks, press Momir straight away: a message says it's looking up your cards, then the creature appears.

## 1.18.0 -- 2026-10-05 -- Tokens from the card
Summary: A card that makes tokens has a button to make exactly those tokens, in Momir, Dandan and a playtest.

### New features
- A card's sheet has a button for each token it makes (**Goblin token**,
  **Make Fish token**...), using the token's real details from Scryfall:
  name, type, power and toughness, and text.
  Check: Game: Momir game, make a creature that creates tokens, tap it on the board: its token button makes that token.
  Check: Decks: playtest a deck with a token maker, tap it: Make ... token puts that token on your battlefield.

## 1.17.1 -- 2026-10-05 -- A flashier stalemate
Summary: The gain-and-loss easter egg now flashes the life total while both buttons are held.

### Enhancements
- Holding a seat's gain and loss buttons together now makes its life total
  flash between red and green until you let go (with easter eggs on). It
  still doesn't change the game.
  Check: Game: table view with easter eggs on, hold one seat's -1 and +1 together: the life number flashes red and green; let go and it stops.

## 1.17.0 -- 2026-10-05 -- Momir from your own cards
Summary: Momir can make creatures only from your decks, your collection, or both.

### New features
- **Creatures from** for Momir: All of Magic (as before), **My decks** (the
  cards in your decklists), **My collection**, or **My decks and
  collection**. It's under the Format dropdown when Momir is chosen and in
  the game menu's Momir row. Your cards are looked up once -- the first time
  takes a little while -- and remembered until your lists change.
  Check: Game Setup: Format Momir, Creatures from My decks; start, play lands and Momir: the creature is one from your decklists.
  Check: Game: Momir game, X with no creature of that mana value among your cards: it says so and nothing is discarded.

## 1.16.0 -- 2026-10-05 -- Tactile presses
Summary: Buttons tick under your finger and visibly press, and Playtest moved to a deck's Practice tab.

### New features
- **Haptic taps**: every button gives a light tick as you press it, on
  phones that support it (most Android phones, and iPhones on recent iOS).
  Turn it off on the Look tab.
  Check: Game: on a phone, tap a life button: you feel a light tick.
  Check: Settings > Look: turn Haptic taps off: presses no longer tick.

### Enhancements
- Buttons shade as you press them, even with animations off, so every
  press shows.
  Check: Settings > Look: Animations None, then press and hold any button: it darkens while held.
- **Playtest** moved to a deck's **Practice** tab, with the rest of
  practice. A deck without a list there points you to its Decklist tab.
  Check: Decks: open a deck with a list > Practice: Playtest is at the top and opens the card table.

## 1.15.0 -- 2026-10-05 -- One Format dropdown
Summary: Formats are one dropdown, quick start follows your setup, Momir's Life view has a way back, and a small surprise for indecisive thumbs.

### New features
- **Format** in Game setup is one dropdown: Free-for-all, Two-Headed Giant,
  and -- once you've found them -- Momir and Dandan. Planechase stays a
  separate tick box, as an add-on to any game. Momir and Dandan set 2
  players at 20 life, and go back to Free-for-all after each game.
  Check: Game Setup: Table section, Format: the dropdown lists Free-for-all and Two-Headed Giant (plus Momir and Dandan if found).
  Check: Game Setup: choose Dandan: its deck list link shows and players go to 2 at 20 life; Start Game deals Dandan.
- An easter egg for holding a seat's gain and loss buttons at the same
  time. It doesn't touch the game.
  Check: Game: table view with easter eggs on, hold one seat's -1 and +1 together: a remark shows and the life total doesn't move.

### Enhancements
- **Quick start** uses the setup as it stands: format (with teams for
  Two-Headed Giant), starting life, Momir, Dandan and Planechase.
  Check: Game Setup: choose Two-Headed Giant, tap Quick start: two teams sharing 60 life.
- Momir's **Life view** has a **Back to the board** button on the table.
  Check: Game: Momir game, tap Life view: Back to the board at the top returns to the board.

### Bug fixes
- Discarding a Momir game left Momir chosen, so the next quick start dealt
  Momir boards to a normal game. Discarding now resets the format, like
  logging does.
  Check: Home: discard a Momir game, then Game Setup > Quick start: a normal table, no Momir boards.
- On a phone, quick taps on the playtester's and Dandan's life buttons
  could be taken as a double-tap zoom and missed.
  Check: Decks: playtest a deck, tap -1 quickly several times: each tap counts.

## 1.14.0 -- 2026-10-05 -- Untested checks in one place
Summary: An Untested tab for the release notes, menus that glide when you swipe, and a Random theme button.

### New features
- **Untested** tab in What's new: every check you haven't ticked yet, from
  every release, with its note, a tick box and Go there.
  Check: Settings > App > What's new: tap Untested: the count matches the list; tick one and it leaves the list and the count drops.
- **Random theme** on the Look tab picks a theme you're not using.
  Check: Settings > Look: tap Random theme: the theme changes and a message names it.

### Enhancements
- The game menu and seat menus glide after a quick swipe and slow to a
  stop, instead of stopping the moment your finger lifts.
  Check: Game: table view, open the game menu and flick up: it keeps scrolling briefly; touch it to stop.
- The animation choices on the Look tab run from least to most: None, Low,
  High.
  Check: Settings > Look: Animations reads None, Low, High.

## 1.13.0 -- 2026-10-05 -- Arena split and one set of life controls
Summary: Arena now splits the phone between two players facing each other, the board modes get the main table's life controls, game modes are all tick boxes, and 2HG shows one life per team.

### New features
- **Arena** on the Momir and Dandan boards now splits the phone down the
  middle: one half for each player, each half turned to face the player
  sitting on that side, laid out long and low like Arena's battlefield.
  Check: Game: Momir game for 2, table view, tap Arena: the left half reads from the left edge, the right half from the right edge.
  Check: Game Setup: start Dandan, tap Arena: the two halves face the left and right edges, and a card's sheet faces its owner.

### Enhancements
- Life controls on the Momir board, Dandan, the playtester and the goldfish
  match the main table: -5, -1, a typed change, +1, +5, and holding -1 or +1
  repeats by 5.
  Check: Game: Momir board, hold -1 on your side: life drops by 5 every moment until you let go.
  Check: Decks: playtest a deck, tap the goldfish's -5: it goes from 40 to 35.
- Game modes are opted into the same way in Game setup: Two-Headed Giant,
  Planechase, Momir and Dandan are each a tick box with a line on what they
  do. Ticking Momir or Dandan sets 2 players at 20 life and unticks the
  other (and Two-Headed Giant). With Dandan ticked, Start Game deals it.
  Check: Game Setup: Table section, tick Dandan: Momir unticks, players go to 2 at 20 life; Start Game opens Dandan.
  Check: Game Setup: tick Two-Headed Giant: the help explains shared life; untick it: free-for-all again.
- A normal game can't be switched to Momir from its game menu any more:
  Momir is chosen in Game setup.
  Check: Game: a normal game, game menu: no Momir switch.

### Bug fixes
- Two-Headed Giant in the list view showed a life total and buttons on
  every player, as if each had their own. A team's one shared life is now
  on its team card with the controls, and each player says it's shared.
  Check: Game: 2HG game, list view: each team card has -5 -1 +1 +5; tapping one changes the team's total once.

## 1.12.0 -- 2026-10-05 -- Everyone taps at once
Summary: Several players can change life at the same time, a way back to the release notes, durdle remarks, and Momir unticks after a game.

### New features
- **Back to release notes**: after a note's Go button takes you to a page,
  a button returns you to the same release, open checks and spot on the
  page. It stays 20 seconds, or until you use it or tap Dismiss.
  Check: Settings > App > What's new: open a note's checks, tap Go: "Back to release notes" appears; tap it: you're back at the same note.
  Check: Settings > App > What's new: tap a Go, then Dismiss: the button goes away.
- Durdle remarks: past turn 4, two whole rounds with nothing happening (no
  life change, counter or event) get a remark from the table. A few are
  prepared; anything happening starts the count over.
  Check: Game: pass the turn round the table to turn 5 or later without changing anything: a remark about durdling shows.

### Enhancements
- **Exit table view** is now at the bottom of the game menu too, as well as
  the top.
  Check: Game: table view, game menu, scroll to the end: Exit table view is the last button.
- Momir in Game setup is a one-game choice: after a game is logged, or on
  New game, it's unticked and life goes back to your default.
  Check: Game Setup: tick Momir, play and log the game, then start setting up the next: Momir is unticked and life is your default.

### Bug fixes
- Several players can now change their life at the same time. A second
  player's press used to cancel the first, so only one could tap at once.
  Check: Game: table view, two players hold -1 on their own seats together: both totals go down.

## 1.11.2 -- 2026-10-05 -- Long dungeons fit sideways
Summary: A dungeon map shown to a side seat no longer runs off the edge.

### Bug fixes
- On a seat that sits sideways, a long dungeon (Dungeon of the Mad Mage)
  was wider than its sheet, so the last rooms were cut off with no way to
  scroll to them. The map now fits the sheet, and the sheet uses more of
  the screen's long side.
  Check: Game: 4-player table, a side seat's menu > Dungeon > Dungeon of the Mad Mage: every room through Mad Wizard's Lair shows inside the sheet.

## 1.11.1 -- 2026-10-05 -- Updates reach the site again
Summary: The last several updates were held back by a false alarm in the publish check; they're all live now.

### Bug fixes
- Updates after 1.9.0 (the initiative note through Hide hand
  and Arena view) never reached the live site: the check that keeps your
  own data out of the public copy mistook a release note for your data.
  The note is reworded and the same check now runs before every update.
  Check: Settings > App > What's new on the live site: the newest release is 1.11.1.

## 1.11.0 -- 2026-10-05 -- Hide hand and Arena view
Summary: 1v1 boards can hide a hand and switch to an Arena-style layout; clearing history can be undone; a round of review fixes.

### New features
- **Hide hand** on each side of the Momir and Dandan boards keeps that hand
  face down, even on its own turn, so the other player can't read it off
  the screen. Tap again to show it.
  Check: Game: Momir game for 2, table view: tap Hide hand on your side: the hand turns into a count; tap again and the cards come back.
  Check: Game Setup: start Dandan, tap Hide hand on a side: the hand stays face down on that player's turn.
- **Arena** layout for the Momir and Dandan boards: whoever's turn it is
  plays from the bottom, upright, with the other side above -- like the
  Arena app, for passing one phone back and forth. The choice is remembered.
  Check: Game: Momir game for 2, tap Arena in the strip between the sides: both sides read upright; End turn and the other player moves to the bottom.
  Check: Game: in Arena layout, Player 2's turn: the centre Pass button reads upright, not upside down.

### Enhancements
- **Clear All Game History** can be undone: an Undo appears right after.
  Check: Settings > Data: Clear All Game History, confirm, then Undo: every game comes back in History.
- Day/Night now only flips between day and night, and the table menu has
  an **Off** to stop tracking it.
  Check: Game: table view, game menu, Day/Night: taps go Day, Night, Day; Off removes it.
- The in-game Game log shows turns and other game events as plain lines
  instead of "Game" with empty numbers.
  Check: Game: table view, pass the turn twice, game menu > Game log: "Turn 2: ..." reads as a line with no 0s.
- Stats with fewer than 5 games say "too few to say" instead of a misleading
  number, and History warns when From is after To.
  Check: Stats: with under 5 games, Win Rate vs Expected says "Only N games so far -- too few to say."
  Check: History: set From after To: a warning says no game can match.
- Wording fixes: plurals ("1 game", "1 turn"), "Who took you out?",
  "Mark notes current", and "To upgrade" everywhere.
  Check: History: with one unfinished game the banner reads "1 GAME NEEDS FINISHING".
- History search also matches your own deck's commander.
  Check: History: search for one of your commanders: games played with that deck show.
- Picking a theme while a holiday look is showing now says it's saved and
  will show after the holiday.
  Check: Settings > Look: on a holiday with holiday looks on, pick a theme: a message explains when it shows.

### Bug fixes
- The guided tour no longer stalls on the table steps when you tap Next
  quickly: it opens the table first, and the tap label clears between steps.
  Check: Settings > App > Take the tour: tap Next quickly through the table steps: each one points at the seats or game menu.
- Two-Headed Giant: when a commander knocks out a team, the knock-out
  record for each teammate names that commander.
  Check: Game: 2HG game, give one player 21 commander damage: both teammates are out, and the game log names the commander for both.
- A knocked-out seat is dimmed so it's clearly out, and repeated venue
  chips under the venue picker are gone.
  Check: Game: table view, knock a player out: their seat dims under the ELIMINATED stamp.

## 1.10.0 -- 2026-10-05 -- Playtest your decks
Summary: Playtest any of your decks on a card table, and a second hidden game mode to find.

### New features
- **Playtest** on a deck's page (Decklist tab): your list on a card table --
  commanders in the command zone, a London mulligan, draw, play, tap,
  counters, tokens, graveyard and exile, look at the top cards and order
  them, search, shuffle, and a goldfish at 40 to attack. Next turn untaps
  and draws.
  Check: Decks: open a deck with a list, Decklist, Playtest: seven cards, your commander in the command zone; Keep, then Next turn draws one.
  Check: Decks: in a playtest, tap a land in hand > Play land, then Attack with a creature: the goldfish's life goes down.
- Another hidden game mode, for the curious. Hint: it's a fish that hates
  being away from Islands.
  Check: Home: with easter eggs on, search for that fish's name: a new choice appears in Game setup.

### Behind the scenes
- Test screenshots no longer end up in the project.

## 1.9.1 -- 2026-10-05 -- Planechase goes hidden
Summary: Planechase is now a hidden mode you find, and every update gets its own version number.

### Enhancements
- Planechase has joined the hidden modes: it stays out of Game setup, the
  game menu and Settings until it's found. Hint: search for what you do to
  get from one plane to the next. A game already using it keeps it.
  Check: Home: with easter eggs on, search for the word for moving between planes: Planechase appears in Game setup's Table section.

### Behind the scenes
- Every update to the app is now its own release here, with its own
  version: new features raise the middle number, fixes and smaller changes
  the last. "new:" on What's new now notices a second update on the same day.
  Check: Settings > App > What's new: the newest release is 1.9.1, above 1.9.0.

## 1.9.0 -- 2026-10-05 -- The guided tour, and dungeons that load
Summary: A tour that drives the app for you on practice data and keeps none of it; planes, dungeons and emblems now really load; the initiative follows the rules; a home layout for your cases; and release notes that tell you what to check.

### New features
- **Take the tour**: the app shows itself around -- about 20 stops from Home
  and your decks through a game at the table to stats, backups and the
  guide. At each stop it changes pages and taps a button for you, with a
  marker on the tap and a card explaining what you're looking at, then
  waits for you to tap **Next** -- it never moves on by itself. Start it
  from the welcome screen (**Show me around first**), Settings > App, or
  the top of the user guide.
  Check: Settings > App: tap Take the tour; the app reloads into the tour with the banner across the top.
  Check: Step through with Next: each stop taps at most once, slowly, and waits for you.
- Touch anything outside the tour's card to take over from where it is: the
  tour pauses and a **Resume tour** button waits until you want it back.
  **Next**, **Back**, **Pause** and **End tour** are on the card.
  Check: Mid-tour, tap the page itself: the card goes and Resume tour appears; Resume replays that stop.
- The tour runs on practice data made up when it starts, and nothing changed
  during it is kept, by the tour or by you: your data isn't touched, backups
  and sync are off until it ends, and ending it brings everything back
  exactly as it was.
  Check: In the tour, change something (a life total, a theme); End tour: your own decks and settings are back as they were.
  Check: Settings > Data: in the tour, Back up says backups are off during the tour.
- **Home layout** (Settings > Decks > Case storage): a recommended case for
  every built deck across your Stanley and DeWalt cases. Grab and go makes
  each DeWalt a carry-ready kit of your most-played decks with a bracket
  spread and sorts the Stanleys by bracket then colors; By bracket and By
  color are there too. Least-played decks without room are listed. Keep a
  layout and each deck's page says which case it lives in.
  Check: Settings > Decks > Case storage: tick the cases you own, then read Home layout: every built deck has a case, none twice.
  Check: Keep this layout, then open a deck's page from Decks: it says "Lives in ... at home".
- Home layout keeps your precons together: all of them in the case that
  fits them best, out of the grab-and-go kits, with other decks only filling
  in when there's no room anywhere else. Untick **Precons together** to mix
  them in.
  Check: Settings > Decks > Case storage: Home layout puts every precon in one case, labelled Precons; untick Precons together and they spread out.
- **Accessories live in**: the Stanley that also holds accessories stores 7
  decks (Stanley Case 1 to start with), and the case count and Home's
  "cases are full" warning use that.
  Check: Settings > Decks > Case storage: Stanley Case 1 shows 7 slots + accessories; pick another Stanley and the 7 moves with it.
- Release notes say what to check: a note with **Check here** opens a short
  list of things to try in the app to see that change working, each with a
  tick box (remembered on this phone) and **Go there** to jump to the page.
  Check: Settings > App > What's new: tap a Check here chip, tick an item, Go there opens that page.
- **Save as image** on any release: the notes as a picture in your theme,
  with or without what to check.
  Check: Settings > App > What's new: Save as image saves a PNG of the release you're reading.
  With checks ticked, the picture is your testing report: each check shows
  its tick box as you left it, under a bar with how many are done.
  Check: Settings > App > What's new: tick two checks, tick with checks, Save as image: those two are ticked and the bar counts them.

### Enhancements
- **Exit table view** is at the top of the game menu, beside the close
  button, instead of at the bottom.
  Check: Game: at the table, open the game menu: Exit table view is in the top row.
- The tour is easier to see and follow on any theme: the page dims around
  what it's showing, a bright ring and a labelled marker show each tap,
  the card has a strong frame and stays put at the bottom (what it shows
  scrolls into view above it), taps are slower, and the banner runs across
  the top.
  Check: Take the tour in your usual theme: the card stays in one place and each tap is easy to follow.
- Dungeons have a real map, drawn like the card: rooms in rows from top to
  bottom with an arrow for each way on, the venture marker on your room,
  the path you took lit, and the room's effect written above. When there
  are two ways on, tap the room you want. Choosing a dungeon shows each
  one's map before you enter. Facing a side seat the map reads left to
  right so it fits; **Card** shows the actual card.
  Check: Game: in a seat's menu, Venture into the dungeon: pick a dungeon from its map, Enter, and the marker is on the top room.
  Check: Venture again until a fork: both rooms are marked; tap one and the marker moves there.
- Taking the initiative (and venturing at its upkeep, or from a seat) opens
  the dungeon map for that player, turned to face them.
  Check: Game: give a seat the Initiative: Undercity opens facing that player on Secret Entrance; pass round to their turn and it opens again.
- The dungeon screen is compact and harder to slip on: room names on the
  map, your room filled in, and tapping a room only selects it (its effect
  shows under the map). Moving takes a button that names the room -- Move
  to Forge, Venture to Archives -- and Undo steps back one move. The
  buttons sit in a row that's always on screen, clear of the notch, with
  Done to close (or tap outside the sheet).
  Check: Game: open a seat's dungeon map: tap a room and only its effect changes; Move to <room> moves you; Undo puts you back.
  Check: Game: open the map at a side seat: Done is visible and closes it.
- Dungeons work like the initiative: a **Dungeon** button beside Monarch and
  Initiative in a seat's Table status (a door icon on the seat in the list
  view), lit while that player is in a dungeon. It opens the dungeon screen,
  where Took the initiative again and Leave now live too.
  Check: Game: in a seat's menu, tap Dungeon: the dungeon choice opens facing that player.
  Check: Game: give that seat the Initiative: the screen shows Took the initiative again and Leave.
- Dungeons and the initiative follow the rules for several players at
  once: each player has their own dungeon and their own open choice; taking
  the initiative while in another dungeon moves you on in that dungeon (the
  screen says so); losing the initiative leaves you in Undercity; and a
  venture that comes while your choice is still open waits and happens as
  soon as you choose. The dungeon screen shows who has the initiative and,
  with more than one player in, who's where.
  Check: Game: put one seat in Lost Mine, give another the Initiative, then give it to the Lost Mine seat: it moves on in Lost Mine and the note says why.
  Check: Game: with two seats at forks, choose for one: the other's choice is still waiting.
- In Undercity without the initiative, moving on means you took it back,
  so the initiative passes to you (**Card venture** is there for a card
  that just says venture, which doesn't take it). Finishing Undercity keeps
  the initiative with you, and the screen says you start over at your next
  upkeep.
  Check: Game: give seat A the Initiative, then seat B, then open A's Dungeon and tap Take the initiative: A has the initiative again.
  Check: Game: take the holder to Undercity's last room: the note says the initiative stays and Undercity starts over next upkeep.
  When the player with the initiative leaves the game, the map that opens
  for the player taking it now says why: the player whose turn it is (or
  the next in turn order) takes the initiative and ventures into Undercity.
  Check: Game: give a seat the Initiative, then mark that seat Scooped: the map opens for the player whose turn it is, with a note saying why.
- At the table, a player's menu turns to face them, side seats included,
  sized to fit.
  Check: Game: at the table, open the menu of a seat on the side: it reads the right way up for that player.
- The middle of the table (Pass turn and the last change) turns to face
  whoever's turn it is, staying where it is. Display > Center faces the turn
  switches it off.
  Check: Game: pass the turn round the table: the center turns to face each player in turn.
- **Shake to roll a d20** is a switch in Settings > Play. An iPhone asks for
  motion access once, when you turn it on, instead of on every launch; if it
  forgets, the game menu shows Allow motion rather than prompting.
  Check: Settings > Play: turn on Shake to roll a d20 and allow motion; reload the app and start a game: no motion prompt appears.
  Check: Game: shake the phone during a game: a d20 rolls.
- Everything you do in a game goes on its change log (the Game log, and the
  logged game): besides life, damage, counters, turns and notes, now the
  monarch and initiative changing hands, day and night, storm, fast mana,
  custom counters, dice and coins, Planechase rolls and planeswalks,
  dungeon moves and completions, and emblems.
  Check: Game: make someone monarch, roll a die and flip a coin, then open the Game log in the game menu: each one is listed.
- The winner screen reads the way the table does: one message facing each
  side that has players (left and right at a 4-player table, top and bottom
  for 2), or a single upright one when everyone faces the same way.
  Check: Game: finish a 4-player game at the table: WINNER faces the left and right sides, with the buttons in the middle.
- A whole new game mode is hidden in the app, for easter-egg hunters. Hint:
  the Simic Combine's most famous visionary answers to his name.
  Check: Home: with easter eggs on, search for the Simic visionary's name: a new choice appears in Game setup.
  Found it already? It now plays with real cards for everyone -- a hand to
  start, a draw each turn, lands to play -- and choosing it in setup sets
  the table up the way it's usually played, which you can still change.
  Check: Game setup: tick the hidden mode: players and life change to suit it; change either and it stays.
  Check: Game: open a player's button for it: a hand of 7, lands in play, and a draw at the start of each of their turns.
  Its board shows each player's creatures as cards: tap one to tap it
  sideways, add counters, copy it or take it off, and **+ Token** makes
  tokens from a list or your own.
  Check: Game: in it, tap + Token > Soldier: a Soldier card appears; tap it, then Tap: it turns sideways.
  At the table it's now played on a full board, like the real game: each
  player's side faces them with their life, creatures, lands and hand;
  keep or mulligan (London), play a land, use it once a turn in a main
  phase, attack, block from your own side, and combat follows the rules
  (summoning sickness, haste, flying and reach, first and double strike,
  trample, deathtouch, lifelink, menace, vigilance, indestructible). Damage
  wears off at end of turn, you discard down to seven, and drawing from an
  empty library loses. **Life view** goes back to the life totals; Board in
  the game menu brings it back.
  Check: Game: start the hidden mode at the table: both players Keep, the first plays a land and makes a creature, then End turn: the other side's turn starts with a draw.
  Check: Game: attack with a creature that's been out a turn, block with the other side: the damage and deaths match the cards, and life totals change.
- Seat tiles can show a picture: in a seat's menu, Seat look > Tile picture
  uses the commander's art or a photo from your phone, tinted so the life
  total stays readable, and remembered for that player's name next game.
  Check: Game: in your seat's menu, Seat look > Photo, pick a picture: your tile shows it; start another game and it's still there.
  The life total, name and counters stay readable on any picture: the
  middle of the tile is shaded more and every letter has a soft outline.
  Check: Game: give a seat a bright photo: the life total and name read clearly on it.
  Pictures now carry into a rematch (Run it back), even for seats with
  plain names like Player 2; a fresh New game starts without them.
  Check: Game: give Player 2 a picture, end and log the game, Run it back, start: Player 2 still has it.
- **To upgrade** on the Decks list: a choice in the Show row beside Built,
  Unbuilt and the stages, with its count like the others; it lists every
  deck you've marked to upgrade.
  Check: Decks: in Show, tap To upgrade: only decks with the upgrade badge are listed; tap Built to go back.
- **Discard this game** under Resume on Home's At a glance throws away a
  game in progress without logging it, after asking.
  Check: Home: with a game in progress, Discard this game, confirm: Resume goes away and Game opens on setup.
- Every emblem loads: emblems printed on the back of a token were missing,
  and Arena-only emblems are now there too, marked ARENA.
  Check: Game: a seat's menu > Add an emblem: the search says how many emblems loaded, and Arena-only ones are marked.
- **Took the initiative again** in a seat's dungeon box: taking the
  initiative while you already have it ventures into Undercity again.
  Check: Game: with the initiative, tap Took the initiative again: you move one room deeper.
- When the player with the initiative leaves the game (knocked out or
  scooped), the player whose turn it is takes it and ventures; if that's
  the player leaving, the next player in turn order does. The monarch
  passes the same way.
  Check: Game: drop the initiative holder to 0 life: the player whose turn it is takes it and the map opens for them.

### Bug fixes
- A full review of the app turned up these, now fixed:
  - Decklists: foil and etched markers (*F*, *E*), Archidekt [Category] and
    ^tag^ notes no longer hide a card's Game Changer status, the sideboard
    and maybeboard aren't counted, and cards that allow many copies
    (Relentless Rats and friends) aren't flagged as singleton breaks.
  - Lists > Fix categories: Apply N known / near-unanimous saves every card's
    fix, not just the last one.
  - Collection: Undo after a bulk removal only puts those cards back
    (roles, details and new files stay), survives switching tabs, and the
    import date and Changes are left alone; a second paste is its own
    binder instead of replacing the first; basics never show in Before you
    sell; Look them up in Swap ideas starts the lookup.
  - History and Stats: editing a game from a loss to a win (or back) clears
    the other side's fields; streaks, last 10, last game and History's
    newest-first follow the game's date, not when it was logged; Stats'
    bracket filter and By bracket use the bracket a game was played at;
    one opponent spelled "Sam", "sam " and "SAM" is one person everywhere;
    removing an opponent keeps their seats and results and can be undone;
    with no games, Win % reads -- instead of 0%; Brewmaster counts only
    built decks.
  - Decks: messages (and their Undo) show above a deck's page; a deck can
    be deleted from its page (it asks, then offers Undo); removing a
    decklist asks first and can be undone; a stray "0" under Retire is
    gone; Group by theme shows proper names; a short commander name like
    "Atraxa" finds its card; emptying a case can be undone; the odds table
    works on the 99 cards you draw from.
  Check: Decks: paste a list with "1 Rhystic Study (PCM) 12 *F*" and a SIDEBOARD: section: Rhystic Study counts as a Game Changer and the sideboard isn't counted.
  Check: History: edit a loss to 1st and save: the playgroup record for the old winner drops that win.
  Check: Decks: open a deck, Edit, Delete deck, Delete: it goes, and Undo shows above the page and brings it back.
- More from the review -- games:
  - Gaining life after ten poison or 21 commander damage no longer brings
    a player back.
  - The turn number goes up when play comes back round to whoever went
    first (it used to wait for seat 1, and stopped once that player was
    out), and the first player's clock is the one that starts.
  - Five and six players sit round the table in turn order instead of
    zigzagging across it, on a phone and an iPad.
  - Quick start always makes a free-for-all game; a paused game is still
    paused after a reload; Undo says it can't take back a pass (the game
    log can rewind); a planar deck never starts on a phenomenon; a poison
    knock-out records its turn.
  Check: Game: pick Player 3 to go first and pass round: the turn number goes up when it's Player 3's turn again.
  Check: Game: give a seat 10 poison, then +5 life: it stays out.
  Check: Game: start a 6-player game at the table: passing goes round the table, never across it.
- More from the review -- your data:
  - When the phone's storage is full and a change can't be saved, a
    warning says so and offers Back up now (it used to fail silently).
  - Import says what it will replace and asks first, can be undone, and
    the restored settings take effect straight away.
  - A backup only counts once the file was really saved or shared, so a
    cancelled share sheet doesn't hush the backup reminder.
  - Deleting a tournament asks first and can be undone; the Claude pack
    builds offline (without card text); the example question in it no
    longer names real people.
  - Elsewhere: What's new search no longer shows made-up check lists, the
    glossary shows each term once, Open rules opens the rules, and the
    "Repaired" notice no longer appears when nothing was repaired.
  Check: Settings > Data > Import a backup file: it asks "Import this file?" with the counts; after, Undo puts everything back.
  Check: Settings > App > What's new, search "tour": the hits have no Check here chips of their own.
- Passing the turn to the seat called You says "Your turn", not "You's turn".
  Check: Game: pass the turn round to You: the message reads Your turn.
- The table on an iPad (or any screen wider than tall) seats players along
  the long top and bottom edges, facing them, instead of the phone layout
  turned sideways; it switches as you turn the iPad.
  Check: Game: on an iPad on its side, start a 4-player game at the table: two seats face the top edge, two the bottom, and the life totals read the right way up for each.
- The Planechase card no longer sits under Game details once a game is
  over: it goes when you open the log form or log the game.
  Check: Game: in a Planechase game, finish it and open Log the game: no plane card under Game details.
- The winner's name no longer breaks in the middle of a word at a 4-player
  table ("PLA / YER 3"): it wraps only between words and shrinks to fit.
  Check: Game: finish a 4-player game with Player 3 winning: the name reads whole on both sides.
- Shake to roll: when an iPhone offers to "Undo Typing" on a shake, that's
  iOS's Shake to Undo -- the app no longer leaves a text box active at the
  table, and Settings > Play says where to switch it off. When the phone has
  forgotten motion access, a **Tap to turn on shake to roll** button sits on
  the table instead of shaking doing nothing.
  Check: Settings > Play: the Shake to roll note says where to switch off Shake to Undo.
- A player's menu at the table scrolls again when it's turned to face a
  side or far seat: the swipe follows the menu's own up and down, and the
  screens opened from it (a dungeon) scroll too.
  Check: Game: at the table, open a side seat's menu and swipe along it: it scrolls.
- Entering a dungeon could say it was completed on the very first room. A
  dungeon whose rooms aren't read cleanly is no longer guessed at (it
  counts rooms by hand instead), the room reader understands more ways the
  card text is written, and Undercity is read from the back of The
  Initiative card, where it actually lives.
  Check: Game: enter each dungeon: none says completed until you reach its bottom room.
- Choosing a dungeon listed cards that aren't dungeons ("Dungeon Master")
  and, picking one, showed a full-screen card with no way to enter or
  close. Only real dungeons are listed now, and the dungeon screen always
  shows its buttons.
  Check: Game: Venture into the dungeon: only dungeons are offered, and Enter and Not now are always visible.
- Planes, phenomena, dungeons and emblems never loaded from Scryfall (its
  search leaves these cards out unless asked), so dungeons fell back to
  counting rooms by hand and Planechase showed an error. They load now.
  Check: Game: turn on Planechase from the game menu: a plane shows with its art.
- Planechase (and dungeon progress) could carry over into a new game that
  didn't ask for it: Quick start and deck pods didn't reset it, and nothing
  cleared it after a game was logged. Every new game starts clean now, and
  Game setup's Table line says Planechase when it's ticked.
  Check: Game: log or discard a game, then Quick start: no Planechase panel unless Table shows Planechase.

### Behind the scenes
- A test log counts how often each part of the app has been tested --
  every test run, every check and every browser session -- and ranks what
  to test next.

## 1.8.0 -- 2026-10-04 -- Sharing, guide and motion
Summary: This release adds Planechase (with your own planes), initiative, dungeons and emblems at the table, ways to share the app and your stats, a full user guide, smarter commander ideas and deck-fit suggestions, ten new themes, and a lot more motion around the app.

### New features
- Settings has a fifth tab, **App**: share the app, the guide and rules,
  and what's new.
- Settings > **Share the app**: a message for a friend with the link, a
  short pitch and, optionally, a taste of your stats (decks and record only).
- Share the app can attach a sample data file, invented fresh each time and
  holding none of your own data, that shows off the whole app: about 25
  decks at every stage and bracket with full lists, a year of games
  (knockouts, MVPs, playtests, Two-Headed Giant, life timelines), loadouts,
  boxes and cases, playgroup regulars and venues, rankings, a tournament,
  a wishlist and a collection. A friend imports it to look around.
- Share your stats as a picture: Settings > Data > Export Summary > As a
  graphic. Pick a span (30 days to all time) and up to six tiles -- games
  over time, win rate over time, top decks, colors played, color coverage
  (precons optional), a play calendar, deck share, finishes, quick facts,
  venues, rivals, brackets -- and save or share a square image drawn in
  whatever theme you are using.
- The Rules page has a full User guide: every page and feature explained,
  chapter by chapter, with steps, tips, gestures, a spoiler chapter for the
  easter eggs, and fixes for common problems. Searchable. It is the Rules
  page's first tab, and the page remembers the last tab you read.
- Collection has a "Fits my decks" tab: loose cards you own that would be
  good in one of your decks (an EDHREC pick for it, a card your other decks
  run that fits its colors, or a popular staple), with the decks named. The
  wishlist says the same for each card on it.
- Collection > Remove cards (CSV): pick a ManaBox export (or a plain list)
  of cards you sold or traded, check the preview, and they come out in one
  go. Undo puts them back; Changes shows what went.
- Ten new themes: the shards and wedges (Bant, Esper, Grixis, Jund, Naya,
  Abzan, Jeskai, Sultai, Mardu, Temur), each showing all three of its colors.
- "Due for a win": the deck that has gone longest without a win gets a badge
  on its page.
- In the first days of a month, Home recaps the last one.
- The screen stays on while a game is live (Settings > Play to turn it off).
- More easter eggs: lucky seven, back to full, perfect balance, a five-turn
  reign, a ten-minute turn, storm 20, deja vu on a d20, birthday wins,
  mirror matches, your ledger-versary, more card searches, and a fact from
  your log when you tap the Stats title three times.
- Two more easter eggs: logging a game between midnight and 8am, and the
  whole table sitting at 13 life.
- Planechase: tick it in Game setup (or turn it on from the Game menu) for
  a shared planar deck. Roll the planar die (free the first time each turn,
  then one more each roll); it tumbles onto the active seat, the
  planeswalk symbol moves to the next plane and chaos lights up the plane's
  chaos ability. Phenomena resolve, then you planeswalk. At the table, a
  Plane pill under Pass turn opens the plane full screen. Planes visited
  are saved on the logged game.
- Make your own planes and phenomena (Settings > Play > Planechase: your
  planes) and choose whether games use them: official planes only, yours
  mixed in, or only yours. They go into backups.
- Initiative and dungeons: taking the initiative ventures into Undercity at
  once and again at each upkeep while you hold it. Every seat has a dungeon
  box (current room and what it does, Venture, Leave); a fork asks which
  room, turned to face that player, and the last room completes the
  dungeon. Your dungeon record is saved on the logged game.
- Emblems: add them to any seat from its menu, picked from every paper
  emblem (search by planeswalker or effect) or written by hand. They show
  on the seat, repeats count up, and yours are saved on the logged game.
- Animations come in three levels in Settings > Look: High (everything),
  Low (just presses, fades, sheets and life flashes) or None.

### Enhancements
- At the table, a rolled die or flipped coin lands on the seat of whoever's
  turn it is, turned to face them and sized to their tile.
- What's new is now full release notes. Every release has a version
  number (this one is 1.8.0), its date, a title, a summary and its changes
  under New features, Enhancements, Bug fixes, Removed and Behind the
  scenes. Every past release is covered and kept.
- What's new is easier to move around in: pick a version from the row of
  chips, step with **Newer** and **Older**, open **All versions** for an
  index with dates and counts, or search every note and tap a result to
  open its release. The section says "new:" until you open the latest.
- Settings > **App** shows the version you are on.
- Home has a small Guide button that opens the user guide.
- A logged game gets a stamp: VICTORY or GG.
- Everything moves a little better: buttons spring back, pages ease in,
  sections unfold with a turning arrow, the side menu slides in, life totals
  ease to their new number with a red sting or green glow, eliminated seats
  grey out under a stamp, pack ticks draw a line through, and changing the
  theme fades between the two.
- Life totals roll to their new number instead of jumping; a deck's page
  flips open like a card; commander damage shows on the tile from 10 and
  pulses from 15; when the monarch changes, the crown flies to the new one.
- Rolling a die shows it tumbling onto the table (pips on a d6), and a coin
  flips end over end before it lands. The result appears when it stops.
- Commander ideas weigh bracket and theme, not just colors: each idea shows
  roughly what bracket it plays at, you can aim for a bracket or a theme, and
  an idea that would echo a deck you have (same colors, same theme) says so.
- Deck upkeep (run checks, import notes) moved to Settings > **Decks**.
- Settings is calmer. On Data, only Backup is open; sharing, Worker and
  sync, deck upkeep, what's new and maintenance fold up with a one-line
  summary, and the three exports are tabs. On Decks every section folds
  with a summary (case slots, boxes over, accessories), and accessories
  open one category at a time.
- A loadout's Pack list is clearer: each deck under the case it rides in
  (with its bracket), then accessories, dice and tokens if any deck uses
  them; bigger tap targets, ticked items cross out, a count per case, and a
  full bag celebrates.
- Comprehensive Rules: every rule and section links to Wizards' published
  text at that spot.
- Opening a page, tab, section or panel resets any pinch zoom, so new
  content always starts fully in view.
- The month recap on Home comes back each time the app is opened; dismissing
  it hides it until the next reload.
- The Share the app message no longer says the app installs like an app.
- Glossary entries for Planechase, the planar die, phenomena, dungeons,
  venturing and emblems.

### Bug fixes
- Restoring a backup now shows its playgroup right away: regulars, notes
  and venue types used to appear only after a reload.
### Behind the scenes
- A new impact check runs with the automated tests: it notes which parts
  of the app have changed since they were last checked by hand, ignores
  code that only moved, and remembers every piece it has seen.

## 1.7.0 -- 2026-10-03 -- Palettes, holidays and easter eggs
Summary: A big look-and-feel release: build your own palettes, light mode, holiday looks, retuned themes and many easter eggs. It also adds a winner screen, case storage, tournament brackets and a per-deck Write notes with Claude button.

### New features
- Settings > Look > Your palettes: build your own color scheme. Pick a
  background and an accent, borrow fonts and corners from any theme, and the
  app works out readable text and borders (in light mode too). Edit or
  delete them any time; they're saved with your settings and backups.
- Settings > Look > Light mode: every theme in a light version -- pale
  pages, dark text, the theme's accent kept. Deck art and mana pips are left
  as they are.
- Settings > Look > Animations: tabs fade in, buttons press, life totals pop
  when they change. Off by default if your phone asks for reduced motion.
- Settings > Look > Easter eggs: a few small surprises around the app.
- Settings > Look: Holiday look -- a theme for whichever holiday season it
  is, all year: New Year, Valentine's, St. Patrick's, spring, Cinco de Mayo
  and Mother's Day, Pride and Juneteenth, the Fourth and summer, harvest,
  Halloween, Dia de Muertos and Thanksgiving, Christmas and Hanukkah.
  Seasons with several holidays pick one each time you open the app.
- When only one player (or team) is left in a game, they're declared the
  winner: their name fills the screen, printed both ways up so the whole
  table can read it, with confetti in their deck's colors. Then the game log
  opens with the placement filled in. "Not yet" backs out.
- Tournaments on the Game tab have a Bracket button (Ladder for a gauntlet)
  that opens the whole tournament at once: rounds side by side, winners
  marked, the champion at the end.
- Settings > Decks > Case Storage: your Stanley and DeWalt cases' slots
  against your built decks, with how many slots are free. Each case's slot
  count can be changed (or the case left out), and Home shows a warning when
  you have more built decks than your cases hold.
- Home > Color Coverage has an "Include precons" checkbox: untick it to see
  which color identities your own builds cover. The choice is remembered.
- Deck page: Fill from Scryfall puts the commander's card text (cost, type,
  rules, P/T) into an empty Commander box in one tap; the edit form's
  Commander Card Text has the same button, so you can check it before
  saving. Partners and backgrounds are included.
- Deck page: Write notes with Claude on the Overview tab runs the notes step
  for that one deck -- blank notes filled, changes to yours shown as
  suggestions just below.
- Settings has a Reload app button (your data is saved).
- A long pull down from the top of any page shows a Reload app button.
- Personal easter eggs on each deck's page, from that deck's own games:
  titles it has earned under its name (Undefeated, Giant slayer, Comeback
  kid, Speed demon, Marathoner, a win streak...), an "on this day" line when
  it played this date in an earlier year, and -- tap the deck's name five
  times -- its lore: first game, first win, fastest win, longest game,
  favorite victim, nemesis, home turf.
- Easter eggs at the table: a line when someone drops to 0, hangs on at 1,
  gains 20 over the starting life, takes ten poison or 21 commander damage,
  or casts their commander a fifth time -- each once per game.
- More table easter eggs: first blood, "it's a duel now" when two are left,
  back from 1 life, the monarch changing hands three times, and turn five
  with nobody hurt. Losing 500 or more life at once gets a comment.
- Hold Pass Turn for two seconds for a movie-trailer line (the turn doesn't
  pass). Shake to roll a d20, turned on from the game menu.
- Easter eggs when logging a game: your first game, every 100th, three wins
  in a row, wins on a mulligan to four or by turn four, very long games, an
  opponent's commander you've beaten five times (or that has beaten you five
  times), and a deck's tenth win.
- Easter eggs on Home: decks have birthdays (a year since their first
  game), and pulling down past the top shuffles the cards.
- More easter eggs: a few words typed into Home's search (four more search
  words too), special days, coin-flip streaks, a perfect d100, one classic
  keyboard code, and a small line of hope on Stats under decks that have
  never won. They live under Settings > Look > Easter eggs.

### Enhancements
- Deleting one of your palettes asks for a second tap instead of popping
  up a browser dialog.
- A bit more motion (Animations): Stats numbers count up, the active seat
  glows when the turn passes, the game menu and deck page slide in, Home's
  cards fade in one by one, and a natural 1 wobbles.
- Stats: numbers count up when they're new or have changed -- opening a
  stats tab, changing the time span or pod filter, or coming back after a
  game. Numbers that didn't change stay still.
- Stats charts draw in along with the numbers: bars grow, trend lines trace
  themselves, rings spin into place (only for charts that are new or
  changed).
- Home's buttons fade in once when the app opens, not every time you come
  back to Home.
- Themes retuned so each looks like its name: Brasswork is brass (it was
  lemon yellow), Sunspire is bright sun (it was olive), Rustbelt is rust,
  Glacier is pale ice, Mossveil and Pinegrove are moss and pine (they were
  neon), Boros has its red, Rakdos is crimson, Bloodmoon is blood red,
  Orchid is orchid, Duskwing is dusk rose, Amethyst is violet, and the
  oranges, golds and teals that looked alike are now told apart.
- Guild themes now show both of their colors: the main accent is one color
  and highlights are the other (Izzet blue and red, Gruul red and green,
  Simic green and blue, Azorius/Selesnya/Boros with white as cream), and the
  black guilds (Dimir, Rakdos, Golgari) sit on true black.
- One background everywhere: the page, the title strip, the menu bar and the
  phone's status bar now share the theme's background (pages looked
  different from each other and the menu bar was a fixed brown).
- Settings > Look reorganized to cut the scrolling: display switches first
  (text size is now three buttons), then the theme you're on with all 31 in
  a folded two-column grid, then "Make your own" (palettes and deck art).
  Theme previews now show their light colors when light mode is on.
- Text size has Smaller and Smallest too (Settings > Look).
- Every collapsible section has a small icon by its title (a chart for
  stats, a box for inventory and cases, a trophy for tournaments, a die for
  first player...), so they're quicker to find.
- Tapping the title seven times now shuffles to a random theme and flips
  light/dark (change it back in Look).
- Knockouts at the table get a random goofy line, and "black lotus" and
  "sol ring" have new lines in Home's search.
- Day/Night in a game now changes the app too: day switches to light mode
  and night to dark, until you turn it off or the game is done. Your Look
  setting comes back after.
- At the table, a line about one player (knocked out, first blood, poison,
  the trailer for their turn...) now shows on that player's own tile, over
  their name and turned to face them, so it never covers their buttons.
- Holding Pass Turn for the trailer line takes about a second now, and lines
  shown on a player's tile stay up longer.
- Pulling down: a short pull shuffles Home's cards; the Reload app button
  now takes a much longer pull, and touching anything else fades it away.
- The side menu can be swiped away to the right.
- Settings > Data > Export summary, "For a person", redone for sharing:
  your built decks by bracket with a light record (games, wins, win rate),
  and what you're bringing tonight. Those are on by default; links, all
  loadouts, recent games, decklists, inventory and the wishlist are one tap
  away, and your choices are remembered. A preview shows exactly what gets
  copied.
- Settings > Decks > Loadout: Deck suggestion bias starts folded (it shows
  whether anything was changed), and its sliders have a bigger handle and
  touch area so they're easier to grab.
- Decks: the first sub-tab is now Roster (was All), and Decks has three:
  Roster, Rank, Lists. Lists is split into tabs -- Wishlist, Collection,
  Bracket audit, Composition, Staples, Fix categories -- instead of one long
  scroll; Collection moved in from its own Decks tab.
- Copy buttons all work the same way now: copy, then tap again within a few
  seconds to see the text (wishlist, shopping lists, session recap).

### Bug fixes
- Every theme checked in dark and light (all 31 plus the two seasonal ones,
  six pages each): no hard-to-read text left. Fixed along the way: seat and
  team colors stuck on the first theme's gold, faint seat timers and deck
  tags, the blank Day/Night button showing black text, and white text on
  gold buttons in light mode.
- Decks: the "--" and "never played" labels on deck rows were drawn in the
  border color and hard to read; they are readable now.
- Tapping the title seven times during a holiday look or a deck's birthday
  now actually changes the theme (the holiday one used to win); every fourth
  shuffle goes back to the holiday or birthday theme.
- Shake to roll now actually notices a shake, and iPhones are asked for
  motion access again on the first tap.
- Pulling down on Home really shuffles the six cards into a new order.
- On a deck's birthday the app wears that deck's colors for the day (from
  its art when it has some).
- The "Who took out...?" bar no longer stays on screen over the game log
  form once the game is won or being logged.
- Home: the first row of cards no longer sits indented when there is no
  reminder to show.

### Removed
- The d6 "boxcars" line is gone.
- A few easter egg search words and messages are retired.

## 1.6.0 -- 2026-10-02 -- ManaBox collection and first run
Summary: Import your ManaBox collection (several files at once) to plan sales, purchases and swaps, and have Claude write deck notes in Run Checks. New players get a friendlier first run, and games, wording, loadouts and filters are clearer.

### New features
- Decks > Collection: import your ManaBox collection (CSV export). Each
  binder gets a role -- use for decks, use but flag as valuable, selling
  (still fair game), keep out, or ignore -- guessed from its name, and a
  ManaBox deck binder is ignored.
- Collection > Before you sell: cards in your selling binder that your
  wishlist, a planned deck or a proxy deck still wants, or that several
  decks run.
- Collection > Wishlist: read your Moxfield wishlist and see which cards
  you own.
- Collection > Shopping: for each unbuilt deck, how many cards you already
  own (with a pull list by binder) and a copyable list of what's left to
  buy.
- Collection > Swap ideas: cards you own that fit a deck's colors and
  aren't in it, the ones your other decks already run first; valuable cards
  flagged with their price; Game Changers can be left out (on by default
  when a deck's update note says to bring it down a bracket).
- Collection > Changes: what's new, gone or moved since the previous
  import.
- Find a Card also says which binder a card is in, and finds cards that are
  in no deck. The collection goes into backups and syncs through the Worker.
- Loadouts: tap the star on a saved loadout to keep it handy; kept ones sit
  at the top (home storage, a MagicCon bag). Loadouts left out of stats and
  never played are offered once as ones to keep handy.
- History, Decks, Stats and the Loadout deck picker: when any filter is
  on, a bar says which ones (Deck, Dates, Bracket, Search...) with a Clear
  filters button that puts the page back to its default view. History's
  empty "no games match" message has the same button.
- Run Checks: new step, Write deck notes with Claude (needs the Worker's AI
  key; a few cents a deck). Choose Only decks with notes missing, or All
  decks with a list. It writes the strategy, game plan, bracket reason,
  themes and 1v1 / 2HG fit from the list plus what the other checks found
  (Game Changers, card roles, combos, EDHREC, your record).
- Claude's deck notes never replace yours: blank notes are filled, and with
  All decks, Claude's different wording waits on the deck's Overview under
  "Claude suggests", each with Use this or Keep mine.

### Enhancements
- Wishlist moved to Decks > Lists: the Moxfield link, Read wishlist, and
  which wishlist cards you already own (once a collection is imported). It
  is no longer on the All tab or a Collection tab; the sell check still uses
  it.
- Collection: import several ManaBox CSV files at once (one per binder is
  fine; a file without a binder column is named after the file). New import
  replaces the whole collection and keeps the last one for Changes; Add
  files swaps in fresh exports of just those binders.
- First run: the welcome screen leads with Add my first deck, which opens
  the deck form (Import a backup is the second button), and it stays
  dismissed after a reload.
- A new player gets one plain "Deck box" rather than the built-in Purple
  3D / Blue 3D / Boulders, an empty Decks page shows a "No decks yet" card
  instead of filters for nothing, and typing a commander fills its colors
  from Scryfall when the color buttons are blank.
- Games: Log Game scrolls its form into view. Once a game is logged it is
  over: a "Game logged" card offers Rematch, New game or Home, and Home no
  longer shows Resume for it. Resume on Home goes straight back to the
  table.
- The first time the table opens, a note explains that seats face the
  players around a phone lying flat, with a button for Flat view.
- Wording: counters read Poison / Energy / Exp and Day/Night; tap any of
  them, Storm, or the Stats tiles (vs Expected, Top ELO, Trophies,
  Knockouts) for a definition.
- Stats says "Early days" until 20 games, no longer repeats Games and Win
  rate, and counts read "1 game", not "1 games".
- Decks: "to update" (was "to upgrade") works on any deck, not just
  precons, with an optional note on what to change, such as "bring it down
  to bracket 3". The note shows on the deck's Overview and when you hover
  the badge; Filters > Status > To update lists them all.
- Loadouts: past nights show the three newest, and the rest fold under
  Older nights. Nothing is deleted, and logged games still link to every
  loadout.

## 1.5.0 -- 2026-10-01 -- Rules, Spotlight and deck tabs
Summary: The complete Comprehensive Rules, a prep sheet for every loadout and a Spotlight table layout arrive, with full undo and rewind and 1v1 / multiplayer deck fits. Deck pages and table menus are reorganized into tabs and groups, and life buttons are bigger and button-only.

### New features
- Rules reference: the complete Comprehensive Rules. The Worker fetches
  Wizards' current text, your device parses and keeps it (offline after
  the first load). Search by rule number or words, browse by chapter and
  section, tap a cross-reference to jump. The app glossary stays as the
  other tab.
- Loadout: Prep sheet on each saved loadout (More > Prep sheet). Where and
  who with your record there, what the table plays, three decks to start
  with and why, pitfalls (bracket mismatches, untested decks, illegal
  cards, how you usually lose), goals for the night, a checklist, and the
  plan and mulligan line for every packed deck. Copy puts it in Notes.
- Prep sheet with an AI key on the Worker: Ask Claude adds a read on top --
  matchup plans for the opponents' commanders, play tips, pitfalls, goals
  and a Rule 0 line, from the same data. Kept on the device; it says when
  the loadout has changed since.
- Table view: a Spotlight layout (game menu > Layout) for when the table
  already has a tracker and your phone mirrors it. Your seat is big and
  upright with a large life total; everyone else is a small row with -/+
  (hold for 5), a total you can tap to type what the table shows, their
  poison, the monarch and the commander damage they have dealt you. Tap a
  name for that player's full controls. Each row shows that player's turn
  clock, and passing the turn is a big gold button. Remembered on this
  device.
- The typed life prompt gains "Set to" alongside "Change by".
- Game: Reset game (same pod, everyone back to starting life, counters,
  clocks and the change log cleared) and New game (back to setup) sit near
  the top of the table view's game menu, each confirmed once. Reset game is
  on the game screen too.
- Game: tap any change in the change log to rewind the table to just
  before it.
- Decks: mark a deck better in 1v1, better multiplayer, or either, with a
  note on why (edit form; shown on the deck page and in the summary).
- Filter by 1v1 / multiplayer fit on Decks and Loadout: one Format filter
  now holds both the 1v1 / multiplayer and 2HG fits, with a count beside
  each option. The random picker has a 1v1 format that leans to duel decks,
  and FFA leans to multiplayer ones.
- Settings > Data > Import Deck Notes (folded until you open it): load a
  notes file to fill the 1v1 / multiplayer marks (and 2HG, plan, bracket
  note, strategy) on the decks you already have. Blanks only unless you
  tick overwrite; shows what will change first, then reads back what was
  saved.
- If marks you imported later vanish (sync saved an older copy of your
  decks over them), the Format filter says so.
- Decks: flag a precon "to upgrade" (a tag that appears once precon is on).
  It shows on the deck row, and Filters > Status > Precons to upgrade lists
  them.
- Loadout: a "Carried loose" container with no limit, for decks (and
  accessories) you bring outside a case. Random Loadout never fills it.
- Popups that scroll (deck chronicle, rules, Random Loadout, finish
  logging) have their own jump-to-top and jump-to-bottom buttons, like the
  pages.

### Enhancements
- Decks: a deck's page is in tabs now: Overview (record, stage, links,
  notes and plans), Decklist (the list, EDHREC, what you actually play),
  Results (report card, pod strength, matchups, game history) and Practice
  (goldfish, journal).
- Editing a deck has tabs too: Basics, Plans & notes, Tags. Something
  half-typed on one tab is kept when you switch.
- Table view: the game menu and each seat's menu are sorted into groups
  that fold. Game menu: Undo, Game log and Rules on top, then This game
  (notes, day/night, storm, dice and coin), Display (layout, tap tiles,
  flat view, seat rotation; folded at first) and Finish (log, playtest,
  reset or new game, exit).
- Seat menu groups: Commander (tax, damage), Counters, Table status, Seat
  look. A folded group shows what's inside, and the app remembers which
  ones you leave open.
- Table view: tiles change life only through their buttons now (no more
  tap-anywhere halves), and the buttons are bigger; hold -1 or +1 to go by
  5. Pass turn is a big filled button with the last logged change under it.
- Tap-the-tile life is back as a game-menu setting, Tap tiles for life, off
  by default.
- Table view: life taps on one seat within four seconds count as one event
  whichever way they go (a -5 then a +1 logs as -4; a net 0 logs nothing).
- Table view: opening a menu (game menu, a seat's controls, the change log,
  the typed life prompt) undoes a pinch zoom.
- Game: undo now undoes the whole change -- poison, counters and commander
  damage too, not only life, so undoing a lethal tap brings the seat back.
- Table view: the typed-change button (+/-) sits in the middle of the five
  life buttons, between the losses and the gains.
- Stats: Win Rate Over Time has faint guide lines at 25% and 75% beside the
  50% one.
- Import Deck Notes can also set a deck's stage and note.
- Decks: the deck notes import can set tier (S, A, B or C).
- Rules: each glossary term links to its entry in the full rules, and the
  game screen's Rules button opens the full rules once they are saved.
- Rules download (Worker 2026-10-01b): the text streams as plain text,
  Wizards is asked with browser headers, a failure stays on the panel with
  what each step answered, and a pasted link to the rules .txt is a way
  round a blocked rules page.
- Rules download (Worker 2026-10-01c): when the page carries no link (it is
  rendered in the browser), the Worker tries the dated Friday file names
  newest first and remembers the one that answers.
- Decks: the first sub-tab reads All.
- Backup reminder eases off while sync is on and caught up (a file every
  60 days instead of every 5 changes).

### Bug fixes
- Game: commander damage from partners counts separately in the compact
  view as well as the table view, and a commander-damage kill is credited
  to the right player (it read "?").
- New Game now asks before discarding an unlogged game; the check never
  fired before.
- Home no longer offers to resume a game you cleared with New game.
- Table view: holding a life button no longer selects text.
- Table view: the text fields in the game and seat menus no longer make
  iOS zoom in when tapped.
- Table view: the typed life prompt's number box no longer runs past the
  panel on a phone.
- History: the From / To date filters no longer overlap on a phone; they
  have their own row under Bracket and Venue.

### Removed
- Loadout: the backup reminder no longer shows here; it stays on Home.

### Behind the scenes
- The automated tests check the folded Table section on Game Setup by what
  it holds, so adding a folded section elsewhere no longer trips them.

## 1.4.0 -- 2026-09-30 -- Commander ideas and color coverage
Summary: Get commander ideas for the gaps in your roster and see your color coverage at a glance. Decks takes over from Roster in the menu, and several pages are tidier.

### New features
- Roster > Commander ideas: where the roster is thin (identities with
  nothing, only a plan, or one deck) and the themes you keep building,
  ranked against Scryfall's most-built commanders in those identities
  (EDHREC's order), with the reasons, EDHREC and Scryfall links, and Add
  as idea. Honours the obscurity weight from Settings.
- Commander ideas has two ways to look: Like how I play (your fullest
  identities and favourite themes) and Expand my horizons (thin identities
  and themes you never build).
- Roster > New deck > Fill from Moxfield: paste a deck link and the Worker
  fills the name, commander and colors and brings the list along; the deck
  starts as an idea.
- Roster > Filters > Status > Build queue: only the decks queued to sleeve
  next, in build order.
- Stats > Overview > Color Coverage: all 31 color identities as tiles,
  grouped mono / guilds / shards and wedges / four-color / five-color,
  solid when built, outlined when planned, faint when open; tap one for
  its decks; the chips open the deck. Home's coverage line jumps there.
- Home has the 31-identity grid under a folded Color Coverage section
  (tap the title), below the per-color bars.
- Settings > Data > Export Summary > Decklists: the person-facing summary
  can include every saved list in full, one block per deck with commander,
  bracket and strategy, and each card's roles when categorized.

### Enhancements
- Side menu: Decks (the page formerly called Roster) now sits above
  Loadout. The page header, Home card and first-run tip say Decks too.
- Game Setup: Venue, Format, Pod Size, Bracket, Starting Life and Round
  Timer fold into one "Table" section whose title reads the choices back.
  Round Timer is half width beside the bracket. Quick start leads the page.
- Deck Chronicle > Summary now carries the full decklist with each card's
  roles, plus themes, the bracket read, combos and the EDHREC gaps, so one
  copy is enough to hand a chat for help with the deck.
- Stats: "On the shelf" (built, never played) moved from Overview to the
  Decks tab, above the ELO ratings.
- Playgroup: "What the Log Says" starts folded.

### Bug fixes
- Color pips: black looked different in different places (lavender on
  Home and in ideas, dark purple on the deck page, near-black on roster
  rows). Every pip, bar and color picker now uses one palette.
- New deck > Fill from Moxfield: when the commander lookup fails, the
  colors you already picked are left alone.

### Behind the scenes
- npm run sample:backup writes a sanitized example backup (invented names,
  venues and opponents, blank links, ten times a typical device) for demos
  and load tests.

## 1.3.0 -- 2026-09-29 -- Home-screen fixes and color bars
Summary: The home-screen app no longer gets stuck on a blank page after an update and keeps clear of the notch, and Home draws your colors as bars you can tap. Commander rank now comes straight from EDHREC, and failing tests now stop a broken build from going live.

### New features
- Home: Color Coverage draws a bar per color (built decks, with planned
  ones as a lighter tail); tap a color to see its decks and jump to one.

### Enhancements
- Roster: every deck row shows its bracket badge.
- Home: tap "+N more" under Never Played to show every deck in place; tap
  again to fold.
- Commander rank comes from EDHREC's page with the comparison (deck page
  Refresh, Run Checks, the nightly) when the page lists one, replacing the
  number typed by hand. Decks sharing a typed rank were stale copies. An
  idea with no list gets its deck count and rank too; only the comparison
  waits for a list.
- After an EDHREC refresh, the message says whether EDHREC's page gave a
  commander rank, and what it held when it did not.
- Settings > Data > Worker: Test now names the Worker version that
  answered.
- The wishlist link goes into the analysis pack and the text summary;
  with the Worker, the pack carries the wishlist's current card list too.
- Deck Chronicle: Previous and Next sit at the bottom of the page as well
  as the top.

### Bug fixes
- Home-screen app no longer sits on a blank page after a new build. The
  offline shell fetched the page from its cache first, and after a deploy
  that page asked for script files that no longer existed. The page is
  now fetched fresh whenever there is a connection, the build's files are
  cached on install, and a page whose scripts fail to load clears its
  caches and reloads itself once.
- Home-screen app on a phone: nothing sits under the clock or the home
  indicator any more. The page, the sticky headers, the menu, toasts, the
  live table, sheets and prompts all keep clear of the notch and the bar.
- The page header sticks again while you scroll (it had stopped since the
  sideways-scroll fix).

### Behind the scenes
- A failing automated test now actually stops the deploy. Before, the
  tests reported the failure but still let the build go live.
- Retired an app-size limit check that only mattered on the old Claude
  artifact host.

## 1.2.0 -- 2026-09-27 -- Analysis pack and Run Checks
Summary: Export everything as an analysis pack for a Claude chat, log richer game details that feed new stats, and run every bulk deck lookup from one Run Checks screen. Bracket checks, opening-hand odds, decklist versions and real AI categorizing arrive too.

### New features
- Settings > Data > Export Summary > "For a Claude chat": Download or
  Copy an analysis pack, one JSON file with decks, lists with roles and
  versions, every game with seats, opponents and eliminations, playgroup
  and loadouts, minus the life-change logs, art and the Worker token. It
  starts with a readme that explains the fields, so a chat can analyse
  it straight away.
- With the analysis pack option on (default), the build also adds oracle
  text for every card in a played deck and EDHREC's per-card inclusion and
  synergy for those decks, so card-level questions are answered from data
  rather than memory.
- The game log records who took whom out and how: when a seat dies at the
  table the tracker asks (a commander-damage tap already knows), and the
  log form takes an MVP card and a fun rating (1 to 5). History rows show
  them.
- Stats > Overview > "Form, Speed and the Table": form over the last ten
  games against everything before, average turns per deck and the turn
  your wins land on, the table's killers and victims, MVP cards.
- Bracket check on the deck page: what the list reads (Game Changers,
  mass land denial, extra turns, two-card combos; fast mana and tutors
  as notes) against what the deck declares. Game Setup shows the same
  read for every seated deck as a Rule 0 line before Start. The nightly
  refresh flags when Scryfall's Game Changer list moves.
- Odds of at least one card of each role in the opening hand, by turn 3
  and by turn 6 (hypergeometric), with the land story, under the
  composition.
- Decklist versions: every save keeps the old text, and games record the
  list version they were played on. "By list version" on the deck page
  shows the record per version with what changed; games logged before
  this count for the current list.

### Enhancements
- Settings > Data > Run Checks replaces Refresh All Decks and Moxfield
  Lists: every bulk lookup in one pass, with a tick per step (Moxfield
  pull, commander art and rank, card check, categorize, combos, EDHREC
  comparison) and the redo options under each. The Moxfield pull runs
  first, so the card checks read the fresh lists. Categorize can run with
  Claude instead of the rules when the Worker has a key. Your ticks are
  remembered on the device.
- Categorize with AI is the real thing: with an AI key on the Worker, the
  deck page's Categorize button asks Claude (Opus 5) what each card does
  in this deck, the reply is held to a fixed shape, and any failure falls
  back to the Scryfall rules and says so. "Categorize by rules" stays
  under With Claude.
- The nightly refresh moves up to six full decks a night from the rules
  breakdown to Claude's. Without a key nothing changes; the Worker panel's
  Test says which mode you are in.

### Behind the scenes
- The automated tests now cover the Worker's Claude route and the nightly
  refresh's Claude step against stand-in services.

## 1.1.0 -- 2026-09-25 -- Worker, sync and nightly refresh
Summary: An optional Worker brings sync across devices, Moxfield imports, combos, EDHREC comparisons and a nightly refresh. The app is also friendlier on a phone and as a home-screen app, with many small-screen fixes.

### New features
- Optional Worker (Settings > Data > Worker): with a Cloudflare Worker set
  up, Edit list can import a public Moxfield deck (a deck whose link is on
  Moxfield imports in one tap), Find combos shows the combos in-app,
  Refresh All Decks searches combos for every deck, and Review / Categorize
  can run with AI. The site knows its own Worker URL, so only the token is
  typed, and the setting travels in backups. Test says whether the token
  matches and whether an AI key is set. Without one, nothing changes.
- Sync (Settings > Data > Worker > Sync): with the Worker set up, every
  device with the token keeps the same decks, games and loadouts. The
  newer save wins per store; changes made elsewhere load when you come
  back to the app; the Worker keeps a daily snapshot for 30 days you can
  restore from. The Sync section has on/off, a status line, Sync now and
  Erase cloud copy.
- Nightly refresh (Settings > Data > Worker > Sync): with sync on, every
  night the card check and a price point run for every listed deck, and
  weekly combos, the EDHREC comparison and the commander rank -- against
  the cloud copy, so nothing needs to be open. Home shows a card that
  became not legal overnight.
- Moxfield Lists (Settings > Data, with the Worker): one tap pulls the
  current list for every deck linked to Moxfield. New lists are imported;
  lists that came from Moxfield and were not edited here follow it, with
  the change logged to the deck's journal; hand-edited lists are kept and
  named. Refresh All can search combos and compare with EDHREC as well.
- Deck page: Compare with EDHREC shows which of its Top / High Synergy
  cards the list runs, which it does not, and the themes EDHREC lists.
- Deck page > Where to look: role counts against plain targets, cards you
  run in most decks that could but not this one, EDHREC top cards the list
  lacks, the Game Changer floor against the logged bracket, and the cards
  filed as Other -- the first place to look for a cut.
- Playgroup > What the Log Says: who takes games off you and with what,
  which of your decks have never beaten them, what each venue's table
  actually plays like beside the bracket that was logged, and -- tap who
  is coming -- your decks' records against exactly those people.
- Home-screen app: Home offers Install (Android) or the Add to Home Screen
  route (iPhone) until you do or dismiss it; a new version shows a Reload
  banner instead of taking effect silently; the app icon badge counts a
  due backup and decks that went not legal overnight.
- Settings > Look > Text size (Normal / Large / Larger).

### Enhancements
- Phone-first: Data page explanations sit behind "?"; Home shows one nudge
  at a time with the rest behind "N more"; a deck's Goldfish, Journal and
  Game History start folded with a one-line summary; the roster's color and
  bracket pills fold behind Filters unless one is active.
- Deck page: one EDHREC box (rank, deck count and the top-card comparison,
  one Refresh); the model-backed actions sit together under "With Claude";
  Refresh art lives in the card view. Compare with EDHREC also refreshes
  the deck count, and the section jump links are quieter.
- Settings: Data has one title, What's new shows the latest release with
  older behind a tap, Collection is a section, Open rules is a small link.
- Data page: Backup and Restore is now at the top.
- Proxied decks are worth $0 everywhere a price is used (bag value,
  collection value, Random Loadout budgets, sorting); Scryfall pricing
  records the card value but stores $0 for them, and the deck page shows
  "$0 (proxy)".
- The nightly refresh resolves flavor names (Universes Beyond printings)
  the way the app does and learns them for every device, so its
  "unmatched" count trends to zero.

### Bug fixes
- EDHREC comparison finds the page for a commander written with a build
  label ("(Gates)"), a back face or a misspelling: the slug now comes from
  Scryfall's spelling, kept on the deck.
- A commander EDHREC has no page for is counted as skipped, not as a
  failure, by the nightly refresh and the Worker.
- Nothing scrolls sideways on a phone any more: the deck chronicle's
  header wraps (its top bar keeps the random jump and the counter), and
  the Stats mode pills wrap on narrow screens.
- At the Larger text size, the Game Setup Format buttons, the Quick start
  helper text and the Stats time-range pills wrap instead of squeezing.
- The live table ignores the text size setting, so seat names no longer
  run into each other at Larger text.
- Flat table view: all five life buttons fit each seat on a phone (-5 and
  +/- were cut off at the edges).
- The Worker panel shows the restored settings right after a restore from
  a backup (it kept showing the old, empty ones).
- Moxfield pull skips Moxfield decks that are only a commander (under ten
  cards) and removes the one-card lists an earlier pull stored. Split
  cards written "A/B" or "A // B" count as the same card, so a pull no
  longer logs the spelling as a change.

### Behind the scenes
- The automated tests and browser test suites were kept up to date with
  the Worker features.
- The Worker's code lives with the app and is deployed from it, with the
  site's address built in and its own storage for sync.
- The nightly refresh runs on a schedule from GitHub Actions, using the
  same card-checking code as the app.

## 1.0.0 -- 2026-09-24 -- First self-hosted release
Summary: The app is self-hosted on GitHub Pages with your data kept on your device. It arrives with commander art, Scryfall-backed decklist tools with legality alerts and price history, Refresh All Decks, a smarter backup reminder and simpler screens.

### New features
- Commander art from Scryfall: Fetch missing art for every deck, and Fetch
  art / Refresh art on a deck's page with an artist credit.
- Decklist tools: Check with Scryfall (price, unmatched, legality, color
  identity, Game Changer disagreements), Use as deck price, rules-based
  Categorize, Find combos (opens Commander Spellbook with the list copied),
  EDHREC link and card rank from Scryfall.
- Refresh All Decks runs every lookup for every deck, one at a time, at
  Scryfall's pace; Universes Beyond flavor names, Arena printed names,
  build labels and near-miss spellings all resolve. Card checks and combo
  results are saved on the deck and shown on its page.
- Start over from a file and Erase everything on this device.
- Refresh All Decks and Check with Scryfall flag cards that became not
  legal since the last check, and keep a dated price history per deck;
  the deck page shows the change since the earliest point.
- On a deck's chronicle page, tap the deck picture to see the whole
  card, full size. Tap anywhere to close.
- Show list: tap a card's row to see the card image; tap again to hide it.
- What's new: these release notes are built into the app and shown on the
  Data page.

### Enhancements
- One way to do each thing per screen, one primary button; folded roster
  controls, loadout row menu, grouped decklist buttons.
- Deck-box app icon and favicon, including a sharp one for Safari tabs.
- With no sample data in the build, the welcome screen offers Import a
  backup instead of a button that loads nothing.
- Backup reminder now asks after five saves since the last backup, not
  only after three weeks; "Back up now" on Home saves the file directly.
- Icons are drawn by the app itself instead of borrowed from whatever font
  the phone has, so they look the same in every browser.

### Bug fixes
- No more false "Repaired" toast on every launch.
- No more stray "0" for a $0 price.
- The main column is no longer wider than the phone.
- EDHREC lookup, Categorize and Review say they aren't available here and
  point to the by-hand route, instead of sending a request that fails.
- Fetching art waits and retries when Scryfall asks it to slow down, so
  busy moments are no longer reported as commanders "not found".
- Split cards written "A/B" match Scryfall's names, and cards from a set
  not yet released are reported as unreleased, not as illegal.
- On an iPhone SE, the Game Setup seat row no longer runs past the edge.
- The backup reminder's count of saves survives closing the app.

### Removed
- Removed the model-backed calls (in-app review, in-app categorize, EDHREC
  lookup) that only worked inside the Claude artifact host. Categorize is
  rules-based from Scryfall text; review goes through Copy review prompt.
- Duplicate controls from the screen-by-screen tidy-up: Home's second Start
  a Game, the extra Start Game at the top of Game Setup, the "Random"
  first-player spinner beside High Roll, and the backup copy to clipboard
  (too large for the clipboard).
- Restore Missing from Seed is hidden when the build has no sample data.

### Behind the scenes
- Self-hosted on GitHub Pages: a public, data-free build published from a
  private repository; your data lives in the browser and in backups.
  Cloudflare Pages behind a login was tried first and dropped.
- Every public build is checked to make sure none of the owner's decks,
  games, playgroup or notes are in it, and the public site holds only the
  built files.
- The app is built and published automatically after the automated tests
  run (the publishing setup was fixed on day one so it actually runs).
- The app moved to React 19, and the build's GitHub Actions steps were
  updated to newer versions.
- The source now type-checks clean (npm run typecheck), and CI runs it
  before the harness. No behaviour change: the annotations only say which
  props and arguments were already optional.
- Continuous integration runs the harness and the public build on every
  pull request; Dependabot watches npm and GitHub Actions.
- The build tools moved to Vite 8, which clears every known security
  warning in the project's dependencies; the check that keeps personal
  data out of the public build was updated to match.
- Browser test suites that drive every feature in a real headless browser
  are kept with the app, and the automated tests were hardened (a broken
  check now fails loudly instead of hiding the rest).
`);if(!e.length)return null;let t=``;try{t=localStorage.getItem(`cll2:ui:notesSeen`)||``}catch{}let n=t!==e[0].date+` `+e[0].version;return(0,Q.jsx)(y,{ck:`data2:whatsnew`,title:`What's new`,summary:(0,Q.jsx)(`span`,{style:{color:n?K.goldBr:K.dim},children:(n?`new: `:``)+`v`+e[0].version+(e[0].title?` - `+e[0].title:``)}),children:(0,Q.jsx)(Pe,{log:e})})})(),!C&&(0,Q.jsxs)(y,{ck:`data2:more`,title:`Maintenance`,summary:`repair log, cleanup, danger zone`,children:[(function(){let e=[];try{let t=G(`cll2:repairLog`);Array.isArray(t)&&(e=t)}catch{}return(0,Q.jsxs)(`div`,{"data-repair-log":`1`,style:{marginBottom:18},children:[(0,Q.jsx)(`div`,{style:Ht,children:`REPAIR LOG`+(e.length?` (`+e.length+`)`:``)}),!e.length&&(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,padding:`2px 0`},children:`Nothing repaired. Hydration has not had to restore anything on this device.`}),!!e.length&&(0,Q.jsx)(`div`,{style:{display:`grid`,gap:7},children:e.map(function(e,t){let n=new Date(e.at||0),r=isNaN(n.getTime())?`unknown`:n.toLocaleDateString()+` `+n.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});return(0,Q.jsxs)(`div`,{style:{border:`1px solid `+K.br,borderRadius:H(6),padding:`7px 9px`,background:K.panel2},children:[(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,letterSpacing:.5},children:r}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.good,marginTop:3},children:(e.items||[]).join(`, `)||`(no detail)`})]},t)})})]})})(),(function(){let t={};(e||[]).forEach(function(e){e.name&&(t[e.name.trim().toLowerCase()]=e.id)});let r=0,i={},a={};if((n||[]).forEach(function(e){(e.opponents||[]).forEach(function(n){let o=(n&&n.name||``).trim().toLowerCase();if(!o)return;let s=t[o];s&&(!n.deckId||n.deckId===s)&&(r++,i[e.id]=1,a[n.name]=1)})}),!r)return null;let o=Object.keys(a);return(0,Q.jsxs)(`div`,{"data-playgroup-cleanup":`1`,style:{marginBottom:18},children:[(0,Q.jsx)(`div`,{style:Ht,children:`PLAYGROUP CLEANUP`}),(0,Q.jsxs)(`div`,{style:{fontFamily:I,fontSize:11,color:K.dim,marginBottom:8,lineHeight:1.5},children:[r,` opponent seat`,r===1?``:`s`,` across `,Object.keys(i).length,` game`,Object.keys(i).length===1?``:`s`,` are named after a deck rather than a person (`,o.slice(0,4).join(`, `),o.length>4?` +`+(o.length-4)+` more`:``,`). These show up as phantom players in Playgroup and name suggestions.`]}),(0,Q.jsx)(`div`,{style:{fontFamily:I,fontSize:11,color:K.faint,marginBottom:10,lineHeight:1.5},children:`Clearing the name keeps the game, the result, and which deck sat in that seat -- only the person-name is removed.`}),(0,Q.jsxs)(U,{onClick:function(){let e=(n||[]).slice(),r=0;p((n||[]).map(function(e){let n=!1,i=(e.opponents||[]).map(function(e){let i=(e&&e.name||``).trim().toLowerCase(),a=i?t[i]:null;return a&&(!e.deckId||e.deckId===a)?(n=!0,r++,Object.assign({},e,{name:``,deckId:e.deckId||a})):e});return n?Object.assign({},e,{opponents:i}):e})),S(`Cleared `+r+` deck-named seat`+(r===1?``:`s`)+`.`,function(){p(e)})},children:[`Clear `,r,` deck-named seat`,r===1?``:`s`]})]})})(),(0,Q.jsxs)(`div`,{"data-danger-zone":`1`,children:[(0,Q.jsx)(`div`,{style:Object.assign({},Ht,{color:K.bad}),children:`DANGER ZONE`}),(0,Q.jsx)(U,{danger:!0,onClick:function(){let e=(n||[]).slice(),t=Wt(`games`,`All `+q(e.length,`game`),{games:e});p([],{allowShrink:!0}),S(`History cleared (`+e.length+` game`+(e.length===1?``:`s`)+`).`,function(){p(e,{allowShrink:!0}),Ut(t)})},children:`Clear All Game History`}),(0,Q.jsxs)(`div`,{style:{marginTop:12},children:[wt?(0,Q.jsxs)(`div`,{style:it.rowCentre(),children:[(0,Q.jsx)(`span`,{style:{fontFamily:I,fontSize:11,color:K.bad},children:`Erase every deck, game and setting on this device?`}),(0,Q.jsx)(U,{small:!0,danger:!0,onClick:Ot,children:`Yes, erase`}),(0,Q.jsx)(U,{small:!0,onClick:function(){Tt(!1)},children:`Cancel`})]}):(0,Q.jsx)(U,{danger:!0,onClick:function(){Tt(!0)},children:`Erase Everything on This Device`}),(0,Q.jsx)(X,{style:{fontFamily:I,fontSize:11,color:K.faint,marginTop:6,lineHeight:1.5},children:`The app restarts empty, at the welcome screen, where Import a backup loads a file.`})]}),vn()&&(0,Q.jsxs)(`div`,{style:{marginTop:14,paddingTop:12,borderTop:`1px solid `+K.divd},children:[(0,Q.jsx)(X,{style:{fontFamily:I,fontSize:11,color:K.faint,marginBottom:7,lineHeight:1.5},children:`Crashes the app on purpose so the error screen and its Copy error report button can be tested. Your data is untouched -- reload to come back.`}),(0,Q.jsx)(U,{small:!0,onClick:function(){tt(!0)},children:`Test the crash screen`})]})]})]})]})}export{Hn as BackupHandoff,In as DECK_NOTE_IMPORT_FIELDS,er as DT_GAME_STORES,nr as DataTab,qn as DeckNotesImport,Jn as ExportSummary,Yn as LinkDevice,Un as PACK_README,Cn as ST_LABELS,En as ST_PHONE_BYTES,An as StorageKeep,kn as StorageUse,tr as SyncPanel,Fn as TrashPanel,Xn as WorkerPanel,_n as aiKeyLine,Kn as analysisPack,Rn as applyDeckNotes,hn as backupProblem,gn as backupSummary,Wn as compactCard,Qn as dtGoneIds,Zn as dtMissingGames,$n as dtTrashGameIds,Gn as edhrecRates,Bn as fieldMark,vn as isDebugView,Vn as lsndRestore,Ln as notesStillThere,bn as pairCodeShow,xn as pairLink,zn as reattachArt,Dn as stDeckFields,Tn as stDeckPics,wn as stLabel,$ as stMB,On as stProbeFree,Sn as syncDisable,yn as syncEnable,Pn as trashAgo,jn as trashDaysLeft,Mn as trashMerge,Nn as trashRestore};