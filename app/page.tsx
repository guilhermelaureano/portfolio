import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function Home() {
  const urlGitHub = "https://github.com/guilhermelaureano";
  const urlLinkedin = "https://www.linkedin.com/in/guilhermelaureano/";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>guilaureano.dev.br</h1>

      <p className="max-w-5xl text-center break-words pt-6 xl:pt-8">
        Este portifólio está em desenvolvemento, mas enquanto isso você pode dar
        uma olhada no meu GitHub ou entre em contato comigo atráves do Linkdin.
      </p>

      <div className="flex items-center justify-center gap-8 pt-6 xl:pt-8">
        <a href={urlGitHub} target="_blank">
          <GithubOutlined className="text-2xl hover:text-slate-500 text-slate-300" />
        </a>
        <a href={urlLinkedin} target="_blank">
          <LinkedinOutlined className="text-2xl hover:text-slate-500 text-slate-300" />
        </a>
      </div>
    </main>
  );
}
