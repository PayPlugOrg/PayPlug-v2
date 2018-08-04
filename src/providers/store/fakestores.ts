const stores = [
  {
    id: 1,
    name: "Cadillac Hamburgueria",
    about: {
      address: "Rua Pitanga, 320",
      category: "HAMBURGUERIA",
      bio: "O melhor e mais barato lanche da cidade",
      likes: 89,
      likesMean: 4.2,
      evaluation: 23,
      evaluationMean: 4.7
    },
    offers: [
      {
        id: 1,
        title: "HAMBURGUER SIMPLÃO",
        description: "Cebola caramelizada, Hamburguer caseiro, Batata em chips",
        valueFrom: "10,00",
        valueTo: "8,90",
        cart: "cinza",
        like: "cinza",
        timeLeft: "05:10:06"
      },
      {
        id: 2,
        title: "HAMBURGUER TRADICIONAL",
        description: "Cebola caramelizada, Hamburguer caseiro, Batata em chips",
        valueFrom: "15,90",
        valueTo: "12,50",
        cart: "cinza",
        like: "cinza",
        timeLeft: "08:23:10"
      },
      {
        id: 3,
        title: "HAMBURGUER DUPLO",
        description:
          "Cebola caramelizada, Dois Hamburguers caseiros, Batata em chips",
        valueFrom: "19,80",
        valueTo: "17,50",
        cart: "cinza",
        like: "cinza",
        timeLeft: "01:18:34"
      }
    ]
  },
  {
    id: 2,
    name: "Lanche do Tiago",
    about: {
      address: "Rua Harisson José, 1001, Campo Mourão/PR",
      category: "RESTAURANTE",
      bio:
        "Os lanches mais simpáticos da cidade, que levam nomes de super-heróis",
      likes: 123,
      likesMean: 4.5,
      evaluation: 56,
      evaluationMean: 4.4
    },
    offers: [
      {
        id: 1,
        title: "HAMBURGUER HULK",
        description: "Cebola caramelizada, Hamburguer caseiro, Batata em chips",
        valueFrom: "26,90",
        valueTo: "22,80",
        cart: "cinza",
        like: "cinza",
        timeLeft: "07:41:55"
      },
      {
        id: 2,
        title: "HAMBURGUER GAVIÃO",
        description: "Cebola caramelizada, Hamburguer caseiro, Batata em chips",
        valueFrom: "29,90",
        valueTo: "26,80",
        cart: "cinza",
        like: "cinza",
        timeLeft: "19:22:32"
      },
      {
        id: 3,
        title: "HAMBURGUER THOR",
        description:
          "Cebola caramelizada, Dois Hamburguers caseiros, Batata em chips",
        valueFrom: "29,90",
        valueTo: "23,80",
        cart: "cinza",
        like: "cinza",
        timeLeft: "13:40:30"
      }
    ]
  }
];

const hotOffers = [
  {
    store: 1,
    id: 1,
    title: "HAMBURGUER SIMPLÃO",
    description: "Cebola caramelizada, Hamburguer caseiro, Batata em chips",
    from: "10,00",
    to: "8,90",
    cart: "cinza",
    like: "cinza"
  },
  {
    store: 2,
    id: 1,
    title: "HAMBURGUER THOR",
    description:
      "Cebola caramelizada, Dois Hamburguers caseiros, Batata em chips",
    from: "24,00",
    to: "18,90",
    cart: "cinza",
    like: "cinza"
  }
];

export default { stores, hotOffers };
