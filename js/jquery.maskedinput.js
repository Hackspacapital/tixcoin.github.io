function getPasteEvent(){var a=document.createElement("input"),b="onpaste";return a.setAttribute(b,""),"function"===typeof a[b]?"paste":"input"}var pasteEventName=getPasteEvent()+".mask",ua=navigator.userAgent,iPhone=/iphone/i.test(ua),android=/android/i.test(ua),caretTimeoutId;$.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},$.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"===typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(a,b){var c,d,e,f,g,h;return!a&&this.length>0?(c=$(this[0]),c.data($.mask.dataName)()):(b=$.extend({placeholder:$.mask.placeholder,completed:null},b),d=$.mask.definitions,e=[],f=h=a.length,g=null,$.each(a.split(""),function(a,b){"?"==b?(h--,f=a):d[b]?(e.push(new RegExp(d[b])),null===g&&(g=e.length-1)):e.push(null)}),this.trigger("unmask").each(function(){function k(a){for(;++a<h&&!e[a];);return a}function l(a){for(;--a>=0&&!e[a];);return a}function m(a,d){var f,j;if(!(a<0)){for(f=a,j=k(d);f<h;f++)if(e[f]){if(!(j<h&&e[f].test(i[j])))break;i[f]=i[j],i[j]=b.placeholder,j=k(j)}r(),c.caret(Math.max(g,a))}}function n(a){var c,d,f,g;for(c=a,d=b.placeholder;c<h;c++)if(e[c]){if(f=k(c),g=i[c],i[c]=d,!(f<h&&e[f].test(g)))break;d=g}}function o(a){var d,e,f,b=a.which;8===b||46===b||iPhone&&127===b?(d=c.caret(),e=d.begin,f=d.end,f-e===0&&(e=46!==b?l(e):f=k(e-1),f=46===b?k(f):f),q(e,f),m(e,f-1),a.preventDefault()):27==b&&(c.val(j),c.caret(0,s()),a.preventDefault())}function p(a){var g,j,l,d=a.which,f=c.caret();a.ctrlKey||a.altKey||a.metaKey||d<32||d&&(f.end-f.begin!==0&&(q(f.begin,f.end),m(f.begin,f.end-1)),g=k(f.begin-1),g<h&&(j=String.fromCharCode(d),e[g].test(j)&&(n(g),i[g]=j,r(),l=k(g),android?setTimeout($.proxy($.fn.caret,c,l),0):c.caret(l),b.completed&&l>=h&&b.completed.call(c))),a.preventDefault())}function q(a,c){var d;for(d=a;d<c&&d<h;d++)e[d]&&(i[d]=b.placeholder)}function r(){c.val(i.join(""))}function s(a){var k,l,d=c.val(),j=-1;for(k=0,pos=0;k<h;k++)if(e[k]){for(i[k]=b.placeholder;pos++<d.length;)if(l=d.charAt(pos-1),e[k].test(l)){i[k]=l,j=k;break}if(pos>d.length)break}else i[k]===d.charAt(pos)&&k!==f&&(pos++,j=k);return a?r():j+1<f?(c.val(""),q(0,h)):(r(),c.val(c.val().substring(0,j+1))),f?k:g}var c=$(this),i=$.map(a.split(""),function(a){return"?"!=a?d[a]?b.placeholder:a:void 0}),j=c.val();c.data($.mask.dataName,function(){return $.map(i,function(a,c){return e[c]&&a!=b.placeholder?a:null}).join("")}),c.attr("readonly")||c.one("unmask",function(){c.unbind(".mask").removeData($.mask.dataName)}).bind("focus.mask",function(){clearTimeout(caretTimeoutId);var b;j=c.val(),b=s(),caretTimeoutId=setTimeout(function(){r(),b==a.length?c.caret(0,b):c.caret(b)},10)}).bind("blur.mask",function(){s(),c.val()!=j&&c.change()}).bind("keydown.mask",o).bind("keypress.mask",p).bind(pasteEventName,function(){setTimeout(function(){var a=s(!0);c.caret(a),b.completed&&a==c.val().length&&b.completed.call(c)},0)}),s()}))}});