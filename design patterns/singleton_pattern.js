const Singleton = (() => {
    let instance;

    // console.log(!instance);
    function createInstance() {
        const object = new Object("Unique instance object");
        return object;
    }


    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            };
            return instance;
        }
    }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1);

