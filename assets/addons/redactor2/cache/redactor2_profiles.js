var redactorSetup = false;
function redactorInit() {
var Editor = null;
var Editor = $('.redactorEditor2-full');
if (redactorSetup == true && Editor.parent().is('.redactor-box')) {
  Editor.each(function() {
    $(this).insertBefore($(this).parent()).next().remove();
  });
}
Editor.redactor({
  initCallback: function() {
    redactorSetup = true;
  },
  lang: 'de',
  minHeight: 300,
  maxHeight: 800,
  urltype: 'relative',
  toolbarFixed: false,
  shortcuts: false,
  imageTag: '',
buttons: [],
plugins: ['limiter','alignment','blockquote','bold','cleaner','clips','deleted','emaillink','externallink','fontcolor','fontfamily','fontsize','fullscreen','groupheading','grouplink','grouplist','heading1','heading2','heading3','heading4','heading5','heading6','horizontalrule','internallink','italic','media','medialink','orderedlist','paragraph','properties','redo','source','styles','sub','sup','table','textdirection','underline','undo','unorderedlist'],
clips: [['Snippetname1', 'Snippettext1'],['Snippetname2', 'Snippettext2'],],
fontcolor: [['Weiss', '#ffffff'],['Schwarz', '#000000'],],
fontfamily: ['Arial','Times',],
fontsize: ['12px','15pt','120%',],
groupheading: ['1','2','3','4','5','6',],
grouplink: ['email','external','internal','media',],
grouplist: ['unorderedlist','orderedlist','indent','outdent',],
styles: [['code', 'Code'],['kbd', 'Shortcut'],['mark', 'Markiert'],['samp', 'Sample'],['var', 'Variable'],],
});
var Editor = $('.redactorEditor2-min');
if (redactorSetup == true && Editor.parent().is('.redactor-box')) {
  Editor.each(function() {
    $(this).insertBefore($(this).parent()).next().remove();
  });
}
Editor.redactor({
  initCallback: function() {
    redactorSetup = true;
  },
  lang: 'de',
  minHeight: 300,
  maxHeight: 800,
  urltype: 'relative',
  toolbarFixed: true,
  shortcuts: true,
  imageTag: '',
buttons: [],
plugins: ['limiter','bold','cleaner','deleted','emaillink','externallink','grouplink','internallink','italic','medialink','orderedlist','sub','sup','unorderedlist','source'],
grouplink: ['email','external','internal','media',],
});
}
$(document).on('ready pjax:success',function() {
  redactorInit();
});