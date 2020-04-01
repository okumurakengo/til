// Use this:
type PartialWithNewMember<T> = {
    [P in keyof T]?: T[P];
} & { newMember: boolean }
// これだとエラーなのよ
type PartialWithNewMember2<T> = {
    [P in keyof T]?: T[P];
    newMember: boolean;
}

let a: PartialWithNewMember<{b: number}> = {
    b: 111,
    newMember: true,
}
