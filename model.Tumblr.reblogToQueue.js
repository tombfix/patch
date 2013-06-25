addBefore(Tumblr, 'appendTags', function(form, ps){
	// リブログのときだけqueueに送る。
	if(!!ps.favorite) {
		form['post[state]'] = 2;
	}
});
