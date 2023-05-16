<template>
    <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
  <div class="h-5/4 rounded-xl bg-white px-16 py-14 shadow-lg backdrop-blur-md max-sm:px-14">
    <div class="text-gray-800 font-bold text-2xl">
      <div class="mb-8 flex flex-col items-center">
        <h1 class="mb-2 text-2xl">Catálogo Web</h1>
        <p class="text-center text-sm text-gray-600 mt-2 font-normal">Não possui uma conta? <RouterLink to="/cadastro" class="text-blue-600 hover:text-blue-700 hover:underline">Se inscreva!</RouterLink></p>
      </div>
      <form @submit.prevent="fazerLogin">
        <div class="flex flex-col my-4">
                            <label for="email" class="text-gray-700">Email:</label>
                            <input v-model="email" type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 font-normal" placeholder="Insira seu email">
                        </div>
        <div class="flex flex-col my-4">
                            <label for="password" class="text-gray-700">Senha:</label>
                            <div x-data="{ show: false }" class="relative flex items-center mt-2">
                                <input v-model="senha" name="password" id="password" class="flex-1 p-2 pr-10 font-normal border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Insira sua senha" type="password">
                                <button  type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                    <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>

                                    <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </button>
                            </div>
                        </div>
        <div class="my-4 space-x-4 flex justify-end text-sm text-black font-normal">
          <button type="submit" class="rounded-3xl bg-blue-600 hover:bg-blue-700 hover:shadow-xl uppercase rounded-lg px-8 py-2 text-gray-100 shadow-xl transition duration-150">Confirmar</button>
        </div>
        <div class="text-sm text-red-600 mt-2 font-bold">{{ state.error }}</div>
      </form>
    </div>
  </div>
</div>
</template>


<script>
import { collection, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "@/main";

export default {
  data(){
    return {
      email: '',
      senha: '',
      state: {
        error: ''
      }
    }
  },
  methods:{
    async fazerLogin() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, this.email, this.senha);
    const userQuery = query(collection(db, "usuarios"), where("uid", "==", userCredential.user.uid));
    const userSnapshot = await getDocs(userQuery);
    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();
    const userId = userDoc.id;
    this.$store.commit('setUserId', userId); // atualiza o estado global com a ID do usuário
    this.$router.push({ name: 'produtos', params: { id: userId } }); // passa o id como um parâmetro na rota
  } catch (error) {
    console.log(error);
    this.state.error = 'Credenciais Inválidas!';
  }
}
  }
}
</script>



