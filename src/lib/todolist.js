import styles from '../styles/styles.scss';

/**
 * TODO: Change this to your html template
 */
const template = `
    <style>${styles.toString()}</style>
    <div class="container">
        <div class="input-box">
            <label for="todo-input">Enter Todo</label>
            <input id="todo-input" type="text" />
            <button id="add-todo" type="button">Add Todo</button>
        </div>
        <div id="todos" class="todos">
        </div>
    </div>
`;

/**
 * TODO: Update class to your html element class
 */
class TodoList extends HTMLElement {
    constructor() {
        super();

        // Properties
        // This is what getting data may look like
        //this._todos;

        /**
         * This is what setting a function attribute may look like
         * this._callback;
         */

        // Add a shadow DOM
        let shadowDOM = this.attachShadow({mode: 'open'});
        
        this.addTodo = this.addTodo.bind(this);
        this.strikeTodo = this.strikeTodo.bind(this);

        // Render the template in the shadow dom
        shadowDOM.innerHTML = template;

    }

    //Getter and setter for data you send in
    /*
    set data (d) {
        this._data = d;
        this.renderChange();
    }

    get data() {
        return this._data;
    }
    */

    /**
     * If using a function to communicatec changes, do something like this
     * set onSelect(fn) {
     *      this._callback = fn;
     * }
     */


    /**
     * If watching attributes use this. Your attributes names should
     * replace 'dataattr' and be comma separated
     */
    /*
     static get observedAttributes() {
         return ['dataattr'];
     }
     */

    /**
     * If an observed attribute is changed, this is called
     */
    /*
     attributeChangedCallback(attr, oldVal, newVal) {
      
         // Nothing to do here
         if(oldVal === newVal) return;
         // Something to do here
         switch(attr) {
            case 'dataattr':
                this._dataattr = newVal;
                this.renderChange();
                break;
        }
    }
    */

    addTodo(evt) {
        const todoInput = this.shadowRoot.querySelector('#todo-input');
        let todoElm = this.shadowRoot.querySelector('#todos');
        let todo = todoInput.value;
        todoInput.value = '';
        //this._todos.push(todo);
        let child = document.createElement('div');
        child.onclick=this.strikeTodo;
        child.appendChild(document.createTextNode(todo));
        todoElm.appendChild(child);
        evt.stopPropogation();
    }

    strikeTodo(evt) {
        evt.target.classList.toggle('strikethrough');
    }

    /**
     * Called when the element is loaded, if you are doing something like
     * putting an onclick method on a button, do that here. Be sure to bind 
     * the method to "this"
     */
    connectedCallback() {
         let btn = this.shadowRoot.querySelector('#add-todo');
         btn.onclick = this.addTodo;
    }

    /**
     * This isn't strictly a part of html elements, but it's easier to put
     * dom manipulation in one spot and call it whenever you need to update 
     * the element, you could do that here
     */
    /*
    renderChange() {
        let todoElm = this.shadowRoot.querySelector('#todos');

    }
    */

}

/**
 * TODO: Update to export your class
 */
export default TodoList;