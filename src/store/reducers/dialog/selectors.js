export const isDialogAvailable = (state) => {
    return Boolean(state.dialog.visitor);
}