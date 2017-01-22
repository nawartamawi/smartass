$(document).ready(function(){

    $('#button').click(function(){




        //$('.list').addClass('.item')
        var toAdd = $("input[name=checkListItem]").val();
        $('.list').append('<div class="item">' + toAdd + '</div>');

        });

    $(document).ready( 'click', '.item', function() {

        $(".item").remove();
        });




    });
