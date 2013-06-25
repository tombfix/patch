addBefore(Tumblr, 'appendTags', function(form, ps){
	// photoだけqueueに送る。
	if(ps.type == 'photo') {
		form['post[state]'] = 2;
	}
});

