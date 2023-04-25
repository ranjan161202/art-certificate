import {ethers} from "ethers";

const Buy = ({state,imageHash})=>{
    const buyChai = async (event)=>{
        event.preventDefault();
        const {contract}=state;
        const name =document.querySelector("#name").value;
        const imgHash = document.querySelector("#imgHash").value;
        console.log(name, imgHash, contract);
        const amount= {value:ethers.utils.parseEther("0.001")};
        const transaction = await contract.buyImage(name, imgHash, amount);
        await transaction.wait();
        document.querySelector("#transactionMsg").innerHTML='Transaction is done';
    };
    console.log(imageHash)
    return (
        <form onSubmit={buyChai}>
            <label>Name</label>
            <input type="text" id="name" placeholder="Enter Your Name"></input>
            <label>Image Hash</label>
            <input
                type="text"
                id="imgHash"
                placeholder="Enter Your Message"
                defaultValue={imageHash}>
            </input>
            <button type="submit">Pay</button>
            <div id="transactionMsg"></div>
        </form>
    )
}

export default Buy;