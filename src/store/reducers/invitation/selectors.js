export const isInvitationRunned = state => {
    return Boolean(state.invitation.current);
}