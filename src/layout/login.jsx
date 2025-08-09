import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      
    };

    return (
        <main className="flex flex-col justify-center items-center border-t-8 border-teal-900 font-semibold bg-yellow-50 min-h-screen">
            <h1 className="text-teal-900 text-4xl font-bold my-6">Sign In</h1>
            
            <form 
                className="border border-teal-900 rounded-lg p-6 text-teal-900 my-4 w-80 shadow-md bg-yellow-50"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-3">
                    <label className="font-semibold" htmlFor="username">Username:</label>
                    <input 
                        className="border rounded-lg border-teal-900 px-3 py-2 text-teal-900 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-teal-700" 
                        placeholder="Masukkan username" 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="flex flex-col gap-3 mt-4">
                    <label className="font-semibold" htmlFor="password">Password:</label>
                    <input 
                        className="border rounded-lg border-teal-900 px-3 py-2 text-teal-900 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-teal-700" 
                        placeholder="Masukkan password" 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full border rounded-lg border-teal-900 px-6 py-2 hover:cursor-pointer bg-teal-800 hover:bg-teal-900 text-white mt-6 transition"
                >
                    Sign In
                </button>
            </form>

            <p className="text-teal-900 mt-4">
                Belum Punya Akun? <Link className="font-bold hover:text-teal-800" to="/register">Daftar</Link>
            </p>
        </main>
    );
};

export default Login;
