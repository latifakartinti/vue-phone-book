<template>
    <div id="list-phone" class="row">
        <div class="col-12">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listPhone" v-bind:key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.fullname }}</td>
                        <td>{{ item.phoneNumber }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.address }}</td>
                        <td>
                            <b-button size="sm" variant="primary" @click="onEdit(item.id)">Edit</b-button>&nbsp;&nbsp;
                            <b-button size="sm" variant="danger" @click="onDelete(item.id)">Delete</b-button>
                        </td>
                    </tr>

                    <tr v-if="listPhone.length < 1">
                        <td colspan="6">
                            <h5>Data not found</h5>
                        </td>
                    </tr>
                </tbody>
            </table>            
        </div>
    </div>
</template>


<script>
    import { deleteData, findDataById } from '../../services/PhoneBook.services.js';
    export default {
        name: 'ListPhone', 
        methods: {
            onEdit(id){
                const findData = findDataById(id);
                this.$emit('editData', findData);
            },
            onDelete(id){
                const result = confirm("Want to delete?");
                if (result) {
                    deleteData(id);
                    this.$emit('successDelete');
                }   
            }
        },
        props: {
            listPhone: []
        }
    }
</script>