const app = new Vue({
    el: "#app",
    data: {
        mailList: [],
        myLength: 10,
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                    this.mailList.push(res.data.response)
                })
        }
    }
});