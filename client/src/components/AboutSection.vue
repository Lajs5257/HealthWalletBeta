<template>
<section id="about">
    <v-container fluid>
    <v-row align="center" justify="center">
        <v-col cols="10">
        <v-row align="center" justify="center">
            <v-col cols="12" md="7">
            <h1 class="font-weight-light display-2">About Us</h1>
            <h1 class="font-weight-light display-1 mb-3">
               
            </h1>
            <v-row>
                <v-col cols="12" class="d-flex align-center">
                <v-img
                    :src="require('@/assets/img/icon1.svg')"
                    max-width="60px"
                    class="mr-4"
                />
                <p class="text-justify">
                Available 24/7 thanks to the Blockchain network
                </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                <v-img
                    :src="require('@/assets/img/icon2.svg')"
                    max-width="60px"
                    class="mr-4"
                />
                <p class="text-justify">
                    Networking with Doctors and Hospitals around the World!
                </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                <v-img
                    :src="require('@/assets/img/icon3.svg')"
                    max-width="60px"
                    class="mr-4"
                />
                <p class="text-justify">
                    Quick access to all your medical information
                </p>
                </v-col>
            </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
            <v-img
                :src="require('@/assets/img/ill1.svg')"
                class="d-block ml-auto mr-auto"
                max-width="400px"
            />
            </v-col>
        </v-row>
        </v-col>
    </v-row>
    </v-container>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>