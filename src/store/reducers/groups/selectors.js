export const isGroupsAvailable = (state) => {
    return Boolean(state.groups.length);
};

export const isOneGroup = (state) => {
    return Boolean(state.groups.length === 1);
};