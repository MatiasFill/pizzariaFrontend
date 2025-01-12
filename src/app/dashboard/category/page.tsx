import styles from './styles.module.scss'
import { Button } from '../components/button'
import { api} from '@/services/api'
import { Award } from 'lucide-react'
import { redirect } from 'next/navigation'
import { getCookieServer } from '@/lib/cookieServer'


export default async function Category() {
    async function handleRegistrarCategory(FormData: FormData){
        "use server"
        const name = FormData.get("name")

        if(name === "")return;
        const data = {
            name: name,

        }

        const token = await getCookieServer();

        await api.post("/Category", data, {
            headers:{
                Authorization: `Bearer ${token }`
            }
        })
        .catch((err) => {
            console.log(err);
            return;
       })

       redirect("/dashboard")
       

    }
    return(
        <main className={styles.container}>
            <h1>Cadastrar nova Categoria</h1>

            <form 
                className={styles.form}
                action={handleRegistrarCategory}
            >
                <input
                    type='text'
                    name='name'
                    placeholder='Nome da categoria, Ex: Pizzas'
                    required
                    className={styles.input}
                />

                <Button name='Cadastrar'/>
    
            </form>
        </main>
    )
}