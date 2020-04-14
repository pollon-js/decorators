export const isClassOrThrow = ( decorator, target, name, descriptor ) =>{
    if (name || descriptor) {
        throw `[Pollon decorators: ${decorator} decorator can only be applied to a class`
    }
}

export const isFunctionOrThrow = ( decorator, target, name, descriptor ) =>{
    if( !(target instanceof Function) ){
        throw `[Pollon decorators: ${decorator} decorator can only be applied to a function`
    }
}