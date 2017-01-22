$(document).ready(function(){

    // var basket = [] ;

    $('#button').click(function(){




        //$('.list').addClass('.item')
        var toAdd = $("input[name=checkListItem]").val();
        $('.list').append('<li><div class="item">' + toAdd + '</div></li>');

        });
});

$(document).on('click', '.item', function() {

        
            $(this).remove();

});


