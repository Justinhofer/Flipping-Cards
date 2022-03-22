new Vue({
    el: "#flashcards-app",
    data: {
            cardQuestion: "",
            cardAnswer:"",
            cardCategory:"",
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },
            {
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ]
    },
    methods:{
        newCard: function (){
            this.cards.push({
                question: this.cardQuestion,
                answer:this.cardAnswer,
                category: this.cardCategory,
                flipped:false,
            })
            this.cardQuestion = "";
            this.cardAnswer= "";
            this.cardCategory= "";
        }
    }
});

