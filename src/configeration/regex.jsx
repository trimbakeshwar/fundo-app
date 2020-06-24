
export default class RejexPatterns{
    static NamePattern = new RegExp(/^[A-Z]{1}[a-z]{2,}$/ );
    static EmailPattern= new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
    static passwordPattern = new  RegExp( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}/);
}