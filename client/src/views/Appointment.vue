<template>
    <div class="container">
        <div v-if="show_alert">
            <h3 class="badge danger">Toate campurile sunt obligatorii</h3>
        </div>
        <div v-if="show_alert_success" class="alert alert-success" role="alert">
            Cererea a fost trimisa cu success
        </div>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    Email*
                </span>
            </div>
            <input type="text" class="form-control" v-model="appo.email" placeholder="introduceti aici adresa de email">
        </div>

         <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    Telefon*
                </span>
            </div>
            <input type="text" class="form-control" v-model="appo.phone" placeholder="introduceti aici numarul de telefon pe care veti fi contactat in vederea confirmarii">
        </div>

        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    Data la care doriti programarea*
                </span>
            </div>
            <input type="date" class="form-control" v-model="appo.date" placeholder="Data programarii">
        </div>

        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    Numele dumneavoastra*
                </span>
            </div>
            <input type="text" class="form-control" v-model="appo.name" placeholder="Nume">
        </div>
        <div>
            <hr>
            Sunt de acord cu stocarea si procesarea datelor cu scopul de a realiza programarea.*
            <input type="checkbox" class="form-control text-left" v-model="appo.consent">
            <small>*nota: datele vor fi folosite exclusiv in scopul programarii. Acestea pot fi sterse din baza noastra de date in orice moment la cererea dumneavoastra</small>
            <hr>
        </div>

      
        <vue-recaptcha class="text-center" :loadRecaptchaScript="true" sitekey="6LdDtLMUAAAAAOcgmkRQ0mklOeasX7KpKTqMtXUR">
                <button @click="validate" class="btn btn-primary">Trimite cererea</button>
        </vue-recaptcha>


    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
    components: { VueRecaptcha },
    data(){
        return {
            show_alert: false,
            show_alert_success: false,
            appo: {
                email: null,
                phone: null,
                date: null,
                name: null,
                consent: false
            }
        }
    },
    methods: {
        validate() {
            const valid = Object.values(this.appo).every(item => item)
            if (valid) {
                this.$store.dispatch('createAppointment', this.appo).then(() => {
                    this.appo =  {
                        email: null,
                        phone: null,
                        date: null,
                        name: null,
                        consent: false,
                        date_created: new Date()
                    }
                    this.show_alert_success = true
                })
            } else {
                this.show_alert = true
            }
        }
    },

    watch: {
        appo: {
            handler(){
                const valid = Object.values(this.appo).every(item => item)
                if(valid) {
                    this.show_alert = false
                }
            },
            deep: true
        }
    }


}
</script>

<style lang="scss" scoped>
    h3.danger {
        color: red;
    }
</style>