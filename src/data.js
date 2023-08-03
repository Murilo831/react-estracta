
import { name, random, address } from 'faker';


// Função para gerar dados fictícios
const generateFakeData = (count) => {
    const generatedData = [];
    for (let i = 1; i <= count; i++) {
        generatedData.push({
            id: i,
            name: name.findName(),
            age: random.number({ min: 18, max: 60 }),
            city: address.city(),
        });
    }
    return generatedData;
};

// Gera 100 registros fictícios
export const fakeData = generateFakeData(100);
