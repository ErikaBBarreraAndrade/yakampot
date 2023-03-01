/*MODAL DE TALLAS*/
$(".option-size").click(function() {
  $(".option-size").removeClass("active-size");
  $(this).addClass("active-size");
  $(".option-size").each(function( index ) {
    var classActive = $(this).data("selsize");
    $("."+classActive).removeClass("active-option");
  });
  var classActive = $(this).data("selsize");
  $("."+classActive).addClass("active-option");
  $("."+classActive).each(function(index) {
    if($(this).data("size") !== 'undefined' & $(this).data("bloque") !== 'undefined'){
      $('#imgManiqui').find("#bloque_"+$(this).data("bloque")).find("#medida_numeros").children().children().first().text($(this).data("size"));
      $('#imgManiqui').find("#bloque_"+$(this).data("bloque")).find("#medida_numeros").children().children().next().css("font-size", "14px");;
    }
  });
});

$(document).ready(function(){
  //Redo XML
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
  
  function disableTag(line){
    $('#imgManiqui').find("#linea_"+line).addClass("collapse");
  }
  
  function assignClick(divAssign){
    $('#imgManiqui').find("#linea_"+divAssign).css("cursor", "pointer");
    $('#imgManiqui').find("#linea_"+divAssign).click(function() {
      $('#imgManiqui').find("#bloque_pecho").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_cintura").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_cadera").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_ancho").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_mangas").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_punio").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_escote").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_tiro").find("#bloque_informacion").addClass("collapse");
      $('#imgManiqui').find("#bloque_largo").find("#bloque_informacion").addClass("collapse");
      
      $('#imgManiqui').find("#bloque_pecho").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_cintura").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_cadera").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_ancho").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_mangas").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_punio").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_escote").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_tiro").find("#medida_numeros").addClass("collapse");
      $('#imgManiqui').find("#bloque_largo").find("#medida_numeros").addClass("collapse");
      
      $('#imgManiqui').find("#bloque_pecho").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_cintura").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_cadera").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_ancho").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_mangas").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_punio").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_escote").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_tiro").removeClass("actived-size");
      $('#imgManiqui').find("#bloque_largo").removeClass("actived-size");
      
      $(this).parent().find("#bloque_informacion").removeClass("collapse");
      $(this).parent().find("#medida_numeros").removeClass("collapse");
      $(this).parent().addClass("actived-size");
    });
  }
  
  function draw_map(){
    if(arrTallas['pecho'].length == 0){ disableTag('pecho'); }
    if(arrTallas['cintura'].length == 0){ disableTag('cintura'); }
    if(arrTallas['cadera'].length == 0){ disableTag('cadera'); }
    if(arrTallas['ruedo'].length == 0){ disableTag('ancho'); }
    if(arrTallas['manga'].length == 0){ disableTag('mangas'); }
    if(arrTallas['puno'].length == 0){ disableTag('punio'); }
    if(arrTallas['escote'].length == 0){ disableTag('escote'); }
    if(arrTallas['tiro'].length == 0){ disableTag('tiro'); }
    if(arrTallas['largo'].length == 0){ disableTag('largo'); }
    
    if(arrTallas['pecho'].length > 0){ assignClick('pecho'); }
    if(arrTallas['cintura'].length > 0){ assignClick('cintura'); }
    if(arrTallas['cadera'].length > 0){ assignClick('cadera'); }
    if(arrTallas['ruedo'].length > 0){ assignClick('ancho'); }
    if(arrTallas['manga'].length > 0){ assignClick('mangas'); }
    if(arrTallas['puno'].length > 0){ assignClick('punio'); }
    if(arrTallas['escote'].length > 0){ assignClick('escote'); }
    if(arrTallas['tiro'].length > 0){ assignClick('tiro'); }
    if(arrTallas['largo'].length > 0){ assignClick('largo'); }
  }
  window.setTimeout( draw_map, 800 ); // 5 seconds
});