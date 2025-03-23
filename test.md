❌ Bad Code:
```javascript
function sum(){return a + b;}
```

🔍 Issues:
* ❌ The variables `a` and `b` are not defined within the function scope, nor are they passed as arguments. This will
likely lead to errors or unexpected behavior, as the function will rely on variables from the global scope (if they
exist), which is bad practice.
* ❌ The function lacks clear documentation or comments explaining its purpose, parameters, and return value, making it
harder to understand and maintain.

✅ Recommended Fix:
```javascript
/**
* Calculates the sum of two numbers.
* @param {number} a - The first number.
* @param {number} b - The second number.
* @returns {number} The sum of a and b.
*/
function sum(a, b) {
return a + b;
}
```

💡 Improvements:
* ✔ The function now accepts two parameters, `a` and `b`, making it clear that it expects two inputs.
* ✔ The function's purpose, parameters, and return value are clearly documented using JSDoc-style comments, improving
readability and maintainability.
* ✔ The function no longer relies on external variables, making it more predictable and less prone to errors.