import {requestHandlerExceptions} from "./requestHandlerExceptions";
import * as Utils from "./"

export const handle = (promise, handler) => {
    Utils.load('show')

    promise.then((data) => {
        Utils.load('hide')
        handler(data);
    })
        .catch(requestHandlerExceptions)
        .finally(() => Utils.load('hide'));
};

export const getFormData = $formEl => {
    let originalArray = $formEl.serializeArray();
    let formObject = {};
    originalArray.map((item) => {
        let { name, value } = item;
        formObject[name] = value;
    });

    return formObject;
};
