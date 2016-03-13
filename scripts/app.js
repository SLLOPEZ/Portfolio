var projects = [];

function Project(projectObj) {
  this.title = projectObj.title;
  this.author = projectObj.author;
  this.publishedOn = projectObj.publishedOn;
  this.category = projectObj.category;
  this.body = projectObj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.attr('data-category', this.category);
  $newProject.find('h3').text(this.title);
  $newProject.find('section.project-body').html(this.body);
  $newProject.find('time[pubdate]').html(this.publishedOn);
  $newProject.removeClass('template');
  return $newProject;
};

projectData.sort(function(a,b){
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele){
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#project').append(a.toHtml());
});
