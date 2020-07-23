let dispatchHandlers = {};
let pending = [];

let lookUpDispatch = (eventName) => {
    return dispatchHandlers[eventName];
};

let dispatchHandlerFn = (msg) => {
    let dispatchHandlers = lookUpDispatch(msg.eventName);
    for (let dispatchHandler of dispatchHandlers) {
        dispatchHandler(msg);
    }
};

let onStateChange = () => {
    navigator.serviceWorker
}

function hookSWWorkerApi() {
    navigator.serviceWorker.addEventListener('message', dispatchHandlerFn);
    navigator.serviceWorker.addEventListener('statechange', onStateChange);
    if (navigator.serviceWorker.controller.state === "activated") {
        for (let msg of pending) {
            sendSWMsg(msg[0], msg[1]);
        }
        pending = [];
    }
}

function unhookSWWorkerApi() {
    navigator.serviceWorker.controller.removeEventListener('message', dispatchHandlerFn);
}

function sendSWMsg(eventName, payload) {
    if (eventName) {
        payload.eventName = eventName;
    }
    if (navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
        navigator.serviceWorker.controller.postMessage(payload);
    } else {
        pending.push([eventName, payload]);
    }
}

function registerSWListener(eventName, handler) {
    if (!dispatchHandlers(eventName)) {
        dispatchHandlers[eventName] = [];
    }
    dispatchHandlers[eventName].push(handler);
}

function registerSWListeners(eventName, handlers) {
    if (!dispatchHandlers(eventName)) {
        dispatchHandlers[eventName] = [];
    }
    for (let handler of handlers) {
        dispatchHandlers[eventName].push(handler);
    }
}

function unregisterSWListener(eventName, handler) {
    let dispatchHandlerSet = dispatchHandlers[eventName];
    if (dispatchHandlerSet) {
        for (let dispatchHandlerIndex in dispatchHandlerSet) {
            if (dispatchHandler == handler) {
                dispatchHandlerSet[dispatchHandler].splice(dispatchHandlerIndex, 1);
            }
        }
        if (dispatchHandlerSet.length == 0) {
            delete dispatchHandlers[eventName];
        }
    }
}

function unregisterSWListeners(eventName) {
    let dispatchHandlerSet = dispatchHandlers[eventName];
    if (dispatchHandlerSet) {
        for (let dispatchHandlerIndex in dispatchHandlerSet) {
            dispatchHandlerSet[dispatchHandler].splice(dispatchHandlerIndex, 1);
        }
        if (dispatchHandlerSet.length == 0) {
            delete dispatchHandlers[eventName];
        }
    }
}
