
export default class RejexPatterns{
    static NamePattern = new RegExp(/^[A-Z]{1}[a-z]{2,}$/ );
    static EmailPattern= new RegExp(/^((.[A-Z]+[a-z]*[0-9]*)|(.[A-Z]*[a-z]+[0-9]*)|(.[A-Z]*[a-z]*[0-9]+)?)?@.co(.[a-z]{2,})?$/);
    static passwordPattern = new  RegExp( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}/);
}