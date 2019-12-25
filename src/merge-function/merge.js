function People() {
    let args = arguments
    if (args.length === 1) {
        return args[0]
    } else if (args.length === 2) {
        this.name = args[0]
        this.age = args[1]
        this.getName = function() {
            return this.name
        }
        this.getAge = function() {
            return this.age
        }
    }
}

People.staticA = function() {
    return 'static'
}

export  { People }