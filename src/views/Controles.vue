<template>
    <!-- follow me on twitter @asad_codes -->

<div class="flex flex-wrap place-items-center">
  <section class="relative mx-auto w-screen">
      <!-- navbar -->
    <nav class="fixed z-[999] flex justify-between bg-gray-900 text-white w-screen">
      <div class="flex justify-between px-5 xl:px-12 py-2 flex w-screen items-center">

        <a @click="trocarTela('produtos')" class="cursor-pointer text-3xl font-bold font-heading">Catálogo Web</a>        
        <!-- Nav Links -->

        <!-- Header Icons -->
        <div class="hidden xl:flex items-center space-x-5">
            <button @click="toggleCartMenu()" class="flex items-center hover:text-gray-200" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </button>
                      <!-- Sign In / Register      
          <a class="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
          -->
        </div>
      </div>
      <a @click="toggleCartMenu()" class="cursor-pointer xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <div @click="toggleMenu" class="cursor-pointer navbar-burger self-center mr-12 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
    </nav>
    <aside v-if="carrinho.length > 0" :class="{hidden: !showCartMenu}" id="cart-menu" class="overflow-y-auto h-screen w-screen fixed z-10 bg-gray-100 pt-20">
    <h1 class="mb-10 my-12 text-center text-2xl font-bold">Carrinho</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div  class="overflow-y-auto h-screen  rounded-lg md:w-2/3">
        <div v-for="item in carrinho" :key="item.id" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img :src="'https://raw.githubusercontent.com/ThiagoRazor/tela-produtos/main/src/assets/controles/'+ item.id + '.bmp'" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ item.name }}</h2>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span @click="removerItem(item)" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <strong class="text-green-600">{{ item.quantidade }}</strong>
                <span @click="adicionarItem(item)" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-md">R${{ item.total.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">Total: R$ {{ total.toFixed(2) }}</p>
          </div>
        </div>
        <button @click="finalizarCompra()" class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Baixar Pedido</button>
      </div>
    </div>
</aside>
    
  </section>
</div>
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <div class="lg:flex lg:-mx-2">
                <div  class=" mt-24 space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4" :class="{'hidden': !menuOpen}">
                    <div class="w-f md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                      <input v-model="searchQuery" type="text" id="search-navbar" class="my-4 block w-5/6 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar Produto...">
                    </div>
                     <!--<a @click="trocarTela('produtos')" class="cursor-pointer block font-bold uppercase text-yellow-500 hover:underline">Eletrônicos</a>-->
                    <button @click="logout" class="m-auto rounded-3xl bg-blue-600 hover:bg-blue-700 hover:shadow-xl uppercase rounded-lg px-8 py-2 text-gray-100 shadow-xl transition duration-150">Sair</button>
                  </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p class="text-gray-500 dark:text-gray-300">4 Items</p>
                        <div class="flex items-center">
                            <p class="text-gray-500 dark:text-gray-300">Sort</p>
                            <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">Size</option>
                                <option value="#">Price</option>
                            </select>
                        </div>
                    </div>

                    <div class="z-0 grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div v-for="(produto, index) in produtosExibidos"
                        :key="index"
                        class="flex flex-col items-start justify-center w-full max-h-3/6 max-w-lg mx-auto">
                            <img class="bg-white object-contain w-full rounded-md h-48 xl:h-72" :src="'https://raw.githubusercontent.com/ThiagoRazor/tela-produtos/main/src/assets/controles/'+ produto.id + '.bmp'" alt="T-Shirt">
                            <h2 class="font-bold w-14 text-center mt-4 rounded text-slate-600 bg-orange-300">Nº: {{ produto.id }}</h2>
                            <h4 class="mt-2 h-16 text-md font-medium text-gray-700 dark:text-gray-200 overflow-hidden">{{ produto.name }}</h4>
                            <p :class=" {'text-red-500' : produto.preco == 0, 'text-blue-500': produto.preco > 0}" class="text-lg font-bold">R$ {{ produto.preco == 0 ? ' --.-- ' : Number(produto.preco).toFixed(2)}}</p>

                            <button v-if="produto.preco !== 0" @click="adicionarAoCarrinho(produto)" class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Adicionar ao carrinho</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          <div class="flex justify-center mt-4 ">
            
              <button
                  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                  :disabled="paginaAtual === 1"
                  @click="irParaPagina(paginaAtual - 1)"
              >
                    Anterior
              </button>
              <div
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
              >
                {{paginaAtual}} / {{numeroPagina}}
              </div>
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              :disabled="paginaAtual === numeroPagina"
              @click="irParaPagina(paginaAtual + 1)"
            >
              Próximo
            </button>
          </div>
          </div>
        
    </section>
</template>

<script>
import jsPDF from 'jspdf';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import { mapState } from 'vuex';

