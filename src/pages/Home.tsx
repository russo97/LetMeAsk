
import logoImg from '../assets/images/logo.svg';
import illustrationImg from '../assets/images/illustration.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home () {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo reall</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />

          <button>
            <img src={googleIconImg} alt="Google Icon" />
            Crie sua sala com o Google
          </button>

          <div>ou entre em uma sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
