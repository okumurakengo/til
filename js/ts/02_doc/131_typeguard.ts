function f1(sn: string | null): string {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}

function f2(sn: string | null): string {
    return sn || "default";
}

console.log(f1("a"))
console.log(f1(""))
console.log(f1(null))
console.log(f2("a"))
console.log(f2(""))
console.log(f2(null))
