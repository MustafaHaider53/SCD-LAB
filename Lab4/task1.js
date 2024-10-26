function demonstrateDataTypes() {
    // 1. String (let)
    let myString = "Hello, World!";
    console.log("String:", myString);

    // 2. Number (var)
    var myNumber = 42;
    console.log("Number:", myNumber);

    // 3. Boolean (const)
    const myBoolean = true;
    console.log("Boolean:", myBoolean);

    // 4. Null (let)
    let myNull = null;
    console.log("Null:", myNull);

    // 5. Undefined (let)
    let myUndefined;
    console.log("Undefined:", myUndefined);

    // 6. Object (const)
    const myObject = { name: "John", age: 30 };
    console.log("Object:", myObject);

    // 7. Array (let)
    let myArray = [1, 2, 3];
    console.log("Array:", myArray);

    // 8. Symbol (const)
    const mySymbol = Symbol("unique");
    console.log("Symbol:", mySymbol);

    // 9. BigInt (let)
    let myBigInt = BigInt(9007199254740991);
    console.log("BigInt:", myBigInt);

    // Using a variable without declaration (nothing)
    myImplicit = "I'm implicitly declared!";
    console.log("Implicit declaration:", myImplicit);
}

// Call the function to demonstrate data types
demonstrateDataTypes();
