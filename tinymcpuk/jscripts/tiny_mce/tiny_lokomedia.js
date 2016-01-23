tinyMCE.init({
mode : "exact",
elements : "loko",
theme : "advanced",

plugins : "youtubeIframe,advcode,syntaxhl,pagebreak,style,layer,table,save,advhr,advimage,advlink,insertdatetime,preview,searchreplace,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,inlinepopups,autosave,print,media",

// Theme options
theme_advanced_buttons1 : "save,|,newdocument,|,bold,|,italic,|,underline,|,strikethrough,|,blockquote,|,justifyleft,|,justifycenter,|,justifyright,|,justifyfull,|,bullist,|,numlist,|,link,|,unlink,|,image,|,inserttime,|,media,|,ltr,|,rtl",
theme_advanced_buttons2 : "tablecontrols,|,charmap,|,hr,|,undo,|,redo,|,preview,|,sub,|,sup,|,pagebreak,|,nonbreaking,|,fullscreen",
theme_advanced_buttons3 : "forecolor,|,backcolor,fontselect,fontsizeselect,styleselect,|,search,|,replace,|,cut,|,copy,|,paste,|,youtubeIframe,|,advcode,|,syntaxhl",
theme_advanced_toolbar_location : "top",
theme_advanced_toolbar_align : "left",
theme_advanced_statusbar_location : "bottom",
file_browser_callback : 'openKCFinder',
theme_advanced_resizing : true,
valid_elements : ''
+'a[accesskey|charset|class|coords|dir<ltr?rtl|href|hreflang|id|lang|name'
+'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev'
+'|shape<circle?default?poly?rect|style|tabindex|title|target|type],'
+'abbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'acronym[class|dir<ltr?rtl|id|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'address[class|align|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'applet[align<bottom?left?middle?right?top|alt|archive|class|code|codebase'
+'|height|hspace|id|name|object|style|title|vspace|width],'
+'area[accesskey|alt|class|coords|dir<ltr?rtl|href|id|lang|nohref<nohref'
+'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup'
+'|shape<circle?default?poly?rect|style|tabindex|title|target],'
+'article[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'aside[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'audio[autoplay|class|controls|dir<ltr?rtl|id|lang|loop|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|preload|src|style'
+'|title],'
+'base[href|target],'
+'basefont[color|face|id|size],'
+'bdo[class|dir<ltr?rtl|id|lang|style|title],'
+'big[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'blockquote[dir|style|cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
+'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
+'|onmouseover|onmouseup|style|title],'
+'body[alink|background|bgcolor|class|dir<ltr?rtl|id|lang|link|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|onunload|style|title|text|vlink],'
+'br[class|clear<all?left?none?right|id|style|title],'
+'button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur'
+'|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown'
+'|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type'
+'|value],'
+'canvas[class|dir<ltr?rtl|height|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title|width],'
+'caption[align<bottom?left?right?top|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'center[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'cite[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'code[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'col[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
+'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
+'|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title'
+'|valign<baseline?bottom?middle?top|width],'
+'colgroup[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl'
+'|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
+'|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title'
+'|valign<baseline?bottom?middle?top|width],'
+'command[class|dir<ltr?rtl|disabled|icon|id|label|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title|type],'
+'datalist[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'dd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
+'del[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'details[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|open|style'
+'|title],'
+'dfn[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'dir[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'div[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'dl[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'dt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
+'em/i[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'embed[class|dir<ltr?rtl|height|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|src|style'
+'|title|type|width],'
+'fieldset[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'figcaption[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'figure[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'footer[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'font[class|color|dir<ltr?rtl|face|id|lang|size|style|title],'
+'form[accept|accept-charset|action|class|dir<ltr?rtl|enctype|id|lang'
+'|method<get?post|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onreset|onsubmit'
+'|style|title|target],'
+'frame[class|frameborder|id|longdesc|marginheight|marginwidth|name'
+'|noresize<noresize|scrolling<auto?no?yes|src|style|title],'
+'frameset[class|cols|id|onload|onunload|rows|style|title],'
+'h1[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'h2[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'h3[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'h4[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'h5[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'h6[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'head[dir<ltr?rtl|lang|profile],'
+'header[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'hgroup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'hr[align<center?left?right|class|dir<ltr?rtl|id|lang|noshade<noshade|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|size|style|title|width],'
+'html[dir<ltr?rtl|lang|version],'
+'iframe[align<bottom?left?middle?right?top|class|frameborder|height|id'
+'|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style'
+'|title|width],'
+'img[align<bottom?left?middle?right?top|alt|border|class|dir<ltr?rtl|height'
+'|hspace|id|ismap<ismap|lang|longdesc|name|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|src|style|title|usemap|vspace|width],'
+'input[accept|accesskey|align<bottom?left?middle?right?top|alt|autocomplete|autofocus'
+'|checked<checked|class|dir<ltr?rtl|disabled<disabled|form|id|ismap<ismap|lang|list'
+'|max|maxlength|min|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect'
+'|pattern|placeholder|readonly<readonly|required<required|size|src|style|tabindex|title'
+'|type<button?checkbox?file?hidden?image?password?radio?reset?submit?text'
+'?datetime?datetime-local?date?month?time?week?number?range?email?url?search?tel?color'
+'|usemap|value],'
+'ins[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'isindex[class|dir<ltr?rtl|id|lang|prompt|style|title],'
+'kbd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'keygen[autofocus|challenge|class|dir<ltr?rtl|disabled<disabled|form|id|keytype|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'label[accesskey|class|dir<ltr?rtl|for|id|lang|onblur|onclick|ondblclick'
+'|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
+'|onmouseover|onmouseup|style|title],'
+'legend[align<bottom?left?right?top|accesskey|class|dir<ltr?rtl|id|lang'
+'|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'li[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type'
+'|value],'
+'link[charset|class|dir<ltr?rtl|href|hreflang|id|lang|media|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|rel|rev|style|title|target|type],'
+'map[class|dir<ltr?rtl|id|lang|name|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'mark[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'menu[class|compact<compact|dir<ltr?rtl|id|label|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title|type],'
+'meta[content|dir<ltr?rtl|http-equiv|lang|name|scheme],'
+'meter[class|dir<ltr?rtl|high|id|lang|low|max|min|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|optimum|style'
+'|title|value],'
+'nav[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'noframes[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'noscript[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'object[align<bottom?left?middle?right?top|archive|border|class|classid'
+'|codebase|codetype|data|declare|dir<ltr?rtl|height|hspace|id|lang|name'
+'|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|standby|style|tabindex|title|type|usemap'
+'|vspace|width],'
+'ol[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|start|style|title|type],'
+'optgroup[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'option[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick'
+'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
+'|onmouseover|onmouseup|selected<selected|style|title|value],'
+'output[class|dir<ltr?rtl|for|form|id|lang|name|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'p[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|style|title],'
+'param[id|name|type|value|valuetype<DATA?OBJECT?REF],'
+'pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|lang|onclick|ondblclick'
+'|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout'
+'|onmouseover|onmouseup|style|title|width],'
+'progress[class|dir<ltr?rtl|id|lang|max|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title|value],'
+'q[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'rp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'rt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'ruby[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'s[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
+'samp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'script[charset|defer|language|src|type],'
+'section[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'select[class|dir<ltr?rtl|disabled<disabled|id|lang|multiple<multiple|name'
+'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style'
+'|tabindex|title],'
+'small[class|dir<ltr?rtl|id|lang|media|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'source[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|src|style'
+'|title|type],'
+'span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'strike[class|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title],'
+'strong/b[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'style[dir<ltr?rtl|lang|media|title|type],'
+'sub[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'summary[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|open|style'
+'|title],'
+'sup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title],'
+'table[align<center?left?right|bgcolor|border|cellpadding|cellspacing|class'
+'|dir<ltr?rtl|frame|height|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules'
+'|style|summary|title|width],'
+'tbody[align<center?char?justify?left?right|char|class|charoff|dir<ltr?rtl|id'
+'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
+'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
+'|valign<baseline?bottom?middle?top],'
+'td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class'
+'|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup'
+'|style|title|valign<baseline?bottom?middle?top|width],'
+'textarea[accesskey|class|cols|dir<ltr?rtl|disabled<disabled|id|lang|name'
+'|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect'
+'|readonly<readonly|rows|style|tabindex|title],'
+'tfoot[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
+'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
+'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
+'|valign<baseline?bottom?middle?top],'
+'th[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class'
+'|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick'
+'|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove'
+'|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup'
+'|style|title|valign<baseline?bottom?middle?top|width],'
+'thead[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id'
+'|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown'
+'|onmousemove|onmouseout|onmouseover|onmouseup|style|title'
+'|valign<baseline?bottom?middle?top],'
+'time[class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|pubdate|style'
+'|title],'
+'title[dir<ltr?rtl|lang],'
+'tr[abbr|align<center?char?justify?left?right|bgcolor|char|charoff|class'
+'|rowspan|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title|valign<baseline?bottom?middle?top],'
+'tt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
+'u[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup'
+'|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title],'
+'ul[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown'
+'|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover'
+'|onmouseup|style|title|type],'
+'var[class|dir<ltr?rtl|height|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style],'
+'video[autoplay|class|controls|dir<ltr?rtl|id|lang|loop|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|preload|poster|src|style'
+'|title|width],'
+'wbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress'
+'|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style'
+'|title]'
});

function openKCFinder(field_name, url, type, win) {
    tinyMCE.activeEditor.windowManager.open({
        file: '../kcfinder/browse.php?opener=tinymce&type=' + type,
        title: 'KCFinder',
        width: 700,
        height: 500,
        resizable: "yes",
        inline: true,
        close_previous: "no",
        popup_css: false
    }, {
        window: win,
        input: field_name
    });
    return false;
}
