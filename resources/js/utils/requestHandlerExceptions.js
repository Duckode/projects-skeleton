import * as Alert from "./alert"

export const requestHandlerExceptions = (error) => {
    let {response} = error;
    let {status, data} = response;

    switch (status) {
        case 422:
            let {errors} = data;
            let errorsClean = transformErrors(errors);
            let errorsHtml = errorsClean.join('</li><li>');
            Alert.warning(`Existem erros de preenchimento no formulário: <ul><li>${errorsHtml}</li></ul>`);
            break;
        case 404:
            Alert.error(data.message ?? 'Recurso não encontrado.');
            break;
        case 403:
            Alert.error('Você não possui permissão para acessar esta informação.', () => location.reload());
            break;
        case 401:
            Alert.warning('Sua sessão expirou. Por favor, faça login novamente.', () => location.reload());
            break;
        default:
            if (data.message !== undefined) {
                Alert.warning(data.message);
            } else {
                Alert.error('Ocorreu um erro interno inesperado');
            }
    }
};

const transformErrors = (errors) => {
    let keys = Object.keys(errors);
    let transformedErrors = [];
    keys.map((key) => {
        let errorsKey = errors[key];
        transformedErrors = [...transformedErrors, ...errorsKey]
    });

    return transformedErrors;
};
