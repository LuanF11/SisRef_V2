const lancheDaManha = {
    id: 2378,
    date: "2024-03-12",
    description: "Cuscuz c/ ovo ou carne moída + Suco de caju",
    campus_id: 1,
    meal_id: 0,
    permission: 1,
    agendado: false,
    canceled_by_student: false,
    meal: {
        id: 0,
        description: "Lanche da manhã",
        timeEnd: "10:00:00",
        timeStart: "09:10:00",
        campus_id: 1,
        qtdTimeReservationEnd: 1,
        qtdTimeReservationStart: 9
    }
};

const almoco = {
    id: 2379,
    date: "2024-03-12",
    description: "Arroz parbolizado; Feijão preto com macaxeira; Frango ao molho; Salada de alface e tomate; Suco de caju; Banana prata",
    campus_id: 1,
    meal_id: 1,
    permission: 1,
    agendado: false,
    canceled_by_student: false,
    meal: {
        id: 1,
        description: "Almoço",
        timeEnd: "13:00:00",
        timeStart: "11:20:00",
        campus_id: 1,
        qtdTimeReservationEnd: 1,
        qtdTimeReservationStart: 11
    }
};

const lancheDaTarde = {
    id: 2380,
    date: "2024-03-11",
    description: "Cuscuz c/ ovo ou carne moída + Suco de caju",
    campus_id: 1,
    meal_id: 2,
    permission: 1,
    agendado: false,
    canceled_by_student: false,
    meal: {
        id: 2,
        description: "Lanche da tarde",
        timeEnd: "16:00:00",
        timeStart: "15:10:00",
        campus_id: 1,
        qtdTimeReservationEnd: 1,
        qtdTimeReservationStart: 15
    }
};

const lancheDaNoite = {
    id: 2381,
    date: "2024-03-10",
    description: "Cuscuz c/ ovo ou carne moída + Suco de caju",
    campus_id: 1,
    meal_id: 3,
    permission: 1,
    agendado: false,
    canceled_by_student: false,
    meal: {
        id: 3,
        description: "Lanche da noite",
        timeEnd: "20:00:00",
        timeStart: "19:10:00",
        campus_id: 1,
        qtdTimeReservationEnd: 1,
        qtdTimeReservationStart: 19
    }
};

const todasAsRefeicoes = [
    lancheDaManha,
    almoco,
    lancheDaTarde,
    lancheDaNoite
];

const  foodRestrictions = [
    "Leite",
    "Ovo",
    "Macarrão"
]

const proxy = {
    '/api/meal-by-day': (req, res) => {
        return res.json(todasAsRefeicoes);
    },
    '/api/reserve-meal': (req, res) => {
        const { id } = req.query;

        if (!id) return res.status(400).json({ error: 'Id is required' });

        const meal = todasAsRefeicoes.find(item => item.id == id);

        if (!meal) return res.status(404).json({ error: 'Meal not found' });

        meal.agendado = true;

        res.json(todasAsRefeicoes);
    },
    '/api/cancel-meal': (req, res) => {
        const { id } = req.query;

        if (!id) return res.status(400).json({ error: 'Id is required' });

        const meal = todasAsRefeicoes.find(item => item.id == id);

        if (!meal) return res.status(404).json({ error: 'Meal not found' });

        meal.canceled_by_student = true;

        res.json(todasAsRefeicoes);
    },
    '/api/food-restrictions': (req, res) => {
        return res.json(foodRestrictions);
    },
    '/api/add-food-restriction': (req, res) => {
        const { restriction } = req.query;

        if (!restriction) return res.status(400).json({ error: 'Restriction is required' });

        foodRestrictions.push(restriction);

        res.json(foodRestrictions);
    },
    '/api/remove-food-restriction': (req, res) => {
        const { restriction } = req.query;

        if (!restriction) return res.status(400).json({ error: 'Restriction is required' });

        const index = foodRestrictions.indexOf(restriction);

        if (index === -1) return res.status(404).json({ error: 'Food restriction not found' });

        foodRestrictions.splice(index, 1);

        res.json(foodRestrictions);
    }
}



module.exports = proxy;