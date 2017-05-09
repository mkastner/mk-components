function ComponentView(appContext, options) {

    options = options || {};

    let properties = {
        name: {
            enumerable: true,
            writable: false
        },
        controller: {
            enumerable: false,
            writable: true,
            value: function() {
                console.log('controller not yet implemented')
            }
        }
    };

    let prototype = {};

    return Object.create(prototype);

}

return ComponentView;
