//"use client" // --> redenrizado do lado do cliente
import logoImg from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.scss'
import { Handlee } from 'next/font/google'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'

export default function Signup(){

   async function handleRegister(formData: FormData){
        "use server" // --> redenrizado do lado do servidor
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
      
        if (name === "" || email === "" || password === ""){
            console.log("Preencha todos os campos")
            return;
        }

        try{
            await api.post("/users", {
                name,
                email,
                password
            })
        }catch(err){
            console.log("error")
            console.log(err)
        }

        redirect("/")
    }


    return(
        <>
            <div className={styles.containerCenter}>
                <Image
                    src={logoImg}
                     alt="Logo da pizzaria"
                />

                <section className={styles.Login}>
                    <h1>Criando uma conta</h1>
                    <form action={handleRegister}>
                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Digite seu nome"
                            className={styles.input}
                        />

                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Digite seu email..."
                            className={styles.input}
                        />


                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="Cadastre sua senha"
                            className={styles.input}
                        />

                        <button type="submit" className={styles.button}>
                            Cadastrar
                        </button>

                    </form>

                    <Link href="/" className={styles.text}>

                        Já possui uma conta? Faça seu login
                    </Link>

                </section>

            </div>
        </>
    )
}