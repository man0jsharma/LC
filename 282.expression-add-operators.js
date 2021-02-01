/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {

    let sym = ['+', '-', '*'];
    let len = num.length - 1;
    let master = []

    const format = (sStack) => {
        let nStack = num.split('');
        while (nStack.length > 1) {
            let s = sStack.pop();
            let second = nStack.pop();
            let first = nStack.pop();
            nStack.push(`${first}${s}${second}`)
        }
        return nStack[nStack.length - 1]
    }

    const buildArray = (n, s) => {
        let tot = [];
        while (s.length) {
            tot.push(n.shift());
            tot.push(s.shift());
        }
        tot.push(n.pop());
        return tot.join('');
    }

    const eval = (str, sym) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === sym) {
                let first = parseInt(str[i - 1]);
                let second = parseInt(str[i + 1]);
                let ans;
                switch (str[i]) {
                    case '*': {
                        ans = first * second
                        break;
                    }
                    case '+': {
                        ans = first + second
                        break;
                    }
                    case '-': {
                        ans = first - second
                        console.log({ ans })
                        break;
                    }
                }
                str = `${str.substring(0, i - 1)}${ans}${str.substring(i + 2)}`
                i = 0
            }
        }
        return str;
    }
    const reduce = (str) => {
        let a = eval(str, "*")
        let b = eval(a, "+")
        let c = eval(b, "-")
        return c;
    }

    const isValid = (sStack) => {
        let nStack = num.split('');
        let str = buildArray([...nStack], [...sStack])
        let newStr = reduce(str)
        console.log({ str, newStr })
        while (sStack.length) {
            let s = sStack.pop();
            let second = parseInt(nStack.pop());
            let first = parseInt(nStack.pop());

            switch (s) {
                case '+': {
                    nStack.push(first + second)
                    break;
                }
                case '-': {
                    nStack.push(first - second)
                    break;
                }
                case '*': {
                    nStack.push(first * second)
                    break;
                }
            }
        }
        return nStack[nStack.length - 1] === target;
    }

    const bt = (temp = []) => {
        if (temp.length === len) {
            master.push([...temp])
        } else
            for (let i = 0; i < sym.length; i++) {
                bt([...temp, sym[i]])
            }
    }

    bt();
    let ans = []
    console.log({ master })
    for (let each of master) {
        let check = isValid(each.concat())
        if (check) {
            ans.push(format(each.concat()))
        }
    }
    return ans;
};

console.log(addOperators("123", 6))

// @lc code=end

