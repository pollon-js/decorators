import { Application } from '@pollon/pollon'
import { Subscriber } from '@pollon/message-broker'
import { isFunctionOrThrow } from './utils/is-or-throw'

const captalize = string => string[0].toUpperCase() + string.slice(1)

export function Provider( event, subscriber ){
    return function( target, name, descriptor ){

        isFunctionOrThrow('Provider', target, name, descriptor)

        if( !(subscriber instanceof Subscriber) ){
            throw '[Pollon decorators: Provider decorator InvalidArgumentException. `provider` class must be of type PropertyNeeder]'
        }

        if( !event ){
            throw '[Pollon decorators: Provider decorator InvalidArgumentException. `event` paramenter must not be empty]'
        }

        
    }
}

