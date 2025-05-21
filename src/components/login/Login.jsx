// Importando os estilos do aquivo SCSS, eu usei o Sass
import s from './login.module.scss'

// Importando ícones de usuário e cadeado da biblioteca react-icons -> comando npm install react-icons
import { FaUser, FaLock } from 'react-icons/fa'

// Biblioteca de alertas bonitos e interativos, que foi usado na parte para validar o login. tem que instalar o pacote com o comando -> npm install sweetalert2 e depois importar
import Swal from 'sweetalert2'

import GirlsCodam from '../../assets/GirlsCodam.png'

function Login() {

    // Função que trata o envio do formulário
    function handleLogin(e) {
        e.preventDefault() // Evita o comportamento padrão de recarregar a página

        // Captura os valores do formulário
        const form = e.target
        const email = form.email.value.trim()
        const password = form.password.value.trim()

        // Expressão regular para validar formato de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        // Verifica se os campos estão vazios
        if (!email || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos obrigatórios',
                text: 'Por favor, preencha todos os campos.',
            })
            return
        }

        // Verifica se o e-mail é válido
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'E-mail inválido',
                text: 'Digite um e-mail válido, tipo: exemplo@hotmail.com',
            })
            return
        }

        // Exibe um alerta de carregamento
        Swal.fire({
            title: 'Entrando...',
            allowOutsideClick: false, // Impede que o usuário feche o alerta clicando fora
            didOpen: () => {
                Swal.showLoading() // Mostra o indicador de carregamento
            },
        })

         // Simula uma chamada assíncrona, como se fosse uma API real
        setTimeout(() => {
            Swal.close() // Fecha o alerta de carregamento
            Swal.fire({
                icon: 'success',
                title: 'Login realizado!',
                text: `Seja bem-vindo(a) 😁, ${email}`, // Mensagem personalizada com o e-mail, fiquem a vontade para alterar e colocar outras mensagens :D
            })
        }, 1500)
    }


    return (
        <div className={s.container}> {/* Container principal com layout de duas colunas */}
        
            {/* Lado esquerdo com a logo */}
            <section className={s.screenLeft}>
                <div className={s.logo}>
                    <img src={GirlsCodam} alt="Logo marca da GirlsCodam" />
                </div>
            </section>

            {/* Lado direito com o formulário de login */}
            <div className={s.screenRight}>
                <h2>Login</h2>

                {/* Formulário com envio controlado pela função handleLogin */}
                <form className={s.form} onSubmit={handleLogin}>

                    {/* Grupo do campo de e-mail */}
                    <section className={s.inputGroup}>
                        <FaUser className={s.icon} />
                        <input
                            type="email"
                            placeholder="Usuário ou E-mail"
                            name="email"
                            required
                            autoComplete="username"
                        />
                    </section>

                    {/* Grupo do campo de senha */}
                    <section className={s.inputGroup}>
                        <FaLock className={s.icon} />
                        <input
                            type="password"
                            placeholder="Senha"
                            name="password"
                            required
                            minLength={6}
                            autoComplete="current-password"
                        />
                    </section>

                    {/* Botão de login */}
                    <button type="submit" className={s.loginButton}>Entrar</button>

                    {/* Botão de registro (ainda sem funcionalidade de navegação) */}
                    <button type="button" className={s.registerButton}>Registrar-se</button>
                </form>

                {/* Link para recuperação de senha (ainda sem funcionalidade) */}
                <a href="#" className={s.forgot}>Esqueceu sua senha?</a>
            </div>
        </div>
    )
}

// Se necessário exporta o componente para ser usado em outras partes do projeto
export default Login
