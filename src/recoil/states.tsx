import { atom } from "recoil";

export function recoilState() : void {

}

export const todoListState = atom({
    key: 'TodoList',
    default: {
        pending: [],
        done: []
    },
})