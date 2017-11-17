$(document).ready(function(){
    $('#typewriteText').typewrite({
        actions: [
            {speed: 22},
            {type: 'is a Miami-based micro creative agency '},
            {delay: 10},
            {remove: {num: 17, type: 'collective '}},
            {type: ' agency composed of artists, designers, photographers, illustrators, and cinematographers. Their continuous collaborations with industry leaders to local startups has enabled them to provide cutting-edge, yet affordable approaches to all their projects.'},
            {delay: 20},
            
        ]
    });
});



