
const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
};

const validationsForm = ({name, email, subject, comments})=>{
    let errors ={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    if(!name.trim()){
       errors.name = "El campo nombre es requerido.";
    }else if(!regexName.test(name.trim())){
        errors.name = "El campo nombre debe contener sólo letras o espacios en blanco.";
    }
    if(!email.trim()){
        errors.email = "El campo email es requerido.";
    }else if(!regexEmail.test(email.trim())){
        errors.email = "El email no es válido";
    }
    if(!subject.trim()){
        errors.subject = "El asunto es requerido.";
    }
    if(!comments.trim()){
        errors.comments = "El comentario es requerido.";
    }else if(!regexComments.test(comments.trim())){
        errors.comments= "El comentario no debe exceder los 255 caracteres.";
    }
    return errors;
};

