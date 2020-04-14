import { Application } from '@pollon/pollon'
import { PropertyNeeder } from '@pollon/message-broker'
import { isClassOrThrow } from './utils/is-or-throw'

const captalize = string => string[0].toUpperCase() + string.slice(1)

export function Service( service, { property } = { property: null} ){
    return function( target, name, descriptor ){
        
        isClassOrThrow('Service', target, name, descriptor)

        if( !( service instanceof PropertyNeeder )){
            throw '[Pollon decorators: Service decorator InvalidArgumentException. `service` class must be of type PropertyNeeder]'
        }

        if( !property && !service.name ){
            throw '[Pollon decorators: Service decorator in a class wide scope should be a class or you should specify a name parameter'
        }

        if( service.name ){
            property = captalize(service.name)
        }

        return class extends target{
            constructor( ...args ){
                super(...args)
            }

            init( ...args ){
                let instance = new service(this.Module.appName)
                let App = Application.get(this.Module.appName)
                App.Providers.add(instance)

                this[property] = instance
                super.init(...args)
            }
        }
    }
}