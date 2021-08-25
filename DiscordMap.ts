import { makeEnum, makeCopyEnum, KeyedBy, Call } from 'map_api'
import { AuthClient } from 'auth_api'

export function DiscordCaller<T extends keyof typeof Actions>(Client: AuthClient, action: T, options?: Options[T]) {
    return Call(Client, RunRef, ActionMaps, action, options)
}

const Actions = makeEnum({
    GETUSER: 'GETUSER',
})

type Options = KeyedBy<typeof Actions, {
    GETUSER?: undefined
}>

const ActionMaps = makeCopyEnum({
    [Actions.GETUSER]: {
        Method: 'GET',
        URL: 'https://discord.com/api/users/@me', //TODO: FIX
        OptionsTo: 'NONE'
    }
})


type PlaySearchOptions = {
    q: string | string[],
}

const RunRef = {
    //[Actions.PLAYSONGSEARCH]: PlaySearch //Function
}