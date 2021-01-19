export function error(message, callback = () => {}) {
    return $.alert({
        title: 'Erro',
        content: message,
        theme: 'modern',
        icon: 'fas fa-exclamation-circle',
        closeIcon: true,
        type: 'red',
        typeAnimated: true,
        draggable: false,
        buttons: {
            ok: {
                isHidden: true
            }
        },
        onClose: () => {
            callback();
        }
    });
}

export function warning(message, callback = () => {}) {
    return $.alert({
        title: 'Atenção',
        content: message,
        theme: 'modern',
        icon: 'fas fa-exclamation-triangle',
        closeIcon: true,
        type: 'orange',
        typeAnimated: true,
        draggable: false,
        buttons: {
            ok: {
                isHidden: true
            }
        },
        onClose: () => {
            callback();
        }
    });
}

export function success(message, callback = () => {}) {
    return $.alert({
        title: 'Sucesso',
        content: message,
        theme: 'modern',
        icon: 'fas fa-check-circle',
        closeIcon: true,
        type: 'green',
        typeAnimated: true,
        draggable: false,
        buttons: {
            ok: {
                isHidden: true
            }
        },
        onClose: () => {
            callback();
        }
    });
}

export function successReload(message, callback = () => location.reload(true)) {
    return $.alert({
        title: 'Sucesso',
        content: message,
        theme: 'modern',
        icon: 'fas fa-check-circle',
        type: 'green',
        typeAnimated: true,
        draggable: false,
        autoClose: 'autoReload|3000',
        buttons: {
            ok: {
                isHidden: true
            },
            autoReload: {
                text: "Atualizando página em...", action: () => callback()
            }
        }
    });
}

export function deleteConfirm(message = null, callback = () => {}) {
    return $.confirm({
        title: 'Confirmação de Exclusão',
        content: ! message ? 'Tem certeza que deseja realizar essa exclusão?' : message,
        theme: 'modern',
        icon: 'fas fa-exclamation-circle',
        closeIcon: true,
        type: 'red',
        typeAnimated: true,
        draggable: false,
        buttons: {
            confirm: {
                text: 'Excluir',
                btnClass: 'btn-danger',
                action: function () {
                    callback()
                }
            }
        },
        onClose: () => {}
    });
}

export function warningConfirm(message = null, callback = () => {}) {
    return $.confirm({
        title: 'Atenção',
        content: ! message ? 'Tem certeza que deseja realizar essa ação?' : message,
        theme: 'modern',
        icon: 'fas fa-exclamation-triangle',
        closeIcon: true,
        type: 'orange' +
            '',
        typeAnimated: true,
        draggable: false,
        buttons: {
            confirm: {
                text: 'Confirmar',
                btnClass: 'btn-warning',
                action: function () {
                    callback()
                }
            }
        },
        onClose: () => {}
    });
}

