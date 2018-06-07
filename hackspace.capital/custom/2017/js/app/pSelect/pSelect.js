(function( $ ){
    var methods = {
        init : function( options ) {

            return this.each(function(){
                var $this = $(this),
                    data = $this.data('CustomSelect'),
                    cs = $('<div class="pseudo-select"/>'),
                    cs_title,
                    cs_items = $('<ul/>');
                // Если плагин ещё не проинициализирован
                if($this.siblings('.pseudo-select').length>0 || $this.find('option').length==0) return;
                if ( !data ) {
                    $this.wrap('<div class="CustomSelect" id="'+$this.attr('id')+'_container"/>');

                    $this.find('option').each(function(){
                        var current = false;
                        if(!cs_title || $(this).prop('selected')) {
                            cs_title = $('<div />', {text: $(this).html()}).addClass('title');
                        }
                        if($(this).prop('selected'))  current = true;

                        var item = $('<li/>').html($(this).html()).data('value', $(this).val()).addClass(current?'current':'');

                        item.on('click', function(){
                            $(this).siblings().removeClass('current');
                            $(this).addClass('current');
                            cs_title.html($(this).html());
                            cs.removeClass('opened');
                            $this.find('option[value='+$(this).data('value')+']').prop('selected', true);
                        });

                        cs_items.append(item);
                    });
                    cs.append(cs_title);
                    cs.append(cs_items);

                    $('#'+$this.attr('id')+'_container').prepend(cs);

                    $this.on('change', function(){
                        var val = $(this).val();
                        cs_items.find('li').each(function(){
                            if($(this).data('value')==val)
                                $(this).click();
                        });
                    })
                }
            });


        },
    };

    $.fn.CustomSelect = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует' );
        }
    };
})( jQuery );

$(document).on('click', function(e){
    if($(e.target).is('.pseudo-select .title')) {
        var opened = false;
        if($(e.target).parents('.pseudo-select').is('.opened'))
            opened = true;
        $('.pseudo-select').removeClass('opened');
        if(opened) return;
        $(e.target).parents('.pseudo-select').addClass('opened');
        return;
    }
    $('.pseudo-select').removeClass('opened');
})

