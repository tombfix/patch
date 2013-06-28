QuickPostForm.descriptionContextMenus.push({
  name : 'bit.ly',
  icon : models['bit.ly'].ICON,

  execute : function(elmText, desc){
    shortenUrls(desc.value, models['bit.ly']).addCallback(function(value){
      desc.value = value;
    });
  }
});
