import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col m:flex-wrapp">
      <h1 className="head_text text-center">
        Descubra & Compartilhe
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> 
          Prompts Powred de IA 
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI promping 
        tool for modern wolrd to discover, create and share 
        creative prompts
      </p>

      {/* Feed Componente */}

      <Feed />
    </section>
  )
}

export default Home