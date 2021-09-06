<template>
    <div id="app">
        <h3 class="d-flex justify-content-center">registro de produtos</h3>
        <div>
            <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
            @click="addClick()">Add Produtos</button>
            <table class="table table-striped">
            <thead>
                <tr>
                    <th>
                        ProdutoID
                    </th>
                    <th>
                        ProdutoNome
                    </th>
                    <th>
                        ProdutoPreco
                    </th>
                    <th>
                        Options
                    </th>
                </tr>
            <tbody>
                
                <tr v-for="pro in produto" :key="pro">
                    <td>{{pro.ProdutoID}}</td>
                    <td>{{pro.ProdutoNome}}</td>
                    <td>{{pro.ProdutoPreco}}</td>
                    <td>
                        <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        @click="editClick()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></button>
                        <button type="button" @click="deleteClick(por.ProdutoID)"  class="btn btn-light mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg></button>
                        <button type="button" class="btn btn-light mr-1"><i class="far fa-edit"></i></button>
                        <button type="button" class="btn btn-light mr-1"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            </tbody>
            </thead>
        </table>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModallabel" aria-hidden="true">     
        <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">Nome do Produto</span>
                    <input type="text" class="form-control" v-model="ProdutoNome">
                </div>
                <button type="button" v-if="ProdutoID==0" class="btn btn-primary" @click="createClick()">Criar</button>
                <button type="button" v-if="ProdutoID!=0" class="btn btn-primary" @click="updateClick()">Atualizar</button>
            </div>           
        </div>
        </div>       
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "registroproduto",
    data: () => {
        return{
            produto:[],
            modalTitle:[],
            ProdutoID:0,
            ProdutoNome:[],
            ProdutoPreco:[]
        }
    },
    methods:{
        refreshData(){
            axios.get("https://localhost:44385/api/Produtos")
            .then((response)=>{
                this.produto=response.data;
            })
        },
        addClick(){
            this.modalTitle="Add Produtos";
            this.ProdutoID=0;
            this.ProdutoNome="";
            this.ProdutoPreco="";
        },
        editClick(pro){
            this.modalTitle="Editar Produtos";
            this.ProdutoID=0;
            this.ProdutoNome=pro.ProdutoNome;
            this.ProdutoPreco=pro.ProdutoPreco;
        },
        createClick(){
            axios.post("https://localhost:44385/api/Produtos",{
                ProdutoNome:this.ProdutoNome,
                ProdutoPreco:this.ProdutoPreco
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            })            
        },
        updateClick(){
            axios.post("https://localhost:44385/api/Produtos",{
                ProdutoID:this.ProdutoID,
                ProdutoNome:this.ProdutoNome,
                ProdutoPreco:this.ProdutoPreco
            })
            .then((response)=>{
                this.refreshData();
                alert(response.data);
            });            
        },
        deleteClick(id){
            if(!confirm("Tem certeza?")){
                return;
            }
            axios.delete("https://localhost:44385/api/Produtos/"+id)
            .then((response)=>{
                this.produto=response.data;
            })
        }
    },
    mounted:function(){
        this.refreshData();
    }
}
</script>