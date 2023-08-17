<template>
    <div class="container mt-5" id="phone-book">
        <HeaderPhone 
            @showForm="onShowForm"  
            @search="onSearch"  
        ></HeaderPhone>

        <ListPhone 
            :listPhone="listPhone" 
            @editData="onEditData"
            @successDelete="onLoadData"
        ></ListPhone>

        <FormPhone 
            v-if="showForm"
            @saveData="onLoadData"
            @hideModal="onHideModal"
            :selectedData="selectedData"
        ></FormPhone>        
    </div>
</template>

<script>
import { getAllData, searchData } from '../../services/PhoneBook.services.js'; 

import HeaderPhone from './HeaderPhone.vue';
import ListPhone from './ListPhone.vue';
import FormPhone from './FormPhone.vue';

    export default {
        name: 'PhoneBook',
        data() {
            return{
                listPhone: [],
                selectedData: null,
                showForm: false
            }
        },
        methods: {
            onLoadData(){
                this.listPhone = getAllData();
            },
            onEditData(value) {
                this.selectedData = value;
                this.showForm = !this.showForm;
            },
            onShowForm(){
               this.showForm = !this.showForm;
               this.selectedData = null
            },
            onHideModal() {
                this.showForm = !this.showForm;
            },
            onSearch(value){
                this.listPhone = searchData(value)
            }
        },
        components: {
            ListPhone,
            HeaderPhone,
            FormPhone
        },
        mounted(){
            this.onLoadData();
        }        
    }
</script>