<template>
     <div>
        <div class="card text-white bg-dark">
            <div class="d-flex justify-content-center p-2">
                <img :src="member.image" alt="fotoequipo" height="200" width="200">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{member.nombre}}</h5>
                    <p class="card-text">{{member.rol}}</p>
                    <p class="card-text">Pasatiempo:
                        {{member.descripcion}}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"></small>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

