<template>
    <div class="d-flex" id="header-phone">
        <div class="flex-grow-1" style="text-align: left;">
            <h3>List Phone Book</h3>
        </div>
        <div class="px-3">
            <input class="form-control form-control-sm" placeholder="Search Data" @input="onSearch">
        </div>
        <div class="bd-highlight">
            <button class="btn btn-primary btn-sm" @click="showForm">Add Data</button>
        </div>   
    </div>
</template>

<script>
    import _ from 'lodash';
    export default {
        name: 'HeaderPhoneBook',
        methods: {
            showForm() {
                this.$emit('showForm');
            },  
            onSearch:
                _.debounce(function (e) {
                    const value = e.target.value;
                    this.$emit('search', value);  
                }, 500)
            }
    }
</script>