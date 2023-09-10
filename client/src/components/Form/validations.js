
export const validations = (data) => {
    const errors = {};

    if(!data.name) errors.name = 'Debe ingresar una actividad';
    if(!data.duration) errors.duration = 'Debe elegir una opción';
    if(!data.difficulty) errors.difficulty = 'Debe elegir una opcion del 1 al 5';
    if(!data.season) errors.season = 'Debe elegir una opción';
    if(!data.country) errors.country = 'Debe ingresar al menos un país';

    return errors;
};