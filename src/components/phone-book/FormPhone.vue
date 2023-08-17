<template>
    <b-modal 
        id="modal-1" 
        ref="mymodal" 
        title="Form Phone Book"
        :no-close-on-esc="true"
        :no-close-on-backdrop="true"
        @show="showModal"
        @hidden="resetModal"
        @ok="handleOk"        
    >
        <div class="container" id="form-phone">
            <b-form 
                @submit.stop.prevent="handleSubmit" 
                v-if="show"
                ref="form"
            >
                <input type="hidden" name="id" v-model="form.id">

                <b-form-group
                    id="fullname-group"
                    label="Fullname :"
                    label-for="fullname-input"
                    invalid-feedback="Fullname is required"
                    :state="formState.fullname"
                >
                    <b-form-input
                        id="fullname-input"
                        type="text"
                        v-model="form.fullname"
                        :state="formState.fullname"
                        ref="fullname"
                        value=""
                        required
                    ></b-form-input>
                </b-form-group>  
                
                <b-form-group
                    id="email-group"
                    label="Email :"
                    label-for="email-input"
                    invalid-feedback="Email is required"
                    :state="formState.email"
                >
                    <b-form-input
                        id="email-input"
                        type="email"
                        v-model="form.email"
                        :state="formState.email"
                        ref="email"
                        required
                    ></b-form-input>
                </b-form-group>
                
                <b-form-group
                    id="phone-number-group"
                    label="Phone Number :"
                    label-for="phone-number-input"
                    invalid-feedback="Phone Number is required"
                     :state="formState.phoneNumber"
                >
                    <b-form-input
                        id="phone-number-input"
                        type="text"
                        v-model="form.phoneNumber"
                        ref="phoneNumber"
                        :state="formState.phoneNumber"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="Address :"
                    label-for="input-1"
                >
                <b-form-textarea
                    id="textarea"
                    v-model="form.address"
                    placeholder="Enter full address "
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                </b-form-group>  
            </b-form>
        </div>
    </b-modal>
</template>

<script>
    import { insertData, updateData } from '../../services/PhoneBook.services.js';

    export default {
        name: 'FormPhone',
        data() {
            return {
                form: {
                    id: 0,
                    fullname: '',
                    email: '',
                    phoneNumber: '',
                    address: ''
                },      
                formState: {
                    fullname: null,
                    email: null,
                    phoneNumber: null
                },
                show: true          
            }
        },
        props: {
            selectedData: null
        },
        methods: {
            checkFormValidity() {
                const valid = this.$refs.form.checkValidity();
                this.formState.fullname = this.$refs.fullname.checkValidity();
                this.formState.email = this.$refs.email.checkValidity();
                this.formState.phoneNumber = this.$refs.phoneNumber.checkValidity();
                return valid
            },            
            handleSubmit() {

            },
            resetModal() {
                this.$emit('hideModal')
            },
            showModal(){

            },
            handleOk(event){
                event.preventDefault();
                if (!this.checkFormValidity()) {   
                    return;
                }

                if(this.form.id != "0"){
                    updateData(this.form);
                }else{
                    insertData(this.form);
                }   
                
                this.$emit('saveData');
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-1')
                })
            }
        },
        mounted(){
            this.$refs.mymodal.show();
        },
        watch: {
            selectedData: {
                immediate: true, 
                handler (val) {
                    if(val === null){
                        return;
                    }

                    if(val.fullname !== null){
                        this.form.fullname = val.fullname;
                    }

                    if(val.email !== null){
                        this.form.email = val.email;
                    }  
                    
                    if(val.phoneNumber !== null){
                        this.form.phoneNumber = val.phoneNumber;
                    }                      

                    if(val.address !== null){
                        this.form.address = val.address;
                    }
                    
                    if(val.id !== null){
                        this.form.id = val.id
                    }
                }
            }
        }

    }
</script>