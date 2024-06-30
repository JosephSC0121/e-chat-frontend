export default function Landing() {

    return (
        <div className="flex flex-col items-center h-screen bg-primary pt-20">
            <div className="w-full max-w-5xl flex flex-col h-full bg-primary mb-10">
                <div className="flex flex-col rounded-xl border-white bg-secondary text-white p-6 mt-10">
                    <h1 className="text-xl font-bold">Makers</h1>
                    <span className="text-gray-300">We present an advanced AI-driven ChatBot tailored for 'Makers Tech' to enhance customer interaction and streamline the purchasing process. This ChatBot is designed to provide real-time information about product inventory, features, and prices through a user-friendly graphical interface, ensuring a seamless and personalized shopping experience.</span>
                    <div className="flex flex-col items-center ">
                        <img className="h-80 w-80 items-center" src="logo.png" alt="" />
                    </div>
                </div>
                <div className="p-4 bg-primary border-t mt-auto">
                    <div className="flex flex-col items-center space-x-2">
                        <a href='/inventory/chat' className="flex flex-row p-4 bg-secondary text-white rounded">
                            Do you want to check our products?  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-corner-down-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
