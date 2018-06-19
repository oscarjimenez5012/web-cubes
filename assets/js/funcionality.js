/**
 * Created by oscar on 25/11/15.
 */


function infoCube(id, color){
    $('.cube').css('color', '');
    $('#'+id).css('color', color);
    $(this).css('background', color);
};

function ocultarCubo1(){
    $('#cube_1').hide();
};
function mostrarCubo1(){
    $('#cube_1').show();
};
function ocultarCubo2(){
    $('#cube_2').hide();
};
function mostrarCubo2(){
    $('#cube_2').show();
};
function toggleCubo3(){
    $('#cube_3').toggle();
};
function mostrarCubo3(){
    $('#cube_3').show();
};
