
class Task {
    constructor(name) {
        this.name   = name;
        this.steps  = [];
    }

    /*!
     * @param  {Function}  aStep
     *
     * @return {this}
     */
    doFirst(aStep) {
        this.steps.unshift( aStep );

        return this;
    }

    /*!
     * @param  {Function}  aStep
     *
     * @return {this}
     */
    doLast(aStep) {
        this.steps.push( aStep );

        return this;
    }
}

module.exports = Task;
