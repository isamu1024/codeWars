function validBraces(braces: string): boolean {

    if (braces.length <= 1) {
        return false;
    }

    let stack: string[] = [];

    let open : string[] = [`{`, `[`, `(`];
    let close : string[] = [`}`, `]`, `)`];

    for (let i: number = 0; i < braces.length; i++) {
        if (open.includes(braces.charAt(i))) {
            stack.push(braces.charAt(i));
        } else if (close.includes(braces.charAt(i))) {
            stack.pop();
        } else {
            return false;
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;

 
}

if (validBraces(`[(])`)) {
    console.log("yep");
} else {
    console.log("nope");
};





