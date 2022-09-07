export const validate = (type, inputs, datasLS) =>{

    if(type === "signin"){
        if(!datasLS) return "Aucune données en BDD, ou alors utilisateur inconnu";

        if(datasLS.alias.trim() !== inputs.alias.trim() || datasLS.password.trim() !== inputs.password.trim()){
            return "Le(s) alias/mot de passe ne correspondent pas !";
        }
    }

    if(inputs.alias.trim().length < 3 || inputs.password.trim().length < 3 ) {
        return "3 caractères minimum";
    } else return true;

}