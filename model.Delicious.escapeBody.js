addBefore(Delicious, 'post', function(ps){
  if (ps.body) {
    ps.body = escapeHTML(ps.body);
  }
});
