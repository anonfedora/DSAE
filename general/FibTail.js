const fibTail = (n, lastlast, last) => {
    //if (n == 0) return lastlast;
    //if (n == 1) return last;
    if (n == 0) {return lastlast};
    if (n == 1) {return last};
    return fibTail(n - 1, last, lastlast + last);
};

console.log(fibTail(5));
