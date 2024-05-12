export default function destructuring(obj) {
    let a = new Array();
    for(let i = 0; i < obj.special.length; i++) {
        const {id, name, description, icon} = obj.special[i];

        //Присваивание
        if(description === undefined) {
            obj.special[i].description = 'Описание недоступно';
        } else {
            obj.special[i].description = description;
        };

        obj.special[i].id = id;
        obj.special[i].name = name;
        obj.special[i].icon = icon;

        //Формирование
        a.push({
            id: obj.special[i].id,
            name: obj.special[i].name, 
            description: obj.special[i].description, 
            icon: obj.special[i].icon
        });
    };

    return a;
};