export default {
  name: "Produtos",
  computed: {...mapState(['userId'])},
  data() {
    return {
      produtos: [],
      searchQuery: "",
      carrinho:[],
      produtoSelecionado: null,
      total:0,
      itensPorPagina: 32,
      paginaAtual: 1,
      searchQuery: '',
      numeroPaginas: 14,
      showCartMenu: false,
      menuOpen: window.innerWidth >= 1280,
      categoriaSelecionada: 'todos',
      usuarios:[],
      categoriaAtiva: 'todos'
    };
  },

  
  mounted() {
    this.carregarProdutos('todos');
  },
  methods: {
    carregarProdutos(categoriaSelecionada) {
    fetch("https://raw.githubusercontent.com/ThiagoRazor/tela-produtos/main/src/data/controles.json")
      .then(response => response.json())
      .then(json => {
        this.produtos = json;
        this.categoriaSelecionada = categoriaSelecionada;
        this.atualizarNumeroPaginas();
      });
  },
    calcularNumeroPaginas(){
      return Math.ceil(this.produtosFiltrados.length / this.itensPorPagina)
    },
    trocarTela(categoriaSelecionada){
          this.$router.push({ name: `${categoriaSelecionada}`, params: { id: this.$store.state.userId } });
        },
        mudarPagina(pagina){
            this.paginaAtual = pagina;
        },
        irParaPagina(pagina){
          this.mudarPagina(pagina);
          window.scrollTo({ top: 0 });
        },
        adicionarItem(item){
      this.adicionarAoCarrinho(item);
    },
    atualizarNumeroPaginas() {
      this.numeroPaginas = Math.ceil(this.produtos.length / this.itensPorPagina);
    },
    removerItem(item){
      this.removerDoCarrinho(item);
    },
    async finalizarCompra() {
          const db = getFirestore();
          const auth = getAuth();
          const user = auth.currentUser;
          const date = new Date();

          const userRef = doc(db, "usuarios", this.$route.params.id);
          const userDoc = await getDoc(userRef);
          let userData = null;
          if (userDoc.exists()) {
            // Obter os dados do usuário do documento
            userData = userDoc.data();
            // restante do código
          } else {
            console.log("Documento do usuário não existe");
          }
          const productsRef = collection(db, "products");
          const productsSnapshot = await getDocs(productsRef);
          const productsData = productsSnapshot.docs.map(doc => doc.data());

          // Criar documento PDF
          const pdf = new jsPDF();
          pdf.setFontSize(12);
          pdf.text(`Nome: ${userData.nome} ${userData.sobrenome}`, 10, 10);
          pdf.text(`Data: ${date.toLocaleDateString()}`, 170, 10);
          pdf.text(`Empresa: ${userData.empresa}`, 90, 10);
          pdf.text(`Cidade: ${userData.cidade}`, 10, 20);
          pdf.text(`CEP: ${userData.cep}`, 90, 20);

          let y = 40;
          this.carrinho.forEach(item => {
          if (item && item.name) { // verificar se item não é nulo ou indefinido
            pdf.setFontSize(10);
            pdf.text(`${item.name} Qtd (${item.quantidade}x) - R$ ${item.total.toFixed(2)}`, 10, y);
            y += 10;
          }
          });

      pdf.setFontSize(14);
      pdf.text(`Total: R$ ${this.total.toFixed(2)}`, 10, y)
      
      pdf.save('pedido.pdf');
        }, 
        
    adicionarAoCarrinho(produto){
        
        if (produto.preco !== 0){
          const index = this.carrinho.findIndex(item => item.id === produto.id);
          if(index > -1){
            this.carrinho[index].quantidade++;
            this.carrinho[index].total += parseFloat(produto.preco);
            this.total += parseFloat(produto.preco);
          } else{
            this.carrinho.push({
              id: produto.id,
              name: produto.name,
              preco: produto.preco,
              quantidade: 1,
              total: parseFloat(produto.preco)
            })
            this.total += parseFloat(produto.preco);
          }
          this.showCartMenu = true;
        }
      },
    removerDoCarrinho(item){
      const index = this.carrinho.findIndex((produto) => produto.id === item.id)
      if(index > -1){
        if(this.carrinho[index].quantidade > 1){
          this.carrinho[index].quantidade--;
          this.carrinho[index].total -= parseFloat(item.preco);
          this.total -= this.carrinho[index].preco;
        } else{
          this.carrinho.splice(index, 1);
          this.total -= item.preco;
        }
      }
      if(this.carrinho.length === 0){
        this.showCartMenu = false;
      }
    },
    toggleCartMenu(){
      this.showCartMenu = !this.showCartMenu;
    },
    toggleMenu(){
      if(window.innerWidth < 1024){
      this.menuOpen = !this.menuOpen;
      window.scrollTo({ top: 0 });
      }
    },
    logout(){
      const auth = getAuth();
      auth.signOut().then(() => {
        this.$router.push('/');
      }).catch((error) => {
        console.log('Erro')
      })
    }
    
},
  computed: {
    filteredProdutos() {
      return this.filtrarProdutos();
      
      
    },
    produtosExibidos() {
        const searchQuery = this.searchQuery.toLowerCase();
        const indiceInicial = (this.paginaAtual - 1) * this.itensPorPagina;
        const indiceFinal = this.paginaAtual * this.itensPorPagina;

        let produtosFiltrados = this.produtos;

          if (this.categoriaSelecionada !== "todos") {
              produtosFiltrados = produtosFiltrados.filter(
              (produto) => produto.categoria === this.categoriaSelecionada
              );
            }

  produtosFiltrados = produtosFiltrados.filter((produto) => {
    return (
      produto.id.toLowerCase().includes(searchQuery) ||
      produto.name.toLowerCase().includes(searchQuery) ||
      produto.preco.toLowerCase().toString().includes(searchQuery)
    );
  });

  return produtosFiltrados.slice(indiceInicial, indiceFinal);
},
    
numeroPagina() {
    let produtosFiltrados = this.produtos;
    if (this.categoriaSelecionada !== "todos") {
      produtosFiltrados = produtosFiltrados.filter(
        (produto) => produto.categoria === this.categoriaSelecionada
      );
    }
    return Math.ceil(produtosFiltrados.length / this.itensPorPagina);
  }
},
watch: {
    categoriaSelecionada() {
      this.paginaAtual = 1;
    }
  }
}
</script>

