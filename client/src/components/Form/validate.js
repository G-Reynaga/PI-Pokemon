export const validate = (inputs) => {
    let errors = {}

    const regexName =  /^([^0-9]*)$/;
    const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/
    const regexNumber = /^\d*$/

    if (!inputs.name) errors.name = " Name is required ";
    if (!regexName.test(inputs.name)) errors.name = " Name can't contain numbers ";

    if (!inputs.image) errors.image = " Image is required ";
    if (!regexUrl.test(inputs.image)) errors.image = " Image must be a valid URL ";
    
    if (!inputs.life) errors.life = " Life is required ";
    if (!regexNumber.test(inputs.life)) errors.life = " Life must be a number ";
    if (inputs.life > 80) errors.life = " Life value can't be above 80 ";

    if (!inputs.attack) errors.attack = " Attack is required ";
    if (!regexNumber.test(inputs.attack)) errors.attack = " Attack must be a number ";

    if (!inputs.defense) errors.defense = " Defense is required ";
    if (!regexNumber.test(inputs.defense)) errors.defense = " Defense must be a number ";

    if (!inputs.speed) errors.speed = " Speed is required ";
    if (!regexNumber.test(inputs.speed)) errors.speed = " Speed must be a number ";

    if (!inputs.height) errors.height = " Height is required ";
    if (!regexNumber.test(inputs.height)) errors.height = " Height must be a number ";
    
    if (!inputs.weight) errors.weight = " Weight is required ";
    if (!regexNumber.test(inputs.weight)) errors.weight = " Weight must be a number ";

    return errors;
}