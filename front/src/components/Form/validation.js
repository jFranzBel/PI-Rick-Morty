const validation = ( userData ) => {
    let errors = {};
    if ( /^[^\s@]+@[^\s@]+\.[@\s@]+$/.test( userData.email ) ) {
        errors.email = 'El email es invalido.';
    };
    if ( !userData.email ) {
        errors.email = 'Este campo no puede estar vacio';
    };
    if ( userData.email.length > 35 ) {
        errors.email = 'El email no puede superar los 35 caracteres.';
    };
    if ( !userData.password.match( /\d/ ) ) {
        errors.password = 'La password deve de contener al menos un numero';
    };
    if ( userData.password.length < 6 || userData.password.length > 10 ) {
        errors.password = 'La password debe de contener entre 6 y 10 caracteres'
    };
    return errors;
};

export default validation;