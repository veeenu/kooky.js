/**
 * Kooky.js
 * Copyright (C) 2013 Andrea Venuta (http://github.com/veeenu)
 */
(function() {

  /**
   * If the document hasn't already been created, return, wait for the
   * window to be loaded and run again.
   */
  if(document.body == null) {
    window.onload = arguments.callee;
    return;
  }

  // Create an unique ID
  var containerID = '__veeenu_kooky' + (new Date()).getTime();
  
  // Create the fundamental DOM elements
  var container = document.createElement('div');
  container.id = containerID;
  
  var table = document.createElement('table');
  container.appendChild(table);

  // Create a stylesheet
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);

  style.sheet.addRule('#' + containerID,
    'position: fixed !important; border-radius: 2px !important; z-index: 4294967296;'+
    'background-color: rgba(33, 33, 33, 0.9) !important; top: 16px !important; right: 16px !important;'+
    'position: fixed !important; width: 240px !important; height: 120px !important; overflow-y: scroll !important;'+
    'overflow-x: hidden !important;, display: block; opacity: 1; visibility: visible;'+
    'font-family: "Menlo", courier, monospace !important;');
  style.sheet.addRule('#' + containerID + ' a.close',
    'position: fixed !important; top: 8px !important; right: 8px !important; height: 16px !important; width: 16px !important;'+
    'background: rgba(255, 128, 128, 1) !important; border-radius: 9999px !important;'+
    'text-align: center !important; line-height: 16px !important; font-size: 12px !important;'+
    'font-weight: bold !important; color: rgba(255,255,255,1) !important;'+
    'border: 1px solid rgba(255, 196, 196, 1) !important; cursor: pointer !important;');
  style.sheet.addRule('#' + containerID + ' table', 
    'width: 100% !important; text-align: center !important; border: 0 !important;');
  style.sheet.addRule('#' + containerID + ' table > tr',
    'padding: 0 !important; margin: 0 !important;');
  style.sheet.addRule('#' + containerID + ' table > tr > td',
    'padding: 0 !important; margin: 0 !important;');
  style.sheet.addRule('#' + containerID + ' table > tr > td > input',
    'width: 90% !important; border: 0 !important; color: rgba(228, 228, 228, 1) !important;'+
    'background: rgba(33, 33, 33, 0.6) !important;'+
    'padding: 0 0.3em !important; line-height: 1.5em !important; font-size: 12px !important; border-radius: 2px !important;');

  /**
   * This is the common behavior for input boxes representing keys.
   * We delete the cookie named like the previous value of the field
   * and create a new one named like the new value of the field.
   */
  var keyInChangeListener = (function(ki, vi) { return function(evt) {
      
    evt.preventDefault();
    evt.stopPropagation();

    // Delete the old cookie
    document.cookie = ki.oldValue + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    // If there are sound values, set a new cookie, else ignore and remove the row
    if(vi.value != '' && ki.value != '') {
      document.cookie = ki.value + '=' + vi.value;
    } else {
      var tr = ki.parentNode.parentNode;
      try { 
        tr.parentNode.removeChild(tr); 
      } catch(exc) {
      }
    }

  }});

  /**
   * This is the common behavior for input boxes representing cookie values.
   * Set the new value for the specified key if it's not empty, remove the
   * cookie otherwise.
   */
  var valInChangeListener = (function(ki, vi) { return function(evt) {
    
    if(vi.value != '' && ki.value != '') {
      document.cookie = ki.value + '=' + vi.value;
    } else {
      document.cookie = ki.oldValue + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      var tr = ki.parentNode.parentNode;
      tr.parentNode.removeChild(tr);
    }

  }});

  /**
   * Create a new row (hence a new cookie)
   */
  var createRow = function(key, value) {
    var tr = document.createElement('tr');
      var td1 = document.createElement('td');
        var keyIn = document.createElement('input');
        keyIn.type = 'text';
        keyIn.value = key;
        td1.appendChild(keyIn);
      var td2 = document.createElement('td');
        var valIn = document.createElement('input');
        valIn.type = 'text';
        valIn.value = value;
        td2.appendChild(valIn);
      tr.appendChild(td1);
      tr.appendChild(td2);

    // Append the common event listeners
    keyIn.addEventListener('focus', function(evt) {
      this.oldValue = this.value;
    });

    keyIn.addEventListener('change', keyInChangeListener(keyIn, valIn));
    valIn.addEventListener('change', valInChangeListener(keyIn, valIn));
    return tr;
  }

  // Create the closing button
  var close = document.createElement('a');
  close.className = 'close';
  close.appendChild(document.createTextNode("\u00D7"));
  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    container.parentNode.removeChild(container);
  });
  container.appendChild(close);

  // Parse the cookies
  var cookies = document.cookie.split(';');
  for(var i in cookies) {
    cookies[i] = cookies[i].trim();
    var key = cookies[i].replace(/^([^=]+)=.*$/, '$1');
    var val = cookies[i].replace(/^[^=]+=(.*)$/, '$1');
    table.appendChild(createRow(key, val));
  }

  // Isolate the table initialization in a closure
  (function(table) {
    var tr = document.createElement('tr');
      var td1 = document.createElement('td');
        var keyIn = document.createElement('input');
        keyIn.type = 'text';
        keyIn.placeholder = 'New key';
        td1.appendChild(keyIn);
      var td2 = document.createElement('td');
        var valIn = document.createElement('input');
        valIn.type = 'text';
        valIn.placeholder = 'New value';
        td2.appendChild(valIn);
      tr.appendChild(td1);
      tr.appendChild(td2);
    table.appendChild(tr);

    // Listen to `enter` keypresses, same behavior for both inputs.
    var enterListener = (function(ki, vi, tr, table) { return function(evt) {

      if(evt.which == 13) {
        document.cookie = ki.value + '=' + vi.value;
        table.insertBefore(createRow(ki.value, vi.value), tr);
        ki.value = vi.value = '';
        table.parentNode.scrollTop = table.parentNode.scrollHeight;
        ki.focus();
      }

    }}(keyIn, valIn, tr, table));

    keyIn.addEventListener('keyup', enterListener);
    valIn.addEventListener('keyup', enterListener);
  }(table));

  document.body.appendChild(container);

}());
