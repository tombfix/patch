Actions.register({
	name : 'Readability - Read Now',
	type : 'context',
	icon : Readability.ICON,
	execute : ctx => {
		Readability.queue(ctx.href, true).addCallback(({response : doc}) => {
			ctx.browser.loadURI(doc.URL, createURI(ctx.href));
		});
	}
}, '----');
