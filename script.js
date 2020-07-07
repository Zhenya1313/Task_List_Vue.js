var app = new Vue ({
    el: '#app',
    data:{
        title: "Task list",
        items:[ ]
    },

    mounted() {
        if (localStorage.getItem('items')) {
            try {
                this.items = JSON.parse(localStorage.getItem('items'));
            } catch(e) {
                localStorage.deleteItem('items');
            }
        }
    },

    methods: {
        addItem() {
            if (!this.newItem) {
                return;
            }

            this.items.push(this.newItem);
            this.newItem = '';
            this.saveItems();
        },
        deleteItem(x) {
            this.items.splice(x, 1);
            this.saveItems();
        },
        saveItems() {
            const parsed = JSON.stringify(this.items);
            localStorage.setItem('items', parsed);
        }
    }
});


