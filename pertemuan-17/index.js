//1.

const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
};

const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
};

messages();



//2. 
const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(result => {
            const users = result.data;  // Akses 'data' dari response
            users.forEach(user => {
                console.log(`${user.first_name} ${user.last_name}`);
            });
        })
        .catch(error => console.log(error));
};

ambilDataUser();



//3.
const ambilData = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const users = await response.json();
        users.data.forEach(user => {
            console.log(`${user.first_name} ${user.last_name}`);
        });
    } catch (error) {
        console.log(error);
    }
};

ambilData();

//4. import axios from 'axios';

const DataUser = async () => {
    try {
        const { data } = await axios.get("https://reqres.in/api/users");
        data.data.forEach(user => {
            console.log(`${user.first_name} ${user.last_name}`);
        });
    } catch (error) {
        console.log(error);
    }
};

DataUser();
