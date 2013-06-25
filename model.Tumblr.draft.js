addAround(Tumblr, 'appendTags', function(proceed, args){
  proceed(args);

  args[0]['post[state]'] = '1';
});
