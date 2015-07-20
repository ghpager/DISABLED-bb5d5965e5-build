/**
* @version		$Id: modal.js 5263 2006-10-02 01:25:24Z webImagery $
* @copyright	Copyright (C) 2005 - 2008 Open Source Matters. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* Joomla! is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
var JCaption=new Class({initialize:function(t){this.selector=t;var e=$$(t);e.each(function(t){this.createCaption(t)},this)},createCaption:function(t){var e=document.createTextNode(t.title),i=document.createElement("div"),a=document.createElement("p"),n=t.getAttribute("width"),c=t.getAttribute("align");n||(n=t.width),a.appendChild(e),t.parentNode.insertBefore(i,t),i.appendChild(t),""!=t.title&&i.appendChild(a),i.className=this.selector.replace(".","_"),i.className=i.className+" "+c,i.setAttribute("style","float:"+c),i.style.width=n+"px"}});document.caption=null,window.addEvent("load",function(){var t=new JCaption("img.caption");document.caption=t});