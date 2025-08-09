import List from '../assets/logo-catatan.svg'
import List2 from '../assets/list-1.svg'

const Informasi =()=>{
    return (
        <>
        <main className='container bg-silver flex justify-center gap-16 min-h-screen'>
            <div className='border-8 border-primary p-16 h-1/3 w-1/3 rounded-3xl flex flex-col justify-center gap-y-4'>
                <img className='h-auto' src={List} alt="" />
                <h1 className='text-center font-bold text-primary text-3xl'>Daftar Penyakit</h1>
                <button className='text-center border rounded-lg px-2 py-3 text-silver bg-primary'>Lihat</button>
            </div>
            <div className='border-8 border-primary p-16 h-1/3 w-1/3 rounded-3xl flex flex-col justify-center gap-y-4'>
                <img className='h-auto' src={List2} alt="" />
                <h1 className='text-center font-bold text-primary text-3xl'>Daftar Gejala</h1>
                <button className='text-center border rounded-lg px-2 py-3 text-silver bg-primary'>Lihat</button>
            </div>
            
        </main>
        </>
    )
}

export default Informasi;