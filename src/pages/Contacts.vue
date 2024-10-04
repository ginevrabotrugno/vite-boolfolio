<script>
    export default {
        name: 'contacts'
    }
</script>

<template>
    <h1>Contacts</h1>
    <form>
        <input type="text" placeholder="Nome">
        <input type="email" placeholder="Email">
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Messaggio..."></textarea>
        <button type="submit">INVIA</button>
    </form>
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
    }
    
</style>

