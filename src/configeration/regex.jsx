
export default class RejexPatterns{
    static NamePattern = new RegExp(/^[A-Z]{1}[a-z]{2,}$/ );
    static EmailPattern= new RegExp(/^[0-9a-zA-Z]+([.+_-]?[0-9a-zA-Z]+)*([@][0-9a-zA-Z]+){1}([.][a-zA-Z]{2,3}){1,2}$/);
    static passwordPattern = new  RegExp( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}/);
}