import{$ as e,$a as t,$i as n,$r as r,A as i,Ai as a,An as o,At as s,Ba as c,Br as l,Bt as u,Di as d,Dn as f,Dt as p,Fn as m,Ft as h,G as g,Gn as _,Gr as v,Hr as y,Ii as b,Jn as x,Jt as S,Ki as C,Kn as w,Kt as T,La as E,Lr as D,Lt as O,M as k,Ma as A,Mn as j,Nn as M,Nt as ee,Oi as N,Ot as te,P,Pn as ne,Qr as re,Ri as ie,Rn as ae,Rr as oe,Rt as F,Si as se,Ta as I,Tt as L,Va as ce,W as le,Wa as R,Xa as ue,Xn as de,Xt as z,Y as fe,Yt as pe,_i as me,_n as he,ai as ge,at as _e,b as ve,bi as ye,ct as be,d as B,di as V,dn as xe,en as Se,f as Ce,ft as we,g as Te,gi as H,gn as Ee,hi as De,hr as U,ht as Oe,ia as ke,ii as Ae,ji as W,k as je,ki as Me,kr as Ne,l as Pe,li as Fe,m as Ie,mi as Le,mt as Re,nn as ze,no as Be,nt as Ve,o as He,oi as G,p as Ue,pt as We,qn as Ge,qr as Ke,ra as qe,ro as Je,si as K,t as Ye,ti as Xe,tn as Ze,u as Qe,ui as $e,ut as et,vi as tt,vn as nt,vt as rt,wi as q,x as it,xi as at,y as ot,yi as st,yn as ct,yr as lt,zn as ut}from"./index-DtuXmcn0.js";import{$ as dt,$n as ft,An as pt,Bn as mt,Cr as ht,Ct as gt,D as _t,Dn as vt,Dt as yt,H as bt,Jt as xt,K as St,Kn as Ct,M as wt,Mt as Tt,N as Et,Nn as Dt,O as Ot,Ot as kt,P as At,Pr as J,Q as jt,Rn as Mt,St as Nt,Tn as Pt,Xn as Ft,Yn as It,a as Lt,bt as Rt,ct as zt,dt as Bt,en as Vt,et as Ht,ir as Ut,jn as Wt,jt as Gt,lr as Kt,nn as qt,on as Jt,or as Yt,p as Y,qt as Xt,rn as Zt,st as Qt,ur as $t,wn as en,wt as tn,xn as nn,zn as rn}from"./shared-48vtcsrT.js";import"./CHANGELOG-BkgI516G.js";var X=Je(Be(),1),Z=t();function an(e){if(!e||typeof e!=`object`||Array.isArray(e))return`expected a backup object.`;for(var t=[`decks`,`games`,`accs`,`rankerRuns`,`pipeline`,`gauntlets`,`tourneys`,`builds`],n=0;n<t.length;n++){var r=t[n];if(e[r]!==void 0&&e[r]!==null&&!Array.isArray(e[r]))return`'`+r+`' is not a list.`}for(var i=[`loads`,`inv`,`playgroup`,`settings`],a=0;a<i.length;a++){var o=i[a];if(e[o]!==void 0&&e[o]!==null&&(typeof e[o]!=`object`||Array.isArray(e[o])))return`'`+o+`' is not an object.`}if(e.decks){for(var s=0;s<e.decks.length;s++){var c=e.decks[s];if(!c||typeof c!=`object`||typeof c.id!=`string`||!c.id||typeof c.name!=`string`)return`deck #`+(s+1)+` is malformed (needs id and name).`}for(var l={},u=0;u<e.decks.length;u++){if(l[e.decks[u].id])return`duplicate deck id '`+e.decks[u].id+`'.`;l[e.decks[u].id]=1}}if(e.games){for(var d=0;d<e.games.length;d++){var f=e.games[d];if(!f||typeof f!=`object`||typeof f.id!=`string`||!f.id)return`game #`+(d+1)+` is malformed (needs id).`}for(var p={},m=0;m<e.games.length;m++){if(p[e.games[m].id])return`duplicate game id '`+e.games[m].id+`'.`;p[e.games[m].id]=1}}return null}function on(e){var t=e&&e.decks||[],n=e&&e.decklists&&typeof e.decklists==`object`?Object.keys(e.decklists).length:0,r=e&&e.lastBackup?new Date(e.lastBackup):null;return{decks:t.length,games:(e&&e.games||[]).length,decklists:n,art:t.filter(function(e){return e&&(e.art||e.artUrl)}).length,saved:r&&!isNaN(r.getTime())?r.toISOString().slice(0,10):``}}function sn(){try{return/[?&]debug\b/.test(String(window.location.search||``))}catch{return!1}}var cn=10;function ln(e,t,n){var r=e&&e.text||``;return String(t||``).trim()?V(t).total<10?r.trim()&&e.moxAt&&V(r).total<10?`remove`:`small`:r.trim()?Rt(r,t).changed?e.moxAt&&(Number(e.updatedAt)||0)<=Number(e.moxAt)||n&&n.replaceEdited?`replace`:`kept`:`same`:`import`:`empty`}function un(){var e=ye();e.on=!0;var t=Date.now();return Object.keys(F).forEach(function(n){!D(G(n))&&!e.stamps[n]&&(e.stamps[n]=t,e.pending[n]=!0)}),x(e),he(!1),Ge()}function dn(e){return e=Fe(e),e.length===8?e.slice(0,4)+`-`+e.slice(4):e}function fn(e,t){var n=``;try{n=location.origin+location.pathname}catch{}return n+`#pair=`+Fe(e)+(t&&t!==`https://cll-worker.grantkphillips4313.workers.dev`?`&w=`+encodeURIComponent(t):``)}function pn(){var e=ye();e.on=!1,e.pending={},x(e),Object.keys(M).forEach(function(e){clearTimeout(M[e])}),nt({})}function mn(){var e=(0,X.useState)(o.state);(0,X.useEffect)(function(){var t=function(){e[1](o.state)};return window.addEventListener(`cll2:persist`,t),me(!1).then(t),function(){window.removeEventListener(`cll2:persist`,t)}},[]);var t=e[0];return t===`unknown`||t===`unsupported`?(0,Z.jsx)(`div`,{"data-storage-keep":t,hidden:!0}):(0,Z.jsxs)(`div`,{"data-storage-keep":t,style:{fontFamily:i,fontSize:11,color:t===`kept`?u.good:u.warn,margin:`8px 0 2px`,lineHeight:1.5},children:[t===`kept`?`Storage: kept for good on this phone (the browser won't clear it to free space).`:`Storage: the browser may clear it if the phone runs low on space. Back up often, or add the app to your home screen.`,t!==`kept`&&(0,Z.jsx)(`button`,{"data-storage-keep-ask":`1`,onClick:function(){me(!0)},style:{marginLeft:8,padding:`6px 12px`,minHeight:36,borderRadius:R(6),background:`transparent`,border:`1px solid `+u.br,color:u.tx2,fontFamily:i,fontSize:11,cursor:`pointer`},children:`Ask to keep it`})]})}function hn(e,t){return Math.max(0,Math.ceil(((Number(e.at)||0)+30*S-(t||Date.now()))/S))}function Q(e,t){var n={};return(e||[]).forEach(function(e){e&&e.id&&(n[e.id]=1)}),(e||[]).concat((t||[]).filter(function(e){return e&&!n[e.id]}))}function gn(e){var t=e.data||{},n=!0,r=function(e){return function(t){K(e,t,{allowShrink:!0})}},i=Object.assign({games:G(`cll2:games`)||[],decks:G(`cll2:decks`)||[],loads:G(`cll2:loadouts`)||{},accs:G(`cll2:accessories`)||[],inv:G(`cll2:inventory`)||{},settings:G(`cll2:settings`)||{},saveGames:r(k),saveDecks:r(it),saveLoads:r(fe),saveAccs:r(Ye),saveInv:r(le),saveSettings:r(s)},m||{});switch(e.kind){case`game`:case`games`:i.saveGames(Q(i.games,t.games),{allowShrink:!0});break;case`deck`:i.saveDecks(Q(i.decks,[t.deck])),t.games&&t.games.length&&i.saveGames(Q(i.games,t.games));break;case`loadout`:var a=Object.assign({},i.loads||{});a[t.id]||(a[t.id]=t.load),i.saveLoads(a);break;case`accessory`:i.saveAccs(Q(i.accs,[t.acc]));break;case`box`:i.saveInv(Object.assign({},i.inv||{},{boxes:Q(lt(i.inv||{}),[t.box])}));break;case`tournament`:K(T,Q(G(`cll2:tourneys`)||[],[t.t]));break;case`season`:Ft(Q(It(),[t.q]));break;case`decklist`:var o=U(G(`cll2:decklists`)||{});o[t.deckId]||(o=Object.assign({},o),o[t.deckId]=t.entry,K(ot,o));break;case`palette`:var c=i.settings||{};i.saveSettings(Object.assign({},c,{customThemes:Q(c.customThemes||[],[t.ct])}));break;case`plane`:var l=Xt();xt({mode:l.mode,cards:Q(l.cards,[t.card])});break;default:n=!1}return n&&$t(e.id),n}function _n(e,t){var n=Math.floor(((t||Date.now())-(Number(e)||0))/S);return n<=0?`today`:n===1?`yesterday`:n+` days ago`}function vn({pop:e}){ht(pe),(0,X.useEffect)(function(){at()},[]);var t=(0,X.useState)(``),n=se(),r={padding:`4px 10px`,borderRadius:R(6),background:`transparent`,border:`1px solid `+u.br,color:u.tx2,fontFamily:i,fontSize:11,cursor:`pointer`},a=function(t){gn(t)?(_(`confirm`),e&&e(`Restored: `+t.label+`.`)):e&&e(`Couldn't restore that one.`)},o=function(n){if(t[0]!==n.id){t[1](n.id);return}t[1](``),$t(n.id),e&&e(`Deleted for good.`)};return(0,Z.jsxs)(`div`,{"data-trash":n.length,children:[(0,Z.jsxs)(`div`,{style:{fontFamily:i,fontSize:11,color:u.muted,lineHeight:1.5,marginBottom:8},children:[`What you delete waits here for `,30,` days, then goes for good. Restore puts it back where it was. Kept on this phone only.`]}),n.length===0&&(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.faint,padding:`6px 0`},children:`Trash is empty.`}),n.map(function(e){var n=hn(e),s=e.data&&e.data.games&&e.kind!==`game`?e.data.games.length:0;return(0,Z.jsxs)(`div`,{"data-trash-item":e.kind,style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`,padding:`7px 0`,borderTop:`1px solid `+u.divd},children:[(0,Z.jsxs)(`div`,{style:{flex:1,minWidth:150},children:[(0,Z.jsxs)(`div`,{style:{fontFamily:je,fontSize:13,color:u.tx,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[(0,Z.jsx)(`span`,{style:{fontFamily:i,fontSize:11,color:u.dim,letterSpacing:1,textTransform:`uppercase`,marginRight:6},children:z[e.kind]||e.kind}),e.label]}),(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:n<=3?u.warn:u.faint},children:`Deleted `+_n(e.at)+(s?` with `+A(s,`game`):``)+` - `+(n<=1?`goes for good within a day`:`goes for good in `+n+` days`)})]}),(0,Z.jsx)(`button`,{"data-trash-restore":e.id,onClick:function(){a(e)},style:Object.assign({},r,{color:u.goldBr,borderColor:u.gold+`88`}),children:`Restore`}),(0,Z.jsx)(`button`,{"data-trash-forget":e.id,onClick:function(){o(e)},style:Object.assign({},r,{color:u.bad,borderColor:u.bad+`66`}),children:t[0]===e.id?`Tap again`:`Delete`})]},e.id)}),n.length>0&&(0,Z.jsx)(`div`,{style:{marginTop:8,display:`flex`,justifyContent:`flex-end`},children:(0,Z.jsx)(`button`,{"data-trash-empty":`1`,onClick:function(){if(t[0]!==`__all`){t[1](`__all`);return}t[1](``),q([]),e&&e(`Trash emptied.`)},style:Object.assign({},r,{color:u.bad,borderColor:u.bad+`66`}),children:t[0]===`__all`?`Tap again to empty`:`Empty trash`})})]})}var yn=`cll2:cache:salt`,$=null;function bn(){if($)return $;var e=null;try{e=G(yn)}catch{}return e&&e.cards&&Date.now()-(e.at||0)<6048e5?($=Promise.resolve(e.cards),$):($=a(`edhrec-salt`).then(function(e){var t={};if((e&&e.cards||[]).forEach(function(e){e&&e.n&&e.s&&(t[l(e.n)]=Number(e.s)||0)}),Object.keys(t).length)try{K(yn,{at:Date.now(),cards:t})}catch{}return t},function(){return $=null,{}}),$)}function xn(e,t){var n=[],r={};return V(e||``).cards.forEach(function(e){var i=l(e.name),a=t&&t[i];a&&!r[i]&&(r[i]=1,n.push({n:e.name,s:a}))}),n.sort(function(e,t){return t.s-e.s}).slice(0,8)}var Sn=[`tier`,`updateNote`,`fmtPod`,`podWhy`,`fmt2hg`,`plan2hg`,`plan`,`bracketWhy`,`strategy`,`stage`,`note`];function Cn(e,t){var n={};(e||[]).forEach(function(e){n[e.id]=e});var r=0;return(t||[]).forEach(function(e){var t=n[e.id];t&&e.fields.every(function(n){return JSON.stringify(t[n])===JSON.stringify(e.v[n])})&&r++}),r}function wn(e,t,n){n||={};var r=!!n.overwrite,i=t&&Array.isArray(t.decks)?t.decks:[],a={},o={};(e||[]).forEach(function(e){a[e.id]=e;var t=String(e.name||``).trim().toLowerCase();t&&(o[t]=o[t]||[]).push(e)});var s={},c=[],l=[];return i.forEach(function(e){if(e&&typeof e==`object`){var t=e.id&&a[e.id],n=String(e.name||``).trim().toLowerCase();if(t&&e.name&&String(t.name||``).trim().toLowerCase()!==n){l.push({id:e.id,name:e.name,why:`id is a different deck here (`+t.name+`)`});return}if(!t&&n&&o[n]&&o[n].length===1&&(t=o[n][0]),!t){l.push({id:e.id||``,name:e.name||``,why:`no such deck here`});return}var i=[],u=Object.assign({},s[t.id]||t);Sn.forEach(function(t){if(e[t]!==void 0&&e[t]!==null){var n=typeof e[t]==`string`?e[t].trim():e[t];if(!(t===`tier`&&(n=String(n).toUpperCase(),[`S`,`A`,`B`,`C`].indexOf(n)<0))&&!(t===`fmtPod`&&[`duel`,`either`,`multi`].indexOf(n)<0)&&!(t===`fmt2hg`&&[`good`,`neutral`,`poor`].indexOf(n)<0)&&!(t===`stage`&&[`idea`,`decklist`,`cart`,`ordered`,`built`].indexOf(n)<0)){var a=u[t];(r||a==null||a===``||t===`fmtPod`&&a===`either`||t===`fmt2hg`&&a===`neutral`)&&JSON.stringify(a)!==JSON.stringify(n)&&(u[t]=n,i.push(t),t===`stage`&&(n===`built`?(u.color===`Build Idea`||u.color===`Proxy Order Cart`)&&(u.color=``):u.color=n===`cart`||n===`ordered`?ee:h))}}}),i.length&&(s[t.id]=u,c.push({id:t.id,name:t.name,fields:i}))}}),{decks:(e||[]).map(function(e){return s[e.id]?Ut(e,s[e.id]):e}),changed:c,skipped:l}}function Tn(e,t){var n={};return(t||[]).forEach(function(e){n[e.id]=e}),(H(`SEED_DECKS`)||[]).forEach(function(e){n[e.id]||(n[e.id]=e)}),(e||[]).map(function(e){var t=n[e.id];if(!t)return e;var r=Object.assign({},e);return!r.art&&t.art&&(r.art=t.art),r})}var En=`cll2:ui:checks`;function Dn(e){for(var t=JSON.stringify(e===void 0?null:e),n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return t.length+`:`+n}function On(e){return Promise.all(g.map(function(t){var n=e&&e[t[0]];return Jt(t[0],n&&n.data?n:null)})).catch(function(){})}function kn({getText:e,pop:t,onClose:n}){var r=(0,X.useState)(``),a=r[0],o=r[1],s=(0,X.useState)(``),c=s[0],l=s[1],d=(0,X.useRef)(null);(0,X.useEffect)(function(){var t=``;try{t=e()||``}catch{t=``}o(t)},[]);var f=Math.round((a||``).length/1024);return(0,Z.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:1300,background:ce(`#060504`),display:`flex`,flexDirection:`column`,padding:`calc(14px + var(--sat)) 14px calc(14px + var(--sab))`,boxSizing:`border-box`},children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:10},children:[(0,Z.jsx)(`button`,{onClick:n,style:{background:`transparent`,border:`1px solid `+u.br,borderRadius:R(6),color:u.muted,cursor:`pointer`,fontFamily:i,fontSize:12,padding:`4px 14px`},children:`Back`}),(0,Z.jsxs)(`div`,{style:{fontFamily:i,fontSize:11,letterSpacing:3,color:u.gold},children:[`BACKUP (`,f,`KB)`]})]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:8,flexWrap:`wrap`},children:[(0,Z.jsx)(B,{gold:!0,small:!0,onClick:function(){if(!a){l(`nothing to share`);return}try{navigator&&navigator.share?(navigator.share({title:`CLL backup`,text:a}).then(function(){l(`shared -- pick Save to Files`)},function(e){var t=e&&(e.name||e.message)||`rejected`;l(t===`AbortError`?`share cancelled`:`share refused (`+t+`) -- select the text below instead`)}),l(`opening share sheet...`)):l(`no share API here -- select the text below`)}catch{l(`share threw -- select the text below`)}},children:`Share`}),(0,Z.jsx)(B,{small:!0,onClick:function(){var e=d.current;if(e)try{e.focus(),e.setSelectionRange(0,(a||``).length),l(`selected -- long-press, Share, Save to Files`)}catch{l(`could not select`)}},children:`Select All`})]}),(0,Z.jsxs)(`div`,{style:{fontFamily:i,fontSize:11,color:u.faint,lineHeight:1.5,marginBottom:8},children:[`Share opens the iOS sheet -- choose Save to Files. If that is refused, tap Select All, then long-press the text, Share, Save to Files.`,c?` -- `+c:``]}),(0,Z.jsx)(`textarea`,{"aria-label":`Exported text`,ref:d,readOnly:!0,value:a,style:{flex:1,width:`100%`,boxSizing:`border-box`,background:u.bg,border:`1px solid `+u.br,borderRadius:R(6),color:u.tx2,fontFamily:i,fontSize:11,lineHeight:1.35,padding:8,resize:`none`}})]})}function An(e){return!(!e||e.art||e.artUrl||!String(e.commander||``).trim())}function jn(e){return[`strategy`,`plan`,`bracketWhy`,`themes`].some(function(t){return vt(e,t)})||vt(e,`fmtPod`)&&vt(e,`podWhy`)}function Mn(e,t,n){n||={};var r=function(e){return!n.steps||n.steps[e]!==!1},i=!!String(e&&e.commander||``).trim(),a=!!(t&&String(t.text||``).trim()),o=!!(e&&e.priceFrom&&e.priceFrom.via===`scryfall`),s=i&&r(`commander`),c=a&&r(`cards`),l=a&&r(`categorize`)&&(!!n.recategorize||!(t&&t.comp));return{commander:s,art:s&&An(e),cards:c||l,check:c,price:c&&(!!n.replacePrices||!(e&&e.price)||o),categorize:l,combos:a&&r(`combos`)&&!!n.worker&&(!!n.recombos||!(e&&e.combos)),edhrec:i&&a&&r(`edhrec`)&&!!n.worker&&(!!n.reedhrec||!(e&&e.edhrecTop)),edhrecRank:i&&!a&&r(`edhrec`)&&!!n.worker&&(!!n.reedhrec||!(e&&e.edhrecRankFrom===`edhrec`&&e.edhrecAt&&Date.now()-Date.parse(e.edhrecAt)<6048e5))}}var Nn=[`Commander Loadout Ledger analysis pack. One player's Commander (EDH) collection and game log.`,`decks: every deck. bracket 1-5 is the declared power bracket (WotC Commander Brackets). tags may include precon/proxy. colorId is WUBRG identity. cardCheck.sig is what the list reads (gc = Game Changers, mld = mass land denial, turns = extra turns, fast = fast mana). combos.inList counts two-card infinite combos (Commander Spellbook). edhrecTop compares the list to EDHREC's top cards for the commander.`,`decklists: keyed by deck id. text is the list, one card per line; when the list has been categorized each line ends with the card's roles in brackets: l land, r ramp, d draw, t targeted removal, m mass removal (wipes), h threat, o other (a card can have several). comp holds the counts per role and via says whether rules or Claude assigned them. versions are earlier lists (newest first) with what changed going into the next one.`,`games: one row per game the player logged, newest first. placement is the player's finish (1st wins). playerCount seats. turnOrder is the player's seat (1 = went first). bracketPlayed is the table's bracket. opponents carry name, commander, bracket, won, deckId when they borrowed one of the player's decks. eliminations say who took whom out and how. eloDelta is not stored; ELO is replayed from placements. excludeFromOwnStats marks practice, self-play and tournament rows.`,`cards (when built with the option on): oracle text, type line, mana value, color identity, price and Game Changer flag for every card in a deck that has been played, keyed by name. decks[].edhrec (same option): EDHREC's numbers for the commander -- decks is how many decks EDHREC has for it; inList gives each card in this list its inclusion rate (pct of those decks running it) and synergy (how much more often it appears in this commander's decks than in decks of the same colors); notInList is the most-run cards this list lacks.`,`playgroup: people and venues the player has recorded. loadouts: sets of decks packed for an outing. wishlist: the player's Moxfield wishlist link and, when the pack was built with the Worker, its current card list.`,`Ask anything: which decks win, seat effects, what to cut, which opponents beat which commanders, what to bring next time.`].join(`
`);function Pn(e){var t={type:ke(e),text:qe(e),mv:e&&e.cmc,ci:(e&&e.color_identity||[]).join(``)||`C`,usd:ft(e)};return e&&e.game_changer===!0&&(t.gc=!0),t}function Fn(e,t){var n={};(e||[]).forEach(function(e){n[l(e.name)]=1});var r=Number(t&&t.num_decks)||0,i={},a={},o=[];return(t&&t.cardlists||[]).forEach(function(e){(e.cards||[]).forEach(function(e){var t=l(e.name);if(t&&!i[t]){i[t]=1;var s=Number(e.potential)||r,c=Number(e.inclusion),u={};s>0&&c>=0&&(u.pct=Math.min(100,Math.round(c/s*100))),typeof e.synergy==`number`&&(u.syn=Math.round(e.synergy*100)/100),n[t]?a[e.name]=u:o.push(Object.assign({name:e.name},u))}})}),o.sort(function(e,t){return(t.pct||0)-(e.pct||0)}),{decks:r,inList:a,notInList:o.slice(0,30)}}function In(e){e||={};var t=(e.decks||[]).map(function(t){var n={};if(`id.name.commander.commander2.cmdrName.bracket.tags.themes.customTags.colorId.strategy.tier.price.priceFrom.note.plan.plan2hg.fmt2hg.fmtPod.podWhy.bracketWhy.stage.retired.created.fromBuild.edhrecRank.edhrecDecks.edhrecCardRank.combos.edhrecTop.cardCheck.journal.link`.split(`.`).forEach(function(e){t[e]!==void 0&&t[e]!==``&&t[e]!==null&&(n[e]=t[e])}),n.cardCheck){var r=n.cardCheck;n.cardCheck={usd:r.usd,cards:r.cards,missing:r.missing,notLegal:r.notLegal,sig:r.sig,at:r.at}}return n.combos&&={inList:n.combos.inList,almost:n.combos.almost,included:(n.combos.included||[]).map(function(e){return{cards:e.cards,makes:e.makes}})},n.journal&&=(n.journal||[]).slice(0,30).map(function(e){return{t:e.t,text:e.text}}),e.edhrec&&e.edhrec[t.id]&&(n.edhrec=e.edhrec[t.id]),n}),n={};Object.keys(e.decklists||{}).forEach(function(t){var r=e.decklists[t];if(r&&r.text){var i=r.comp?Object.assign({},r.comp):void 0,a={};i&&(Object.keys(i.by||{}).forEach(function(e){(i.by[e]||[]).forEach(function(t){var n=l(t);a[n]=(a[n]||``)+(rt[e]||``)})}),delete i.fp,delete i.by);var o=Object.keys(a).length?String(r.text).split(`
`).map(function(e){var t=e.match(/^(\d+)\s*[xX]?\s+(.+)$/);if(!t)return e;var n=a[l(t[2].replace(/\s*\([A-Za-z0-9]{2,6}\)\s*[\w-]*\s*$/,``).trim())];return n?e+` [`+n+`]`:e}).join(`
`):r.text,s=Zt(r);n[t]={text:o,updatedAt:r.updatedAt,comp:i,versions:s.length>1?s.map(function(e,t){var n=s[t+1],r=n?Rt(n.text,e.text):null;return{fp:e.fp,at:e.at,current:e.current,cards:V(e.text).total,changed:r&&r.changed?r.summary:void 0}}):void 0}}});var r=(e.games||[]).map(function(e){var t=Object.assign({},e);return delete t.changeLog,delete t.loadoutId,delete t.unk,t.opponents&&=t.opponents.map(function(e){var t=Object.assign({},e);return delete t.id,delete t.trackNotes,t}),t}),i=Object.keys(e.loads||{}).map(function(t){var n=e.loads[t];return{name:n.name,savedAt:n.savedAt,decks:n.deckIds||n.decks,notes:n.notes}}),a={readme:Nn,generatedAt:new Date(e.now||Date.now()).toISOString(),player:e.settings&&e.settings.playerName||`You`,decks:t,decklists:n,games:r,playgroup:e.playgroup||{},loadouts:i};return e.cards&&Object.keys(e.cards).length&&(a.cards=e.cards),e.wishlist&&e.wishlist.url&&(a.wishlist={url:e.wishlist.url},e.wishlist.text&&(a.wishlist.text=e.wishlist.text,a.wishlist.cards=V(e.wishlist.text).total)),a}function Ln({decks:e,saveDecks:t,pop:n}){var r=(0,X.useState)(``),a=r[0],o=r[1],s=(0,X.useState)(!1),l=s[0],d=s[1],f=null,p=``;if(a.trim())try{var m=JSON.parse(a);f=Array.isArray(m)?{decks:m}:m,(!f||!Array.isArray(f.decks))&&(p=`expected {"decks":[...]}`)}catch{p=`not valid JSON`}var h=f&&!p?wn(e,f,{overwrite:l}):null,g=function(e){var t=e.target.files&&e.target.files[0];if(t){var n=new FileReader;n.onload=function(){o(String(n.result||``))},n.readAsText(t);try{e.target.value=``}catch{}}},_=(0,X.useState)(pt()),v=_[0],y=_[1];return(0,Z.jsxs)(`div`,{"data-notes-import":`1`,children:[(0,Z.jsx)(Y,{children:`Fill in notes on decks you already have from a file: 1v1 or multiplayer and why, 2HG fit and plan, game plan, bracket note, strategy, stage and note. Decks are matched by id, or by exact name. Only empty fields are filled unless you tick overwrite. Nothing is added or removed.`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,flexWrap:`wrap`,marginBottom:6},children:[(0,Z.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontFamily:i,fontSize:11,color:u.tx2,border:`1px solid `+u.br,borderRadius:R(6),padding:`5px 10px`},children:[`Choose a file`,(0,Z.jsx)(`input`,{type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:g,style:{display:`none`}})]}),(0,Z.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:5,cursor:`pointer`,fontFamily:i,fontSize:11,color:l?u.tx:u.dim},children:[(0,Z.jsx)(c,{checked:l,onChange:function(e){d(e.target.checked)}}),` Overwrite fields that are already filled`]})]}),(0,Z.jsx)(`textarea`,{value:a,onChange:function(e){o(e.target.value)},"aria-label":`or paste: {"decks":[{"id":"...","name":"...","fmtPod":"duel","podWhy":"..."}]}`,placeholder:`or paste: {"decks":[{"id":"...","name":"...","fmtPod":"duel","podWhy":"..."}]}`,rows:3,style:{background:u.bg,border:`1px solid `+u.br,borderRadius:R(6),color:u.tx,fontFamily:i,fontSize:11,padding:`8px 10px`,width:`100%`,boxSizing:`border-box`,marginBottom:6}}),p&&(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.bad,marginBottom:6},children:`Cannot read it: `+p+`.`}),h&&(0,Z.jsxs)(`div`,{"data-notes-preview":`1`,style:{fontFamily:i,fontSize:11,color:u.body,marginBottom:8,lineHeight:1.6},children:[h.changed.length?h.changed.length+` deck`+(h.changed.length===1?``:`s`)+` will change: `+h.changed.slice(0,8).map(function(e){return e.name+` (`+e.fields.map(function(e){return ve[e]||e}).join(`, `)+`)`}).join(`; `)+(h.changed.length>8?`; and `+(h.changed.length-8)+` more`:``)+`.`:`Nothing to change: every matching field is already filled.`,h.skipped.length?(0,Z.jsx)(`div`,{style:{color:u.dim},children:h.skipped.length+` not matched: `+h.skipped.slice(0,5).map(function(e){return(e.name||e.id)+` -- `+e.why}).join(`; `)+(h.skipped.length>5?`; ...`:``)}):null]}),(0,Z.jsx)(B,{small:!0,gold:!0,onClick:function(){if(h&&h.changed.length){var e={};h.decks.forEach(function(t){e[t.id]=t});var r=h.changed.map(function(t){var n={};return t.fields.forEach(function(r){n[r]=e[t.id][r]}),{id:t.id,fields:t.fields,v:n}}),i=t(h.decks),a=0;try{a=Cn(G(it),r)}catch{}var s={at:Date.now(),n:r.length,kept:a,podMarked:r.filter(function(e){return e.v.fmtPod&&e.v.fmtPod!==`either`}).length};try{localStorage.setItem(Ve,JSON.stringify(s))}catch{}y(s),i===!1||a<r.length?n&&n(`Saved `+a+` of `+r.length+` decks -- the rest did not stick. Nothing else was changed.`):n&&n(`Saved: `+a+` deck`+(a===1?``:`s`)+` now carry the notes.`),o(``)}},disabled:!h||!h.changed.length,children:h&&h.changed.length?`Apply to `+h.changed.length+` deck`+(h.changed.length===1?``:`s`):`Apply`}),v&&(0,Z.jsx)(`div`,{"data-notes-last":`1`,style:{fontFamily:i,fontSize:11,color:v.kept<v.n?u.bad:u.dim,marginTop:8},children:`Last import on this device: `+v.kept+` of `+v.n+` decks saved, `+Ne(v.at)+`.`})]})}function Rn({decks:e,games:t,loads:r,inv:o,pop:s}){var d=`cll2:ui:exportOpts`,f=(0,X.useState)(function(){var e={decks:!0,stats:!0,links:!1,tonight:!0,loadouts:!1,games:!1,lists:!1,inventory:!1,wishlist:!1};try{return Object.assign(e,G(d)||{})}catch{return e}}),p=f[0],m=function(e){f[1](function(t){var n=e(t);try{K(d,n)}catch{}return n})},h=[{k:`decks`,l:`Decks`},{k:`stats`,l:`Deck records`},{k:`links`,l:`Deck links`},{k:`tonight`,l:`Tonight's loadout`},{k:`loadouts`,l:`All loadouts`},{k:`games`,l:`Recent games`},{k:`lists`,l:`Decklists`},{k:`inventory`,l:`Inventory`},{k:`wishlist`,l:`Wishlist link`}],g=function(){var n=G(`cll2:settings`)||{},i=String(n.shareName||n.playerName||``).trim(),a=(t||[]).filter(Ke),s={};a.forEach(function(e){if(e.deckId){var t=s[e.deckId]=s[e.deckId]||{g:0,w:0};t.g++,e.placement===`1st`&&t.w++}});var c=function(e){var t=(e.colorId||[]).join(``);return t?` [`+t+`]`:``},u=function(e){return e.commander?` -- `+e.commander+(e.commander2?` & `+e.commander2:``):``},d=(e||[]).filter(function(e){return Xe(e)&&!e.retired}),f=[(i?i+`'s `:`My `)+`Commander decks`,new Date().toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})+` -- `+d.length+` built`,``];if(p.tonight||p.loadouts){var m=Object.entries(r||{}).map(function(e){return e[1]}).filter(Boolean).sort(function(e,t){return(t.savedAt||0)-(e.savedAt||0)});(p.loadouts?m:m.slice(0,1)).forEach(function(t,n){var r=[];Object.values(t.deckSel||{}).forEach(function(e){(e||[]).forEach(function(e){r.indexOf(e)<0&&r.push(e)})});var i=r.map(function(t){return(e||[]).find(function(e){return e.id===t})}).filter(Boolean);f.push((n===0&&p.tonight?`TONIGHT I'M BRINGING`:`LOADOUT`)+`: `+(t.name||`Loadout`)+` (`+i.length+`)`),i.slice().sort(Qt).forEach(function(e){f.push(`- `+e.name+` (B`+(e.bracket||`?`)+`)`+u(e))}),t.notes&&f.push(`  `+t.notes),f.push(``)})}if(p.decks){[1,2,3,4,5].forEach(function(e){var t=d.filter(function(t){return t.bracket===e}).slice().sort(Qt);t.length&&(f.push(`BRACKET `+e+` -- `+String(Pe[e]||``).replace(/^B\d\s*/,``).toUpperCase()+` (`+t.length+`)`),t.forEach(function(e){f.push(`- `+e.name+u(e)+c(e));var t=s[e.id],n=[],r=Bt(e);r&&n.push(r),p.stats&&t&&n.push(t.g+` game`+(t.g===1?``:`s`)+`, `+t.w+` win`+(t.w===1?``:`s`)+` (`+Math.round(t.w/t.g*100)+`%)`),n.length&&f.push(`  `+n.join(` -- `)),p.links&&e.link&&f.push(`  `+e.link)}),f.push(``))});var h=(e||[]).filter(function(e){return!Xe(e)&&!e.retired}).length;h&&(f.push(`Plus `+h+` deck`+(h===1?``:`s`)+` planned or being built.`),f.push(``))}if(p.lists){var g=U(G(`cll2:decklists`)||{}),_=e.filter(function(e){return g[e.id]&&g[e.id].text}).slice().sort(Qt);f.push(`DECKLISTS (`+_.length+`)`),f.push(`Roles after a card, when categorized: l land, r ramp, d draw, t targeted removal, m mass removal, h threat, o other.`),_.forEach(function(e){var t=g[e.id],n={};Object.keys(t.comp&&t.comp.by||{}).forEach(function(e){(t.comp.by[e]||[]).forEach(function(t){var r=l(t);n[r]=(n[r]||``)+(rt[e]||``)})}),f.push(``),f.push(`== `+e.name+` -- `+(e.commander||`?`)+(e.commander2?` & `+e.commander2:``)+` -- B`+(e.bracket||`?`)+(e.strategy?` -- `+e.strategy:``)+` ==`),String(t.text).split(`
`).forEach(function(e){var t=e.match(/^(\d+)\s*[xX]?\s+(.+)$/);if(!t){e.trim()&&f.push(e);return}var r=n[l(t[2].replace(/\s*\([A-Za-z0-9]{2,6}\)\s*[\w-]*\s*$/,``).trim())];f.push(r?e+` [`+r+`]`:e)})}),f.push(``)}if(p.games&&a.length){var v=a.filter(function(e){return e.placement===`1st`}).length;f.push(`RECENT GAMES -- `+v+` wins in `+a.length+` (`+Math.round(v/a.length*100)+`%)`),a.slice().sort(function(e,t){return String(t.date||``).localeCompare(String(e.date||``))}).slice(0,5).forEach(function(t){var n=(e||[]).find(function(e){return e.id===t.deckId});f.push(`- `+(t.date||``)+`: `+(t.placement===`1st`?`won`:t.placement||`played`)+` with `+(n?n.name:`a deck`)+(t.venue?` at `+t.venue:``))}),f.push(``)}if(p.inventory&&(f.push(`INVENTORY`),lt(o).forEach(function(e){f.push(`- `+e.name+`: `+(e.qty||0))}),f.push(``)),p.wishlist){var y=G(Se);y&&y.url&&(f.push(`WISHLIST: `+y.url),f.push(``))}return f.push(`Shared from Commander Loadout & Ledger`),f.join(`
`)},_=(0,X.useState)(!0),y=_[0],b=_[1],x=(0,X.useState)(``),S=x[0],C=x[1],w=(0,X.useState)(``),T=w[0],E=w[1],D=(0,X.useState)(``),O=D[0],k=D[1],A=function(){var i=U(G(`cll2:decklists`)||{}),o={decks:e,games:t,decklists:i,playgroup:G(`cll2:playgroup`)||{},loads:r,settings:G(`cll2:settings`)||{},wishlist:G(`cll2:wishlist`)||null};if(!y)return Promise.resolve({text:JSON.stringify(In(o)),note:``});var s=Promise.resolve(null);o.wishlist&&nn(o.wishlist.url)&&W()&&(s=a(`moxfield/`+encodeURIComponent(nn(o.wishlist.url))).then(function(e){return e&&e.text||null},function(){return null}));var c={};(t||[]).forEach(function(e){e.deckId&&(c[e.deckId]=1),(e.opponents||[]).forEach(function(e){e&&e.deckId&&(c[e.deckId]=1)})});var u=Object.keys(c).filter(function(e){return i[e]&&i[e].text}),d=[];return u.forEach(function(e){V(i[e].text).cards.forEach(function(e){d.push(e.name)})}),C(`Scryfall: `+d.length+` cards in `+u.length+` played decks...`),s.then(function(e){return e&&(o.wishlist=Object.assign({},o.wishlist,{text:e})),n(d,C).catch(function(){return{index:{},notFound:[],offline:!0}})}).then(function(t){var n={};d.forEach(function(e){var r=t.index[l(e)];r&&!n[r.name]&&(n[r.name]=Pn(r))});var r={},o=[];if(t.offline)return o.push(`card text skipped: no connection to Scryfall`),{cards:n,edh:r,notes:o};if(t.notFound&&t.notFound.length&&o.push(t.notFound.length+` card names Scryfall could not match`),!W())return o.push(`EDHREC rates skipped: no Worker set up`),{cards:n,edh:r,notes:o};var s=u.filter(function(t){var n=(e||[]).find(function(e){return e.id===t});return n&&String(n.commander||``).trim()}),c=Promise.resolve(),f=0;return s.forEach(function(t,n){c=c.then(function(){var o=(e||[]).find(function(e){return e.id===t});return C(`EDHREC `+(n+1)+`/`+s.length+`: `+o.name),a(`edhrec/`+encodeURIComponent(v(o.cmdrName||o.commander,o.commander2))).then(function(e){r[t]=Fn(V(i[t].text).cards,e),f++},function(){})})}),c.then(function(){return f<s.length&&o.push(s.length-f+` decks had no EDHREC page`),{cards:n,edh:r,notes:o}})}).then(function(e){return{text:JSON.stringify(In(Object.assign({},o,{cards:e.cards,edhrec:e.edh}))),note:e.notes.join(`; `)}})},j=function(){S||(E(``),k(``),C(`Building...`),A().then(function(e){E(e.text),k(e.note),C(``)},function(e){C(``),k(`Build failed: `+(e&&e.message||`unknown`))}))},M=T?Math.round(T.length/1024):null,ee=(0,X.useState)(function(){try{return localStorage.getItem(`cll2:ui:exportTab`)||`person`}catch{return`person`}}),N=ee[0],te=function(e){ee[1](e);try{localStorage.setItem(`cll2:ui:exportTab`,e)}catch{}},P=(0,X.useState)(!1),ne=P[0];return(0,Z.jsxs)(`div`,{"data-export-tabs":N,children:[(0,Z.jsx)(Ot,{dk:`export`,cur:N,set:te,tabs:[[`person`,`For a person`],[`graphic`,`As a graphic`],[`claude`,`For a Claude chat`]]}),N===`claude`&&(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Y,{children:`One JSON file with everything an analysis needs: decks, lists with roles and versions, every game with seats, opponents and eliminations, playgroup, loadouts. Life-change logs, art and the Worker token are left out, so it stays small enough to attach or paste. It starts with a readme that explains the fields.`}),(0,Z.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontFamily:i,fontSize:11,color:y?u.tx:u.dim,marginBottom:8},children:[(0,Z.jsx)(c,{checked:y,onChange:function(e){b(e.target.checked),E(``)}}),`Add oracle text and EDHREC rates for every deck that has been played (Scryfall and the Worker; about a minute)`]}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,marginBottom:6},children:[(0,Z.jsx)(B,{small:!0,gold:!0,onClick:j,disabled:!!S,children:S?`Building...`:T?`Rebuild analysis pack`:`Build analysis pack`}),T&&(0,Z.jsx)(B,{small:!0,onClick:function(){I(`cll-analysis-`+Yt()+`.json`,T,`application/json`,function(e){s&&s(M+`KB: `+e)})},children:`Download`}),T&&(0,Z.jsx)(Lt,{small:!0,label:`Copy`,getText:function(){return T},onCopied:function(e){s&&s(e?`Copied. Paste it into a chat and ask your question.`:`Clipboard blocked -- showing the text.`)}})]}),S&&(0,Z.jsx)(`div`,{"data-pack-busy":`1`,style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:10},children:S}),T&&(0,Z.jsx)(`div`,{"data-pack-ready":`1`,style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:10},children:M+` KB`+(O?` -- `+O:``)+`. Attach the file to a chat and ask, for example: "Which of my decks should I bring to a bracket 3 night with my usual pod, and what would you cut from the one you pick?"`}),!T&&O&&(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.bad,marginBottom:10},children:O})]}),N===`graphic`&&(0,Z.jsx)(_t,{decks:e,games:t,pop:s}),N===`person`&&(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:8,lineHeight:1.5},children:`Pick what goes in, then copy it into a message.`}),(0,Z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,marginBottom:10},children:h.map(function(e){return(0,Z.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:5,cursor:`pointer`,fontFamily:i,fontSize:11,color:p[e.k]?u.tx:u.dim},children:[(0,Z.jsx)(c,{checked:p[e.k]||!1,onChange:function(){m(function(t){return{...t,[e.k]:!t[e.k]}})}}),e.l]},e.k)})}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`,marginBottom:8},children:[(0,Z.jsx)(Lt,{small:!0,label:`Copy summary`,getText:function(){return g()},onCopied:function(e){s&&s(e?`Copied!`:`Clipboard blocked -- showing the text.`)}}),(0,Z.jsx)(B,{small:!0,onClick:function(){P[1](!ne)},children:ne?`Hide preview`:`Preview`})]}),ne&&(0,Z.jsx)(`pre`,{"data-export-preview":`1`,style:{whiteSpace:`pre-wrap`,wordBreak:`break-word`,fontFamily:i,fontSize:11,lineHeight:1.5,color:u.body,background:u.bg,border:`1px solid `+u.br,borderRadius:R(8),padding:`8px 10px`,maxHeight:240,overflowY:`auto`,margin:`0 0 8px`},children:g()})]})]})}function zn({pop:e,url:t}){var n=W(),r=(0,X.useState)(null),o=r[0],s=(0,X.useState)(``),c=s[0],l=(0,X.useState)(Date.now());(0,X.useEffect)(function(){if(o){var e=setInterval(function(){l[1](Date.now())},1e3);return function(){clearInterval(e)}}},[o&&o.code]);var d=(0,X.useState)(``),f=d[0],p=(0,X.useState)(!1),m=p[0],h=(0,X.useState)(``),g=h[0],_=function(){var t=o&&o.code;r[1](null),t&&a(`pair/`+t,{method:`DELETE`}).then(function(){e(`Code cancelled.`)},function(){e(`Code cleared here; it runs out on its own within 10 minutes.`)})},v=function(){s[1](`Asking your Worker...`),a(`pair`,{method:`POST`}).then(function(e){s[1](``),r[1](e)},function(t){s[1](``),e(`Could not make a code: `+(t&&t.message||`unknown`))})},y=function(n){oe(`Link this device to your synced data? Your synced decks, games and settings replace what is on this device.`)&&(s[1](`Linking...`),h[1](``),$e(t||Me().url,n).then(function(){s[1](``),e(`Linked. Loading your synced data...`),setTimeout(function(){window.location.reload()},800)},function(t){s[1](``);var n=t&&t.message||`unknown`;h[1](`Could not link: `+n),e(`Could not link: `+n)}))},b=o?Math.max(0,Math.round((o.expiresAt-Date.now())/1e3)):0;return(0,Z.jsxs)(`div`,{"data-link-device":`1`,style:{marginTop:12,paddingTop:10,borderTop:`1px solid `+u.divd},children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,letterSpacing:2,color:u.gold,marginBottom:6},children:`LINK A DEVICE`}),n&&tt()&&(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Y,{children:`Put your iPhone and iPad on the same data: make a code here, then enter it on the other device (Settings, Data, Worker and sync). It works once, for 10 minutes, and only for your Worker -- nobody else's data and nobody else can join.`}),!o||b<=0?(0,Z.jsx)(B,{small:!0,gold:!0,onClick:v,disabled:!!c,children:c||`Make a link code`}):(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{"data-link-code":o.code,style:{fontFamily:i,fontSize:26,letterSpacing:4,color:u.goldBr,margin:`4px 0`},children:dn(o.code)}),(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:6},children:`Good for `+Math.floor(b/60)+`:`+String(b%60).padStart(2,`0`)+`. On the other device, open the app and enter it, or open this link there.`}),(0,Z.jsx)(`div`,{"data-link-worker":`1`,style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:6,wordBreak:`break-all`},children:`Made on `+N(Me().url).replace(/^https:\/\//,``)+` -- the other device's Worker (Settings > Data > Worker) must match.`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,Z.jsx)(Lt,{small:!0,label:`Copy link`,getText:function(){return fn(o.code,Me().url)},onCopied:function(t){e(t?`Link copied -- send it only to your own device (AirDrop works).`:`Clipboard blocked.`)}}),(0,Z.jsx)(B,{small:!0,onClick:_,children:`Cancel code`})]})]}),(0,Z.jsx)(`div`,{"data-link-note":`1`,style:{fontFamily:i,fontSize:11,color:u.dim,margin:`8px 0 6px`,lineHeight:1.5},children:`Already syncing on both devices with the same Worker and token? Then they are already linked -- you do not need a code. A code is only for a device that is not syncing yet.`}),m?null:(0,Z.jsx)(B,{small:!0,onClick:function(){p[1](!0)},children:`Enter a code from another device`})]}),n&&!tt()&&(0,Z.jsx)(Y,{children:`Turn sync on above, then you can link your other device from here.`}),(!tt()||m)&&(0,Z.jsxs)(`div`,{style:{marginTop:n?8:0},children:[tt()?(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:6},children:`Linking with a code replaces this device's synced data with the other device's.`}):(0,Z.jsx)(Y,{children:`Already syncing on your other device? Make a code there (Settings, Data, Worker and sync, Link a device) and enter it here.`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,Z.jsx)(`input`,{"data-link-input":`1`,value:dn(f),onChange:function(e){d[1](Fe(e.target.value))},"aria-label":`ABCD-EFGH`,placeholder:`ABCD-EFGH`,autoCapitalize:`characters`,autoCorrect:`off`,spellCheck:!1,style:Object.assign({},L.input,{maxWidth:160,letterSpacing:2,marginBottom:0})}),(0,Z.jsx)(B,{small:!0,gold:!0,onClick:function(){y(f)},disabled:!!c||Fe(f).length!==8,children:c||`Link`}),m?(0,Z.jsx)(B,{small:!0,onClick:function(){p[1](!1),d[1](``),h[1](``)},children:`Close`}):null]}),g?(0,Z.jsx)(`div`,{"data-link-error":`1`,style:{fontFamily:i,fontSize:11,color:u.bad,marginTop:6},children:g}):null]})]})}function Bn({pop:t}){var n=Me(),r=(0,X.useState)(n.url),o=r[0],s=r[1],c=(0,X.useState)(n.token),l=c[0],d=c[1],f=(0,X.useState)(null),p=f[0],m=f[1];return(0,X.useEffect)(function(){var e=function(){var e=Me();s(e.url),d(e.token),m(e.token?{bad:!1,text:`Restored from the backup. Tap Test to check it.`}:null)};return window.addEventListener(`cll2:worker`,e),function(){window.removeEventListener(`cll2:worker`,e)}},[]),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(Y,{children:`Optional. A small Cloudflare Worker (worker/ in the repo) gives this site three things a browser cannot do alone: import a public Moxfield deck, find combos in-app, and run Review / Categorize with AI. The URL and token are saved on this device and travel in your backup file, so a restore brings them back.`}),(0,Z.jsxs)(e,{children:[`Worker URL`,o===`https://cll-worker.grantkphillips4313.workers.dev`?` (pre-set for this site)`:``]}),(0,Z.jsx)(`input`,{value:o,onChange:function(e){s(e.target.value)},"aria-label":`https://cll-worker.....workers.dev`,placeholder:`https://cll-worker.....workers.dev`,inputMode:`url`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,style:L.input}),(0,Z.jsx)(e,{children:`Token (CLL_TOKEN on the Worker)`}),(0,Z.jsx)(`input`,{value:l,onChange:function(e){d(e.target.value)},type:`password`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,"aria-label":`the secret you set in Cloudflare`,placeholder:`the secret you set in Cloudflare`,style:L.input}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginTop:8},children:[(0,Z.jsx)(B,{small:!0,gold:!0,onClick:function(){var e=String(o||``).trim().replace(/\/+$/,``),t=String(l||``).trim();if(e&&!/^https:\/\//.test(e)){m({bad:!0,text:`The URL must start with https://`});return}K(ze,{url:e,token:t}),s(e),d(t),m({bad:!1,text:e&&t?`Saved. Tap Test to check it.`:`Saved -- the site works as before with no Worker.`})},children:`Save`}),(0,Z.jsx)(B,{small:!0,onClick:function(){var e=String(o||``).trim().replace(/\/+$/,``),t=String(l||``).trim();if(!e||!t){m({bad:!0,text:`Enter both the URL and the token first.`});return}K(ze,{url:e,token:t}),m({bad:!1,text:`Testing...`}),a(`health`).then(function(e){if(!e||!e.ok){m({bad:!0,text:`That URL answered, but not like the Worker.`});return}if(!e.token){m({bad:!0,text:`Connected, but the token does not match CLL_TOKEN on the Worker.`});return}K(Ze,{ai:!!e.ai,at:Date.now()}),ct(!0),m({bad:!1,text:`Connected`+(e.v?` (Worker `+e.v+`)`:` (Worker before 2026-09-29)`)+`. Moxfield import and in-app combos are on. AI: `+(e.ai?`on -- Categorize leads with Claude.`:`off (add the AI key on the Worker, see worker/README, to categorize with Claude).`)})},function(e){m({bad:!0,text:`Could not reach it: `+(e&&e.message||`unknown`)})})},children:`Test`}),(n.url||n.token)&&(0,Z.jsx)(B,{small:!0,danger:!0,onClick:function(){K(`cll2:worker`,{url:``,token:``}),s(``),d(``),m({bad:!1,text:`Worker removed. The site works as before.`})},children:`Remove`})]}),p&&(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:p.bad?u.bad:u.good,marginTop:8,lineHeight:1.5},children:p.text}),W()&&(0,Z.jsx)(Vn,{pop:t}),(0,Z.jsx)(zn,{pop:t,url:String(o||``).trim()})]})}function Vn({pop:e}){var t=(0,X.useState)(ye()),n=t[0],r=t[1],o=(0,X.useState)(f),s=o[0],c=o[1];(0,X.useEffect)(function(){n.on&&ut().then(function(e){e&&c(e)},function(){})},[n.on]);var l=function(t){a(`sync/night`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({cfg:{on:t}})}).then(function(n){xe(n),c(n),e(t?`Nightly refresh on. It runs at about 4am Central from GitHub.`:`Nightly refresh off.`)},function(t){e(`Could not change it: `+(t&&t.message||`unknown`))})},d=(0,X.useState)(``),p=d[0],m=d[1],h=(0,X.useState)(null),g=h[0],_=h[1],v=(0,X.useState)(``),y=v[0],b=v[1];(0,X.useEffect)(function(){var e=function(e){r(e)};return j.push(e),function(){Ee(j.filter(function(t){return t!==e}))}},[]);var S=function(e){if(!e)return`never`;var t=Math.round((Date.now()-e)/6e4);return t<1?`just now`:t<60?t+` min ago`:Math.round(t/60)+` h ago`},C=Object.keys(n.pending||{}).length,T=function(){m(`Turning sync on...`),un().then(function(t){m(``),t.length?(e(`Sync on. Loaded `+t.length+` store`+(t.length===1?``:`s`)+` from the cloud -- reloading.`),setTimeout(function(){window.location.reload()},900)):e(`Sync on. This device's data is now the cloud copy.`)},function(t){m(``),e(`Sync failed: `+(t&&t.message||`unknown`))})},E=function(){m(`Syncing...`),Ge().then(function(t){m(``),t.length?(e(`Loaded `+t.length+` store`+(t.length===1?``:`s`)+` from the cloud -- reloading.`),setTimeout(function(){window.location.reload()},900)):e(`Up to date.`)})},D=function(){m(`Listing snapshots...`),a(`sync/snapshots`).then(function(e){m(``),_(e&&e.days||[])},function(t){m(``),e(`Could not list snapshots: `+(t&&t.message||`unknown`))})},O=function(t){m(`Restoring `+t+`...`),a(`sync/snapshot/`+t).then(function(n){var r=n&&n.stores||{},i=Object.keys(r).filter(function(e){return F[e]});if(!i.length){m(``),e(`That snapshot holds nothing to restore.`);return}var a=Date.now();return i.forEach(function(e){w(e,{at:a,data:r[e].data});var t=ye();t.pending[e]=!0,x(t)}),Promise.all(i.map(function(e){return st(e)})).then(function(){m(``),e(`Restored `+i.length+` store`+(i.length===1?``:`s`)+` as of `+t+` -- reloading.`),setTimeout(function(){window.location.reload()},900)})},function(t){m(``),e(`Restore failed: `+(t&&t.message||`unknown`))})};return(0,Z.jsxs)(`div`,{style:{marginTop:14,paddingTop:10,borderTop:`1px solid `+u.divd},children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,letterSpacing:2,color:u.gold,marginBottom:6},children:`SYNC`}),(0,Z.jsx)(Y,{children:`Keeps every device with this token on the same data through the Worker. The newer save wins per store; a change made elsewhere loads when you come back to the app. The Worker keeps a snapshot per day for 30 days.`}),!n.on&&(0,Z.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,alignItems:`center`},children:(0,Z.jsx)(B,{small:!0,gold:!0,onClick:T,disabled:!!p,children:p||`Turn sync on for this device`})}),n.on&&(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:n.err?u.bad:u.body,lineHeight:1.6,marginBottom:6},children:n.err?`Last attempt failed: `+n.err:`On. Pulled `+S(n.pulledAt)+`, pushed `+S(n.pushedAt)+(C?`, `+C+` store`+(C===1?``:`s`)+` waiting to push`:`, nothing waiting`)+`.`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,Z.jsx)(B,{small:!0,gold:!0,onClick:E,disabled:!!p,children:p&&p.indexOf(`Sync`)===0?p:`Sync now`}),(0,Z.jsx)(B,{small:!0,onClick:D,disabled:!!p,children:`Cloud snapshots`}),(0,Z.jsx)(B,{small:!0,onClick:function(){pn(),e(`Sync off for this device. Its data stays; the cloud copy stays.`)},children:`Turn off`}),y===`wipe`?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(B,{small:!0,danger:!0,onClick:function(){m(`Erasing the cloud copy...`),a(`sync/meta`,{method:`DELETE`}).then(function(){pn(),m(``),b(``),e(`Cloud copy erased. Sync is off; this device keeps its data.`)},function(t){m(``),e(`Could not erase: `+(t&&t.message||`unknown`))})},disabled:!!p,children:`Yes, erase the cloud copy`}),(0,Z.jsx)(B,{small:!0,onClick:function(){b(``)},children:`Cancel`})]}):(0,Z.jsx)(B,{small:!0,danger:!0,onClick:function(){b(`wipe`)},children:`Erase cloud copy`})]}),(0,Z.jsxs)(`div`,{style:{marginTop:12,paddingTop:10,borderTop:`1px solid `+u.divd},children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,letterSpacing:2,color:u.gold,marginBottom:6},children:`NIGHTLY REFRESH`}),(0,Z.jsx)(Y,{children:`Every night, GitHub runs the card check and a price point for every listed deck against the cloud copy, and once a week combos, the EDHREC comparison and the commander rank. Sync brings the results to every device. It needs the CLL_TOKEN secret on the repository (README).`}),s&&(0,Z.jsxs)(`div`,{style:{fontFamily:i,fontSize:11,color:u.body,lineHeight:1.6,marginBottom:6},children:[s.cfg&&s.cfg.on?`On.`:`Off.`,` `,s.last?`Last ran `+ge(s.last.at)+`: `+s.last.checked+` decks checked, `+s.last.priced+` priced`+(s.last.aiCategorized?`, `+s.last.aiCategorized+` categorized by Claude`:``)+((s.last.gcNew||[]).length?`, Game Changer list moved`:``)+(s.last.combos?`, `+s.last.combos+` combos`:``)+(s.last.edhrec?`, `+s.last.edhrec+` EDHREC`:``)+(s.last.failed&&s.last.failed.length?`, `+s.last.failed.length+` failed`:``)+`.`:`Has not run yet.`,s.last&&(s.last.newlyIllegal||[]).length>0&&(0,Z.jsxs)(`div`,{style:{color:u.bad,fontWeight:700},children:[`Newly not legal: `,s.last.newlyIllegal.map(function(e,t){return(0,Z.jsxs)(X.Fragment,{children:[(t?`; `:``)+e.name+` (`,(0,Z.jsx)(de,{names:e.cards}),`)`]},t)})]})]}),(0,Z.jsx)(B,{small:!0,gold:!(s&&s.cfg&&s.cfg.on),onClick:function(){l(!(s&&s.cfg&&s.cfg.on))},children:s&&s.cfg&&s.cfg.on?`Turn nightly refresh off`:`Turn nightly refresh on`})]}),g&&(0,Z.jsxs)(`div`,{style:{marginTop:8},children:[!g.length&&(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.faint},children:`No snapshots yet -- the first one is written on the first save of a new day.`}),g.slice().reverse().map(function(e){return(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,padding:`3px 0`},children:[(0,Z.jsx)(`span`,{style:{fontFamily:i,fontSize:11,color:u.tx,flex:1},children:e}),y===`snap:`+e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(B,{small:!0,danger:!0,onClick:function(){O(e)},disabled:!!p,children:[`Replace everything with `,e]}),(0,Z.jsx)(B,{small:!0,onClick:function(){b(``)},children:`Cancel`})]}):(0,Z.jsx)(B,{small:!0,onClick:function(){b(`snap:`+e)},children:`Restore`})]},e)})]})]})]})}function Hn({decks:e,games:t,loads:o,accs:l,inv:f,saveDecks:m,saveGames:h,saveLoads:g,saveAccs:_,saveInv:x,pop:S,popUndo:w,part:D}){ht(pe);var k=(0,X.useState)(``),j=k[0],M=k[1],ee=(0,X.useState)(null),N=ee[0],oe=ee[1],F=(0,X.useRef)(!1),I=(0,X.useState)(null),L=I[0],ce=I[1],le=(0,X.useState)(function(){return Object.assign({moxfield:!0,commander:!0,cards:!0,categorize:!0,combos:!0,edhrec:!0,ai:!1,notes:!1,notesAll:!1,moxReplace:!1,replacePrices:!1,recategorize:!1,recombos:!1,reedhrec:!1},G(`cll2:ui:checks`)||{})}),z=le[0],fe=le[1],me=function(e,t){var n=Object.assign({},z);n[e]=t,fe(n),K(En,n)},he=function(t){var n=(e||[]).filter(function(e){return!!nn(e.link)}),r={decks:0,imported:[],replaced:[],kept:[],same:0,small:[],removed:[],failed:[],stopped:!1,none:!n.length},i=0;return new Promise(function(o){var s=function(){if(F.current||i>=n.length){r.stopped=F.current&&i<n.length,o(r);return}var c=n[i++];t(`Moxfield `+i+` of `+n.length+`: `+c.name),a(`moxfield/`+encodeURIComponent(nn(c.link))).then(function(t){r.decks++;var n=U(G(`cll2:decklists`)||{}),i=n[c.id]||null,a=ln(i,t&&t.text,{replaceEdited:z.moxReplace});if(a===`same`){r.same++;return}if(a===`kept`){r.kept.push(c.name);return}if(a===`empty`){r.failed.push(c.name+`: Moxfield sent an empty list`);return}if(a===`small`){r.small.push(c.name+` (`+V(t.text).total+`)`);return}var o=Date.now(),s=Object.assign({},n);if(a===`remove`){delete s[c.id],K(ot,s),r.removed.push(c.name),Pt(c.name+`: removed a commander-only stub list from an earlier Moxfield pull`);return}if(s[c.id]=Object.assign(rn(i,t.text,o),{moxAt:o}),K(ot,s),a===`import`){r.imported.push(c.name+` (`+t.count+`)`),Pt(c.name+`: decklist added from Moxfield (`+t.count+` cards)`);return}var l=Rt(i.text,t.text);r.replaced.push(c.name+` (`+l.summary+`)`),Pt(c.name+` decklist (Moxfield): `+l.summary),m((e||[]).map(function(e){if(e.id!==c.id)return e;var t=(e.journal||[]).slice();return t.unshift({t:o,text:`List updated from Moxfield -- `+l.summary,auto:!0}),Object.assign({},e,{journal:t})}))},function(e){r.failed.push(c.name+`: `+(e&&e.message||`failed`))}).then(function(){return b(700)}).then(s)};s()})},ve=function(r){var i=(e||[]).slice(),o=i.map(function(e){return e.id}),s={decks:0,art:0,edhrec:0,priced:0,categorized:0,aiCategorized:0,aiFell:0,combos:0,edhrecTop:0,notesFilled:[],notesSuggested:[],notesSkipped:0,failed:[],issues:[],respelled:[],altNames:[],newlyIllegal:[],stopped:!1},c=0;return new Promise(function(e){var l=function(){if(F.current||c>=o.length){s.stopped=F.current&&c<o.length,e(s);return}var u=o[c++],d=i.filter(function(e){return e.id===u})[0];if(!d){l();return}var f=U(G(`cll2:decklists`)||{}),p=f[d.id]||null,h=Mn(d,p,{steps:z,replacePrices:z.replacePrices,recategorize:z.recategorize,recombos:z.recombos,reedhrec:z.reedhrec,worker:W()}),g={},_=Date.now(),x=c+` of `+o.length+`: `+d.name,S=null,C=function(e){r(x+` -- `+e)},w=Promise.resolve();if(h.commander&&(w=w.then(function(){return C(`commander`),Tt(d.commander)}).then(function(e){g.edhrecCardRank=e&&e.edhrec_rank||null,g.edhrecCardAt=ge(_),e&&e.name&&e.name!==d.cmdrName&&(g.cmdrName=e.name),e&&e._respelled&&s.respelled.push(d.name+`: `+String(d.commander)+` -> `+e.name),e&&e._altName&&s.altNames.push(d.name+`: `+String(d.commander)+` = `+e.name);var t=e&&e.related_uris&&e.related_uris.edhrec;if(t&&!d.edhrec&&(g.edhrec=t),s.edhrec++,h.art){var n=Dt(e);if(n)return C(`art`),At(n.url).then(function(e){Object.assign(g,Et(n,e,_)),s.art++})}}).catch(function(e){s.failed.push(d.name+`: commander (`+(e&&e.message||`failed`)+`)`)}).then(function(){return b(550)})),z.commander&&d.commander&&!String(((G(`cll2:inventory`)||{}).preconSets||{})[d.id]||``).trim()&&(w=w.then(function(){return C(`set`),Mt(d)}).then(function(e){if(e){s.sets=(s.sets||0)+1;try{window.dispatchEvent(new CustomEvent(`cll2:invpatch`,{detail:function(t){var n=Object.assign({},t.preconSets||{});return n[d.id]||(n[d.id]=e),{preconSets:n}}}))}catch{}}}).catch(function(){s.failed.push(d.name+`: set lookup`)}).then(function(){return b(550)})),h.cards){var T=V(p.text).cards;w=w.then(function(){return n(T.map(function(e){return e.name}),function(e){C(e)})}).then(function(e){if(S=e.index,h.check){var t=zt(T,e.index,d.colorId),n=qt(d.cardCheck,t);if(d.cardCheck&&n.newlyIllegal.length&&s.newlyIllegal.push({name:d.name,cards:n.newlyIllegal}),g.cardCheck=jt(t,_),t.priced&&(g.priceHistory=mt(d.priceHistory,t.usd,_)),(t.missing.length||t.notLegal.length||t.offColor.length||t.unreleased.length)&&s.issues.push({name:d.name,missing:t.missing.length,notLegal:t.notLegal.length,offColor:t.offColor.length,unreleased:t.unreleased.length}),h.price&&t.priced){var r=Vt(d);g.price=r?`0`:String(Math.round(t.usd)),g.priceFrom={via:r?`proxy`:`scryfall`,usd:t.usd,unpriced:t.unpriced.length+t.missing.length,at:_},s.priced++}}}).catch(function(e){s.failed.push(d.name+`: cards (`+(e&&e.message||`failed`)+`)`)})}if(h.categorize){var E=function(e){var t=U(G(`cll2:decklists`)||{}),n=Object.assign({},t);n[d.id]=Object.assign({},t[d.id]||p,{comp:e}),K(ot,n)},D=function(){if(S){var e=y(Ct(p.text,S,yt(f,d.id)),p.text);e.via=`rules`,E(e),s.categorized++}};w=w.then(function(){if(!(z.ai&&J())){D();return}return C(`Claude`),a(`ai`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({prompt:bt(d.name,d.commander||``,p.text,yt(f,d.id))+Ue,schema:Ce,effort:`medium`,max_tokens:4e3})}).then(function(e){var t=y(kt(e&&e.text),p.text);t.via=`ai`,E(t),s.aiCategorized++}).catch(function(){s.aiFell++,D()})})}if((h.edhrec||h.edhrecRank)&&(w=w.then(function(){return C(`EDHREC`),a(`edhrec/`+encodeURIComponent(v(g.cmdrName||d.cmdrName||d.commander,d.commander2)))}).then(function(e){return h.edhrec?Object.assign(g,gt(Ht(Nt(V(p.text).cards,e),_),_)):Object.assign(g,tn(e,_)),s.edhrecTop++,bn().then(function(e){e&&Object.keys(e).length&&(g.saltCards=xn(p.text,e),g.saltAt=ge(_))})}).catch(function(e){s.failed.push(d.name+`: EDHREC (`+(e&&e.message||`failed`)+`)`)})),h.combos){var O=V(p.text).cards;w=w.then(function(){return C(`combos`),Gt(d.commander||``,O)}).then(function(e){g.combos=dt(e,_),s.combos++}).catch(function(e){s.failed.push(d.name+`: combos (`+(e&&e.message||`failed`)+`)`)})}z.notes&&J()&&p&&p.text&&(!z.notesAll&&!jn(d)?s.notesSkipped++:w=w.then(function(){C(`writing notes`);var e=Object.assign({},d,g),n=U(G(`cll2:decklists`)||{})[d.id]||p;return wt(e,n,t,!!z.notesAll).then(function(e){Object.assign(g,e.patch),e.filled.length&&(g.notesAt=_,s.notesFilled.push(d.name),Pt(d.name+`: notes written by Claude (`+e.filled.map(function(e){return _e[e]}).join(`, `)+`)`)),Object.keys(e.suggest).length&&(g.aiNotes={at:_,fields:e.suggest},s.notesSuggested.push(d.name))})}).catch(function(e){s.failed.push(d.name+`: notes (`+(e&&e.message||`failed`)+`)`)})),w.then(function(){s.decks++,Object.keys(g).length&&(i=i.map(function(e){return e.id===d.id?Object.assign({},e,g):e}),m(i)),l()})};l()})},ye=function(){if(!j){var e=z.commander||z.cards||z.categorize||z.combos||z.edhrec||z.notes&&J(),t=z.moxfield&&W();if(!e&&!t){S(`Tick at least one check.`);return}F.current=!1,oe(null),ce(null);var n=function(e){M(e)};n(`Starting...`),(t?he(n):Promise.resolve(null)).then(function(t){return t&&ce(t),F.current||!e?null:ve(n)}).then(function(e){return!e||F.current||!z.cards?e:(n(`Wishlist prices...`),St(function(e){n(`Wishlist -- `+e)}).then(function(t){return t&&(e.wishPriced=t.priced,e.wishDrops=t.alerts.length),e},function(t){return e.failed.push(`Wishlist prices (`+(t&&t.message||`failed`)+`)`),e}))}).then(function(e){if(e&&oe(e),e&&!e.stopped)try{localStorage.setItem(Ie,String(Date.now()))}catch{}M(``),S(F.current?`Stopped. Everything done so far is saved.`:e?`Checked `+e.decks+` decks.`:`Moxfield pull done.`)},function(e){M(``),S(`Run failed: `+(e&&e.message||`unknown`))})}},xe=(0,X.useState)(!1),Ee=xe[0],ke=xe[1],Me=function(){var n=function(e){return e=e==null?``:String(e),`"`+e.replace(/"/g,`""`).replace(/\r?\n/g,` `)+`"`},r=[`Date`,`Deck`,`Commander`,`Placement`,`Pod`,`TurnOrder`,`Bracket`,`Turns`,`Venue`,`WinType`,`LossType`,`Mulligans`,`KeptCards`,`WentFirst`,`FastMana`,`Knockouts`,`KnockedOutBy`,`Opponents`,`Notes`],i=(t||[]).map(function(t){var r=(e||[]).find(function(e){return e.id===t.deckId}),i=t.opponents||[],a=i.filter(function(e){return e.koByYou}).map(function(e){return e.name}).join(`; `),o=i.filter(function(e){return e.koYou}).map(function(e){return e.name}).join(`; `),s=i.map(function(e){return e.name+(e.commander?` [`+e.commander+`]`:``)}).join(`; `);return[t.date,r&&r.name,r&&r.commander,t.placement,t.playerCount,t.turnOrder,t.bracketPlayed,t.turns,t.venue,t.winType,t.lossType,t.mulliganCount,t.mulliganTo,t.youWentFirst===!0?`yes`:t.youWentFirst===!1?`no`:``,t.youHadFastMana?`yes`:``,a,o,s,t.notes].map(n).join(`,`)});return r.map(n).join(`,`)+`
`+i.join(`
`)},Ne=(0,X.useState)(``),Pe=Ne[1],Fe=Ne[0],Be=(0,X.useState)(!1),Ve=Be[1],Ge=Be[0],Ke=(0,X.useState)(!1),qe=Ke[0],Je=Ke[1],Ye=(0,X.useState)(null);Ye[1],Ye[0];var Xe=function(n,r){var i;try{i=JSON.parse(n)}catch{S(`Restore rejected: not valid JSON.`);return}var a=De(i);JSON.stringify(a)!==JSON.stringify(i)&&(i=a,S(`Restore: fixed mangled accents/apostrophes in the backup before applying.`));var o=an(i);if(o){S(`Restore rejected: `+o);return}var c=[];if(i.games&&i.decks){var l={};i.decks.forEach(function(e){l[e.id]=1});var u=i.games.filter(function(e){return e.deckId&&!l[e.deckId]}).length;u&&c.push(u+` game`+(u===1?``:`s`)+` reference unknown decks`);var d={};i.games.forEach(function(e){d[e.id]=1});var f=i.games.filter(function(e){return e.sourceGameId&&!d[e.sourceGameId]}).length;f&&c.push(f+` mirror record`+(f===1?``:`s`)+` missing their primary game`)}if(!r){var v=`Import this file? It replaces what's on this phone`+(i.decks?`: `+e.length+` decks become `+i.decks.length:``)+(i.games?`, `+t.length+` games become `+i.games.length:``)+`.`;if(!window.confirm(v))return}var y={};try{for(var b=0;b<localStorage.length;b++){var C=localStorage.key(b);C&&C.indexOf(`cll2:`)===0&&(y[C]=localStorage.getItem(C))}}catch{}try{if(i.decks&&m(Tn(i.decks,r?[]:e),{allowShrink:!0}),i.games&&h(i.games,{allowShrink:!0}),i.loads&&g(i.loads,{allowShrink:!0}),i.accs&&_(i.accs,{allowShrink:!0}),i.inv&&x(i.inv),i.playgroup!==void 0&&K(we,i.playgroup),i.settings!==void 0){K(s,i.settings);try{window.dispatchEvent(new CustomEvent(`cll2:settingsRestored`,{detail:i.settings}))}catch{}}if(i.ranker!==void 0&&K(Re,i.ranker),i.rankerRuns!==void 0&&K(Oe,i.rankerRuns),i.rankerRuns===void 0&&i.decks){var w=G(Oe);(!w||!w.length)&&K(Oe,H(`SEED_RANK_RUNS`))}if(i.pipeline!==void 0&&K(be,i.pipeline),i.gauntlets!==void 0&&K(P,i.gauntlets),i.tourneys!==void 0&&K(T,i.tourneys),i.builds!==void 0&&K(Qe,i.builds),i.lastBackup&&K(He,i.lastBackup),i.randomCfg&&K(We,i.randomCfg),i.sessionNames&&K(te,i.sessionNames),i.worker&&typeof i.worker==`object`){K(ze,{url:String(i.worker.url||``),token:String(i.worker.token||``)});try{window.dispatchEvent(new CustomEvent(`cll2:worker`))}catch{}}i.decklists&&typeof i.decklists==`object`&&K(ot,i.decklists,{allowShrink:!0}),i.wishlist!==void 0&&K(Se,i.wishlist,{allowShrink:!0}),i.collection!==void 0&&K(Te,i.collection,{allowShrink:!0}),i.customPlanes!==void 0&&K(et,i.customPlanes,{allowShrink:!0}),i.seasons!==void 0&&K(p,i.seasons,{allowShrink:!0}),i.lifeSounds!==void 0&&On(i.lifeSounds||{}),i.matchupNotes!==void 0&&K(`cll2:matchupNotes`,i.matchupNotes,{allowShrink:!0}),i.houseRules!==void 0&&K(`cll2:houseRules`,i.houseRules,{allowShrink:!0}),i.houseRulesHidden!==void 0&&K(`cll2:houseRulesHidden`,i.houseRulesHidden,{allowShrink:!0}),i.venueHouseRules!==void 0&&K(`cll2:venueHouseRules`,i.venueHouseRules,{allowShrink:!0}),Ve(!1),Pe(``);var E=`Restored`+(i.decks?` `+i.decks.length+` decks`:``)+(i.games?`, `+i.games.length+` games`:``)+`.`;if(c.length&&(E+=` Note: `+c.join(`; `)+`.`),r)S(E);else try{window.dispatchEvent(new CustomEvent(`cll2:undo`,{detail:{msg:E,restore:function(){try{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);n&&n.indexOf(`cll2:`)===0&&y[n]===void 0&&e.push(n)}e.forEach(function(e){localStorage.removeItem(e)}),Object.keys(y).forEach(function(e){localStorage.setItem(e,y[e])})}catch{}location.reload()}}}))}catch{S(E)}return!0}catch(e){S(`Restore failed while applying: `+String(e&&e.message||e))}},Ze=(0,X.useState)(!1),$e=Ze[0],tt=Ze[1],nt=function(){C(S)},rt=(0,X.useState)(null),q=rt[0],it=rt[1],at=(0,X.useState)(!1),st=at[0],ct=at[1],lt=function(e){var t=e.target.files&&e.target.files[0];if(t){var n=new FileReader;n.onload=function(){var e=String(n.result||``),r;try{r=De(JSON.parse(e))}catch{S(`That file is not a backup (not valid JSON). Nothing was changed.`);return}var i=an(r);if(!i&&!(r.decks&&r.decks.length)&&!(r.games&&r.games.length)&&(i=`it has no decks and no games.`),i){S(`That file cannot be loaded: `+i+` Nothing was changed.`);return}it({text:JSON.stringify(r),name:t.name||`backup`,sum:on(r)})},n.onerror=function(){S(`Could not read that file.`)},n.readAsText(t);try{e.target.value=``}catch{}}},ut=function(){if(q){d();var e=Xe(q.text,!0);it(null),e&&setTimeout(function(){try{window.location.reload()}catch{}},600)}},ft=function(){d(),ct(!1);try{window.location.reload()}catch{}},pt=function(){try{var n=0,r=0,i=0,a=0,s={};e.forEach(function(e){s[e.id]=1});var c=e.slice();H(`SEED_DECKS`).forEach(function(e){s[e.id]||(c.push(Object.assign({},e,{colorId:en(e.colorId)})),n++)});var u={};H(`SEED_DECKS`).forEach(function(e){u[e.id]=e});var d=0,f=function(e){return e==null||e===``||Array.isArray(e)&&e.length===0};c=c.map(function(e){var t=u[e.id];if(!t)return e;var n=e,r=!1,i=e._seeded||{};return[`commander`,`colorId`,`themes`,`strategy`,`note`,`bracketWhy`,`plan`,`edhrec`,`buildRank`,`cmdrText`].forEach(function(a){var o=a===`colorId`?en(t[a]):t[a];if(!f(t[a])){var s=f(e[a]),c=i[a]===void 0?(t._seededPrev||{})[a]:i[a],l=!s&&c!==void 0&&c===Dn(e[a]);if(s||l){if(JSON.stringify(e[a])===JSON.stringify(o)&&!s)return;r||(n=Object.assign({},e)),n[a]=o,n._seeded=Object.assign({},n._seeded||{}),n._seeded[a]=Dn(o),r=!0}}}),!f(t.name)&&t.name!==e.name&&(e.name===t.commander||e.name===e.commander)&&(r||(n=Object.assign({},e)),n.name=t.name,r=!0),r&&d++,n});var p={},v={},y=0;H(`SEED_DECKS`).forEach(function(e){e.art&&(p[e.id]=e.art,v[e.name]=e.art)}),c=c.map(function(e){if(e.art)return e;var t=p[e.id]||v[e.name];return t?(y++,Object.assign({},e,{art:t})):e});var b={};t.forEach(function(e){b[e.id]=1});var x=t.slice();H(`SEED_GAMES`).forEach(function(e){b[e.id]||(x.push(e),r++)});var C=Object.assign({},o);Object.keys(H(`SEED_LOADS`)).forEach(function(e){C[e]||(C[e]=H(`SEED_LOADS`)[e],i++)});var w=G(`cll2:builds`)||[],E={};w.forEach(function(e){E[e.id]=1});var D=w.slice();H(`SEED_BUILDS`).forEach(function(e){E[e.id]||(D.push(e),a++)});var O=U(G(`cll2:decklists`)||{}),k=Object.assign({},O),A=0,j=0,M=U(H(`SEED_DECKLISTS`)||{});Object.keys(M).forEach(function(e){if(!k[e]){k[e]=M[e],A++;return}!k[e].comp&&M[e]&&M[e].comp&&M[e].comp.fp===Ae(k[e].text)&&(k[e]=Object.assign({},k[e],{comp:M[e].comp}),j++)});var ee=l||[],N={};ee.forEach(function(e){N[e.id]=1});var te=ee.slice(),P=0;(H(`SEED_ACCS`)||[]).forEach(function(e){N[e.id]||(te.push(e),P++)});var ne=G(`cll2:rankerRuns`)||[],re={};ne.forEach(function(e){re[e.id]=1});var ie=ne.slice(),ae=0;(H(`SEED_RANK_RUNS`)||[]).forEach(function(e){re[e.id]||(ie.push(e),ae++)});var oe=G(`cll2:tourneys`)||[],F={};oe.forEach(function(e){F[e.id]=1});var se=oe.slice(),I=0;(H(`SEED_TOURNEYS`)||[]).forEach(function(e){F[e.id]||(se.push(e),I++)});var L=G(Se),ce=0;!L&&H(`SEED_WISHLIST`)&&(ce=1),(n||y||d)&&m(c),r&&h(x.sort(Le)),i&&g(C),a&&K(Qe,D),(A||j)&&K(ot,k),P&&_&&_(te),ae&&K(Oe,ie),I&&K(T,se),ce&&K(Se,H(`SEED_WISHLIST`));var le=n+r+i+a+y+A+P+ae+I+ce+j+d,R=[];n&&R.push(n+` decks`),d&&R.push(d+` ideas filled in`),A&&R.push(A+` decklists`),j&&R.push(j+` deck compositions`),r&&R.push(r+` games`),i&&R.push(i+` loadouts`),a&&R.push(a+` build ideas`),P&&R.push(P+` accessories`),ae&&R.push(ae+` ranker runs`),I&&R.push(I+` tournaments`),ce&&R.push(`wishlist`),y&&R.push(y+` deck images`),S(le?`Restored: `+R.join(`, `)+`.`:`Nothing to merge - your data already has everything in the seed.`)}catch{S(`Merge failed.`)}},_t=function(e){var t=e.target.files&&e.target.files[0];if(t){var n=new FileReader;n.onload=function(){Xe(String(n.result||``))},n.onerror=function(){S(`Could not read that file.`)},n.readAsText(t);try{e.target.value=``}catch{}}};if(qe)throw Error(`Test crash from Settings -> Data -> Danger Zone`);var vt=(0,X.useState)(`checks`),xt=vt[0],Ft=vt[1],It=ie(),Bt=It===null?`never backed up`:It===0?`backed up today`:`last backup `+A(It,`day`)+` ago`,Ut={fontFamily:i,fontSize:11,letterSpacing:2,color:u.dim,margin:`4px 0 8px`};return(0,Z.jsxs)(`div`,{children:[Ee&&(0,Z.jsx)(kn,{pop:S,onClose:function(){ke(!1)},getText:function(){try{return JSON.stringify(ae(!0),null,0)}catch(e){return ne?String(e&&e.message||``):`Still loading -- wait a moment and try again.`}}}),!D&&(0,Z.jsxs)(E,{ck:`data2:backup`,title:`Backup and restore`,summary:Bt,children:[(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:8,flexWrap:`wrap`,alignItems:`center`},children:[(0,Z.jsx)(B,{primary:!0,onClick:r()?function(){ke(!0)}:nt,children:`Back up`}),(0,Z.jsx)(B,{small:!0,onClick:function(){tt(!$e)},children:$e?`Fewer options`:`More export options`})]}),$e&&(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:10,flexWrap:`wrap`},children:[r()?(0,Z.jsx)(B,{small:!0,onClick:nt,children:`Download Backup`}):(0,Z.jsx)(B,{small:!0,onClick:function(){ke(!0)},children:`Save / Share Backup`}),(0,Z.jsx)(Lt,{small:!0,label:`Export Games (CSV)`,getText:Me,onCopied:function(e){S(e?`Games CSV copied to clipboard!`:`Clipboard blocked -- showing the text.`)}})]}),(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,letterSpacing:1,color:u.faint,margin:`10px 0 6px`},children:`RESTORE`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:10,flexWrap:`wrap`},children:[(0,Z.jsx)(B,{onClick:function(){Ve(!Ge)},children:Ge?`Hide`:`Import`}),(0,Z.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,background:`transparent`,border:`1px solid `+u.br,borderRadius:R(6),color:u.muted,fontFamily:i,fontSize:11,padding:`7px 16px`,cursor:`pointer`},children:[`Start over from a file`,(0,Z.jsx)(`input`,{type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:lt,style:{display:`none`}})]}),re()&&(0,Z.jsx)(B,{onClick:pt,children:`Add back built-in decks`})]}),q&&(0,Z.jsxs)(`div`,{style:{margin:`4px 0 12px`,padding:`10px 12px`,border:`1px solid `+u.bad,borderRadius:R(8),background:u.panel2},children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.tx,lineHeight:1.6},children:q.name+`: `+q.sum.decks+` decks, `+q.sum.games+` games, `+q.sum.decklists+` decklists, art on `+q.sum.art+` decks`+(q.sum.saved?`, saved `+q.sum.saved:``)+`.`}),(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.bad,margin:`4px 0 8px`,lineHeight:1.5},children:`Everything on this device is erased and replaced with this file, then the app restarts. Save a backup first if you want to keep what is here now.`}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:[(0,Z.jsx)(B,{small:!0,danger:!0,onClick:ut,children:`Erase and load this file`}),(0,Z.jsx)(B,{small:!0,onClick:function(){it(null)},children:`Cancel`})]})]}),(0,Z.jsxs)(Y,{style:{fontFamily:i,fontSize:11,color:u.faint,marginBottom:10,lineHeight:1.5},children:[`Your data lives in this browser (and in the cloud copy, with sync on). Back up after a session and keep the file in Files or iCloud.`,(0,Z.jsx)(`br`,{}),(0,Z.jsx)(`b`,{style:{color:u.body},children:`Import`}),` replaces your data with a backup -- paste it or pick a file.`,(0,Z.jsx)(`br`,{}),(0,Z.jsx)(`b`,{style:{color:u.body},children:`Start over from a file`}),` erases everything on this device first, then loads the file and restarts -- use it to begin again from a backup.`,re()&&(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`br`,{}),(0,Z.jsx)(`b`,{style:{color:u.body},children:`Add back built-in decks`}),` is different: it only adds decks, games, loadouts and build ideas from the version built into this app that you do not already have. It never overwrites or deletes anything.`]})]}),Ge&&(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:6},children:`Paste exported JSON here, then tap Restore:`}),(0,Z.jsx)(`textarea`,{"aria-label":`Backup JSON to restore`,value:Fe,onChange:function(e){Pe(e.target.value)},placeholder:`{"decks":[...]}`,style:{background:u.bg,border:`1px solid `+u.br,borderRadius:R(6),color:u.tx,padding:`7px 10px`,fontFamily:je,outline:`none`,height:80,resize:`vertical`,width:`100%`,marginBottom:8,fontSize:11}}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,alignItems:`center`},children:[(0,Z.jsx)(B,{gold:!0,onClick:function(){Xe(Fe)},children:`Restore`}),(0,Z.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,background:u.raised,border:`1px solid `+u.br,borderRadius:R(6),color:u.tx2,fontFamily:i,fontSize:11,padding:`0 14px`,height:34,cursor:`pointer`},children:[`Choose a file instead`,(0,Z.jsx)(`input`,{type:`file`,accept:`.json,.txt,application/json,text/plain`,onChange:_t,style:{display:`none`}})]})]})]})]}),!D&&(0,Z.jsx)(mn,{}),!D&&(0,Z.jsx)(E,{ck:`data2:trash`,title:`Trash`,summary:(function(){var e=se().length;return e?A(e,`item`)+`, kept 30 days`:`empty`})(),children:(0,Z.jsx)(vn,{pop:S})}),!D&&(0,Z.jsx)(E,{ck:`data2:share`,title:`Share and export`,summary:`text, stats picture, Claude pack`,children:(0,Z.jsx)(Rn,{decks:e,games:t,loads:o,inv:f,pop:S})}),!D&&(0,Z.jsx)(E,{ck:`data2:worker`,title:`Worker and sync`,summary:W()?`connected`:`not set up`,children:(0,Z.jsx)(Bn,{pop:S})}),D===`upkeep`&&(0,Z.jsxs)(E,{ck:`data2:upkeep`,title:`Deck upkeep`,summary:`run checks, import notes`,children:[(0,Z.jsx)(Ot,{dk:`data-upkeep`,cur:xt,set:Ft,tabs:[[`checks`,`Run checks`],[`notes`,`Import deck notes`]]}),xt===`notes`&&(0,Z.jsx)(Ln,{decks:e,saveDecks:m,pop:S}),xt===`checks`&&(0,Z.jsxs)(`div`,{"data-run-checks":`1`,children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.muted,lineHeight:1.6,marginBottom:6},children:(e||[]).filter(function(e){return e.art||e.artUrl}).length+` of `+(e||[]).length+` decks have art; `+(e||[]).filter(function(e){return!!nn(e.link)}).length+` link to Moxfield.`}),(0,Z.jsx)(Y,{children:`Every bulk lookup in one pass, one deck at a time; each deck is saved as it finishes, so Stop keeps what is done. Tick what to run. Moxfield goes first so the card checks read the fresh lists. Work already done is protected: art only where missing, typed prices kept, saved breakdowns, combos and EDHREC comparisons kept unless you ask to redo them.`}),(function(){var t=function(e,t,n,r){return(0,Z.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`flex-start`,fontFamily:i,fontSize:11,color:r?u.faint:z[e]?u.tx:u.dim,marginBottom:5,cursor:r?`default`:`pointer`,paddingLeft:n?18:0},children:[(0,Z.jsx)(c,{checked:!!z[e]&&!r,disabled:!!r,onChange:function(t){me(e,t.target.checked)}}),(0,Z.jsx)(`span`,{children:t})]},e)},n=W();return(0,Z.jsxs)(`div`,{"data-check-steps":`1`,style:{marginBottom:8},children:[t(`moxfield`,n?`Pull lists from Moxfield (decks with a Moxfield link)`:`Pull lists from Moxfield -- needs the Worker`,!1,!n),z.moxfield&&n&&t(`moxReplace`,`Replace lists I edited by hand too`,!0),t(`commander`,`Commander: art where missing, EDHREC link and card rank, and the set where none is given`),t(`cards`,`Card check: legality, prices, price history, bracket signals`),z.cards&&t(`replacePrices`,`Replace prices I typed in (otherwise only empty or Scryfall prices update)`,!0),t(`categorize`,`Categorize lists that have no breakdown`),z.categorize&&t(`recategorize`,`Re-categorize lists already categorized`,!0),z.categorize&&t(`ai`,J()?`With Claude instead of the rules (a few cents a deck; falls back to the rules)`:`With Claude -- the Worker has no AI key`,!0,!J()),t(`combos`,n?`Combos through the Worker (Spellbook)`:`Combos -- needs the Worker`,!1,!n),z.combos&&n&&t(`recombos`,`Redo saved combo searches too`,!0),t(`edhrec`,n?`EDHREC comparison through the Worker`:`EDHREC comparison -- needs the Worker`,!1,!n),z.edhrec&&n&&t(`reedhrec`,`Redo saved comparisons too`,!0),t(`notes`,J()?`Write deck notes with Claude (a few cents a deck) -- plan, bracket reason, strategy, themes, 1v1 / 2HG fit`:`Write deck notes with Claude -- the Worker has no AI key`,!1,!J()),z.notes&&J()&&(0,Z.jsxs)(`div`,{"data-notes-scope":`1`,style:{display:`flex`,gap:6,flexWrap:`wrap`,margin:`-1px 0 7px 22px`},children:[(function(){var t=U(G(`cll2:decklists`)||{}),n=(e||[]).filter(function(e){return t[e.id]&&t[e.id].text});return[[!1,`Only decks with notes missing (`+n.filter(function(e){return jn(e)}).length+`)`],[!0,`All decks with a list (`+n.length+`) -- suggest changes to written notes`]]})().map(function(e){var t=!!z.notesAll===e[0];return(0,Z.jsx)(`button`,{onClick:function(){me(`notesAll`,e[0])},style:{background:t?u.gold+`22`:`transparent`,border:`1px solid `+(t?u.gold:u.br),borderRadius:R(10),color:t?u.goldBr:u.muted,fontFamily:i,fontSize:11,padding:`3px 9px`,cursor:`pointer`},children:e[1]},String(e[0]))}),(0,Z.jsx)(`div`,{style:{width:`100%`,fontFamily:i,fontSize:11,color:u.faint,lineHeight:1.5},children:`Needs a stored decklist. Blank notes are filled. Notes you wrote are never replaced; with All decks, different wording waits on the deck page for you to apply or dismiss.`})]})]})})(),j&&(0,Z.jsx)(`div`,{"data-check-run":`1`,style:{fontFamily:i,fontSize:11,color:u.goldBr,marginBottom:8},children:j}),j?(0,Z.jsx)(B,{small:!0,onClick:function(){F.current=!0},children:`Stop`}):(0,Z.jsx)(`span`,{"data-upkeep-run":`1`,children:(0,Z.jsx)(B,{gold:!0,small:!0,disabled:!(e||[]).length,onClick:ye,children:`Run checks`})}),L&&!j&&(0,Z.jsxs)(`div`,{style:{marginTop:8,fontFamily:i,fontSize:11,color:u.body,lineHeight:1.6},children:[(0,Z.jsx)(`div`,{style:{color:u.tx},children:(L.stopped?`Moxfield stopped after `:`Moxfield: `)+L.decks+` decks. Imported `+L.imported.length+`, updated `+L.replaced.length+`, unchanged `+L.same+`, kept `+L.kept.length+(L.none?` (no deck has a Moxfield link)`:``)+`.`}),L.imported.length>0&&(0,Z.jsx)(`div`,{children:`Imported: `+L.imported.join(`; `)}),L.replaced.length>0&&(0,Z.jsx)(`div`,{children:`Updated: `+L.replaced.join(`; `)}),L.kept.length>0&&(0,Z.jsx)(`div`,{style:{color:u.warn},children:`Kept (edited here since the last Moxfield import): `+L.kept.join(`, `)}),L.small.length>0&&(0,Z.jsx)(`div`,{style:{color:u.faint},children:`Skipped, fewer than 10 cards on Moxfield: `+L.small.join(`, `)}),L.removed.length>0&&(0,Z.jsx)(`div`,{style:{color:u.faint},children:`Removed commander-only stubs from the earlier pull: `+L.removed.join(`, `)}),L.failed.length>0&&(0,Z.jsx)(`div`,{style:{color:u.bad},children:`Failed: `+L.failed.join(`; `)})]}),N&&!j&&(0,Z.jsxs)(`div`,{style:{marginTop:8,fontFamily:i,fontSize:11,color:u.body,lineHeight:1.6},children:[(0,Z.jsx)(`div`,{style:{color:u.tx},children:(N.stopped?`Stopped after `:`Done: `)+N.decks+` decks. Art added `+N.art+`, EDHREC card ranks `+N.edhrec+`, priced `+N.priced+`, categorized `+N.categorized+(N.aiCategorized?` by rules and `+N.aiCategorized+` by Claude`:``)+(N.aiFell?` (`+N.aiFell+` fell back to the rules)`:``)+`, combos `+N.combos+`, EDHREC comparisons `+N.edhrecTop+`.`}),((N.notesFilled||[]).length>0||(N.notesSuggested||[]).length>0||N.notesSkipped>0)&&(0,Z.jsx)(`div`,{"data-notes-done":`1`,style:{color:u.tx},children:`Notes: written for `+A((N.notesFilled||[]).length,`deck`)+((N.notesSuggested||[]).length?`, suggestions waiting on `+A(N.notesSuggested.length,`deck`)+` (`+N.notesSuggested.slice(0,6).join(`, `)+(N.notesSuggested.length>6?`, ...`:``)+`)`:``)+(N.notesSkipped?`, `+N.notesSkipped+` already filled and skipped`:``)+`.`}),N.sets>0&&(0,Z.jsx)(`div`,{"data-sets-done":`1`,style:{color:u.tx},children:`Sets: found for `+A(N.sets,`deck`)+` (Edit > Basics to change one).`}),N.wishPriced!=null&&(0,Z.jsx)(`div`,{"data-wish-done":`1`,style:{color:N.wishDrops?u.good:u.tx},children:`Wishlist: priced `+A(N.wishPriced,`card`)+(N.wishDrops?`, `+A(N.wishDrops,`price drop`)+` (Lists > Wishlist).`:`, no price drops.`)}),(N.newlyIllegal||[]).length>0&&(0,Z.jsxs)(`div`,{style:{color:u.bad,fontWeight:700},children:[`Newly not legal since the last check: `,N.newlyIllegal.map(function(e,t){return(0,Z.jsxs)(X.Fragment,{children:[(t?`; `:``)+e.name+` (`,(0,Z.jsx)(de,{names:e.cards}),`)`]},t)})]}),N.issues.length>0&&(0,Z.jsx)(`div`,{style:{color:u.warn},children:`Card issues: `+N.issues.map(function(e){return e.name+` (`+[e.missing?e.missing+` unmatched`:``,e.notLegal?e.notLegal+` not legal`:``,e.unreleased?e.unreleased+` unreleased`:``,e.offColor?e.offColor+` off-color`:``].filter(Boolean).join(`, `)+`)`}).join(`; `)}),(N.altNames||[]).length>0&&(0,Z.jsx)(`div`,{style:{color:u.faint},children:`Commander printed under another name: `+N.altNames.join(`; `)+`.`}),(N.respelled||[]).length>0&&(0,Z.jsx)(`div`,{style:{color:u.warn},children:`Commander spelling: `+N.respelled.join(`; `)+`. Matched anyway; fix the commander on the deck to be sure.`}),N.failed.length>0&&(0,Z.jsx)(`div`,{style:{color:u.faint},children:`Did not finish: `+N.failed.slice(0,12).join(`; `)+(N.failed.length>12?`; and `+(N.failed.length-12)+` more`:``)+`. Run it again to retry.`})]})]})]}),D===`app`&&(function(){var e=Wt(`# Changelog

Newest first. Each release has a version number (major.minor.patch: a
release with new features raises the middle number, one with only
enhancements and fixes raises the last), its date and a title. The app
reads this file at build time and shows it under Settings > App >
What's new. Every release stays here.

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
`);if(!e.length)return null;var t=``;try{t=localStorage.getItem(`cll2:ui:notesSeen`)||``}catch{}var n=t!==e[0].date+` `+e[0].version;return(0,Z.jsx)(E,{ck:`data2:whatsnew`,title:`What's new`,summary:(0,Z.jsx)(`span`,{style:{color:n?u.goldBr:u.dim},children:(n?`new: `:``)+`v`+e[0].version+(e[0].title?` - `+e[0].title:``)}),children:(0,Z.jsx)(ue,{log:e})})})(),!D&&(0,Z.jsxs)(E,{ck:`data2:more`,title:`Maintenance`,summary:`repair log, cleanup, danger zone`,children:[(function(){var e=[];try{var t=G(`cll2:repairLog`);Array.isArray(t)&&(e=t)}catch{}return(0,Z.jsxs)(`div`,{"data-repair-log":`1`,style:{marginBottom:18},children:[(0,Z.jsx)(`div`,{style:Ut,children:`REPAIR LOG`+(e.length?` (`+e.length+`)`:``)}),!e.length&&(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.faint,padding:`2px 0`},children:`Nothing repaired. Hydration has not had to restore anything on this device.`}),!!e.length&&(0,Z.jsx)(`div`,{style:{display:`grid`,gap:7},children:e.map(function(e,t){var n=new Date(e.at||0),r=isNaN(n.getTime())?`unknown`:n.toLocaleDateString()+` `+n.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`});return(0,Z.jsxs)(`div`,{style:{border:`1px solid `+u.br,borderRadius:R(6),padding:`7px 9px`,background:u.panel2},children:[(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.faint,letterSpacing:.5},children:r}),(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.good,marginTop:3},children:(e.items||[]).join(`, `)||`(no detail)`})]},t)})})]})})(),(function(){var n={};(e||[]).forEach(function(e){e.name&&(n[e.name.trim().toLowerCase()]=e.id)});var r=0,a={},o={};if((t||[]).forEach(function(e){(e.opponents||[]).forEach(function(t){var i=(t&&t.name||``).trim().toLowerCase();if(i){var s=n[i];s&&(!t.deckId||t.deckId===s)&&(r++,a[e.id]=1,o[t.name]=1)}})}),!r)return null;var s=Object.keys(o);return(0,Z.jsxs)(`div`,{"data-playgroup-cleanup":`1`,style:{marginBottom:18},children:[(0,Z.jsx)(`div`,{style:Ut,children:`PLAYGROUP CLEANUP`}),(0,Z.jsxs)(`div`,{style:{fontFamily:i,fontSize:11,color:u.dim,marginBottom:8,lineHeight:1.5},children:[r,` opponent seat`,r===1?``:`s`,` across `,Object.keys(a).length,` game`,Object.keys(a).length===1?``:`s`,` are named after a deck rather than a person (`,s.slice(0,4).join(`, `),s.length>4?` +`+(s.length-4)+` more`:``,`). These show up as phantom players in Playgroup and name suggestions.`]}),(0,Z.jsx)(`div`,{style:{fontFamily:i,fontSize:11,color:u.faint,marginBottom:10,lineHeight:1.5},children:`Clearing the name keeps the game, the result, and which deck sat in that seat -- only the person-name is removed.`}),(0,Z.jsxs)(B,{onClick:function(){var e=(t||[]).slice(),r=0;h((t||[]).map(function(e){var t=!1,i=(e.opponents||[]).map(function(e){var i=(e&&e.name||``).trim().toLowerCase(),a=i?n[i]:null;return a&&(!e.deckId||e.deckId===a)?(t=!0,r++,Object.assign({},e,{name:``,deckId:e.deckId||a})):e});return t?Object.assign({},e,{opponents:i}):e})),w(`Cleared `+r+` deck-named seat`+(r===1?``:`s`)+`.`,function(){h(e)})},children:[`Clear `,r,` deck-named seat`,r===1?``:`s`]})]})})(),(0,Z.jsxs)(`div`,{"data-danger-zone":`1`,children:[(0,Z.jsx)(`div`,{style:Object.assign({},Ut,{color:u.bad}),children:`DANGER ZONE`}),(0,Z.jsx)(B,{danger:!0,onClick:function(){var e=(t||[]).slice(),n=Kt(`games`,`All `+A(e.length,`game`),{games:e});h([],{allowShrink:!0}),w(`History cleared (`+e.length+` game`+(e.length===1?``:`s`)+`).`,function(){h(e,{allowShrink:!0}),$t(n)})},children:`Clear All Game History`}),(0,Z.jsxs)(`div`,{style:{marginTop:12},children:[st?(0,Z.jsxs)(`div`,{style:O.rowCentre(),children:[(0,Z.jsx)(`span`,{style:{fontFamily:i,fontSize:11,color:u.bad},children:`Erase every deck, game and setting on this device?`}),(0,Z.jsx)(B,{small:!0,danger:!0,onClick:ft,children:`Yes, erase`}),(0,Z.jsx)(B,{small:!0,onClick:function(){ct(!1)},children:`Cancel`})]}):(0,Z.jsx)(B,{danger:!0,onClick:function(){ct(!0)},children:`Erase Everything on This Device`}),(0,Z.jsx)(Y,{style:{fontFamily:i,fontSize:11,color:u.faint,marginTop:6,lineHeight:1.5},children:`The app restarts empty, at the welcome screen, where Import a backup loads a file.`})]}),sn()&&(0,Z.jsxs)(`div`,{style:{marginTop:14,paddingTop:12,borderTop:`1px solid `+u.divd},children:[(0,Z.jsx)(Y,{style:{fontFamily:i,fontSize:11,color:u.faint,marginBottom:7,lineHeight:1.5},children:`Crashes the app on purpose so the error screen and its Copy error report button can be tested. Your data is untouched -- reload to come back.`}),(0,Z.jsx)(B,{small:!0,onClick:function(){Je(!0)},children:`Test the crash screen`})]})]})]})]})}export{kn as BackupHandoff,En as CHECK_STEPS_KEY,Sn as DECK_NOTE_IMPORT_FIELDS,Hn as DataTab,Ln as DeckNotesImport,Rn as ExportSummary,zn as LinkDevice,cn as MOX_MIN_CARDS,Nn as PACK_README,yn as SALT_KEY,mn as StorageKeep,Vn as SyncPanel,vn as TrashPanel,Bn as WorkerPanel,$ as _saltP,In as analysisPack,wn as applyDeckNotes,an as backupProblem,on as backupSummary,Pn as compactCard,jn as deckNeedsNotes,Fn as edhrecRates,Dn as fieldMark,sn as isDebugView,On as lsndRestore,ln as moxfieldDecision,An as needsArt,Cn as notesStillThere,dn as pairCodeShow,fn as pairLink,Mn as planDeckRefresh,Tn as reattachArt,xn as saltCardsOf,bn as saltMap,pn as syncDisable,un as syncEnable,_n as trashAgo,hn as trashDaysLeft,Q as trashMerge,gn as trashRestore};