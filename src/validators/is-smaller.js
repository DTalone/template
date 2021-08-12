export default {
    params: ['target'],
    validate(value, { target }) {
        return value <= target;
    },
    message: 'The {_field_} must be smaller.'
}