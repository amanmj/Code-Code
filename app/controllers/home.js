// var mongoose = require('mongoose').db,
//   Article = db.models.article;

exports.index = function(req, res){
  // Article.find(function(err, articles){
  //   if(err) throw new Error(err);
  //   res.render('home/index', {
  //     title: 'Generator-Express MVC',
  //     //articles: articles
  //   });
  // })
  // });
  res.render('home/index', {
    title: 'Generator-Express MVC',
    errors:req.flash('error'),
    notify:req.flash('notify')
    //articles: articles
  });
};
