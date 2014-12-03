Actions.register({
  name : 'Send to Instapaper',
  type : 'context',
  icon : Instapaper.ICON,
  execute : function (ctx) {
    return Instapaper.post(ctx.onLink ? {
      item    : ctx.link.textContent,
      itemUrl : ctx.link.href
    } : {
      item    : ctx.title,
      itemUrl : ctx.href
    });
  }
}, '----');
