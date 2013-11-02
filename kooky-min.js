(function(){if(document.body==null){window.onload=arguments.callee;return}var containerID="__veeenu_kooky"+(new Date).getTime();var container=document.createElement("div");container.id=containerID;console.log(container.constructor);var table=document.createElement("table");container.appendChild(table);var style=document.createElement("style");style.appendChild(document.createTextNode(""));document.head.appendChild(style);style.sheet.addRule("#"+containerID,"position: fixed !important; border-radius: 2px !important; z-index: 4294967296;"+"background-color: rgba(33, 33, 33, 0.9) !important; top: 16px !important; right: 16px !important;"+"position: fixed !important; width: 240px !important; height: 120px !important; overflow-y: scroll !important;"+"overflow-x: hidden !important;"+'font-family: "Menlo", courier, monospace !important;');style.sheet.addRule("#"+containerID+" a.close","position: fixed !important; top: 8px !important; right: 8px !important; height: 16px !important; width: 16px !important;"+"background: rgba(255, 128, 128, 1) !important; border-radius: 9999px !important;"+"text-align: center !important; line-height: 16px !important; font-size: 12px !important;"+"font-weight: bold !important; color: rgba(255,255,255,1) !important;"+"border: 1px solid rgba(255, 196, 196, 1) !important; cursor: pointer !important;");style.sheet.addRule("#"+containerID+" table","width: 100% !important; text-align: center !important; border: 0 !important;");style.sheet.addRule("#"+containerID+" table > tr","padding: 0 !important; margin: 0 !important;");style.sheet.addRule("#"+containerID+" table > tr > td","padding: 0 !important; margin: 0 !important;");style.sheet.addRule("#"+containerID+" table > tr > td > input","width: 90% !important; border: 0 !important; color: rgba(228, 228, 228, 1) !important;"+"background: rgba(33, 33, 33, 0.6) !important;"+"padding: 0 0.3em !important; line-height: 1.5em !important; font-size: 12px !important; border-radius: 2px !important;");var keyInChangeListener=function(ki,vi){return function(evt){evt.preventDefault();evt.stopPropagation();document.cookie=ki.oldValue+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";if(vi.value!=""&&ki.value!=""){document.cookie=ki.value+"="+vi.value}else{var tr=ki.parentNode.parentNode;try{tr.parentNode.removeChild(tr)}catch(exc){}}}};var valInChangeListener=function(ki,vi){return function(evt){if(vi.value!=""&&ki.value!=""){document.cookie=ki.value+"="+vi.value}else{document.cookie=ki.oldValue+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";var tr=ki.parentNode.parentNode;tr.parentNode.removeChild(tr)}}};var createRow=function(key,value){var tr=document.createElement("tr");var td1=document.createElement("td");var keyIn=document.createElement("input");keyIn.type="text";keyIn.value=key;td1.appendChild(keyIn);var td2=document.createElement("td");var valIn=document.createElement("input");valIn.type="text";valIn.value=value;td2.appendChild(valIn);tr.appendChild(td1);tr.appendChild(td2);keyIn.addEventListener("focus",function(evt){this.oldValue=this.value});keyIn.addEventListener("change",keyInChangeListener(keyIn,valIn));valIn.addEventListener("change",valInChangeListener(keyIn,valIn));return tr};var close=document.createElement("a");close.className="close";close.appendChild(document.createTextNode("×"));close.addEventListener("click",function(evt){evt.preventDefault();evt.stopPropagation();container.parentNode.removeChild(container)});container.appendChild(close);var cookies=document.cookie.split(";");for(var i in cookies){cookies[i]=cookies[i].trim();var key=cookies[i].replace(/^([^=]+)=.*$/,"$1");var val=cookies[i].replace(/^[^=]+=(.*)$/,"$1");table.appendChild(createRow(key,val))}(function(table){var tr=document.createElement("tr");var td1=document.createElement("td");var keyIn=document.createElement("input");keyIn.type="text";keyIn.placeholder="New key";td1.appendChild(keyIn);var td2=document.createElement("td");var valIn=document.createElement("input");valIn.type="text";valIn.placeholder="New value";td2.appendChild(valIn);tr.appendChild(td1);tr.appendChild(td2);table.appendChild(tr);var enterListener=function(ki,vi,tr,table){return function(evt){if(evt.which==13){document.cookie=ki.value+"="+vi.value;table.insertBefore(createRow(ki.value,vi.value),tr);ki.value=vi.value="";table.parentNode.scrollTop=table.parentNode.scrollHeight;ki.focus()}}}(keyIn,valIn,tr,table);keyIn.addEventListener("keyup",enterListener);valIn.addEventListener("keyup",enterListener)})(table);document.body.appendChild(container)})();