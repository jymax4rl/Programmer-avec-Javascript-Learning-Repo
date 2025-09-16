const windObject = window;

function logClickedObject(windObject) {
    // Use capture phase (true) so clicks are caught early; remove listener with .removeEventListener if needed
    windObject.addEventListener('click', event => {
        console.log('Clicked element:', event.target);
        console.log('Full event:', event);
    }, true);
}

// start listening
logClickedObject(windObject);