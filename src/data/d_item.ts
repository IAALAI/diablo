import { affiex } from "./d_affiex"

enum item_type {

}

enum slot {

}

export interface item {
    type: item_type
    slot: slot
    affiex : [affiex]
    eheck : Function
}