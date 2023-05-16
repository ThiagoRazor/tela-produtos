<template>
<body>
    <div class="w-full min-h-screen flex items-center justify-center bg-gray-900">
        <div class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div class="mb-8 flex flex-col items-center">
                <h1 class="mb-2 text-2xl font-bold">Formulário de Cadastro</h1>
                <p class="text-center text-sm text-gray-600 mt-2 font-normal">Já possui uma conta? <RouterLink to="/" class="text-blue-600 hover:text-blue-700 hover:underline">Faça o Login!</RouterLink></p>
            </div>
            <form @submit.prevent="cadastrarUsuario">
            <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Nome:
                        </label>
                        <input required id="nome" v-model="nome" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text">
                </div>
                <div class="md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                        Sobrenome:
                    </label>
                    <input required id="sobrenome" v-model="sobrenome" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text">
                </div>
            </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Email:
      </label>
      <input required id="email" v-model="email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="email">
    </div>
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Senha:
      </label>
      <input required id="senha" v-model="senha" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="password">
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Empresa:
                        </label>
                        <input required id="empresa" v-model="empresa" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text">
                                        </div>
            </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        Cidade:
      </label>
      <input required id="cidade" v-model="cidade" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text">
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
        CEP:
      </label>
      <input required id="cep" v-model="cep" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text">
    </div>
  </div>
  <div class="my-4 space-x-4 flex justify-end text-sm text-black font-normal">
          <button @click="" type="submit" class="rounded-3xl bg-blue-600 hover:bg-blue-700 hover:shadow-xl uppercase rounded-lg px-8 py-2 text-gray-100 shadow-xl transition duration-150">Confirmar</button>
        </div>
                </form>
            </div>
        </div>
    </body>
</template>

<script>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { RouterLink } from 'vue-router';

export default {
  name: 'Cadastro',
  setup() {
    const auth = getAuth();
    const db = getFirestore();

    const nome = ref('');
    const sobrenome = ref('');
    const email = ref('');
    const senha = ref('');
    const empresa = ref('');
    const cidade = ref('');
    const cep = ref('');

    const cadastrarUsuario = async () => {

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          senha.value
        );
        const user = userCredential.user;
        const uid = user.uid;

        const docRef = await addDoc(collection(db, 'usuarios'), {
          nome: nome.value,
          sobrenome: sobrenome.value,
          senha: senha.value,
          email: email.value,
          cidade: cidade.value,
          cep: cep.value,
          empresa: empresa.value,
          uid: uid
        });

        nome.value = '';
        sobrenome.value = '';
        email.value = '';
        senha.value = '';
        empresa.value = '';
        cidade.value = '';
        cep.value = '';
        
        console.log('Usuário cadastrado com sucesso!');
      } catch (error) {
        console.error(error);
        console.log('O campo é obrigatório!')
      }
    };

    return {
      nome,
      sobrenome,
      email,
      senha,
      empresa,
      cidade,
      cep,
      cadastrarUsuario
    };
  },
};
</script>