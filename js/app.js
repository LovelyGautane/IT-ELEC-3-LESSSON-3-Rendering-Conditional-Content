const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            myButton: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        toggle() {
            this.myButton = !this.myButton
        }
    }
});

app.mount('#assignment'); 