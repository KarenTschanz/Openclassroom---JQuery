$(function(){
    //PARTIE 1
    //LABEL
    //affichage élément suivant partie droite
    $('#label').on('click',function(){
        $('hr').after('<div id="container"> Texte du label <br><input type="text" id="input"><br><button id="btnOK"> ok </button> <button id="btnAnnuler">annuler</button></div><div id="container2"></div>');
    
        //Commentaire explication bouton
        $('#container2').load('load.html .texteLabel');
        
        //efface élément partie droite (laisser bouton et texte intro)
        $('.btnP').attr('disabled','disabled');
        //apparition container en fade
        $('#container').hide().fadeIn(500);
        $('#container2').hide().fadeIn(500);

        //input
        $('#input').focus();

        //clique ok -> affichage partie gauche ds span
        $('#btnOK').on('click',function(){
            //insérer la valeur du input sans un span
            var valider = '<span>' + $('#input').val() + '</span>';
            //insérer ensuite dans la partie gauche
            $('#gauche').append(valider);
            //effet
            $('#container').fadeOut(500,function(){
                $('#container').remove();
                $('.btnP').removeAttr('disabled');
            });
            $('#container2').fadeOut(500);
        });//btnok
        
        $('#btnAnnuler').on('click',function(){
            //effet
            $('#container').fadeOut(500,function(){
                $('#container').remove();
                $('.btnP').removeAttr('disabled');
            });
            $('#container2').fadeOut(500);
        });//btnAnnuler
    });//label
    
    //PARTIE 2
    //ZONE DE TEXTE
    $('#zoneTexte').on('click',function(){
        $('hr').after('<div id="container"> Id de la zone de texte <br><input type="text" id="input"><br><button id="btnOK"> ok </button> <button id="btnAnnuler">annuler</button></div><div id="container"></div>');
        
        //Commentaire explication bouton
        $('#container2').load('load.html .texteInput');
    
        //efface élément partie droite (laisser bouton et texte intro)
        $('.btnP').attr('disabled','disabled');
        //apparition container en fade
        $('#container').hide().fadeIn(500);
        $('#container2').hide().fadeIn(500);

        //input
        $('#input').focus();

        //clique ok -> affichage partie gauche ds span
        $('#btnOK').on('click',function(){
            //insérer la valeur du input sans un span
            var valider = '<input type="text" id="'+ $('#input').val() +'"><br>';
            //insérer ensuite dans la partie gauche
            $('#gauche').append(valider);
            //effet
            $('#container').fadeOut(500,function(){
                $('#container').remove();
                $('.btnP').removeAttr('disabled');
            });
            $('#container2').fadeOut(500);
        });//btnok
        
        $('#btnAnnuler').on('click',function(){
            //effet
            $('#container').fadeOut(500,function(){
                $('#container').remove();
                $('.btnP').removeAttr('disabled');
            });
            $('#container2').fadeOut(500);
        });//btnAnnuler
    });//Zone de texte
    
    //BOUTON
    $('#bouton').on('click',function(){
        $('hr').after('<div id="container"> Texte du bouton <br><input type="text" id="input"><br><button id="btnOK"> ok </button> <button id="btnAnnuler">annuler</button></div><div id="container"></div>');
        
        //Commentaire explication bouton
        $('#container2').load('load.html .texteBouton');
    
        //efface élément partie droite (laisser bouton et texte intro)
        $('.btnP').attr('disabled','disabled');
        //apparition container en fade
        $('#container').hide().fadeIn(500);
        $('#container2').hide().fadeIn(500);

        //input
        $('#input').focus();

        //clique ok -> affichage partie gauche ds span
        $('#btnOK').on('click',function(){
            //insérer la valeur du input sans un span
            var valider = '<button>' + $('#input').val() + '</button><br>';
            //insérer ensuite dans la partie gauche
            $('#gauche').append(valider);
            //effet
            $('#container').fadeOut(500,function(){
                $('#container').remove();
                $('.btnP').removeAttr('disabled');
            });
            $('#container2').fadeOut(500);
        });//btnok
        
        $('#btnAnnuler').on('click',function(){
            //effet
            $('#container').fadeOut(500,function(){
                $('#container').remove();
                $('.btnP').removeAttr('disabled');
            });
            $('#container2').fadeOut(500);
        });//btnAnnuler
    });//Zone de texte
    
    //survol
    $('button, #btnOK, #btnAnnuler').on('mouseover',function(){
        $(this).css("box-shadow", '5px 5px 5px #888' );
    });
    
    $('button, #btnOK, #btnAnnuler').on('mouseout',function(){
        $(this).css("box-shadow", '0px 0px 0px #888' );
    });

    
});