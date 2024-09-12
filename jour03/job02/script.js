$(document).ready(function() {
    $('#melanger').click(function() {
        var container = $('#container');
        var images = container.children();
        images = images.sort(function() { return 0.5 - Math.random(); });
        container.empty();
        images.each(function() {
            container.append($(this));
        });
    });

    $('img').on('dragstart', function(event) {
        event.originalEvent.dataTransfer.setData("text", event.target.id);
    });

    $('.drop-area').on('dragover', function(event) {
        event.preventDefault();
    });

    $('.drop-area').on('drop', function(event) {
        event.preventDefault();
        var imgId = event.originalEvent.dataTransfer.getData("text");
        var img = $('#' + imgId);
        $(this).html(img);

        
        verifierOrdre();
    });
    function verifierOrdre() {
        var correctOrder = ['arc1', 'arc2', 'arc3', 'arc4', 'arc5', 'arc6'];
        var currentOrder = [];
        $('.drop-area').each(function() {
            var img = $(this).find('img');
            if (img.length) {
                currentOrder.push(img.attr('id'));
            } else {
                currentOrder.push(null); 
            }
        });

        $('.gagné').hide();
        $('.perdu').hide();
    
        
        if (currentOrder.toString() === correctOrder.toString()) {
            $('.gagné').show();  
        } else {
            $('.perdu').show();  
        }
    }
});
