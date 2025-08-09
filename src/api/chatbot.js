const Chatbot =()=>{
    async function query(data) {
        const response = await fetch(
            "http://localhost:3000/api/v1/prediction/dbd8e250-6971-4251-8f63-ef7dfb5e2b9e",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );
        const result = await response.json();
        return result;
    }
    
    query({"question": "Hey, how are you?"}).then((response) => {
        console.log(response);
    });
};

export default Chatbot;