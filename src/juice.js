import { Application } from '@pollon/pollon'
import { isClassOrThrow } from './utils/is-or-throw'

export function Juice( path ){
    return function( target, name, descriptor ){

        isClassOrThrow(target, name, descriptor)

        if( !path ){
            throw '[Pollon decorators: Juice decorator need the path to be set properly'
        }

        return class extends target {
            constructor( ...args ){
                super(...args)
            }

            async onApplyBindings( ...args ){
                let App = Application.get(this.Module.appName)
                await App.Templates.Juice.get(path)

                return super.onApplyBindings(...args)
            }
        }
    }
}