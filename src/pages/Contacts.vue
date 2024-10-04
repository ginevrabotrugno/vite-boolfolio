<script>
    import axios from 'axios';
    import { store } from '../store/store';
    export default {
        name: 'contacts',
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
            }
        },
        methods: {
            sendForm(){
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }       

                axios.post(store.apiUrl + 'send-email', data)
                    .then(res => {
                        if(!res.data.success){
                            this.errors = res.data.errors;
                        } else {
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

    <div v-if="isSending" class="loader"></div>

    <form v-else @submit.prevent="sendForm">
        <input v-model="name" type="text" placeholder="Nome">
        <small class="error"> {{ errors.name?.toString() }} </small>
        <input v-model="email" type="email" placeholder="Email">
        <small class="error"> {{ errors.email?.toString() }} </small>
        <textarea v-model="message" name="message" id="message" cols="30" rows="10" placeholder="Messaggio..."></textarea>
        <small class="error"> {{ errors.message?.toString() }} </small>
        <button type="submit">INVIA</button>
    </form>
</template>

<style scoped lang="scss">  
    .loader {
        width: 40px;
        aspect-ratio: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:before,
        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            margin: -8px 0 0 -8px;
            width: 16px;
            aspect-ratio: 1;
            background: var(--secondary);
            animation:
                l1-1 2s  infinite,
                l1-2 .5s infinite;
        }

        &:after {
            background:var(--accent);
            animation-delay: -1s,0s;
        }

        @keyframes l1-1 {
            0%   {top:0   ;left:0}
            25%  {top:100%;left:0}
            50%  {top:100%;left:100%}
            75%  {top:0   ;left:100%}
            100% {top:0   ;left:0}
        }

        @keyframes l1-2 {
            80%,100% {transform: rotate(0.5turn)}
        }

    }

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
    
</style>

