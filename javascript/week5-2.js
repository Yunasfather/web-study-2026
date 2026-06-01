var msg = "전역";

function outer() {
    var msg = "outer";

    function inner() {
        console.log(msg);
    }
    return inner;
}

const fn = outer();
fn();