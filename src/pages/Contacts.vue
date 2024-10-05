<script>
    import axios from 'axios';
    import { store } from '../store/store';
    import Loader from '../components/partials/Loader.vue';
    export default {
        name: 'contacts',
        components: {
            Loader
        },
        data(){
            return {
                name: '',
                email: '',
                message: '',
                errors: {
                    name: [],
                    email: [],
                    message: []
                },
                sending: false,
                sent: false,
            }
        },
        methods: {
            sendForm(){
                this.sending = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }       

                axios.post(store.apiUrl + 'send-email', data)
                    .then(res => {
                        this.sending = false;
                        if(!res.data.success){
                            this.errors = res.data.errors;
                        } else {
                            this.sent = true;
                            this.errors = {
                                name: [],
                                email: [],
                                message: []
                            }
                        }
                        
                        this.data = res.data.data;
                        console.log(this.data);
                        
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        }
    }
</script>

<template>
    <h1>Contacts</h1>
    
    <div v-if="!this.sending">
        <form v-if="!sent" @submit.prevent="sendForm">
            <input v-model="name" type="text" placeholder="Nome">
            <small class="error"> {{ errors.name?.toString() }} </small>
            <input v-model="email" type="email" placeholder="Email">
            <small class="error"> {{ errors.email?.toString() }} </small>
            <textarea v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Messaggio..."></textarea>
            <small class="error"> {{ errors.message?.toString() }} </small>
            <button type="submit">INVIA</button>
        </form>
        <div v-else class="sent">
            <h2>Grazie! Il messaggio è stato inviato correttamente.</h2>
        </div>
    </div>

    <Loader v-else></Loader>
</template>

<style scoped lang="scss">  

    form {
        max-width: 40%;
        margin: 40px auto;

        input, textarea {
            display: block;
            width: 100%;
            margin-top: 25px;
            font-family: inherit;
            border-radius: 20px;
            border: 1px solid var(--secondary);
            padding: 15px;
            background-color: var(--background);
            color: var(--primary);
        }

        textarea {
            resize: none;
        }

        button {
            background-color: var(--secondary);
            border-radius: 20px;
            border: 2px solid var(--secondary);
            color: var(--primary);
            padding: 15px 20px;
            margin-top: 25px;
            font-family: inherit;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                background-color: var(--accent);
                border: 2px solid var(--accent);
                transform: scale(1.2);
                font-weight: 700;
            }
        }

        .error {
            color: red;
            display: block;
            text-align: left;
            margin: 5px 10px;
        }
    }

    .sent {
        width: 60%;
        padding: 20px 30px;
        margin: 50px auto;
        color: var(--accent);
        text-align: center;
    }
    
</style>

