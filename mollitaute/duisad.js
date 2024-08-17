function getMessageAtIndex(index, args) {
    assert(index < args.length, 'Message reference must be in range');
    return args[index];
}

// Example usage:
var messages = ['Hello', 'Bonjour', 'Hola'];

// getMessageAtIndex(2, messages); // This would return 'Hola' because index 2 is within range
// getMessageAtIndex(5, messages); // This would throw an AssertionError because index 5 is out of range
