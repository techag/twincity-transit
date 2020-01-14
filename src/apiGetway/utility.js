
export const updateState = (oldState, newState) => {
    return {
        ...oldState,
        ...newState
    }
};

export const createOptions = (data, key, value) => {
    let options = [];
    [].concat(data).map((option, i) => {
        if(option){
            options.push({key: option[key], value: option[value]})
        }
    });

    return options;
};

