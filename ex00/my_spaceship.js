function my_spaceship(space_way){

    let kema = {

        x: 0,
        y: 0,

    direction: 'up'

    }

    for(var i=0;i<space_way.length;i++){

    if(space_way[i] == 'R' && kema.direction == 'up'){
        kema.direction = 'right';

    }

    else if(space_way[i] == 'R' && kema.direction == 'right'){

        kema.direction = 'down';

    }

    else if(space_way[i] == 'R' && kema.direction == 'down'){

        kema.direction = 'left';

    }

    else if(space_way[i] == 'R' && kema.direction == 'left'){

        kema.direction = 'up';

    }

    else if(space_way[i] == 'L' && kema.direction == 'up'){
        kema.direction = 'left';

    }

    else if(space_way[i] == 'L' && kema.direction == 'left'){

        kema.direction = 'down';

    }

    else if(space_way[i] == 'L' && kema.direction == 'down'){

        kema.direction = 'right';

    }

    else if(space_way[i] == 'L' && kema.direction == 'right'){

        kema.direction = 'up';

    }

    else if(space_way[i] == 'A' && kema.direction == 'up'){

        kema.y -= 1;

    }

    else if(space_way[i] == 'A' && kema.direction == 'left'){

        kema.x -= 1;

    }

    else if(space_way[i] == 'A' && kema.direction == 'down'){

        kema.y += 1;

    }

    else if(space_way[i] == 'A' && kema.direction == 'right'){

        kema.x += 1;

    }

}

return "{x: "+kema.x+", y: "+kema.y+", direction: '"+kema.direction+"'}";

}