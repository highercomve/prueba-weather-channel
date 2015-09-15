

$(function() {
  var cities = ['Santiago', 'Caracas', 'Bogota'];
  var template = $("#weathers-template").html();
  var template_para_rendizar = Handlebars.compile(template);
  var $weathers = $(".weathers");

  var cities_data = cities.map(function(city) {
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}`).success(function(data) {
      var weather = {
        name: data.name, 
        temp_min: data.main.temp_min, 
        temp_max: data.main.temp_max
      };
      var html_render = template_para_rendizar(weather);
      $weathers.append(html_render);
    });
  });

});

