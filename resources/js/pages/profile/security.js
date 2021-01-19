import * as Alert from "../../utils/alert"
import * as Request from "../../utils/request"

$(() => {
    $('#change-password-form').on('submit', (e) => {
        e.preventDefault();

        let form = Request.getFormData($(e.currentTarget))

        Request.handle(axios({
            method: 'put',
            url: '/profile/change-password',
            data: form
        }), () => {
            Alert.success('Senha atualizada.')

            e.currentTarget.reset()
        })
    })
})
