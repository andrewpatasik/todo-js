(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var a=e(n);return!isNaN(a)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var i,o={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=r.width?String(r.width):t.defaultWidth;a=t.values[s]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=a.match(o);if(!u)return null;var s,c=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(c))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(c))return n}(d),s=t.valueCallback?t.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(c.length)}}}const d={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(t,e,n,a){return u[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(i.matchPattern);if(!r)return null;var o=r[0],u=n.match(i.parsePattern);if(!u)return null;var s=i.valueCallback?i.valueCallback(u[0]):u[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(o.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(n,a){t(2,arguments);var r=e(n).getTime(),i=l(a);return new Date(r+i)}function f(e,n){t(2,arguments);var a=l(n);return h(e,-a)}function m(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const g=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return m("yy"===e?a%100:a,e.length)},w=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):m(n+1,2)},v=function(t,e){return m(t.getUTCDate(),e.length)},b=function(t,e){return m(t.getUTCHours()%12||12,e.length)},y=function(t,e){return m(t.getUTCHours(),e.length)},p=function(t,e){return m(t.getUTCMinutes(),e.length)},C=function(t,e){return m(t.getUTCSeconds(),e.length)},T=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return m(Math.floor(a*Math.pow(10,n-3)),e.length)};var k=864e5;function M(n){t(1,arguments);var a=1,r=e(n),i=r.getUTCDay(),o=(i<a?7:0)+i-a;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function x(n){t(1,arguments);var a=e(n),r=a.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=M(i),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=M(u);return a.getTime()>=o.getTime()?r+1:a.getTime()>=s.getTime()?r:r-1}function D(e){t(1,arguments);var n=x(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=M(a);return r}var P=6048e5;function E(n,a){t(1,arguments);var r=a||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:l(o),s=null==r.weekStartsOn?u:l(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=e(n),d=c.getUTCDay(),h=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function S(n,a){t(1,arguments);var r=e(n,a),i=r.getUTCFullYear(),o=a||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:l(s),d=null==o.firstWeekContainsDate?c:l(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,d),h.setUTCHours(0,0,0,0);var f=E(h,a),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var g=E(m,a);return r.getTime()>=f.getTime()?i+1:r.getTime()>=g.getTime()?i:i-1}function U(e,n){t(1,arguments);var a=n||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:l(i),u=null==a.firstWeekContainsDate?o:l(a.firstWeekContainsDate),s=S(e,n),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=E(c,n);return d}var W=6048e5;function L(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+m(i,2)}function Y(t,e){return t%60==0?(t>0?"-":"+")+m(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+m(Math.floor(r/60),2)+n+m(r%60,2)}const O={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return g(t,e)},Y:function(t,e,n,a){var r=S(t,a),i=r>0?r:1-r;return"YY"===e?m(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):m(i,e.length)},R:function(t,e){return m(x(t),e.length)},u:function(t,e){return m(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return m(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return m(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return w(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return m(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(n,a,r,i){var o=function(n,a){t(1,arguments);var r=e(n),i=E(r,a).getTime()-U(r,a).getTime();return Math.round(i/W)+1}(n,i);return"wo"===a?r.ordinalNumber(o,{unit:"week"}):m(o,a.length)},I:function(n,a,r){var i=function(n){t(1,arguments);var a=e(n),r=M(a).getTime()-D(a).getTime();return Math.round(r/P)+1}(n);return"Io"===a?r.ordinalNumber(i,{unit:"week"}):m(i,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):v(t,e)},D:function(n,a,r){var i=function(n){t(1,arguments);var a=e(n),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var i=a.getTime(),o=r-i;return Math.floor(o/k)+1}(n);return"Do"===a?r.ordinalNumber(i,{unit:"dayOfYear"}):m(i,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return m(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return m(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return m(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return b(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):m(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):p(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C(t,e)},S:function(t,e){return T(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Y(r);case"XXXX":case"XX":return q(r);case"XXXXX":case"XXX":default:return q(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return Y(r);case"xxxx":case"xx":return q(r);case"xxxxx":case"xxx":default:return q(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(r,":");case"OOOO":default:return"GMT"+q(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(r,":");case"zzzz":default:return"GMT"+q(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return m(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return m((a._originalDate||t).getTime(),e.length)}};function N(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function A(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const H={p:A,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return N(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",N(r,e)).replace("{{time}}",A(i,e))}};var z=6e4;function j(t){return t.getTime()%z}function X(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var a=n>0?(z+j(e))%z:j(e);return n*z+a}var F=["D","DD"],Q=["YY","YYYY"];function B(t){return-1!==F.indexOf(t)}function G(t){return-1!==Q.indexOf(t)}function I(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function $(t){return t.match(_)[1].replace(V,"'")}function Z(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var tt=document.getElementById("wrapper");function et(){return{createDiv:function(t,e){var n=document.createElement("div");return n.setAttribute("id",t),n.classList.add(e),n},createHeading:function(t,e){if("h1"===t){var n=document.createElement("h1");return n.textContent=e,n}if("h2"===t){var a=document.createElement("h2");return a.textContent=e,a}if("h3"===t){var r=document.createElement("h3");return r.textContent=e,r}},createInput:function(t,e,n){var a=document.createElement("input");return a.setAttribute("type",t),a.setAttribute("name",e),a.setAttribute("id",n),a},createImage:function(t,e,n){var a=document.createElement("img");return a.setAttribute("id",t),a.setAttribute("src",e),a.setAttribute("alt",n),a},createList:function(t){var e=document.createElement("ul");return e.setAttribute("id",t),e},createItem:function(t,e,n){var a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),u=document.createElement("div"),s=document.createElement("input"),c=document.createElement("img"),d=document.createElement("p");return a.classList.add(t),d.textContent=e,r.classList.add("task-due"),r.textContent=n,i.classList.add("del-task"),o.classList.add("edit-task"),u.classList.add("edit-col-container"),u.classList.add("hid"),s.setAttribute("type","text"),s.classList.add("task-edit-col"),c.setAttribute("src","./assets/material-icon-add.svg"),c.classList.add("save-task"),u.appendChild(s),u.appendChild(c),a.appendChild(d),a.appendChild(r),a.appendChild(i),a.appendChild(o),a.appendChild(u),a}}}!function(){var t=et().createHeading("h1","My Todo List"),e=et().createDiv("","create-new"),n=et().createDiv("list-container","task-list-container"),a=et().createInput("text","","new-task-col"),r=et().createImage("add-task","./assets/material-icon-add.svg","add"),i=et().createList("task-list");tt.appendChild(t),tt.appendChild(e),e.appendChild(a),e.appendChild(r),tt.appendChild(e),n.appendChild(i),tt.appendChild(n)}();var nt=[],at=document.querySelector("#add-task"),rt=document.getElementById("task-list"),it=document.querySelector("#new-task-col"),ot=1;function ut(){if(""!==it.value){var t=new st(ot,it.value,!1);nt.push(t),ct(nt),it.value="",it.focus(),ot++}else alert("should add task")}var st=function(){function a(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),this.id=t,this.task=e,this.timeStamp=this.setTimeStamp()}var r,i;return r=a,(i=[{key:"setTimeStamp",value:function(){return function(a,r,i){t(2,arguments);var o=String(r),u=i||{},s=u.locale||d,c=s.options&&s.options.firstWeekContainsDate,h=null==c?1:l(c),m=null==u.firstWeekContainsDate?h:l(u.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=s.options&&s.options.weekStartsOn,w=null==g?0:l(g),v=null==u.weekStartsOn?w:l(u.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var b=e(a);if(!n(b))throw new RangeError("Invalid time value");var y=X(b),p=f(b,y),C={firstWeekContainsDate:m,weekStartsOn:v,locale:s,_originalDate:b};return o.match(J).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,s.formatLong,C):t})).join("").match(R).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return $(t);var n=O[e];if(n)return!u.useAdditionalWeekYearTokens&&G(t)&&I(t,r,a),!u.useAdditionalDayOfYearTokens&&B(t)&&I(t,r,a),n(p,t,s.localize,C);if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}(new Date,"iiii, HH:mm")}}])&&Z(r.prototype,i),a}();function ct(t){!function(){for(;rt.firstChild;)rt.removeChild(rt.firstChild)}();for(var e=0;e<nt.length;e++){var n=t[e].id,a=t[e].task,r=t[e].timeStamp,i=et().createItem("task-item",a,r);i.setAttribute("id","task-"+n),rt.appendChild(i),console.log(t)}}function dt(t){var e=document.querySelectorAll(".task-item"),n=document.querySelectorAll(t),a=document.querySelectorAll(".task-edit-col");if(".edit-task"===t)for(var r=function(t){n[t].addEventListener("click",(function(){e[t].firstChild.classList.add("hid"),e[t].childNodes[4].classList.remove("hid")}))},i=0;i<n.length;i++)r(i);else if(".save-task"===t)for(var o=function(t){n[t].addEventListener("click",(function(){nt[t].task=a[t].value,console.log("item has been edited"),ct(nt),e[t].firstChild.classList.remove("hid"),e[t].childNodes[4].classList.add("hid")}))},u=0;u<n.length;u++)o(u)}it.addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),ut())})),at.addEventListener("click",(function(){ut()})),rt.addEventListener("click",(function(t){var e=t.target.className;if("del-task"===e)for(var n=document.querySelectorAll(".del-task"),a=function(t){n[t].addEventListener("click",(function(){nt.splice(t,1),console.log("item has been deleted"),ct(nt)}))},r=0;r<n.length;r++)a(r);else"edit-task"===e?dt(".edit-task"):"save-task"===e&&dt(".save-task")}),!0)})();