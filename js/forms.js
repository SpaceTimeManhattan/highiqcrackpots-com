function initForm(c){var f=document.getElementById(c.id),fb=document.getElementById("fallback");
var q=new URLSearchParams(location.search).get("offer");if(q)f.querySelectorAll('[name=offer]').forEach(function(i){if(i.value===q)i.checked=true});
function val(n){var els=f.querySelectorAll('[name="'+n+'"]');if(els.length>1||(els[0]&&(els[0].type=="checkbox"||els[0].type=="radio"))){return Array.prototype.filter.call(els,function(e){return e.checked}).map(function(e){return e.value}).join(", ")}return els[0]?els[0].value.trim():""}
function url(){var b=c.fields.map(function(x){return x[0]+": "+val(x[1])}).join("\n\n");return "mailto:info@HighIqCrackpots.com?subject="+encodeURIComponent(c.subject)+"&body="+encodeURIComponent(b)}
f.addEventListener("input",function(){fb.href=url()});f.addEventListener("change",function(){fb.href=url()});
f.addEventListener("submit",function(e){e.preventDefault();var miss=c.required.filter(function(n){return!val(n)});
var em=val("email");if(em&&!/^\S+@\S+\.\S+$/.test(em))miss.push("valid email");
if(c.attCount&&f.querySelectorAll('[name=att]:checked').length<c.attCount)miss.push("all attestations");
if(miss.length){document.getElementById("err").textContent="Please complete: "+miss.join(", ");return}
location.href=url();setTimeout(function(){location.href="thanks.html"},1500)});}
